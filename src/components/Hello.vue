<template>
  <div class="container">
    <l-map
      :zoom="14"
      :center="center"
    >
      <tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <!-- <geo-json
        v-for="feature in features"
        :geojson="feature"
        :options="{
          /*fillColor: 'none',*/
          color: 'gray',
        }"
      /> -->
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
        v-for="a in addrs"
        :latLng="a.location"
        :radius="20"
        :color="markerColor"
        :fillOpacity="1"
      >
        <tooltip :content="`${a.addr} (${a.distance}km)`"></tooltip>
      </l-circle>
    </l-map>
    <div class="stats">
      <table>
        <thead>
          <tr>
            <th>範圍</th>
            <th>戶數</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(count, i) in counts">
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
import { feature as topoJsonFeature } from 'topojson';
import 'leaflet/dist/leaflet.css';

import getDistanceFromLatLngInKm from '@/utils/getDistanceFromLatLngInKm';
import addres from '@/assets/hopu-addr.json';
import banCiao from '@/assets/ban-ciao.json';
import tuCheng from '@/assets/tu-cheng.json';
// import zongHe from '@/assets/zong-he.json';

const getFeatures = data => topoJsonFeature(data, data.objects.map).features;
const features = [
  banCiao,
  tuCheng,
  // zongHe,
].map(getFeatures);

const center = {
  lat: 25.0028981,
  lng: 121.4620873,
};

const addrs = addres.map(addr => ({
  ...addr,
  distance: getDistanceFromLatLngInKm(addr.location, center),
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
  data() {
    return {
      center,
      addrs,
      features,
      radiusColor: '#9fa0a0',
      markerColor: '#036EB8',
      counts,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100vh;
  position: relative;
}

.stats {
  position: absolute;
  bottom: 2em;
  left: 2em;
  padding: 1em;
  background: white;
  z-index: 9999;
}

.stats td {
  padding: 0.5em;
}
</style>
