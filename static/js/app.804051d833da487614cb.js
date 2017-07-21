webpackJsonp([1],[,,,,,,,,,,,,function(e,o,n){"use strict";var t=n(0),a=n(55),r=n(52),p=n.n(r);t.default.use(a.a),o.a=new a.a({routes:[{path:"/",name:"Hello",component:p.a}]})},function(e,o,n){function t(e){n(48)}var a=n(11)(n(16),n(53),t,null,null);e.exports=a.exports},function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n(0),a=n(13),r=n.n(a),p=n(12);t.default.config.productionTip=!1,new t.default({el:"#app",router:p.a,template:"<App/>",components:{App:r.a}})},function(e,o,n){"use strict";function t(e){return e*(Math.PI/180)}function a(e,o){var n=t(o.lat-e.lat),a=t(o.lng-e.lng),r=Math.sin(n/2)*Math.sin(n/2)+Math.cos(t(e.lat))*Math.cos(t(o.lat))*Math.sin(a/2)*Math.sin(a/2),p=2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r));return Number(6371*p).toFixed(2)}o.a=a},function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"app"}},function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n(19),a=n.n(t),r=n(57),p=(n.n(r),n(10)),i=(n.n(p),n(50)),l=(n.n(i),n(47)),s=(n.n(l),n(15)),c=n(60),y=n.n(c),m=n(59),g=n.n(m),d=n(61),P=n.n(d),u=n(51),f=n.n(u),v=n.i(p.icon)({iconUrl:f.a,iconSize:[50,50]}),_=function(e){return n.i(i.feature)(e,e.objects.map).features},h=[g.a,P.a].map(_),M={lat:25.0028981,lng:121.4620873},b=y.a.map(function(e){return a()({},e,{distance:n.i(s.a)(e.location,M)})}),x=[1,2,3,1/0].map(function(e){return{distance:e,count:b.filter(function(o){return o.distance<=e}).length}}).map(function(e,o,n){return a()({},e,{count:o?e.count-n[o-1].count:e.count})});o.default={name:"hello",components:{LMap:r.Map,GeoJson:r.GeoJSON,TileLayer:r.TileLayer,LCircle:r.LCircle,Tooltip:r.Tooltip,LMarker:r.Marker},data:function(){return{center:M,addrs:b,features:h,church:v,radiusColor:"#9fa0a0",markerColor:"#036EB8",counts:x,showGeoJson:!0,showRadius:!0,dotSize:20}},methods:{onEachFeature:function(e,o){console.log(o.getBounds().getCenter())}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,o){},function(e,o){},function(e,o){},,function(e,o,n){e.exports=n.p+"static/img/tjc.4fc94b6.png"},function(e,o,n){function t(e){n(49)}var a=n(11)(n(17),n(54),t,"data-v-5a05ef54",null);e.exports=a.exports},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"container"},[n("l-map",{attrs:{zoom:14,center:e.center}},[n("tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),e._v(" "),e._l(e.features,function(o,t){return n("geo-json",{key:"feature-"+t,attrs:{geojson:o,options:{color:e.radiusColor}}})}),e._v(" "),n("l-circle",{attrs:{latLng:e.center,radius:3e3,opacity:.5,color:e.radiusColor}}),e._v(" "),n("l-circle",{attrs:{latLng:e.center,radius:2e3,opacity:.5,color:e.radiusColor}}),e._v(" "),n("l-circle",{attrs:{latLng:e.center,radius:1e3,opacity:.5,color:e.radiusColor}}),e._v(" "),e._l(e.addrs,function(o,t){return n("l-circle",{key:"marker-"+t,attrs:{latLng:o.location,radius:+e.dotSize,color:e.markerColor,fillOpacity:1}},[n("tooltip",{attrs:{content:o.name+"("+o.distance+"km)"}})],1)}),e._v(" "),n("l-marker",{attrs:{latLng:e.center,icon:e.church}},[n("tooltip",{attrs:{content:"後埔教會"}})],1)],2),e._v(" "),n("div",{staticClass:"stats"},[n("table",[e._m(0),e._v(" "),n("tbody",[e._l(e.counts,function(o,t){return n("tr",{key:"count-"+t},[n("td",[e._v(e._s(o.distance===1/0?"超過"+e.counts[t-1].distance+"km":o.distance+"km以內"))]),e._v(" "),n("td",[e._v(e._s(o.count)+"戶")])])}),e._v(" "),n("tr",[n("td",[e._v("全部合計")]),e._v(" "),n("td",[e._v(e._s(e.addrs.length)+"戶")])])],2)])]),e._v(" "),n("div",{staticClass:"settings"},[n("div",{},[n("label",{attrs:{for:"radius"}},[e._v("Dot Size")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.dotSize,expression:"dotSize"}],attrs:{type:"range",id:"dotSize",min:"10",max:"70"},domProps:{value:e.dotSize},on:{__r:function(o){e.dotSize=o.target.value}}})])])],1)},staticRenderFns:[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("thead",[n("tr",[n("th",[e._v("範圍")]),e._v(" "),n("th",[e._v("戶數")])])])}]}},,,,,function(e,o){e.exports={type:"Topology",bbox:[121.42456622400005,24.972083534000035,121.48891208000009,25.03983693400005],transform:{scale:[3610878563414444e-20,3212584163111193e-20],translate:[121.42456622400005,24.972083534000035]},arcs:[[[182,575],[-48,-85]],[[134,490],[-7,6]],[[127,496],[-87,72]],[[40,568],[53,46]],[[93,614],[89,-39]],[[675,1442],[155,-42]],[[830,1400],[6,-58]],[[836,1342],[-51,21],[-38,-55]],[[747,1308],[7,-28]],[[754,1280],[-15,-1]],[[739,1279],[-64,163]],[[931,1559],[32,-26]],[[963,1533],[-104,-26]],[[859,1507],[20,59]],[[879,1566],[12,13]],[[891,1579],[40,-20]],[[1066,1635],[12,-20]],[[1078,1615],[-23,-112]],[[1055,1503],[-52,94]],[[1003,1597],[63,38]],[[1226,1799],[60,-48]],[[1286,1751],[-28,-57]],[[1258,1694],[-9,-18]],[[1249,1676],[-102,31]],[[1147,1707],[-15,34]],[[1132,1741],[94,58]],[[910,1761],[46,-52]],[[956,1709],[15,-29]],[[971,1680],[17,-55]],[[988,1625],[-44,-26]],[[944,1599],[-50,110]],[[894,1709],[-89,156]],[[805,1865],[37,29]],[[842,1894],[68,-133]],[[1332,1691],[-47,-86]],[[1285,1605],[-70,3]],[[1215,1608],[34,68]],[[1258,1694],[74,-3]],[[1625,1438],[3,-13]],[[1628,1425],[-33,-31],[-81,8]],[[1514,1402],[0,34]],[[1514,1436],[111,2]],[[1514,1378],[-3,-44]],[[1511,1334],[-4,-52]],[[1507,1282],[-53,11]],[[1454,1293],[60,85]],[[1353,1353],[66,-82]],[[1419,1271],[-12,-8]],[[1407,1263],[-95,68]],[[1312,1331],[41,22]],[[1096,1102],[18,-64]],[[1114,1038],[-72,-11]],[[1042,1027],[-13,73]],[[1029,1100],[67,2]],[[916,1073],[34,-92]],[[950,981],[-36,10]],[[914,991],[-28,43]],[[886,1034],[30,39]],[[182,575],[37,-17]],[[219,558],[53,-24],[156,-33]],[[428,501],[-74,-130]],[[354,371],[-131,48],[15,44],[-104,27]],[[298,863],[-2,-41]],[[296,822],[-2,-93],[161,-32]],[[455,697],[11,-71]],[[466,626],[-38,-125]],[[219,558],[28,149],[-48,65],[1,74]],[[200,846],[98,17]],[[747,1308],[63,-12]],[[810,1296],[10,-34]],[[820,1262],[-51,-37]],[[769,1225],[-15,55]],[[906,1379],[100,-43]],[[1006,1336],[-43,-48]],[[963,1288],[-66,86]],[[897,1374],[9,5]],[[1086,1681],[55,-62]],[[1141,1619],[-12,-62]],[[1129,1557],[-51,58]],[[1066,1635],[20,46]],[[1070,1745],[2,-5]],[[1072,1740],[-101,-60]],[[956,1709],[51,36]],[[1007,1745],[63,0]],[[1450,1828],[17,-30]],[[1467,1798],[21,-46]],[[1488,1752],[-88,-13]],[[1400,1739],[-44,34]],[[1356,1773],[94,55]],[[1505,1827],[44,-58]],[[1549,1769],[-23,-24]],[[1526,1745],[-38,7]],[[1467,1798],[38,29]],[[1589,1339],[16,-40]],[[1605,1299],[-98,-17]],[[1511,1334],[78,5]],[[1306,1552],[64,-43]],[[1370,1509],[-49,-39]],[[1321,1470],[-31,-24]],[[1290,1446],[-40,62]],[[1250,1508],[56,44]],[[1380,1246],[-19,-6]],[[1361,1240],[-108,-11]],[[1253,1229],[84,50],[43,-33]],[[1084,742],[97,-112],[-40,-64]],[[1141,566],[-74,70]],[[1067,636],[-4,83]],[[1063,719],[21,23]],[[354,371],[-72,-104],[6,-62],[-32,-97],[-139,-108],[-58,27],[12,163],[-31,38],[15,145],[-27,41]],[[28,414],[99,82]],[[635,1229],[-38,-97]],[[597,1132],[-50,9]],[[547,1141],[41,96]],[[588,1237],[47,-8]],[[388,1256],[200,-19]],[[547,1141],[-11,-136]],[[536,1005],[-197,21]],[[339,1026],[4,86],[45,144]],[[830,1219],[50,-56]],[[880,1163],[-3,-56]],[[877,1107],[-58,32]],[[819,1139],[11,80]],[[880,1163],[24,-1]],[[904,1162],[34,-61]],[[938,1101],[-20,-26]],[[918,1075],[-41,32]],[[854,1225],[54,-59]],[[908,1166],[-4,-4]],[[830,1219],[4,1]],[[834,1220],[20,5]],[[963,1288],[21,-26]],[[984,1262],[-76,-96]],[[854,1225],[20,17]],[[874,1242],[89,46]],[[1033,1222],[-46,-59]],[[987,1163],[-49,-62]],[[984,1262],[49,-40]],[[769,1225],[24,-88]],[[793,1137],[34,-76],[59,-27]],[[886,1034],[-48,-39]],[[838,995],[-55,-11]],[[783,984],[0,6]],[[783,990],[-44,289]],[[918,1075],[-2,-2]],[[793,1137],[26,2]],[[844,1495],[11,-27]],[[855,1468],[24,-57]],[[879,1411],[2,-7]],[[881,1404],[16,-30]],[[874,1242],[-28,94]],[[846,1336],[-10,6]],[[830,1400],[14,95]],[[686,1567],[125,-73],[20,32]],[[831,1526],[13,-31]],[[675,1442],[11,125]],[[894,1709],[-41,-24],[-4,-73],[42,-33]],[[879,1566],[-48,-40]],[[686,1567],[-97,30]],[[589,1597],[82,126],[134,142]],[[834,1220],[-14,42]],[[810,1296],[36,40]],[[1010,1455],[9,-11]],[[1019,1444],[-3,-6]],[[1016,1438],[-135,-34]],[[879,1411],[11,33],[120,11]],[[859,1507],[9,-31]],[[868,1476],[-13,-8]],[[990,1502],[-122,-26]],[[963,1533],[27,-31]],[[1e3,1489],[10,-34]],[[990,1502],[10,-13]],[[906,1379],[100,14]],[[1006,1393],[0,-57]],[[1016,1438],[-10,-45]],[[1098,1420],[-114,-158]],[[1019,1444],[79,-24]],[[1055,1503],[73,-41]],[[1128,1462],[-30,-42]],[[1e3,1489],[55,14]],[[1144,1484],[92,-81]],[[1236,1403],[-18,-15]],[[1218,1388],[-50,-37]],[[1168,1351],[-135,-129]],[[1128,1462],[16,22]],[[988,1625],[15,-28]],[[931,1559],[13,40]],[[1129,1557],[51,-18]],[[1180,1539],[-18,-30]],[[1162,1509],[-18,-25]],[[1253,1416],[-17,-13]],[[1162,1509],[80,-40],[11,-53]],[[1180,1539],[70,-31]],[[1290,1446],[-37,-30]],[[1184,1626],[19,-40]],[[1203,1586],[-23,-47]],[[1141,1619],[43,7]],[[1285,1605],[45,-8]],[[1330,1597],[-24,-45]],[[1203,1586],[12,22]],[[1282,1849],[39,-49]],[[1321,1800],[-35,-49]],[[1226,1799],[-62,65]],[[1164,1864],[61,20],[57,-35]],[[1061,1897],[34,-56],[69,23]],[[1132,1741],[-45,98]],[[1087,1839],[-26,58]],[[1304,2095],[2,-82],[47,-112],[-71,-52]],[[1061,1897],[-43,111]],[[1018,2008],[129,58],[157,29]],[[1184,1626],[-37,81]],[[1087,1839],[-41,-37]],[[1046,1802],[-64,-29]],[[982,1773],[-72,-12]],[[842,1894],[176,114]],[[1046,1802],[30,-56]],[[1076,1746],[-6,-1]],[[1007,1745],[-25,28]],[[1072,1740],[14,-59]],[[1132,1741],[-56,5]],[[1423,1861],[27,-33]],[[1356,1773],[-35,27]],[[1321,1800],[38,47]],[[1359,1847],[64,14]],[[1630,1981],[-66,2]],[[1564,1983],[-109,-18],[-96,-118]],[[1304,2095],[187,14],[194,-19],[-55,-109]],[[1526,1745],[31,-45]],[[1557,1700],[-96,-52]],[[1461,1648],[-61,91]],[[1372,1598],[-42,-1]],[[1332,1691],[63,-32],[-23,-61]],[[1461,1648],[-67,-48]],[[1394,1600],[-22,-2]],[[1495,1842],[10,-15]],[[1423,1861],[34,25]],[[1457,1886],[38,-44]],[[1564,1983],[-21,-47]],[[1543,1936],[-86,-50]],[[1543,1936],[-48,-94]],[[1630,1981],[44,-158]],[[1674,1823],[-125,-54]],[[1697,1772],[-140,-72]],[[1674,1823],[23,-51]],[[1728,1720],[-139,-39]],[[1589,1681],[-48,-61],[21,-88]],[[1562,1532],[-48,-27]],[[1514,1505],[-31,95]],[[1483,1600],[-22,48]],[[1697,1772],[31,-52]],[[1589,1681],[13,-92],[45,-45]],[[1647,1544],[-28,-18]],[[1619,1526],[-57,6]],[[1781,1604],[-134,-60]],[[1728,1720],[53,-116]],[[1656,1353],[-28,72]],[[1625,1438],[-6,88]],[[1781,1604],[1,-227],[-126,-24]],[[1514,1436],[0,15]],[[1514,1451],[0,54]],[[1656,1353],[-67,-14]],[[1514,1378],[0,24]],[[1453,1295],[1,-2]],[[1605,1299],[-47,-68],[-65,-13]],[[1493,1218],[-74,53]],[[1419,1271],[34,24]],[[1493,1218],[-59,1],[-116,-126]],[[1318,1093],[-24,54]],[[1294,1147],[67,93]],[[1380,1246],[27,17]],[[1453,1295],[30,61],[-24,55]],[[1459,1411],[36,26]],[[1495,1437],[19,14]],[[1321,1470],[42,-23]],[[1363,1447],[32,-57]],[[1395,1390],[-87,-27],[-72,40]],[[1448,1508],[47,-71]],[[1459,1411],[-1,0]],[[1458,1411],[-63,-21]],[[1363,1447],[85,61]],[[1394,1600],[32,-46]],[[1426,1554],[-56,-45]],[[1483,1600],[-57,-46]],[[1448,1508],[-22,46]],[[1219,1282],[34,-53]],[[1294,1147],[-152,-13]],[[1142,1134],[-30,-10]],[[1112,1124],[-16,-22]],[[1029,1100],[-10,7]],[[1019,1107],[69,106],[131,69]],[[1218,1388],[94,-57]],[[1312,1331],[-93,-49]],[[1219,1282],[-51,69]],[[1458,1411],[-105,-58]],[[1019,1107],[-16,44]],[[1003,1151],[-16,12]],[[1142,1134],[142,-57]],[[1284,1077],[-81,-69]],[[1203,1008],[-14,87],[-77,29]],[[1318,1093],[-34,-16]],[[1203,1008],[-2,-10]],[[1201,998],[-87,40]],[[1201,998],[-48,-60]],[[1153,938],[-81,4]],[[1072,942],[-30,85]],[[1042,1027],[-66,-11]],[[976,1016],[-12,74],[39,61]],[[1072,942],[-12,-20]],[[1060,922],[-117,-40]],[[943,882],[38,87],[-5,47]],[[943,882],[-11,-24]],[[932,858],[-34,-83]],[[898,775],[-1,-3]],[[897,772],[-19,-17]],[[878,755],[-2,-1]],[[876,754],[-27,10],[36,123],[-17,24]],[[868,911],[40,1],[42,69]],[[1153,938],[9,-56],[-53,-106]],[[1109,776],[-18,38]],[[1091,814],[-31,108]],[[1091,814],[-80,13]],[[1011,827],[-79,31]],[[1109,776],[-25,-34]],[[1063,719],[-92,-23]],[[971,696],[-68,-13]],[[903,683],[-6,89]],[[898,775],[88,19],[25,33]],[[1067,636],[-51,64],[-45,-4]],[[1141,566],[-132,-32],[-23,46]],[[986,580],[-83,103]],[[914,991],[-68,-59]],[[846,932],[-8,63]],[[868,911],[-22,21]],[[841,738],[-52,-149],[-90,62]],[[699,651],[142,87]],[[876,754],[-35,-16]],[[699,651],[-157,-59],[-76,34]],[[455,697],[74,-17],[99,63]],[[628,743],[44,34],[106,140],[5,67]],[[986,580],[-89,28],[-19,147]],[[783,990],[-66,4]],[[717,994],[-96,8]],[[621,1002],[-58,1]],[[563,1003],[34,129]],[[635,1229],[40,213]],[[388,1256],[113,175],[88,166]],[[563,1003],[-27,2]],[[628,743],[-117,97]],[[511,840],[5,24]],[[516,864],[40,1]],[[556,865],[43,-17],[44,106],[74,40]],[[621,1002],[-65,-137]],[[516,864],[13,51]],[[529,915],[34,88]],[[296,822],[159,1],[56,17]],[[529,915],[-196,-6]],[[333,909],[6,117]],[[298,863],[35,46]],[[93,614],[83,138],[24,94]],[[28,414],[-28,95],[40,59]]],objects:{map:{type:"GeometryCollection",geometries:[{arcs:[[0,1,2,3,4]],type:"Polygon",properties:{id:"6500100-100",name:"溪北里"}},{arcs:[[5,6,7,8,9,10]],type:"Polygon",properties:{id:"6500100-101",name:"香雅里"}},{arcs:[[11,12,13,14,15]],type:"Polygon",properties:{id:"6500100-102",name:"新生里"}},{arcs:[[16,17,18,19]],type:"Polygon",properties:{id:"6500100-103",name:"文德里"}},{arcs:[[20,21,22,23,24,25]],type:"Polygon",properties:{id:"6500100-104",name:"文化里"}},{arcs:[[26,27,28,29,30,31,32,33]],type:"Polygon",properties:{id:"6500100-105",name:"新海里"}},{arcs:[[34,35,36,-23,37]],type:"Polygon",properties:{id:"6500100-106",name:"莒光里"}},{arcs:[[38,39,40,41]],type:"Polygon",properties:{id:"6500100-107",name:"富貴里"}},{arcs:[[42,43,44,45]],type:"Polygon",properties:{id:"6500100-108",name:"正泰里"}},{arcs:[[46,47,48,49]],type:"Polygon",properties:{id:"6500100-109",name:"民生里"}},{arcs:[[50,51,52,53]],type:"Polygon",properties:{id:"6500100-110",name:"後埔里"}},{arcs:[[54,55,56,57]],type:"Polygon",properties:{id:"6500100-111",name:"華福里"}},{arcs:[[58,59,60,61,-1]],type:"Polygon",properties:{id:"6500100-112",name:"堂春里"}},{arcs:[[62,63,64,65,-60,66,67]],type:"Polygon",properties:{id:"6500100-113",name:"成和里"}},{arcs:[[68,69,70,71,-9]],type:"Polygon",properties:{id:"6500100-114",name:"光榮里"}},{arcs:[[72,73,74,75]],type:"Polygon",properties:{id:"6500100-115",name:"民安里"}},{arcs:[[76,77,78,-17,79]],type:"Polygon",properties:{id:"6500100-116",name:"陽明里"}},{arcs:[[80,81,-28,82,83]],type:"Polygon",properties:{id:"6500100-117",name:"朝陽里"}},{arcs:[[84,85,86,87,88]],type:"Polygon",properties:{id:"6500100-118",name:"松柏里"}},{arcs:[[89,90,91,-86,92]],type:"Polygon",properties:{id:"6500100-119",name:"文聖里"}},{arcs:[[93,94,-44,95]],type:"Polygon",properties:{id:"6500100-120",name:"居仁里"}},{arcs:[[96,97,98,99,100]],type:"Polygon",properties:{id:"6500100-121",name:"莊敬里"}},{arcs:[[101,102,103]],type:"Polygon",properties:{id:"6500100-122",name:"東安里"}},{arcs:[[104,105,106,107]],type:"Polygon",properties:{id:"6500100-123",name:"五權里"}},{arcs:[[108,109,-2,-62]],type:"Polygon",properties:{id:"6500100-124",name:"溪福里"}},{arcs:[[110,111,112,113]],type:"Polygon",properties:{id:"6500100-125",name:"大觀里"}},{arcs:[[114,-113,115,116,117]],type:"Polygon",properties:{id:"6500100-126",name:"歡園里"}},{arcs:[[118,119,120,121]],type:"Polygon",properties:{id:"6500100-001",name:"留侯里"}},{arcs:[[122,123,124,125,-120]],type:"Polygon",properties:{id:"6500100-002",name:"流芳里"}},{arcs:[[126,127,-123,-119,128,129]],type:"Polygon",properties:{id:"6500100-003",name:"赤松里"}},{arcs:[[130,131,-127,132,133]],type:"Polygon",properties:{id:"6500100-004",name:"黃石里"}},{arcs:[[134,135,-124,-128,-132,136]],type:"Polygon",properties:{id:"6500100-005",name:"挹秀里"}},{arcs:[[-72,137,138,139,140,141,142,-10]],type:"Polygon",properties:{id:"6500100-006",name:"湳興里"}},{arcs:[[-121,-126,143,-58,-139,144]],type:"Polygon",properties:{id:"6500100-007",name:"新興里"}},{arcs:[[145,146,147,148,-75,-134,149,150,-7,151]],type:"Polygon",properties:{id:"6500100-008",name:"社後里"}},{arcs:[[152,153,-152,-6,154]],type:"Polygon",properties:{id:"6500100-009",name:"香社里"}},{arcs:[[-32,155,-15,156,-153,157,158]],type:"Polygon",properties:{id:"6500100-010",name:"中正里"}},{arcs:[[-150,-133,-130,159,-70,160]],type:"Polygon",properties:{id:"6500100-011",name:"自強里"}},{arcs:[[-151,-161,-69,-8]],type:"Polygon",properties:{id:"6500100-012",name:"自立里"}},{arcs:[[-160,-129,-122,-145,-138,-71]],type:"Polygon",properties:{id:"6500100-013",name:"光華里"}},{arcs:[[161,162,163,-148,164]],type:"Polygon",properties:{id:"6500100-014",name:"國光里"}},{arcs:[[-14,165,166,-146,-154,-157]],type:"Polygon",properties:{id:"6500100-015",name:"港尾里"}},{arcs:[[167,-166,-13,168]],type:"Polygon",properties:{id:"6500100-016",name:"金華里"}},{arcs:[[169,-165,-147,-167,-168,170]],type:"Polygon",properties:{id:"6500100-017",name:"港德里"}},{arcs:[[-73,171,172]],type:"Polygon",properties:{id:"6500100-018",name:"民權里"}},{arcs:[[173,-172,-76,-149,-164]],type:"Polygon",properties:{id:"6500100-019",name:"建國里"}},{arcs:[[174,-131,-74,-173,-174,-163,175]],type:"Polygon",properties:{id:"6500100-020",name:"漢生里"}},{arcs:[[176,177,-176,-162,-170,178]],type:"Polygon",properties:{id:"6500100-021",name:"公舘里"}},{arcs:[[179,180,181,182,-137,-175,-178,183]],type:"Polygon",properties:{id:"6500100-022",name:"新民里"}},{arcs:[[184,-19,-179,-171,-169,-12,185,-30]],type:"Polygon",properties:{id:"6500100-023",name:"幸福里"}},{arcs:[[-79,186,187,188,-184,-177,-18]],type:"Polygon",properties:{id:"6500100-024",name:"忠誠里"}},{arcs:[[189,-180,-189,190]],type:"Polygon",properties:{id:"6500100-025",name:"百壽里"}},{arcs:[[191,-100,192,-191,-188]],type:"Polygon",properties:{id:"6500100-026",name:"介壽里"}},{arcs:[[193,194,-187,-78,195]],type:"Polygon",properties:{id:"6500100-027",name:"新埔里"}},{arcs:[[196,197,-101,-192,-195,198,-36]],type:"Polygon",properties:{id:"6500100-028",name:"華江里"}},{arcs:[[199,200,-21,201,202]],type:"Polygon",properties:{id:"6500100-029",name:"江翠里"}},{arcs:[[203,-202,-26,204,205]],type:"Polygon",properties:{id:"6500100-030",name:"純翠里"}},{arcs:[[206,-203,-204,207,208]],type:"Polygon",properties:{id:"6500100-031",name:"溪頭里"}},{arcs:[[-37,-199,-194,209,-24]],type:"Polygon",properties:{id:"6500100-032",name:"聯翠里"}},{arcs:[[-208,-206,210,211,212,-34,213]],type:"Polygon",properties:{id:"6500100-033",name:"宏翠里"}},{arcs:[[214,215,-84,216,-212]],type:"Polygon",properties:{id:"6500100-034",name:"仁翠里"}},{arcs:[[-80,-20,-185,-29,-82,217]],type:"Polygon",properties:{id:"6500100-035",name:"新翠里"}},{arcs:[[-217,-83,-27,-213]],type:"Polygon",properties:{id:"6500100-036",name:"吉翠里"}},{arcs:[[-31,-186,-16,-156]],type:"Polygon",properties:{id:"6500100-037",name:"德翠里"}},{arcs:[[-205,218,-215,-211]],type:"Polygon",properties:{id:"6500100-038",name:"滿翠里"}},{arcs:[[-219,-25,-210,-196,-77,-218,-81,-216]],type:"Polygon",properties:{id:"6500100-039",name:"明翠里"}},{arcs:[[219,-89,220,221,222]],type:"Polygon",properties:{id:"6500100-040",name:"松翠里"}},{arcs:[[223,224,-222,-200,-207,225]],type:"Polygon",properties:{id:"6500100-041",name:"柏翠里"}},{arcs:[[-92,226,227,228,-87]],type:"Polygon",properties:{id:"6500100-042",name:"龍翠里"}},{arcs:[[229,-197,-35,230]],type:"Polygon",properties:{id:"6500100-043",name:"華翠里"}},{arcs:[[-221,-88,-229,231,232,-231,-38,-22,-201]],type:"Polygon",properties:{id:"6500100-044",name:"忠翠里"}},{arcs:[[233,-93,-85,-220,234,235]],type:"Polygon",properties:{id:"6500100-045",name:"嵐翠里"}},{arcs:[[236,237,-235,-223,-225]],type:"Polygon",properties:{id:"6500100-046",name:"文翠里"}},{arcs:[[238,-236,-238]],type:"Polygon",properties:{id:"6500100-047",name:"青翠里"}},{arcs:[[239,240,-90,-234,-239,-237,-224]],type:"Polygon",properties:{id:"6500100-048",name:"懷翠里"}},{arcs:[[241,-227,-91,-241,242]],type:"Polygon",properties:{id:"6500100-049",name:"福翠里"}},{arcs:[[243,244,245,246,247,-228,-242,248]],type:"Polygon",properties:{id:"6500100-050",name:"港嘴里"}},{arcs:[[249,250,251,-245]],type:"Polygon",properties:{id:"6500100-051",name:"振興里"}},{arcs:[[252,-250,-244,253]],type:"Polygon",properties:{id:"6500100-052",name:"振義里"}},{arcs:[[254,-39,255,-251,-253,256]],type:"Polygon",properties:{id:"6500100-053",name:"光復里"}},{arcs:[[-256,-42,257,258,-246,-252]],type:"Polygon",properties:{id:"6500100-054",name:"埔墘里"}},{arcs:[[-255,259,-96,-43,260,-40]],type:"Polygon",properties:{id:"6500100-055",name:"長壽里"}},{arcs:[[261,-45,-95,262,263,264]],type:"Polygon",properties:{id:"6500100-056",name:"福壽里"}},{arcs:[[-264,265,266,267,-102,268,-48]],type:"Polygon",properties:{id:"6500100-057",name:"海山里"}},{arcs:[[-258,-41,-261,-46,-262,269,270,271]],type:"Polygon",properties:{id:"6500100-058",name:"九如里"}},{arcs:[[272,273,274,-190,-193,-99]],type:"Polygon",properties:{id:"6500100-059",name:"玉光里"}},{arcs:[[275,-271,276,277,-274,278]],type:"Polygon",properties:{id:"6500100-060",name:"光仁里"}},{arcs:[[279,280,-97,-198,-230,-233]],type:"Polygon",properties:{id:"6500100-061",name:"埤墘里"}},{arcs:[[-248,281,-280,-232]],type:"Polygon",properties:{id:"6500100-062",name:"永安里"}},{arcs:[[-247,-259,-272,-276,282,-282]],type:"Polygon",properties:{id:"6500100-063",name:"雙玉里"}},{arcs:[[-283,-279,-273,-98,-281]],type:"Polygon",properties:{id:"6500100-064",name:"廣新里"}},{arcs:[[283,-103,-268,284,285,286,-54,287,288]],type:"Polygon",properties:{id:"6500100-065",name:"深丘里"}},{arcs:[[289,290,291,-182]],type:"Polygon",properties:{id:"6500100-066",name:"香丘里"}},{arcs:[[292,-50,-290,-181,-275,-278]],type:"Polygon",properties:{id:"6500100-067",name:"西安里"}},{arcs:[[-277,-270,-265,-47,-293]],type:"Polygon",properties:{id:"6500100-068",name:"東丘里"}},{arcs:[[-269,-104,-284,-291,-49]],type:"Polygon",properties:{id:"6500100-069",name:"長安里"}},{arcs:[[-292,-289,293,294,-135,-183]],type:"Polygon",properties:{id:"6500100-070",name:"福丘里"}},{arcs:[[295,296,297,-286]],type:"Polygon",properties:{id:"6500100-071",name:"福祿里"}},{arcs:[[-267,298,-296,-285]],type:"Polygon",properties:{id:"6500100-072",name:"民族里"}},{arcs:[[-298,299,300,-51,-287]],type:"Polygon",properties:{id:"6500100-073",name:"國泰里"}},{arcs:[[-301,301,302,303,-52]],type:"Polygon",properties:{id:"6500100-074",name:"福德里"}},{arcs:[[-294,-288,-53,304,305]],type:"Polygon",properties:{id:"6500100-075",name:"景星里"}},{arcs:[[-304,306,307,308,-305]],type:"Polygon",properties:{id:"6500100-076",name:"福星里"}},{arcs:[[-295,-306,-309,309,310,311,312,313,314,315,-55,-144,-125,-136]],type:"Polygon",properties:{id:"6500100-077",name:"鄉雲里"}},{arcs:[[316,317,318,-307,-303]],type:"Polygon",properties:{id:"6500100-078",name:"廣德里"}},{arcs:[[-319,319,320,-310,-308]],type:"Polygon",properties:{id:"6500100-079",name:"大豐里"}},{arcs:[[-318,321,-108,322,323,324,-312,325,-320]],type:"Polygon",properties:{id:"6500100-080",name:"重慶里"}},{arcs:[[-326,-311,-321]],type:"Polygon",properties:{id:"6500100-081",name:"仁愛里"}},{arcs:[[-107,326,-323]],type:"Polygon",properties:{id:"6500100-082",name:"和平里"}},{arcs:[[-106,327,328,-324,-327]],type:"Polygon",properties:{id:"6500100-083",name:"廣福里"}},{arcs:[[-57,329,330,-140]],type:"Polygon",properties:{id:"6500100-084",name:"華興里"}},{arcs:[[-56,-316,331,-330]],type:"Polygon",properties:{id:"6500100-085",name:"華貴里"}},{arcs:[[332,333]],type:"Polygon",properties:{id:"6500100-086",name:"華德里"}},{arcs:[[-332,-315,334,-334,335,-65,336,337,-141,-331]],type:"Polygon",properties:{id:"6500100-087",name:"華東里"}},{arcs:[[-325,-329,338,-313]],type:"Polygon",properties:{id:"6500100-088",name:"信義里"}},{arcs:[[-143,339,340,341,342,-111,343,-11]],type:"Polygon",properties:{id:"6500100-089",name:"浮洲里"}},{arcs:[[-155,-344,-114,-115,344,-158]],type:"Polygon",properties:{id:"6500100-090",name:"華中里"}},{arcs:[[-112,-343,345,-116]],type:"Polygon",properties:{id:"6500100-091",name:"僑中里"}},{arcs:[[-340,-142,-338,346,347,348,349]],type:"Polygon",properties:{id:"6500100-092",name:"中山里"}},{arcs:[[350,-349,351,352,-342]],type:"Polygon",properties:{id:"6500100-093",name:"復興里"}},{arcs:[[-350,-351,-341]],type:"Polygon",properties:{id:"6500100-094",name:"大安里"}},{arcs:[[-347,-337,-64,353]],type:"Polygon",properties:{id:"6500100-095",name:"福安里"}},{arcs:[[-117,-346,-353,354,355]],type:"Polygon",properties:{id:"6500100-096",name:"聚安里"}},{arcs:[[-352,-348,-354,-63,356,-355]],type:"Polygon",properties:{id:"6500100-097",name:"龍安里"}},{arcs:[[-67,-59,-5,357]],type:"Polygon",properties:{id:"6500100-098",name:"崑崙里"}},{arcs:[[-110,358,-3]],type:"Polygon",properties:{id:"6500100-099",name:"溪洲里"}}]}}}},function(e,o){e.exports=[{name:"梁孟霞",location:{lng:121.4683589,lat:25.0062104}},{name:"王世文",location:{lng:121.46989,lat:24.999819}},{name:"王美玉",location:{lng:121.4550675,lat:24.9851157}},{name:"蔡子淵",location:{lng:121.4766161,lat:25.0203988}},{name:"何三成",location:{lng:121.4613739,lat:24.9983282}},{name:"車嘉輝",location:{lng:121.4606055,lat:25.0082805}},{name:"林澤喜",location:{lng:121.4563776,lat:25.004783}},{name:"林麟生",location:{lng:121.4634132,lat:25.0007848}},{name:"林修平",location:{lng:121.4543419,lat:24.9948768}},{name:"林麗雯",location:{lng:121.4721831,lat:25.0081662}},{name:"林謝秀鑾",location:{lng:121.471869,lat:25.002531}},{name:"林大允",location:{lng:121.4572645,lat:25.0065868}},{name:"王秀貞",location:{lng:121.4512811,lat:24.9846798}},{name:"林秀華",location:{lng:121.4691974,lat:25.0076827}},{name:"張天恭",location:{lng:121.4674994,lat:25.0064402}},{name:"紀王鴛鴦",location:{lng:121.4565624,lat:25.0024362}},{name:"紀恩尚",location:{lng:121.463537,lat:24.9969139}},{name:"侯豐吉",location:{lng:121.463841,lat:24.992802}},{name:"侯志豪",location:{lng:121.451376,lat:24.9856898}},{name:"侯志輝",location:{lng:121.451376,lat:24.9856898}},{name:"侯玉桃",location:{lng:121.460336,lat:24.9909762}},{name:"施純真",location:{lng:121.4606055,lat:25.0082805}},{name:"胡良善",location:{lng:121.46871,lat:25.003118}},{name:"尤千裕",location:{lng:121.4635053,lat:25.0024583}},{name:"梁李秀卿",location:{lng:121.463378,lat:24.9854059}},{name:"徐忠英",location:{lng:121.4618538,lat:25.0000904}},{name:"徐陳阿娥",location:{lng:121.468183,lat:25.006686}},{name:"徐麗秀",location:{lng:121.468183,lat:25.006686}},{name:"唐煌棚",location:{lng:121.4656209,lat:24.9885476}},{name:"黃毓成",location:{lng:121.4623324,lat:24.9988541}},{name:"黃毓民",location:{lng:121.4616755,lat:25.0013196}},{name:"黃順良",location:{lng:121.4622851,lat:24.9992815}},{name:"黃志稜",location:{lng:121.4626734,lat:25.0068805}},{name:"黃遵守",location:{lng:121.4694,lat:25.005724}},{name:"黃惠民",location:{lng:121.4575593,lat:24.9935967}},{name:"黃王美蓮",location:{lng:121.4616755,lat:25.0013196}},{name:"陳政宏",location:{lng:121.460415,lat:25.008086}},{name:"陳怜伶",location:{lng:121.470082,lat:25.0041469}},{name:"陳順賢",location:{lng:121.4644836,lat:25.0007461}},{name:"陳美玲",location:{lng:121.4679626,lat:25.0013897}},{name:"林明哲",location:{lng:121.45113,lat:24.9936542}},{name:"陳金銘",location:{lng:121.4653143,lat:25.0001594}},{name:"陳明煌",location:{lng:121.4620871,lat:24.9988685}},{name:"曾琡媜",location:{lng:121.4615865,lat:25.0057072}},{name:"蕭綺蓁",location:{lng:121.4555703,lat:25.0159986}},{name:"曾陽輝",location:{lng:121.479985,lat:24.99644}},{name:"曾崇文 ",location:{lng:121.470054,lat:25.000894}},{name:"張廉成",location:{lng:121.4616755,lat:25.0013196}},{name:"張阿敏",location:{lng:121.468958,lat:25.003394}},{name:"張明麗",location:{lng:121.4696002,lat:25.0022614}},{name:"莊義雄",location:{lng:121.4628826,lat:24.9990868}},{name:"莊慶安",location:{lng:121.4628108,lat:25.0003282}},{name:"莊順秀",location:{lng:121.4619056,lat:24.9933943}},{name:"莊爐杰",location:{lng:121.468978,lat:25.001599}},{name:"游寶鳯",location:{lng:121.4815537,lat:25.0207523}},{name:"趙年英",location:{lng:121.4658534,lat:25.0038813}},{name:"唐珮玲",location:{lng:121.4638053,lat:25.0068662}},{name:"楊金鉉",location:{lng:121.461084,lat:25.0054919}},{name:"楊浩文",location:{lng:121.4643835,lat:24.9982684}},{name:"楊天從",location:{lng:121.4706747,lat:25.0020089}},{name:"廖維謙",location:{lng:121.463592,lat:25.0026089}},{name:"廖時津",location:{lng:121.456591,lat:25.00055}},{name:"廖淑玲",location:{lng:121.465298,lat:25.008763}},{name:"劉芳霞",location:{lng:121.468825,lat:24.992337}},{name:"劉雪飛",location:{lng:121.4783258,lat:25.0137329}},{name:"鄭源貴",location:{lng:121.4615713,lat:24.99661}},{name:"盧素芳",location:{lng:121.462675,lat:24.996253}},{name:"衡江伴",location:{lng:121.4652538,lat:24.996344}},{name:"蔡美玲",location:{lng:121.4685988,lat:25.0033112}},{name:"駱家鏞",location:{lng:121.4679526,lat:25.0002572}},{name:"薛秀枝",location:{lng:121.4704283,lat:25.0216022}},{name:"古陳綢",location:{lng:121.460153,lat:24.995496}},{name:"卓順風",location:{lng:121.471838,lat:25.027086}},{name:"林家聖",location:{lng:121.4621941,lat:24.9964535}},{name:"趙樓桂珍",location:{lng:121.4657734,lat:25.0038554}},{name:"吳紅珠",location:{lng:121.4681889,lat:25.0032392}},{name:"王薏涵",location:{lng:121.4755649,lat:25.011501}},{name:"黃子家",location:{lng:121.465888,lat:25.000324}},{name:"洪雙妹",location:{lng:121.4578792,lat:24.9954777}},{name:"吳國維",location:{lng:121.3777921,lat:24.9290272}},{name:"陳張招",location:{lng:121.4550962,lat:25.0034343}},{name:"游良民",location:{lng:121.462659,lat:24.983423}},{name:"梁芷萍",location:{lng:121.4602159,lat:25.0045786}},{name:"李雲蓮",location:{lng:121.4725272,lat:25.0248223}},{name:"林孟穎",location:{lng:121.454693,lat:25.0033969}},{name:"趙阿梅",location:{lng:121.4292754,lat:24.9923007}},{name:"高郁萱",location:{lng:121.4618572,lat:24.9988127}},{name:"蔡佩蓉",location:{lng:121.4650915,lat:24.9929872}},{name:"葉仁宏",location:{lng:121.4520039,lat:24.9844202}},{name:"王中翼",location:{lng:121.517675,lat:25.0025106}},{name:"陳屢彥",location:{lng:121.4597831,lat:24.9866949}},{name:"黃明真",location:{lng:121.4642082,lat:24.9845701}}]},function(e,o){e.exports={type:"Topology",bbox:[121.40867894200005,24.935574380000048,121.48182177800004,24.99410742500004],transform:{scale:[432541904198629e-19,40619739764045884e-21],translate:[121.40867894200004,24.935574380000048]},arcs:[[[1196,1344],[16,-24]],[[1212,1320],[72,-80]],[[1284,1240],[-1,-3]],[[1283,1237],[-9,-12]],[[1274,1225],[-96,-94]],[[1178,1131],[-14,-1]],[[1164,1130],[-6,70],[38,144]],[[1391,1299],[43,-91]],[[1434,1208],[-68,9]],[[1366,1217],[-32,50]],[[1334,1267],[2,1]],[[1336,1268],[31,18]],[[1367,1286],[24,13]],[[1371,1430],[27,-107]],[[1398,1323],[-2,-21]],[[1396,1302],[-5,-3]],[[1367,1286],[-27,75]],[[1340,1361],[31,69]],[[1434,1208],[87,-56]],[[1521,1152],[28,-75],[79,-41],[63,-109],[-52,-15],[-3,-121]],[[1636,791],[-129,7],[-123,145]],[[1384,943],[6,8]],[[1390,951],[31,43],[-60,116]],[[1361,1110],[-40,92]],[[1321,1202],[45,15]],[[714,865],[32,-172],[58,-45],[-3,-47],[144,-51],[98,-82]],[[1043,468],[32,-140]],[[1075,328],[-256,-64],[-216,-20]],[[603,244],[26,284],[-29,91],[14,71],[-55,92],[25,68]],[[584,850],[7,53],[66,77],[33,-9],[-41,-79],[65,-27]],[[603,244],[-132,0],[-55,44],[-77,6]],[[339,294],[46,47],[17,90],[-42,87],[-9,106],[59,79]],[[410,703],[116,92],[53,63]],[[579,858],[5,-8]],[[410,703],[-29,-36],[-117,-22],[-103,-80]],[[161,565],[-122,16]],[[39,581],[-8,81],[66,89],[233,70],[54,55],[68,13],[129,95],[13,23]],[[594,1007],[33,-16],[-73,-100],[25,-33]],[[339,294],[-69,-8],[-30,41],[6,49],[-51,51]],[[195,427],[30,34],[-64,104]],[[195,427],[-70,-20]],[[125,407],[35,43],[-48,37],[-54,-68]],[[58,419],[-43,22]],[[15,441],[28,67],[-4,73]],[[125,407],[-67,12]],[[1075,328],[33,-67]],[[1108,261],[-57,-45],[-57,0],[-80,-65],[-55,-26],[-81,-73],[-130,-52],[-59,116],[-24,18],[-59,-43],[-194,-25],[-52,13],[-56,-30],[-62,47],[-17,41],[-113,13],[12,48],[-20,59],[-4,129],[15,55]],[[936,1285],[27,-17]],[[963,1268],[53,-39]],[[1016,1229],[-39,-38]],[[977,1191],[-40,22]],[[937,1213],[-15,9]],[[922,1222],[14,63]],[[1174,1301],[-49,-85]],[[1125,1216],[-65,20]],[[1060,1236],[-13,18]],[[1047,1254],[35,24]],[[1082,1278],[92,23]],[[1060,1236],[-21,-40]],[[1039,1196],[-48,-78]],[[991,1118],[-46,35],[32,38]],[[1016,1229],[31,25]],[[1548,1376],[-92,-40]],[[1456,1336],[-58,-13]],[[1371,1430],[41,-36],[75,47],[61,-65]],[[1336,1268],[-17,50],[-53,8]],[[1266,1326],[74,35]],[[1164,1130],[-2,-109]],[[1162,1021],[-63,-47]],[[1099,974],[10,62],[-49,17],[30,103]],[[1090,1156],[35,60]],[[1174,1301],[12,53]],[[1186,1354],[10,-10]],[[794,1117],[-23,-148]],[[771,969],[-40,29]],[[731,998],[40,56],[-42,21],[-20,-62]],[[709,1013],[-8,2]],[[701,1015],[-3,86]],[[698,1101],[26,45],[70,-29]],[[1396,1302],[60,34]],[[1548,1376],[87,-50],[-114,-174]],[[1102,1438],[14,-58],[68,-27]],[[1184,1353],[-117,-18]],[[1067,1335],[-57,-4]],[[1010,1331],[-4,7]],[[1006,1338],[17,26]],[[1023,1364],[19,41]],[[1042,1405],[60,33]],[[865,1385],[11,-62],[60,-38]],[[922,1222],[-17,10]],[[905,1232],[-175,100]],[[730,1332],[6,59],[51,21],[32,-45],[46,18]],[[709,1013],[22,-15]],[[771,969],[114,18]],[[885,987],[-74,-48]],[[811,939],[-63,9]],[[748,948],[-54,34],[7,33]],[[1361,1110],[-82,10]],[[1279,1120],[-22,31],[17,74]],[[1283,1237],[38,-35]],[[1010,1331],[-47,-63]],[[936,1285],[70,53]],[[1334,1267],[-50,-27]],[[1212,1320],[54,6]],[[1090,1156],[-12,-9]],[[1078,1147],[-39,49]],[[1078,1147],[-87,-29]],[[991,1118],[-57,-57]],[[934,1061],[-17,49]],[[917,1110],[-16,50],[36,53]],[[1082,1278],[-15,57]],[[1184,1353],[2,1]],[[1390,951],[-125,53],[-37,37]],[[1228,1041],[1,34]],[[1229,1075],[50,45]],[[1081,949],[-11,-180],[-52,-54],[55,-92],[-30,-155]],[[714,865],[26,11]],[[740,876],[17,39],[54,24]],[[885,987],[11,9]],[[896,996],[107,-29],[10,-65],[68,47]],[[740,876],[8,72]],[[794,1117],[98,-34],[25,27]],[[934,1061],[-38,-65]],[[610,1132],[88,-31]],[[594,1007],[16,125]],[[905,1232],[-22,-33],[-161,81]],[[722,1280],[8,52]],[[610,1132],[43,40],[31,76],[38,32]],[[865,1385],[70,19],[88,-40]],[[1099,974],[5,-9]],[[1104,965],[-23,-16]],[[1042,1405],[60,33]],[[1178,1131],[51,-56]],[[1228,1041],[-66,-20]],[[1384,943],[-37,-41],[-93,23],[-85,-25],[-65,65]],[[1636,791],[-18,-26],[24,-75],[-181,-114],[7,-69],[-21,-26],[-79,-17],[-22,-71],[-119,-100],[-63,1],[-56,-33]]],objects:{map:{type:"GeometryCollection",geometries:[{arcs:[[0,1,2,3,4,5,6]],type:"Polygon",properties:{id:"6501300-016",name:"清溪里"}},{arcs:[[7,8,9,10,11,12]],type:"Polygon",properties:{id:"6501300-017",name:"峯廷里"}},{arcs:[[13,14,15,-13,16,17]],type:"Polygon",properties:{id:"6501300-018",name:"平和里"}},{arcs:[[-9,18,19,20,21,22,23,24]],type:"Polygon",properties:{id:"6501300-019",name:"廷寮里"}},{arcs:[[25,26,27,28,29]],type:"Polygon",properties:{id:"6501300-020",name:"大安里"}},{arcs:[[-29,30,31,32,33]],type:"Polygon",properties:{id:"6501300-021",name:"永寧里"}},{arcs:[[-33,34,35,36,37]],type:"Polygon",properties:{id:"6501300-022",name:"沛陂里"}},{arcs:[[-32,38,39,-35]],type:"Polygon",properties:{id:"6501300-023",name:"頂埔里"}},{arcs:[[-40,40,41,42,43,-36]],type:"Polygon",properties:{id:"6501300-024",name:"頂福里"}},{arcs:[[44,-42]],type:"Polygon",properties:{id:"6501300-025",name:"頂新里"}},{arcs:[[-43,-45,-41,-39,-31,-28,45,46]],type:"Polygon",properties:{id:"6501300-026",name:"祖田里"}},{arcs:[[47,48,49,50,51,52]],type:"Polygon",properties:{id:"6501300-027",name:"樂利里"}},{arcs:[[53,54,55,56,57]],type:"Polygon",properties:{id:"6501300-028",name:"廣福里"}},{arcs:[[-56,58,59,60,-50,61]],type:"Polygon",properties:{id:"6501300-029",name:"學府里"}},{arcs:[[62,63,-14,64]],type:"Polygon",properties:{id:"6501300-030",name:"延壽里"}},{arcs:[[-12,65,66,-17]],type:"Polygon",properties:{id:"6501300-031",name:"安和里"}},{arcs:[[-7,67,68,69,70,-54,71,72]],type:"Polygon",properties:{id:"6501300-032",name:"青雲里"}},{arcs:[[73,74,75,76,77,78]],type:"Polygon",properties:{id:"6501300-033",name:"員福里"}},{arcs:[[-19,-8,-16,79,-63,80]],type:"Polygon",properties:{id:"6501300-034",name:"延吉里"}},{arcs:[[81,82,83,84,85,86,87]],type:"Polygon",properties:{id:"6501300-035",name:"復興里"}},{arcs:[[88,-53,89,90,91]],type:"Polygon",properties:{id:"6501300-036",name:"裕生里"}},{arcs:[[92,-75,93,94,95,96,-77]],type:"Polygon",properties:{id:"6501300-037",name:"員信里"}},{arcs:[[-24,97,98,-4,99]],type:"Polygon",properties:{id:"6501300-038",name:"永富里"}},{arcs:[[-85,100,-48,101]],type:"Polygon",properties:{id:"6501300-039",name:"學成里"}},{arcs:[[-66,-11,102,-2,103]],type:"Polygon",properties:{id:"6501300-040",name:"延和里"}},{arcs:[[-55,-71,104,105,-59]],type:"Polygon",properties:{id:"6501300-041",name:"中正里"}},{arcs:[[-106,106,-60]],type:"Polygon",properties:{id:"6501300-042",name:"學士里"}},{arcs:[[-51,-61,107,108,109]],type:"Polygon",properties:{id:"6501300-043",name:"明德里"}},{arcs:[[-72,-58,110,-83,111]],type:"Polygon",properties:{id:"6501300-044",name:"廣興里"}},{arcs:[[-23,112,113,114,-98]],type:"Polygon",properties:{id:"6501300-045",name:"青山里"}},{arcs:[[-10,-25,-100,-3,-103]],type:"Polygon",properties:{id:"6501300-046",name:"金城里"}},{arcs:[[-80,-15,-64]],type:"Polygon",properties:{id:"6501300-047",name:"延祿里"}},{arcs:[[115,-26,116,117,-95,118,119]],type:"Polygon",properties:{id:"6501300-001",name:"埤塘里"}},{arcs:[[-118,120,-96]],type:"Polygon",properties:{id:"6501300-002",name:"土城里"}},{arcs:[[121,-109,122,-119,-94,-74]],type:"Polygon",properties:{id:"6501300-003",name:"員林里"}},{arcs:[[123,-78,-97,-121,-117,-30,-34,-38,124]],type:"Polygon",properties:{id:"6501300-004",name:"員仁里"}},{arcs:[[-93,-76]],type:"Polygon",properties:{id:"6501300-005",name:"長風里"}},{arcs:[[-91,125,126]],type:"Polygon",properties:{id:"6501300-006",name:"日新里"}},{arcs:[[-126,-90,-52,-110,-122,-79,-124,127]],type:"Polygon",properties:{id:"6501300-007",name:"日和里"}},{arcs:[[-86,-102,-89,128]],type:"Polygon",properties:{id:"6501300-008",name:"貨饒里"}},{arcs:[[129,130,-120,-123,-108,-107,-105,-70]],type:"Polygon",properties:{id:"6501300-009",name:"柑林里"}},{arcs:[[-111,-57,-62,-49,-101,-84]],type:"Polygon",properties:{id:"6501300-010",name:"埤林里"}},{arcs:[[-88,131]],type:"Polygon",properties:{id:"6501300-011",name:"瑞興里"}},{arcs:[[132,-114,133,-68,-6]],type:"Polygon",properties:{id:"6501300-012",name:"清水里"}},{arcs:[[-113,-22,134,-130,-69,-134]],type:"Polygon",properties:{id:"6501300-013",name:"清和里"}},{arcs:[[-115,-133,-5,-99]],type:"Polygon",properties:{id:"6501300-014",name:"永豐里"}},{arcs:[[-131,-135,-21,135,-46,-27,-116]],type:"Polygon",properties:{id:"6501300-015",name:"清化里"}}]}}}}],[14]);
//# sourceMappingURL=app.804051d833da487614cb.js.map