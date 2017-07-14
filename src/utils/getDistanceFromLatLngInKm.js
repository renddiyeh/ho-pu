
/*
 * from http://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
 */

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export default function getDistanceFromLatLngInKm(x, y) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(y.lat - x.lat);  // deg2rad below
  const dLng = deg2rad(y.lng - x.lng);
  const a =
    (Math.sin(dLat / 2) * Math.sin(dLat / 2)) +
    (Math.cos(deg2rad(x.lat)) * Math.cos(deg2rad(y.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2))
    ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = Number(R * c); // Distance in km
  return d.toFixed(2);
}
