<template>
  <div :class="className">
    <l-map
      :zoom="zoom"
      :center="center"
      ref="map"
    >
      <tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <l-circle
        :latLng="center"
        :radius="3000"
        :opacity="0.5"
        :color="radiusColor"
      />
      <l-circle
        :latLng="center"
        :radius="2000"
        :opacity="0.5"
        :color="radiusColor"
      />
      <l-circle
        :latLng="center"
        :radius="1000"
        :opacity="0.5"
        :color="radiusColor"
      >
      </l-circle>
      <l-circle
        v-for="(a, i) in addrs"
        :latLng="a.location"
        :radius="+dotSize"
        :color="markerColor"
        :fillOpacity="1"
        :key="`marker-${i}`"
      >
        <tooltip :content="`${a.name}(${a.distance}km)`"></tooltip>
      </l-circle>
      <l-marker :latLng="center" :icon="mainChurch" />
      <l-marker :latLng="xinPu" :icon="subChurch" />
      <l-marker :latLng="banCiao" :icon="subChurch" />
      <l-marker :latLng="trainStation" :icon="stationIcon" />
    </l-map>
    <h1 class="title">後埔教會信徒分佈圖</h1>
    <div class="stats">
      <table>
        <thead>
          <tr>
            <th>範圍</th>
            <th>戶數</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(count, i) in counts" :key="`count-${i}`">
            <td>{{ count.distance === Infinity ? `超過${counts[i -1].distance}km` : `${count.distance}km以內` }}</td>
            <td>{{ count.count }}戶</td>
          </tr>
          <tr>
            <td>全部合計</td>
            <td>{{addrs.length}}戶</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  Map as LMap,
  GeoJSON as GeoJson,
  TileLayer,
  Marker as LMarker,
  LCircle,
  Tooltip,
} from 'vue2-leaflet';
import { icon, divIcon, marker, control } from 'leaflet';
// import { feature as topoJsonFeature } from 'topojson';
import 'leaflet/dist/leaflet.css';

import getDistanceFromLatLngInKm from '@/utils/getDistanceFromLatLngInKm';
import addres from '@/assets/hopu-addr.json';
// import region from '@/assets/region.geo.json';
// import banCiao from '@/assets/ban-ciao.json';
// import tuCheng from '@/assets/tu-cheng.json';
// import zongHe from '@/assets/zong-he.json';
import logo from '@/assets/tjc.png';
import orangeMarker from '@/assets/orange-marker.png';
import blueMarker from '@/assets/blue-marker.png';
import darkBlueMarker from '@/assets/dark-blue-marker.png';

const printMode = 0;

const iconSize = printMode ? 150 : 50;

const iconBase = {
  iconSize: [iconSize, iconSize],
  iconAnchor: [iconSize / 2, iconSize],
};

const church = icon({
  iconUrl: logo,
  ...iconBase,
});

const mainChurch = icon({
  iconUrl: orangeMarker,
  ...iconBase,
});

const subChurch = icon({
  iconUrl: blueMarker,
  ...iconBase,
});

const stationIcon = icon({
  iconUrl: darkBlueMarker,
  ...iconBase,
});

// const getFeatures = data => topoJsonFeature(data, data.objects.map).features;
// const features = [
//   banCiao,
//   tuCheng,
//   // zongHe,
// ].map(getFeatures);

const center = {
  lat: 25.0028981,
  lng: 121.4620873,
};

const banCiao = { lat: 25.0038584, lng: 121.4467831 };
const xinPu = { lat: 25.0271856, lng: 121.4644488 };
const trainStation = { lat: 25.0143879, lng: 121.4613382 };

const addrs = addres.map(({ lat, lng, ...addr }) => ({
  ...addr,
  location: {
    lat,
    lng,
  },
  distance: getDistanceFromLatLngInKm({
    lat,
    lng,
  }, center),
}));

const counts = [1, 2, 3, Infinity].map(distance => ({
  distance,
  count: addrs.filter(a => a.distance <= distance).length,
})).map((value, i, array) => ({
  ...value,
  count: i ? value.count - array[i - 1].count : value.count,
}));

export default {
  name: 'hello',
  components: {
    LMap,
    GeoJson,
    TileLayer,
    LCircle,
    Tooltip,
    LMarker,
  },
  mounted() {
    const mapComponent = this.$refs.map;
    const { mapObject } = mapComponent;
    const labelBase = {
      className: 'map-label',
      iconSize: [iconSize * 5, iconSize],
      iconAnchor: [iconSize * 2.5, -iconSize / 20],
    };

    control.scale({
      metric: true,
      imperial: false,
      maxWidth: printMode ? 2000 : 250,
      position: 'bottomright',
    }).addTo(mapObject);

    marker(center, {
      icon: divIcon({
        ...labelBase,
        html: '後埔教會',
      }),
    }).addTo(mapObject);
    marker(banCiao, {
      icon: divIcon({
        ...labelBase,
        html: `板橋教會<br>(${getDistanceFromLatLngInKm(center, banCiao)}km)`,
      }),
    }).addTo(mapObject);
    marker(xinPu, {
      icon: divIcon({
        ...labelBase,
        html: `新埔教會<br>(${getDistanceFromLatLngInKm(center, xinPu)}km)`,
      }),
    }).addTo(mapObject);
    marker(trainStation, {
      icon: divIcon({
        ...labelBase,
        html: `板橋火車站<br>(${getDistanceFromLatLngInKm(center, trainStation)}km)`,
      }),
    }).addTo(mapObject);
  },
  data() {
    return {
      center,
      addrs,
      className: printMode ? 'print' : 'container',
      zoom: printMode ? 18 : 15,
      // region,
      church,
      radiusColor: '#9fa0a0',
      polygonColor: '#E2513B',
      markerColor: '#036EB8',
      lightBlue: '#13B0CA',
      counts,
      showGeoJson: true,
      showRadius: true,
      dotSize: printMode ? 30 : 20,
      // features,
      banCiao,
      xinPu,
      trainStation,
      mainChurch,
      subChurch,
      stationIcon,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.zoom {
  transform: scale(0.075, 0.075);
  transform-origin: 0 0;
}

.container {
  height: 100vh;
  width: 100%;
  position: relative;
}

.print {
  height: 14030px;
  width: 9922px;
  position: relative;
}

.stats {
  position: absolute;
  bottom: 16px;
  left: 16px;
  padding: 1em;
  background: white;
  z-index: 9999;
}

.print .stats {
  bottom: 200px;
  left: 200px;
  font-size: 150px;
}

.map-label {
  font-size: 16px;
  text-align: center;
}

.print .map-label {
  font-size: 150px;
}

.stats td {
  padding: 0.5em;
}

.title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1000;
  letter-spacing: 0.25em;
  margin-left: -0.25em;
}

.print .title {
  font-size: 400px;
}

.print .leaflet-control-scale-line {
  line-height: 1.5;
  padding: 20px 50px 10px;
  font-size: 100px;
  border-width: 16px;
}

.print .leaflet-right .leaflet-control {
  margin-right: 200px;
}

.print .leaflet-bottom .leaflet-control-scale {
  margin-bottom: 200px;
}

</style>
