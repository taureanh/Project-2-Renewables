var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

var map = L.map('map', {
  center: [39.0119, -98.4842],
  zoom: 5,
  layers: [grayscale]
});


var json = {
  "type": "FeatureCollection",
  "features": [
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1528,44.5281 ]
   },
   "properties": {
   "name":"45 Mile Hydroelectric Project",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.4936,35.0314 ]
   },
   "properties": {
   "name":"99 Islands",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":1910
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5047,37.151 ]
   },
   "properties": {
   "name":"A G Wishon",
   "capacity_mw":12.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1910
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.0407,29.594 ]
   },
   "properties": {
   "name":"Abbott TP 3",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.423,36.2399 ]
   },
   "properties": {
   "name":"Abiquiu Dam",
   "capacity_mw":15.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.4859,42.9506 ]
   },
   "properties": {
   "name":"Ada Dam",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.6867,34.8158 ]
   },
   "properties": {
   "name":"Alamo",
   "capacity_mw":19.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.9986,48.1802 ]
   },
   "properties": {
   "name":"Albeni Falls",
   "capacity_mw":42,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.8045,44.562 ]
   },
   "properties": {
   "name":"Alcona",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.7175,42.5484 ]
   },
   "properties": {
   "name":"Alcova",
   "capacity_mw":41.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3102,46.8016 ]
   },
   "properties": {
   "name":"Alder",
   "capacity_mw":50,
   "primary_fuel":"Hydro",
   "commissioning_year":1947
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.7553,45.1875 ]
   },
   "properties": {
   "name":"Alexander",
   "capacity_mw":4.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.4648,44.5192 ]
   },
   "properties": {
   "name":"Alice Falls Hydro Project",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.7282,34.1637 ]
   },
   "properties": {
   "name":"Allatoona",
   "capacity_mw":86.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.954,42.5638 ]
   },
   "properties": {
   "name":"Allegan Dam",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.479,40.8966 ]
   },
   "properties": {
   "name":"Allegheny Hydro No 8",
   "capacity_mw":13.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5507,40.956 ]
   },
   "properties": {
   "name":"Allegheny Hydro No 9",
   "capacity_mw":17.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5772,40.7164 ]
   },
   "properties": {
   "name":"Allegheny No 6 Hydro Station",
   "capacity_mw":9.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.6653,40.6829 ]
   },
   "properties": {
   "name":"Allegheny No. 5 Hydro Station",
   "capacity_mw":9.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8603,44.6603 ]
   },
   "properties": {
   "name":"Allens Falls",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -146.3533,61.0844 ]
   },
   "properties": {
   "name":"Allison Creek Hydro",
   "capacity_mw":6.5,
   "primary_fuel":"Hydro",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.8036,39.216 ]
   },
   "properties": {
   "name":"Alta Powerhouse",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1902
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.8764,42.7778 ]
   },
   "properties": {
   "name":"American Falls",
   "capacity_mw":92.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1978
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.8831,37.866 ]
   },
   "properties": {
   "name":"Ames Hydro",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1906
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.0601,29.4498 ]
   },
   "properties": {
   "name":"Amistad Dam & Power",
   "capacity_mw":66,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4721,43.0022 ]
   },
   "properties": {
   "name":"Amoskeag",
   "capacity_mw":16,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.4515,43.3571 ]
   },
   "properties": {
   "name":"Anderson Ranch",
   "capacity_mw":40,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.2015,44.1353 ]
   },
   "properties": {
   "name":"Androscoggin 3",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5394,38.0719 ]
   },
   "properties": {
   "name":"Angels",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -134.101,58.3176 ]
   },
   "properties": {
   "name":"Annex Creek",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1916
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.8867,44.7975 ]
   },
   "properties": {
   "name":"Anson Abenaki Hydros",
   "capacity_mw":29,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.2956,35.1677 ]
   },
   "properties": {
   "name":"Apalachia",
   "capacity_mw":93.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.7162,45.1576 ]
   },
   "properties": {
   "name":"Apple River",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1901
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.4096,44.2539 ]
   },
   "properties": {
   "name":"Appleton",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.2429,32.6391 ]
   },
   "properties": {
   "name":"Arlington Outlet Hydroelectric Generator",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.2028,45.7517 ]
   },
   "properties": {
   "name":"Arpin Dam",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1971
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.9233,43.595 ]
   },
   "properties": {
   "name":"Arrowrock Hydroelectric Project",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2063,41.949 ]
   },
   "properties": {
   "name":"Ashokan",
   "capacity_mw":4.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.4973,44.0786 ]
   },
   "properties": {
   "name":"Ashton",
   "capacity_mw":6.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3998,41.2372 ]
   },
   "properties": {
   "name":"Auglaize Hydro",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1996
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.7844,30.2934 ]
   },
   "properties": {
   "name":"Austin",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.9525,36.4237 ]
   },
   "properties": {
   "name":"Avalon Hydropower",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1998
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7177,43.5978 ]
   },
   "properties": {
   "name":"Ayers Island",
   "capacity_mw":8.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9975,44.9439 ]
   },
   "properties": {
   "name":"Aziscohos Hydroelectric Project",
   "capacity_mw":6.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9093,34.1548 ]
   },
   "properties": {
   "name":"Azusa",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.9975,35.0075 ]
   },
   "properties": {
   "name":"Bad Creek",
   "capacity_mw":1296,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.7256,40.5264 ]
   },
   "properties": {
   "name":"Baker Creek Hydroelectric",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0877,36.9091 ]
   },
   "properties": {
   "name":"Balch 1",
   "capacity_mw":31,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0876,36.9089 ]
   },
   "properties": {
   "name":"Balch 2",
   "capacity_mw":97.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7761,43.1269 ]
   },
   "properties": {
   "name":"Ball Mountain Hydro",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.3568,33.4587 ]
   },
   "properties": {
   "name":"Bankhead Dam",
   "capacity_mw":53.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.5525,43.6136 ]
   },
   "properties": {
   "name":"Bar Mills",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1956
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.1213,43.561 ]
   },
   "properties": {
   "name":"Barber Dam",
   "capacity_mw":4.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.2297,44.0867 ]
   },
   "properties": {
   "name":"Barker Lower",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.2211,37.0217 ]
   },
   "properties": {
   "name":"Barkley",
   "capacity_mw":130,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.4995,40.1671 ]
   },
   "properties": {
   "name":"Bartholomew",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.0916,32.662 ]
   },
   "properties": {
   "name":"Bartletts Ferry",
   "capacity_mw":173,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.8219,39.3631 ]
   },
   "properties": {
   "name":"Basalt",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.8,38.2089 ]
   },
   "properties": {
   "name":"Bath County",
   "capacity_mw":2862,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9591,40.5345 ]
   },
   "properties": {
   "name":"Bear Creek",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.072,35.2427 ]
   },
   "properties": {
   "name":"Bear Creek Dam",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9599,42.6839 ]
   },
   "properties": {
   "name":"Bear Swamp",
   "capacity_mw":600,
   "primary_fuel":"Hydro",
   "commissioning_year":1974
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0166,33.1662 ]
   },
   "properties": {
   "name":"Bear Valley",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7413,43.0191 ]
   },
   "properties": {
   "name":"Beardslee",
   "capacity_mw":20,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.077,38.2026 ]
   },
   "properties": {
   "name":"Beardsley",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.8474,36.4215 ]
   },
   "properties": {
   "name":"Beaver Dam",
   "capacity_mw":112,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -131.4703,55.3798 ]
   },
   "properties": {
   "name":"Beaver Falls",
   "capacity_mw":5.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.3178,40.7441 ]
   },
   "properties": {
   "name":"Beaver Valley Patterson Dam",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.9072,43.9767 ]
   },
   "properties": {
   "name":"Beebee Island Hydro Plant",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2494,40.0074 ]
   },
   "properties": {
   "name":"Belden",
   "capacity_mw":117.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1969
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1762,44.0525 ]
   },
   "properties": {
   "name":"Beldens",
   "capacity_mw":5.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3331,43.9275 ]
   },
   "properties": {
   "name":"Belfort",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1914
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.7375,39.1192 ]
   },
   "properties": {
   "name":"Belleville Dam",
   "capacity_mw":42,
   "primary_fuel":"Hydro",
   "commissioning_year":1999
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4464,43.1375 ]
   },
   "properties": {
   "name":"Bellows Falls",
   "capacity_mw":40.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.3133,44.0623 ]
   },
   "properties": {
   "name":"Bend",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1916
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.9531,43.5317 ]
   },
   "properties": {
   "name":"Bennetts Bridge",
   "capacity_mw":36,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.5545,44.5802 ]
   },
   "properties": {
   "name":"Benton Falls Associates",
   "capacity_mw":4.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1645,44.3889 ]
   },
   "properties": {
   "name":"Berlin Gorham",
   "capacity_mw":30.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.3289,41.9439 ]
   },
   "properties": {
   "name":"Berrien Springs",
   "capacity_mw":7.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1996
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4481,40.8014 ]
   },
   "properties": {
   "name":"Bidwell Ditch Project",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.4463,44.0384 ]
   },
   "properties": {
   "name":"Big Bend Dam",
   "capacity_mw":494.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.2832,44.7514 ]
   },
   "properties": {
   "name":"Big Cliff",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2396,37.2042 ]
   },
   "properties": {
   "name":"Big Creek 1",
   "capacity_mw":88.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.3069,37.2 ]
   },
   "properties": {
   "name":"Big Creek 2",
   "capacity_mw":66.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.3068,37.2001 ]
   },
   "properties": {
   "name":"Big Creek 2A",
   "capacity_mw":110,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.3866,37.1485 ]
   },
   "properties": {
   "name":"Big Creek 3",
   "capacity_mw":174.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.4898,37.139 ]
   },
   "properties": {
   "name":"Big Creek 4",
   "capacity_mw":100,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.3289,37.2096 ]
   },
   "properties": {
   "name":"Big Creek 8",
   "capacity_mw":75,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.498,40.6467 ]
   },
   "properties": {
   "name":"Big Creek Water Works",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.0469,45.4917 ]
   },
   "properties": {
   "name":"Big Falls",
   "capacity_mw":7.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1945
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.0708,48.0592 ]
   },
   "properties": {
   "name":"Big Fork",
   "capacity_mw":4.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3241,37.1428 ]
   },
   "properties": {
   "name":"Big Pine Creek",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.0415,45.7883 ]
   },
   "properties": {
   "name":"Big Quinnesec 61",
   "capacity_mw":4.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1914
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.0408,45.7881 ]
   },
   "properties": {
   "name":"Big Quinnesec 92",
   "capacity_mw":16,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.2238,40.421 ]
   },
   "properties": {
   "name":"Big Thompson",
   "capacity_mw":4.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.7194,44.0274 ]
   },
   "properties": {
   "name":"Birch Creek Power",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.7808,44.4306 ]
   },
   "properties": {
   "name":"Biron",
   "capacity_mw":5.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1910
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.5733,37.2736 ]
   },
   "properties": {
   "name":"Bishop Creek 2",
   "capacity_mw":7.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1909
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.532,37.302 ]
   },
   "properties": {
   "name":"Bishop Creek 3",
   "capacity_mw":8.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.5017,37.323 ]
   },
   "properties": {
   "name":"Bishop Creek 4",
   "capacity_mw":8.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1907
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4797,37.3344 ]
   },
   "properties": {
   "name":"Bishop Creek 5",
   "capacity_mw":4.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4628,37.3499 ]
   },
   "properties": {
   "name":"Bishop Creek 6",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -133.1477,55.4765 ]
   },
   "properties": {
   "name":"Black Bear Lake",
   "capacity_mw":4.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1995
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3323,39.8149 ]
   },
   "properties": {
   "name":"Black Butte",
   "capacity_mw":6.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.4372,43.9305 ]
   },
   "properties": {
   "name":"Black Canyon",
   "capacity_mw":10.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7026,47.5345 ]
   },
   "properties": {
   "name":"Black Creek",
   "capacity_mw":3.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.2614,47.5213 ]
   },
   "properties": {
   "name":"Black Eagle",
   "capacity_mw":24,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.8132,44.0001 ]
   },
   "properties": {
   "name":"Black River",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3442,43.5912 ]
   },
   "properties": {
   "name":"Black River Hydro Associates",
   "capacity_mw":5.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5444,42.0145 ]
   },
   "properties": {
   "name":"Blackstone/Tupperware",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7534,44.5065 ]
   },
   "properties": {
   "name":"Blake",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.1944,34.571 ]
   },
   "properties": {
   "name":"Blakely Mountain",
   "capacity_mw":75,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.3592,45.8614 ]
   },
   "properties": {
   "name":"Blanchard",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":1946
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4479,42.4423 ]
   },
   "properties": {
   "name":"Blenheim Gilboa",
   "capacity_mw":1000,
   "primary_fuel":"Hydro",
   "commissioning_year":1973
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.8226,42.6998 ]
   },
   "properties": {
   "name":"Blind Canyon Hydro",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1992
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.071,42.9138 ]
   },
   "properties": {
   "name":"Bliss",
   "capacity_mw":75,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -135.2297,57.0516 ]
   },
   "properties": {
   "name":"Blue Lake Hydro",
   "capacity_mw":15.9,
   "primary_fuel":"Hydro",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.3375,38.4532 ]
   },
   "properties": {
   "name":"Blue Mesa",
   "capacity_mw":86.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.2822,34.8839 ]
   },
   "properties": {
   "name":"Blue Ridge",
   "capacity_mw":23.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1935
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6014,42.2086 ]
   },
   "properties": {
   "name":"Boatlock",
   "capacity_mw":3.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.0938,43.5377 ]
   },
   "properties": {
   "name":"Boise R Diversion",
   "capacity_mw":3.3,
   "primary_fuel":"Hydro",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.8167,44.3594 ]
   },
   "properties": {
   "name":"Bolton Falls",
   "capacity_mw":8.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0994,44.1706 ]
   },
   "properties": {
   "name":"Boltonville Hydro Associates",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.941,45.6441 ]
   },
   "properties": {
   "name":"Bonneville",
   "capacity_mw":1162,
   "primary_fuel":"Hydro",
   "commissioning_year":1961
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.6116,43.6877 ]
   },
   "properties": {
   "name":"Bonny Eagle",
   "capacity_mw":7.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1910
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.4381,36.4403 ]
   },
   "properties": {
   "name":"Boone Dam",
   "capacity_mw":105.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.3224,42.6525 ]
   },
   "properties": {
   "name":"Boott Hydropower",
   "capacity_mw":22.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.5248,35.5881 ]
   },
   "properties": {
   "name":"Borel",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.4383,37.9858 ]
   },
   "properties": {
   "name":"Boulder",
   "capacity_mw":4.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.3325,40.0047 ]
   },
   "properties": {
   "name":"Boulder Canyon Hydro",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.3347,40.0111 ]
   },
   "properties": {
   "name":"Boulder City Betasso Hydro Plant",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.3347,40.0111 ]
   },
   "properties": {
   "name":"Boulder City Lakewood Hydro",
   "capacity_mw":3.5,
   "primary_fuel":"Hydro",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.5,39.9913 ]
   },
   "properties": {
   "name":"Boulder City Silver Lake Hydro",
   "capacity_mw":3.3,
   "primary_fuel":"Hydro",
   "commissioning_year":2000
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3478,48.9871 ]
   },
   "properties": {
   "name":"Boundary",
   "capacity_mw":1118.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1975
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6534,39.4484 ]
   },
   "properties": {
   "name":"Bowman",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4183,48.7809 ]
   },
   "properties": {
   "name":"Box Canyon",
   "capacity_mw":90,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3292,41.2792 ]
   },
   "properties": {
   "name":"Box Canyon Dam",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.1993,34.4555 ]
   },
   "properties": {
   "name":"Boyds Mill Hydro",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1997
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.1775,43.4179 ]
   },
   "properties": {
   "name":"Boysen",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1952
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -150.9401,59.7786 ]
   },
   "properties": {
   "name":"Bradley Lake",
   "capacity_mw":126,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.1817,46.3758 ]
   },
   "properties": {
   "name":"Brainerd Public Utilities",
   "capacity_mw":2.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.5245,37.2208 ]
   },
   "properties": {
   "name":"Brasfield",
   "capacity_mw":2.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.8122,45.6603 ]
   },
   "properties": {
   "name":"Brassua Hydroelectric Project",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.8372,35.7428 ]
   },
   "properties": {
   "name":"Bridgewater",
   "capacity_mw":27.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.9934,41.5016 ]
   },
   "properties": {
   "name":"Brigham City",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1935
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.4077,46.1206 ]
   },
   "properties": {
   "name":"Broadwater Power Project",
   "capacity_mw":9.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.6845,34.1388 ]
   },
   "properties": {
   "name":"Broken Bow Dam",
   "capacity_mw":100,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6366,43.3085 ]
   },
   "properties": {
   "name":"Brookfield Power Glen Falls Hydro",
   "capacity_mw":11.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.8975,44.8367 ]
   },
   "properties": {
   "name":"Brownlee",
   "capacity_mw":585.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0594,44.2114 ]
   },
   "properties": {
   "name":"Browns Falls",
   "capacity_mw":16,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.2189,45.9472 ]
   },
   "properties": {
   "name":"Brule",
   "capacity_mw":5.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.9678,43.9205 ]
   },
   "properties": {
   "name":"Brunswick Hydro",
   "capacity_mw":19.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.3511,41.8396 ]
   },
   "properties": {
   "name":"Buchanan (MI)",
   "capacity_mw":4.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.4176,30.7507 ]
   },
   "properties": {
   "name":"Buchanan Dam (TX)",
   "capacity_mw":54.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1942
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.9387,36.8082 ]
   },
   "properties": {
   "name":"Buck Hydro",
   "capacity_mw":8.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.3277,39.9106 ]
   },
   "properties": {
   "name":"Bucks Creek",
   "capacity_mw":66,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -109.1707,44.5082 ]
   },
   "properties": {
   "name":"Buffalo Bill",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":1992
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.0774,34.1623 ]
   },
   "properties": {
   "name":"Buford",
   "capacity_mw":131.2,
   "primary_fuel":"Hydro",
   "commissioning_year":2005
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.5763,36.3635 ]
   },
   "properties": {
   "name":"Bull Shoals",
   "capacity_mw":340,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.492,41.659 ]
   },
   "properties": {
   "name":"Bulls Bridge",
   "capacity_mw":7.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1903
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7225,40.8579 ]
   },
   "properties": {
   "name":"Burney Creek",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.5406,34.7939 ]
   },
   "properties": {
   "name":"Burton Dam",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1907,40.1757 ]
   },
   "properties": {
   "name":"Butt Valley",
   "capacity_mw":40,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.9025,34.1697 ]
   },
   "properties": {
   "name":"Buzzard Roost",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.9394,44.5119 ]
   },
   "properties": {
   "name":"Byllesby",
   "capacity_mw":2.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.9333,36.7858 ]
   },
   "properties": {
   "name":"Byllesby 2",
   "capacity_mw":21.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.0575,42.5609 ]
   },
   "properties": {
   "name":"Bypass",
   "capacity_mw":9.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.6466,30.3885 ]
   },
   "properties": {
   "name":"C H Corn Hydroelectric Facility",
   "capacity_mw":12.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.9779,42.9449 ]
   },
   "properties": {
   "name":"C J Strike",
   "capacity_mw":82.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1952
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.9396,44.2591 ]
   },
   "properties": {
   "name":"C W Tippy",
   "capacity_mw":20.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1918
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.685,42.1658 ]
   },
   "properties": {
   "name":"C-Drop Hydro",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.7088,39.6551 ]
   },
   "properties": {
   "name":"Cabin Creek",
   "capacity_mw":300,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.0531,48.0844 ]
   },
   "properties": {
   "name":"Cabinet Gorge",
   "capacity_mw":265.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5793,42.5875 ]
   },
   "properties": {
   "name":"Cabot",
   "capacity_mw":61.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1916
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.61,42.2 ]
   },
   "properties": {
   "name":"Cabot Holyoke",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6119,44.5776 ]
   },
   "properties": {
   "name":"Cadys Falls",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6219,44.695 ]
   },
   "properties": {
   "name":"Cadyville",
   "capacity_mw":5.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.9806,35.4923 ]
   },
   "properties": {
   "name":"Calderwood",
   "capacity_mw":156.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1933
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.2306,45.3569 ]
   },
   "properties": {
   "name":"Caldron Falls",
   "capacity_mw":6.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.0245,38.2268 ]
   },
   "properties": {
   "name":"Camanche",
   "capacity_mw":10.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5371,38.8288 ]
   },
   "properties": {
   "name":"Camino",
   "capacity_mw":157.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.317,39.0488 ]
   },
   "properties": {
   "name":"Camp Far West",
   "capacity_mw":7.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5302,44.9993 ]
   },
   "properties": {
   "name":"Canaan",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.7058,37.8997 ]
   },
   "properties": {
   "name":"Cannelton Hydroelectric Plant",
   "capacity_mw":87.9,
   "primary_fuel":"Hydro",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.1947,29.8706 ]
   },
   "properties": {
   "name":"Canyon",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.7279,46.649 ]
   },
   "properties": {
   "name":"Canyon Ferry",
   "capacity_mw":49.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.6432,18.2961 ]
   },
   "properties": {
   "name":"Caonillas 1",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":null
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.6691,18.2397 ]
   },
   "properties": {
   "name":"Caonillas 2",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":null
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1482,40.0855 ]
   },
   "properties": {
   "name":"Caribou 1",
   "capacity_mw":73.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1494,40.086 ]
   },
   "properties": {
   "name":"Caribou 2",
   "capacity_mw":117.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.106,18.0447 ]
   },
   "properties": {
   "name":"Carite 1",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1915
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.0414,44.286 ]
   },
   "properties": {
   "name":"Carmen Smith",
   "capacity_mw":114.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.0262,34.4425 ]
   },
   "properties": {
   "name":"Carpenter",
   "capacity_mw":56,
   "primary_fuel":"Hydro",
   "commissioning_year":1932
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.2089,40.3242 ]
   },
   "properties": {
   "name":"Carter Hydro",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.6733,34.6121 ]
   },
   "properties": {
   "name":"Carters",
   "capacity_mw":500,
   "primary_fuel":"Hydro",
   "commissioning_year":1976
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.3073,43.6262 ]
   },
   "properties": {
   "name":"Carver Falls",
   "capacity_mw":1.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.4989,42.9094 ]
   },
   "properties": {
   "name":"Cascade Dam",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.0483,44.5256 ]
   },
   "properties": {
   "name":"Cascade Dam",
   "capacity_mw":12.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.6566,34.5872 ]
   },
   "properties": {
   "name":"Castaic",
   "capacity_mw":1682,
   "primary_fuel":"Hydro",
   "commissioning_year":1976
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.9514,43.8656 ]
   },
   "properties": {
   "name":"Castle Rock",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.5128,46.3156 ]
   },
   "properties": {
   "name":"Cataract (MI)",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.4472,43.4956 ]
   },
   "properties": {
   "name":"Cataract Hydro",
   "capacity_mw":6.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1937
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.5888,41.2972 ]
   },
   "properties": {
   "name":"Causey",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1998
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5982,43.3812 ]
   },
   "properties": {
   "name":"Cavendish",
   "capacity_mw":1.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1907
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.0983,35.2531 ]
   },
   "properties": {
   "name":"Cedar Cliff",
   "capacity_mw":6.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1952
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.8756,34.5414 ]
   },
   "properties": {
   "name":"Cedar Creek",
   "capacity_mw":45,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7819,47.4193 ]
   },
   "properties": {
   "name":"Cedar Falls (WA)",
   "capacity_mw":30,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.8883,44.9367 ]
   },
   "properties": {
   "name":"Cedar Falls (WI)",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.4602,43.0967 ]
   },
   "properties": {
   "name":"Center Falls",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.8274,36.0972 ]
   },
   "properties": {
   "name":"Center Hill",
   "capacity_mw":135,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6574,39.7889 ]
   },
   "properties": {
   "name":"Centerville PH",
   "capacity_mw":6.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1900
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1319,41.8288 ]
   },
   "properties": {
   "name":"Central Hudson High Falls",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1875,44.49 ]
   },
   "properties": {
   "name":"Chace Mill Winooski One",
   "capacity_mw":7.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.8011,45.5136 ]
   },
   "properties": {
   "name":"Chalk Hill",
   "capacity_mw":7.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5898,46.2668 ]
   },
   "properties": {
   "name":"Chandler",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1956
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.2209,44.0995 ]
   },
   "properties": {
   "name":"Charles E Monty",
   "capacity_mw":28.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2169,44.7533 ]
   },
   "properties": {
   "name":"Chasm",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1125,44.9318 ]
   },
   "properties": {
   "name":"Chasm Hydro Partnership",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0858,44.9099 ]
   },
   "properties": {
   "name":"Chateaugay High Falls Hydro",
   "capacity_mw":1.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.7914,35.0191 ]
   },
   "properties": {
   "name":"Chatuge",
   "capacity_mw":13.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.2219,36.3208 ]
   },
   "properties": {
   "name":"Cheatham",
   "capacity_mw":36,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.4814,45.6375 ]
   },
   "properties": {
   "name":"Cheboygan",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.0133,47.8347 ]
   },
   "properties": {
   "name":"Chelan",
   "capacity_mw":59.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6097,42.1919 ]
   },
   "properties": {
   "name":"Chemical",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1935
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.9383,35.4478 ]
   },
   "properties": {
   "name":"Cheoah",
   "capacity_mw":140,
   "primary_fuel":"Hydro",
   "commissioning_year":1999
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.4977,36.1682 ]
   },
   "properties": {
   "name":"Cherokee Dam",
   "capacity_mw":135,
   "primary_fuel":"Hydro",
   "commissioning_year":1947
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5458,35.0642 ]
   },
   "properties": {
   "name":"Cherokee Falls",
   "capacity_mw":4.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.5836,44.0183 ]
   },
   "properties": {
   "name":"Chester Diversion Hydroelectric Project",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -131.5459,55.1169 ]
   },
   "properties": {
   "name":"Chester Lake",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.8909,39.1779 ]
   },
   "properties": {
   "name":"Chicago Park",
   "capacity_mw":44,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.2295,35.1018 ]
   },
   "properties": {
   "name":"Chickamauga",
   "capacity_mw":159.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5828,42.1596 ]
   },
   "properties": {
   "name":"Chicopee Hydroelectric Station",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.6404,47.9951 ]
   },
   "properties": {
   "name":"Chief Joseph",
   "capacity_mw":2456.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.0503,35.5453 ]
   },
   "properties": {
   "name":"Chilhowee",
   "capacity_mw":49.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.8132,38.7718 ]
   },
   "properties": {
   "name":"Chili Bar",
   "capacity_mw":7,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4599,43.1287 ]
   },
   "properties": {
   "name":"China Mill Hydro",
   "capacity_mw":1.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.3889,44.9308 ]
   },
   "properties": {
   "name":"Chippewa Falls",
   "capacity_mw":21.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.0454,43.4914 ]
   },
   "properties": {
   "name":"City Power Plant",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.5383,45.9467 ]
   },
   "properties": {
   "name":"Clam River Dam",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.644,39.5248 ]
   },
   "properties": {
   "name":"Clarence Cannon",
   "capacity_mw":58,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.12,44.6356 ]
   },
   "properties": {
   "name":"Clark Falls",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1937
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.5847,37.075 ]
   },
   "properties": {
   "name":"Claytor",
   "capacity_mw":74.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1939
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.7801,42.667 ]
   },
   "properties": {
   "name":"Clear Lake",
   "capacity_mw":2.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1938
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5667,38.9236 ]
   },
   "properties": {
   "name":"Clear Lake Hydro Project",
   "capacity_mw":2.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3379,43.2512 ]
   },
   "properties": {
   "name":"Clearwater 1",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4098,43.2669 ]
   },
   "properties": {
   "name":"Clearwater 2",
   "capacity_mw":26,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.596,43.4405 ]
   },
   "properties": {
   "name":"Clement Dam Hydro LLC",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.8344,34.9953 ]
   },
   "properties": {
   "name":"Clifton Dam 3 Power Station",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.8647,42.1171 ]
   },
   "properties": {
   "name":"Cobble Mountain",
   "capacity_mw":33,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.195,47.5375 ]
   },
   "properties": {
   "name":"Cochrane",
   "capacity_mw":60.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.0356,42.0078 ]
   },
   "properties": {
   "name":"Colebrook Hydroelectric",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3006,37.5035 ]
   },
   "properties": {
   "name":"Coleman Falls",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.1219,40.4046 ]
   },
   "properties": {
   "name":"Coleman PH",
   "capacity_mw":12.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1979
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1917,39.3308 ]
   },
   "properties": {
   "name":"Colgate",
   "capacity_mw":315,
   "primary_fuel":"Hydro",
   "commissioning_year":1969
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3805,38.1446 ]
   },
   "properties": {
   "name":"Collierville Powerhouse",
   "capacity_mw":253,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4227,42.1569 ]
   },
   "properties": {
   "name":"Collins Facility",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9583,44.5839 ]
   },
   "properties": {
   "name":"Colton",
   "capacity_mw":36,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.0494,33.9972 ]
   },
   "properties": {
   "name":"Columbia Canal Hydro",
   "capacity_mw":10.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1934
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.3283,41.4639 ]
   },
   "properties": {
   "name":"Columbus",
   "capacity_mw":45.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1936
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.0591,39.0096 ]
   },
   "properties": {
   "name":"Combie South",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.3005,44.2735 ]
   },
   "properties": {
   "name":"Combined Locks",
   "capacity_mw":6.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.001,44.3251 ]
   },
   "properties": {
   "name":"Comerford",
   "capacity_mw":167.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3657,40.4644 ]
   },
   "properties": {
   "name":"Conemaugh Hydro Plant",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.1752,39.6572 ]
   },
   "properties": {
   "name":"Conowingo",
   "capacity_mw":530.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.6694,41.8436 ]
   },
   "properties": {
   "name":"Constantine",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.557,37.4379 ]
   },
   "properties": {
   "name":"Control Gorge",
   "capacity_mw":37.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1952
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.5719,44.4726 ]
   },
   "properties": {
   "name":"Cooke",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1911
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -149.6656,60.3923 ]
   },
   "properties": {
   "name":"Cooper Lake",
   "capacity_mw":19.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1961
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3353,41.9789 ]
   },
   "properties": {
   "name":"Copco 1",
   "capacity_mw":20,
   "primary_fuel":"Hydro",
   "commissioning_year":1918
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3581,41.9757 ]
   },
   "properties": {
   "name":"Copco 2",
   "capacity_mw":27,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6603,43.8997 ]
   },
   "properties": {
   "name":"Copenhagen Plant",
   "capacity_mw":3.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.5238,45.6652 ]
   },
   "properties": {
   "name":"Copper Dam Plant",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.9442,36.2895 ]
   },
   "properties": {
   "name":"Cordell Hull",
   "capacity_mw":99.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1973
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.1574,45.164 ]
   },
   "properties": {
   "name":"Cornell",
   "capacity_mw":35.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1976
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.4851,42.4519 ]
   },
   "properties": {
   "name":"Cornell Hydro",
   "capacity_mw":1.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.6106,33.859 ]
   },
   "properties": {
   "name":"Corona",
   "capacity_mw":2.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6872,42.4044 ]
   },
   "properties": {
   "name":"Cosgrove Intake and Power Station",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1969
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0439,36.4434 ]
   },
   "properties": {
   "name":"Cottonwood",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1909
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.2439,44.1307 ]
   },
   "properties": {
   "name":"Cougar",
   "capacity_mw":26,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9487,40.8713 ]
   },
   "properties": {
   "name":"Cove Hydroelectric",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.0209,40.5708 ]
   },
   "properties": {
   "name":"Cow Creek",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1907
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.9588,35.4346 ]
   },
   "properties": {
   "name":"Cowans Ford",
   "capacity_mw":350,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.7372,46.6926 ]
   },
   "properties": {
   "name":"Cowiche",
   "capacity_mw":1.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.1097,46.4661 ]
   },
   "properties": {
   "name":"Cowlitz Falls",
   "capacity_mw":70,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9552,33.9249 ]
   },
   "properties": {
   "name":"Coyote Creek",
   "capacity_mw":3.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.7226,42.8056 ]
   },
   "properties": {
   "name":"Crescent",
   "capacity_mw":11.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4097,39.8259 ]
   },
   "properties": {
   "name":"Cresta",
   "capacity_mw":73.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.9461,33.4394 ]
   },
   "properties": {
   "name":"Crosscut",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1939
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.6645,43.4373 ]
   },
   "properties": {
   "name":"Croton",
   "capacity_mw":8.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1909
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.6253,38.5106 ]
   },
   "properties": {
   "name":"Crystal",
   "capacity_mw":28,
   "primary_fuel":"Hydro",
   "commissioning_year":1978
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.3345,46.1063 ]
   },
   "properties": {
   "name":"Crystal Falls",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1933
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.5009,42.6225 ]
   },
   "properties": {
   "name":"Crystal Springs",
   "capacity_mw":2.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.8281,43.2469 ]
   },
   "properties": {
   "name":"Curtis Palmer Hydroelectric",
   "capacity_mw":59,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3808,37.5929 ]
   },
   "properties": {
   "name":"Cushaw",
   "capacity_mw":7.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.2252,47.4181 ]
   },
   "properties": {
   "name":"Cushman 1",
   "capacity_mw":43.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.1603,47.3698 ]
   },
   "properties": {
   "name":"Cushman 2",
   "capacity_mw":84.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1942
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.0521,41.8347 ]
   },
   "properties": {
   "name":"Cutler Hydro",
   "capacity_mw":30,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5369,43.1033 ]
   },
   "properties": {
   "name":"Dahowa Hydro",
   "capacity_mw":10.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.4517,36.5378 ]
   },
   "properties": {
   "name":"Dale Hollow",
   "capacity_mw":54,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1369,45.6144 ]
   },
   "properties": {
   "name":"Dalles Dam North Fishway Project",
   "capacity_mw":6.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.3158,33.9865 ]
   },
   "properties": {
   "name":"Dam 2",
   "capacity_mw":102.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1999
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8269,39.4931 ]
   },
   "properties": {
   "name":"Dam No. 4 Hydro Station",
   "capacity_mw":1.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9231,39.605 ]
   },
   "properties": {
   "name":"Dam No. 5 Hydro Station",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.3725,46 ]
   },
   "properties": {
   "name":"Danbury Dam",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.1686,35.2503 ]
   },
   "properties": {
   "name":"Dardanelle",
   "capacity_mw":160.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0497,41.8217 ]
   },
   "properties": {
   "name":"Dashville",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.5707,35.197 ]
   },
   "properties": {
   "name":"Davis Dam",
   "capacity_mw":254.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.7897,41.3878 ]
   },
   "properties": {
   "name":"Dayton Hydro",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6318,39.8693 ]
   },
   "properties": {
   "name":"De Sabla",
   "capacity_mw":18.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.0958,39.53 ]
   },
   "properties": {
   "name":"Deadwood Creek",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.8914,34.5583 ]
   },
   "properties": {
   "name":"Dearborn",
   "capacity_mw":45,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.413,39.523 ]
   },
   "properties": {
   "name":"Deep Creek",
   "capacity_mw":20,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.5284,40.4044 ]
   },
   "properties": {
   "name":"Deer Creek (UT)",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.8443,39.2981 ]
   },
   "properties": {
   "name":"Deer Creek PH",
   "capacity_mw":5.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1908
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.2037,44.1346 ]
   },
   "properties": {
   "name":"Deer Rips",
   "capacity_mw":6.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7073,42.5731 ]
   },
   "properties": {
   "name":"Deerfield 2",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7335,42.5995 ]
   },
   "properties": {
   "name":"Deerfield 3",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7376,42.6198 ]
   },
   "properties": {
   "name":"Deerfield 4",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9561,42.6912 ]
   },
   "properties": {
   "name":"Deerfield 5",
   "capacity_mw":17.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1974
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6806,44.0381 ]
   },
   "properties": {
   "name":"Deferiet",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.111,34.2119 ]
   },
   "properties": {
   "name":"Degray",
   "capacity_mw":68,
   "primary_fuel":"Hydro",
   "commissioning_year":1972
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.5111,44.8281 ]
   },
   "properties": {
   "name":"Dells",
   "capacity_mw":12.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.5692,33.8181 ]
   },
   "properties": {
   "name":"Denison",
   "capacity_mw":101.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1947
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1021,41.3243 ]
   },
   "properties": {
   "name":"Derby Hydro",
   "capacity_mw":8.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.2511,44.7224 ]
   },
   "properties": {
   "name":"Detroit",
   "capacity_mw":100,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3344,34.2056 ]
   },
   "properties": {
   "name":"Devil Canyon",
   "capacity_mw":276.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4061,43.6411 ]
   },
   "properties": {
   "name":"Deweys Mill",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.8055,43.9242 ]
   },
   "properties": {
   "name":"Dexter",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0413,44.004 ]
   },
   "properties": {
   "name":"Dexter Plant",
   "capacity_mw":4.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1973
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1317,48.7139 ]
   },
   "properties": {
   "name":"Diablo",
   "capacity_mw":182.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1936
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.8861,43.9786 ]
   },
   "properties": {
   "name":"Diamond Island Plant",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1914
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0698,33.6808 ]
   },
   "properties": {
   "name":"Diamond Valley Lake",
   "capacity_mw":29.7,
   "primary_fuel":"Hydro",
   "commissioning_year":2002
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3217,44.1519 ]
   },
   "properties": {
   "name":"Diana Hydroelectric",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.268,42.836 ]
   },
   "properties": {
   "name":"Dietrich Drop",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.0662,39.6208 ]
   },
   "properties": {
   "name":"Dillon Hydro Plant",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.9675,37.8966 ]
   },
   "properties": {
   "name":"Dion R Holm",
   "capacity_mw":156.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1960
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.7028,37.7864 ]
   },
   "properties": {
   "name":"Dix Dam",
   "capacity_mw":28.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.4813,41.8453 ]
   },
   "properties": {
   "name":"Dixon Hydroelectric Dam",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0581,44.2081 ]
   },
   "properties": {
   "name":"Dodge Falls Associates",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.767,43.0906 ]
   },
   "properties": {
   "name":"Dolgeville Hydro",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.6272,44.8867 ]
   },
   "properties": {
   "name":"Domtar Paper Company Rothschild",
   "capacity_mw":4.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1910
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4202,37.696 ]
   },
   "properties": {
   "name":"Don Pedro",
   "capacity_mw":170.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1975
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.0341,38.2467 ]
   },
   "properties": {
   "name":"Donnells",
   "capacity_mw":72,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.9581,43.7867 ]
   },
   "properties": {
   "name":"Dorena Hydro-Electric Facility",
   "capacity_mw":7.5,
   "primary_fuel":"Hydro",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.6663,18.3359 ]
   },
   "properties": {
   "name":"Dos Bocas",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1942
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.5393,35.9623 ]
   },
   "properties": {
   "name":"Douglas Dam",
   "capacity_mw":150.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9427,32.7116 ]
   },
   "properties": {
   "name":"Drop 1",
   "capacity_mw":5.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.031,32.7054 ]
   },
   "properties": {
   "name":"Drop 2 (CA)",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5342,46.4492 ]
   },
   "properties": {
   "name":"Drop 2 (WA)",
   "capacity_mw":2.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1942
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.1261,32.7054 ]
   },
   "properties": {
   "name":"Drop 3 (CA)",
   "capacity_mw":9.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.56,46.4231 ]
   },
   "properties": {
   "name":"Drop 3 (WA)",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1932
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.2191,32.7053 ]
   },
   "properties": {
   "name":"Drop 4",
   "capacity_mw":19.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1946
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.8102,38.4044 ]
   },
   "properties": {
   "name":"Drop 5",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.392,32.6731 ]
   },
   "properties": {
   "name":"Drop 5",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.7674,39.2569 ]
   },
   "properties": {
   "name":"Drum 1",
   "capacity_mw":49.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.767,39.2574 ]
   },
   "properties": {
   "name":"Drum 2",
   "capacity_mw":53.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.7194,44.0274 ]
   },
   "properties": {
   "name":"Dry Creek Project",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.6511,44.6647 ]
   },
   "properties": {
   "name":"Du Bay",
   "capacity_mw":7.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1942
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.0459,29.6402 ]
   },
   "properties": {
   "name":"Dunlap TP 1",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.5027,44.3364 ]
   },
   "properties": {
   "name":"Dunn Paper",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.8356,39.217 ]
   },
   "properties": {
   "name":"Dutch Flat",
   "capacity_mw":22,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.8352,39.2184 ]
   },
   "properties": {
   "name":"Dutch Flat 2",
   "capacity_mw":27.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6109,42.1495 ]
   },
   "properties": {
   "name":"Dwight",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.2977,46.5143 ]
   },
   "properties": {
   "name":"Dworshak",
   "capacity_mw":400,
   "primary_fuel":"Hydro",
   "commissioning_year":1974
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9208,43.3189 ]
   },
   "properties": {
   "name":"E J West",
   "capacity_mw":22,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7483,43.1897 ]
   },
   "properties": {
   "name":"EHC West Hopkinton",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.2008,43.9097 ]
   },
   "properties": {
   "name":"Eagle",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.5522,28.8295 ]
   },
   "properties": {
   "name":"Eagle Pass",
   "capacity_mw":9.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1932
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.7571,42.5146 ]
   },
   "properties": {
   "name":"Eagle Point",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0359,44.3263 ]
   },
   "properties": {
   "name":"East Barnet",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.2824,32.6995 ]
   },
   "properties": {
   "name":"East Highline",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9856,44.7989 ]
   },
   "properties": {
   "name":"East Norfolk",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.6242,34.2619 ]
   },
   "properties": {
   "name":"East Portal Generator",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7955,42.2248 ]
   },
   "properties": {
   "name":"East Side",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6579,43.4472 ]
   },
   "properties": {
   "name":"Eastman Falls",
   "capacity_mw":6.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.4339,40.9648 ]
   },
   "properties": {
   "name":"Echo Dam",
   "capacity_mw":4.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3767,43.814 ]
   },
   "properties": {
   "name":"Edenville",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.332,46.4974 ]
   },
   "properties": {
   "name":"Edison Sault",
   "capacity_mw":41.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4922,39.543 ]
   },
   "properties": {
   "name":"Edward C Hyatt",
   "capacity_mw":644.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.4905,44.6384 ]
   },
   "properties": {
   "name":"Eel Weir",
   "capacity_mw":2.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.2779,43.9228 ]
   },
   "properties": {
   "name":"Effley",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1915
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -149.1501,61.4752 ]
   },
   "properties": {
   "name":"Eklutna Hydro Project",
   "capacity_mw":44.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6192,38.7936 ]
   },
   "properties": {
   "name":"El Dorado",
   "capacity_mw":20,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.3158,45.2178 ]
   },
   "properties": {
   "name":"El Dorado Hydro Elk Creek",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.7321,36.5928 ]
   },
   "properties": {
   "name":"El Vado Dam",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6699,38.331 ]
   },
   "properties": {
   "name":"Electra",
   "capacity_mw":102.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.1749,46.991 ]
   },
   "properties": {
   "name":"Electron",
   "capacity_mw":22.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.192,33.1534 ]
   },
   "properties": {
   "name":"Elephant Butte",
   "capacity_mw":27.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.965,41.6928 ]
   },
   "properties": {
   "name":"Elkhart",
   "capacity_mw":3.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1918
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.2943,35.3514 ]
   },
   "properties": {
   "name":"Ellis Hydro",
   "capacity_mw":32.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.4306,44.5442 ]
   },
   "properties": {
   "name":"Ellsworth Hydro Station",
   "capacity_mw":8.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.2883,43.9275 ]
   },
   "properties": {
   "name":"Elmer",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1916
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2545,46.3784 ]
   },
   "properties": {
   "name":"Eltopia Branch Canal 4.6",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.56,36.696 ]
   },
   "properties": {
   "name":"Emporia",
   "capacity_mw":2.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5372,43.0092 ]
   },
   "properties": {
   "name":"Ephratah",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1243,44.7866 ]
   },
   "properties": {
   "name":"Errol Hydroelectric Project",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.5097,40.3768 ]
   },
   "properties": {
   "name":"Estes",
   "capacity_mw":45,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5257,34.1035 ]
   },
   "properties": {
   "name":"Etiwanda",
   "capacity_mw":23.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1995
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.3572,35.3069 ]
   },
   "properties": {
   "name":"Eufaula Dam",
   "capacity_mw":90,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2686,37.5843 ]
   },
   "properties": {
   "name":"Exchequer",
   "capacity_mw":94.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9961,44.6534 ]
   },
   "properties": {
   "name":"Fairfax Falls",
   "capacity_mw":3.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.3308,34.3061 ]
   },
   "properties": {
   "name":"Fairfield Pumped Storage",
   "capacity_mw":587.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1979
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.1642,26.5575 ]
   },
   "properties": {
   "name":"Falcon Dam & Power",
   "capacity_mw":31.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3605,41.9856 ]
   },
   "properties": {
   "name":"Fall Creek",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1908
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3502,44.3968 ]
   },
   "properties": {
   "name":"Falls Creek",
   "capacity_mw":4.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.0753,35.3944 ]
   },
   "properties": {
   "name":"Falls Hydro",
   "capacity_mw":31.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.3535,44.0597 ]
   },
   "properties": {
   "name":"Falls River Hydro",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.3693,41.9573 ]
   },
   "properties": {
   "name":"Falls Village",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1914
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3201,45.268 ]
   },
   "properties": {
   "name":"Faraday",
   "capacity_mw":36.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1934
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.8997,43.625 ]
   },
   "properties": {
   "name":"Fargo Drop",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6658,43.2899 ]
   },
   "properties": {
   "name":"Feeder Dam Hydro Plant",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.2833,43.9135 ]
   },
   "properties": {
   "name":"Felt",
   "capacity_mw":6.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1979
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.2854,43.9097 ]
   },
   "properties": {
   "name":"Felt Hydroelectric Plant",
   "capacity_mw":7.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9776,42.6857 ]
   },
   "properties": {
   "name":"Fife Brook",
   "capacity_mw":11.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1974
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.449,43.2742 ]
   },
   "properties": {
   "name":"Fish Creek",
   "capacity_mw":11,
   "primary_fuel":"Hydro",
   "commissioning_year":1952
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.8928,34.6 ]
   },
   "properties": {
   "name":"Fishing Creek",
   "capacity_mw":42.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1916
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.6763,44.4555 ]
   },
   "properties": {
   "name":"Five Channels",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8492,44.5275 ]
   },
   "properties": {
   "name":"Five Falls",
   "capacity_mw":24,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.5844,45.8683 ]
   },
   "properties": {
   "name":"Flambeau Crowley Rapids Project",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.0472,45.4918 ]
   },
   "properties": {
   "name":"Flambeau Hydroelectric Station",
   "capacity_mw":22,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.4475,45.9135 ]
   },
   "properties": {
   "name":"Flambeau Lower Project",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -109.4217,40.9146 ]
   },
   "properties": {
   "name":"Flaming Gorge",
   "capacity_mw":151.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0742,44.2217 ]
   },
   "properties": {
   "name":"Flat Rock",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.236,40.365 ]
   },
   "properties": {
   "name":"Flatiron",
   "capacity_mw":94.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5933,39.2851 ]
   },
   "properties": {
   "name":"Fleish",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1914
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.2947,46.2275 ]
   },
   "properties": {
   "name":"Flint Creek Hydroelectric LLC",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.1376,31.6028 ]
   },
   "properties": {
   "name":"Flint River",
   "capacity_mw":5.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1584,38.7067 ]
   },
   "properties": {
   "name":"Folsom",
   "capacity_mw":198.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.2939,46.6668 ]
   },
   "properties": {
   "name":"Fond Du Lac",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3971,34.1552 ]
   },
   "properties": {
   "name":"Fontana",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1918
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.805,35.4507 ]
   },
   "properties": {
   "name":"Fontana Dam",
   "capacity_mw":254.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.064,42.027 ]
   },
   "properties": {
   "name":"Fontenelle",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.4407,44.4354 ]
   },
   "properties": {
   "name":"Foote",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1918
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4944,34.3182 ]
   },
   "properties": {
   "name":"Foothill",
   "capacity_mw":9.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1971
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.6092,34.5148 ]
   },
   "properties": {
   "name":"Foothill Feeder",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.0657,39.4588 ]
   },
   "properties": {
   "name":"Foothills Hydro Plant",
   "capacity_mw":3.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2788,39.551 ]
   },
   "properties": {
   "name":"Forbestown",
   "capacity_mw":41.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.9493,46.3838 ]
   },
   "properties": {
   "name":"Ford Hydro LP",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.2159,43.4425 ]
   },
   "properties": {
   "name":"Forestport",
   "capacity_mw":3.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6319,39.8693 ]
   },
   "properties": {
   "name":"Forks of Butte Hydro Project",
   "capacity_mw":14.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1992
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.2269,35.8693 ]
   },
   "properties": {
   "name":"Fort Gibson",
   "capacity_mw":44.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.2431,35.7917 ]
   },
   "properties": {
   "name":"Fort Loudoun",
   "capacity_mw":153.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1946
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5841,43.1609 ]
   },
   "properties": {
   "name":"Fort Miller Hydroelectric Facility",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.5086,36.4982 ]
   },
   "properties": {
   "name":"Fort Patrick Henry",
   "capacity_mw":59.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.4123,48.0122 ]
   },
   "properties": {
   "name":"Fort Peck",
   "capacity_mw":185.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.5539,43.0653 ]
   },
   "properties": {
   "name":"Fort Randall",
   "capacity_mw":320,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.6712,44.4146 ]
   },
   "properties": {
   "name":"Foster",
   "capacity_mw":20,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.5025,45.0933 ]
   },
   "properties": {
   "name":"Four Mile Hydropower Project",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1992
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6917,42.7876 ]
   },
   "properties": {
   "name":"Fourth Branch Hydroelectric Facility",
   "capacity_mw":3.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.807,37.8304 ]
   },
   "properties": {
   "name":"Frankenheimer Power Plant",
   "capacity_mw":5.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4134,34.1039 ]
   },
   "properties": {
   "name":"Franklin (CA)",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.3708,35.2194 ]
   },
   "properties": {
   "name":"Franklin (NC)",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9725,44.4372 ]
   },
   "properties": {
   "name":"Franklin (NY)",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6446,43.4461 ]
   },
   "properties": {
   "name":"Franklin Industrial Complex",
   "capacity_mw":1.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.7959,42.4766 ]
   },
   "properties": {
   "name":"Fremont Canyon",
   "capacity_mw":66.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1961
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.4407,42.2143 ]
   },
   "properties": {
   "name":"French Landing Dam",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4061,39.078 ]
   },
   "properties": {
   "name":"French Meadows",
   "capacity_mw":15.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.2592,41.8203 ]
   },
   "properties": {
   "name":"French Paper Hydro",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.7035,36.9977 ]
   },
   "properties": {
   "name":"Friant Hydro Facility",
   "capacity_mw":37.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.9856,36.7151 ]
   },
   "properties": {
   "name":"Fries Hydroelectric Project",
   "capacity_mw":5.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.419,43.3241 ]
   },
   "properties": {
   "name":"Fulton Hydro",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.1778,42.8489 ]
   },
   "properties": {
   "name":"Galesville Project",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.4795,31.4033 ]
   },
   "properties": {
   "name":"Gantt",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1961
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.7857,44.2218 ]
   },
   "properties": {
   "name":"Gardiner",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7308,42.5914 ]
   },
   "properties": {
   "name":"Gardners Falls",
   "capacity_mw":3.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.8644,44.7264 ]
   },
   "properties": {
   "name":"Garland Canal Power Plant",
   "capacity_mw":2.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.4115,47.4945 ]
   },
   "properties": {
   "name":"Garrison",
   "capacity_mw":614,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5094,43.1655 ]
   },
   "properties": {
   "name":"Garvins Falls",
   "capacity_mw":12.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1956
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.7346,18.0941 ]
   },
   "properties": {
   "name":"Garzas 1",
   "capacity_mw":7.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1941
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.7305,18.0727 ]
   },
   "properties": {
   "name":"Garzas 2",
   "capacity_mw":5.04,
   "primary_fuel":"Hydro",
   "commissioning_year":1941
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8115,36.4991 ]
   },
   "properties": {
   "name":"Gaston",
   "capacity_mw":177.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5975,35.1381 ]
   },
   "properties": {
   "name":"Gaston Shoals",
   "capacity_mw":6.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1915
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.8314,41.1365 ]
   },
   "properties": {
   "name":"Gateway",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.8906,38.2192 ]
   },
   "properties": {
   "name":"Gauley River Power Partners",
   "capacity_mw":80,
   "primary_fuel":"Hydro",
   "commissioning_year":2001
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.4815,42.8488 ]
   },
   "properties": {
   "name":"Gavins Point",
   "capacity_mw":132.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1956
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -159.6294,21.9178 ]
   },
   "properties": {
   "name":"Gay Robinson",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1995
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.1019,43.4202 ]
   },
   "properties": {
   "name":"Gem State",
   "capacity_mw":23.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.8597,43.2597 ]
   },
   "properties": {
   "name":"General Electric Great Falls Upper Hydro",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.6978,39.6919 ]
   },
   "properties": {
   "name":"Georgetown Hydro",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1907
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7228,44.4122 ]
   },
   "properties": {
   "name":"Gilman Mill",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9758,43.6368 ]
   },
   "properties": {
   "name":"Glen",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.4839,36.9366 ]
   },
   "properties": {
   "name":"Glen Canyon Dam",
   "capacity_mw":1312,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2147,38.1483 ]
   },
   "properties": {
   "name":"Glen Ferris Hydro",
   "capacity_mw":6.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1915
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.9612,44.0006 ]
   },
   "properties": {
   "name":"Glen Park Hydroelectric Project",
   "capacity_mw":32.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1999
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.9555,42.4673 ]
   },
   "properties": {
   "name":"Glendo",
   "capacity_mw":38,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3906,43.2358 ]
   },
   "properties": {
   "name":"Glenwood Hydro",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -135.2123,59.5357 ]
   },
   "properties": {
   "name":"Goat Lake Hydro",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1998
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.0805,32.6097 ]
   },
   "properties": {
   "name":"Goat Rock",
   "capacity_mw":38.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.4552,29.4972 ]
   },
   "properties": {
   "name":"Gonzales Hydro Plant",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.0194,41.9886 ]
   },
   "properties": {
   "name":"Goodwin Hydroelectric",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9836,42.5025 ]
   },
   "properties": {
   "name":"Goodyear Lake Plant",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2086,48.6981 ]
   },
   "properties": {
   "name":"Gorge",
   "capacity_mw":207.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1938
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1693,44.49 ]
   },
   "properties": {
   "name":"Gorge 18",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1954,44.4083 ]
   },
   "properties": {
   "name":"Gorham",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.4347,40.37 ]
   },
   "properties": {
   "name":"Gosselin Hydro Plant",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3391,43.6126 ]
   },
   "properties": {
   "name":"Gouldtown",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.794,42.5367 ]
   },
   "properties": {
   "name":"Grace",
   "capacity_mw":33,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5106,41.8592 ]
   },
   "properties": {
   "name":"Grahamsville",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":1956
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.4208,43.3234 ]
   },
   "properties": {
   "name":"Granby",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.8683,40.1464 ]
   },
   "properties": {
   "name":"Granby Hydro",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.9773,47.9575 ]
   },
   "properties": {
   "name":"Grand Coulee",
   "capacity_mw":6809,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.6494,45.3547 ]
   },
   "properties": {
   "name":"Grand Rapids",
   "capacity_mw":7.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.3456,39.1017 ]
   },
   "properties": {
   "name":"Grand Valley Project Power Plant",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1932
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.7917,45.3019 ]
   },
   "properties": {
   "name":"Grandfather Falls",
   "capacity_mw":17.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1939
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.7821,40.6192 ]
   },
   "properties": {
   "name":"Granite",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1896
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.5345,44.8117 ]
   },
   "properties": {
   "name":"Granite Falls",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.3384,30.556 ]
   },
   "properties": {
   "name":"Granite Shoals",
   "capacity_mw":54,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.9827,33.477 ]
   },
   "properties": {
   "name":"Graniteville Enterprise Division",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.8917,34.5592 ]
   },
   "properties": {
   "name":"Great Falls (SC)",
   "capacity_mw":24,
   "primary_fuel":"Hydro",
   "commissioning_year":1907
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.6341,35.8067 ]
   },
   "properties": {
   "name":"Great Falls (TN)",
   "capacity_mw":33.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.9989,44.5002 ]
   },
   "properties": {
   "name":"Great Falls (VT)",
   "capacity_mw":1.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.181,40.9153 ]
   },
   "properties": {
   "name":"Great Falls Hydro Project",
   "capacity_mw":12.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.7044,45.6472 ]
   },
   "properties": {
   "name":"Great Lakes Hydro America - ME",
   "capacity_mw":138,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6902,42.7481 ]
   },
   "properties": {
   "name":"Green Island Hydroelectric Station",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -135.1227,56.9863 ]
   },
   "properties": {
   "name":"Green Lake",
   "capacity_mw":18.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.3327,39.8788 ]
   },
   "properties": {
   "name":"Green Mountain",
   "capacity_mw":26,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5494,44.4494 ]
   },
   "properties": {
   "name":"Green Peter",
   "capacity_mw":80,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5479,42.1212 ]
   },
   "properties": {
   "name":"Green Springs",
   "capacity_mw":17.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1960
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.8594,38.6472 ]
   },
   "properties": {
   "name":"Greenup Hydro",
   "capacity_mw":70.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.9953,35.5207 ]
   },
   "properties": {
   "name":"Greers Ferry Lake",
   "capacity_mw":96,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3516,34.2079 ]
   },
   "properties": {
   "name":"Greg Avenue",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5679,43.0168 ]
   },
   "properties": {
   "name":"Gregg Falls",
   "capacity_mw":3.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2792,39.8893 ]
   },
   "properties": {
   "name":"Grizzly",
   "capacity_mw":22,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.3565,39.9456 ]
   },
   "properties": {
   "name":"Gross Hydro Plant",
   "capacity_mw":7.8,
   "primary_fuel":"Hydro",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4947,45.5558 ]
   },
   "properties": {
   "name":"Ground Water Pumping Station",
   "capacity_mw":5.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.7606,42.2899 ]
   },
   "properties": {
   "name":"Guernsey",
   "capacity_mw":6.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.2094,44.1529 ]
   },
   "properties": {
   "name":"Gulf Island",
   "capacity_mw":19.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.3939,34.4213 ]
   },
   "properties": {
   "name":"Guntersville",
   "capacity_mw":115.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.6249,29.4952 ]
   },
   "properties": {
   "name":"H 4",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.4919,29.4681 ]
   },
   "properties": {
   "name":"H 5",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8144,47.9084 ]
   },
   "properties": {
   "name":"H M Jackson",
   "capacity_mw":111.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.0524,33.7845 ]
   },
   "properties": {
   "name":"H Neely Henry Dam",
   "capacity_mw":72.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0203,36.9274 ]
   },
   "properties": {
   "name":"Haas",
   "capacity_mw":135,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6036,42.2119 ]
   },
   "properties": {
   "name":"Hadley Falls",
   "capacity_mw":33.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.445,44.3117 ]
   },
   "properties": {
   "name":"Hailesboro 4 Plant",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9567,36.1097 ]
   },
   "properties": {
   "name":"Haiwee",
   "capacity_mw":5.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9236,36.7817 ]
   },
   "properties": {
   "name":"Halifax",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1915
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.0419,38.957 ]
   },
   "properties": {
   "name":"Halsey",
   "capacity_mw":13.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.0895,40.2687 ]
   },
   "properties": {
   "name":"Hamilton Branch",
   "capacity_mw":5.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.5558,39.4128 ]
   },
   "properties": {
   "name":"Hamilton Hydro",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3665,44.2965 ]
   },
   "properties": {
   "name":"Hampshire Paper",
   "capacity_mw":3.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9733,44.6192 ]
   },
   "properties": {
   "name":"Hannawa",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.6299,43.4866 ]
   },
   "properties": {
   "name":"Hardy",
   "capacity_mw":31.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9144,42.7936 ]
   },
   "properties": {
   "name":"Harriman",
   "capacity_mw":33.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.616,33.2583 ]
   },
   "properties": {
   "name":"Harris Dam",
   "capacity_mw":135,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5929,42.2052 ]
   },
   "properties": {
   "name":"Harris Energy Realty",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.8658,45.4592 ]
   },
   "properties": {
   "name":"Harris Hydro",
   "capacity_mw":76.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.4062,38.2623 ]
   },
   "properties": {
   "name":"Harry Truman",
   "capacity_mw":161.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.8219,34.3564 ]
   },
   "properties": {
   "name":"Hartwell Lake",
   "capacity_mw":420,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.8677,44.7602 ]
   },
   "properties": {
   "name":"Hastings City Hydroelectric",
   "capacity_mw":4.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1992
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.5445,40.9293 ]
   },
   "properties": {
   "name":"Hat Creek 1",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.5487,40.9607 ]
   },
   "properties": {
   "name":"Hat Creek 2",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.4806,45.5711 ]
   },
   "properties": {
   "name":"Hat Rapids",
   "capacity_mw":1.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9204,40.8741 ]
   },
   "properties": {
   "name":"Hatchet Creek Project",
   "capacity_mw":6.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.8873,46.7659 ]
   },
   "properties": {
   "name":"Hauser",
   "capacity_mw":14.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3244,35.9483 ]
   },
   "properties": {
   "name":"Haw River Hydro",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1753,38.1478 ]
   },
   "properties": {
   "name":"Hawks Nest Hydro",
   "capacity_mw":102,
   "primary_fuel":"Hydro",
   "commissioning_year":1936
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5817,39.5657 ]
   },
   "properties": {
   "name":"Haypress",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.093,42.6051 ]
   },
   "properties": {
   "name":"Hazelton B Hydro",
   "capacity_mw":7.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.3958,42.7628 ]
   },
   "properties": {
   "name":"Head of U Canal Hydro Project",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.2774,34.1683 ]
   },
   "properties": {
   "name":"Headgate Rock",
   "capacity_mw":19.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -109.1296,44.5138 ]
   },
   "properties": {
   "name":"Heart Mountain",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.7008,45.2439 ]
   },
   "properties": {
   "name":"Hells Canyon",
   "capacity_mw":391.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.9683,37.0293 ]
   },
   "properties": {
   "name":"Helms Pumped Storage",
   "capacity_mw":1053,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.225,46.1311 ]
   },
   "properties": {
   "name":"Hemlock Falls",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.2542,44.9824 ]
   },
   "properties": {
   "name":"Hennepin Island",
   "capacity_mw":13.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9834,43.0336 ]
   },
   "properties": {
   "name":"Herkimer",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6511,44.0217 ]
   },
   "properties": {
   "name":"Herrings",
   "capacity_mw":5.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.4042,44.6172 ]
   },
   "properties": {
   "name":"Heuvelton",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0079,44.7052 ]
   },
   "properties": {
   "name":"Hewittville Hydroelectric",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.7462,37.6215 ]
   },
   "properties": {
   "name":"Hickman",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1979
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.4961,43.4436 ]
   },
   "properties": {
   "name":"High Dam",
   "capacity_mw":11.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1934
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.1997,45.2794 ]
   },
   "properties": {
   "name":"High Falls (WI)",
   "capacity_mw":7,
   "primary_fuel":"Hydro",
   "commissioning_year":1910
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3731,43.9247 ]
   },
   "properties": {
   "name":"High Falls - Croghan NY",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.7492,44.6389 ]
   },
   "properties": {
   "name":"High Falls - Saranac NY",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1952
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.2339,35.6008 ]
   },
   "properties": {
   "name":"High Rock Hydro",
   "capacity_mw":33,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.5049,33.8165 ]
   },
   "properties": {
   "name":"High Shoals Hydro (GA)",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.201,35.3943 ]
   },
   "properties": {
   "name":"High Shoals Hydro (NC)",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1934
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.0511,44.9336 ]
   },
   "properties": {
   "name":"Highgate Falls",
   "capacity_mw":11.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9331,44.5306 ]
   },
   "properties": {
   "name":"Higley",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":2003
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.9138,39.6419 ]
   },
   "properties": {
   "name":"Hillcrest Pump Station",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4238,43.7107 ]
   },
   "properties": {
   "name":"Hills Creek",
   "capacity_mw":30,
   "primary_fuel":"Hydro",
   "commissioning_year":1962
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.894,43.1139 ]
   },
   "properties": {
   "name":"Hillsborough Hosiery",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7969,43.8525 ]
   },
   "properties": {
   "name":"Hiram",
   "capacity_mw":10.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1969
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.1775,35.1509 ]
   },
   "properties": {
   "name":"Hiwassee Dam",
   "capacity_mw":165.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.82,44.3629 ]
   },
   "properties": {
   "name":"Hodenpyl",
   "capacity_mw":17,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.5686,46.5628 ]
   },
   "properties": {
   "name":"Hoist",
   "capacity_mw":3.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3006,37.5035 ]
   },
   "properties": {
   "name":"Holcomb Rock",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.1272,45.2236 ]
   },
   "properties": {
   "name":"Holcombe",
   "capacity_mw":33.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.375,34.5275 ]
   },
   "properties": {
   "name":"Hollidays Bridge Hydro",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1997
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3361,44.2965 ]
   },
   "properties": {
   "name":"Hollow Dam Power Partnership",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.4495,33.2553 ]
   },
   "properties": {
   "name":"Holt Dam",
   "capacity_mw":46.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.0047,46.9915 ]
   },
   "properties": {
   "name":"Holter",
   "capacity_mw":38.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1918
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.3318,39.8272 ]
   },
   "properties": {
   "name":"Holtwood",
   "capacity_mw":247.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4657,43.1017 ]
   },
   "properties": {
   "name":"Hooksett",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.738,36.0155 ]
   },
   "properties": {
   "name":"Hoover Dam (AZ)",
   "capacity_mw":1039.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1944
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.738,36.0155 ]
   },
   "properties": {
   "name":"Hoover Dam (NV)",
   "capacity_mw":1039.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1941
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.344,33.5907 ]
   },
   "properties": {
   "name":"Horse Mesa",
   "capacity_mw":129.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1962
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.2442,43.9041 ]
   },
   "properties": {
   "name":"Horseshoe Bend Hydroelectric Co",
   "capacity_mw":9.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1995
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5956,43.2958 ]
   },
   "properties": {
   "name":"Hudson Falls Hydroelectric Project",
   "capacity_mw":44,
   "primary_fuel":"Hydro",
   "commissioning_year":1995
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -145.6794,60.6128 ]
   },
   "properties": {
   "name":"Humpback Creek",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.0144,48.3415 ]
   },
   "properties": {
   "name":"Hungry Horse",
   "capacity_mw":428,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1961,44.0703 ]
   },
   "properties": {
   "name":"Huntington Falls",
   "capacity_mw":5.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6916,43.1709 ]
   },
   "properties": {
   "name":"Hydraulic Race",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1942
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.7832,41.7437 ]
   },
   "properties": {
   "name":"Hydro II",
   "capacity_mw":6.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.746,41.7464 ]
   },
   "properties": {
   "name":"Hydro III",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.6192,44.563 ]
   },
   "properties": {
   "name":"Hydro Kennebec Project",
   "capacity_mw":15.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.5381,41.9711 ]
   },
   "properties": {
   "name":"Hydro Plant",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.3344,39.2056 ]
   },
   "properties": {
   "name":"Hydro Plant No 3",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.8798,46.2498 ]
   },
   "properties": {
   "name":"Ice Harbor",
   "capacity_mw":603,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5076,42.161 ]
   },
   "properties": {
   "name":"Indian Orchard",
   "capacity_mw":3.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5356,39.0788 ]
   },
   "properties": {
   "name":"Indian Valley Dam Hydro Project",
   "capacity_mw":2.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7643,43.061 ]
   },
   "properties": {
   "name":"Inghams",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.3854,30.7316 ]
   },
   "properties": {
   "name":"Inks",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1938
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9655,40.401 ]
   },
   "properties": {
   "name":"Inskip",
   "capacity_mw":7.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1979
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.4043,48.6081 ]
   },
   "properties": {
   "name":"International Falls Power",
   "capacity_mw":14.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1941
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.221,44.5037 ]
   },
   "properties": {
   "name":"International Paper Jay Hydro",
   "capacity_mw":3.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.1873,44.4705 ]
   },
   "properties": {
   "name":"International Paper Livermore Hydro",
   "capacity_mw":9.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.2491,44.5034 ]
   },
   "properties": {
   "name":"International Paper Riley Hydro",
   "capacity_mw":6.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.8275,42.1634 ]
   },
   "properties": {
   "name":"International Paper Woronoco Mill",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.6977,42.07 ]
   },
   "properties": {
   "name":"Iowa Hydro LLC",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4368,41.933 ]
   },
   "properties": {
   "name":"Iron Gate",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":1962
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4822,35.6439 ]
   },
   "properties": {
   "name":"Isabella Hydro Project",
   "capacity_mw":11.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.396,44.4183 ]
   },
   "properties": {
   "name":"Island Park",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.6183,35.7716 ]
   },
   "properties": {
   "name":"Ivy River Hydro",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.6186,36.1564 ]
   },
   "properties": {
   "name":"J P Priest",
   "capacity_mw":28,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2567,37.1479 ]
   },
   "properties": {
   "name":"J S Eastwood",
   "capacity_mw":199.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.1961,33.6602 ]
   },
   "properties": {
   "name":"J Strom Thurmond",
   "capacity_mw":361.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.8639,30.7086 ]
   },
   "properties": {
   "name":"J Woodruff",
   "capacity_mw":43.5,
   "primary_fuel":"Hydro",
   "commissioning_year":2002
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.9489,43.1106 ]
   },
   "properties": {
   "name":"Jackman",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9752,40.9923 ]
   },
   "properties": {
   "name":"James B Black",
   "capacity_mw":168.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.4105,46.5716 ]
   },
   "properties": {
   "name":"James R Smith",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.109,43.3121 ]
   },
   "properties": {
   "name":"Jarvis (Hinckley)",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5318,38.834 ]
   },
   "properties": {
   "name":"Jaybird",
   "capacity_mw":161.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1962
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.9909,33.2444 ]
   },
   "properties": {
   "name":"Jefferies",
   "capacity_mw":145.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.3979,40.9594 ]
   },
   "properties": {
   "name":"Jeffrey",
   "capacity_mw":21.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1941
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.274,45.051 ]
   },
   "properties": {
   "name":"Jim Falls",
   "capacity_mw":59.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.9147,34.9594 ]
   },
   "properties": {
   "name":"Jocassee",
   "capacity_mw":774,
   "primary_fuel":"Hydro",
   "commissioning_year":1975
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.0703,42.0936 ]
   },
   "properties": {
   "name":"John C Boyle",
   "capacity_mw":98.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6941,45.7164 ]
   },
   "properties": {
   "name":"John Day",
   "capacity_mw":2160,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3005,36.5994 ]
   },
   "properties": {
   "name":"John H Kerr",
   "capacity_mw":296.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.8178,40.6936 ]
   },
   "properties": {
   "name":"Johnson 1",
   "capacity_mw":21.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1941
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.7447,40.6839 ]
   },
   "properties": {
   "name":"Johnson 2",
   "capacity_mw":22.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1941
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.1603,45.2875 ]
   },
   "properties": {
   "name":"Johnson Falls",
   "capacity_mw":3.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5089,42.9204 ]
   },
   "properties": {
   "name":"Johnsonville Dam",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1909
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.7843,32.3242 ]
   },
   "properties": {
   "name":"Jones Bluff",
   "capacity_mw":82,
   "primary_fuel":"Hydro",
   "commissioning_year":1975
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3819,38.8503 ]
   },
   "properties": {
   "name":"Jones Fork",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.2548,32.6189 ]
   },
   "properties": {
   "name":"Jordan Dam",
   "capacity_mw":100,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0683,35.6547 ]
   },
   "properties": {
   "name":"Jordan Hydroelectric Project",
   "capacity_mw":4.4,
   "primary_fuel":"Hydro",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.4236,40.5966 ]
   },
   "properties": {
   "name":"Jordanelle Dam Hydroelectric Project",
   "capacity_mw":13,
   "primary_fuel":"Hydro",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.627,40.6469 ]
   },
   "properties": {
   "name":"Judge F Carr",
   "capacity_mw":154.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2697,44.1427 ]
   },
   "properties": {
   "name":"Juniper Ridge Hydroelectric Project",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.4353,42.5948 ]
   },
   "properties": {
   "name":"K W Company",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -156.3569,20.8886 ]
   },
   "properties": {
   "name":"Kaheka Hydro",
   "capacity_mw":4.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -159.5286,21.9361 ]
   },
   "properties": {
   "name":"Kalaheo Hydro",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.7967,44.0117 ]
   },
   "properties": {
   "name":"Kamargo",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2961,39.5589 ]
   },
   "properties": {
   "name":"Kanaka",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.8681,41.1128 ]
   },
   "properties": {
   "name":"Kankakee Hydro Facility",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.2351,38.974 ]
   },
   "properties": {
   "name":"Kansas River Project",
   "capacity_mw":7,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -135.3408,59.4072 ]
   },
   "properties": {
   "name":"Kasidaya Creek Hydro",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.3191,44.2746 ]
   },
   "properties": {
   "name":"Kaukauna City Hydro",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1942
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.9278,36.6994 ]
   },
   "properties": {
   "name":"Kaw Hydro",
   "capacity_mw":37,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.862,36.4651 ]
   },
   "properties": {
   "name":"Kaweah 1",
   "capacity_mw":2.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.8799,36.4613 ]
   },
   "properties": {
   "name":"Kaweah 2",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.8356,36.4861 ]
   },
   "properties": {
   "name":"Kaweah 3",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.1008,40.7035 ]
   },
   "properties": {
   "name":"Kearney",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.509,40.0941 ]
   },
   "properties": {
   "name":"Kekawaka Power House",
   "capacity_mw":4.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4912,39.5318 ]
   },
   "properties": {
   "name":"Kelly Ridge",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5967,44.7053 ]
   },
   "properties": {
   "name":"Kent Falls",
   "capacity_mw":12.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1956
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.2692,37.0131 ]
   },
   "properties": {
   "name":"Kentucky Dam",
   "capacity_mw":218.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1945
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.3719,40.3965 ]
   },
   "properties": {
   "name":"Keokuk",
   "capacity_mw":124.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.8872,34.7981 ]
   },
   "properties": {
   "name":"Keowee",
   "capacity_mw":157.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1971
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5528,37.0925 ]
   },
   "properties": {
   "name":"Kerckhoff",
   "capacity_mw":22.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.558,37.0718 ]
   },
   "properties": {
   "name":"Kerckhoff 2",
   "capacity_mw":139.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.7965,35.4407 ]
   },
   "properties": {
   "name":"Kern Canyon",
   "capacity_mw":9.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.7796,35.4603 ]
   },
   "properties": {
   "name":"Kern River 1",
   "capacity_mw":26.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1907
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4362,35.7762 ]
   },
   "properties": {
   "name":"Kern River 3",
   "capacity_mw":40.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4464,40.6119 ]
   },
   "properties": {
   "name":"Keswick",
   "capacity_mw":117,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -131.6334,55.3446 ]
   },
   "properties": {
   "name":"Ketchikan",
   "capacity_mw":4.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.2517,36.1508 ]
   },
   "properties": {
   "name":"Keystone Dam",
   "capacity_mw":70,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8733,40.6778 ]
   },
   "properties": {
   "name":"Kilarc",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1904
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.7808,43.6258 ]
   },
   "properties": {
   "name":"Kilbourn",
   "capacity_mw":9.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1935
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.3344,44.2769 ]
   },
   "properties": {
   "name":"Kimberly Mill",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.9912,33.4852 ]
   },
   "properties": {
   "name":"King Mill",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1944
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6338,43.9173 ]
   },
   "properties": {
   "name":"Kings Falls Hydroelectric",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.1588,36.8882 ]
   },
   "properties": {
   "name":"Kings River PH",
   "capacity_mw":48.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1962
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.1251,45.808 ]
   },
   "properties": {
   "name":"Kingsford",
   "capacity_mw":7.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.6681,41.2114 ]
   },
   "properties": {
   "name":"Kingsley",
   "capacity_mw":50,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.0856,41.3686 ]
   },
   "properties": {
   "name":"Kinneytown New Old",
   "capacity_mw":2.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1992
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3333,45.392 ]
   },
   "properties": {
   "name":"Kleber",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1941
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.4486,46.7266 ]
   },
   "properties": {
   "name":"Knife Falls",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7233,48.6802 ]
   },
   "properties": {
   "name":"Koma Kulshan Associates",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.8805,42.1743 ]
   },
   "properties": {
   "name":"Kortes",
   "capacity_mw":36,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3327,43.6142 ]
   },
   "properties": {
   "name":"Kosterville",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.7957,42.9457 ]
   },
   "properties": {
   "name":"Koyle Ranch Hydroelectric Project",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.0769,45.8883 ]
   },
   "properties": {
   "name":"LAC Courte Oreilles Hydroelect",
   "capacity_mw":3.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4436,37.6697 ]
   },
   "properties": {
   "name":"La Grange",
   "capacity_mw":4.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3196,46.8328 ]
   },
   "properties": {
   "name":"LaGrande",
   "capacity_mw":64,
   "primary_fuel":"Hydro",
   "commissioning_year":1933
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.4207,43.849 ]
   },
   "properties": {
   "name":"Lachute Hydro Lower",
   "capacity_mw":3.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.4312,43.8439 ]
   },
   "properties": {
   "name":"Lachute Hydro Upper",
   "capacity_mw":5.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.6854,44.5975 ]
   },
   "properties": {
   "name":"Lacomb Irrigation District",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.0836,45.4644 ]
   },
   "properties": {
   "name":"Ladysmith Dam",
   "capacity_mw":3.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1960
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0667,39.4625 ]
   },
   "properties": {
   "name":"Lahontan",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1911
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.942,31.8477 ]
   },
   "properties": {
   "name":"Lake Blackshear Project",
   "capacity_mw":17.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.3125,40.4936 ]
   },
   "properties": {
   "name":"Lake Creek Dam",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -134.0533,58.2325 ]
   },
   "properties": {
   "name":"Lake Dorothy Hydroelectric Project",
   "capacity_mw":14.3,
   "primary_fuel":"Hydro",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.1194,33.0586 ]
   },
   "properties": {
   "name":"Lake Hodges Hydroelectric Facility",
   "capacity_mw":42,
   "primary_fuel":"Hydro",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.184,35.4259 ]
   },
   "properties": {
   "name":"Lake Lure",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.8561,39.7203 ]
   },
   "properties": {
   "name":"Lake Lynn Hydro Station",
   "capacity_mw":51.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4537,33.8553 ]
   },
   "properties": {
   "name":"Lake Mathews",
   "capacity_mw":4.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.1856,39.1972 ]
   },
   "properties": {
   "name":"Lake Mendocino",
   "capacity_mw":3.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.1678,32.8138 ]
   },
   "properties": {
   "name":"Langdale",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.7053,42.6033 ]
   },
   "properties": {
   "name":"Last Chance",
   "capacity_mw":1.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.8903,42.6474 ]
   },
   "properties": {
   "name":"Lateral 10 Ventures",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.27,36.9614 ]
   },
   "properties": {
   "name":"Laurel Dam",
   "capacity_mw":70,
   "primary_fuel":"Hydro",
   "commissioning_year":1977
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1653,42.6994 ]
   },
   "properties": {
   "name":"Lawrence Hydroelectric Associates",
   "capacity_mw":14.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.5187,32.9633 ]
   },
   "properties": {
   "name":"Lay Dam",
   "capacity_mw":177,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.6892,44.1011 ]
   },
   "properties": {
   "name":"Leaburg",
   "capacity_mw":15.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1939
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.3929,35.4845 ]
   },
   "properties": {
   "name":"Lee Creek Water Treatment Facility",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1992
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.4025,37.0933 ]
   },
   "properties": {
   "name":"Leesville",
   "capacity_mw":40,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.2494,43.3558 ]
   },
   "properties": {
   "name":"Lemolo 1",
   "capacity_mw":32,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4025,43.2806 ]
   },
   "properties": {
   "name":"Lemolo 2",
   "capacity_mw":38.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1956
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.1077,33.9406 ]
   },
   "properties": {
   "name":"Lewis Smith Dam",
   "capacity_mw":181,
   "primary_fuel":"Hydro",
   "commissioning_year":1962
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.022,43.143 ]
   },
   "properties": {
   "name":"Lewiston Niagara",
   "capacity_mw":240,
   "primary_fuel":"Hydro",
   "commissioning_year":1962
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.9638,33.0685 ]
   },
   "properties": {
   "name":"Lewisville",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1992
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.3143,48.4098 ]
   },
   "properties": {
   "name":"Libby",
   "capacity_mw":525,
   "primary_fuel":"Hydro",
   "commissioning_year":1977
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.9703,43.5241 ]
   },
   "properties": {
   "name":"Lighthouse Hill",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.1153,47.4706 ]
   },
   "properties": {
   "name":"Lilliwaup Falls Generating",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.571,39.6988 ]
   },
   "properties": {
   "name":"Lime Saddle",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1906
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.2556,44.2799 ]
   },
   "properties": {
   "name":"Little Chute",
   "capacity_mw":3.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.8006,40.585 ]
   },
   "properties": {
   "name":"Little Cottonwood",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.3691,45.975 ]
   },
   "properties": {
   "name":"Little Falls (MN)",
   "capacity_mw":4.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1933
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9167,47.8217 ]
   },
   "properties": {
   "name":"Little Falls (WA)",
   "capacity_mw":34.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1911
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8506,43.0403 ]
   },
   "properties": {
   "name":"Little Falls Hydro",
   "capacity_mw":13,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0273,46.5838 ]
   },
   "properties": {
   "name":"Little Goose",
   "capacity_mw":810,
   "primary_fuel":"Hydro",
   "commissioning_year":1974
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.6616,42.6296 ]
   },
   "properties": {
   "name":"Little Mac Project",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.9894,45.7736 ]
   },
   "properties": {
   "name":"Little Quinnesec Falls Hydro Project",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1909
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.0256,43.4252 ]
   },
   "properties": {
   "name":"Little Wood Hydro Project",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.8419,33.3208 ]
   },
   "properties": {
   "name":"Lloyd Shoals",
   "capacity_mw":14.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5336,43.4732 ]
   },
   "properties": {
   "name":"Lochmere Hydroelectric Plant",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.4561,34.7792 ]
   },
   "properties": {
   "name":"Lockhart",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.0789,41.5697 ]
   },
   "properties": {
   "name":"Lockport Powerhouse",
   "capacity_mw":16,
   "primary_fuel":"Hydro",
   "commissioning_year":2001
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0912,35.6184 ]
   },
   "properties": {
   "name":"Lockville Hydropower",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.6292,44.5467 ]
   },
   "properties": {
   "name":"Lockwood Hydroelectric Facility",
   "capacity_mw":7.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.3375,33.4259 ]
   },
   "properties": {
   "name":"Logan Martin Dam",
   "capacity_mw":128.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.3706,38.1944 ]
   },
   "properties": {
   "name":"London",
   "capacity_mw":14.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1936
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.8361,47.8344 ]
   },
   "properties": {
   "name":"Long Lake",
   "capacity_mw":70,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6247,43.9808 ]
   },
   "properties": {
   "name":"Longfalls Facility",
   "capacity_mw":3.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.7531,43.9153 ]
   },
   "properties": {
   "name":"Lookout Point",
   "capacity_mw":120,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.0894,35.7575 ]
   },
   "properties": {
   "name":"Lookout Shoals",
   "capacity_mw":25.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1916
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3245,38.9827 ]
   },
   "properties": {
   "name":"Loon Lake",
   "capacity_mw":74.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1971
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.6772,42.6717 ]
   },
   "properties": {
   "name":"Lost Creek",
   "capacity_mw":49,
   "primary_fuel":"Hydro",
   "commissioning_year":1978
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4145,40.7576 ]
   },
   "properties": {
   "name":"Lost Creek I",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.7208,44.4631 ]
   },
   "properties": {
   "name":"Loud",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.3801,42.4771 ]
   },
   "properties": {
   "name":"Low Line Rapids",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7407,48.5478 ]
   },
   "properties": {
   "name":"Lower Baker",
   "capacity_mw":111.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1974
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.4306,43.8844 ]
   },
   "properties": {
   "name":"Lower Beaver Falls Project",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4294,46.6595 ]
   },
   "properties": {
   "name":"Lower Granite",
   "capacity_mw":810,
   "primary_fuel":"Hydro",
   "commissioning_year":1977
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9062,42.8658 ]
   },
   "properties": {
   "name":"Lower Malad",
   "capacity_mw":13.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1768,44.0249 ]
   },
   "properties": {
   "name":"Lower Middlebury",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.0441,39.1937 ]
   },
   "properties": {
   "name":"Lower Molina",
   "capacity_mw":5.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.5397,46.5635 ]
   },
   "properties": {
   "name":"Lower Monumental",
   "capacity_mw":810,
   "primary_fuel":"Hydro",
   "commissioning_year":1974
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.0625,43.4687 ]
   },
   "properties": {
   "name":"Lower No 1",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.0626,43.4684 ]
   },
   "properties": {
   "name":"Lower No 2",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9036,42.8416 ]
   },
   "properties": {
   "name":"Lower Salmon",
   "capacity_mw":60,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5075,44.6694 ]
   },
   "properties": {
   "name":"Lower Saranac Hydroelectric Facility",
   "capacity_mw":6.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.7889,36.1357 ]
   },
   "properties": {
   "name":"Lower Tule River",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1909
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3476,43.3743 ]
   },
   "properties": {
   "name":"Lower Village Water Power Project",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1995
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.0583,43.528 ]
   },
   "properties": {
   "name":"Lucky Peak Power Plant Project",
   "capacity_mw":101.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.4447,43.8942 ]
   },
   "properties": {
   "name":"Ludington",
   "capacity_mw":1978.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1973
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.172,38.0427 ]
   },
   "properties": {
   "name":"Lundy",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.4989,38.6767 ]
   },
   "properties": {
   "name":"Luray Hydro Station",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3586,43.6186 ]
   },
   "properties": {
   "name":"Lyons Falls Hydroelectric",
   "capacity_mw":5.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1960
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3055,43.6189 ]
   },
   "properties": {
   "name":"Lyonsdale Associates",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3063,44.8773 ]
   },
   "properties": {
   "name":"Macomb",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.6338,45.4879 ]
   },
   "properties": {
   "name":"Madison Dam",
   "capacity_mw":8.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1907
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.3569,43.2547 ]
   },
   "properties": {
   "name":"Magic Dam Hydroelectric Project",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.2817,40.9211 ]
   },
   "properties": {
   "name":"Mahoning Creek Hydroelectric Project",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2992,47.6164 ]
   },
   "properties": {
   "name":"Main Canal Headworks",
   "capacity_mw":26.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.338,37.2203 ]
   },
   "properties": {
   "name":"Mammoth Pool",
   "capacity_mw":190,
   "primary_fuel":"Hydro",
   "commissioning_year":1960
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.9331,38.8556 ]
   },
   "properties": {
   "name":"Manitou Springs",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1945
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.6215,39.2559 ]
   },
   "properties": {
   "name":"Manti Lower",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.6215,39.2559 ]
   },
   "properties": {
   "name":"Manti Upper",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.2576,30.5553 ]
   },
   "properties": {
   "name":"Marble Falls",
   "capacity_mw":39.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.5578,42.6366 ]
   },
   "properties": {
   "name":"Marco Ranch",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.1822,36.2317 ]
   },
   "properties": {
   "name":"Markham",
   "capacity_mw":128.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.964,38.7795 ]
   },
   "properties": {
   "name":"Markland",
   "capacity_mw":64.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5695,38.2526 ]
   },
   "properties": {
   "name":"Marmet",
   "capacity_mw":14.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1936
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.1493,42.626 ]
   },
   "properties": {
   "name":"Marsh Valley Development",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.7106,35.7025 ]
   },
   "properties": {
   "name":"Marshall Dam",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.9073,30.3899 ]
   },
   "properties": {
   "name":"Marshall Ford",
   "capacity_mw":108,
   "primary_fuel":"Hydro",
   "commissioning_year":1941
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3356,44.3606 ]
   },
   "properties": {
   "name":"Marshfield 6",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.9114,32.6804 ]
   },
   "properties": {
   "name":"Martin Dam",
   "capacity_mw":210.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1934
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.8836,36.6641 ]
   },
   "properties": {
   "name":"Martinsville",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1932
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.5343,40.3441 ]
   },
   "properties": {
   "name":"Marys Lake",
   "capacity_mw":8.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3172,43.6334 ]
   },
   "properties": {
   "name":"Mascoma Hydro",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5885,46.5035 ]
   },
   "properties": {
   "name":"Mayfield",
   "capacity_mw":162,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.4764,46.5717 ]
   },
   "properties": {
   "name":"McClure Dam",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2988,45.9402 ]
   },
   "properties": {
   "name":"McNary",
   "capacity_mw":990.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2991,45.94 ]
   },
   "properties": {
   "name":"McNary Dam Fish Attraction Project",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1997
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.574,37.5752 ]
   },
   "properties": {
   "name":"McPhee",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3101,37.5221 ]
   },
   "properties": {
   "name":"McSwain",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0592,44.2603 ]
   },
   "properties": {
   "name":"Mcindoes",
   "capacity_mw":10.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.3907,44.1112 ]
   },
   "properties": {
   "name":"Mechanic Falls",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.5453,45.6072 ]
   },
   "properties": {
   "name":"Medway Hydro",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.173,38.7914 ]
   },
   "properties": {
   "name":"Meldahl Hydroelectric Project",
   "capacity_mw":105,
   "primary_fuel":"Hydro",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3003,35.8853 ]
   },
   "properties": {
   "name":"Melton Hill",
   "capacity_mw":72,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.6378,45.1069 ]
   },
   "properties": {
   "name":"Menominee Mill Marinette",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.9294,44.8842 ]
   },
   "properties": {
   "name":"Menomonie",
   "capacity_mw":5.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3299,37.523 ]
   },
   "properties": {
   "name":"Merced Falls",
   "capacity_mw":3.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.685,45.1786 ]
   },
   "properties": {
   "name":"Merrill",
   "capacity_mw":2.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1961
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5544,45.9567 ]
   },
   "properties": {
   "name":"Merwin",
   "capacity_mw":136,
   "primary_fuel":"Hydro",
   "commissioning_year":1947
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.7104,44.5485 ]
   },
   "properties": {
   "name":"Messalonskee 2 (Oakland)",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.6818,44.5699 ]
   },
   "properties": {
   "name":"Messalonskee 3",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1918
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.6522,44.5344 ]
   },
   "properties": {
   "name":"Messalonskee 5",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1935
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.5992,35.6497 ]
   },
   "properties": {
   "name":"Metropolitan Sewerage District",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0603,48.5953 ]
   },
   "properties": {
   "name":"Meyers Falls",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1938
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.155,43.7719 ]
   },
   "properties": {
   "name":"Michell Butte Power Project",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.1958,45.9553 ]
   },
   "properties": {
   "name":"Michigamme Falls",
   "capacity_mw":9.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5253,43.0987 ]
   },
   "properties": {
   "name":"Middle Falls Hydro",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5964,39.0248 ]
   },
   "properties": {
   "name":"Middle Fork",
   "capacity_mw":122.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.5998,45.4807 ]
   },
   "properties": {
   "name":"Middle Fork Irrigation District",
   "capacity_mw":3.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.5692,37.51 ]
   },
   "properties": {
   "name":"Middle Gorge",
   "capacity_mw":37.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1952
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6824,44.2924 ]
   },
   "properties": {
   "name":"Middlesex 2",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.1612,42.7401 ]
   },
   "properties": {
   "name":"Mile 28 Water Power Project",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.645,44.9421 ]
   },
   "properties": {
   "name":"Milford Hydro Station",
   "capacity_mw":7.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6122,44.6967 ]
   },
   "properties": {
   "name":"Mill C",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1969
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0395,34.088 ]
   },
   "properties": {
   "name":"Mill Creek 3",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1904
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.3998,32.1009 ]
   },
   "properties": {
   "name":"Millers Ferry",
   "capacity_mw":101.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7844,39.2731 ]
   },
   "properties": {
   "name":"Millville Hydro Station",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1932
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.0369,42.5268 ]
   },
   "properties": {
   "name":"Milner Hydro",
   "capacity_mw":59.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.9903,33.6894 ]
   },
   "properties": {
   "name":"Milstead",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1134,44.6414 ]
   },
   "properties": {
   "name":"Milton",
   "capacity_mw":7.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9865,43.4031 ]
   },
   "properties": {
   "name":"Milton Hydro",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5053,42.7503 ]
   },
   "properties": {
   "name":"Mine Falls Generating Station",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.4739,43.4003 ]
   },
   "properties": {
   "name":"Minetto",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1915
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.4832,42.6699 ]
   },
   "properties": {
   "name":"Minidoka",
   "capacity_mw":27.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.6656,42.2608 ]
   },
   "properties": {
   "name":"Mink Creek Hydro",
   "capacity_mw":3.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.1317,44.6611 ]
   },
   "properties": {
   "name":"Mio",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1916
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.9258,35.0647 ]
   },
   "properties": {
   "name":"Mission",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.4449,32.806 ]
   },
   "properties": {
   "name":"Mitchell Dam",
   "capacity_mw":170,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2993,37.8094 ]
   },
   "properties": {
   "name":"Moccasin",
   "capacity_mw":100,
   "primary_fuel":"Hydro",
   "commissioning_year":1969
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.312,37.8164 ]
   },
   "properties": {
   "name":"Moccasin Low Head Hydro Project",
   "capacity_mw":2.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3235,34.3074 ]
   },
   "properties": {
   "name":"Mojave Siphon",
   "capacity_mw":32.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1996
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7714,41.5377 ]
   },
   "properties": {
   "name":"Mongaup",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.6078,41.4872 ]
   },
   "properties": {
   "name":"Monroe (NE)",
   "capacity_mw":8.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1936
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4206,47.6536 ]
   },
   "properties": {
   "name":"Monroe Street",
   "capacity_mw":14.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9564,40.8468 ]
   },
   "properties": {
   "name":"Montgomery Creek Hydro",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.1044,38.5131 ]
   },
   "properties": {
   "name":"Monticello Dam",
   "capacity_mw":11.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3413,43.6107 ]
   },
   "properties": {
   "name":"Moose River",
   "capacity_mw":12.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.4725,43.46 ]
   },
   "properties": {
   "name":"Mora Drop Hydroelectric Project",
   "capacity_mw":1.7,
   "primary_fuel":"Hydro",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7103,44.2859 ]
   },
   "properties": {
   "name":"Moretown Generating Station",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3827,33.9684 ]
   },
   "properties": {
   "name":"Morgan Falls",
   "capacity_mw":16.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1904
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.4431,33.5536 ]
   },
   "properties": {
   "name":"Mormon Flat",
   "capacity_mw":63.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.0609,47.5817 ]
   },
   "properties": {
   "name":"Morony",
   "capacity_mw":54,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6024,44.5618 ]
   },
   "properties": {
   "name":"Morrisville",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.5393,38.4518 ]
   },
   "properties": {
   "name":"Morrow Point",
   "capacity_mw":173.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1971
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1364,43.8719 ]
   },
   "properties": {
   "name":"Moshier",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4247,46.5347 ]
   },
   "properties": {
   "name":"Mossyrock",
   "capacity_mw":300,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.7247,37.8297 ]
   },
   "properties": {
   "name":"Mother Ann Lee",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.7505,41.8056 ]
   },
   "properties": {
   "name":"Mottville",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.3523,39.0942 ]
   },
   "properties": {
   "name":"Mount Elbert",
   "capacity_mw":200,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.9867,35.3339 ]
   },
   "properties": {
   "name":"Mountain Island",
   "capacity_mw":60,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.1752,48.7339 ]
   },
   "properties": {
   "name":"Moyie Springs",
   "capacity_mw":3.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6806,42.7213 ]
   },
   "properties": {
   "name":"Mt Ida Hydroelectric",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1992
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2558,40.9764 ]
   },
   "properties": {
   "name":"Muck Valley Hydroelectric",
   "capacity_mw":29.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.2993,39.8076 ]
   },
   "properties": {
   "name":"Muddy Run",
   "capacity_mw":1072,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4464,38.1471 ]
   },
   "properties": {
   "name":"Murphys",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.3569,34.7956 ]
   },
   "properties": {
   "name":"Murray",
   "capacity_mw":45.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -109.7625,45.2257 ]
   },
   "properties": {
   "name":"Mystic",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.8833,35.7986 ]
   },
   "properties": {
   "name":"Nacimiento Hydro Project",
   "capacity_mw":4.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.5011,34.7553 ]
   },
   "properties": {
   "name":"Nacoochee",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.6762,35.2715 ]
   },
   "properties": {
   "name":"Nantahala",
   "capacity_mw":43.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1942
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.7152,34.1484 ]
   },
   "properties": {
   "name":"Narrows (AR)",
   "capacity_mw":25.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1956
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.0917,35.4189 ]
   },
   "properties": {
   "name":"Narrows (NC)",
   "capacity_mw":108.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2704,39.239 ]
   },
   "properties": {
   "name":"Narrows 2",
   "capacity_mw":46.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2717,39.2364 ]
   },
   "properties": {
   "name":"Narrows PH",
   "capacity_mw":10.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.6131,36.8061 ]
   },
   "properties": {
   "name":"Navajo Dam",
   "capacity_mw":30,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.4486,34.6642 ]
   },
   "properties": {
   "name":"Neal Shoals",
   "capacity_mw":4.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1905
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8924,41.0289 ]
   },
   "properties": {
   "name":"Nelson Creek",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6358,41.8194 ]
   },
   "properties": {
   "name":"Neversink",
   "capacity_mw":25,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.2678,44.2772 ]
   },
   "properties": {
   "name":"New Badger",
   "capacity_mw":8.2,
   "primary_fuel":"Hydro",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.8149,38.1496 ]
   },
   "properties": {
   "name":"New Hogan Power Plant",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0652,39.4636 ]
   },
   "properties": {
   "name":"New Lahontan",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.8642,39.6672 ]
   },
   "properties": {
   "name":"New Martinsville Hannibal Hydro",
   "capacity_mw":37.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5282,37.9469 ]
   },
   "properties": {
   "name":"New Melones",
   "capacity_mw":300,
   "primary_fuel":"Hydro",
   "commissioning_year":1979
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6961,42.7818 ]
   },
   "properties": {
   "name":"New York State Dam Hydro",
   "capacity_mw":11.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.093,38.8352 ]
   },
   "properties": {
   "name":"Newcastle",
   "capacity_mw":12.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.733,43.59 ]
   },
   "properties": {
   "name":"Newfound Hydroelectric",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2408,48.6759 ]
   },
   "properties": {
   "name":"Newhalem",
   "capacity_mw":2.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.18,44.9376 ]
   },
   "properties": {
   "name":"Newport",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1941
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0169,43.1853 ]
   },
   "properties": {
   "name":"Newport Hydro",
   "capacity_mw":1.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5936,38.5714 ]
   },
   "properties": {
   "name":"Newport Hydro Station",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.8756,37.2544 ]
   },
   "properties": {
   "name":"Niagara",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.8477,37.9385 ]
   },
   "properties": {
   "name":"Niangua",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.6218,35.0017 ]
   },
   "properties": {
   "name":"Nickajack",
   "capacity_mw":103.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2202,38.6373 ]
   },
   "properties": {
   "name":"Nimbus",
   "capacity_mw":13.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5372,47.7697 ]
   },
   "properties": {
   "name":"Nine Mile",
   "capacity_mw":37.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.4381,45.0717 ]
   },
   "properties": {
   "name":"Ninth Street Hydropower Project",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.9321,29.5376 ]
   },
   "properties": {
   "name":"Nolte",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8142,48.9078 ]
   },
   "properties": {
   "name":"Nooksack Hydro",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1906
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9975,44.8053 ]
   },
   "properties": {
   "name":"Norfolk",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.2401,36.2491 ]
   },
   "properties": {
   "name":"Norfork",
   "capacity_mw":80.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1947
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9573,42.7124 ]
   },
   "properties": {
   "name":"Normanskill Hydro Project",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.0914,36.2242 ]
   },
   "properties": {
   "name":"Norris Dam",
   "capacity_mw":131.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1936
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.2799,45.2433 ]
   },
   "properties": {
   "name":"North Fork",
   "capacity_mw":40.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.677,39.4616 ]
   },
   "properties": {
   "name":"North Fork Hydro Plant",
   "capacity_mw":5.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.5588,43.0451 ]
   },
   "properties": {
   "name":"North Gooding Main Hydro",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.4499,43.8025 ]
   },
   "properties": {
   "name":"North Gorham",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.9956,32.4988 ]
   },
   "properties": {
   "name":"North Highlands",
   "capacity_mw":29.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3903,34.1944 ]
   },
   "properties": {
   "name":"North Hollywood",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.7594,41.0864 ]
   },
   "properties": {
   "name":"North Platte",
   "capacity_mw":26.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1935
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4716,42.6107 ]
   },
   "properties": {
   "name":"Northfield Mountain",
   "capacity_mw":940,
   "primary_fuel":"Hydro",
   "commissioning_year":1973
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.76,40.7803 ]
   },
   "properties": {
   "name":"Norway (IN)",
   "capacity_mw":7.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.8628,45.7412 ]
   },
   "properties": {
   "name":"Norway (MI)",
   "capacity_mw":6.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1936
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.5189,45.1025 ]
   },
   "properties": {
   "name":"Norway Point Hydropower Project",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0042,44.7439 ]
   },
   "properties": {
   "name":"Norwood",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.4626,42.9544 ]
   },
   "properties": {
   "name":"Notch Butte Hydro",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.0876,34.9592 ]
   },
   "properties": {
   "name":"Nottely",
   "capacity_mw":15.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.7336,47.9605 ]
   },
   "properties": {
   "name":"Noxon Rapids",
   "capacity_mw":569.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.1267,40.1533 ]
   },
   "properties": {
   "name":"O'Shaughnessy Hydro",
   "capacity_mw":5.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.0477,37.0987 ]
   },
   "properties": {
   "name":"ONeill",
   "capacity_mw":25.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.3866,44.4504 ]
   },
   "properties": {
   "name":"Oahe",
   "capacity_mw":784,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1614,40.0753 ]
   },
   "properties": {
   "name":"Oak Flat",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.0699,45.122 ]
   },
   "properties": {
   "name":"Oak Grove",
   "capacity_mw":51,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.7528,40.6564 ]
   },
   "properties": {
   "name":"Oakdale",
   "capacity_mw":11.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.8025,42.387 ]
   },
   "properties": {
   "name":"Oakdale Power Station",
   "capacity_mw":3.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.6478,35.0947 ]
   },
   "properties": {
   "name":"Ocoee 1",
   "capacity_mw":19,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.4912,35.0823 ]
   },
   "properties": {
   "name":"Ocoee 2",
   "capacity_mw":23,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.4833,35.075 ]
   },
   "properties": {
   "name":"Ocoee 3",
   "capacity_mw":28.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.1439,44.8719 ]
   },
   "properties": {
   "name":"Oconto Falls Lower",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1971
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.1475,44.8764 ]
   },
   "properties": {
   "name":"Oconto Falls Upper",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.487,44.7041 ]
   },
   "properties": {
   "name":"Ogdensburg",
   "capacity_mw":3.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.7792,38.2832 ]
   },
   "properties": {
   "name":"Ohio Falls",
   "capacity_mw":104.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.6556,36.2972 ]
   },
   "properties": {
   "name":"Old Hickory",
   "capacity_mw":103.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.9969,32.5163 ]
   },
   "properties": {
   "name":"Oliver Dam",
   "capacity_mw":60,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.6547,40.3158 ]
   },
   "properties": {
   "name":"Olmstead",
   "capacity_mw":10.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1916
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8906,40.6705 ]
   },
   "properties": {
   "name":"Olsen",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.7485,42.2678 ]
   },
   "properties": {
   "name":"Oneida",
   "capacity_mw":30,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2988,44.49 ]
   },
   "properties": {
   "name":"Opal Springs Hydro",
   "capacity_mw":4.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6775,46.5964 ]
   },
   "properties": {
   "name":"Orchard Avenue 1",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.6639,44.8844 ]
   },
   "properties": {
   "name":"Orono B",
   "capacity_mw":3.9,
   "primary_fuel":"Hydro",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.6647,44.8803 ]
   },
   "properties": {
   "name":"Orono Hydro Station",
   "capacity_mw":2.7,
   "primary_fuel":"Hydro",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.6239,38.2044 ]
   },
   "properties": {
   "name":"Osage Dam",
   "capacity_mw":208,
   "primary_fuel":"Hydro",
   "commissioning_year":1936
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1992,44.27 ]
   },
   "properties": {
   "name":"Oswegatchie",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":2002
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.4153,43.3161 ]
   },
   "properties": {
   "name":"Oswego Falls East",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1914
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.4172,43.3156 ]
   },
   "properties": {
   "name":"Oswego Falls West",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1945
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.2008,44.4778 ]
   },
   "properties": {
   "name":"Otis Hydro",
   "capacity_mw":10.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3506,43.5933 ]
   },
   "properties": {
   "name":"Ottauquechee Hydro",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.4149,41.0163 ]
   },
   "properties": {
   "name":"Ottumwa City of",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2437,43.6416 ]
   },
   "properties": {
   "name":"Owyhee Dam Power Project",
   "capacity_mw":4.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.7467,39.0034 ]
   },
   "properties": {
   "name":"Oxbow (CA)",
   "capacity_mw":6.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.835,44.9716 ]
   },
   "properties": {
   "name":"Oxbow (OR)",
   "capacity_mw":190,
   "primary_fuel":"Hydro",
   "commissioning_year":1961
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1922,35.8214 ]
   },
   "properties": {
   "name":"Oxford Dam",
   "capacity_mw":36,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.8175,35.4693 ]
   },
   "properties": {
   "name":"Ozark",
   "capacity_mw":100,
   "primary_fuel":"Hydro",
   "commissioning_year":1973
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.1235,36.659 ]
   },
   "properties": {
   "name":"Ozark Beach",
   "capacity_mw":16,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.8963,47.1596 ]
   },
   "properties": {
   "name":"PEC Headworks",
   "capacity_mw":6.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.0832,45.4817 ]
   },
   "properties": {
   "name":"PHP 1",
   "capacity_mw":23.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.1513,45.449 ]
   },
   "properties": {
   "name":"PHP 2",
   "capacity_mw":11.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.5694,46.5958 ]
   },
   "properties": {
   "name":"Packwood",
   "capacity_mw":27.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -156.3378,20.8867 ]
   },
   "properties": {
   "name":"Paia Hydroelectric Plant",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.2058,43.3348 ]
   },
   "properties": {
   "name":"Palisades Dam",
   "capacity_mw":176.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.8507,38.2569 ]
   },
   "properties": {
   "name":"Pardee",
   "capacity_mw":23.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8258,44.63 ]
   },
   "properties": {
   "name":"Parishville",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.6514,45.1058 ]
   },
   "properties": {
   "name":"Park Mill",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4445,37.4778 ]
   },
   "properties": {
   "name":"Parker",
   "capacity_mw":2.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.1402,34.2953 ]
   },
   "properties": {
   "name":"Parker Dam",
   "capacity_mw":120,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.3309,34.2613 ]
   },
   "properties": {
   "name":"Parr Hydro",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1915
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.23,40.8833 ]
   },
   "properties": {
   "name":"Passaic Valley Water Commission",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1935
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.2105,45.9908 ]
   },
   "properties": {
   "name":"Peavy Falls",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.0242,43.9574 ]
   },
   "properties": {
   "name":"Pejepscot Hydroelectric Project",
   "capacity_mw":13.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2314,44.6944 ]
   },
   "properties": {
   "name":"Pelton",
   "capacity_mw":109.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.4479,34.6165 ]
   },
   "properties": {
   "name":"Pelzer Lower",
   "capacity_mw":3.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.4544,34.6424 ]
   },
   "properties": {
   "name":"Pelzer Upper",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4536,43.1304 ]
   },
   "properties": {
   "name":"Pembroke Hydro",
   "capacity_mw":2.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.595,43.2858 ]
   },
   "properties": {
   "name":"Penacook Lower Falls",
   "capacity_mw":4.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6008,43.2832 ]
   },
   "properties": {
   "name":"Penacook Upper Falls Hydro",
   "capacity_mw":3.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.0414,36.4675 ]
   },
   "properties": {
   "name":"Pensacola",
   "capacity_mw":130.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1942
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5756,42.6689 ]
   },
   "properties": {
   "name":"Pepperell Hydro Power Plant",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1944
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.1831,33.8361 ]
   },
   "properties": {
   "name":"Perris",
   "capacity_mw":7.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.0217,44.0572 ]
   },
   "properties": {
   "name":"Petenwell",
   "capacity_mw":20,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.5485,45.6676 ]
   },
   "properties": {
   "name":"Peters Drive Plant",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1625,44.6381 ]
   },
   "properties": {
   "name":"Peterson",
   "capacity_mw":6.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.7088,44.1586 ]
   },
   "properties": {
   "name":"Philadlephia",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.0281,36.7803 ]
   },
   "properties": {
   "name":"Philpott Lake",
   "capacity_mw":14,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3265,38.0321 ]
   },
   "properties": {
   "name":"Phoenix",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.3021,43.2271 ]
   },
   "properties": {
   "name":"Phoenix Hydro Project",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.2494,35.0683 ]
   },
   "properties": {
   "name":"Pickwick Landing Dam",
   "capacity_mw":240,
   "primary_fuel":"Hydro",
   "commissioning_year":1944
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.4621,34.702 ]
   },
   "properties": {
   "name":"Piedmont Hydro Power Project",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5662,44.2334 ]
   },
   "properties": {
   "name":"Piercefield",
   "capacity_mw":2.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1942
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.4849,46.316 ]
   },
   "properties": {
   "name":"Pillager",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.7877,43.219 ]
   },
   "properties": {
   "name":"Pilot Butte",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.7139,32.7366 ]
   },
   "properties": {
   "name":"Pilot Knob",
   "capacity_mw":33,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.2483,45.8275 ]
   },
   "properties": {
   "name":"Pine",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.327,36.8326 ]
   },
   "properties": {
   "name":"Pine Flat",
   "capacity_mw":165,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.8485,41.2543 ]
   },
   "properties": {
   "name":"Pine View Dam",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.4335,41.1921 ]
   },
   "properties": {
   "name":"Piney",
   "capacity_mw":30,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.4479,36.6669 ]
   },
   "properties": {
   "name":"Pinnacles",
   "capacity_mw":11.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1938
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.9465,41.2436 ]
   },
   "properties": {
   "name":"Pioneer",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1910
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4982,40.9908 ]
   },
   "properties": {
   "name":"Pit 1",
   "capacity_mw":69.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7481,40.9974 ]
   },
   "properties": {
   "name":"Pit 3",
   "capacity_mw":80.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8494,40.9864 ]
   },
   "properties": {
   "name":"Pit 4",
   "capacity_mw":103.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9776,40.9862 ]
   },
   "properties": {
   "name":"Pit 5",
   "capacity_mw":141.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1944
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9929,40.9226 ]
   },
   "properties": {
   "name":"Pit 6",
   "capacity_mw":79.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9908,40.8475 ]
   },
   "properties": {
   "name":"Pit 7",
   "capacity_mw":109.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.412,44.7214 ]
   },
   "properties": {
   "name":"Pittsfield Hydro",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.955,43.694 ]
   },
   "properties": {
   "name":"Pittsford",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1914
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.5239,37.4142 ]
   },
   "properties": {
   "name":"Pleasant Valley Hydro",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4698,39.7229 ]
   },
   "properties": {
   "name":"Poe",
   "capacity_mw":142.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.5183,31.3611 ]
   },
   "properties": {
   "name":"Point A",
   "capacity_mw":5.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1934
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.3251,40.3651 ]
   },
   "properties": {
   "name":"Pole Hill",
   "capacity_mw":38.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8427,40.4579 ]
   },
   "properties": {
   "name":"Ponderosa Bailey Creek",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2474,44.6328 ]
   },
   "properties": {
   "name":"Pontook Hydro Facility",
   "capacity_mw":10.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2161,37.9442 ]
   },
   "properties": {
   "name":"Poole",
   "capacity_mw":11.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.8672,44.3364 ]
   },
   "properties": {
   "name":"Port Edwards Mill",
   "capacity_mw":6.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3392,43.5836 ]
   },
   "properties": {
   "name":"Port Leyden Hydroelectric Project",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.1589,37.257 ]
   },
   "properties": {
   "name":"Portal",
   "capacity_mw":10.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.9539,47.7033 ]
   },
   "properties": {
   "name":"Post Falls",
   "capacity_mw":14.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.7586,45.1136 ]
   },
   "properties": {
   "name":"Potato Rapids",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2544,46.3785 ]
   },
   "properties": {
   "name":"Potholes East Canal 66.0",
   "capacity_mw":2.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.1279,39.3618 ]
   },
   "properties": {
   "name":"Potter Valley",
   "capacity_mw":9.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -145.6045,60.5887 ]
   },
   "properties": {
   "name":"Power Creek",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":2001
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.7278,43.3099 ]
   },
   "properties": {
   "name":"Prairie Du Sac",
   "capacity_mw":32.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.4983,47.2872 ]
   },
   "properties": {
   "name":"Prairie River",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.6625,46.7261 ]
   },
   "properties": {
   "name":"Prickett",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.908,46.6451 ]
   },
   "properties": {
   "name":"Priest Rapids",
   "capacity_mw":955.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1960
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.034,43.6628 ]
   },
   "properties": {
   "name":"Proctor",
   "capacity_mw":6.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1477,43.2919 ]
   },
   "properties": {
   "name":"Prospect",
   "capacity_mw":19,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5151,42.7307 ]
   },
   "properties": {
   "name":"Prospect 1",
   "capacity_mw":3.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.514,42.7312 ]
   },
   "properties": {
   "name":"Prospect 2",
   "capacity_mw":32,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4185,42.7306 ]
   },
   "properties": {
   "name":"Prospect 3",
   "capacity_mw":7.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1932
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5151,42.7331 ]
   },
   "properties": {
   "name":"Prospect 4",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1944
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.4649,45.1868 ]
   },
   "properties": {
   "name":"Pumpkin Hill",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -131.545,55.0913 ]
   },
   "properties": {
   "name":"Purple Lake",
   "capacity_mw":3.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4864,42.1579 ]
   },
   "properties": {
   "name":"Putts Bridge",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1918
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -155.0908,19.7264 ]
   },
   "properties": {
   "name":"Puueo",
   "capacity_mw":3.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1881,44.522 ]
   },
   "properties": {
   "name":"Pyrites Plant",
   "capacity_mw":8.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.3583,37.1854 ]
   },
   "properties": {
   "name":"Quail Creek Hydro Plant #1",
   "capacity_mw":2.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.676,35.2713 ]
   },
   "properties": {
   "name":"Queens Creek",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2578,46.9825 ]
   },
   "properties": {
   "name":"Quincy Chute",
   "capacity_mw":9.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.8868,41.7987 ]
   },
   "properties": {
   "name":"Quinebaug Lower Project",
   "capacity_mw":2.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.9532,37.8777 ]
   },
   "properties": {
   "name":"R C Kirkwood",
   "capacity_mw":115.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1973
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.175,33.051 ]
   },
   "properties": {
   "name":"R E Badger Filtration Plant",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.3879,35.0558 ]
   },
   "properties": {
   "name":"Raccoon Mountain",
   "capacity_mw":1713.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1979
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.9081,38.9153 ]
   },
   "properties": {
   "name":"Racine",
   "capacity_mw":47.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.5727,37.0784 ]
   },
   "properties": {
   "name":"Radford",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1934
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6936,41.9153 ]
   },
   "properties": {
   "name":"Rainbow (CT)",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.2045,47.5344 ]
   },
   "properties": {
   "name":"Rainbow (MT)",
   "capacity_mw":59,
   "primary_fuel":"Hydro",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.4617,44.5236 ]
   },
   "properties": {
   "name":"Rainbow Falls Auscble",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8228,44.5178 ]
   },
   "properties": {
   "name":"Rainbow Falls Hydro",
   "capacity_mw":25,
   "primary_fuel":"Hydro",
   "commissioning_year":1956
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.7251,39.001 ]
   },
   "properties": {
   "name":"Ralston",
   "capacity_mw":79.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.1137,32.937 ]
   },
   "properties": {
   "name":"Rancho Penasquitos",
   "capacity_mw":4.6,
   "primary_fuel":"Hydro",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.1088,44.0927 ]
   },
   "properties": {
   "name":"Rapidan Hydro Facility",
   "capacity_mw":6.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.3147,44.3164 ]
   },
   "properties": {
   "name":"Rapide Croche",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9803,44.835 ]
   },
   "properties": {
   "name":"Raymondville",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.1889,33.3944 ]
   },
   "properties": {
   "name":"Red Mountain",
   "capacity_mw":5.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4095,42.176 ]
   },
   "properties": {
   "name":"Redbridge",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.5928,39.0673 ]
   },
   "properties": {
   "name":"Redlands Water & Power",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.8941,34.4272 ]
   },
   "properties": {
   "name":"Remmel",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1856,37.4639 ]
   },
   "properties": {
   "name":"Reusens",
   "capacity_mw":12.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1903
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.4378,35.7742 ]
   },
   "properties": {
   "name":"Rhodhiss",
   "capacity_mw":25.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.5953,34.0256 ]
   },
   "properties": {
   "name":"Richard B Russell",
   "capacity_mw":628,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7578,41.4625 ]
   },
   "properties": {
   "name":"Rio",
   "capacity_mw":10.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1934
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.8222,35.43 ]
   },
   "properties": {
   "name":"Rio Bravo Hydro Project",
   "capacity_mw":14,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0992,34.0047 ]
   },
   "properties": {
   "name":"Rio Hondo",
   "capacity_mw":1.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.35,45.3 ]
   },
   "properties": {
   "name":"River Mill",
   "capacity_mw":18.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5944,42.2006 ]
   },
   "properties": {
   "name":"Riverside Holyoke",
   "capacity_mw":6.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6722,36.4789 ]
   },
   "properties": {
   "name":"Roanoke Rapids",
   "capacity_mw":100,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9484,40.8821 ]
   },
   "properties": {
   "name":"Roaring Creek Water Power",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3783,38.8965 ]
   },
   "properties": {
   "name":"Robbs Peak",
   "capacity_mw":25.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.1756,30.7975 ]
   },
   "properties": {
   "name":"Robert D Willis",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0394,43.1427 ]
   },
   "properties": {
   "name":"Robert Moses Niagara",
   "capacity_mw":2429.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1961
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7994,45.0038 ]
   },
   "properties": {
   "name":"Robert Moses Power Dam",
   "capacity_mw":912,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.7755,35.3445 ]
   },
   "properties": {
   "name":"Robert S Kerr",
   "capacity_mw":110,
   "primary_fuel":"Hydro",
   "commissioning_year":1971
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.615,43.1611 ]
   },
   "properties": {
   "name":"Rochester 2",
   "capacity_mw":8.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1960
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6098,43.1522 ]
   },
   "properties": {
   "name":"Rochester 26",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1952
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6278,43.1803 ]
   },
   "properties": {
   "name":"Rochester 5",
   "capacity_mw":43.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.4802,44.213 ]
   },
   "properties": {
   "name":"Rochester Hydro",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.3452,39.9052 ]
   },
   "properties": {
   "name":"Rock Creek",
   "capacity_mw":126,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.5388,42.6325 ]
   },
   "properties": {
   "name":"Rock Creek I",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.5315,42.6207 ]
   },
   "properties": {
   "name":"Rock Creek II",
   "capacity_mw":1.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.7785,38.7834 ]
   },
   "properties": {
   "name":"Rock Creek LP",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.0917,47.3461 ]
   },
   "properties": {
   "name":"Rock Island",
   "capacity_mw":629.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.0756,42.4511 ]
   },
   "properties": {
   "name":"Rockton",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.9431,47.7197 ]
   },
   "properties": {
   "name":"Rocky Brook Hydroelectric",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.8778,34.54 ]
   },
   "properties": {
   "name":"Rocky Creek",
   "capacity_mw":28,
   "primary_fuel":"Hydro",
   "commissioning_year":1909
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8024,35.9601 ]
   },
   "properties": {
   "name":"Rocky Mount Mill",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1947
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.3039,34.3555 ]
   },
   "properties": {
   "name":"Rocky Mountain Hydroelectric Plant",
   "capacity_mw":847.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1995
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2953,47.5336 ]
   },
   "properties": {
   "name":"Rocky Reach",
   "capacity_mw":1299.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.4349,41.5826 ]
   },
   "properties": {
   "name":"Rocky River (CT)",
   "capacity_mw":31,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.6097,34.2572 ]
   },
   "properties": {
   "name":"Rocky River (SC)",
   "capacity_mw":3.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.4795,43.613 ]
   },
   "properties": {
   "name":"Rogers",
   "capacity_mw":6.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.604,43.2746 ]
   },
   "properties": {
   "name":"Rolfe Canal Hydro",
   "capacity_mw":4.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.9533,39.1343 ]
   },
   "properties": {
   "name":"Rollins",
   "capacity_mw":12.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.8172,43.2361 ]
   },
   "properties": {
   "name":"Rollinsford",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1991
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.1618,33.6711 ]
   },
   "properties": {
   "name":"Roosevelt",
   "capacity_mw":36,
   "primary_fuel":"Hydro",
   "commissioning_year":1973
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.0679,48.7326 ]
   },
   "properties": {
   "name":"Ross",
   "capacity_mw":450,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2773,44.6058 ]
   },
   "properties": {
   "name":"Round Butte",
   "capacity_mw":372.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4778,46.6184 ]
   },
   "properties": {
   "name":"Roza",
   "capacity_mw":12.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.6283,44.5486 ]
   },
   "properties": {
   "name":"Rumford Falls Hydro Facility",
   "capacity_mw":44.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1935
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.1233,37.767 ]
   },
   "properties": {
   "name":"Rush Creek",
   "capacity_mw":13.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.1122,46.7392 ]
   },
   "properties": {
   "name":"Russell D Smith",
   "capacity_mw":6.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.9738,38.8414 ]
   },
   "properties": {
   "name":"Ruxton Park",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.1225,47.5699 ]
   },
   "properties": {
   "name":"Ryan",
   "capacity_mw":50.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1915
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -65.7852,18.2436 ]
   },
   "properties": {
   "name":"Río Blanco",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":null
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.8742,44.3356 ]
   },
   "properties": {
   "name":"S C Moore",
   "capacity_mw":190.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.0675,42.5867 ]
   },
   "properties": {
   "name":"S E Hazelton A",
   "capacity_mw":8.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.2478,44.9789 ]
   },
   "properties": {
   "name":"SAF Hydroelectric LLC",
   "capacity_mw":9.6,
   "primary_fuel":"Hydro",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.39,39.9244 ]
   },
   "properties": {
   "name":"Safe Harbor",
   "capacity_mw":417.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3493,46.5063 ]
   },
   "properties": {
   "name":"Saint Marys Falls",
   "capacity_mw":23.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.182,38.5342 ]
   },
   "properties": {
   "name":"Salida",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.1036,36.2647 ]
   },
   "properties": {
   "name":"Salina",
   "capacity_mw":259.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1007,43.8954 ]
   },
   "properties": {
   "name":"Salisbury",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -134.4631,58.3269 ]
   },
   "properties": {
   "name":"Salmon Creek 1",
   "capacity_mw":8.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.8109,43.227 ]
   },
   "properties": {
   "name":"Salmon Falls",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2181,38.4979 ]
   },
   "properties": {
   "name":"Salt Springs",
   "capacity_mw":42,
   "primary_fuel":"Hydro",
   "commissioning_year":1947
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.484,34.8522 ]
   },
   "properties": {
   "name":"Saluda Dam",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1997
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2172,34.0533 ]
   },
   "properties": {
   "name":"Saluda Lexington",
   "capacity_mw":207.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.1062,31.0609 ]
   },
   "properties": {
   "name":"Sam Rayburn Dam",
   "capacity_mw":52,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.7958,34.1275 ]
   },
   "properties": {
   "name":"San Dimas",
   "capacity_mw":9.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.8051,34.1242 ]
   },
   "properties": {
   "name":"San Dimas Wash Generating Station",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4928,34.3128 ]
   },
   "properties": {
   "name":"San Fernando",
   "capacity_mw":5.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4547,34.5902 ]
   },
   "properties": {
   "name":"San Francisquito 1",
   "capacity_mw":69.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.5251,34.5343 ]
   },
   "properties": {
   "name":"San Francisquito 2",
   "capacity_mw":42,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.8557,34.2043 ]
   },
   "properties": {
   "name":"San Gabriel Hydro Project",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.4975,37.2032 ]
   },
   "properties": {
   "name":"San Joaquin 2",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5194,37.2537 ]
   },
   "properties": {
   "name":"San Joaquin 3",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.15,38.1861 ]
   },
   "properties": {
   "name":"Sand Bar Power Plant",
   "capacity_mw":16.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.0678,45.2333 ]
   },
   "properties": {
   "name":"Sandstone Rapids",
   "capacity_mw":3.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3802,43.6773 ]
   },
   "properties": {
   "name":"Sanford Dam",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0585,34.1452 ]
   },
   "properties": {
   "name":"Santa Ana 1",
   "capacity_mw":3.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1899
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0991,34.1072 ]
   },
   "properties": {
   "name":"Santa Ana 3",
   "capacity_mw":3.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1999
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.7511,34.4617 ]
   },
   "properties": {
   "name":"Santa Felicia Dam",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.8639,35.4475 ]
   },
   "properties": {
   "name":"Santeetlah",
   "capacity_mw":45,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.2008,45.618 ]
   },
   "properties": {
   "name":"Sartell Dam",
   "capacity_mw":9.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.3742,46.5392 ]
   },
   "properties": {
   "name":"Saxon Falls",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1913
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.4217,46.7091 ]
   },
   "properties": {
   "name":"Scanlon",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5989,42.8992 ]
   },
   "properties": {
   "name":"Schaghticoke",
   "capacity_mw":16,
   "primary_fuel":"Hydro",
   "commissioning_year":1908
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.708,42.785 ]
   },
   "properties": {
   "name":"School Street",
   "capacity_mw":42,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.4325,36.5768 ]
   },
   "properties": {
   "name":"Schoolfield Dam",
   "capacity_mw":4.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5821,43.0968 ]
   },
   "properties": {
   "name":"Schuylerville",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1221,41.6651 ]
   },
   "properties": {
   "name":"Scotland Dam",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1937
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.9325,39.2721 ]
   },
   "properties": {
   "name":"Scott Flat",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.5803,41.4614 ]
   },
   "properties": {
   "name":"Sears Hydroelectric Plant",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1996
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9273,42.8708 ]
   },
   "properties": {
   "name":"Searsburg",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3418,44.0411 ]
   },
   "properties": {
   "name":"Secord",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.2339,47.6777 ]
   },
   "properties": {
   "name":"Selis Ksanka Qlispe",
   "capacity_mw":207.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1947
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.9085,42.1561 ]
   },
   "properties": {
   "name":"Seminoe",
   "capacity_mw":51.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1939
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.7867,42.9153 ]
   },
   "properties": {
   "name":"Seneca Falls Hydroelectric Project",
   "capacity_mw":5.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0056,41.8389 ]
   },
   "properties": {
   "name":"Seneca Generation LLC",
   "capacity_mw":469,
   "primary_fuel":"Hydro",
   "commissioning_year":1970
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4795,34.0969 ]
   },
   "properties": {
   "name":"Sepulveda Canyon",
   "capacity_mw":8.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.8942,43.9775 ]
   },
   "properties": {
   "name":"Sewalls",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4223,40.7175 ]
   },
   "properties": {
   "name":"Shasta",
   "capacity_mw":714,
   "primary_fuel":"Hydro",
   "commissioning_year":1947
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.0023,38.492 ]
   },
   "properties": {
   "name":"Shavano Falls Hydro",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.7767,38.4505 ]
   },
   "properties": {
   "name":"Shavano Falls Hydro Drop 4",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.5835,44.6295 ]
   },
   "properties": {
   "name":"Shawmut",
   "capacity_mw":8.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.7954,48.9477 ]
   },
   "properties": {
   "name":"Sheep Creek Hydro",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9736,44.9108 ]
   },
   "properties": {
   "name":"Sheldon Springs Hydroelectric",
   "capacity_mw":25.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2953,41.4484 ]
   },
   "properties": {
   "name":"Shepaug",
   "capacity_mw":37.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9303,42.7297 ]
   },
   "properties": {
   "name":"Sherman",
   "capacity_mw":7.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.7094,43.2797 ]
   },
   "properties": {
   "name":"Sherman Island",
   "capacity_mw":36.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.2269,39.5701 ]
   },
   "properties": {
   "name":"Shoshone (CO)",
   "capacity_mw":14.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1909
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -109.1812,44.5029 ]
   },
   "properties": {
   "name":"Shoshone (WY)",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.4033,42.5975 ]
   },
   "properties": {
   "name":"Shoshone Falls",
   "capacity_mw":11.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.9925,33.4879 ]
   },
   "properties": {
   "name":"Sibley Mill",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1946
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.6189,31.088 ]
   },
   "properties": {
   "name":"Sidney A Murray Jr Hydroelectric",
   "capacity_mw":192,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.0531,43.8986 ]
   },
   "properties": {
   "name":"Silver Lake (VT)",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -131.5178,55.3814 ]
   },
   "properties": {
   "name":"Silvis",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.2028,33.1403 ]
   },
   "properties": {
   "name":"Sinclair Dam",
   "capacity_mw":45,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.6344,32.7792 ]
   },
   "properties": {
   "name":"Siphon Drop Power Plant",
   "capacity_mw":4.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.3297,44.033 ]
   },
   "properties": {
   "name":"Siphon Power Project",
   "capacity_mw":5.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0029,44.6856 ]
   },
   "properties": {
   "name":"Sissonville Hydro",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.8997,37.0568 ]
   },
   "properties": {
   "name":"Site 980 65",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.5583,43.5708 ]
   },
   "properties": {
   "name":"Skelton",
   "capacity_mw":16.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.7197,46.7844 ]
   },
   "properties": {
   "name":"Skookumchuck",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4563,40.9769 ]
   },
   "properties": {
   "name":"Slate Creek",
   "capacity_mw":4.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4728,43.2939 ]
   },
   "properties": {
   "name":"Slide Creek",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1195,39.5804 ]
   },
   "properties": {
   "name":"Sly Creek",
   "capacity_mw":12.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.336,43.9599 ]
   },
   "properties": {
   "name":"Smallwood",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1781,44.4695 ]
   },
   "properties": {
   "name":"Smith (NH)",
   "capacity_mw":15,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1282,43.9921 ]
   },
   "properties": {
   "name":"Smith (VT)",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.5574,48.9595 ]
   },
   "properties": {
   "name":"Smith Falls Hydro Project",
   "capacity_mw":38.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5356,37.0413 ]
   },
   "properties": {
   "name":"Smith Mountain",
   "capacity_mw":547.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1969
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.4195,37.1696 ]
   },
   "properties": {
   "name":"Smithland Hydroelectric Plant",
   "capacity_mw":75.9,
   "primary_fuel":"Hydro",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.5029,40.5449 ]
   },
   "properties": {
   "name":"Snake Creek",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1910
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -133.737,58.1415 ]
   },
   "properties": {
   "name":"Snettisham",
   "capacity_mw":78.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.837,47.5401 ]
   },
   "properties": {
   "name":"Snoqualmie",
   "capacity_mw":12.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8414,47.5445 ]
   },
   "properties": {
   "name":"Snoqualmie 2",
   "capacity_mw":38.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1978
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3715,37.5736 ]
   },
   "properties": {
   "name":"Snowden",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.6967,42.6446 ]
   },
   "properties": {
   "name":"Soda",
   "capacity_mw":14.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5014,43.3061 ]
   },
   "properties": {
   "name":"Soda Springs",
   "capacity_mw":11,
   "primary_fuel":"Hydro",
   "commissioning_year":1952
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.2433,43.9206 ]
   },
   "properties": {
   "name":"Soft Maple",
   "capacity_mw":16,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -146.3033,61.0828 ]
   },
   "properties": {
   "name":"Solomon Gulch",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.8408,43.2511 ]
   },
   "properties": {
   "name":"Somersworth Lower Great Dam",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8792,40.3954 ]
   },
   "properties": {
   "name":"South",
   "capacity_mw":6.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.755,38.4833 ]
   },
   "properties": {
   "name":"South Canal Hydro-1",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.7714,38.4703 ]
   },
   "properties": {
   "name":"South Canal Hydro-3",
   "capacity_mw":3.5,
   "primary_fuel":"Hydro",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8831,44.5133 ]
   },
   "properties": {
   "name":"South Colton",
   "capacity_mw":21,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.7811,33.4665 ]
   },
   "properties": {
   "name":"South Consolidated",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -109.1652,45.2063 ]
   },
   "properties": {
   "name":"South Dry Creek Hydro",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1961,44.2678 ]
   },
   "properties": {
   "name":"South Edwards",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1935
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -132.8911,55.5633 ]
   },
   "properties": {
   "name":"South Fork",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7833,47.6992 ]
   },
   "properties": {
   "name":"South Fork Tolt",
   "capacity_mw":16.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1995
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.3102,42.4937 ]
   },
   "properties": {
   "name":"South Forks Hydro",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6399,43.3044 ]
   },
   "properties": {
   "name":"South Glens Falls Hydroelectric",
   "capacity_mw":13.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.0902,36.5232 ]
   },
   "properties": {
   "name":"South Holston",
   "capacity_mw":38.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.6048,40.08 ]
   },
   "properties": {
   "name":"Spanish Fork",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6448,39.3246 ]
   },
   "properties": {
   "name":"Spaulding 1",
   "capacity_mw":7,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6454,39.3246 ]
   },
   "properties": {
   "name":"Spaulding 2",
   "capacity_mw":3.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6355,39.3377 ]
   },
   "properties": {
   "name":"Spaulding 3",
   "capacity_mw":6.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.8547,44.4783 ]
   },
   "properties": {
   "name":"Spearfish Hydro",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.6563,42.8093 ]
   },
   "properties": {
   "name":"Spencer Hydro",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1944
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.0008,38.3914 ]
   },
   "properties": {
   "name":"Spicer Meadow Project",
   "capacity_mw":5.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.7556,43.2339 ]
   },
   "properties": {
   "name":"Spier Falls",
   "capacity_mw":56,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.164,33.4538 ]
   },
   "properties": {
   "name":"Spillway",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -109.1299,44.5127 ]
   },
   "properties": {
   "name":"Spirit Mountain",
   "capacity_mw":4.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.9894,42.5014 ]
   },
   "properties": {
   "name":"Sprague Hydro",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4675,40.6281 ]
   },
   "properties": {
   "name":"Spring Creek",
   "capacity_mw":180,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1117,38.1865 ]
   },
   "properties": {
   "name":"Spring Gap",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0858,34.2253 ]
   },
   "properties": {
   "name":"Springville Hydroelectric",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.3255,46.5565 ]
   },
   "properties": {
   "name":"Squa Pan Hydro Station",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1942
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.6469,45.4117 ]
   },
   "properties": {
   "name":"St Croix Falls",
   "capacity_mw":23.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.93,33.4261 ]
   },
   "properties": {
   "name":"St Stephen",
   "capacity_mw":84,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.7533,40.6236 ]
   },
   "properties": {
   "name":"Stairs",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1046,39.4704 ]
   },
   "properties": {
   "name":"Stampede",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3703,38.139 ]
   },
   "properties": {
   "name":"Stanislaus",
   "capacity_mw":81.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7614,44.4553 ]
   },
   "properties": {
   "name":"Stark",
   "capacity_mw":26,
   "primary_fuel":"Hydro",
   "commissioning_year":1957
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.0512,33.5626 ]
   },
   "properties": {
   "name":"Stevens Creek",
   "capacity_mw":17.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1918
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6444,43.4461 ]
   },
   "properties": {
   "name":"Stevens Mills Hydroelectric Project",
   "capacity_mw":2.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.585,44.5153 ]
   },
   "properties": {
   "name":"Stevens Point",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1918
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1714,41.3833 ]
   },
   "properties": {
   "name":"Stevenson",
   "capacity_mw":30.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.536,33.5661 ]
   },
   "properties": {
   "name":"Stewart Mountain",
   "capacity_mw":13,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.8853,43.2978 ]
   },
   "properties": {
   "name":"Stewarts Bridge",
   "capacity_mw":38.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1956
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.1586,44.8747 ]
   },
   "properties": {
   "name":"Stiles",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.6838,44.9127 ]
   },
   "properties": {
   "name":"Stillwater B",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6544,42.9375 ]
   },
   "properties": {
   "name":"Stillwater Hydro Electric Project",
   "capacity_mw":3.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.6833,44.9094 ]
   },
   "properties": {
   "name":"Stillwater Hydro Station",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.04,43.8974 ]
   },
   "properties": {
   "name":"Stillwater Reservoir Hydro",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.7691,37.6936 ]
   },
   "properties": {
   "name":"Stockton Hydro",
   "capacity_mw":52,
   "primary_fuel":"Hydro",
   "commissioning_year":1973
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8866,45.0811 ]
   },
   "properties": {
   "name":"Stone Creek",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5332,39.5869 ]
   },
   "properties": {
   "name":"Stony Gorge",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.8934,42.9051 ]
   },
   "properties": {
   "name":"Strawberry Creek",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1944
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.1263,39.4326 ]
   },
   "properties": {
   "name":"Strontia Springs Hydro Plant",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0467,41.8482 ]
   },
   "properties": {
   "name":"Sturgeon",
   "capacity_mw":14.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.7339,42.3514 ]
   },
   "properties": {
   "name":"Stuyvesant Falls",
   "capacity_mw":6,
   "primary_fuel":"Hydro",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9765,44.6422 ]
   },
   "properties": {
   "name":"Sugar Island",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.3748,39.2527 ]
   },
   "properties": {
   "name":"Sugarloaf Hydro Plant",
   "capacity_mw":2.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.619,45.354 ]
   },
   "properties": {
   "name":"Sullivan",
   "capacity_mw":15.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2917,47.5025 ]
   },
   "properties": {
   "name":"Summer Falls Power Plant",
   "capacity_mw":92,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.4161,46.5646 ]
   },
   "properties": {
   "name":"Superior Falls",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.3791,43.2435 ]
   },
   "properties": {
   "name":"Swan Falls",
   "capacity_mw":25,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -131.3561,55.6152 ]
   },
   "properties": {
   "name":"Swan Lake",
   "capacity_mw":22.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.2017,46.0608 ]
   },
   "properties": {
   "name":"Swift 1",
   "capacity_mw":240,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.2594,46.0594 ]
   },
   "properties": {
   "name":"Swift 2",
   "capacity_mw":72,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.9166,42.7284 ]
   },
   "properties": {
   "name":"Swift Creek",
   "capacity_mw":1.7,
   "primary_fuel":"Hydro",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7828,41.5717 ]
   },
   "properties": {
   "name":"Swinging Bridge 2",
   "capacity_mw":6.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1939
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.3775,46.305 ]
   },
   "properties": {
   "name":"Sylvan",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1914
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.9996,29.5481 ]
   },
   "properties": {
   "name":"TP 4",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1932
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.3086,36.597 ]
   },
   "properties": {
   "name":"Table Rock",
   "capacity_mw":200,
   "primary_fuel":"Hydro",
   "commissioning_year":1960
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.7828,37.5237 ]
   },
   "properties": {
   "name":"Tacoma",
   "capacity_mw":4.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1906
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0458,41.5725 ]
   },
   "properties": {
   "name":"Taftville",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3083,44.3083 ]
   },
   "properties": {
   "name":"Talcville",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.4984,33.9892 ]
   },
   "properties": {
   "name":"Tallassee Hydro Project",
   "capacity_mw":2.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.3755,34.7313 ]
   },
   "properties": {
   "name":"Tallulah Falls",
   "capacity_mw":72,
   "primary_fuel":"Hydro",
   "commissioning_year":1915
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6131,43.98 ]
   },
   "properties": {
   "name":"Tannery Island Power",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.8347,37.5208 ]
   },
   "properties": {
   "name":"Taum Sauk",
   "capacity_mw":408,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.7112,40.1063 ]
   },
   "properties": {
   "name":"Taylor Draw Hydroelectric Facility",
   "capacity_mw":2.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3219,43.927 ]
   },
   "properties": {
   "name":"Taylorville",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4971,33.8343 ]
   },
   "properties": {
   "name":"Temescal",
   "capacity_mw":2.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.0511,35.595 ]
   },
   "properties": {
   "name":"Tenkiller Ferry",
   "capacity_mw":39,
   "primary_fuel":"Hydro",
   "commissioning_year":1954
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.0028,35.2139 ]
   },
   "properties": {
   "name":"Tennessee Creek",
   "capacity_mw":10.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1955
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0509,41.539 ]
   },
   "properties": {
   "name":"Tenth Street",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0069,36.4156 ]
   },
   "properties": {
   "name":"Terminus Hydroelectric Project",
   "capacity_mw":20.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -152.895,57.6861 ]
   },
   "properties": {
   "name":"Terror Lake Microgrid",
   "capacity_mw":33.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1995
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.4063,34.7504 ]
   },
   "properties": {
   "name":"Terrora",
   "capacity_mw":16,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.9011,38.9737 ]
   },
   "properties": {
   "name":"Tesla",
   "capacity_mw":27.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1997
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.8596,42.2214 ]
   },
   "properties": {
   "name":"Texon Hydroelectric Project",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1346,45.614 ]
   },
   "properties": {
   "name":"The Dalles",
   "capacity_mw":1819.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.7952,44.2174 ]
   },
   "properties": {
   "name":"Theresa Plant",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6301,39.5149 ]
   },
   "properties": {
   "name":"Thermalito",
   "capacity_mw":115.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.5464,39.5287 ]
   },
   "properties": {
   "name":"Thermalito Diverson Dam",
   "capacity_mw":3.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.3582,47.5932 ]
   },
   "properties": {
   "name":"Thompson Falls",
   "capacity_mw":87.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1915
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.3333,46.655 ]
   },
   "properties": {
   "name":"Thomson",
   "capacity_mw":72.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.2183,45.4111 ]
   },
   "properties": {
   "name":"Thornapple",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.1254,35.234 ]
   },
   "properties": {
   "name":"Thorpe",
   "capacity_mw":21.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1941
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.8367,42.7405 ]
   },
   "properties": {
   "name":"Thousand Springs",
   "capacity_mw":6.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.5231,40.1998 ]
   },
   "properties": {
   "name":"Three Forks Water Power Project",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5174,41.999 ]
   },
   "properties": {
   "name":"Thundermist Hydro",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.8876,32.5354 ]
   },
   "properties": {
   "name":"Thurlow Dam",
   "capacity_mw":91,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.1018,48.318 ]
   },
   "properties": {
   "name":"Tiber Dam Hydroelectric Plant",
   "capacity_mw":7.5,
   "primary_fuel":"Hydro",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1287,46.658 ]
   },
   "properties": {
   "name":"Tieton Dam Hydro Electric Project",
   "capacity_mw":13.8,
   "primary_fuel":"Hydro",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4926,38.4493 ]
   },
   "properties": {
   "name":"Tiger Creek",
   "capacity_mw":52.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.0648,35.2067 ]
   },
   "properties": {
   "name":"Tillery",
   "capacity_mw":84,
   "primary_fuel":"Hydro",
   "commissioning_year":1936
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.2783,35.1967 ]
   },
   "properties": {
   "name":"Tims Ford",
   "capacity_mw":45.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1972
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.5934,39.8935 ]
   },
   "properties": {
   "name":"Toadtown",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4475,43.2727 ]
   },
   "properties": {
   "name":"Toketee Falls",
   "capacity_mw":42.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.5659,31.1735 ]
   },
   "properties": {
   "name":"Toledo Bend",
   "capacity_mw":81,
   "primary_fuel":"Hydro",
   "commissioning_year":1969
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.7306,45.4411 ]
   },
   "properties": {
   "name":"Tomahawk",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1938
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.4879,18.1318 ]
   },
   "properties": {
   "name":"Toro Negro 1",
   "capacity_mw":8.64,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.5116,18.1664 ]
   },
   "properties": {
   "name":"Toro Negro 2",
   "capacity_mw":1.92,
   "primary_fuel":"Hydro",
   "commissioning_year":1937
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.5749,37.4295 ]
   },
   "properties": {
   "name":"Towaoc",
   "capacity_mw":11.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.3148,40.7335 ]
   },
   "properties": {
   "name":"Townsend Hydro",
   "capacity_mw":5.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.8884,45.9479 ]
   },
   "properties": {
   "name":"Trego",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1567,43.2758 ]
   },
   "properties": {
   "name":"Trenton Falls",
   "capacity_mw":21.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.7581,38.2392 ]
   },
   "properties": {
   "name":"Tri-County Water Hydropower Project",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.7626,40.7973 ]
   },
   "properties": {
   "name":"Trinity",
   "capacity_mw":140,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.1281,35.247 ]
   },
   "properties": {
   "name":"Tuckasegee",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.1758,35.4856 ]
   },
   "properties": {
   "name":"Tuckertown Hydro",
   "capacity_mw":42,
   "primary_fuel":"Hydro",
   "commissioning_year":1962
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.3519,34.7133 ]
   },
   "properties": {
   "name":"Tugalo",
   "capacity_mw":44.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.9241,36.0586 ]
   },
   "properties": {
   "name":"Tulare Success Power Project",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.7071,36.1631 ]
   },
   "properties": {
   "name":"Tule River",
   "capacity_mw":8.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1914
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.605,37.8761 ]
   },
   "properties": {
   "name":"Tulloch",
   "capacity_mw":24.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1974
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2327,43.642 ]
   },
   "properties": {
   "name":"Tunnel 1 Power Project",
   "capacity_mw":7,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5947,37.6115 ]
   },
   "properties": {
   "name":"Turlock Lake",
   "capacity_mw":3.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.0969,47.6053 ]
   },
   "properties": {
   "name":"Turnbull Hydro",
   "capacity_mw":13,
   "primary_fuel":"Hydro",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.1864,35.3348 ]
   },
   "properties": {
   "name":"Turner Shoals",
   "capacity_mw":5.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1997
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5615,42.608 ]
   },
   "properties": {
   "name":"Turners Falls",
   "capacity_mw":5.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1910
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.3894,35.245 ]
   },
   "properties": {
   "name":"Tuxedo",
   "capacity_mw":5,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.1322,41.665 ]
   },
   "properties": {
   "name":"Twin Branch",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.1994,44.9156 ]
   },
   "properties": {
   "name":"Twin Cities Hydro LLC",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.3553,42.5892 ]
   },
   "properties": {
   "name":"Twin Falls (ID)",
   "capacity_mw":52.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.0708,45.8728 ]
   },
   "properties": {
   "name":"Twin Falls (WI)",
   "capacity_mw":9.2,
   "primary_fuel":"Hydro",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6878,47.4446 ]
   },
   "properties": {
   "name":"Twin Falls Hydro",
   "capacity_mw":24,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2547,46.0883 ]
   },
   "properties": {
   "name":"Twin Reservoirs",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -131.5043,56.2164 ]
   },
   "properties": {
   "name":"Tyee Lake Hydroelectric Facility",
   "capacity_mw":22.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.0661,40.5381 ]
   },
   "properties": {
   "name":"Uintah",
   "capacity_mw":1.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9131,44.5107 ]
   },
   "properties": {
   "name":"Union Falls",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4443,38.8643 ]
   },
   "properties": {
   "name":"Union Valley",
   "capacity_mw":38.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9966,44.7145 ]
   },
   "properties": {
   "name":"Unionville Hydro Project 2499 NY",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1984
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.4187,39.5441 ]
   },
   "properties": {
   "name":"Unit 4",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.2124,44.088 ]
   },
   "properties": {
   "name":"Upper Androscoggin",
   "capacity_mw":1.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1920
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6907,48.649 ]
   },
   "properties": {
   "name":"Upper Baker",
   "capacity_mw":104.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.2293,44.0869 ]
   },
   "properties": {
   "name":"Upper Barker",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.4806,38.2683 ]
   },
   "properties": {
   "name":"Upper Beaver",
   "capacity_mw":2.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1907
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.4281,43.8836 ]
   },
   "properties": {
   "name":"Upper Beaver Falls Project",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4706,37.6508 ]
   },
   "properties": {
   "name":"Upper Dawson",
   "capacity_mw":4.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4189,47.6544 ]
   },
   "properties": {
   "name":"Upper Falls",
   "capacity_mw":10,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.59,37.546 ]
   },
   "properties": {
   "name":"Upper Gorge",
   "capacity_mw":37.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.8855,42.8643 ]
   },
   "properties": {
   "name":"Upper Malad",
   "capacity_mw":8.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6805,42.9126 ]
   },
   "properties": {
   "name":"Upper Mechanicville",
   "capacity_mw":16.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.0048,39.1438 ]
   },
   "properties": {
   "name":"Upper Molina",
   "capacity_mw":9.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9914,44.2144 ]
   },
   "properties": {
   "name":"Upper Newton Falls",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.7456,34.9214 ]
   },
   "properties": {
   "name":"Upper Pacolet Hydro",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.051,43.5527 ]
   },
   "properties": {
   "name":"Upper Power Plant",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9247,42.7674 ]
   },
   "properties": {
   "name":"Upper Salmon A",
   "capacity_mw":18,
   "primary_fuel":"Hydro",
   "commissioning_year":1937
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9082,42.7664 ]
   },
   "properties": {
   "name":"Upper Salmon B",
   "capacity_mw":16.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1947
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.6775,41.7871 ]
   },
   "properties": {
   "name":"Upper Sterling",
   "capacity_mw":2.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3319,47.6822 ]
   },
   "properties": {
   "name":"Upriver Dam Hydro Plant",
   "capacity_mw":17.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.5787,37.3777 ]
   },
   "properties": {
   "name":"Vallecito Hydroelectric",
   "capacity_mw":5.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5625,42.9044 ]
   },
   "properties": {
   "name":"Valley Falls Hydroelectric Facility",
   "capacity_mw":2.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.829,33.9001 ]
   },
   "properties": {
   "name":"Valley View",
   "capacity_mw":4.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.5056,43.4486 ]
   },
   "properties": {
   "name":"Varick",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4168,34.0114 ]
   },
   "properties": {
   "name":"Venice Hydro",
   "capacity_mw":10.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.585,39.3125 ]
   },
   "properties": {
   "name":"Verdi",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1911
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5146,42.7717 ]
   },
   "properties": {
   "name":"Vernon Dam",
   "capacity_mw":35.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1964
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.2089,46.6964 ]
   },
   "properties": {
   "name":"Victoria Dam",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.5477,42.9197 ]
   },
   "properties": {
   "name":"Victory Mills",
   "capacity_mw":1.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.8427,42.8075 ]
   },
   "properties": {
   "name":"Vischer Ferry",
   "capacity_mw":11.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1959
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8671,40.4591 ]
   },
   "properties": {
   "name":"Volta 1",
   "capacity_mw":8.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8621,40.4519 ]
   },
   "properties": {
   "name":"Volta 2",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.7881,34.6853 ]
   },
   "properties": {
   "name":"W E Warne",
   "capacity_mw":74.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5309,44.6253 ]
   },
   "properties": {
   "name":"W K Sanders",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1983
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.0772,37.0692 ]
   },
   "properties": {
   "name":"W R Gianelli",
   "capacity_mw":424,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.2714,33.8447 ]
   },
   "properties": {
   "name":"Waddell",
   "capacity_mw":40,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -155.1189,19.7203 ]
   },
   "properties": {
   "name":"Waiau Hydro",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -155.1486,19.713 ]
   },
   "properties": {
   "name":"Wailuku River Hydroelectric",
   "capacity_mw":10.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -159.5561,22.1963 ]
   },
   "properties": {
   "name":"Wainiha Hydro",
   "capacity_mw":3.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1908
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1952,41.56 ]
   },
   "properties": {
   "name":"Walden",
   "capacity_mw":2.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.1574,33.3498 ]
   },
   "properties": {
   "name":"Wallace Dam",
   "capacity_mw":321.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1980
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1309,41.4679 ]
   },
   "properties": {
   "name":"Wallenpaupack",
   "capacity_mw":40,
   "primary_fuel":"Hydro",
   "commissioning_year":1926
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2127,45.2667 ]
   },
   "properties": {
   "name":"Wallowa Falls",
   "capacity_mw":1.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.2831,32.5839 ]
   },
   "properties": {
   "name":"Walter Bouldin Dam",
   "capacity_mw":225,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.0652,31.6245 ]
   },
   "properties": {
   "name":"Walter F George",
   "capacity_mw":168,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.0503,35.6946 ]
   },
   "properties": {
   "name":"Walters",
   "capacity_mw":108,
   "primary_fuel":"Hydro",
   "commissioning_year":1930
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.835,44.0696 ]
   },
   "properties": {
   "name":"Walterville",
   "capacity_mw":8,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.9703,46.8731 ]
   },
   "properties": {
   "name":"Wanapum",
   "capacity_mw":1079.8,
   "primary_fuel":"Hydro",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.4043,40.7904 ]
   },
   "properties": {
   "name":"Wanship",
   "capacity_mw":1.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1958
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.922,41.5984 ]
   },
   "properties": {
   "name":"Wappinger Falls Hydroelectric",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.2336,34.404 ]
   },
   "properties": {
   "name":"Ware Shoals Hydro Project",
   "capacity_mw":6.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.0112,38.7221 ]
   },
   "properties": {
   "name":"Warm Springs Hydro Project",
   "capacity_mw":2.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2477,44.7242 ]
   },
   "properties": {
   "name":"Warm Springs Power Enterprises",
   "capacity_mw":19.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.7986,43.4833 ]
   },
   "properties": {
   "name":"Warrensburg Hydroelectric",
   "capacity_mw":2.9,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0346,40.54 ]
   },
   "properties": {
   "name":"Warrior Ridge Hydro",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5604,39.3022 ]
   },
   "properties": {
   "name":"Washoe",
   "capacity_mw":2.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1904
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.1264,36.3413 ]
   },
   "properties": {
   "name":"Watauga",
   "capacity_mw":57.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1949
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7677,44.3813 ]
   },
   "properties": {
   "name":"Waterbury 22",
   "capacity_mw":5.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.7021,34.3355 ]
   },
   "properties": {
   "name":"Wateree Hydro",
   "capacity_mw":76.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1919
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.8623,42.9019 ]
   },
   "properties": {
   "name":"Waterloo Hydroelectric Project",
   "capacity_mw":1.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1915
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.2394,43.3272 ]
   },
   "properties": {
   "name":"Waterport",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.8747,43.9758 ]
   },
   "properties": {
   "name":"Watertown",
   "capacity_mw":8.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1924
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.7855,35.6197 ]
   },
   "properties": {
   "name":"Watts Bar Hydro",
   "capacity_mw":174.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.6367,44.9575 ]
   },
   "properties": {
   "name":"Wausau",
   "capacity_mw":5.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.2353,46.1592 ]
   },
   "properties": {
   "name":"Way Dam",
   "capacity_mw":1.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.9025,42.9528 ]
   },
   "properties": {
   "name":"Webber",
   "capacity_mw":4.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.1708,35.5531 ]
   },
   "properties": {
   "name":"Webbers Falls",
   "capacity_mw":60,
   "primary_fuel":"Hydro",
   "commissioning_year":1973
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.8849,41.1376 ]
   },
   "properties": {
   "name":"Weber",
   "capacity_mw":3.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1911
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6483,47.4335 ]
   },
   "properties": {
   "name":"Weeks Falls",
   "capacity_mw":4.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.7538,34.1721 ]
   },
   "properties": {
   "name":"Weiss Dam",
   "capacity_mw":87.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1961
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.8653,47.9469 ]
   },
   "properties": {
   "name":"Wells",
   "capacity_mw":774,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.6021,43.6669 ]
   },
   "properties": {
   "name":"West Buxton",
   "capacity_mw":7.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1931
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0554,44.8874 ]
   },
   "properties": {
   "name":"West Charleston",
   "capacity_mw":1.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1881,44.4056 ]
   },
   "properties": {
   "name":"West Danville 15",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5103,41.8596 ]
   },
   "properties": {
   "name":"West Delaware Tunnel Plant",
   "capacity_mw":7.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6206,43.9829 ]
   },
   "properties": {
   "name":"West End Dam Hydroelectric Project",
   "capacity_mw":4.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.6483,45.2497 ]
   },
   "properties": {
   "name":"West Enfield Hydro",
   "capacity_mw":13,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.1887,32.9187 ]
   },
   "properties": {
   "name":"West Point (GA)",
   "capacity_mw":73.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1975
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5496,38.4209 ]
   },
   "properties": {
   "name":"West Point PH",
   "capacity_mw":13.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1948
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.7183,44.7639 ]
   },
   "properties": {
   "name":"Weston Hydro",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1921
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2158,44.0661 ]
   },
   "properties": {
   "name":"Weybridge",
   "capacity_mw":3,
   "primary_fuel":"Hydro",
   "commissioning_year":1951
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.3819,34.8069 ]
   },
   "properties": {
   "name":"Wheeler Dam",
   "capacity_mw":404,
   "primary_fuel":"Hydro",
   "commissioning_year":1950
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.7903,35.1276 ]
   },
   "properties": {
   "name":"Whillock",
   "capacity_mw":32.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5387,40.5976 ]
   },
   "properties": {
   "name":"Whiskeytown",
   "capacity_mw":3.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.8022,45.4821 ]
   },
   "properties": {
   "name":"White Rapids",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":1927
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.9039,46.4983 ]
   },
   "properties": {
   "name":"White River (WI)",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1907
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.6369,35.7574 ]
   },
   "properties": {
   "name":"White River Lock and Dam 1",
   "capacity_mw":4.3,
   "primary_fuel":"Hydro",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.7654,35.744 ]
   },
   "properties": {
   "name":"White River Lock and Dam 2",
   "capacity_mw":3.5,
   "primary_fuel":"Hydro",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.8505,35.8436 ]
   },
   "properties": {
   "name":"White River Lock and Dam 3",
   "capacity_mw":4.3,
   "primary_fuel":"Hydro",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.7874,38.7653 ]
   },
   "properties": {
   "name":"White Rock/Slab Creek",
   "capacity_mw":266.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1968
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.6405,33.9347 ]
   },
   "properties": {
   "name":"Whitewater Hydro Plant",
   "capacity_mw":1.3,
   "primary_fuel":"Hydro",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.5756,44.4889 ]
   },
   "properties": {
   "name":"Whiting",
   "capacity_mw":5.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1908
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -131.5308,55.3281 ]
   },
   "properties": {
   "name":"Whitman",
   "capacity_mw":4.8,
   "primary_fuel":"Hydro",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.3667,31.8694 ]
   },
   "properties": {
   "name":"Whitney",
   "capacity_mw":41.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.1264,36.3417 ]
   },
   "properties": {
   "name":"Wilbur",
   "capacity_mw":10.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1939
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3036,43.6679 ]
   },
   "properties": {
   "name":"Wilder",
   "capacity_mw":35.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0029,40.4329 ]
   },
   "properties": {
   "name":"William F Matson Generating Station",
   "capacity_mw":21.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1988
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.2053,40.035 ]
   },
   "properties": {
   "name":"Williams Fork Hydro Plant",
   "capacity_mw":3.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1967
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.8703,44.9589 ]
   },
   "properties": {
   "name":"Williams Hydro",
   "capacity_mw":13,
   "primary_fuel":"Hydro",
   "commissioning_year":1944
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.3179,39.3578 ]
   },
   "properties": {
   "name":"Willow Island Hydroelectric Plant",
   "capacity_mw":44,
   "primary_fuel":"Hydro",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.6254,34.7978 ]
   },
   "properties": {
   "name":"Wilson Dam",
   "capacity_mw":666.7,
   "primary_fuel":"Hydro",
   "commissioning_year":1943
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.1747,42.6289 ]
   },
   "properties": {
   "name":"Wilson Lake Hydroelectric Project",
   "capacity_mw":8.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1993
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.9139,38.5274 ]
   },
   "properties": {
   "name":"Winfield",
   "capacity_mw":24.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1938
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.7639,47.9344 ]
   },
   "properties": {
   "name":"Winton",
   "capacity_mw":4,
   "primary_fuel":"Hydro",
   "commissioning_year":1923
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.825,44.3939 ]
   },
   "properties": {
   "name":"Wisconsin Rapids",
   "capacity_mw":8.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1912
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0828,42.5042 ]
   },
   "properties": {
   "name":"Wiscoy 170",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1922
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.0985,38.8899 ]
   },
   "properties": {
   "name":"Wise",
   "capacity_mw":16.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1929
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.3406,44.9378 ]
   },
   "properties": {
   "name":"Wissota",
   "capacity_mw":39.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1917
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.147,36.8691 ]
   },
   "properties": {
   "name":"Wolf Creek",
   "capacity_mw":270,
   "primary_fuel":"Hydro",
   "commissioning_year":1952
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2041,39.5538 ]
   },
   "properties": {
   "name":"Woodleaf",
   "capacity_mw":59,
   "primary_fuel":"Hydro",
   "commissioning_year":1963
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.8792,37.8607 ]
   },
   "properties": {
   "name":"Woodward Power Plant",
   "capacity_mw":2.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1982
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.0619,43.9947 ]
   },
   "properties": {
   "name":"Worumbo Hydro Station",
   "capacity_mw":19.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5753,44.3097 ]
   },
   "properties": {
   "name":"Wrightsville Hydro Plant",
   "capacity_mw":1,
   "primary_fuel":"Hydro",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.0078,35.0218 ]
   },
   "properties": {
   "name":"Wylie",
   "capacity_mw":60,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.9064,45.0703 ]
   },
   "properties": {
   "name":"Wyman Hydro",
   "capacity_mw":72,
   "primary_fuel":"Hydro",
   "commissioning_year":1934
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.6052,47.3851 ]
   },
   "properties": {
   "name":"Wynoochee",
   "capacity_mw":12.8,
   "primary_fuel":"Hydro",
   "commissioning_year":1994
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3355,45.9628 ]
   },
   "properties": {
   "name":"Yale",
   "capacity_mw":134,
   "primary_fuel":"Hydro",
   "commissioning_year":1953
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9997,44.7661 ]
   },
   "properties": {
   "name":"Yaleville",
   "capacity_mw":2,
   "primary_fuel":"Hydro",
   "commissioning_year":1940
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0314,41.0006 ]
   },
   "properties": {
   "name":"Yards Creek",
   "capacity_mw":453,
   "primary_fuel":"Hydro",
   "commissioning_year":1965
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.8901,32.5743 ]
   },
   "properties": {
   "name":"Yates Dam",
   "capacity_mw":50.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1928
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.8711,18.1106 ]
   },
   "properties": {
   "name":"Yauco 1",
   "capacity_mw":25,
   "primary_fuel":"Hydro",
   "commissioning_year":null
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.8837,18.0536 ]
   },
   "properties": {
   "name":"Yauco 2",
   "capacity_mw":9,
   "primary_fuel":"Hydro",
   "commissioning_year":null
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.9575,45.3074 ]
   },
   "properties": {
   "name":"Yellowtail",
   "capacity_mw":259.4,
   "primary_fuel":"Hydro",
   "commissioning_year":1966
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.6358,46.9749 ]
   },
   "properties": {
   "name":"Yelm",
   "capacity_mw":12,
   "primary_fuel":"Hydro",
   "commissioning_year":1944
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.3426,34.6815 ]
   },
   "properties": {
   "name":"Yonah",
   "capacity_mw":22.5,
   "primary_fuel":"Hydro",
   "commissioning_year":1925
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.8192,33.9117 ]
   },
   "properties": {
   "name":"Yorba Linda",
   "capacity_mw":5.1,
   "primary_fuel":"Hydro",
   "commissioning_year":1981
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.712,40.1136 ]
   },
   "properties": {
   "name":"York Haven",
   "capacity_mw":19.6,
   "primary_fuel":"Hydro",
   "commissioning_year":1906
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3682,39.8016 ]
   },
   "properties": {
   "name":"Yough Hydro Power",
   "capacity_mw":12.2,
   "primary_fuel":"Hydro",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8,47.7916 ]
   },
   "properties": {
   "name":"Youngs Creek Hydroelectric Project",
   "capacity_mw":7.5,
   "primary_fuel":"Hydro",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5761,40.2003 ]
   },
   "properties": {
   "name":"12 Applegate Solar LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4227,42.0761 ]
   },
   "properties": {
   "name":"126 Grove Solar LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2414,33.7943 ]
   },
   "properties": {
   "name":"1420 Coil Av #C",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3913,40.5358 ]
   },
   "properties": {
   "name":"145 Talmadge Solar",
   "capacity_mw":3.8,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1534,44.4777 ]
   },
   "properties": {
   "name":"158th Fighter Wing Solar Farm",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.34,40.5161 ]
   },
   "properties": {
   "name":"180 Raritan Solar",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1712,42.1091 ]
   },
   "properties": {
   "name":"201 Sturbridge B",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1705,42.1093 ]
   },
   "properties": {
   "name":"205 Sturbridge A",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.4158,36.67 ]
   },
   "properties": {
   "name":"2081 Terzian Solar Project",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5069,37.3522 ]
   },
   "properties": {
   "name":"2097 Helton Solar Project",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6697,39.2917 ]
   },
   "properties": {
   "name":"2127 Harris Solar Project",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.4304,35.2441 ]
   },
   "properties": {
   "name":"231 Dixon 74 Solar I  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5797,40.2058 ]
   },
   "properties": {
   "name":"24 Applegate Solar LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2242,34.0269 ]
   },
   "properties": {
   "name":"2555 E Olympic Bl",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7622,42.5814 ]
   },
   "properties": {
   "name":"265 Pleasant Solar NG  LLC",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5218,42.0552 ]
   },
   "properties": {
   "name":"301 Chestnut Solar NG",
   "capacity_mw":4.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7302,40.8942 ]
   },
   "properties": {
   "name":"350 Clark Solar  NG  LLC",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5836,40.1964 ]
   },
   "properties": {
   "name":"4 Applegate Solar LLC",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1922,41.8094 ]
   },
   "properties": {
   "name":"433 Purchase Solar NG  LLC",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.4117,35.4325 ]
   },
   "properties": {
   "name":"4Oaks",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1917,40.1392 ]
   },
   "properties": {
   "name":"500 Virginia Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6058,36.4972 ]
   },
   "properties": {
   "name":"510 REPP One",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7428,42.6267 ]
   },
   "properties": {
   "name":"651 Chase Solar NG",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.7483,35.7287 ]
   },
   "properties": {
   "name":"ABD Farms",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6906,39.4375 ]
   },
   "properties": {
   "name":"AC Criminal Courts Complex SPE2  LLC",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6809,39.4606 ]
   },
   "properties": {
   "name":"ACCC Mays Landing",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1741,28.4845 ]
   },
   "properties": {
   "name":"ACE-Stanton A PV",
   "capacity_mw":4.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1804,28.4774 ]
   },
   "properties": {
   "name":"ACE-Stanton PV",
   "capacity_mw":4.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.6864,30.5236 ]
   },
   "properties": {
   "name":"AEP Jacksonville Solar Project",
   "capacity_mw":7.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.1591,17.9468 ]
   },
   "properties": {
   "name":"AES Ilumina",
   "capacity_mw":24,
   "primary_fuel":"Solar",
   "commissioning_year":null
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.8066,38.9579 ]
   },
   "properties": {
   "name":"AFA Solar Farm",
   "capacity_mw":5.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7378,42.5019 ]
   },
   "properties": {
   "name":"AIS Solar Project",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9856,35.4189 ]
   },
   "properties": {
   "name":"AM Best Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.1108,41.4067 ]
   },
   "properties": {
   "name":"AMP Napoleon Solar Facility",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.9695,33.6267 ]
   },
   "properties": {
   "name":"ANAD Solar Array",
   "capacity_mw":7.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0106,33.74 ]
   },
   "properties": {
   "name":"AP North Lake I  LP",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.9753,38.7614 ]
   },
   "properties": {
   "name":"ASTI",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4244,34.7803 ]
   },
   "properties": {
   "name":"AV Solar Ranch One",
   "capacity_mw":253,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9736,34.7489 ]
   },
   "properties": {
   "name":"AVS Lancaster 1",
   "capacity_mw":3.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4306,42.4733 ]
   },
   "properties": {
   "name":"Acton Solar Landfill",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.8633,32.1825 ]
   },
   "properties": {
   "name":"Actus Lend Lease DMAFB",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7436,41.7989 ]
   },
   "properties": {
   "name":"Acushnet AD Makepeace",
   "capacity_mw":4.7,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0425,41.6622 ]
   },
   "properties": {
   "name":"Acushnet Hawes Reed Road",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9972,41.7144 ]
   },
   "properties": {
   "name":"Acushnet- High Hill",
   "capacity_mw":3.2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9706,41.7517 ]
   },
   "properties": {
   "name":"Acushnet-Braley Road 1",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5309,39.4114 ]
   },
   "properties": {
   "name":"Adams Ave MS and HS",
   "capacity_mw":3.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.5877,39.7867 ]
   },
   "properties": {
   "name":"Adams Community Solar Garden III LLC",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.5859,39.7876 ]
   },
   "properties": {
   "name":"Adams Community Solar Garden LLC",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.2,42.6 ]
   },
   "properties": {
   "name":"Adams Farm Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3775,34.5572 ]
   },
   "properties": {
   "name":"Adelanto Solar  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3775,34.5572 ]
   },
   "properties": {
   "name":"Adelanto Solar II  LLC",
   "capacity_mw":7,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4353,34.5508 ]
   },
   "properties": {
   "name":"Adelanto Solar Project",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3249,37.1206 ]
   },
   "properties": {
   "name":"Adera Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5119,42.015 ]
   },
   "properties": {
   "name":"Advance Stores Company  Inc",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1629,38.6135 ]
   },
   "properties": {
   "name":"Aerojet I",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1703,38.6086 ]
   },
   "properties": {
   "name":"Aerojet II",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6144,42.0819 ]
   },
   "properties": {
   "name":"Agawam Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.4945,32.9774 ]
   },
   "properties": {
   "name":"Agua Caliente Solar Project",
   "capacity_mw":347.7,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.6753,39.8994 ]
   },
   "properties": {
   "name":"Airport 1 Solar (DIA)",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1194,34.8309 ]
   },
   "properties": {
   "name":"Ajax Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.2708,30.9931 ]
   },
   "properties": {
   "name":"Alamo 6",
   "capacity_mw":105,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3475,34.6822 ]
   },
   "properties": {
   "name":"Alamo Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.9998,32.8657 ]
   },
   "properties": {
   "name":"Alamogordo Solar Energy Center",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.5993,45.6413 ]
   },
   "properties": {
   "name":"Albany Solar",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.5569,35.2931 ]
   },
   "properties": {
   "name":"Albemarle Solar Center LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8127,35.093 ]
   },
   "properties": {
   "name":"Albertson Solar LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.6,35.169 ]
   },
   "properties": {
   "name":"Albuquerque Solar Energy Center",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.735,40.0006 ]
   },
   "properties": {
   "name":"Alethea I",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2434,35.1261 ]
   },
   "properties": {
   "name":"Algonquin SKIC 10 Solar  LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.2433,35.1261 ]
   },
   "properties": {
   "name":"Algonquin SKIC20 Solar LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -158.1514,21.4069 ]
   },
   "properties": {
   "name":"Aloha Solar Energy Fund 1 PK1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.4353,35.8983 ]
   },
   "properties": {
   "name":"Alpaugh 50",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.4428,35.9025 ]
   },
   "properties": {
   "name":"Alpaugh North",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.5047,34.7892 ]
   },
   "properties": {
   "name":"Alpine Solar",
   "capacity_mw":66,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.4865,32.572 ]
   },
   "properties": {
   "name":"Alta Luna",
   "capacity_mw":28.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2214,40.5664 ]
   },
   "properties": {
   "name":"Amazon",
   "capacity_mw":4.2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1663,37.4689 ]
   },
   "properties": {
   "name":"Amazon - Patterson PV",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.752,42.824 ]
   },
   "properties": {
   "name":"American Falls Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.752,42.824 ]
   },
   "properties": {
   "name":"American Falls Solar II",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6558,36.4183 ]
   },
   "properties": {
   "name":"American Legion PV 1",
   "capacity_mw":16,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.9264,35.3169 ]
   },
   "properties": {
   "name":"Amethyst Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.975,32.269 ]
   },
   "properties": {
   "name":"Amphitheater High School Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9197,33.8025 ]
   },
   "properties": {
   "name":"Anaheim Solar Energy Plant",
   "capacity_mw":2.1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5167,34.9756 ]
   },
   "properties": {
   "name":"Anderson Farm LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1099,35.1608 ]
   },
   "properties": {
   "name":"Andrew Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.0316,44.9019 ]
   },
   "properties": {
   "name":"Andromeda Community Solar",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2086,35.6511 ]
   },
   "properties": {
   "name":"Angel Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.75,35.5164 ]
   },
   "properties": {
   "name":"Angier Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.1069,45.247 ]
   },
   "properties": {
   "name":"Annandale Solar",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.2344,41.4169 ]
   },
   "properties": {
   "name":"Antares-GRE 314 East Lyme LLC",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2877,34.6948 ]
   },
   "properties": {
   "name":"Antelope Big Sky Ranch",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2807,34.6556 ]
   },
   "properties": {
   "name":"Antelope DSR 1",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3117,34.6869 ]
   },
   "properties": {
   "name":"Antelope DSR 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.5747,41.6272 ]
   },
   "properties": {
   "name":"Anthony Wayne Solar #1",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.1382,43.9065 ]
   },
   "properties": {
   "name":"Antlia Community Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -109.8904,32.0681 ]
   },
   "properties": {
   "name":"Apache Solar 1",
   "capacity_mw":90,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.97,36.39 ]
   },
   "properties": {
   "name":"Apex Solar PV Power Project",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.01,37.33 ]
   },
   "properties": {
   "name":"Apple Campus 2 PV",
   "capacity_mw":14.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2078,35.7389 ]
   },
   "properties": {
   "name":"Apple Data Center - PV2",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.252,35.5881 ]
   },
   "properties": {
   "name":"Apple Data Center PV",
   "capacity_mw":21,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.15,35.715 ]
   },
   "properties": {
   "name":"Apple Data Center PV3",
   "capacity_mw":17.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1569,35.6294 ]
   },
   "properties": {
   "name":"Apple One",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6578,39.9647 ]
   },
   "properties": {
   "name":"Aqua Ingrams Mill",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.6742,39.6384 ]
   },
   "properties": {
   "name":"Arapahoe 3 Community Solar Array",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.6006,36.4611 ]
   },
   "properties": {
   "name":"Ararat Rock Solar  LLC",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7036,35.3964 ]
   },
   "properties": {
   "name":"Arba Solar  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.217,39.445 ]
   },
   "properties": {
   "name":"Archdiocese of Baltimore J",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.217,39.445 ]
   },
   "properties": {
   "name":"Archdiocese of Baltimore L",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.9886,44.0449 ]
   },
   "properties": {
   "name":"Aries Community Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.4961,32.6878 ]
   },
   "properties": {
   "name":"Arizona Western College PV",
   "capacity_mw":4.7,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.8339,33.305 ]
   },
   "properties": {
   "name":"Arlington Valley Solar Energy II",
   "capacity_mw":129,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1756,35.7792 ]
   },
   "properties": {
   "name":"Arndt Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0511,34.655 ]
   },
   "properties": {
   "name":"Arrache 4006",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0519,34.6506 ]
   },
   "properties": {
   "name":"Arrache 4013",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0611,34.6478 ]
   },
   "properties": {
   "name":"Arrache 8083",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.8247,32.1081 ]
   },
   "properties": {
   "name":"Arzon Solar UASTP Solar Power Station",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.83,42.68 ]
   },
   "properties": {
   "name":"Ashby Duffy CSG Solar Farm",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.7989,36.1261 ]
   },
   "properties": {
   "name":"Ashley Solar Farm",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0121,34.7912 ]
   },
   "properties": {
   "name":"Aspen Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3525,36.5522 ]
   },
   "properties": {
   "name":"Aspiration G",
   "capacity_mw":9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7952,34.897 ]
   },
   "properties": {
   "name":"Atkinson Farm Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4408,39.3639 ]
   },
   "properties": {
   "name":"Atlantic City Convention Center",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.029,39.5199 ]
   },
   "properties": {
   "name":"Atlantic Coast Freezers Solar Facility",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.7697,45.1409 ]
   },
   "properties": {
   "name":"Atwater Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5108,35.895 ]
   },
   "properties": {
   "name":"Atwell Island",
   "capacity_mw":20.2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.4597,35.815 ]
   },
   "properties": {
   "name":"Atwell Island West Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.6219,35.3281 ]
   },
   "properties": {
   "name":"Audrey Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6391,35.5997 ]
   },
   "properties": {
   "name":"Augustus Farm  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1373,35.305 ]
   },
   "properties": {
   "name":"Auten Road Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.9606,32.0014 ]
   },
   "properties": {
   "name":"Avalon Solar",
   "capacity_mw":29,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.9584,32.0009 ]
   },
   "properties": {
   "name":"Avalon Solar II",
   "capacity_mw":16,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.11,35.9897 ]
   },
   "properties": {
   "name":"Avenal Park",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.2828,32.3717 ]
   },
   "properties": {
   "name":"Avra Valley Solar",
   "capacity_mw":26.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.61,42.5761 ]
   },
   "properties": {
   "name":"Axio Green LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.9956,37.7342 ]
   },
   "properties": {
   "name":"Axium Modesto Solar",
   "capacity_mw":25,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1775,42.7919 ]
   },
   "properties": {
   "name":"Ayers Village Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.6153,35.2831 ]
   },
   "properties": {
   "name":"Ayrshire",
   "capacity_mw":19.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.5917,32.9808 ]
   },
   "properties": {
   "name":"Azalea Solar  LLC",
   "capacity_mw":7.7,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.6432,45.0695 ]
   },
   "properties": {
   "name":"B.R. Corcoran CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.2254,45.665 ]
   },
   "properties": {
   "name":"B.R. Sartell CSG",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.0782,45.6236 ]
   },
   "properties": {
   "name":"B.R. Sauk Rapids CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.305,40.6972 ]
   },
   "properties": {
   "name":"BBB Corporate Headquarters",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3598,42.175 ]
   },
   "properties": {
   "name":"BC Solar",
   "capacity_mw":8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.3896,34.9705 ]
   },
   "properties": {
   "name":"BG Stewart Solar Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6041,42.0197 ]
   },
   "properties": {
   "name":"BJ's Wholesale Club  Inc- Uxbridge",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8259,40.0985 ]
   },
   "properties": {
   "name":"BJ's Wholesale Club Inc Dist Center",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.108,39.939 ]
   },
   "properties": {
   "name":"BNB Camden Solar",
   "capacity_mw":3.7,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.6969,39.1664 ]
   },
   "properties": {
   "name":"BPU Solar Farm",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5985,36.3725 ]
   },
   "properties": {
   "name":"BRE",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2266,41.7956 ]
   },
   "properties": {
   "name":"BWC Swan Pond River",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5267,42.0853 ]
   },
   "properties": {
   "name":"BWC Wading River One  Two  Three CSG",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.751,26.8616 ]
   },
   "properties": {
   "name":"Babcock Solar Energy Center",
   "capacity_mw":74.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.8135,33.498 ]
   },
   "properties": {
   "name":"Badger 1",
   "capacity_mw":14.8,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1397,35.7875 ]
   },
   "properties": {
   "name":"Bailey Farm LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3475,36.0724 ]
   },
   "properties": {
   "name":"Bakatsias Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.0603,36.2703 ]
   },
   "properties": {
   "name":"Baker PV 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.3634,39.5703 ]
   },
   "properties": {
   "name":"Baker Point",
   "capacity_mw":9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.9899,35.3176 ]
   },
   "properties": {
   "name":"Bakersfield 111",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.9686,35.4118 ]
   },
   "properties": {
   "name":"Bakersfield College Solar 01",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.9931,35.33 ]
   },
   "properties": {
   "name":"Bakersfield Industrial PV 1",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.9815,35.325 ]
   },
   "properties": {
   "name":"Bakersfield PV 1",
   "capacity_mw":5.3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.7717,45.2694 ]
   },
   "properties": {
   "name":"Baldock Solar Highway",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1739,35.4589 ]
   },
   "properties": {
   "name":"Balsam",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.22,39.436 ]
   },
   "properties": {
   "name":"Baltimore City B",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.22,39.436 ]
   },
   "properties": {
   "name":"Baltimore City D",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.22,39.436 ]
   },
   "properties": {
   "name":"Baltimore City F",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.22,39.436 ]
   },
   "properties": {
   "name":"Baltimore City G",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.7622,29.681 ]
   },
   "properties": {
   "name":"Bandera Electric Coop PV",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.35,30.96 ]
   },
   "properties": {
   "name":"Barilla Solar",
   "capacity_mw":30.2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9287,34.6356 ]
   },
   "properties": {
   "name":"Barker Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.2995,36.2692 ]
   },
   "properties": {
   "name":"Barnhill Road Solar  LLC",
   "capacity_mw":3.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.3956,41.6597 ]
   },
   "properties": {
   "name":"Barnstable Landfill",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.351,33.237 ]
   },
   "properties": {
   "name":"Barnwell Solar",
   "capacity_mw":5.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.109,42.362 ]
   },
   "properties": {
   "name":"Barre II Solar Project",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.8838,41.9463 ]
   },
   "properties": {
   "name":"Barrett Farm Solar - Phase I",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.8645,42.1622 ]
   },
   "properties": {
   "name":"Barrett PV",
   "capacity_mw":11.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.184,44.7254 ]
   },
   "properties": {
   "name":"Barton Solar Farm",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.88,42.7893 ]
   },
   "properties": {
   "name":"Bashaw Solar CSG 1  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7608,36.0586 ]
   },
   "properties": {
   "name":"Battleboro Farm",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.33,35.22 ]
   },
   "properties": {
   "name":"Battleground",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.8102,35.1483 ]
   },
   "properties": {
   "name":"Bayboro Solar Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2981,34.6678 ]
   },
   "properties": {
   "name":"Bayshore Solar A  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3026,34.6783 ]
   },
   "properties": {
   "name":"Bayshore Solar B  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3141,34.6813 ]
   },
   "properties": {
   "name":"Bayshore Solar C  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9992,35.2658 ]
   },
   "properties": {
   "name":"Beacon Solar Plant Site 2",
   "capacity_mw":45,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0344,35.2489 ]
   },
   "properties": {
   "name":"Beacon Solar Plant Site 5",
   "capacity_mw":36,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.4491,35.5403 ]
   },
   "properties": {
   "name":"Bear Creek Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1489,38.1364 ]
   },
   "properties": {
   "name":"Bear Creek Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3772,36.2761 ]
   },
   "properties": {
   "name":"BearPond Solar Center LLC",
   "capacity_mw":4.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9242,34.61 ]
   },
   "properties": {
   "name":"Bearford Farm Solar Project",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.134,35.456 ]
   },
   "properties": {
   "name":"Beaufort Solar  LLC",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6381,41.153 ]
   },
   "properties": {
   "name":"Beaver Run",
   "capacity_mw":7.4,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.3239,40.6914 ]
   },
   "properties": {
   "name":"Beaver Solar LLC",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2425,40.5683 ]
   },
   "properties": {
   "name":"Bed Bath & Beyond DC Port Reading NJ",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.481,37.335 ]
   },
   "properties": {
   "name":"Bedford Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.665,35.1785 ]
   },
   "properties": {
   "name":"Beetle Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4004,42.2595 ]
   },
   "properties": {
   "name":"Belchertown",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.2347,45.1122 ]
   },
   "properties": {
   "name":"Bellevue Solar Project",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7031,42.075 ]
   },
   "properties": {
   "name":"Bellingham PV",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.1931,39.72 ]
   },
   "properties": {
   "name":"Belmont",
   "capacity_mw":3.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5083,35.47 ]
   },
   "properties": {
   "name":"Belwood Farm",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7147,40.8256 ]
   },
   "properties": {
   "name":"Benjamin Moore & Co. Solar",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1003,36.42 ]
   },
   "properties": {
   "name":"Benthall Bridge PV 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.8579,44.7662 ]
   },
   "properties": {
   "name":"BentonSun CSG  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4797,38.5108 ]
   },
   "properties": {
   "name":"Beringer",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0414,41.8239 ]
   },
   "properties": {
   "name":"Berkley East Solar LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.4053,42.1144 ]
   },
   "properties": {
   "name":"Berkshire 1",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5816,40.7027 ]
   },
   "properties": {
   "name":"Bernards Solar",
   "capacity_mw":3.7,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5409,35.8499 ]
   },
   "properties": {
   "name":"Bernhardt Furniture Solar Farm",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1519,40.6983 ]
   },
   "properties": {
   "name":"Berry Plastics Solar",
   "capacity_mw":10.1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.6458,37.6392 ]
   },
   "properties": {
   "name":"Beryl Solar Plant",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.3811,35.7947 ]
   },
   "properties": {
   "name":"Bethel Price Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.385,35.75 ]
   },
   "properties": {
   "name":"Bethel Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.8243,42.539 ]
   },
   "properties": {
   "name":"Bethlehem - East",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.8243,42.539 ]
   },
   "properties": {
   "name":"Bethlehem - West",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.78,34.9 ]
   },
   "properties": {
   "name":"Beulaville",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9119,42.59 ]
   },
   "properties": {
   "name":"Beverly",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.7756,45.3346 ]
   },
   "properties": {
   "name":"Big Lake Holdco Solar CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.5884,35.5612 ]
   },
   "properties": {
   "name":"Biltmore Solar Fields",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2667,42.1096 ]
   },
   "properties": {
   "name":"Bird Machine Solar Farm",
   "capacity_mw":4.6,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.7703,35.3839 ]
   },
   "properties": {
   "name":"Biscoe Solar LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.0111,40.8638 ]
   },
   "properties": {
   "name":"Bison Solar LLC",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1799,35.5494 ]
   },
   "properties": {
   "name":"Bizzell Church Solar 1  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1772,35.5444 ]
   },
   "properties": {
   "name":"Bizzell Church Solar 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3626,42.175 ]
   },
   "properties": {
   "name":"Black Cap Solar Plant",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.254,47.5475 ]
   },
   "properties": {
   "name":"Black Eagle Solar  LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.1627,35.0227 ]
   },
   "properties": {
   "name":"Black Mountain Solar LLC",
   "capacity_mw":9,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4797,40.3622 ]
   },
   "properties": {
   "name":"BlackRock-Matrix",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6235,34.8235 ]
   },
   "properties": {
   "name":"Bladen Solar",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.8131,34.535 ]
   },
   "properties": {
   "name":"Bladenboro Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.8177,34.5478 ]
   },
   "properties": {
   "name":"Bladenboro Solar  LLC",
   "capacity_mw":4.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.4296,44.7964 ]
   },
   "properties": {
   "name":"Blue Lake Solar",
   "capacity_mw":3.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.9853,36.9078 ]
   },
   "properties": {
   "name":"Blue Sky One",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.4003,29.3042 ]
   },
   "properties": {
   "name":"Blue Wing Solar Energy Generation",
   "capacity_mw":13.9,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6627,42.2255 ]
   },
   "properties": {
   "name":"BlueWave Capital - Grafton (SREC II)",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1542,35.3139 ]
   },
   "properties": {
   "name":"Blueberry One",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.742,33.68 ]
   },
   "properties": {
   "name":"Blythe Solar 110  LLC",
   "capacity_mw":109.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.73,33.68 ]
   },
   "properties": {
   "name":"Blythe Solar II  LLC",
   "capacity_mw":131.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1344,35.4678 ]
   },
   "properties": {
   "name":"Boaz Farm Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.6933,34.5644 ]
   },
   "properties": {
   "name":"Bolthouse S&P and Rowen Farms Solar",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1323,36.4216 ]
   },
   "properties": {
   "name":"Bolton Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6431,42.4497 ]
   },
   "properties": {
   "name":"Bolton PV",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.5385,35.1341 ]
   },
   "properties": {
   "name":"Bondi Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.34,33.053 ]
   },
   "properties": {
   "name":"Bonnybrooke PV",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7766,40.0389 ]
   },
   "properties": {
   "name":"Bordentown Solar",
   "capacity_mw":6.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.81,36.0081 ]
   },
   "properties": {
   "name":"Boseman Solar Center LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0339,42.2933 ]
   },
   "properties": {
   "name":"Boston Scientific Solar",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.944,35.85 ]
   },
   "properties": {
   "name":"Boulder Solar II  LLC",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.97,35.348 ]
   },
   "properties": {
   "name":"Boulder Solar Power  LLC",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4546,42.1779 ]
   },
   "properties": {
   "name":"Bourne (MA) - Holliston I",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.0764,36.2606 ]
   },
   "properties": {
   "name":"Bradley PV1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9978,42.2073 ]
   },
   "properties": {
   "name":"Braintree Landfill Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9669,41.7517 ]
   },
   "properties": {
   "name":"Braley Road 2",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2439,40.7814 ]
   },
   "properties": {
   "name":"Brentwood Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.1031,41.7456 ]
   },
   "properties": {
   "name":"Brewster Landfill",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1545,40.1894 ]
   },
   "properties": {
   "name":"Brickyard Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3508,39.7875 ]
   },
   "properties": {
   "name":"Bridgeport Disposal Solar Farm",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9719,41.9641 ]
   },
   "properties": {
   "name":"Bridgewater Solar",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.9408,39.9825 ]
   },
   "properties": {
   "name":"Brighton PV Solar Plant",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9572,34.5229 ]
   },
   "properties": {
   "name":"Broadridge Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.8314,34.3093 ]
   },
   "properties": {
   "name":"Broadway Solar Center  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7169,42.4814 ]
   },
   "properties": {
   "name":"Brockelman",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7861,41.9559 ]
   },
   "properties": {
   "name":"Brook Street Solar 1 CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0679,42.2561 ]
   },
   "properties": {
   "name":"Brookfield Solar 2013 LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.584,41.9876 ]
   },
   "properties": {
   "name":"Brookside",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3222,42.2008 ]
   },
   "properties": {
   "name":"Browne Solar LLC",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.4005,38.664 ]
   },
   "properties": {
   "name":"Bruce A Henry Solar Farm",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.3,29.6 ]
   },
   "properties": {
   "name":"Bryan Solar  LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.5861,41.4764 ]
   },
   "properties": {
   "name":"Bryan Solar Field",
   "capacity_mw":2.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.5761,33.4192 ]
   },
   "properties": {
   "name":"Buckeye Union HS District 201",
   "capacity_mw":3.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.7317,38.0233 ]
   },
   "properties": {
   "name":"Buckhorn Solar Plant",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3792,37.5029 ]
   },
   "properties": {
   "name":"Buckingham Solar LLC",
   "capacity_mw":19.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.3633,35.5419 ]
   },
   "properties": {
   "name":"Buddy Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0419,33.9129 ]
   },
   "properties": {
   "name":"Buidling L",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0502,33.9144 ]
   },
   "properties": {
   "name":"Building F",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0506,33.9129 ]
   },
   "properties": {
   "name":"Building G",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3151,36.4754 ]
   },
   "properties": {
   "name":"Bullock Solar  LLC",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.7743,35.3086 ]
   },
   "properties": {
   "name":"Bunn Level Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.38,29.6231 ]
   },
   "properties": {
   "name":"Butler Plaza",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3165,32.5755 ]
   },
   "properties": {
   "name":"Butler Solar Farm 20",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.35,38.27 ]
   },
   "properties": {
   "name":"Butler Solar Power Project",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.2758,32.5619 ]
   },
   "properties": {
   "name":"Butler Solar Project 103",
   "capacity_mw":103,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6442,39.6481 ]
   },
   "properties": {
   "name":"Butte College Main Campus Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.344,37.92 ]
   },
   "properties": {
   "name":"CA Dept of Public Health at Richmond",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4044,35.6156 ]
   },
   "properties": {
   "name":"CA Flats Solar 130  LLC",
   "capacity_mw":130,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2061,40.2142 ]
   },
   "properties": {
   "name":"CASD Solar",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6243,34.8229 ]
   },
   "properties": {
   "name":"CB Bladen Solar  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5261,35.6744 ]
   },
   "properties": {
   "name":"CBC Solar Energy Gen Fac Phase 2",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.36,34.075 ]
   },
   "properties": {
   "name":"CBS Television City",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.735,39.2525 ]
   },
   "properties": {
   "name":"CCBC-Catonsville",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1275,39.9231 ]
   },
   "properties": {
   "name":"CCMUA",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5576,36.065 ]
   },
   "properties": {
   "name":"CDCR (CA) - Corcoran State Prison",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2244,36.1372 ]
   },
   "properties": {
   "name":"CDCR (CA) - Pleasant Valley State Prison",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9706,38.3227 ]
   },
   "properties": {
   "name":"CDCR (CA) - Solano State Prison",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.4037,35.6005 ]
   },
   "properties": {
   "name":"CDCR (CA) - Wasco State Prison",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1515,35.9963 ]
   },
   "properties": {
   "name":"CED Avenal",
   "capacity_mw":15.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.551,42.2039 ]
   },
   "properties": {
   "name":"CED Chicopee Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0684,35.8563 ]
   },
   "properties": {
   "name":"CED Ducor 1",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0681,35.8442 ]
   },
   "properties": {
   "name":"CED Ducor 2",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.057,35.8454 ]
   },
   "properties": {
   "name":"CED Ducor 3",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.027,35.8504 ]
   },
   "properties": {
   "name":"CED Ducor 4",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.787,41.795 ]
   },
   "properties": {
   "name":"CED Foster",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7552,42.1756 ]
   },
   "properties": {
   "name":"CED Westfield Solar  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0262,39.9419 ]
   },
   "properties": {
   "name":"CES Cherry Hill Solar",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7222,42.4419 ]
   },
   "properties": {
   "name":"CES Sterling LLC",
   "capacity_mw":2.4,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7271,39.6809 ]
   },
   "properties": {
   "name":"CES VMT Solar",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.96,44.24 ]
   },
   "properties": {
   "name":"CF Novel Solar CSG Gardens Eleven  LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.4017,44.0938 ]
   },
   "properties": {
   "name":"CF Novel Solar CSG Gardens Five  LLC",
   "capacity_mw":3.4,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.0219,45.4308 ]
   },
   "properties": {
   "name":"CF Novel Solar CSG Gardens Seven  LLC",
   "capacity_mw":3.3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.8367,43.8459 ]
   },
   "properties": {
   "name":"CF Novel Solar CSG Gardens Two  LLC",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.875,44.8479 ]
   },
   "properties": {
   "name":"CGSun  LLC",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5647,36.1381 ]
   },
   "properties": {
   "name":"CID Solar  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9933,35.7881 ]
   },
   "properties": {
   "name":"CM10",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9933,35.7814 ]
   },
   "properties": {
   "name":"CM48",
   "capacity_mw":48,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1586,41.5706 ]
   },
   "properties": {
   "name":"CMEEC - Bozrah",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0792,41.3955 ]
   },
   "properties": {
   "name":"CMEEC - Navy NE Trident",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1046,41.5769 ]
   },
   "properties": {
   "name":"CMEEC - Norwich Stott St Solar",
   "capacity_mw":4.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0769,41.3813 ]
   },
   "properties": {
   "name":"CMEEC - Polaris Park Solar",
   "capacity_mw":4.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1225,41.5383 ]
   },
   "properties": {
   "name":"CMEEC - Rogers Rd Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0192,38.5158 ]
   },
   "properties": {
   "name":"CNE at Cambridge MD",
   "capacity_mw":3.2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.2692,29.378 ]
   },
   "properties": {
   "name":"CPS 1",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.1662,34.9895 ]
   },
   "properties": {
   "name":"CS Murphy Point  LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7556,37.9219 ]
   },
   "properties": {
   "name":"CSD 2 - Heritage High",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7194,37.9697 ]
   },
   "properties": {
   "name":"CSD 2- Freedom High",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.7417,36.8098 ]
   },
   "properties": {
   "name":"CSU Fresno Solar Project",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.58,38.3061 ]
   },
   "properties": {
   "name":"CSU Pueblo",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.8887,33.8791 ]
   },
   "properties": {
   "name":"CSUF Nutwood Solar",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.8887,33.8791 ]
   },
   "properties": {
   "name":"CSUF State College",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.8169,39.7419 ]
   },
   "properties": {
   "name":"CU Solar Plant",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.9368,45.662 ]
   },
   "properties": {
   "name":"Caelum Community Solar",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3658,36.7575 ]
   },
   "properties": {
   "name":"CalRenew-1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7039,38.0011 ]
   },
   "properties": {
   "name":"California PV Energy at ISD WWTP",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.9166,35.3237 ]
   },
   "properties": {
   "name":"California Valley Solar Ranch",
   "capacity_mw":249.8,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.5322,33.1658 ]
   },
   "properties": {
   "name":"Calipatria Solar Farm",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0667,39.4636 ]
   },
   "properties": {
   "name":"Calpine Vineland Solar LLC",
   "capacity_mw":4.1,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7437,40.9211 ]
   },
   "properties": {
   "name":"Calverton",
   "capacity_mw":3.9,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6953,43.3123 ]
   },
   "properties": {
   "name":"Camden CSD Solar Array",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.707,33.574 ]
   },
   "properties": {
   "name":"Cameron Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.699,33.567 ]
   },
   "properties": {
   "name":"Cameron Solar II",
   "capacity_mw":4.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.1319,31.1839 ]
   },
   "properties": {
   "name":"Camilla Solar Plant",
   "capacity_mw":16,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.3503,34.7257 ]
   },
   "properties": {
   "name":"Camp Lejeune Solar",
   "capacity_mw":12.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.5439,32.9647 ]
   },
   "properties": {
   "name":"Camp Solar Plant",
   "capacity_mw":2.4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.7264,32.7533 ]
   },
   "properties": {
   "name":"Campo Verde Solar",
   "capacity_mw":147.4,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2846,42.8689 ]
   },
   "properties": {
   "name":"Canandaigua Solar Array",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2845,42.8691 ]
   },
   "properties": {
   "name":"Canandaigua Westbrook Solar Array",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1922,35.487 ]
   },
   "properties": {
   "name":"Candace Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.65,42.009 ]
   },
   "properties": {
   "name":"Canis Major Solar Farm",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.986,41.893 ]
   },
   "properties": {
   "name":"Canis Minor Solar Farm",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3435,36.4251 ]
   },
   "properties": {
   "name":"Cantua Solar Station",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.974,32.374 ]
   },
   "properties": {
   "name":"Canyon Del Oro High School Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.1612,44.0901 ]
   },
   "properties": {
   "name":"Capella Community Solar",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.3783,34.9828 ]
   },
   "properties": {
   "name":"Caprock Solar 1 LLC",
   "capacity_mw":25,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.1444,36.3161 ]
   },
   "properties": {
   "name":"Carol Jean Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.685,40.47 ]
   },
   "properties": {
   "name":"Carrier Clinic",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.7817,38.7228 ]
   },
   "properties": {
   "name":"Carson Solar I",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.7875,35.0211 ]
   },
   "properties": {
   "name":"Carter PV1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7611,41.9428 ]
   },
   "properties": {
   "name":"Carver MA 1",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.2344,34.1572 ]
   },
   "properties": {
   "name":"Cascade Solar",
   "capacity_mw":18.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7833,36 ]
   },
   "properties": {
   "name":"Castalia Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.1106,35.8011 ]
   },
   "properties": {
   "name":"Castle Rock Vineyards",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.3873,35.211 ]
   },
   "properties": {
   "name":"Castor Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3528,34.8122 ]
   },
   "properties": {
   "name":"Catalina Solar 2  LLC",
   "capacity_mw":18,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3345,34.9383 ]
   },
   "properties": {
   "name":"Catalina Solar LLC",
   "capacity_mw":110,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.53,35.61 ]
   },
   "properties": {
   "name":"Catawba Solar LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.8083,39.651 ]
   },
   "properties": {
   "name":"Cecil County CCVT HS",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9645,39.5033 ]
   },
   "properties": {
   "name":"Cedar Branch",
   "capacity_mw":5.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5067,40.6489 ]
   },
   "properties": {
   "name":"Cedar Creek PV",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7757,34.9158 ]
   },
   "properties": {
   "name":"Cedar Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.09,37.8078 ]
   },
   "properties": {
   "name":"Cedar Valley Solar Plant",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.5498,41.8027 ]
   },
   "properties": {
   "name":"Cedarville CSG",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.5906,40.5406 ]
   },
   "properties": {
   "name":"Celina Solar Project #1  LLC",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.5113,44.9491 ]
   },
   "properties": {
   "name":"Centaurus Community Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.426,42.253 ]
   },
   "properties": {
   "name":"Centaurus Solar - MA",
   "capacity_mw":2.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.6478,32.6869 ]
   },
   "properties": {
   "name":"Centinela Solar Energy",
   "capacity_mw":174.8,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3214,40.2361 ]
   },
   "properties": {
   "name":"CentraState Medical Center PV Facility",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3014,34.7055 ]
   },
   "properties": {
   "name":"Central Antelope Dry Ranch B LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3005,34.7205 ]
   },
   "properties": {
   "name":"Central Antelope Dry Ranch C",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6689,35.8378 ]
   },
   "properties": {
   "name":"Century Drive Solar Farm",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.7649,34.3247 ]
   },
   "properties": {
   "name":"Chadbourn Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2624,33.7947 ]
   },
   "properties": {
   "name":"Champion Solar",
   "capacity_mw":10.8,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.8217,35.2619 ]
   },
   "properties": {
   "name":"Charlotte Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1976,44.322 ]
   },
   "properties": {
   "name":"Charlotte Solar LLC VT",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.9964,42.1275 ]
   },
   "properties": {
   "name":"Charlton Solar I",
   "capacity_mw":4.4,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.0061,41.6861 ]
   },
   "properties": {
   "name":"Chatham Landfill",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.2086,35.0246 ]
   },
   "properties": {
   "name":"Chattanooga Metropolitan Airport Solar",
   "capacity_mw":2.1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5219,34.3375 ]
   },
   "properties": {
   "name":"Chauncey Farm LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.456,33.45 ]
   },
   "properties": {
   "name":"Chaves Solar  LLC",
   "capacity_mw":70,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1823,35.8918 ]
   },
   "properties": {
   "name":"Chei Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0086,39.8761 ]
   },
   "properties": {
   "name":"Cherry Hill",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.9141,37.3694 ]
   },
   "properties": {
   "name":"Cherrydale Solar Power Facility",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0832,38.9534 ]
   },
   "properties": {
   "name":"Chesapeake College",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5976,43.2809 ]
   },
   "properties": {
   "name":"Chester Power Partners",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.949,42.312 ]
   },
   "properties": {
   "name":"Chester Solar Farm",
   "capacity_mw":4.8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5958,42.1581 ]
   },
   "properties": {
   "name":"Chicopee Granby Road Solar",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5522,42.1503 ]
   },
   "properties": {
   "name":"Chicopee River Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5825,42.1856 ]
   },
   "properties": {
   "name":"Chicopee Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.5368,39.7888 ]
   },
   "properties": {
   "name":"Chillicothe Solar Farm",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.9574,39.2967 ]
   },
   "properties": {
   "name":"Chimes West Friendship (Nixon Farms)",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.429,34.7184 ]
   },
   "properties": {
   "name":"Chino Solar Valley",
   "capacity_mw":19,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.683,45.4134 ]
   },
   "properties": {
   "name":"Chisago Community Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.902,45.4525 ]
   },
   "properties": {
   "name":"Chisago Solar",
   "capacity_mw":6.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1453,44.4361 ]
   },
   "properties": {
   "name":"Chittenden County Solar Partners",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1131,35.482 ]
   },
   "properties": {
   "name":"Choco Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.09,35.515 ]
   },
   "properties": {
   "name":"Chocowinity Solar LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8128,40.1042 ]
   },
   "properties": {
   "name":"Christmas Tree Shops DC Burlington NJ",
   "capacity_mw":2.1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9181,33.5683 ]
   },
   "properties": {
   "name":"Chuckawalla Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9036,33.5653 ]
   },
   "properties": {
   "name":"Chuckawalla Valley State Prison",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.9597,39.1009 ]
   },
   "properties": {
   "name":"Church Hill",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.2452,35.2011 ]
   },
   "properties": {
   "name":"Cibola",
   "capacity_mw":7.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.6357,36.4681 ]
   },
   "properties": {
   "name":"Cimarron Solar Facility",
   "capacity_mw":30.6,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.265,35.9694 ]
   },
   "properties": {
   "name":"Cirrus Solar LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4321,36.7238 ]
   },
   "properties": {
   "name":"Citizen B",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5972,42.093 ]
   },
   "properties": {
   "name":"Citizens Agawam Landfill Solar",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.8069,27.3209 ]
   },
   "properties": {
   "name":"Citrus Solar Energy Center",
   "capacity_mw":74.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.6542,39.9041 ]
   },
   "properties": {
   "name":"City & County of Denver at Denver Int'l",
   "capacity_mw":3.4,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.1803,40.048 ]
   },
   "properties": {
   "name":"City of Boulder WWTP",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.22,39.436 ]
   },
   "properties": {
   "name":"City of Havre De Grace C",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.734,40.757 ]
   },
   "properties": {
   "name":"City of Lexington",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1572,36.9408 ]
   },
   "properties": {
   "name":"City of Madera WWTP",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6785,43.1769 ]
   },
   "properties": {
   "name":"City of Rochester Solar",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.2878,33.1211 ]
   },
   "properties": {
   "name":"City of Truth or Consequences PV",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.375,36.185 ]
   },
   "properties": {
   "name":"City of Tulare Water Facility",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1564,44.4261 ]
   },
   "properties": {
   "name":"Claire Solar Farm",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9558,43.5397 ]
   },
   "properties": {
   "name":"Clarendon Solar Farm",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1382,39.0648 ]
   },
   "properties": {
   "name":"Clarke Solar Power Facility",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9494,44.6719 ]
   },
   "properties": {
   "name":"Clarkson Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9516,41.1004 ]
   },
   "properties": {
   "name":"Clarkstown Landfill Solar Facility",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.6947,38.6021 ]
   },
   "properties": {
   "name":"Clear Spring Ranch PV Project",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.417,35.72 ]
   },
   "properties": {
   "name":"Cline Solar Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3544,34.9669 ]
   },
   "properties": {
   "name":"Clipperton Holdings",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.0178,38.7731 ]
   },
   "properties": {
   "name":"Cloverdale Solar I",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.9843,41.3194 ]
   },
   "properties": {
   "name":"Clyde Solar Array",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.9792,33.2706 ]
   },
   "properties": {
   "name":"CoServ Solar Station",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3539,30.3793 ]
   },
   "properties": {
   "name":"CoTAL Solar Farm",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6906,35.4145 ]
   },
   "properties": {
   "name":"Coats Solar Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.8133,32.1019 ]
   },
   "properties": {
   "name":"Cogenra - TEP",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.9558,37.5986 ]
   },
   "properties": {
   "name":"Cogentrix of Alamosa",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1944,40.7625 ]
   },
   "properties": {
   "name":"Cohalan",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1958,35.5572 ]
   },
   "properties": {
   "name":"Cohen Farm Solar  LLC",
   "capacity_mw":6.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.952,43.5857 ]
   },
   "properties": {
   "name":"Cold River Road Solar",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.6925,32.9133 ]
   },
   "properties": {
   "name":"Colleton Solar Farm",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2524,33.7927 ]
   },
   "properties": {
   "name":"Colon PV",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.473,45.17 ]
   },
   "properties": {
   "name":"Colton Solar",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3194,34.0933 ]
   },
   "properties": {
   "name":"Colton Solar One  LLC",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3617,34.0422 ]
   },
   "properties": {
   "name":"Colton Solar Two  LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1642,35.0247 ]
   },
   "properties": {
   "name":"Columbia 3",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.8651,38.0197 ]
   },
   "properties": {
   "name":"Columbia Solar Energy  LLC",
   "capacity_mw":19.2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.5875,31.8667 ]
   },
   "properties": {
   "name":"Columbus Solar Project",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.5667,38.2053 ]
   },
   "properties": {
   "name":"Comanche Solar",
   "capacity_mw":120,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2122,40.6973 ]
   },
   "properties": {
   "name":"Community Foodbank of NJ",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.4819,32.9828 ]
   },
   "properties": {
   "name":"Community Solar 1",
   "capacity_mw":5.7,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.6636,35.4442 ]
   },
   "properties": {
   "name":"Concord Farm",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.335,42.444 ]
   },
   "properties": {
   "name":"Concord Solar Farm",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.9824,37.1959 ]
   },
   "properties": {
   "name":"Conejos 1 Community Solar Array",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.481,35.822 ]
   },
   "properties": {
   "name":"Conetoe II Solar  LLC",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.4578,35.8252 ]
   },
   "properties": {
   "name":"Conetoe Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1225,41.5383 ]
   },
   "properties": {
   "name":"Conn Mun Electric Energy Coop",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.0482,45.3661 ]
   },
   "properties": {
   "name":"Conrath DPC Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8181,39.9289 ]
   },
   "properties": {
   "name":"Constellation New Energy Inc",
   "capacity_mw":3.9,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.2547,38.0272 ]
   },
   "properties": {
   "name":"Cooperative Solar One",
   "capacity_mw":8.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.484,33.1606 ]
   },
   "properties": {
   "name":"Copper Crossing Solar LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9628,35.7864 ]
   },
   "properties": {
   "name":"Copper Mountain Solar 2",
   "capacity_mw":154,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9579,35.8894 ]
   },
   "properties": {
   "name":"Copper Mountain Solar 3",
   "capacity_mw":255,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9754,35.7822 ]
   },
   "properties": {
   "name":"Copper Mountain Solar 4  LLC",
   "capacity_mw":93.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5665,36.1023 ]
   },
   "properties": {
   "name":"Corcoran",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5733,36.1383 ]
   },
   "properties": {
   "name":"Corcoran Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5817,36.1419 ]
   },
   "properties": {
   "name":"Corcoran Solar 2",
   "capacity_mw":19.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5854,36.1504 ]
   },
   "properties": {
   "name":"Corcoran Solar 3",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.571,36.371 ]
   },
   "properties": {
   "name":"Cork Oak Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.031,42.866 ]
   },
   "properties": {
   "name":"Cornell Geneva Solar Farm",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.46,42.4975 ]
   },
   "properties": {
   "name":"Cornell Snyder Road Solar Array",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1878,40.3522 ]
   },
   "properties": {
   "name":"Cornerstone Power Holmdel LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0439,39.4397 ]
   },
   "properties": {
   "name":"Cornerstone Power Vineland I LLC",
   "capacity_mw":3.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6261,36.3669 ]
   },
   "properties": {
   "name":"Cornwall Solar Center  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.9058,35.7267 ]
   },
   "properties": {
   "name":"Coronal Lost Hills",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4644,34.5481 ]
   },
   "properties": {
   "name":"Coronus Adelanto West 1",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4644,34.5481 ]
   },
   "properties": {
   "name":"Coronus Adelanto West 2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.8569,37.4715 ]
   },
   "properties": {
   "name":"Correctional Solar LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5383,42.1453 ]
   },
   "properties": {
   "name":"Cottage Street Solar Facility",
   "capacity_mw":3.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1985,35.5285 ]
   },
   "properties": {
   "name":"Cotten Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.6617,33.0347 ]
   },
   "properties": {
   "name":"Cotton Center Solar",
   "capacity_mw":17,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5544,36.1344 ]
   },
   "properties": {
   "name":"Cottonwood Solar  LLC (City of Corcoran)",
   "capacity_mw":12,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.58,35.5936 ]
   },
   "properties": {
   "name":"Cottonwood Solar  LLC (Goose Lake)",
   "capacity_mw":12,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.5682,38.1298 ]
   },
   "properties": {
   "name":"Cottonwood Solar  LLC Cottonwood Carport",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1807,35.4624 ]
   },
   "properties": {
   "name":"Cougar Solar  LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5814,40.8567 ]
   },
   "properties": {
   "name":"County College of Morris",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5087,35.2633 ]
   },
   "properties": {
   "name":"County Home Solar Center  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.2198,44.9102 ]
   },
   "properties": {
   "name":"Coventry Photovoltaic  LLC",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.1314,40.501 ]
   },
   "properties": {
   "name":"Coyote Ridge Community Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0989,34.0431 ]
   },
   "properties": {
   "name":"Crafton Hills College Solar Farm",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4992,40.3147 ]
   },
   "properties": {
   "name":"Cranbury",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.8842,38.8164 ]
   },
   "properties": {
   "name":"Crane Solar Facility",
   "capacity_mw":17,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.5083,44.7987 ]
   },
   "properties": {
   "name":"Crater Community Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.2385,40.7605 ]
   },
   "properties": {
   "name":"Crayola Solar Project",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6043,35.722 ]
   },
   "properties": {
   "name":"Creech Solar 2  LLC",
   "capacity_mw":6.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3636,38.2389 ]
   },
   "properties": {
   "name":"Crescent Dunes Solar Energy",
   "capacity_mw":125,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5842,36.3535 ]
   },
   "properties": {
   "name":"Crestwood Solar Center LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.3794,35.8989 ]
   },
   "properties": {
   "name":"Creswell Alligood Solar  LLC",
   "capacity_mw":14,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.6133,38.7518 ]
   },
   "properties": {
   "name":"Crittenden Solar Facility",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.5525,35.2308 ]
   },
   "properties": {
   "name":"Crockett Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.5325,32.9672 ]
   },
   "properties": {
   "name":"Crown Cooling Facility",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3612,42.0812 ]
   },
   "properties": {
   "name":"Cummins  Inc",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6333,36.2896 ]
   },
   "properties": {
   "name":"Currin Solar  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.986,42.175 ]
   },
   "properties": {
   "name":"Curtis Hill Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.596,34.901 ]
   },
   "properties": {
   "name":"Cuyama Solar  LLC",
   "capacity_mw":40,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.2279,34.8981 ]
   },
   "properties": {
   "name":"Cyril",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.8436,34.8344 ]
   },
   "properties": {
   "name":"DD Fayetteville Solar NC LLC",
   "capacity_mw":23.1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.5117,39.7367 ]
   },
   "properties": {
   "name":"DD Hay Road Solar 23 LLC",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.3962,42.3007 ]
   },
   "properties": {
   "name":"DDR Shoppers World",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.9967,35.2458 ]
   },
   "properties": {
   "name":"DE Solar 10240 Old Dowd Rd",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.9967,35.3261 ]
   },
   "properties": {
   "name":"DE Solar 1725 Drywall Dr",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.9692,36.1053 ]
   },
   "properties": {
   "name":"DE Solar 657 Brigham Rd",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.582,41.396 ]
   },
   "properties": {
   "name":"DG AMP Solar Bowling Green",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.18,38.929 ]
   },
   "properties": {
   "name":"DG AMP Solar Front Royal",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1186,39.911 ]
   },
   "properties": {
   "name":"DG Camden LLC Holtec",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.171,39.7409 ]
   },
   "properties": {
   "name":"DOE Golden NREL Main Campus",
   "capacity_mw":3.3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.2318,39.909 ]
   },
   "properties": {
   "name":"DOE Golden NWTC Load Side",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2185,36.1373 ]
   },
   "properties": {
   "name":"DSH (CA) - Coalinga State Hospital",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0652,40.8437 ]
   },
   "properties": {
   "name":"DSM Solar",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.9319,34.7181 ]
   },
   "properties": {
   "name":"Dalton 2",
   "capacity_mw":6.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ 144.7492,13.3035 ]
   },
   "properties": {
   "name":"Dandan Solar Power Plant",
   "capacity_mw":25.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.5536,35.8489 ]
   },
   "properties": {
   "name":"Daniel Farm LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.917,34.32 ]
   },
   "properties": {
   "name":"Darlington Solar  LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9969,41.6761 ]
   },
   "properties": {
   "name":"Dartmouth",
   "capacity_mw":6.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0308,41.6806 ]
   },
   "properties": {
   "name":"Dartmouth II Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9981,41.5811 ]
   },
   "properties": {
   "name":"Dartmouth Landfill",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9744,41.7158 ]
   },
   "properties": {
   "name":"Dartmouth Solar",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.5292,36.1073 ]
   },
   "properties": {
   "name":"Davis Lane Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.8997,32.1736 ]
   },
   "properties": {
   "name":"Davis Monthan AFB (AZ) West Airfield",
   "capacity_mw":12.6,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2025,35.0356 ]
   },
   "properties": {
   "name":"Daystar Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.135,45.17 ]
   },
   "properties": {
   "name":"Dayton Cutoff Solar",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.0641,29.1702 ]
   },
   "properties": {
   "name":"Daytona International Speedway Solar",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.8019,27.3232 ]
   },
   "properties": {
   "name":"DeSoto Next Generation Solar Energy",
   "capacity_mw":25,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.5064,39.3379 ]
   },
   "properties": {
   "name":"Decatur Co. Solar RES (IN)",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.6261,30.965 ]
   },
   "properties": {
   "name":"Decatur County Solar Project",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.6339,30.9919 ]
   },
   "properties": {
   "name":"Decatur Parkway Solar Project  LLC",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1994,34.6708 ]
   },
   "properties": {
   "name":"Deep Branch Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.64,40.51 ]
   },
   "properties": {
   "name":"Deer Creek PV",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1939,40.7608 ]
   },
   "properties": {
   "name":"Deer Park",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5892,42.5629 ]
   },
   "properties": {
   "name":"Deerfield CSG Solar",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.3444,35.7612 ]
   },
   "properties": {
   "name":"Delano Land 1",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.2091,34.319 ]
   },
   "properties": {
   "name":"Delco Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5439,39.4161 ]
   },
   "properties": {
   "name":"Delilah Road Landfill",
   "capacity_mw":8.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3483,36.27 ]
   },
   "properties": {
   "name":"Dement Farm LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.3332,43.04 ]
   },
   "properties": {
   "name":"Demille Solar Farm",
   "capacity_mw":28.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.7506,32.1658 ]
   },
   "properties": {
   "name":"Deming Solar Energy Center",
   "capacity_mw":9,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.518,40.0733 ]
   },
   "properties": {
   "name":"Denison Solar Array",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.145,41.6931 ]
   },
   "properties": {
   "name":"Dennis Landfill",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.3236,40.7631 ]
   },
   "properties": {
   "name":"Dennison",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.8,31.3 ]
   },
   "properties": {
   "name":"Denver Braswell PV",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.6971,39.8368 ]
   },
   "properties": {
   "name":"Denver Int Airport",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.6694,39.9006 ]
   },
   "properties": {
   "name":"Denver Intl Airport IV Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.6211,39.7593 ]
   },
   "properties": {
   "name":"Denver Metro Solar",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.988,42.153 ]
   },
   "properties": {
   "name":"Depot Hill Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.3983,38.515 ]
   },
   "properties": {
   "name":"Depot Park Solar System",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.343,38.565 ]
   },
   "properties": {
   "name":"Dept of General Services -FTB",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.3481,33.2706 ]
   },
   "properties": {
   "name":"Desert Green Solar Farm LLC",
   "capacity_mw":6.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.53,33.9231 ]
   },
   "properties": {
   "name":"Desert Hot Springs Solar",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.3947,33.8055 ]
   },
   "properties": {
   "name":"Desert Sunlight 250  LLC",
   "capacity_mw":249.7,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.3939,33.8231 ]
   },
   "properties": {
   "name":"Desert Sunlight 300  LLC",
   "capacity_mw":313.7,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.8358,34.3028 ]
   },
   "properties": {
   "name":"Dessie Solar Center LLC",
   "capacity_mw":4.8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4964,40.5458 ]
   },
   "properties": {
   "name":"Deutsche Bank- Piscataway Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6259,42.5592 ]
   },
   "properties": {
   "name":"Devens",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0725,33.7131 ]
   },
   "properties": {
   "name":"Diamond Valley Solar Project",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5281,36.4717 ]
   },
   "properties": {
   "name":"Dibrell Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.8138,45.1144 ]
   },
   "properties": {
   "name":"Dickinson Solar Array",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.4264,36.5381 ]
   },
   "properties": {
   "name":"Dinuba Wastewater Treatment Plant",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1306,34.7083 ]
   },
   "properties": {
   "name":"Division 1",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1306,34.7083 ]
   },
   "properties": {
   "name":"Division 2",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1306,34.7083 ]
   },
   "properties": {
   "name":"Division 3",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6219,39.9774 ]
   },
   "properties": {
   "name":"Dix Solar  L.L.C",
   "capacity_mw":13,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.4108,35.1992 ]
   },
   "properties": {
   "name":"Dixon Dairy Road Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.8816,44.026 ]
   },
   "properties": {
   "name":"Dodge Center Solar",
   "capacity_mw":6.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.757,44.0224 ]
   },
   "properties": {
   "name":"Dodge Holdco Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.69,44.0404 ]
   },
   "properties": {
   "name":"DodgeSun CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.4092,36.125 ]
   },
   "properties": {
   "name":"Dogwood Solar  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.6803,42.3234 ]
   },
   "properties": {
   "name":"Domino Farms Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0472,42.3008 ]
   },
   "properties": {
   "name":"Dorchester Solar Site",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.73,42.06 ]
   },
   "properties": {
   "name":"Douglas Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.5044,39.1836 ]
   },
   "properties": {
   "name":"Dover Sun Park",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5868,40.3698 ]
   },
   "properties": {
   "name":"Dow Jones South Brunswick Solar",
   "capacity_mw":4.1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.9169,36.3619 ]
   },
   "properties": {
   "name":"Downs Farm Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.8841,44.8142 ]
   },
   "properties": {
   "name":"Downsville DPC Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.4161,35.7581 ]
   },
   "properties": {
   "name":"Dragstrip Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.926,32.581 ]
   },
   "properties": {
   "name":"Dublin Solar I",
   "capacity_mw":4.1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.2453,39.9108 ]
   },
   "properties": {
   "name":"Duke Building 129",
   "capacity_mw":3.4,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.2556,39.8908 ]
   },
   "properties": {
   "name":"Duke Building 87",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.26,39.9047 ]
   },
   "properties": {
   "name":"Duke Building 98",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5178,34.0301 ]
   },
   "properties": {
   "name":"Dulles",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5486,35.475 ]
   },
   "properties": {
   "name":"Dunn",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9804,34.9601 ]
   },
   "properties": {
   "name":"Duplin Solar I LLC (160 Houston Lane)",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0783,35.0119 ]
   },
   "properties": {
   "name":"Duplin Solar LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.8485,36.0049 ]
   },
   "properties": {
   "name":"Durham Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.06,35.5346 ]
   },
   "properties": {
   "name":"E&B Resources",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9072,34.9325 ]
   },
   "properties": {
   "name":"EAFB - North Base",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9003,34.9172 ]
   },
   "properties": {
   "name":"EAFB - South Base",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.625,42.5706 ]
   },
   "properties": {
   "name":"EBZ Solar",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6653,42.5292 ]
   },
   "properties": {
   "name":"EDF Lancaster",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -158.1879,21.452 ]
   },
   "properties": {
   "name":"EE Waianae Solar Project",
   "capacity_mw":27.6,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1481,34.0403 ]
   },
   "properties": {
   "name":"ELACC Photovoltaic Power Facility",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.2898,35.5262 ]
   },
   "properties": {
   "name":"ESA Selma",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7936,40.2818 ]
   },
   "properties": {
   "name":"ETS Ewing Solar Facility",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.8292,42.4008 ]
   },
   "properties": {
   "name":"Eagle Point Solar",
   "capacity_mw":9.9,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.6961,39.5261 ]
   },
   "properties": {
   "name":"Eagle Springs Solar LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2423,42.4875 ]
   },
   "properties": {
   "name":"East Acres Solar NG  LLC",
   "capacity_mw":5.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8764,40.4433 ]
   },
   "properties": {
   "name":"East Amwell",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.4692,41.6322 ]
   },
   "properties": {
   "name":"East Chicago",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3358,40.7476 ]
   },
   "properties": {
   "name":"East Orange Solar",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.2817,31.0009 ]
   },
   "properties": {
   "name":"East Pecos Solar",
   "capacity_mw":118.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.85,35.4417 ]
   },
   "properties": {
   "name":"East Wayne Solar LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.0363,41.597 ]
   },
   "properties": {
   "name":"Eastern Iowa Solar",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.5696,37.9439 ]
   },
   "properties": {
   "name":"Eastern Shore Solar  LLC",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7014,42.2869 ]
   },
   "properties": {
   "name":"Easthampton Landfill-City of Easthampton",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0922,42.0103 ]
   },
   "properties": {
   "name":"Easton Landfill",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.4631,34.7422 ]
   },
   "properties": {
   "name":"Eastover Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.9166,44.1545 ]
   },
   "properties": {
   "name":"Eastwood Solar",
   "capacity_mw":5.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.6364,35.1485 ]
   },
   "properties": {
   "name":"Eden Solar LLC",
   "capacity_mw":47.7,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9206,34.9077 ]
   },
   "properties": {
   "name":"Edwards Air Force Base",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.7725,45.3827 ]
   },
   "properties": {
   "name":"Eichtens Solar",
   "capacity_mw":3.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3042,34.7303 ]
   },
   "properties": {
   "name":"Elevation Solar C",
   "capacity_mw":40,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3311,43.8236 ]
   },
   "properties": {
   "name":"Elizabeth Mines Solar 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.5814,40.1527 ]
   },
   "properties": {
   "name":"Elizabethtown Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.8362,39.6035 ]
   },
   "properties": {
   "name":"Elkton Solar",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.73,35.1 ]
   },
   "properties": {
   "name":"Ellerbe",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.6568,39.2548 ]
   },
   "properties": {
   "name":"Ellettsville Solar RES",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3325,36.1311 ]
   },
   "properties": {
   "name":"Elliana Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8469,35.7811 ]
   },
   "properties": {
   "name":"Elm City Solar Facility",
   "capacity_mw":40,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1895,35.4538 ]
   },
   "properties": {
   "name":"Elm Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.3144,39.6937 ]
   },
   "properties": {
   "name":"Emmitsburg Solar Arrays",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.1088,44.6644 ]
   },
   "properties": {
   "name":"Empire Solar",
   "capacity_mw":7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4042,36.8317 ]
   },
   "properties": {
   "name":"Enerparc CA1 LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.1756,39.699 ]
   },
   "properties": {
   "name":"Enerparc CA2  LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4625,40.33 ]
   },
   "properties": {
   "name":"Engelhard Solar LLC",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.6125,37.6411 ]
   },
   "properties": {
   "name":"Enterprise Solar  LLC",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.0227,44.7261 ]
   },
   "properties": {
   "name":"Equuleus Community Solar Gardens",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6614,35.3333 ]
   },
   "properties": {
   "name":"Erwin Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.0339,38.5242 ]
   },
   "properties": {
   "name":"Escalante Solar I  LLC",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.03,38.5008 ]
   },
   "properties": {
   "name":"Escalante Solar II  LLC",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.9869,38.4978 ]
   },
   "properties": {
   "name":"Escalante Solar III  LLC",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.8,37.8341 ]
   },
   "properties": {
   "name":"Essex Solar Center",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2422,32.7638 ]
   },
   "properties": {
   "name":"Estill Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2535,32.7278 ]
   },
   "properties": {
   "name":"Estill Solar II",
   "capacity_mw":10.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.53,35.0492 ]
   },
   "properties": {
   "name":"Eubank Landfill Solar Array",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1114,35.8472 ]
   },
   "properties": {
   "name":"Everetts Wildcat Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.6514,41.6758 ]
   },
   "properties": {
   "name":"Exelon Solar Chicago",
   "capacity_mw":9,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.1286,36.2675 ]
   },
   "properties": {
   "name":"Exeter Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3417,34.5822 ]
   },
   "properties": {
   "name":"Expressway Solar A",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3403,34.5833 ]
   },
   "properties": {
   "name":"Expressway Solar B",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3414,34.5844 ]
   },
   "properties": {
   "name":"Expressway Solar C2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.4549,35.3704 ]
   },
   "properties": {
   "name":"Exum Farm Solar  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2576,38.5595 ]
   },
   "properties": {
   "name":"FAA NorCal TRACON",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.5783,34.6384 ]
   },
   "properties": {
   "name":"FECC Solar Benton",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.3677,25.77 ]
   },
   "properties": {
   "name":"FIU Solar",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.97,34.6 ]
   },
   "properties": {
   "name":"FLS Solar 170  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.94,34.5819 ]
   },
   "properties": {
   "name":"FLS Solar 200  LLC",
   "capacity_mw":4.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8219,35.0161 ]
   },
   "properties": {
   "name":"FLS Solar 230 (Warren)",
   "capacity_mw":4.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.9544,35.1028 ]
   },
   "properties": {
   "name":"FRV Cygnus Solar Project",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.3911,38.4869 ]
   },
   "properties": {
   "name":"FRV SI Transport Solar LP",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.762,34.831 ]
   },
   "properties": {
   "name":"Facebook 1 Solar Energy Center",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.4939,36.0989 ]
   },
   "properties": {
   "name":"Facile Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.8632,41.663 ]
   },
   "properties": {
   "name":"Fairhaven C",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.13,34.52 ]
   },
   "properties": {
   "name":"Fairmont-FLS 100",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6103,42.4597 ]
   },
   "properties": {
   "name":"Fairview Farms Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1161,35.0697 ]
   },
   "properties": {
   "name":"Faison Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1145,41.7513 ]
   },
   "properties": {
   "name":"Fall River Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.5986,41.6101 ]
   },
   "properties": {
   "name":"Falmouth Landfill Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72,42.1 ]
   },
   "properties": {
   "name":"Farley Road Community Solar",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.12,36.19 ]
   },
   "properties": {
   "name":"Farmersville",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.134,44.6231 ]
   },
   "properties": {
   "name":"Farmington Holdco Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.025,35.8328 ]
   },
   "properties": {
   "name":"Farrington Farm",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.8644,38.9078 ]
   },
   "properties": {
   "name":"FedEx Field Solar Facility",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3235,40.5064 ]
   },
   "properties": {
   "name":"FedEx Woodbridge",
   "capacity_mw":2.4,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7257,41.8069 ]
   },
   "properties": {
   "name":"Federal Road Solar 1  LLC",
   "capacity_mw":4.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.2537,37.7503 ]
   },
   "properties": {
   "name":"Fiddler's Canyon #1",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.2837,37.7947 ]
   },
   "properties": {
   "name":"Fiddler's Canyon #2",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.2166,37.7313 ]
   },
   "properties": {
   "name":"Fiddler's Canyon 3",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.0456,42.814 ]
   },
   "properties": {
   "name":"Finger Lakes Solar I",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6392,35.7285 ]
   },
   "properties": {
   "name":"First Citizens Bank",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0181,41.5933 ]
   },
   "properties": {
   "name":"Fisher Road Solar",
   "capacity_mw":4.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.0346,35.2413 ]
   },
   "properties": {
   "name":"Fisher Solar Farm - NC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2367,36.3869 ]
   },
   "properties": {
   "name":"Five Points Solar Park",
   "capacity_mw":60,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1033,36.4003 ]
   },
   "properties": {
   "name":"Five Points Solar Station",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.471,45.7368 ]
   },
   "properties": {
   "name":"Flambeau Solar Partners",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2294,35.7581 ]
   },
   "properties": {
   "name":"Flash Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2706,35.8067 ]
   },
   "properties": {
   "name":"Flat Meeks PV 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8567,40.4839 ]
   },
   "properties": {
   "name":"Flemington Solar",
   "capacity_mw":8,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.3839,35.6689 ]
   },
   "properties": {
   "name":"Flemming Solar Center LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5531,35.4027 ]
   },
   "properties": {
   "name":"Flint Hill Solar  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7876,40.0956 ]
   },
   "properties": {
   "name":"Florence Solar W3-080  LLC",
   "capacity_mw":7.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6775,36.5059 ]
   },
   "properties": {
   "name":"Floyd Road Solar Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1359,34.5091 ]
   },
   "properties": {
   "name":"Floyd Solar  LLC",
   "capacity_mw":6.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.4287,32.6486 ]
   },
   "properties": {
   "name":"Foothills Solar Plant",
   "capacity_mw":35,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.3389,41.7731 ]
   },
   "properties": {
   "name":"Forbes Street Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.2095,42.3174 ]
   },
   "properties": {
   "name":"Ford World Headquarters",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.894,45.2535 ]
   },
   "properties": {
   "name":"Forest Lake Solar CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1961,34.0714 ]
   },
   "properties": {
   "name":"Forever 21 Retail  Inc.",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.9688,32.3524 ]
   },
   "properties": {
   "name":"Fort Benning Solar Facility",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.45,39.44 ]
   },
   "properties": {
   "name":"Fort Detrick Solar PV",
   "capacity_mw":15.7,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.1401,33.3866 ]
   },
   "properties": {
   "name":"Fort Gordon Solar Facility",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.35,31.5553 ]
   },
   "properties": {
   "name":"Fort Huachuca Solar PV Project",
   "capacity_mw":17.7,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.7302,31.3311 ]
   },
   "properties": {
   "name":"Fort Rucker Solar Array",
   "capacity_mw":10.6,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5954,31.9047 ]
   },
   "properties": {
   "name":"Fort Stewart Solar Facility",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5519,35.2206 ]
   },
   "properties": {
   "name":"Foxfire Solar Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7016,41.1666 ]
   },
   "properties": {
   "name":"Frankford Solar",
   "capacity_mw":8.2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.3936,42.0406 ]
   },
   "properties": {
   "name":"Franklin 1",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.3917,42.0542 ]
   },
   "properties": {
   "name":"Franklin 2",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1678,36.0975 ]
   },
   "properties": {
   "name":"Franklin Solar  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1525,36.1269 ]
   },
   "properties": {
   "name":"Franklin Solar 2",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.35,36.08 ]
   },
   "properties": {
   "name":"Franklinton Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.148,34.287 ]
   },
   "properties": {
   "name":"Freedom Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.9972,35.4276 ]
   },
   "properties": {
   "name":"Freemont Solar Center LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9808,41.7664 ]
   },
   "properties": {
   "name":"Freetown Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0376,33.8926 ]
   },
   "properties": {
   "name":"Freeway Springs",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5278,40.3763 ]
   },
   "properties": {
   "name":"Freeze Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9692,35.5319 ]
   },
   "properties": {
   "name":"Fremont Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1302,40.1097 ]
   },
   "properties": {
   "name":"French's Landfill PV",
   "capacity_mw":6.1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0122,40.5217 ]
   },
   "properties": {
   "name":"Frenchtown I Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9769,40.5144 ]
   },
   "properties": {
   "name":"Frenchtown II Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0181,40.4825 ]
   },
   "properties": {
   "name":"Frenchtown III Solar",
   "capacity_mw":7.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1051,36.6168 ]
   },
   "properties": {
   "name":"Fresno Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1307,37.3799 ]
   },
   "properties": {
   "name":"Frontier Solar LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.14,39.1281 ]
   },
   "properties": {
   "name":"Ft. Churchill PV",
   "capacity_mw":19.9,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5917,41.1892 ]
   },
   "properties": {
   "name":"G&S Wantage Solar LLC",
   "capacity_mw":8.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5,42.2623 ]
   },
   "properties": {
   "name":"GELD Solar Farm",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.5019,36.2483 ]
   },
   "properties": {
   "name":"GKS Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.8838,41.148 ]
   },
   "properties": {
   "name":"GM Lordstown Assembly Solar Array",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4186,43.6321 ]
   },
   "properties": {
   "name":"GMP Solar - Hartford",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1954,44.0858 ]
   },
   "properties": {
   "name":"GMP Solar - Panton",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.0085,44.4269 ]
   },
   "properties": {
   "name":"GMP Solar - Richmond",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5105,44.1361 ]
   },
   "properties": {
   "name":"GMP Solar - Williamstown",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1032,44.4655 ]
   },
   "properties": {
   "name":"GMP Solar - Williston",
   "capacity_mw":4.7,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.8169,44.6922 ]
   },
   "properties": {
   "name":"GRE Marshan Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.4,33.3 ]
   },
   "properties": {
   "name":"GSE NM1",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.7355,40.0439 ]
   },
   "properties": {
   "name":"GSK York RDC Solar Facility",
   "capacity_mw":2.6,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.909,39.0172 ]
   },
   "properties": {
   "name":"GWCC PV Solar Farm",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.653,34.499 ]
   },
   "properties": {
   "name":"Gainey Solar  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.918,44.1843 ]
   },
   "properties": {
   "name":"Gala Solar",
   "capacity_mw":56.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.7094,36.7839 ]
   },
   "properties": {
   "name":"Gap Pacific Distribution Center",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0308,42.5864 ]
   },
   "properties": {
   "name":"Gardner Solar 1",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.5431,33.8906 ]
   },
   "properties": {
   "name":"Garnet Solar Generation Station I LLC",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.7931,34.3253 ]
   },
   "properties": {
   "name":"Garrell Solar Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.393,39.5052 ]
   },
   "properties": {
   "name":"Garrett County - DPU Treatment Plant",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.592,36.468 ]
   },
   "properties": {
   "name":"Garysburg Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6561,36.5147 ]
   },
   "properties": {
   "name":"Gaston Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.8036,36.4508 ]
   },
   "properties": {
   "name":"Gates Solar LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1142,36.1764 ]
   },
   "properties": {
   "name":"Gates Solar Station",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.8197,32.1028 ]
   },
   "properties": {
   "name":"Gato Montes Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.8044,45.3003 ]
   },
   "properties": {
   "name":"Gemini Community Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4676,40.8484 ]
   },
   "properties": {
   "name":"Gemini Technologies Services  Inc. Solar",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9478,38.3908 ]
   },
   "properties": {
   "name":"Genentech Vacaville Meter #1",
   "capacity_mw":6.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2996,33.2111 ]
   },
   "properties": {
   "name":"Genentech-Oceanside",
   "capacity_mw":6.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.4405,39.3716 ]
   },
   "properties": {
   "name":"General Motors Corp at White Marsh MD",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9981,33.665 ]
   },
   "properties": {
   "name":"Genesis Solar Energy Project",
   "capacity_mw":250,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.031,31.138 ]
   },
   "properties": {
   "name":"Georgia Power at Jakin GA PV",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.321,32.605 ]
   },
   "properties": {
   "name":"Georgia Power at Swainsboro",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.41,32.883 ]
   },
   "properties": {
   "name":"Georgia Power at Wadley GA",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.2546,36.2463 ]
   },
   "properties": {
   "name":"Germantown Solar  LLC",
   "capacity_mw":2.1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0186,39.4967 ]
   },
   "properties": {
   "name":"Gerresheimer Glass Solar Facility",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3161,36.5303 ]
   },
   "properties": {
   "name":"Giffen",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3161,36.5447 ]
   },
   "properties": {
   "name":"Giffen Solar Park",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.8814,32.9408 ]
   },
   "properties": {
   "name":"Gila Bend",
   "capacity_mw":32,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.8024,33.3559 ]
   },
   "properties": {
   "name":"Gilbert Solar Facility I  LLC",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.6658,33.0264 ]
   },
   "properties": {
   "name":"Gillespie 1",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3928,40.5754 ]
   },
   "properties": {
   "name":"Glopak Solar PV Power Plant",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1229,39.7808 ]
   },
   "properties": {
   "name":"Gloucester Community College Solar",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3868,34.839 ]
   },
   "properties": {
   "name":"Golden Fields Solar I  LLC",
   "capacity_mw":54,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72,42.4 ]
   },
   "properties": {
   "name":"Golden Hills Solar",
   "capacity_mw":4.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0536,33.9142 ]
   },
   "properties": {
   "name":"Golden Springs Building C-1",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0522,33.9119 ]
   },
   "properties": {
   "name":"Golden Springs Building D",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.042,27.9821 ]
   },
   "properties": {
   "name":"Goldfinch",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.3231,43.5434 ]
   },
   "properties": {
   "name":"Gore Mountain Solar II",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0654,40.7601 ]
   },
   "properties": {
   "name":"Goya Foods  Inc- Jersey City Solar",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0774,40.7731 ]
   },
   "properties": {
   "name":"Goya Foods  Inc- Secaucus Solar",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6626,42.2255 ]
   },
   "properties": {
   "name":"Grafton PV",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6792,42.1992 ]
   },
   "properties": {
   "name":"Grafton Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0144,34.3097 ]
   },
   "properties": {
   "name":"Graham Solar Center LLC",
   "capacity_mw":4.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.7583,41.1434 ]
   },
   "properties": {
   "name":"Grand Ridge Solar Farm",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.61,45.054 ]
   },
   "properties": {
   "name":"Grand Ronde Solar",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.9012,42.9531 ]
   },
   "properties": {
   "name":"Grand Valley Solar Gardens",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.0934,42.9896 ]
   },
   "properties": {
   "name":"Grand View Solar Two",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0588,33.2704 ]
   },
   "properties": {
   "name":"Granger",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.2264,37.7751 ]
   },
   "properties": {
   "name":"Granite Mountain Solar East  LLC",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.322,37.7989 ]
   },
   "properties": {
   "name":"Granite Mountain Solar West  LLC",
   "capacity_mw":50.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.9889,38.4028 ]
   },
   "properties": {
   "name":"Granite Peak Solar Plant",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5939,36.4117 ]
   },
   "properties": {
   "name":"Granville Solar PV Power Project",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6942,38.5003 ]
   },
   "properties": {
   "name":"Grassland 1&2 Solar Project",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6942,38.5003 ]
   },
   "properties": {
   "name":"Grassland 3&4 Solar Project",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.249,46.8057 ]
   },
   "properties": {
   "name":"Great Divide Solar  LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3796,36.5812 ]
   },
   "properties": {
   "name":"Great Valley Solar Portfolio Holdings  LLC",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.8909,37.6855 ]
   },
   "properties": {
   "name":"Greater Sandhill I",
   "capacity_mw":19,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4647,38.282 ]
   },
   "properties": {
   "name":"Green Acres Solar Facility 1",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4613,38.2836 ]
   },
   "properties": {
   "name":"Green Acres Solar Facility 2",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2697,35.8317 ]
   },
   "properties": {
   "name":"Green Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.0636,46.6945 ]
   },
   "properties": {
   "name":"Green Meadow Solar  LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.5319,41.6694 ]
   },
   "properties": {
   "name":"Green Meadows",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.8165,39.7938 ]
   },
   "properties": {
   "name":"Greenfield Solar Park",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.7358,38.2561 ]
   },
   "properties": {
   "name":"Greenville Solar Plant",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.6964,43.1056 ]
   },
   "properties": {
   "name":"Greenwood Solar Farm",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6842,39.3733 ]
   },
   "properties": {
   "name":"Gridley Main",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6817,39.3733 ]
   },
   "properties": {
   "name":"Gridley Main Two",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.4361,41.5214 ]
   },
   "properties": {
   "name":"Griffith",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3812,43.9367 ]
   },
   "properties": {
   "name":"Grove Solar Center  LLC",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0372,42.7511 ]
   },
   "properties": {
   "name":"Groveland Solar",
   "capacity_mw":3.2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.6506,36.1639 ]
   },
   "properties": {
   "name":"Guernsey Solar Station",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.5184,30.5154 ]
   },
   "properties": {
   "name":"Gulf Coast Solar Center I",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.8952,30.4308 ]
   },
   "properties": {
   "name":"Gulf Coast Solar Center II",
   "capacity_mw":40,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.3352,30.4704 ]
   },
   "properties": {
   "name":"Gulf Coast Solar Center III",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.1192,30.3799 ]
   },
   "properties": {
   "name":"Gulfport Naval Base CSG PV System",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5945,35.56 ]
   },
   "properties": {
   "name":"HCE Johnston I  LLC",
   "capacity_mw":2.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.3253,43.5437 ]
   },
   "properties": {
   "name":"HGS Solar I",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.4016,40.3904 ]
   },
   "properties": {
   "name":"HMW Minster PV I",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.033,42.5788 ]
   },
   "properties": {
   "name":"HQC Rock River Solar Power Gen Station",
   "capacity_mw":2.1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6315,36.3487 ]
   },
   "properties": {
   "name":"HXNAir Solar One",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5389,42.3521 ]
   },
   "properties": {
   "name":"Hadley Solar NG  LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2934,33.0234 ]
   },
   "properties": {
   "name":"Haley Solar",
   "capacity_mw":8.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7114,36.4419 ]
   },
   "properties": {
   "name":"Halifax",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3944,40.5737 ]
   },
   "properties": {
   "name":"Hall's Warehouse Solar Project",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6301,40.169 ]
   },
   "properties": {
   "name":"Hamilton Solar-Crosswicks",
   "capacity_mw":7.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4388,42.0447 ]
   },
   "properties": {
   "name":"Hampden",
   "capacity_mw":3.2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4691,42.3769 ]
   },
   "properties": {
   "name":"Hampshire College",
   "capacity_mw":4.4,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.136,32.881 ]
   },
   "properties": {
   "name":"Hampton Solar 2",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.133,32.879 ]
   },
   "properties": {
   "name":"Hampton Solar I",
   "capacity_mw":6.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.6292,36.3067 ]
   },
   "properties": {
   "name":"Hanford 1 and 2",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5906,40.0653 ]
   },
   "properties": {
   "name":"Hanover",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5108,35.3965 ]
   },
   "properties": {
   "name":"Happy Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.0219,35.8308 ]
   },
   "properties": {
   "name":"Hardison Farm Solar  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1896,42.3084 ]
   },
   "properties": {
   "name":"Hardwick-Athol & Eagle Hill",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.245,42.448 ]
   },
   "properties": {
   "name":"Harford Solar Farm",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2478,40.9039 ]
   },
   "properties": {
   "name":"Harmon DC Totowa NJ",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.171,40.7553 ]
   },
   "properties": {
   "name":"Harmony",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1008,35.2119 ]
   },
   "properties": {
   "name":"Harrell's Hill Solar Center LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6509,41.7915 ]
   },
   "properties": {
   "name":"Hartford Landfill Solar EGF",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0728,40.7828 ]
   },
   "properties": {
   "name":"Hartz Way",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.1599,29.7408 ]
   },
   "properties": {
   "name":"Harvest Moon Renewable Energy Company",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.0919,41.6961 ]
   },
   "properties": {
   "name":"Harwich Landfill",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.8249,44.7593 ]
   },
   "properties": {
   "name":"Hastings Solar",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.2597,32.63 ]
   },
   "properties": {
   "name":"Hatch Solar Energy Center I  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7,42.3 ]
   },
   "properties": {
   "name":"Hatfield Renewables Community Solar",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.3012,31.2758 ]
   },
   "properties": {
   "name":"Hattiesburg Solar Farm",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0926,42.7811 ]
   },
   "properties": {
   "name":"Haverhill Solar Power Project",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.22,39.436 ]
   },
   "properties": {
   "name":"Havre de Grace II - E at Perryman",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2353,35.5258 ]
   },
   "properties": {
   "name":"Haynes Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.915,35.343 ]
   },
   "properties": {
   "name":"Haywood Farm Solar  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.2869,35.5775 ]
   },
   "properties": {
   "name":"Haywood Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.8786,35.3253 ]
   },
   "properties": {
   "name":"Hayworth Solar",
   "capacity_mw":27,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.6022,31.8194 ]
   },
   "properties": {
   "name":"Hazlehurst II",
   "capacity_mw":52.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.5406,32.7125 ]
   },
   "properties": {
   "name":"Heber Solar",
   "capacity_mw":10.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0144,35.2694 ]
   },
   "properties": {
   "name":"Hecate Energy Beacon Solar 1",
   "capacity_mw":56,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0147,35.2531 ]
   },
   "properties": {
   "name":"Hecate Energy Beacon Solar 3",
   "capacity_mw":56,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0269,35.2536 ]
   },
   "properties": {
   "name":"Hecate Energy Beacon Solar 4",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.9097,35.3762 ]
   },
   "properties": {
   "name":"Hector Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.971,34.6543 ]
   },
   "properties": {
   "name":"Heliocentric",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4892,40.3739 ]
   },
   "properties": {
   "name":"Heller Industrial Parks",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.5975,36.4691 ]
   },
   "properties": {
   "name":"Hemlock Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.8058,36.2188 ]
   },
   "properties": {
   "name":"Henrietta Solar Project",
   "capacity_mw":102,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.7773,38.5955 ]
   },
   "properties": {
   "name":"Henryville Solar RES",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.7994,38.5456 ]
   },
   "properties": {
   "name":"Herbert Farm Solar",
   "capacity_mw":5.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.4909,36.1303 ]
   },
   "properties": {
   "name":"Hertford Solar Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3781,34.435 ]
   },
   "properties": {
   "name":"Hesperia",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.4745,34.784 ]
   },
   "properties": {
   "name":"Hew Fulton Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1829,42.6247 ]
   },
   "properties": {
   "name":"Hewlett-Packard (HP) - Andover  MA",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3361,33.665 ]
   },
   "properties": {
   "name":"Hickory Ridge Landfill Solar Project",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.7268,39.0021 ]
   },
   "properties": {
   "name":"Higginsville Solar Farm",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.4519,35.3639 ]
   },
   "properties": {
   "name":"Highland Solar Center LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.99,35.4339 ]
   },
   "properties": {
   "name":"Highwater Solar I",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.6904,33.6144 ]
   },
   "properties": {
   "name":"Highway 56 Solar",
   "capacity_mw":5.3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.3857,35.4947 ]
   },
   "properties": {
   "name":"Hinton",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.3083,41.5294 ]
   },
   "properties": {
   "name":"Hobart Solar  LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.8203,40.8247 ]
   },
   "properties": {
   "name":"Holdrege Solar Center",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1086,40.5997 ]
   },
   "properties": {
   "name":"Holland Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4289,36.8625 ]
   },
   "properties": {
   "name":"Hollister Solar LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4682,42.1696 ]
   },
   "properties": {
   "name":"Holliston Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3408,34.7742 ]
   },
   "properties": {
   "name":"Holstein Plant",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.034,40.7977 ]
   },
   "properties": {
   "name":"Holtsville Solar Project",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6824,42.1909 ]
   },
   "properties": {
   "name":"Holyoke Solar Cooperative at Mueller",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.497,35.205 ]
   },
   "properties": {
   "name":"Hood Farm Solar  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.9908,37.6919 ]
   },
   "properties": {
   "name":"Hooper Solar",
   "capacity_mw":52,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2742,34.7089 ]
   },
   "properties": {
   "name":"Horn",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1566,42.4267 ]
   },
   "properties": {
   "name":"Houghton",
   "capacity_mw":2.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.5431,35.2257 ]
   },
   "properties": {
   "name":"Howell Midland Farm  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1675,40.147 ]
   },
   "properties": {
   "name":"Howell Solar",
   "capacity_mw":7,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.2997,42.5537 ]
   },
   "properties": {
   "name":"Hunt Farm Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9602,42.8298 ]
   },
   "properties": {
   "name":"Hunt Road Solar",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.0306,36.1814 ]
   },
   "properties": {
   "name":"Huron Solar Station",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5667,36.2847 ]
   },
   "properties": {
   "name":"Husky Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5158,35.2608 ]
   },
   "properties": {
   "name":"Hutchinson Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.5922,44.0218 ]
   },
   "properties": {
   "name":"Hwy 14 Holdco Solar CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.3489,33.027 ]
   },
   "properties": {
   "name":"Hyder II",
   "capacity_mw":14,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.344,33.0257 ]
   },
   "properties": {
   "name":"Hyder Solar",
   "capacity_mw":22,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0001,44.1513 ]
   },
   "properties": {
   "name":"Hyline Solar Center  LLC",
   "capacity_mw":9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.333,43.444 ]
   },
   "properties": {
   "name":"ID Solar",
   "capacity_mw":40,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1601,40.4382 ]
   },
   "properties": {
   "name":"IFF Hazlet Ground",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.548,39.267 ]
   },
   "properties": {
   "name":"IGS Solar I - BWI2",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.548,39.27 ]
   },
   "properties": {
   "name":"IGS Solar I - BWI5",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.255,40.582 ]
   },
   "properties": {
   "name":"IGS Solar I - EWR5",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.257,40.583 ]
   },
   "properties": {
   "name":"IGS Solar I - EWR6",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.926,39.021 ]
   },
   "properties": {
   "name":"IKEA College Park 411",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3064,40.0952 ]
   },
   "properties": {
   "name":"IKEA Conshohocken Rooftop PV System",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.05,32.82 ]
   },
   "properties": {
   "name":"IKEA Grand Prairie Rooftop PV System",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.51,30.23 ]
   },
   "properties": {
   "name":"IKEA Jacksonville Rooftop PV System",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.07,41.48 ]
   },
   "properties": {
   "name":"IKEA Joliet Rooftop PV System",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.2808,36.0689 ]
   },
   "properties": {
   "name":"IKEA Las Vegas 462",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.7993,35.19 ]
   },
   "properties": {
   "name":"IKEA Memphis 508",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.3838,25.7915 ]
   },
   "properties": {
   "name":"IKEA Miami 327",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.92,41.2957 ]
   },
   "properties": {
   "name":"IKEA New Haven Rooftop PV &  Fuel Cell",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0553,39.5608 ]
   },
   "properties": {
   "name":"IKEA Perryville 460",
   "capacity_mw":2.1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.6903,30.557 ]
   },
   "properties": {
   "name":"IKEA Round Rock 027",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1738,32.1775 ]
   },
   "properties": {
   "name":"IKEA Savannah 490",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.2455,38.635 ]
   },
   "properties": {
   "name":"IKEA St. Louis 410",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.4325,27.9539 ]
   },
   "properties": {
   "name":"IKEA Tampa 042",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.9469,34.9753 ]
   },
   "properties": {
   "name":"IKEA Tejon 345",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8536,40.0139 ]
   },
   "properties": {
   "name":"IKEA Westhampton 061",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3836,40.4705 ]
   },
   "properties": {
   "name":"ILR Landfill",
   "capacity_mw":7.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.7371,40.0516 ]
   },
   "properties": {
   "name":"IMPA Anderson Solar Park",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.6909,40.1383 ]
   },
   "properties": {
   "name":"IMPA Anderson Solar Park 2",
   "capacity_mw":8.1,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.8872,40.0531 ]
   },
   "properties": {
   "name":"IMPA Crawfordsville Solar Park",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.7747,40.2164 ]
   },
   "properties": {
   "name":"IMPA Frankton Solar Park",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.9681,38.3196 ]
   },
   "properties": {
   "name":"IMPA Huntingburg Solar Park",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.7709,39.9886 ]
   },
   "properties": {
   "name":"IMPA Pendleton Solar Park",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.0456,40.7678 ]
   },
   "properties": {
   "name":"IMPA Peru Solar Park",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.1364,40.9461 ]
   },
   "properties": {
   "name":"IMPA Rensselaer Solar Park",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.895,39.8011 ]
   },
   "properties": {
   "name":"IMPA Richmond Solar Park",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.7375,37.9461 ]
   },
   "properties": {
   "name":"IMPA Tell City Solar Park",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.2092,38.6535 ]
   },
   "properties": {
   "name":"IMPA Washington Solar Park",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.3217,39.6947 ]
   },
   "properties": {
   "name":"IND Solar Farm (Phase IIA)",
   "capacity_mw":7.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.3155,39.6952 ]
   },
   "properties": {
   "name":"IND Solar Farm 1st Phase",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.3145,39.723 ]
   },
   "properties": {
   "name":"INDY III",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.225,40.595 ]
   },
   "properties": {
   "name":"IOS - ERW9",
   "capacity_mw":5.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.838,44.804 ]
   },
   "properties": {
   "name":"IOS - MEW Phase 1",
   "capacity_mw":4.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.5,44.3 ]
   },
   "properties": {
   "name":"IRE Solar I  LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2786,40.2675 ]
   },
   "properties": {
   "name":"ISH Solar Central  LLC",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1244,33.9217 ]
   },
   "properties": {
   "name":"ISH Solar Hospital Downey",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0953,32.7917 ]
   },
   "properties": {
   "name":"ISH Solar Hospital SDMC",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.5066,32.8319 ]
   },
   "properties": {
   "name":"IVC Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7094,40.555 ]
   },
   "properties": {
   "name":"Imclone Solar Electric Facility",
   "capacity_mw":8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.6583,32.6633 ]
   },
   "properties": {
   "name":"Imperial Solar Energy Center South",
   "capacity_mw":128.9,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.7793,32.7722 ]
   },
   "properties": {
   "name":"Imperial Solar Energy Center West",
   "capacity_mw":148.7,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.5873,32.6711 ]
   },
   "properties": {
   "name":"Imperial Valley Solar  LLC",
   "capacity_mw":199.9,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.4975,33.2522 ]
   },
   "properties": {
   "name":"Imperial Valley Solar Co (IVSC) 2  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.4967,33.2458 ]
   },
   "properties": {
   "name":"Imperial Valley Solar Company 1 LLC",
   "capacity_mw":23,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0386,35.4028 ]
   },
   "properties": {
   "name":"Improvement Dst No. 4",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.2882,39.1171 ]
   },
   "properties": {
   "name":"Independence Solar Farm",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3222,42.2008 ]
   },
   "properties": {
   "name":"Indian Hill Solar LLC",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4989,42.1514 ]
   },
   "properties": {
   "name":"Indian Orchard PV Facility",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.2336,39.79 ]
   },
   "properties": {
   "name":"Indianapolis Motor Speedway Solar PV",
   "capacity_mw":9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.8456,34.0087 ]
   },
   "properties": {
   "name":"Industry MetroLink PV 1",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4569,34.5531 ]
   },
   "properties": {
   "name":"Industry Solar Power Generation Station 1 LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.2377,39.7379 ]
   },
   "properties": {
   "name":"Indy Grocers",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.9856,39.6628 ]
   },
   "properties": {
   "name":"Indy Solar I  LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.9856,39.6628 ]
   },
   "properties": {
   "name":"Indy Solar II  LLC",
   "capacity_mw":10.1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.2597,39.6594 ]
   },
   "properties": {
   "name":"Indy Solar III  LLC",
   "capacity_mw":8.6,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.8903,35.4736 ]
   },
   "properties": {
   "name":"Innovative Solar 10",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.3575,35.3689 ]
   },
   "properties": {
   "name":"Innovative Solar 14  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.7642,35.3194 ]
   },
   "properties": {
   "name":"Innovative Solar 15  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.35,35.3639 ]
   },
   "properties": {
   "name":"Innovative Solar 16",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.7951,35.3782 ]
   },
   "properties": {
   "name":"Innovative Solar 18  LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.419,35.2598 ]
   },
   "properties": {
   "name":"Innovative Solar 23",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.4133,35.7097 ]
   },
   "properties": {
   "name":"Innovative Solar 26  LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.7554,34.5394 ]
   },
   "properties": {
   "name":"Innovative Solar 31",
   "capacity_mw":35,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.825,35.046 ]
   },
   "properties": {
   "name":"Innovative Solar 35  LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.9439,34.8383 ]
   },
   "properties": {
   "name":"Innovative Solar 37",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.8774,34.8476 ]
   },
   "properties": {
   "name":"Innovative Solar 42",
   "capacity_mw":71,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3048,34.53 ]
   },
   "properties": {
   "name":"Innovative Solar 43  LLC",
   "capacity_mw":50.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.108,34.859 ]
   },
   "properties": {
   "name":"Innovative Solar 44",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9436,34.9182 ]
   },
   "properties": {
   "name":"Innovative Solar 46",
   "capacity_mw":78.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3324,34.8019 ]
   },
   "properties": {
   "name":"Innovative Solar 47",
   "capacity_mw":33.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3024,34.7116 ]
   },
   "properties": {
   "name":"Innovative Solar 48",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.216,34.695 ]
   },
   "properties": {
   "name":"Innovative Solar 55",
   "capacity_mw":6.5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9793,36.0947 ]
   },
   "properties": {
   "name":"Innovative Solar 59  LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.7103,35.6575 ]
   },
   "properties": {
   "name":"Innovative Solar 6",
   "capacity_mw":3.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.992,36.091 ]
   },
   "properties": {
   "name":"Innovative Solar 60  LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6204,35.3917 ]
   },
   "properties": {
   "name":"Innovative Solar 63  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3297,35.041 ]
   },
   "properties": {
   "name":"Innovative Solar 64",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5,34.7587 ]
   },
   "properties": {
   "name":"Innovative Solar 65",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.9419,42.5994 ]
   },
   "properties": {
   "name":"Integrys MA Solar  LLC - Ashburnham Site",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.8924,33.2433 ]
   },
   "properties": {
   "name":"Intel - Ocotillo Campus Solar",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.173,38.6451 ]
   },
   "properties": {
   "name":"Intel Folsom",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1639,38.6436 ]
   },
   "properties": {
   "name":"Intel Folsom Phase 2",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1626,38.646 ]
   },
   "properties": {
   "name":"Intel Folsom Phase 3",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.899,45.129 ]
   },
   "properties": {
   "name":"Interstate Solar",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2603,42.58 ]
   },
   "properties": {
   "name":"Iron Horse Solar 4  LLC",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2464,42.5829 ]
   },
   "properties": {
   "name":"Iron Horse Solar I CSG",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.1516,37.7212 ]
   },
   "properties": {
   "name":"Iron Springs Solar  LLC",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9181,33.565 ]
   },
   "properties": {
   "name":"Ironwood Solar LLC",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.255,36.3875 ]
   },
   "properties": {
   "name":"Ivanhoe Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.4525,35.5331 ]
   },
   "properties": {
   "name":"Ivanpah 1",
   "capacity_mw":133,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.4686,35.5561 ]
   },
   "properties": {
   "name":"Ivanpah 2",
   "capacity_mw":133.4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.4825,35.5808 ]
   },
   "properties": {
   "name":"Ivanpah 3",
   "capacity_mw":133.4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6369,39.9928 ]
   },
   "properties": {
   "name":"JMB Mcguire-Dix-Lakehurst Solar Project",
   "capacity_mw":11.4,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.262,40.0927 ]
   },
   "properties": {
   "name":"Jackson Board of Education-Liberty HS",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.033,38.8817 ]
   },
   "properties": {
   "name":"Jackson Co. Solar RES",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.83,35.75 ]
   },
   "properties": {
   "name":"Jackson Solar Farm",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.9564,30.3207 ]
   },
   "properties": {
   "name":"Jacksonville Solar",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.6214,36.2922 ]
   },
   "properties": {
   "name":"Jacob Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.0118,35.3045 ]
   },
   "properties": {
   "name":"Jacobson 5 MW Solar",
   "capacity_mw":4.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5824,40.0637 ]
   },
   "properties": {
   "name":"Jacobstown",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.129,32.6212 ]
   },
   "properties": {
   "name":"Jacumba Solar Farm",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.0811,35.8753 ]
   },
   "properties": {
   "name":"Jakana Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.1497,39.8596 ]
   },
   "properties": {
   "name":"Jeffco CSG  LLC",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0687,40.7722 ]
   },
   "properties": {
   "name":"Jefferson Avenue",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.7992,43.0146 ]
   },
   "properties": {
   "name":"Jefferson Solar Park",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.9698,43.971 ]
   },
   "properties": {
   "name":"Jefferson-Lewis BOCES Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1733,40.6608 ]
   },
   "properties": {
   "name":"Jersey Gardens Phase 1",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1733,40.6608 ]
   },
   "properties": {
   "name":"Jersey Gardens Phase 2",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0375,34.5643 ]
   },
   "properties": {
   "name":"Jersey Holdings",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.9247,33.6031 ]
   },
   "properties": {
   "name":"Jewish Community Center PV",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.0684,39.518 ]
   },
   "properties": {
   "name":"Johnson Co. Solar RES",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.2197,39.8253 ]
   },
   "properties": {
   "name":"Johnson Matthey  Inc. Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5595,41.8009 ]
   },
   "properties": {
   "name":"Johnston Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4084,40.5557 ]
   },
   "properties": {
   "name":"Jordache Enterprises Solar",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8434,40.5237 ]
   },
   "properties": {
   "name":"Junction Road",
   "capacity_mw":4.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -159.3792,21.9973 ]
   },
   "properties": {
   "name":"KIUC Kapaia PV and BA Storage Project",
   "capacity_mw":28,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -159.3031,22.1317 ]
   },
   "properties": {
   "name":"KRS I Anahola Solar",
   "capacity_mw":18,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -159.45,21.9008 ]
   },
   "properties": {
   "name":"KRS II Koloa Solar",
   "capacity_mw":13.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.045,42.4708 ]
   },
   "properties": {
   "name":"KS Solar Six LLC",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -158.04,21.3281 ]
   },
   "properties": {
   "name":"Kalaeloa Renewable Energy Park",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -158.0869,21.32 ]
   },
   "properties": {
   "name":"Kalaeloa Solar Two",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -159.3316,22.0804 ]
   },
   "properties": {
   "name":"Kapaa Photovoltaic Project",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -158.1175,21.3211 ]
   },
   "properties": {
   "name":"Kapolei Solar Energy Park",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.5169,41.3611 ]
   },
   "properties": {
   "name":"Katama Farm",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.2639,36.7719 ]
   },
   "properties": {
   "name":"Kayenta Solar Project",
   "capacity_mw":27.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.0412,40.7217 ]
   },
   "properties": {
   "name":"Kearney NPPD Solar Project",
   "capacity_mw":5.8,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4586,42.0712 ]
   },
   "properties": {
   "name":"Kearsarge Bellingham PV",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4204,42.4493 ]
   },
   "properties": {
   "name":"Kearsarge Concord II",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5083,42.223 ]
   },
   "properties": {
   "name":"Kearsarge Granby",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7752,42.0163 ]
   },
   "properties": {
   "name":"Kearsarge Southwick LLC",
   "capacity_mw":3.3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.4,35.4267 ]
   },
   "properties": {
   "name":"Keen Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2185,36.1542 ]
   },
   "properties": {
   "name":"Kelford",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2119,36.1481 ]
   },
   "properties": {
   "name":"Kelford",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.04,34.96 ]
   },
   "properties": {
   "name":"Kenansville",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9817,34.9578 ]
   },
   "properties": {
   "name":"Kenansville Solar 2  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9761,34.97 ]
   },
   "properties": {
   "name":"Kenansville Solar Farm  LLC",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0922,35.0123 ]
   },
   "properties": {
   "name":"Kennedy Solar  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1526,36.4338 ]
   },
   "properties": {
   "name":"Kenneth Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0908,39.2808 ]
   },
   "properties": {
   "name":"Kent County - Worton Complex",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.4375,38.9931 ]
   },
   "properties": {
   "name":"Kent County Wastewater Treatment Solar",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.9822,39.2972 ]
   },
   "properties": {
   "name":"Kent County-Kennedyville",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1236,34.7003 ]
   },
   "properties": {
   "name":"Kettering Solar 1",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1236,34.7003 ]
   },
   "properties": {
   "name":"Kettering Solar 2",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.9475,36.0508 ]
   },
   "properties": {
   "name":"Kettleman Solar -Centaurus",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1412,38.1214 ]
   },
   "properties": {
   "name":"Kettleman Solar Project",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.2211,39.8611 ]
   },
   "properties": {
   "name":"Keystone Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5636,30.8349 ]
   },
   "properties": {
   "name":"King's Bay Solar Facility",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.432,34.819 ]
   },
   "properties": {
   "name":"Kingbird A Solar LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4385,34.8242 ]
   },
   "properties": {
   "name":"Kingbird B Solar  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5403,36.5053 ]
   },
   "properties": {
   "name":"Kingsburg Solar",
   "capacity_mw":3.7,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1064,39.7933 ]
   },
   "properties": {
   "name":"Kinsley Landfill Solar",
   "capacity_mw":8.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6083,35.3706 ]
   },
   "properties": {
   "name":"Kinston",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6426,35.2184 ]
   },
   "properties": {
   "name":"Kinston Davis Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.4723,35.3514 ]
   },
   "properties": {
   "name":"Kinston Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1375,34.9889 ]
   },
   "properties": {
   "name":"Kirkwall Holdings",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.4381,36.9667 ]
   },
   "properties": {
   "name":"Kit Carson",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.764,42.183 ]
   },
   "properties": {
   "name":"Klamath Falls Solar 2",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2344,40.0264 ]
   },
   "properties": {
   "name":"Knouse Solar Project 1",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2668,34.0947 ]
   },
   "properties": {
   "name":"Kohls San Bernardino Solar Facility",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1022,35.7991 ]
   },
   "properties": {
   "name":"Kojak Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.146,40.473 ]
   },
   "properties": {
   "name":"Kokomo Solar 1  LLC",
   "capacity_mw":5.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.8763,44.1826 ]
   },
   "properties": {
   "name":"Koppelman Sun CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.7057,44.747 ]
   },
   "properties": {
   "name":"Kramer Solar CSG",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7703,39.9803 ]
   },
   "properties": {
   "name":"L&D Landfill Solar",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5214,40.4879 ]
   },
   "properties": {
   "name":"L'Oreal Franklin",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5047,40.4003 ]
   },
   "properties": {
   "name":"L'Oreal Monmouth",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.468,40.5543 ]
   },
   "properties": {
   "name":"L'Oreal Piscataway",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.6082,38.9877 ]
   },
   "properties": {
   "name":"L'Oreal Solar - Florence",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9731,34.6543 ]
   },
   "properties": {
   "name":"L-8 Solar Project",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.0175,28.0664 ]
   },
   "properties": {
   "name":"LKL BLBD  LLC",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.7975,36.6786 ]
   },
   "properties": {
   "name":"La Joya Del Sol",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.0046,35.2417 ]
   },
   "properties": {
   "name":"La Senita",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.3882,32.8763 ]
   },
   "properties": {
   "name":"LaFayette Solar Farm",
   "capacity_mw":79.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.3524,44.8878 ]
   },
   "properties": {
   "name":"Lafayette DPC Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5642,35.2324 ]
   },
   "properties": {
   "name":"Lafayette Solar I  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.0356,38.2914 ]
   },
   "properties": {
   "name":"Laho Solar Plant",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.9032,44.3204 ]
   },
   "properties": {
   "name":"Lake Emily Solar",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.24,33.8206 ]
   },
   "properties": {
   "name":"Lake Pleasant WTP",
   "capacity_mw":6.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.8121,45.1959 ]
   },
   "properties": {
   "name":"Lake Pulaski Solar",
   "capacity_mw":7.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.0473,27.9911 ]
   },
   "properties": {
   "name":"Lakeland Electric Co. (FL) - Aiport II",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.0473,27.9885 ]
   },
   "properties": {
   "name":"Lakeland Electric Co. (FL)-Airport 1",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.055,31.0269 ]
   },
   "properties": {
   "name":"Lakeland Solar Energy LLC",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1856,40.0575 ]
   },
   "properties": {
   "name":"Lakewood Seven Solar LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.9265,32.7156 ]
   },
   "properties": {
   "name":"Lamesa Solar",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -156.9233,20.7667 ]
   },
   "properties": {
   "name":"Lanai Solar-Electric Plant",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0589,34.6958 ]
   },
   "properties": {
   "name":"Lancaster Baptist Church",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2894,34.7169 ]
   },
   "properties": {
   "name":"Lancaster Dry Farm Ranch B",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9328,34.5994 ]
   },
   "properties": {
   "name":"Lancaster Little Rock",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.095,34.715 ]
   },
   "properties": {
   "name":"Lancaster Solar 1",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1661,34.7106 ]
   },
   "properties": {
   "name":"Lancaster Solar 2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1933,34.7802 ]
   },
   "properties": {
   "name":"Lancaster WAD B",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.9864,38.2717 ]
   },
   "properties": {
   "name":"Lanesville Solar RES",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.4135,35.4473 ]
   },
   "properties": {
   "name":"Langdon Solar Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8489,35.8019 ]
   },
   "properties": {
   "name":"Langley PV1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8089,34.8989 ]
   },
   "properties": {
   "name":"Lanier Solar",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.2678,33.7833 ]
   },
   "properties": {
   "name":"Laredo Bus Facility Solar Canopies",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.2067,35.6433 ]
   },
   "properties": {
   "name":"Las Vegas Solar Energy Center",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.0353,36.1344 ]
   },
   "properties": {
   "name":"Las Vegas WPCF Solar Plant",
   "capacity_mw":3.3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.7019,34.1361 ]
   },
   "properties": {
   "name":"Las Virgenes Municipal Water District",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.443,34.7644 ]
   },
   "properties": {
   "name":"Laurinburg Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.4302,34.7565 ]
   },
   "properties": {
   "name":"Laurinburg Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.2954,34.7076 ]
   },
   "properties": {
   "name":"Laurinburg Solar  LLC (Heelstone)",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.6937,45.4013 ]
   },
   "properties": {
   "name":"Lawrence Creek Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7633,40.9253 ]
   },
   "properties": {
   "name":"Leavenworth Greenworks LLC",
   "capacity_mw":9.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9122,40.6758 ]
   },
   "properties": {
   "name":"Lebanon Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.6706,37.6678 ]
   },
   "properties": {
   "name":"Lebanon Solar Farm (MO)",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.623,36.058 ]
   },
   "properties": {
   "name":"Leggett Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.6902,27.9862 ]
   },
   "properties": {
   "name":"Legoland Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.8786,42.2228 ]
   },
   "properties": {
   "name":"Leicester One MA Solar LLC",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.2859,44.081 ]
   },
   "properties": {
   "name":"Lemond Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.7981,36.2579 ]
   },
   "properties": {
   "name":"Lemoore 1",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.0428,39.7767 ]
   },
   "properties": {
   "name":"Lenape II",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6664,35.3317 ]
   },
   "properties": {
   "name":"Lenoir Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.475,35.35 ]
   },
   "properties": {
   "name":"Lenoir Farm 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7554,42.5616 ]
   },
   "properties": {
   "name":"Leominster",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1772,42.6062 ]
   },
   "properties": {
   "name":"Leominster (MA)-South Street-R&D",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.2397,33.1611 ]
   },
   "properties": {
   "name":"Leon Solar",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.5583,41.8572 ]
   },
   "properties": {
   "name":"Lepomis PV Energy LLC",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1795,42.619 ]
   },
   "properties": {
   "name":"Letchworth Solar Project",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2111,36.1411 ]
   },
   "properties": {
   "name":"Lewiston Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.9071,43.4941 ]
   },
   "properties": {
   "name":"Liberty Pole DPC Solar",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.801,35.368 ]
   },
   "properties": {
   "name":"Lillington Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2471,44.3689 ]
   },
   "properties": {
   "name":"Limerick Road Solar Farm",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1675,39.9008 ]
   },
   "properties": {
   "name":"Lincoln Financial Field",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.2603,41.4628 ]
   },
   "properties": {
   "name":"Lincoln Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.8176,35.3795 ]
   },
   "properties": {
   "name":"Lincoln Solar  LLC (NC)",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.9087,44.8024 ]
   },
   "properties": {
   "name":"Lind Solar CSG",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2077,32.7292 ]
   },
   "properties": {
   "name":"Lindberg FIeld Solar",
   "capacity_mw":3.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2051,32.7294 ]
   },
   "properties": {
   "name":"Lindberg Field Solar 2",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2144,40.62 ]
   },
   "properties": {
   "name":"Linden Solar Farm",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.1339,36.2119 ]
   },
   "properties": {
   "name":"Lindsay Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.436,41.7992 ]
   },
   "properties": {
   "name":"Little Bay",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.8042,35.5389 ]
   },
   "properties": {
   "name":"Little River PV 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9475,34.6002 ]
   },
   "properties": {
   "name":"Little Rock Pham Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.4381,35.4339 ]
   },
   "properties": {
   "name":"Littlefield Solar Center LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.1028,32.4238 ]
   },
   "properties": {
   "name":"Live Oak Solar  LLC",
   "capacity_mw":51,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4383,40.5275 ]
   },
   "properties": {
   "name":"Livingston Solar Canopies",
   "capacity_mw":6.6,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.43,40.5236 ]
   },
   "properties": {
   "name":"Livingston Solar Farm",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2164,28.5394 ]
   },
   "properties": {
   "name":"Lockheed Martin Solar",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.6853,28.0479 ]
   },
   "properties": {
   "name":"Lockheed Martin Solar System",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.1451,40.61 ]
   },
   "properties": {
   "name":"Logan 1 Community Solar Array",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -65.9028,18.4134 ]
   },
   "properties": {
   "name":"Loiza Solar Park",
   "capacity_mw":26,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.8655,34.3981 ]
   },
   "properties": {
   "name":"Lone Valley Solar Park I LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.8625,34.4083 ]
   },
   "properties": {
   "name":"Lone Valley Solar Park II LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.618,36.467 ]
   },
   "properties": {
   "name":"Long Farm 46 Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8951,35.1953 ]
   },
   "properties": {
   "name":"Long Henry Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.8478,40.8611 ]
   },
   "properties": {
   "name":"Long Island Solar Farm LLC",
   "capacity_mw":31.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.061,34.541 ]
   },
   "properties": {
   "name":"Longboat Solar  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6727,38.3947 ]
   },
   "properties": {
   "name":"Longview Solar",
   "capacity_mw":13.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6678,39.8667 ]
   },
   "properties": {
   "name":"Longwood Gardens",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2849,33.7831 ]
   },
   "properties": {
   "name":"Los Angeles Harbor College",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.7724,34.8331 ]
   },
   "properties": {
   "name":"Los Lunas Solar Energy Center",
   "capacity_mw":7,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.85,35.62 ]
   },
   "properties": {
   "name":"Lost Hills/Blackwell",
   "capacity_mw":32,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.3579,42.6265 ]
   },
   "properties": {
   "name":"Lowell Solar Landfill",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9065,38.9767 ]
   },
   "properties": {
   "name":"Lower Cape May HS",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5075,42.1822 ]
   },
   "properties": {
   "name":"Ludlow Landfill",
   "capacity_mw":2.6,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1916,38.5469 ]
   },
   "properties": {
   "name":"Luning Energy",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.4294,35.2411 ]
   },
   "properties": {
   "name":"Lux Solar  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.0144,39.8531 ]
   },
   "properties": {
   "name":"M. G. Emmett J. Bean Federal Center",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1397,35.8748 ]
   },
   "properties": {
   "name":"MC1 Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5972,41.5164 ]
   },
   "properties": {
   "name":"MCCo Solar Generating Facility",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5988,42.5441 ]
   },
   "properties": {
   "name":"MDFA Devens-Saratoga",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.1389,38.7729 ]
   },
   "properties": {
   "name":"MEBA",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7772,40.1483 ]
   },
   "properties": {
   "name":"MF Mesa Lane LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.821,35.575 ]
   },
   "properties": {
   "name":"MILL SOLAR 1",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0625,34.6953 ]
   },
   "properties": {
   "name":"Ma",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.48,32.57 ]
   },
   "properties": {
   "name":"Macho Springs",
   "capacity_mw":52.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4308,34.3197 ]
   },
   "properties": {
   "name":"Maclay Solar Project",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.46,39.76 ]
   },
   "properties": {
   "name":"Macon Solar Power Project",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.4146,33.4091 ]
   },
   "properties": {
   "name":"Macys Goodyear",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3236,34.7683 ]
   },
   "properties": {
   "name":"Madelyn Solar  LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.167,37.0565 ]
   },
   "properties": {
   "name":"Madera 1 PV",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.0467,36.9411 ]
   },
   "properties": {
   "name":"Madera Community Hospital",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.701,43.0283 ]
   },
   "properties": {
   "name":"Madison County",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.9379,46.2914 ]
   },
   "properties": {
   "name":"Magpie Solar  LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9756,43.6264 ]
   },
   "properties": {
   "name":"Main Street Solar Project",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3497,40.2567 ]
   },
   "properties": {
   "name":"Manalapan Village Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.3553,27.6075 ]
   },
   "properties": {
   "name":"Manatee Solar Energy Center",
   "capacity_mw":74.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2162,37.8401 ]
   },
   "properties": {
   "name":"Manteca Land PV",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.4294,34.7458 ]
   },
   "properties": {
   "name":"Manway Solar Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.6544,34.7467 ]
   },
   "properties": {
   "name":"Manzano Solar",
   "capacity_mw":8.4,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9808,39.4875 ]
   },
   "properties": {
   "name":"Maple Solar",
   "capacity_mw":2.4,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.9561,43.9289 ]
   },
   "properties": {
   "name":"Mapleton Community Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9637,38.4001 ]
   },
   "properties": {
   "name":"Mariani Packing Vacaville Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.3178,35.1153 ]
   },
   "properties": {
   "name":"Maricopa West Solar PV  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.1086,33.9432 ]
   },
   "properties": {
   "name":"Marietta",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.3772,37.9453 ]
   },
   "properties": {
   "name":"Marin Clean Energy Solar One",
   "capacity_mw":10.5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.2381,39.9131 ]
   },
   "properties": {
   "name":"Marion Solar LNG",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.0869,35.3739 ]
   },
   "properties": {
   "name":"Mariposa Solar Center LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.6472,36.3903 ]
   },
   "properties": {
   "name":"Market Farm",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.8294,39.8828 ]
   },
   "properties": {
   "name":"Marlboro Mushrooms Solar Field",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.8772,31.2867 ]
   },
   "properties": {
   "name":"Marlin Solar",
   "capacity_mw":5.3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.669,44.4753 ]
   },
   "properties": {
   "name":"Marshall Solar Energy Project",
   "capacity_mw":62.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.2104,39.0948 ]
   },
   "properties": {
   "name":"Marshall Solar Farm (MO)",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7094,42.1117 ]
   },
   "properties": {
   "name":"Marshfield PV",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.3836,34.9889 ]
   },
   "properties": {
   "name":"Marshville Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3861,36.2864 ]
   },
   "properties": {
   "name":"Martin Creek Farm LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0617,40.1078 ]
   },
   "properties": {
   "name":"Martin Limestone Solar Array",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0492,37.8805 ]
   },
   "properties": {
   "name":"Martin Solar Center",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.0157,35.0204 ]
   },
   "properties": {
   "name":"Martins Creek Solar NC  LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7203,39.5631 ]
   },
   "properties": {
   "name":"Maryland Solar",
   "capacity_mw":27,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.4779,41.63 ]
   },
   "properties": {
   "name":"Mashpee Landfill Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.8783,42.2197 ]
   },
   "properties": {
   "name":"Mass Midstate Solar 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.2001,42.1704 ]
   },
   "properties": {
   "name":"Mass Midstate Solar 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.8786,42.2197 ]
   },
   "properties": {
   "name":"Mass Midstate Solar 3",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.6054,40.6406 ]
   },
   "properties": {
   "name":"Masser Farms Realty Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.27,40.5344 ]
   },
   "properties": {
   "name":"Matrix Buildings A&B (Perth Amboy) Solar",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4797,40.3622 ]
   },
   "properties": {
   "name":"Matrix Stults Road Solar Facility",
   "capacity_mw":2.6,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3146,34.7147 ]
   },
   "properties": {
   "name":"Maxton Solar  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.6011,36.4767 ]
   },
   "properties": {
   "name":"Mayberry Solar LLC",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4356,42.4283 ]
   },
   "properties": {
   "name":"Maynard PV",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.2181,39.7439 ]
   },
   "properties": {
   "name":"Maywood Photovoltaic Project",
   "capacity_mw":8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3,34.5439 ]
   },
   "properties": {
   "name":"McCallum Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.2292,39.4836 ]
   },
   "properties": {
   "name":"McCormick & Co. Inc. at Belcamp",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.7397,33.6947 ]
   },
   "properties": {
   "name":"McCoy Solar Energy Project",
   "capacity_mw":270.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.474,39.5946 ]
   },
   "properties": {
   "name":"McDonald Solar Farm  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0627,34.8887 ]
   },
   "properties": {
   "name":"McGoogan Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5564,40.2797 ]
   },
   "properties": {
   "name":"McGraw Hill Solar",
   "capacity_mw":12,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6392,39.4219 ]
   },
   "properties": {
   "name":"McKee City Solar Phase 2",
   "capacity_mw":2.4,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6919,34.3239 ]
   },
   "properties": {
   "name":"McKenzie Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.52,34.81 ]
   },
   "properties": {
   "name":"Meadow Lake Solar Energy Center",
   "capacity_mw":9.1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1333,42.2301 ]
   },
   "properties": {
   "name":"Meadow Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.3859,35.5554 ]
   },
   "properties": {
   "name":"Meadowbrook Solar Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1269,35.8369 ]
   },
   "properties": {
   "name":"Meadows PV 1",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.3729,45.163 ]
   },
   "properties": {
   "name":"Medford DPC Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8067,39.9222 ]
   },
   "properties": {
   "name":"Medford WWTP",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3475,36.2487 ]
   },
   "properties": {
   "name":"Melinda Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4844,37.2678 ]
   },
   "properties": {
   "name":"Merced Solar LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6453,40.2558 ]
   },
   "properties": {
   "name":"Mercer County Community College",
   "capacity_mw":7.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6819,40.2906 ]
   },
   "properties": {
   "name":"Mercer Mall",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6437,38.3832 ]
   },
   "properties": {
   "name":"Merck",
   "capacity_mw":2.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.2831,40.2154 ]
   },
   "properties": {
   "name":"Merck - Upper Gwynedd Solar Array",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5669,35.6703 ]
   },
   "properties": {
   "name":"Meridian Vineyards",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6046,36.2889 ]
   },
   "properties": {
   "name":"Meriwether Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9919,42.8331 ]
   },
   "properties": {
   "name":"Merrimac Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.5091,39.0672 ]
   },
   "properties": {
   "name":"Mesa PV1",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.904,33.3418 ]
   },
   "properties": {
   "name":"Mesquite Solar 1",
   "capacity_mw":170,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.9114,33.3328 ]
   },
   "properties": {
   "name":"Mesquite Solar 2  LLC",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.9368,33.3476 ]
   },
   "properties": {
   "name":"Mesquite Solar 3  LLC",
   "capacity_mw":150,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.175,42.7447 ]
   },
   "properties": {
   "name":"Methuen Landfill",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2297,34.0578 ]
   },
   "properties": {
   "name":"Metro Support Services Center Solar",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2005
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.7083,45.6675 ]
   },
   "properties": {
   "name":"Michael Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.3713,32.9786 ]
   },
   "properties": {
   "name":"Middle Daisy",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.6875,41.6972 ]
   },
   "properties": {
   "name":"Middlebury Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4922,40.4264 ]
   },
   "properties": {
   "name":"Middlesex Apple Orchard Solar",
   "capacity_mw":4.7,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.5317,33.1621 ]
   },
   "properties": {
   "name":"Midway Solar Farm II",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.0394,39.4069 ]
   },
   "properties": {
   "name":"Midwest Energy Community Solar Array",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9496,36.2306 ]
   },
   "properties": {
   "name":"Mile Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.9908,38.3882 ]
   },
   "properties": {
   "name":"Milford 2",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.0083,38.2914 ]
   },
   "properties": {
   "name":"Milford Flat Solar Plant",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.4533,38.9231 ]
   },
   "properties": {
   "name":"Milford Solar Farm",
   "capacity_mw":11.8,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8247,40.0314 ]
   },
   "properties": {
   "name":"Mill Creek Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.1363,45.1696 ]
   },
   "properties": {
   "name":"Mill Creek Solar (OR)",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.7015,34.3071 ]
   },
   "properties": {
   "name":"Mill Pond Solar Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6195,41.8458 ]
   },
   "properties": {
   "name":"Millbrook School",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.795,42.1647 ]
   },
   "properties": {
   "name":"Millbury Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.7711,35.8177 ]
   },
   "properties": {
   "name":"Millikan Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.9358,34.9681 ]
   },
   "properties": {
   "name":"Mills Anson Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0331,39.3764 ]
   },
   "properties": {
   "name":"Millville City Sewer Auth WTP",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3489,36.1489 ]
   },
   "properties": {
   "name":"Milo Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3619,35.9481 ]
   },
   "properties": {
   "name":"Minnie Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5375,34.0131 ]
   },
   "properties": {
   "name":"Mira Loma",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.2936,35.4686 ]
   },
   "properties": {
   "name":"Misenheimer Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4825,37.2678 ]
   },
   "properties": {
   "name":"Mission Solar LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3236,34.765 ]
   },
   "properties": {
   "name":"Mitchell Solar  LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.7703,36.5299 ]
   },
   "properties": {
   "name":"Moapa Southern Paiute",
   "capacity_mw":250,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.5419,35.8786 ]
   },
   "properties": {
   "name":"Mocksville Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.5744,35.8339 ]
   },
   "properties": {
   "name":"Mocksville Solar",
   "capacity_mw":15.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1102,35.8503 ]
   },
   "properties": {
   "name":"Modlin Solar Farm",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.0031,32.6352 ]
   },
   "properties": {
   "name":"Moffett Solar Project",
   "capacity_mw":71.4,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.5565,34.9843 ]
   },
   "properties": {
   "name":"Mohave Electric at Fort Mohave",
   "capacity_mw":14.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3391,35.0177 ]
   },
   "properties": {
   "name":"Mojave Solar Project",
   "capacity_mw":280,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0325,35.5683 ]
   },
   "properties": {
   "name":"Moncure Farm LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.3922,43.1741 ]
   },
   "properties": {
   "name":"Monroe County Sites A & B",
   "capacity_mw":3.4,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7402,43.3188 ]
   },
   "properties": {
   "name":"Monroe County Sites C  D  & E",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.6019,34.9719 ]
   },
   "properties": {
   "name":"Monroe Moore Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.6256,34.9299 ]
   },
   "properties": {
   "name":"Monroe Solar Facility",
   "capacity_mw":60,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3325,42.1244 ]
   },
   "properties": {
   "name":"Monson Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.9047,45.0603 ]
   },
   "properties": {
   "name":"MontSun",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.2189,31.8131 ]
   },
   "properties": {
   "name":"Montana Solar Facility",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7878,36.7211 ]
   },
   "properties": {
   "name":"Monterey Regional Water Pollution Contro",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2932,39.2379 ]
   },
   "properties": {
   "name":"Montgomery County Correctional Facility",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.7683,35.3444 ]
   },
   "properties": {
   "name":"Montgomery Solar LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.0556,44.9517 ]
   },
   "properties": {
   "name":"Montgomery Winsted CSG",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.9228,45.0556 ]
   },
   "properties": {
   "name":"Montrose Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.7592,36.2732 ]
   },
   "properties": {
   "name":"Moore Solar Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8292,35.3058 ]
   },
   "properties": {
   "name":"Moorings Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8289,35.3057 ]
   },
   "properties": {
   "name":"Moorings Farm 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.8187,35.7314 ]
   },
   "properties": {
   "name":"Morelos del Sol",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.9076,44.4132 ]
   },
   "properties": {
   "name":"Morgan Community Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.152,36.0956 ]
   },
   "properties": {
   "name":"Morgan Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0836,34.6608 ]
   },
   "properties": {
   "name":"Morgan Lancaster 1",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.3642,36.4211 ]
   },
   "properties": {
   "name":"Morgan's Corner",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.8659,40.1521 ]
   },
   "properties": {
   "name":"Morgantown Solar Park",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1929,42.167 ]
   },
   "properties": {
   "name":"Morin Solar 2013 LLC",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0817,35.2019 ]
   },
   "properties": {
   "name":"Mount Olive Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.098,35.18 ]
   },
   "properties": {
   "name":"Mount Olive Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.345,39.675 ]
   },
   "properties": {
   "name":"Mount Saint Mary's",
   "capacity_mw":13.7,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.638,33.8388 ]
   },
   "properties": {
   "name":"Mount Vernon Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9644,36.3906 ]
   },
   "properties": {
   "name":"Mountain View Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0697,35.2181 ]
   },
   "properties": {
   "name":"Mt Olive Farm 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0969,35.1811 ]
   },
   "properties": {
   "name":"Mt Olive Solar 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.752,43.129 ]
   },
   "properties": {
   "name":"Mt. Home Solar 1  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.8318,42.975 ]
   },
   "properties": {
   "name":"Mt. Hope DPC Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.603,42.2686 ]
   },
   "properties": {
   "name":"Mt. Tom Solar Project",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.5867,35.1319 ]
   },
   "properties": {
   "name":"Mulberry Farm LLC",
   "capacity_mw":15.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5927,40.3503 ]
   },
   "properties": {
   "name":"Munich Re Plaza",
   "capacity_mw":2.4,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9955,36.2647 ]
   },
   "properties": {
   "name":"Munro Valley Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5206,35.6633 ]
   },
   "properties": {
   "name":"Murdock Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.1573,34.9992 ]
   },
   "properties": {
   "name":"Murphy Farm Power  LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.439,43.213 ]
   },
   "properties": {
   "name":"Murphy Flat Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4044,40.6844 ]
   },
   "properties": {
   "name":"Murray Hill Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.6637,42.7315 ]
   },
   "properties": {
   "name":"Musgrave East Solar Farm",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.6637,42.7315 ]
   },
   "properties": {
   "name":"Musgrave West Solar Farm",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.703,42.1052 ]
   },
   "properties": {
   "name":"NEDC Solar Site",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1612,40.0709 ]
   },
   "properties": {
   "name":"NES Rutgers Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4742,42.6108 ]
   },
   "properties": {
   "name":"NFM Solar Power LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.935,40.76 ]
   },
   "properties": {
   "name":"NHA at Mansfield NJ",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1883,39.3806 ]
   },
   "properties": {
   "name":"NJ Oak Solar Plant",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.11,40.7508 ]
   },
   "properties": {
   "name":"NJMC Landfill",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.4953,41.6798 ]
   },
   "properties": {
   "name":"NRG DG Crystal Spring",
   "capacity_mw":4.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1448,41.8015 ]
   },
   "properties": {
   "name":"NRG DG Dighton LLC",
   "capacity_mw":3.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1413,42.0561 ]
   },
   "properties": {
   "name":"NRG DG Foxborough Elm CSG",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1168,42.817 ]
   },
   "properties": {
   "name":"NRG DG Haverhill",
   "capacity_mw":4.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6723,42.2433 ]
   },
   "properties": {
   "name":"NRG DG Tufts Knoll LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6861,42.2376 ]
   },
   "properties": {
   "name":"NRG DG Tufts Science LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5136,42.4139 ]
   },
   "properties": {
   "name":"NRG DG Webster LLC",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.5212,41.767 ]
   },
   "properties": {
   "name":"NRG Renew Canal 1 CSG LLC",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.7444,33.5917 ]
   },
   "properties": {
   "name":"NRG Solar Blythe LLC",
   "capacity_mw":21,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.3508,33.2989 ]
   },
   "properties": {
   "name":"NRG Solar Borrego I",
   "capacity_mw":26,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.1754,36.0874 ]
   },
   "properties": {
   "name":"NRG Solar Las Vegas MB 2  LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.1778,36.0886 ]
   },
   "properties": {
   "name":"NRG Solar Las Vegas MB-1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.6714,44.5577 ]
   },
   "properties": {
   "name":"NRG Solar Mule  LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0767,34.6489 ]
   },
   "properties": {
   "name":"NRG Solar Oasis LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.0958,41.3884 ]
   },
   "properties": {
   "name":"Napoleon Solar I",
   "capacity_mw":8,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0308,36.0472 ]
   },
   "properties": {
   "name":"Nash 58 Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0925,35.9494 ]
   },
   "properties": {
   "name":"Nash 64 Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.2115,35.8493 ]
   },
   "properties": {
   "name":"Nash 97 Solar  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0106,36.0344 ]
   },
   "properties": {
   "name":"Nashville Farms  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.6731,36.6245 ]
   },
   "properties": {
   "name":"National Raisin",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.1911,34.5511 ]
   },
   "properties": {
   "name":"Navajo Solar Power Generation Station 1 LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.6814,35.6877 ]
   },
   "properties": {
   "name":"Naval Air Weapons Station China Lake",
   "capacity_mw":11.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7709,44.4623 ]
   },
   "properties": {
   "name":"Nebraska Valley Solar Farm",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5689,35.2898 ]
   },
   "properties": {
   "name":"Neisler Street Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.0544,36.2603 ]
   },
   "properties": {
   "name":"Nellis Air Force Base Solar Array",
   "capacity_mw":14,
   "primary_fuel":"Solar",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.0477,36.2067 ]
   },
   "properties": {
   "name":"Nellis Solar PV II",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.4989,35.7144 ]
   },
   "properties": {
   "name":"Neuse River Solar Farm",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9817,35.7998 ]
   },
   "properties": {
   "name":"Nevada Solar One",
   "capacity_mw":75.7,
   "primary_fuel":"Solar",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.649,41.9254 ]
   },
   "properties": {
   "name":"New Bedford (MA) Plymouth",
   "capacity_mw":4.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.0567,35.2096 ]
   },
   "properties": {
   "name":"New Bern Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.4034,39.8541 ]
   },
   "properties": {
   "name":"New Castle Solar RES",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.9889,38.1941 ]
   },
   "properties": {
   "name":"New Haven Solar RES",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.03,30.05 ]
   },
   "properties": {
   "name":"New Orleans Solar Power Plant",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.6831,34.8536 ]
   },
   "properties": {
   "name":"Newberry Solar 1 LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.4275,31.9783 ]
   },
   "properties": {
   "name":"Newman Solar",
   "capacity_mw":10.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3674,35.2516 ]
   },
   "properties": {
   "name":"Newton Grove",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2871,42.5621 ]
   },
   "properties": {
   "name":"Nexamp Peak CSG",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2266,44.0848 ]
   },
   "properties": {
   "name":"Next Generation Solar Farm",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1345,36.3818 ]
   },
   "properties": {
   "name":"NextEra Westside PV",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5481,35.9911 ]
   },
   "properties": {
   "name":"Nick Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.7165,35.6473 ]
   },
   "properties": {
   "name":"Nickel 1 Solar Facility",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0561,35.8358 ]
   },
   "properties": {
   "name":"Nicolis Solar PV Plant",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3139,35.4869 ]
   },
   "properties": {
   "name":"Nitro Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.339,37.0439 ]
   },
   "properties": {
   "name":"Nixa Solar  LLC",
   "capacity_mw":7.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2284,44.068 ]
   },
   "properties": {
   "name":"NorWest Energy 2  LLC",
   "capacity_mw":9.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.5658,34.2367 ]
   },
   "properties": {
   "name":"Nordhoff Place",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.092,42.6691 ]
   },
   "properties": {
   "name":"North Adams Landfill",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9664,38.3006 ]
   },
   "properties": {
   "name":"North Bay Solar 1",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.017,40.818 ]
   },
   "properties": {
   "name":"North Bergen Solar",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0531,42.2781 ]
   },
   "properties": {
   "name":"North Brookfield",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5258,34.7047 ]
   },
   "properties": {
   "name":"North Carolina Solar Bethea I",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5597,34.7667 ]
   },
   "properties": {
   "name":"North Carolina Solar III LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.3236,40.7631 ]
   },
   "properties": {
   "name":"North County",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.1486,33.6561 ]
   },
   "properties": {
   "name":"North Gainesville Solar",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4947,40.9242 ]
   },
   "properties": {
   "name":"North Jersey Media Group Solar Facility",
   "capacity_mw":4.1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.313,34.7195 ]
   },
   "properties": {
   "name":"North Lancaster Ranch",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0383,36.0703 ]
   },
   "properties": {
   "name":"North Nash Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.5933,33.9242 ]
   },
   "properties": {
   "name":"North Palm Springs 1A",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.5625,33.9097 ]
   },
   "properties": {
   "name":"North Palm Springs 4A",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5848,40.0696 ]
   },
   "properties": {
   "name":"North Run",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.41,36.73 ]
   },
   "properties": {
   "name":"North Star Solar",
   "capacity_mw":62.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.91,45.47 ]
   },
   "properties": {
   "name":"North Star Solar Project",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.714,42.2937 ]
   },
   "properties": {
   "name":"Northampton Landfill Solar PV",
   "capacity_mw":2.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6456,42.1664 ]
   },
   "properties": {
   "name":"Northbridge Solar",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.1983,44.4754 ]
   },
   "properties": {
   "name":"Northfield Community Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.1246,44.4579 ]
   },
   "properties": {
   "name":"Northfield Holdco CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1505,41.9596 ]
   },
   "properties": {
   "name":"Norton Landfill Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.1544,34.5092 ]
   },
   "properties": {
   "name":"Nunn",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.505,41.3589 ]
   },
   "properties": {
   "name":"Nunnepog",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.6781,38.8266 ]
   },
   "properties": {
   "name":"O'Fallon Renewable Energy Center",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.2001,42.378 ]
   },
   "properties": {
   "name":"O'Shea Solar Farm",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.3319,29.4694 ]
   },
   "properties": {
   "name":"OCI Alamo 2  LLC",
   "capacity_mw":4.4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.2972,29.4792 ]
   },
   "properties": {
   "name":"OCI Alamo 3 LLC",
   "capacity_mw":5.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.3839,29.3289 ]
   },
   "properties": {
   "name":"OCI Alamo 4  LLC",
   "capacity_mw":39.6,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.7161,29.2167 ]
   },
   "properties": {
   "name":"OCI Alamo 5 LLC",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.5525,33.04 ]
   },
   "properties": {
   "name":"OCI Alamo 7 LLC",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.4447,29.2717 ]
   },
   "properties": {
   "name":"OCI Alamo Solar I",
   "capacity_mw":41.7,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4189,42.0223 ]
   },
   "properties": {
   "name":"OR Solar 3  LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3678,42.209 ]
   },
   "properties": {
   "name":"OR Solar 6  LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.228,44.061 ]
   },
   "properties": {
   "name":"OSLH  LLC",
   "capacity_mw":9.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5383,34.7958 ]
   },
   "properties": {
   "name":"Oakboro Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7478,38.0017 ]
   },
   "properties": {
   "name":"Oakley Solar Project",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.227,41.3028 ]
   },
   "properties": {
   "name":"Oberlin Spear Point Solar One",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2069,34.1283 ]
   },
   "properties": {
   "name":"Occidental College Solar Project",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0514,36.7898 ]
   },
   "properties": {
   "name":"Oceana Solar",
   "capacity_mw":17.6,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.266,33.79 ]
   },
   "properties": {
   "name":"Odyssey Solar",
   "capacity_mw":8.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.8391,40.7596 ]
   },
   "properties": {
   "name":"Ohio Northern University Solar Site",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1342,35.7117 ]
   },
   "properties": {
   "name":"Old Catawba PV 1",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.9818,32.8207 ]
   },
   "properties": {
   "name":"Old Midville Solar",
   "capacity_mw":19.7,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.0464,42.2033 ]
   },
   "properties": {
   "name":"Old Mill Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.4819,34.9523 ]
   },
   "properties": {
   "name":"Old Pageland Monroe Road Solar Farm",
   "capacity_mw":5.3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0375,42.2376 ]
   },
   "properties": {
   "name":"Old Wardour Solar",
   "capacity_mw":5.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5139,34.8178 ]
   },
   "properties": {
   "name":"Old Wire Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.49,41.7 ]
   },
   "properties": {
   "name":"OlivePV",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5311,34.0439 ]
   },
   "properties": {
   "name":"Oltmans SCE at Champagne",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5961,34.05 ]
   },
   "properties": {
   "name":"Oltmans SCE at Jurupa",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9366,34.6156 ]
   },
   "properties": {
   "name":"One Ten Partners PV",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3869,43.1664 ]
   },
   "properties": {
   "name":"Oneida - South",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.4049,43.1696 ]
   },
   "properties": {
   "name":"Oneida - West",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3713,43.1508 ]
   },
   "properties": {
   "name":"Oneida County- DPW",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.2241,43.1838 ]
   },
   "properties": {
   "name":"Onondaga County - Metro Water Board",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.1301,43.1727 ]
   },
   "properties": {
   "name":"Onondaga County - Oak Orchard WWTP",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.5157,43.4293 ]
   },
   "properties": {
   "name":"Onondaga County- Clearwater",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.6537,41.757 ]
   },
   "properties": {
   "name":"Onset East Solar Facility",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.6537,41.757 ]
   },
   "properties": {
   "name":"Onset West Solar Facility",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.2888,38.7175 ]
   },
   "properties": {
   "name":"Onyx - Allen Harim",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9834,42.0664 ]
   },
   "properties": {
   "name":"Onyx - Brockton Thatcher Landfill Solar",
   "capacity_mw":3.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.4767,43.1841 ]
   },
   "properties": {
   "name":"Onyx - Lamphear Road",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.8024,42.0499 ]
   },
   "properties": {
   "name":"Onyx - Pembroke Landfill Solar",
   "capacity_mw":2.4,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.7449,43.0969 ]
   },
   "properties": {
   "name":"Onyx - Saratoga Springs Landfill Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0653,43.7968 ]
   },
   "properties": {
   "name":"Open Range Solar Center  LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2039,44.1394 ]
   },
   "properties": {
   "name":"Open View Solar Farm",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3595,41.4049 ]
   },
   "properties": {
   "name":"Orange County Solar Farm (NY)",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.2939,42.585 ]
   },
   "properties": {
   "name":"Orange PV",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.285,43.467 ]
   },
   "properties": {
   "name":"Orchard Ranch Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.6632,45.5285 ]
   },
   "properties": {
   "name":"Oregon Convention Center",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.785,42.2542 ]
   },
   "properties": {
   "name":"Oregon University System OIT Klamath Fal",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.317,44.5735 ]
   },
   "properties": {
   "name":"Oregon University System Rabbit Field",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -67.0443,18.4729 ]
   },
   "properties": {
   "name":"Oriana Solar Farm",
   "capacity_mw":57.65,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.4014,45.5879 ]
   },
   "properties": {
   "name":"Orion Community Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.875,35.1507 ]
   },
   "properties": {
   "name":"Orion Solar I",
   "capacity_mw":12,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.8753,35.1507 ]
   },
   "properties": {
   "name":"Orion Solar II",
   "capacity_mw":8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6676,36.8768 ]
   },
   "properties": {
   "name":"Oro Loma",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2417,28.0581 ]
   },
   "properties": {
   "name":"Osceola Solar Facility",
   "capacity_mw":3.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.0514,33.9324 ]
   },
   "properties": {
   "name":"Otarre Solar Park",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.9711,32.9764 ]
   },
   "properties": {
   "name":"Otero Solar",
   "capacity_mw":8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.1919,34.545 ]
   },
   "properties": {
   "name":"Otoe Solar Power Generation Station 1 LL",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.2448,36.0841 ]
   },
   "properties": {
   "name":"Ouchchy PV1",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.49,43.2369 ]
   },
   "properties": {
   "name":"Outback Solar At Christmas Valley",
   "capacity_mw":4.4,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.3153,35.5861 ]
   },
   "properties": {
   "name":"Owen Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.5364,41.6447 ]
   },
   "properties": {
   "name":"Owens Corning Headquarters",
   "capacity_mw":2.1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.865,42.5869 ]
   },
   "properties": {
   "name":"Owens Corning at Bethlehem",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0122,36.2751 ]
   },
   "properties": {
   "name":"Owens Valley Solar Project 11",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.8508,42.1413 ]
   },
   "properties": {
   "name":"Oxford",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.0823,36.1643 ]
   },
   "properties": {
   "name":"Ozarks Natural Energy",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.8522,40.8601 ]
   },
   "properties": {
   "name":"PA Solar Park",
   "capacity_mw":10.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9675,36.3125 ]
   },
   "properties": {
   "name":"PCIP Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9861,36.2881 ]
   },
   "properties": {
   "name":"PCSP3 Airport",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3783,40.7274 ]
   },
   "properties": {
   "name":"PPL Renewable Energy Merck Solar",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8229,40.8606 ]
   },
   "properties": {
   "name":"PSEG Hackettstown",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5658,34.0384 ]
   },
   "properties": {
   "name":"PVN Milliken  LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2772,33.7331 ]
   },
   "properties": {
   "name":"Pacific Cruise Ship Terminals Berth 93",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.065,41.8533 ]
   },
   "properties": {
   "name":"Padelford Solar",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3155,42.2166 ]
   },
   "properties": {
   "name":"Palmer Landfill",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.231,37.9672 ]
   },
   "properties": {
   "name":"Palmer Solar Center",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3656,42.1872 ]
   },
   "properties": {
   "name":"Palmer Solar LLC",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.6517,33.6617 ]
   },
   "properties": {
   "name":"Palo Verde College",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.6614,33.0211 ]
   },
   "properties": {
   "name":"Paloma Solar",
   "capacity_mw":17.6,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.87,35.5011 ]
   },
   "properties": {
   "name":"Pamlico Partners Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.7815,39.8087 ]
   },
   "properties": {
   "name":"Panasonic Carport Solar",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.2225,39.8358 ]
   },
   "properties": {
   "name":"Paradise Solar Energy Center",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.9997,33.6416 ]
   },
   "properties": {
   "name":"Paradise Valley H.S. PV",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2836,33.8961 ]
   },
   "properties": {
   "name":"Park Meridian #1",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7108,40.1275 ]
   },
   "properties": {
   "name":"Parkland Landfill Solar",
   "capacity_mw":7.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3289,40.4567 ]
   },
   "properties": {
   "name":"Parlin Solar LLC",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.3061,36.2647 ]
   },
   "properties": {
   "name":"Pasquotank",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.1816,39.5209 ]
   },
   "properties": {
   "name":"Pastime Farm  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1994,34.8167 ]
   },
   "properties": {
   "name":"Pate Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5514,40.5606 ]
   },
   "properties": {
   "name":"Patriots Stadium",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.3633,38.9605 ]
   },
   "properties": {
   "name":"Pavant Solar  LLC",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.343,39.1625 ]
   },
   "properties": {
   "name":"Pavant Solar II LLC",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.3598,39.1545 ]
   },
   "properties": {
   "name":"Pavant Solar III",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.2568,32.5729 ]
   },
   "properties": {
   "name":"Pawpaw Solar Plant",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.7155,45.4025 ]
   },
   "properties": {
   "name":"Paynesville Community Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.7212,45.3929 ]
   },
   "properties": {
   "name":"Paynesville Solar",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -157.9681,21.3756 ]
   },
   "properties": {
   "name":"Pearl City Peninsula Solar Park",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.2683,30.9878 ]
   },
   "properties": {
   "name":"Pearl Solar",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.8294,34.9092 ]
   },
   "properties": {
   "name":"Pecan PV1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.1247,45.4955 ]
   },
   "properties": {
   "name":"Pegasus Community Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6974,39.9818 ]
   },
   "properties": {
   "name":"Pemberton Road I",
   "capacity_mw":9.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7019,39.9799 ]
   },
   "properties": {
   "name":"Pemberton Road II",
   "capacity_mw":9.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.04,39.9894 ]
   },
   "properties": {
   "name":"Pennsauken Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.602,38.7577 ]
   },
   "properties": {
   "name":"Perdue Bridgeville Photovoltaic",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.5353,38.3736 ]
   },
   "properties": {
   "name":"Perdue Salisbury Photovoltaic",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.972,36.4374 ]
   },
   "properties": {
   "name":"Perkins Solar  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.5601,30.1193 ]
   },
   "properties": {
   "name":"Perry Solar Facility",
   "capacity_mw":5.1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3,42.1 ]
   },
   "properties": {
   "name":"Peterson Road Solar",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.3936,39.4276 ]
   },
   "properties": {
   "name":"Pfeffers",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6634,40.7119 ]
   },
   "properties": {
   "name":"Pfizer Peapack Solar",
   "capacity_mw":6.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.8451,31.115 ]
   },
   "properties": {
   "name":"Phantom Solar",
   "capacity_mw":15.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.287,37.3418 ]
   },
   "properties": {
   "name":"Philip Morris",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.9842,33.4345 ]
   },
   "properties": {
   "name":"Phoenix Airport East Economy Lot",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.0448,33.4304 ]
   },
   "properties": {
   "name":"Phoenix Airport Rental Car Center",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.4881,40.1206 ]
   },
   "properties": {
   "name":"Pickering Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.2428,32.3697 ]
   },
   "properties": {
   "name":"Picture Rocks Solar  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.5747,34.1836 ]
   },
   "properties": {
   "name":"Pierce College",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.307,44.3888 ]
   },
   "properties": {
   "name":"Pierre Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.7458,38.7745 ]
   },
   "properties": {
   "name":"Pikes Peak Solar Garden 1 LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9792,35.4782 ]
   },
   "properties": {
   "name":"Pikeville Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.3095,39.613 ]
   },
   "properties": {
   "name":"Pilesgrove",
   "capacity_mw":18,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.9906,32.1461 ]
   },
   "properties": {
   "name":"Pima Community College",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.6636,44.2066 ]
   },
   "properties": {
   "name":"Pine Island Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.6543,44.2201 ]
   },
   "properties": {
   "name":"Pine Island Solar CSG",
   "capacity_mw":3.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.4447,35.0134 ]
   },
   "properties": {
   "name":"Pine Ridge",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1957,35.2296 ]
   },
   "properties": {
   "name":"Pine Tree Solar Project",
   "capacity_mw":8.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1793,39.539 ]
   },
   "properties": {
   "name":"Pittsgrove Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4394,40.605 ]
   },
   "properties": {
   "name":"Plainfield One Solar LLC",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.908,36.408 ]
   },
   "properties": {
   "name":"Playa Solar",
   "capacity_mw":79,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.908,36.408 ]
   },
   "properties": {
   "name":"Playa Solar 2",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.6971,33.7368 ]
   },
   "properties": {
   "name":"Pleasant Valley Solar",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72,42.4 ]
   },
   "properties": {
   "name":"Pleasantdale Road Community Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7786,41.96 ]
   },
   "properties": {
   "name":"Plymouth Site 1",
   "capacity_mw":5.6,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.7106,35.875 ]
   },
   "properties": {
   "name":"Plymouth Solar LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.5149,41.061 ]
   },
   "properties": {
   "name":"Pocono Solar Project",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.219,34.998 ]
   },
   "properties": {
   "name":"Pollocksville Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.5262,45.6434 ]
   },
   "properties": {
   "name":"PopeSun CSG  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -159.5817,21.9019 ]
   },
   "properties": {
   "name":"Port Allen Solar",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1261,40.6381 ]
   },
   "properties": {
   "name":"Port Richmond WWT Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.28,33.728 ]
   },
   "properties": {
   "name":"Port of LA Solar FiT Project",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.1555,41.5611 ]
   },
   "properties": {
   "name":"Portage Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2821,34.7165 ]
   },
   "properties": {
   "name":"Portal Ridge Solar B  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2739,34.7141 ]
   },
   "properties": {
   "name":"Portal Ridge Solar C  LLC",
   "capacity_mw":11.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.0743,35.2167 ]
   },
   "properties": {
   "name":"Porter Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.02,36.05 ]
   },
   "properties": {
   "name":"Porterville 6 and 7",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0397,36.1028 ]
   },
   "properties": {
   "name":"Porterville Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.145,34.4969 ]
   },
   "properties": {
   "name":"Powhatan Solar Power Generation Station 1 LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.82,32.1164 ]
   },
   "properties": {
   "name":"Prairie Fire",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.0745,37.7517 ]
   },
   "properties": {
   "name":"Prairie Sky Solar Farm",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.5163,39.4476 ]
   },
   "properties": {
   "name":"Presbyterian Senior Living Service",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.4008,34.6584 ]
   },
   "properties": {
   "name":"Prescott Airport",
   "capacity_mw":2.1,
   "primary_fuel":"Solar",
   "commissioning_year":2002
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.4275,34.6494 ]
   },
   "properties": {
   "name":"Prescott Solar Plant",
   "capacity_mw":10.8,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1922,35.5044 ]
   },
   "properties": {
   "name":"Princeton",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6257,40.3797 ]
   },
   "properties": {
   "name":"Princeton Solar Project",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.4472,34.7564 ]
   },
   "properties": {
   "name":"Progress Manis I",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.2508,35.9481 ]
   },
   "properties": {
   "name":"Progress Solar 1  LLC",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0975,34.4761 ]
   },
   "properties": {
   "name":"Progress Solar II  LLC",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3539,34.7142 ]
   },
   "properties": {
   "name":"Progress Solar III  LLC",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.0478,35.5783 ]
   },
   "properties": {
   "name":"Providence Solar",
   "capacity_mw":16,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2971,40.8146 ]
   },
   "properties": {
   "name":"Prudential 55 Livingston Roseland Solar",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.305,40.8154 ]
   },
   "properties": {
   "name":"Prudential 80 Livingston Roseland Solar",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.6225,35.3056 ]
   },
   "properties": {
   "name":"Pumpjack Solar I",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9939,38.5211 ]
   },
   "properties": {
   "name":"Putah Creek Solar Farm",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6731,35.9222 ]
   },
   "properties": {
   "name":"QVC Inc",
   "capacity_mw":3.9,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0164,39.0317 ]
   },
   "properties": {
   "name":"Queen Anne's County",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.6122,33.2675 ]
   },
   "properties": {
   "name":"Queen Creek Solar Farm",
   "capacity_mw":19,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.6094,36.7169 ]
   },
   "properties": {
   "name":"Questa Solar Facility",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.2167,37.6582 ]
   },
   "properties": {
   "name":"Quichapa 1",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.189,37.6668 ]
   },
   "properties": {
   "name":"Quichapa 2",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.2369,37.6498 ]
   },
   "properties": {
   "name":"Quichapa 3",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.8078,35.0717 ]
   },
   "properties": {
   "name":"Quincy Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.0522,37.1303 ]
   },
   "properties": {
   "name":"Quinto Solar PV Project",
   "capacity_mw":108,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9133,41.7819 ]
   },
   "properties": {
   "name":"Quittacas Pond Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6501,40.4836 ]
   },
   "properties": {
   "name":"RB Manufacturing LLC Belle Mead NJ",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.1815,33.5226 ]
   },
   "properties": {
   "name":"RCWD PV Project",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2908,36.6175 ]
   },
   "properties": {
   "name":"RE Adams East  LLC",
   "capacity_mw":19,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.8314,32.367 ]
   },
   "properties": {
   "name":"RE Ajo 1 LLC",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4585,34.8442 ]
   },
   "properties": {
   "name":"RE Astoria",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4802,34.8366 ]
   },
   "properties": {
   "name":"RE Astoria 2",
   "capacity_mw":75,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.1772,34.5858 ]
   },
   "properties": {
   "name":"RE Bagdad Solar I LLC",
   "capacity_mw":16.6,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0687,35.2047 ]
   },
   "properties": {
   "name":"RE Barren Ridge 1",
   "capacity_mw":60,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4128,38.3475 ]
   },
   "properties": {
   "name":"RE Bruceville 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4128,38.3475 ]
   },
   "properties": {
   "name":"RE Bruceville 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4128,38.3475 ]
   },
   "properties": {
   "name":"RE Bruceville 3",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1856,35.0267 ]
   },
   "properties": {
   "name":"RE Camelot LLC",
   "capacity_mw":45,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1856,35.0267 ]
   },
   "properties": {
   "name":"RE Columbia Two  LLC",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1819,38.4686 ]
   },
   "properties": {
   "name":"RE Dillard 1",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1778,38.4661 ]
   },
   "properties": {
   "name":"RE Dillard 2",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1803,38.4619 ]
   },
   "properties": {
   "name":"RE Dillard 3",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.525,34.8253 ]
   },
   "properties": {
   "name":"RE Garland",
   "capacity_mw":185,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4974,34.8215 ]
   },
   "properties": {
   "name":"RE Garland A",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.3811,38.3651 ]
   },
   "properties": {
   "name":"RE Kammerer 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.3811,38.3651 ]
   },
   "properties": {
   "name":"RE Kammerer 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.3811,38.3651 ]
   },
   "properties": {
   "name":"RE Kammerer 3",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.8339,36.2478 ]
   },
   "properties": {
   "name":"RE Kansas Solar  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.8342,36.2261 ]
   },
   "properties": {
   "name":"RE Kansas South LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.9053,36.2261 ]
   },
   "properties": {
   "name":"RE Kent South  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2958,38.3026 ]
   },
   "properties": {
   "name":"RE McKenzie 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2958,38.3026 ]
   },
   "properties": {
   "name":"RE McKenzie 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2958,38.3026 ]
   },
   "properties": {
   "name":"RE McKenzie 3",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2958,38.3026 ]
   },
   "properties": {
   "name":"RE McKenzie 4",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2958,38.3026 ]
   },
   "properties": {
   "name":"RE McKenzie 5",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2958,38.3026 ]
   },
   "properties": {
   "name":"RE McKenzie 6",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.9031,36.2217 ]
   },
   "properties": {
   "name":"RE Mustang LLC",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0889,35.2233 ]
   },
   "properties": {
   "name":"RE Old River One  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.3067,30.9602 ]
   },
   "properties": {
   "name":"RE Roserock",
   "capacity_mw":160,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.4045,36.5814 ]
   },
   "properties": {
   "name":"RE Tranquillity",
   "capacity_mw":205.3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4775,34.5123 ]
   },
   "properties": {
   "name":"RE Victor Phelan Solar One LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.9782,42.4318 ]
   },
   "properties": {
   "name":"RGS-Rutland VNM SREC II Project (MA)",
   "capacity_mw":2.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1822,28.4889 ]
   },
   "properties": {
   "name":"RP-Orlando  LLC",
   "capacity_mw":5.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.1471,40.5928 ]
   },
   "properties": {
   "name":"RV CSU Power II LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.1459,40.5911 ]
   },
   "properties": {
   "name":"RV CSU Power LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2881,34.6656 ]
   },
   "properties": {
   "name":"Radiance Solar 4",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2869,34.6656 ]
   },
   "properties": {
   "name":"Radiance Solar 5",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.2119,34.9689 ]
   },
   "properties": {
   "name":"Raeford Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.3638,42.2431 ]
   },
   "properties": {
   "name":"Rail Trail",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9708,34.82 ]
   },
   "properties": {
   "name":"Railroad Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9505,34.8079 ]
   },
   "properties": {
   "name":"Railroad Farm 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.1012,43.998 ]
   },
   "properties": {
   "name":"Railroad Solar Center  LLC",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.875,33.0122 ]
   },
   "properties": {
   "name":"Ramona 1",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.875,33.0122 ]
   },
   "properties": {
   "name":"Ramona 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.8607,33.0185 ]
   },
   "properties": {
   "name":"Ramona Solar Energy",
   "capacity_mw":4.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.3161,35.64 ]
   },
   "properties": {
   "name":"Rams Horn Solar Center LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.1541,36.4726 ]
   },
   "properties": {
   "name":"Ranchland Solar  LLC",
   "capacity_mw":60,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5528,34.1003 ]
   },
   "properties": {
   "name":"Rancho Cucamonga Dist #1",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1145,38.3399 ]
   },
   "properties": {
   "name":"Rancho Seco Solar  LLC",
   "capacity_mw":10.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0774,42.1776 ]
   },
   "properties": {
   "name":"Randolph",
   "capacity_mw":3.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6542,40.5744 ]
   },
   "properties": {
   "name":"Raritan ITS",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8579,40.4642 ]
   },
   "properties": {
   "name":"Raritan Solar",
   "capacity_mw":7.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1411,36.4044 ]
   },
   "properties": {
   "name":"Red Hill Solar Center  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.0881,32.2861 ]
   },
   "properties": {
   "name":"Red Horse 2",
   "capacity_mw":81,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.0513,32.136 ]
   },
   "properties": {
   "name":"Red Horse III",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9335,35.993 ]
   },
   "properties": {
   "name":"Red Oak Solar Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.2892,32.551 ]
   },
   "properties": {
   "name":"Red Rock",
   "capacity_mw":40,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3709,35.6042 ]
   },
   "properties": {
   "name":"Red Toad 1425 A Powatan Road  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.5161,44.5351 ]
   },
   "properties": {
   "name":"Red Wing Solar",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.6148,41.8291 ]
   },
   "properties": {
   "name":"Redbrook Community Solar 1",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.8128,35.3219 ]
   },
   "properties": {
   "name":"Redcrest Solar Farm",
   "capacity_mw":16.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.6658,35.7108 ]
   },
   "properties": {
   "name":"Redmon Solar Farm LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.6116,34.611 ]
   },
   "properties": {
   "name":"Redstone Arsenal",
   "capacity_mw":11,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.8119,35.3142 ]
   },
   "properties": {
   "name":"Redwood 4 Solar Farm",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8136,39.9267 ]
   },
   "properties": {
   "name":"Reeves South",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8144,39.9283 ]
   },
   "properties": {
   "name":"Reeves Station Rd East",
   "capacity_mw":5.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.8519,35.3 ]
   },
   "properties": {
   "name":"Regulus Solar Project",
   "capacity_mw":60,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2425,41.9017 ]
   },
   "properties": {
   "name":"Rehoboth Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7764,38.5483 ]
   },
   "properties": {
   "name":"Remington Solar Facility",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.2891,44.2595 ]
   },
   "properties": {
   "name":"Rengstorf Solar CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.3789,32.638 ]
   },
   "properties": {
   "name":"Richland Solar Center",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.5138,45.4586 ]
   },
   "properties": {
   "name":"Richmond CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.961,32.465 ]
   },
   "properties": {
   "name":"Ridgeland Solar Project",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2844,32.2929 ]
   },
   "properties": {
   "name":"Rincon Solar I",
   "capacity_mw":18.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.3533,28.7706 ]
   },
   "properties": {
   "name":"Rinehart",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.6825,35.4161 ]
   },
   "properties": {
   "name":"Rio Bravo Solar 1 LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.6292,35.4225 ]
   },
   "properties": {
   "name":"Rio Bravo Solar II LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.683,34.5826 ]
   },
   "properties": {
   "name":"Rio Communities Solar Energy Center",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1645,35.0074 ]
   },
   "properties": {
   "name":"Rio Grande Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.6678,35.2644 ]
   },
   "properties": {
   "name":"Rio Rancho High School",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.0081,31.5 ]
   },
   "properties": {
   "name":"Rio Rico Solar",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.3445,42.2286 ]
   },
   "properties": {
   "name":"Rising Paper",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.8422,34.8315 ]
   },
   "properties": {
   "name":"River Bend Solar  LLC",
   "capacity_mw":75,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -109.5652,45.7038 ]
   },
   "properties": {
   "name":"River Bend Solar  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9294,36.0316 ]
   },
   "properties": {
   "name":"River Mountains Solar",
   "capacity_mw":14.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.842,36.351 ]
   },
   "properties": {
   "name":"River Road Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1142,40.7278 ]
   },
   "properties": {
   "name":"River Terminal Development Solar",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2322,40.8261 ]
   },
   "properties": {
   "name":"Riverhead",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.1258,39.9031 ]
   },
   "properties": {
   "name":"Riverside Renewable Energy LLC",
   "capacity_mw":7.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.6733,31.7928 ]
   },
   "properties": {
   "name":"Roadrunner Solar",
   "capacity_mw":20.2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.8917,37.8583 ]
   },
   "properties": {
   "name":"Robert O Schulz Solar Farm",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.6097,34.9656 ]
   },
   "properties": {
   "name":"Rock Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.2316,39.1444 ]
   },
   "properties": {
   "name":"Rock Hall",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2258,40.2297 ]
   },
   "properties": {
   "name":"Rock Solid",
   "capacity_mw":8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.8749,38.5915 ]
   },
   "properties": {
   "name":"Rockfish Solar LLC",
   "capacity_mw":10.3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.0883,42.1753 ]
   },
   "properties": {
   "name":"Rockford Solar Farm",
   "capacity_mw":2.6,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.6037,34.9807 ]
   },
   "properties": {
   "name":"Rockingham Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.8978,42.0892 ]
   },
   "properties": {
   "name":"Rockland Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.3011,39.7631 ]
   },
   "properties": {
   "name":"Rockville Solar I LLC",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.3,39.7669 ]
   },
   "properties": {
   "name":"Rockville Solar II  LLC",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.4747,35.5417 ]
   },
   "properties": {
   "name":"Rockwell Solar LLC",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2894,34.7133 ]
   },
   "properties": {
   "name":"Rodeo Solar C2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2894,34.7133 ]
   },
   "properties": {
   "name":"Rodeo Solar D2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.0331,32.2894 ]
   },
   "properties": {
   "name":"Roger Road WWTP",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.7169,37.9853 ]
   },
   "properties": {
   "name":"Rolla Solar Farm (MO)",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0389,40.9361 ]
   },
   "properties": {
   "name":"Romark PA Solar",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.4407,35.1875 ]
   },
   "properties": {
   "name":"Roper Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2469,34.9 ]
   },
   "properties": {
   "name":"Rosamond One",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2383,34.9003 ]
   },
   "properties": {
   "name":"Rosamond Two",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9697,34.8239 ]
   },
   "properties": {
   "name":"Rose Hill",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.0229,44.7224 ]
   },
   "properties": {
   "name":"Rosemount Community Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1071,35.4375 ]
   },
   "properties": {
   "name":"Rosewood Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.4611,33.4529 ]
   },
   "properties": {
   "name":"Roswell Solar  LLC",
   "capacity_mw":70,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6642,42.0589 ]
   },
   "properties": {
   "name":"Route 57 Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9174,36.4797 ]
   },
   "properties": {
   "name":"Roxboro Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6222,36.3268 ]
   },
   "properties": {
   "name":"Roxboro Solar Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.689,35.216 ]
   },
   "properties": {
   "name":"Royal Solar",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1002,40.6636 ]
   },
   "properties": {
   "name":"Royal Wine Corp Solar Power Plant",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3236,34.7664 ]
   },
   "properties": {
   "name":"Rudy Solar  LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.022,35.274 ]
   },
   "properties": {
   "name":"Ruskin Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.1631,34.6439 ]
   },
   "properties": {
   "name":"Rutan",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.8306,35.2578 ]
   },
   "properties": {
   "name":"Rutherford Farm",
   "capacity_mw":61,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.7503,35.8136 ]
   },
   "properties": {
   "name":"SAS Solar Farm",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.5865,38.6902 ]
   },
   "properties": {
   "name":"SCDA Solar 1",
   "capacity_mw":7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5628,34.4739 ]
   },
   "properties": {
   "name":"SCE-Snowline-Duncan Road (North)",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5622,34.4714 ]
   },
   "properties": {
   "name":"SCE-Snowline-Duncan Road (South)",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.47,34.4153 ]
   },
   "properties": {
   "name":"SCE-Snowline-White Rd (Central)",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4697,34.4175 ]
   },
   "properties": {
   "name":"SCE-Snowline-White Road (North)",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4708,34.4131 ]
   },
   "properties": {
   "name":"SCE-Snowline-White Road (South)",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.1214,32.9061 ]
   },
   "properties": {
   "name":"SDCCD - Miramar",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.1706,33.21 ]
   },
   "properties": {
   "name":"SDCWA - Twin Oaks",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5558,35.0069 ]
   },
   "properties": {
   "name":"SEGS III",
   "capacity_mw":34.2,
   "primary_fuel":"Solar",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5557,35.0122 ]
   },
   "properties": {
   "name":"SEGS IV",
   "capacity_mw":34.2,
   "primary_fuel":"Solar",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.338,35.033 ]
   },
   "properties": {
   "name":"SEGS IX",
   "capacity_mw":92,
   "primary_fuel":"Solar",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5555,35.0195 ]
   },
   "properties": {
   "name":"SEGS V",
   "capacity_mw":34.2,
   "primary_fuel":"Solar",
   "commissioning_year":1987
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5661,35.021 ]
   },
   "properties": {
   "name":"SEGS VI",
   "capacity_mw":35,
   "primary_fuel":"Solar",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5659,35.0148 ]
   },
   "properties": {
   "name":"SEGS VII",
   "capacity_mw":35,
   "primary_fuel":"Solar",
   "commissioning_year":1989
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3563,35.0308 ]
   },
   "properties": {
   "name":"SEGS VIII",
   "capacity_mw":92,
   "primary_fuel":"Solar",
   "commissioning_year":1990
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9394,34.6189 ]
   },
   "properties": {
   "name":"SEPV 1",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9344,34.6136 ]
   },
   "properties": {
   "name":"SEPV 18",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.1528,34.1742 ]
   },
   "properties": {
   "name":"SEPV 2",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.1525,34.1719 ]
   },
   "properties": {
   "name":"SEPV 8",
   "capacity_mw":12,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.7734,32.792 ]
   },
   "properties": {
   "name":"SEPV Imperial Dixieland East",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.7793,32.7941 ]
   },
   "properties": {
   "name":"SEPV Imperial Dixieland West",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2827,35.0229 ]
   },
   "properties": {
   "name":"SEPV Mojave West",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9389,34.6131 ]
   },
   "properties": {
   "name":"SEPV Palmdale East",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.0903,34.1922 ]
   },
   "properties": {
   "name":"SEPV9 Power Plant",
   "capacity_mw":9,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.5069,33.3511 ]
   },
   "properties": {
   "name":"SEV NM Phase 2",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5056,35.2586 ]
   },
   "properties": {
   "name":"SID Solar I  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0085,42.2834 ]
   },
   "properties": {
   "name":"SJA Solar LLC-Solterra Monastery",
   "capacity_mw":20.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.3758,40.7308 ]
   },
   "properties": {
   "name":"SL Babylon",
   "capacity_mw":9,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.7856,38.2725 ]
   },
   "properties": {
   "name":"SMPA Solar 1",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.3375,38.2378 ]
   },
   "properties": {
   "name":"SMUD at Fleshman",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4128,38.3647 ]
   },
   "properties": {
   "name":"SMUD at Grundman",
   "capacity_mw":17,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4313,38.3389 ]
   },
   "properties": {
   "name":"SMUD at Lawrence",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2789,38.2531 ]
   },
   "properties": {
   "name":"SMUD at Van Conett",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.1378,32.1274 ]
   },
   "properties": {
   "name":"SPS1 Dollarhide",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.1831,32.1836 ]
   },
   "properties": {
   "name":"SPS2 Jal",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.3233,32.4697 ]
   },
   "properties": {
   "name":"SPS3 Lea",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.3036,32.6819 ]
   },
   "properties": {
   "name":"SPS4 Monument",
   "capacity_mw":10.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.2347,32.3456 ]
   },
   "properties": {
   "name":"SPS5 Hopi",
   "capacity_mw":10.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.7036,33.6315 ]
   },
   "properties": {
   "name":"SR Camden",
   "capacity_mw":12,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.575,31.8103 ]
   },
   "properties": {
   "name":"SR Hazlehurst",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.9976,33.9267 ]
   },
   "properties": {
   "name":"SR Houston",
   "capacity_mw":3.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.7467,40.0814 ]
   },
   "properties": {
   "name":"SR Jenkins Ft Lupton",
   "capacity_mw":13,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.551,40.3862 ]
   },
   "properties": {
   "name":"SR Kersey",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.03,40.23 ]
   },
   "properties": {
   "name":"SR Mavericks",
   "capacity_mw":7.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.6921,40.1817 ]
   },
   "properties": {
   "name":"SR Platte Solar Farm",
   "capacity_mw":16,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.8957,40.5795 ]
   },
   "properties": {
   "name":"SR Skylark B",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.66,33.145 ]
   },
   "properties": {
   "name":"SR85",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2261,42.7536 ]
   },
   "properties": {
   "name":"SVEP Solar Project Company",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3209,40.4755 ]
   },
   "properties": {
   "name":"Sabert Solar",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4578,38.5872 ]
   },
   "properties": {
   "name":"Sacramento (SMUD)",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4164,38.6436 ]
   },
   "properties": {
   "name":"Sacramento Fairbain Water Treatment Plan",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4637,38.4486 ]
   },
   "properties": {
   "name":"Sacramento Regional County Sanitation PV",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.1647,38.4498 ]
   },
   "properties": {
   "name":"Sacramento Soleil LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.1808,33.3783 ]
   },
   "properties": {
   "name":"Saddle Mountain Solar I",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.2205,17.9786 ]
   },
   "properties": {
   "name":"Salinas",
   "capacity_mw":15.5,
   "primary_fuel":"Solar",
   "commissioning_year":null
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.895,40.7672 ]
   },
   "properties": {
   "name":"Salt Palace Solar Gen Plant",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.7829,33.9684 ]
   },
   "properties": {
   "name":"Saluda Solar  LLC",
   "capacity_mw":6.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.739,34.011 ]
   },
   "properties": {
   "name":"Saluda Solar II",
   "capacity_mw":3.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.695,35.3117 ]
   },
   "properties": {
   "name":"Samarcand Solar Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72,42.1 ]
   },
   "properties": {
   "name":"Sampson Road Community Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.4705,34.961 ]
   },
   "properties": {
   "name":"Sampson Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.6591,33.9656 ]
   },
   "properties": {
   "name":"San Antonio West Solar Rooftop",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -65.9077,18.4055 ]
   },
   "properties": {
   "name":"San Fermin Solar Farm",
   "capacity_mw":27,
   "primary_fuel":"Solar",
   "commissioning_year":null
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.843,37.372 ]
   },
   "properties": {
   "name":"San Isabel Solar  LLC",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.0189,37.0681 ]
   },
   "properties": {
   "name":"San Luis Solar Garden",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.22,37.777 ]
   },
   "properties": {
   "name":"San Luis Valley Solar Array",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.9276,37.6945 ]
   },
   "properties": {
   "name":"San Luis Valley Solar Ranch",
   "capacity_mw":35,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1103,35.9828 ]
   },
   "properties": {
   "name":"Sand Drag LLC",
   "capacity_mw":19,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.549,45.4455 ]
   },
   "properties": {
   "name":"Sand Lake DPC Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.8128,35.2836 ]
   },
   "properties": {
   "name":"Sandoval Solar Energy Center",
   "capacity_mw":6.1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.4303,33.0356 ]
   },
   "properties": {
   "name":"Sandstone Solar",
   "capacity_mw":45,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9542,35.8683 ]
   },
   "properties": {
   "name":"Sandy Cross Solar  LLC",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.0609,35.5878 ]
   },
   "properties": {
   "name":"Santa Fe Solar Energy Center",
   "capacity_mw":9.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0444,33.9108 ]
   },
   "properties": {
   "name":"Santa Fe Springs Rooftop Solar BLDG H",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0444,33.9108 ]
   },
   "properties": {
   "name":"Santa Fe Springs Rooftop Solar BLDG M",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.8555,35.0297 ]
   },
   "properties": {
   "name":"Santolina Solar Energy Center",
   "capacity_mw":10.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.4178,36.9405 ]
   },
   "properties": {
   "name":"Sappony Solar LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1469,36.1394 ]
   },
   "properties": {
   "name":"Sarah Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.3226,43.5959 ]
   },
   "properties": {
   "name":"Sauk DPC Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7951,35.2878 ]
   },
   "properties": {
   "name":"Scarlet Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.5152,35.4671 ]
   },
   "properties": {
   "name":"Scenic Hill Solar III",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.5664,36.4356 ]
   },
   "properties": {
   "name":"Schell Solar Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7406,42.1775 ]
   },
   "properties": {
   "name":"Scituate PV",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.9473,38.9099 ]
   },
   "properties": {
   "name":"Scotland Solar RES",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.934,37.523 ]
   },
   "properties": {
   "name":"Scott Solar Farm",
   "capacity_mw":17,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9446,37.5262 ]
   },
   "properties": {
   "name":"Scott-II Solar LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.4678,36.4769 ]
   },
   "properties": {
   "name":"Seaboard Solar LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.215,39.485 ]
   },
   "properties": {
   "name":"Seabrook Solar Plant",
   "capacity_mw":6.8,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0872,40.2342 ]
   },
   "properties": {
   "name":"Seabrook Village",
   "capacity_mw":3.1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.9361,35.4797 ]
   },
   "properties": {
   "name":"Searchlight Solar",
   "capacity_mw":17.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3217,35.2439 ]
   },
   "properties": {
   "name":"Sedberry Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1833,35.5764 ]
   },
   "properties": {
   "name":"Selma Solar LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.5553,35.1497 ]
   },
   "properties": {
   "name":"Selmer Farm LLC",
   "capacity_mw":15.8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.5511,35.1406 ]
   },
   "properties": {
   "name":"Selmer I",
   "capacity_mw":16,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.6467,35.1661 ]
   },
   "properties": {
   "name":"Selmer II",
   "capacity_mw":8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.9317,31.0651 ]
   },
   "properties": {
   "name":"Seminole",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.0139,33.1125 ]
   },
   "properties": {
   "name":"Seville 1",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.0059,33.1101 ]
   },
   "properties": {
   "name":"Seville 2",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2494,42.5942 ]
   },
   "properties": {
   "name":"Shaffer",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.1278,35.3933 ]
   },
   "properties": {
   "name":"Shafter Solar LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.437,44.7966 ]
   },
   "properties": {
   "name":"Shakopee Met Council WTP",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1958,34.9439 ]
   },
   "properties": {
   "name":"Shankle Solar Center LLC",
   "capacity_mw":4.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1289,34.8475 ]
   },
   "properties": {
   "name":"Shannon Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.539,40.1826 ]
   },
   "properties": {
   "name":"Sharon Station",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4225,41.0314 ]
   },
   "properties": {
   "name":"Shasta Solar Farm",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0872,36.4333 ]
   },
   "properties": {
   "name":"Shawboro PV1",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.949,44.826 ]
   },
   "properties": {
   "name":"Sheep Solar",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5884,35.3092 ]
   },
   "properties": {
   "name":"Shelby Randolph Road Solar 1  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5956,35.2536 ]
   },
   "properties": {
   "name":"Shelby Solar Energy Generation Facility",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.9794,44.9106 ]
   },
   "properties": {
   "name":"Sheldon Solar",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6764,42.5417 ]
   },
   "properties": {
   "name":"Shirley Landfill",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6235,42.5546 ]
   },
   "properties": {
   "name":"Shirley Water",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3847,34.8449 ]
   },
   "properties": {
   "name":"Shoe Creek Solar  LLC",
   "capacity_mw":65,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2433,40.245 ]
   },
   "properties": {
   "name":"Shore Point Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6958,42.2661 ]
   },
   "properties": {
   "name":"Shrewsbury Solar",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.066,42.1149 ]
   },
   "properties": {
   "name":"Shuman Solar",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3342,34.7036 ]
   },
   "properties": {
   "name":"Sierra Solar Greenworks",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.135,34.7306 ]
   },
   "properties": {
   "name":"Sierra SunTower Solar Gen Station",
   "capacity_mw":7.5,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2433,35.6122 ]
   },
   "properties": {
   "name":"Sigmon Catawba Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.4497,35.7474 ]
   },
   "properties": {
   "name":"Siler 421 Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -108.2481,32.7139 ]
   },
   "properties": {
   "name":"Silver City WWTP PV Project",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3995,40.4948 ]
   },
   "properties": {
   "name":"Silver Lake Solar Farm",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2403,42.4525 ]
   },
   "properties": {
   "name":"Silver Lake Solar Photovoltaic Facility",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.3503,35.7931 ]
   },
   "properties": {
   "name":"Silver State Solar Power North",
   "capacity_mw":52,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.32,35.63 ]
   },
   "properties": {
   "name":"Silver State Solar Power South",
   "capacity_mw":250,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.807,45.014 ]
   },
   "properties": {
   "name":"Silverton Solar",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7171,40.4509 ]
   },
   "properties": {
   "name":"Silvi Gibraltar Rock",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.9554,43.2884 ]
   },
   "properties": {
   "name":"Simcoe Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.6758,33.6781 ]
   },
   "properties": {
   "name":"Simon Solar Farm LLC",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.9972,36.3064 ]
   },
   "properties": {
   "name":"Simons Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.8113,43.0937 ]
   },
   "properties": {
   "name":"Skidmore College",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6481,40.5744 ]
   },
   "properties": {
   "name":"Skillman",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.8948,40.5779 ]
   },
   "properties": {
   "name":"Skylark",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.7672,43.9803 ]
   },
   "properties": {
   "name":"Slayton Solar",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5509,42.1379 ]
   },
   "properties": {
   "name":"Smith & Wesson at Springfield MA PV",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3198,35.4883 ]
   },
   "properties": {
   "name":"Smithfield",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.4235,35.8627 ]
   },
   "properties": {
   "name":"Snow Camp Solar  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6494,35.4442 ]
   },
   "properties": {
   "name":"Snow Hill Solar 2 LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7625,36.0528 ]
   },
   "properties": {
   "name":"SoINCPower5  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.581,36.443 ]
   },
   "properties": {
   "name":"SoINCPower6  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.9059,33.7671 ]
   },
   "properties": {
   "name":"Soboba Community Solar Project",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.22,39.436 ]
   },
   "properties": {
   "name":"Sod Run WTP A",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.5464,32.8033 ]
   },
   "properties": {
   "name":"Sol Orchard El Centro PV",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.4747,30.4551 ]
   },
   "properties": {
   "name":"SolaireHolman Solar Project",
   "capacity_mw":50,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.9559,32.9223 ]
   },
   "properties": {
   "name":"Solana Generating Station",
   "capacity_mw":280,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.6962,33.6187 ]
   },
   "properties": {
   "name":"Solar Blythe 2",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.47,33.08 ]
   },
   "properties": {
   "name":"Solar Gen 2",
   "capacity_mw":155.1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.433,31.25 ]
   },
   "properties": {
   "name":"Solar Glynn",
   "capacity_mw":18,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.3378,29.7004 ]
   },
   "properties": {
   "name":"Solar Park Gainesville  LLC",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.7008,33.9852 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #02",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4001,34.0943 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #03",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2306,34.0863 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #05",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5731,34.0414 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #06",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2275,34.0861 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #07",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.565,34.0419 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #08",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5717,34.0428 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #09",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5169,34.075 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #10",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2414,34.0758 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #11",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2356,34.0835 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #13",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5167,34.0792 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #15",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2336,34.0856 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #16",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5033,34.0728 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #17",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5164,34.0833 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #18",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2114,34.08 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #22",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5203,34.0808 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #23",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4253,34.1312 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #26",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4217,34.1311 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #27",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2742,34.0942 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #28",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5719,34.0317 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #32",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5692,34.0325 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #33",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0747,36.0281 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #42",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2208,33.8392 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #44",
   "capacity_mw":8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2281,34.0811 ]
   },
   "properties": {
   "name":"Solar Photovoltaic Project #48",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4036,34.8181 ]
   },
   "properties": {
   "name":"Solar Star 1",
   "capacity_mw":318,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3528,34.8486 ]
   },
   "properties": {
   "name":"Solar Star 2",
   "capacity_mw":279,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3868,34.839 ]
   },
   "properties": {
   "name":"Solar Star California  XLI  LLC",
   "capacity_mw":54,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9228,34.5119 ]
   },
   "properties": {
   "name":"Solar Star California  XLIV  LLC",
   "capacity_mw":9.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.4753,38.5164 ]
   },
   "properties": {
   "name":"Solar Star California II LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6697,40.4015 ]
   },
   "properties": {
   "name":"Solar Star New Jersey NJ LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.064,36.425 ]
   },
   "properties": {
   "name":"Solar Star North Carolina II LLC",
   "capacity_mw":6.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.4482,42.0869 ]
   },
   "properties": {
   "name":"Solean Solar Project",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2933,42.0412 ]
   },
   "properties": {
   "name":"Solten Plainville 6000  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3869,35.2431 ]
   },
   "properties": {
   "name":"Soluga Farms 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6892,34.5 ]
   },
   "properties": {
   "name":"Soluga Farms 2 LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6733,35.2193 ]
   },
   "properties": {
   "name":"Soluga Farms III",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2982,34.6557 ]
   },
   "properties": {
   "name":"Solverde 1",
   "capacity_mw":85,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4458,41.955 ]
   },
   "properties": {
   "name":"Somers Solar Center  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8336,35.4372 ]
   },
   "properties": {
   "name":"Sonne One",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1836,35.6567 ]
   },
   "properties": {
   "name":"Sonne Two",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.5287,37.8898 ]
   },
   "properties": {
   "name":"Sonora 1",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.6969,35.305 ]
   },
   "properties": {
   "name":"Sophie Solar",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.25,36.25 ]
   },
   "properties": {
   "name":"Soul City Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9757,34.2902 ]
   },
   "properties": {
   "name":"South Atlantic Services Solar Farm I",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.5484,39.7815 ]
   },
   "properties": {
   "name":"South Campus Solar",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.308,36.057 ]
   },
   "properties": {
   "name":"South Louisburg Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.0536,38.3111 ]
   },
   "properties": {
   "name":"South Milford Solar Plant",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.6326,45.7301 ]
   },
   "properties": {
   "name":"South Mills Solar  LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.281,34.5611 ]
   },
   "properties": {
   "name":"South Robeson Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.4397,42.4585 ]
   },
   "properties": {
   "name":"South Sioux City Solar",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.7361,34.9861 ]
   },
   "properties": {
   "name":"South Valley Solar Energy Center",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.302,36.0288 ]
   },
   "properties": {
   "name":"South Winston Farm  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.166,36.614 ]
   },
   "properties": {
   "name":"Southampton Solar  LLC",
   "capacity_mw":100,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.9929,42.0474 ]
   },
   "properties": {
   "name":"Southbridge PV",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0117,42.0909 ]
   },
   "properties": {
   "name":"Southbridge Solar",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3678,36.2656 ]
   },
   "properties": {
   "name":"Southerland Farm Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2159,32.9473 ]
   },
   "properties": {
   "name":"Southern Current One  LLC",
   "capacity_mw":10.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0913,41.8378 ]
   },
   "properties": {
   "name":"Southern Sky Renew Energy Berkley LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.6811,28.4586 ]
   },
   "properties": {
   "name":"Space Coast Next Gen Solar Energy",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6165,40.0478 ]
   },
   "properties": {
   "name":"Spartan",
   "capacity_mw":8.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.4824,42.7151 ]
   },
   "properties": {
   "name":"Spartan PV 1  LLC",
   "capacity_mw":10.5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.87,36.23 ]
   },
   "properties": {
   "name":"Spectrum Solar PV Power Project",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.4079,35.7129 ]
   },
   "properties": {
   "name":"Spencer Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.8541,44.9361 ]
   },
   "properties": {
   "name":"Spica Community Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.7017,35.3025 ]
   },
   "properties": {
   "name":"Spicewood Solar Farm LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1807,42.419 ]
   },
   "properties": {
   "name":"Spring Hill Road",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.4697,38.7095 ]
   },
   "properties": {
   "name":"Spring Mill Solar RES",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7664,41.9425 ]
   },
   "properties": {
   "name":"Spring Street Solar 1 CSG",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.4153,36.3711 ]
   },
   "properties": {
   "name":"Spring Valley Farm 2  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9553,35.2492 ]
   },
   "properties": {
   "name":"Springbok Solar Farm 1",
   "capacity_mw":105,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.9768,35.25 ]
   },
   "properties": {
   "name":"Springbok Solar Farm 2",
   "capacity_mw":155,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.5942,36.3981 ]
   },
   "properties": {
   "name":"Springer Solar 1",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.1664,37.2464 ]
   },
   "properties": {
   "name":"Springfield Solar 1 LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.8056,39.8939 ]
   },
   "properties": {
   "name":"Springfield Solar LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.0886,44.7878 ]
   },
   "properties": {
   "name":"St. Albans SPEED Project",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.7586,33.6867 ]
   },
   "properties": {
   "name":"St. Matthews Solar",
   "capacity_mw":10.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.21,44.88 ]
   },
   "properties": {
   "name":"St. Paul Intl Airport Red & Blue Parking",
   "capacity_mw":3.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9836,34.7716 ]
   },
   "properties": {
   "name":"St. Pauls Solar 1  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.981,34.7691 ]
   },
   "properties": {
   "name":"St. Pauls Solar 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.309,41.964 ]
   },
   "properties": {
   "name":"Stafford MS Ground Mount",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.8706,42.224 ]
   },
   "properties": {
   "name":"Stafford St Solar 1 CSG",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.8706,42.224 ]
   },
   "properties": {
   "name":"Stafford St Solar 3 CSG",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.4597,36.4147 ]
   },
   "properties": {
   "name":"Stagecoach Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3283,36.3953 ]
   },
   "properties": {
   "name":"Stainback Solar Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0175,33.8817 ]
   },
   "properties": {
   "name":"Staples La Mirada  CA",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.8239,36.08 ]
   },
   "properties": {
   "name":"Star Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3222,42.2008 ]
   },
   "properties": {
   "name":"State Street Solar LLC",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.4,35.6 ]
   },
   "properties": {
   "name":"Stateline Solar",
   "capacity_mw":299.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.7124,35.7397 ]
   },
   "properties": {
   "name":"Statesville Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.47,45.068 ]
   },
   "properties": {
   "name":"Steel Bridge Solar  LLC",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.8453,42.8128 ]
   },
   "properties": {
   "name":"Steel Sun",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.1947,40.6316 ]
   },
   "properties": {
   "name":"Sterling PV 3",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.4403,41.0675 ]
   },
   "properties": {
   "name":"Sterlington Greenworks LLC",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1027,42.4029 ]
   },
   "properties": {
   "name":"Stetson Road Solar - Barre I",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1061,35.9022 ]
   },
   "properties": {
   "name":"Stikeleather Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5353,39.4884 ]
   },
   "properties": {
   "name":"Stockton Athletic Center",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0892,42.0591 ]
   },
   "properties": {
   "name":"Stone Hill Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0318,34.5831 ]
   },
   "properties": {
   "name":"Stone Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.1839,35.6569 ]
   },
   "properties": {
   "name":"Storrie Lake Solar Project",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1997,36.0792 ]
   },
   "properties": {
   "name":"Stout Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5061,42.4369 ]
   },
   "properties": {
   "name":"Stow PV",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.5055,38.6435 ]
   },
   "properties": {
   "name":"Strata Roof 1",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.5452,42.6786 ]
   },
   "properties": {
   "name":"Strawberry Point DPC Solar",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1069,36.5314 ]
   },
   "properties": {
   "name":"Stroud Solar Station",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.385,42.3639 ]
   },
   "properties": {
   "name":"Sudbury Landfill",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.192,43.833 ]
   },
   "properties": {
   "name":"Sudbury Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.6578,35.3133 ]
   },
   "properties": {
   "name":"Sue Cleveland High School",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.5978,36.4378 ]
   },
   "properties": {
   "name":"Sugar Run Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7081,41.7966 ]
   },
   "properties": {
   "name":"Sullivan County - Adult Care Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9564,41.655 ]
   },
   "properties": {
   "name":"Sullivan Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.4138,39.132 ]
   },
   "properties": {
   "name":"Sullivan Solar  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -109.9193,32.0628 ]
   },
   "properties": {
   "name":"Sulphur Springs",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2897,34.7231 ]
   },
   "properties": {
   "name":"Summer North Solar",
   "capacity_mw":6.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2897,34.7231 ]
   },
   "properties": {
   "name":"Summer Solar A2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2897,34.7231 ]
   },
   "properties": {
   "name":"Summer Solar B2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2897,34.7231 ]
   },
   "properties": {
   "name":"Summer Solar C2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2897,34.7231 ]
   },
   "properties": {
   "name":"Summer Solar D2",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.311,34.7147 ]
   },
   "properties": {
   "name":"Summer Solar LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3536,40.5003 ]
   },
   "properties": {
   "name":"Summit Associates",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.136,36.4765 ]
   },
   "properties": {
   "name":"Summit Farms Solar",
   "capacity_mw":60,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8018,39.9873 ]
   },
   "properties": {
   "name":"Summit Water Nexus Mt. Holly  LLC Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.4976,31.4035 ]
   },
   "properties": {
   "name":"Sumrall I Solar Farm",
   "capacity_mw":52,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.4859,31.3971 ]
   },
   "properties": {
   "name":"Sumrall II Solar Farm",
   "capacity_mw":52,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1103,35.9831 ]
   },
   "properties": {
   "name":"Sun City Project LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9703,36.432 ]
   },
   "properties": {
   "name":"Sun Devil Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6536,37.0576 ]
   },
   "properties": {
   "name":"Sun Harvest Solar NDP1",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.6396,33.5553 ]
   },
   "properties": {
   "name":"SunAnza",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.8805,37.6903 ]
   },
   "properties": {
   "name":"SunE Alamosa",
   "capacity_mw":8.2,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.4183,29.245 ]
   },
   "properties": {
   "name":"SunE CPS1 LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.4183,29.245 ]
   },
   "properties": {
   "name":"SunE CPS2 LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.6692,29.2219 ]
   },
   "properties": {
   "name":"SunE CPS3 LLC",
   "capacity_mw":10.6,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.341,32.0344 ]
   },
   "properties": {
   "name":"SunE EPE1 LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.9133,32.2517 ]
   },
   "properties": {
   "name":"SunE EPE2 LLC",
   "capacity_mw":12,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5445,34.0977 ]
   },
   "properties": {
   "name":"SunE Rochester",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5341,34.0353 ]
   },
   "properties": {
   "name":"SunE- E Philadelphia Ontario",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.0927,38.2321 ]
   },
   "properties": {
   "name":"SunEdison Anheuser Busch Fairfield",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.918,33.5673 ]
   },
   "properties": {
   "name":"SunEdison Ironwood State Prison",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9814,34.2867 ]
   },
   "properties": {
   "name":"SunEdison LV Sutton Plant Site",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.13,34.2089 ]
   },
   "properties": {
   "name":"SunEdison Procter & Gamble Oxnard",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.23,33.8672 ]
   },
   "properties": {
   "name":"SunEdison Walgreens Moreno Valley",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2,34.5975 ]
   },
   "properties": {
   "name":"SunEdison Walmart Apple Valley DC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.4091,36.125 ]
   },
   "properties": {
   "name":"SunEnergy1-Scotland Neck  LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.49,43.79 ]
   },
   "properties": {
   "name":"SunGen Sharon 1 LLC",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.7358,35.5581 ]
   },
   "properties": {
   "name":"Sunfish Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.593,36.395 ]
   },
   "properties": {
   "name":"Sunflower Solar",
   "capacity_mw":16,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.1572,39.415 ]
   },
   "properties": {
   "name":"Sunnyside Ranch Community Solar Array",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.8276,34.8634 ]
   },
   "properties": {
   "name":"Sunray 2",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.8276,34.8634 ]
   },
   "properties": {
   "name":"Sunray 3",
   "capacity_mw":13.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.8911,45.475 ]
   },
   "properties": {
   "name":"Sunrise Community Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.4818,37.7509 ]
   },
   "properties": {
   "name":"Sunset Reservoir North Basin",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7711,40.9281 ]
   },
   "properties": {
   "name":"Sutter Greeworks LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6977,42.1024 ]
   },
   "properties": {
   "name":"Sutton Solar CSG",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.1741,30.3763 ]
   },
   "properties": {
   "name":"Suwannee Solar Facility",
   "capacity_mw":8.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.2562,33.7915 ]
   },
   "properties": {
   "name":"Swamp Fox Solar",
   "capacity_mw":10.8,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1811,35.4583 ]
   },
   "properties": {
   "name":"Sweetgum Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7865,41.7689 ]
   },
   "properties": {
   "name":"Syncarpha Freetown",
   "capacity_mw":3.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.3361,42.433 ]
   },
   "properties": {
   "name":"Syncarpha Hancock I CSG",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.347,42.4269 ]
   },
   "properties": {
   "name":"Syncarpha Hancock II CSG",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.3326,42.4281 ]
   },
   "properties": {
   "name":"Syncarpha Hancock III CSG",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.3095,42.2228 ]
   },
   "properties": {
   "name":"Syncarpha Palmer  LLC",
   "capacity_mw":4.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6415,42.4207 ]
   },
   "properties": {
   "name":"Syncarpha Still River  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.2177,33.4472 ]
   },
   "properties": {
   "name":"T0588 Phoenix - AZ",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3247,34.6892 ]
   },
   "properties": {
   "name":"TA-Acacia  LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3047,34.7089 ]
   },
   "properties": {
   "name":"TA-High Desert LLC",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.5328,27.9658 ]
   },
   "properties": {
   "name":"TIA Solar",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1056,35.5017 ]
   },
   "properties": {
   "name":"TWE Chocowinity Solar  LLC",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1343,35.1543 ]
   },
   "properties": {
   "name":"TWE New Bern Solar Project  LLC",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0175,33.7672 ]
   },
   "properties": {
   "name":"Tahquitz High School",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.5346,43.239 ]
   },
   "properties": {
   "name":"Tannery Road Landfill",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.4992,35.8581 ]
   },
   "properties": {
   "name":"Tarboro Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.6811,35.2044 ]
   },
   "properties": {
   "name":"Tart Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.8843,45.2108 ]
   },
   "properties": {
   "name":"Tatanka Wi",
   "capacity_mw":7.1,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.2972,32.5831 ]
   },
   "properties": {
   "name":"Taylor County Solar",
   "capacity_mw":148,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.1525,35.9091 ]
   },
   "properties": {
   "name":"Taylorsville Solar LLC",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.8157,32.0979 ]
   },
   "properties": {
   "name":"Tech Park Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5658,42.8761 ]
   },
   "properties": {
   "name":"Technology Drive Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.5117,33.8264 ]
   },
   "properties": {
   "name":"Temescal Canyon RV  LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.9252,40.4235 ]
   },
   "properties": {
   "name":"Temple Solar Arrays",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0673,42.5212 ]
   },
   "properties": {
   "name":"Templeton",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3851,33.9782 ]
   },
   "properties": {
   "name":"Tequesquite Landfill Solar PV Project",
   "capacity_mw":7.3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.6067,34.0397 ]
   },
   "properties": {
   "name":"Terra Francesco",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9977,39.505 ]
   },
   "properties": {
   "name":"The City of Vineland at North Vineland",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.07,39.4624 ]
   },
   "properties": {
   "name":"The City of Vineland at West Vineland",
   "capacity_mw":3.7,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.2013,39.4721 ]
   },
   "properties": {
   "name":"The Clorox Company",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7221,40.3014 ]
   },
   "properties": {
   "name":"The Lawrenceville School Solar Facility",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6617,35.3958 ]
   },
   "properties": {
   "name":"Thornton PV1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.1371,37.8271 ]
   },
   "properties": {
   "name":"Three Peaks Power",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.9876,43.931 ]
   },
   "properties": {
   "name":"Thunderegg Solar Center  LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.4169,35.9033 ]
   },
   "properties": {
   "name":"Tiburon Holdings",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7233,41.7875 ]
   },
   "properties": {
   "name":"Tihonet Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0148,39.7602 ]
   },
   "properties": {
   "name":"Timber Creek HS",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0842,40.2639 ]
   },
   "properties": {
   "name":"Tinton Falls Solar Farm",
   "capacity_mw":16,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4758,40.8153 ]
   },
   "properties": {
   "name":"Tioga Solar Morris County 1 LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.6131,41.4447 ]
   },
   "properties": {
   "name":"Tisbury Landfill Solar",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.8472,40.2928 ]
   },
   "properties": {
   "name":"Titusville Solar",
   "capacity_mw":4.1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.6159,35.8296 ]
   },
   "properties": {
   "name":"Tolson Solar",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.2865,42.5025 ]
   },
   "properties": {
   "name":"Tompkins Cortland Community College",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.0686,35.4056 ]
   },
   "properties": {
   "name":"Topaz Solar Farm",
   "capacity_mw":585.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9697,34.8239 ]
   },
   "properties": {
   "name":"Town of Cary",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0767,39.1995 ]
   },
   "properties": {
   "name":"Town of Chestertown- Chestertown WWTP",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.9558,42.0511 ]
   },
   "properties": {
   "name":"Town of East Bridgewater",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1354,42.0597 ]
   },
   "properties": {
   "name":"Town of Foxborough - Landfill (SREC II) CSG",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.6757,42.835 ]
   },
   "properties": {
   "name":"Town of Halfmoon",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2555,42.4691 ]
   },
   "properties": {
   "name":"Town of Lexington Solar",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2594,42.2767 ]
   },
   "properties": {
   "name":"Town of Needham VNEM",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.3403,42.1278 ]
   },
   "properties": {
   "name":"Town of Norfolk MA at Medway Branch",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6175,42.0439 ]
   },
   "properties": {
   "name":"Town of Uxbridge MA at Commerce Dr",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1747,43.2444 ]
   },
   "properties": {
   "name":"Town of Williamson Landfill PV",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.8411,33.0842 ]
   },
   "properties": {
   "name":"Toyota HQ Plan",
   "capacity_mw":7.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7186,40.8189 ]
   },
   "properties": {
   "name":"Toys R Us- DE  Inc. at Mt. Olive  NJ",
   "capacity_mw":4.1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1398,35.7998 ]
   },
   "properties": {
   "name":"Tracy Solar",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7539,40.2314 ]
   },
   "properties": {
   "name":"Trenton Solar Farm",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.6122,40.1155 ]
   },
   "properties": {
   "name":"Trenton Solar Farm (MO)",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.5939,40.5562 ]
   },
   "properties": {
   "name":"Trexlertown Solar Array North and South",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.3896,33.3081 ]
   },
   "properties": {
   "name":"Tri-County Solar Facility",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.7749,35.735 ]
   },
   "properties": {
   "name":"Tripple State Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0561,35.8319 ]
   },
   "properties": {
   "name":"Tropico Solar PV Plant",
   "capacity_mw":14,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.8983,42.8475 ]
   },
   "properties": {
   "name":"True North",
   "capacity_mw":4.8,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.42,36.2 ]
   },
   "properties": {
   "name":"Tulare 1 and 2",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.2331,44.1926 ]
   },
   "properties": {
   "name":"Tumbleweed Solar  LLC",
   "capacity_mw":9.9,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1044,34.5244 ]
   },
   "properties": {
   "name":"Turkey Branch Solar LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1356,36.4414 ]
   },
   "properties": {
   "name":"Turkey Creek PV1",
   "capacity_mw":13.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.3089,43.0347 ]
   },
   "properties": {
   "name":"Turrill Solar Farm",
   "capacity_mw":19.6,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.8465,35.2666 ]
   },
   "properties": {
   "name":"Tuttle",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.12,41.69 ]
   },
   "properties": {
   "name":"Twin Branch PV",
   "capacity_mw":2.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7481,42.1483 ]
   },
   "properties": {
   "name":"Twiss Street Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.3267,35.6292 ]
   },
   "properties": {
   "name":"Two Lines Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.4619,36.2231 ]
   },
   "properties": {
   "name":"Two Mile Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4465,42.6697 ]
   },
   "properties": {
   "name":"Tyngsborough Solar",
   "capacity_mw":2.6,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.8106,32.097 ]
   },
   "properties": {
   "name":"UASTP I",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.75,38.55 ]
   },
   "properties": {
   "name":"UC Davis South Campus",
   "capacity_mw":13,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.5325,42.3913 ]
   },
   "properties": {
   "name":"UMASS",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6764,38.2026 ]
   },
   "properties": {
   "name":"UMES (MD) - Princess Anne",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.6111,38.0981 ]
   },
   "properties": {
   "name":"UMMS at Pocomoke",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.2752,40.5344 ]
   },
   "properties": {
   "name":"US Foods Solar",
   "capacity_mw":6,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0812,34.6607 ]
   },
   "properties": {
   "name":"US-TOPCO (Soccer Center)",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.8573,32.7928 ]
   },
   "properties": {
   "name":"USG 1",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.8632,32.7904 ]
   },
   "properties": {
   "name":"USG 2",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2587,33.9779 ]
   },
   "properties": {
   "name":"USPS PV",
   "capacity_mw":10.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.7386,32.9369 ]
   },
   "properties": {
   "name":"Union HS at Casa Grande",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.5017,40.3206 ]
   },
   "properties": {
   "name":"United Stationers Supply Solar Electric",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2389,32.8744 ]
   },
   "properties": {
   "name":"Univ of California San Diego Solar",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8839,35.7819 ]
   },
   "properties": {
   "name":"Upchurch Solar Center LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.9876,42.3328 ]
   },
   "properties": {
   "name":"Upper Blackstone (MA) Treasure Valley",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3431,32.9208 ]
   },
   "properties": {
   "name":"Upson Rocky Creek Solar Plant",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7,42.1 ]
   },
   "properties": {
   "name":"Upton Community Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.2903,31.2418 ]
   },
   "properties": {
   "name":"Upton County Solar",
   "capacity_mw":150,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.0826,44.6716 ]
   },
   "properties": {
   "name":"Ursa Community Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -112.9042,37.8828 ]
   },
   "properties": {
   "name":"Utah Red Hills Renewable Energy Park",
   "capacity_mw":80,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4833,34.2489 ]
   },
   "properties": {
   "name":"VA Sepulveda Ambulatory Care Center",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.2741,44.9623 ]
   },
   "properties": {
   "name":"VEC Alburgh Array",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.0608,44.3682 ]
   },
   "properties": {
   "name":"VEC Magee Hill Solar",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9264,38.4106 ]
   },
   "properties": {
   "name":"Vaca Dixon Solar Station",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.9603,38.3994 ]
   },
   "properties": {
   "name":"Vacaville",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.226,30.8101 ]
   },
   "properties": {
   "name":"Valdosta",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.3,30.9 ]
   },
   "properties": {
   "name":"Valdosta Prison",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2581,43.965 ]
   },
   "properties": {
   "name":"Vale Air Solar Center  LLC",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.6278,33.0436 ]
   },
   "properties": {
   "name":"Valencia 1 Solar CA",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -110.8669,32.1458 ]
   },
   "properties": {
   "name":"Valencia Solar",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0226,33.2503 ]
   },
   "properties": {
   "name":"Valley Center",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0017,33.2342 ]
   },
   "properties": {
   "name":"Valley Center 1",
   "capacity_mw":2.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0017,33.2342 ]
   },
   "properties": {
   "name":"Valley Center 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.094,45.033 ]
   },
   "properties": {
   "name":"Valley Creek Solar",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.1989,33.7087 ]
   },
   "properties": {
   "name":"Valley Sanitary District WTP Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.8919,40.4188 ]
   },
   "properties": {
   "name":"Valley View Solar",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.1611,41.5022 ]
   },
   "properties": {
   "name":"Valparaiso Solar  LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8805,35.777 ]
   },
   "properties": {
   "name":"Van Slyke Solar Center  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.412,36.2585 ]
   },
   "properties": {
   "name":"Vance Solar Farm  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.51,34.7497 ]
   },
   "properties": {
   "name":"Vandenberg Solar Project",
   "capacity_mw":22.5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1206,36.451 ]
   },
   "properties": {
   "name":"Vaughn Creek PV1",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.2037,45.3828 ]
   },
   "properties": {
   "name":"Vega Community Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.82,36.9258 ]
   },
   "properties": {
   "name":"Vega Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.5717,33.5989 ]
   },
   "properties": {
   "name":"Venable Solar 1",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -114.5717,33.5972 ]
   },
   "properties": {
   "name":"Venable Solar 2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0803,35.8233 ]
   },
   "properties": {
   "name":"Vickers",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3431,36.325 ]
   },
   "properties": {
   "name":"Vicksburg Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4667,34.5011 ]
   },
   "properties": {
   "name":"Victor Dry Farm Ranch A",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.4711,34.4978 ]
   },
   "properties": {
   "name":"Victor Dry Farm Ranch B",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3872,34.5128 ]
   },
   "properties": {
   "name":"Victor Mesa Linda B2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3872,34.5114 ]
   },
   "properties": {
   "name":"Victor Mesa Linda C2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3872,34.5094 ]
   },
   "properties": {
   "name":"Victor Mesa Linda D2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3872,34.5081 ]
   },
   "properties": {
   "name":"Victor Mesa Linda E2",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.2579,34.4802 ]
   },
   "properties": {
   "name":"Victor Valley CC CPV Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.433,39.795 ]
   },
   "properties": {
   "name":"Victory Solar LLC",
   "capacity_mw":12.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.466,37.384 ]
   },
   "properties": {
   "name":"Vilas Solar Array",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.0614,34.6689 ]
   },
   "properties": {
   "name":"Vinam",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0374,39.4903 ]
   },
   "properties": {
   "name":"Vineland Headquarters",
   "capacity_mw":1.1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.9739,39.4175 ]
   },
   "properties": {
   "name":"Vineland Mays Landing Solar",
   "capacity_mw":4.3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6829,35.5579 ]
   },
   "properties": {
   "name":"Vintner Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9622,34.9349 ]
   },
   "properties": {
   "name":"Viper Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.7131,32.8914 ]
   },
   "properties": {
   "name":"Vista Grande HS at Casa Grande",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.1269,35.0975 ]
   },
   "properties": {
   "name":"Volkswagen Solar System",
   "capacity_mw":9.6,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.0375,42.2376 ]
   },
   "properties": {
   "name":"Vuelta Solar",
   "capacity_mw":5.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.6193,42.0059 ]
   },
   "properties": {
   "name":"Vulcraft Solar",
   "capacity_mw":1.6,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.0158,40.831 ]
   },
   "properties": {
   "name":"WC Landfill Energy LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0919,40.6772 ]
   },
   "properties": {
   "name":"WEA Texas Bayonne",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6246,41.4918 ]
   },
   "properties": {
   "name":"WED Kingstown Solar I  LLC - West",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6191,41.4923 ]
   },
   "properties": {
   "name":"WED Kingstown Solar I - East Array",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6865,41.5188 ]
   },
   "properties": {
   "name":"WED Stilson Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.4772,32.3958 ]
   },
   "properties": {
   "name":"WSMR I",
   "capacity_mw":4.6,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.8134,39.5229 ]
   },
   "properties": {
   "name":"WWRF Solar Plant",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.2697,42.1511 ]
   },
   "properties": {
   "name":"WYM 1250 Palmer LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.0193,44.3671 ]
   },
   "properties": {
   "name":"Wabasha Holdco Solar CSG",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.4261,35.3522 ]
   },
   "properties": {
   "name":"Waco Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.0973,34.9911 ]
   },
   "properties": {
   "name":"Wadesboro Farm 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.0932,35.0234 ]
   },
   "properties": {
   "name":"Wadesboro Farm 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.051,34.9694 ]
   },
   "properties": {
   "name":"Wadesboro Farm 3",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.029,34.9739 ]
   },
   "properties": {
   "name":"Wadesboro Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.9567,36.4586 ]
   },
   "properties": {
   "name":"Wagstaff Farm 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -158.0133,21.4706 ]
   },
   "properties": {
   "name":"Waihonu North Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -158.0164,21.4689 ]
   },
   "properties": {
   "name":"Waihonu South Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.4064,45.4729 ]
   },
   "properties": {
   "name":"WakeSun CSG  LLC",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.3283,40.51 ]
   },
   "properties": {
   "name":"Wakefern Food Corp",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3124,35.8142 ]
   },
   "properties": {
   "name":"Wakefield Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -107.2498,33.1526 ]
   },
   "properties": {
   "name":"Wal-Mart Truth or Consequences PV",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7134,38.6749 ]
   },
   "properties": {
   "name":"Walgreens Woodland Distribution Center",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.54,35.29 ]
   },
   "properties": {
   "name":"Wallace",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.7718,32.8668 ]
   },
   "properties": {
   "name":"Walmart Casa Grande",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.7685,32.0787 ]
   },
   "properties": {
   "name":"Walnut Springs Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2658,42.1172 ]
   },
   "properties": {
   "name":"Walpole Solar 2",
   "capacity_mw":2.4,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.5626,28.3737 ]
   },
   "properties": {
   "name":"Walt Disney World Solar Facility",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.0489,34.4969 ]
   },
   "properties": {
   "name":"Walters Solar (FLS 260)",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.5923,38.8502 ]
   },
   "properties": {
   "name":"Walton 1 Solar Facility",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.5923,38.8502 ]
   },
   "properties": {
   "name":"Walton 2 Solar Facility",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.7046,41.8017 ]
   },
   "properties": {
   "name":"Wareham MA 1",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.107,40.789 ]
   },
   "properties": {
   "name":"Warren County Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.5182,44.9596 ]
   },
   "properties": {
   "name":"Warren DPC Solar",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1711,36.415 ]
   },
   "properties": {
   "name":"Warrenton Farm",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.1258,35.0056 ]
   },
   "properties": {
   "name":"Warsaw Farm",
   "capacity_mw":65,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.11,35.01 ]
   },
   "properties": {
   "name":"Warsaw I",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.05,35.01 ]
   },
   "properties": {
   "name":"Warsaw II",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.531,44.0924 ]
   },
   "properties": {
   "name":"Waseca Solar",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.0536,35.5653 ]
   },
   "properties": {
   "name":"Washington Airport Solar LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.8336,35.4994 ]
   },
   "properties": {
   "name":"Washington Millfield Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.8484,35.5052 ]
   },
   "properties": {
   "name":"Washington White Post Solar LLC",
   "capacity_mw":12.4,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.24,42.41 ]
   },
   "properties": {
   "name":"Waste Water Treatment Plant",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.1986,44.4755 ]
   },
   "properties": {
   "name":"Waterford Holdco CSG",
   "capacity_mw":2.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.0439,41.4339 ]
   },
   "properties": {
   "name":"Waterloo Solar  LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -86.23,42.19 ]
   },
   "properties": {
   "name":"Watervliet PV",
   "capacity_mw":4.6,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7214,36.1297 ]
   },
   "properties": {
   "name":"Watson Seed Farm PV1",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.6422,34.6008 ]
   },
   "properties": {
   "name":"Watts 3115",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3353,34.7269 ]
   },
   "properties": {
   "name":"Watts Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.9802,45.0608 ]
   },
   "properties": {
   "name":"WaveSun",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.019,35.2211 ]
   },
   "properties": {
   "name":"Wayne Solar I LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.0795,35.3156 ]
   },
   "properties": {
   "name":"Wayne Solar II LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8712,35.3244 ]
   },
   "properties": {
   "name":"Wayne Solar III LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.2535,37.8041 ]
   },
   "properties": {
   "name":"Waynesville Solar Farm (MO)",
   "capacity_mw":2.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.5088,30.2385 ]
   },
   "properties": {
   "name":"Webberville Solar Project",
   "capacity_mw":30,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -111.9822,41.099 ]
   },
   "properties": {
   "name":"Weber State University - Davis Campus PV",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.4106,44.5297 ]
   },
   "properties": {
   "name":"Webster Holdco Solar CSG",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.7919,40.2321 ]
   },
   "properties": {
   "name":"Weld 1 Community Solar Array",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.2911,35.5117 ]
   },
   "properties": {
   "name":"Wellons Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.7711,42.3314 ]
   },
   "properties": {
   "name":"West Boylston Community Shared Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0336,42.0253 ]
   },
   "properties": {
   "name":"West Bridgewater AB CSG",
   "capacity_mw":1.7,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.1295,42.2228 ]
   },
   "properties": {
   "name":"West Brookfield Solar  LLC",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.2103,42.2725 ]
   },
   "properties": {
   "name":"West Brookfield Solar - Gilbertsville Rd",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4772,41.6036 ]
   },
   "properties": {
   "name":"West Davisville Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.7922,42.4918 ]
   },
   "properties": {
   "name":"West Dubuque Solar",
   "capacity_mw":3.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.3106,44.2749 ]
   },
   "properties": {
   "name":"West Faribault Solar",
   "capacity_mw":5.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1325,36.1422 ]
   },
   "properties": {
   "name":"West Gates Solar Station",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.71,41.6494 ]
   },
   "properties": {
   "name":"West Greenwich Solar",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.7303,40.0067 ]
   },
   "properties": {
   "name":"West Pemberton",
   "capacity_mw":7,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.5236,35.6683 ]
   },
   "properties": {
   "name":"West Salisbury Farm LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.5044,35.7214 ]
   },
   "properties": {
   "name":"West Siler Farm LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.3875,35.4086 ]
   },
   "properties": {
   "name":"West Tennessee Solar Farm",
   "capacity_mw":4.2,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.0097,33.7197 ]
   },
   "properties": {
   "name":"West Valley High School Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.9013,44.7899 ]
   },
   "properties": {
   "name":"West Waconia Solar",
   "capacity_mw":8.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.9753,38.0194 ]
   },
   "properties": {
   "name":"Westar Cities Solar",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.6092,42.2633 ]
   },
   "properties": {
   "name":"Westborough Solar LLC",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3136,34.7321 ]
   },
   "properties": {
   "name":"Western Antelope Blue Sky B",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3247,34.6817 ]
   },
   "properties": {
   "name":"Western Antelope Blue Sky Ranch A",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3203,34.6889 ]
   },
   "properties": {
   "name":"Western Antelope Dry Ranch",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.4071,36.8481 ]
   },
   "properties": {
   "name":"Western Branch High School",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -85.6427,42.2525 ]
   },
   "properties": {
   "name":"Western Michigan Solar Gardens",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.4194,42.6364 ]
   },
   "properties": {
   "name":"Westford Solar Park",
   "capacity_mw":4,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.0758,36.1381 ]
   },
   "properties": {
   "name":"Westlands Solar PV Farm",
   "capacity_mw":18,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2889,33.7661 ]
   },
   "properties": {
   "name":"Westmont 300A",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2847,33.7661 ]
   },
   "properties": {
   "name":"Westmont 300B",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2866,33.763 ]
   },
   "properties": {
   "name":"Westmont 301",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2889,33.7642 ]
   },
   "properties": {
   "name":"Westmont 400A",
   "capacity_mw":2.3,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2847,33.7642 ]
   },
   "properties": {
   "name":"Westmont 400B",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2882,33.7624 ]
   },
   "properties": {
   "name":"Westmont 401",
   "capacity_mw":2.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2825,42.3746 ]
   },
   "properties": {
   "name":"Weston Landfill Solar",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.057,41.6211 ]
   },
   "properties": {
   "name":"Westport MA 1",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.057,41.6211 ]
   },
   "properties": {
   "name":"Westport MA 2",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0213,40.8141 ]
   },
   "properties": {
   "name":"Westside Avenue",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.907,36.219 ]
   },
   "properties": {
   "name":"Westside Solar Power PV1",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1249,36.3787 ]
   },
   "properties": {
   "name":"Westside Solar Station",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.7822,34.1086 ]
   },
   "properties": {
   "name":"Weymouth Solar Plant",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6236,42.4461 ]
   },
   "properties": {
   "name":"Whately Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.0719,43.9721 ]
   },
   "properties": {
   "name":"Whistling Winds DPC Solar",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7344,36.1272 ]
   },
   "properties": {
   "name":"Whitakers",
   "capacity_mw":12,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.7251,36.1155 ]
   },
   "properties": {
   "name":"Whitakers Farm (Fisher Rd)",
   "capacity_mw":3.4,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.1369,44.4856 ]
   },
   "properties": {
   "name":"Whitcomb Solar Farm",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.1883,35.9071 ]
   },
   "properties": {
   "name":"White Cross Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2224,36.3476 ]
   },
   "properties": {
   "name":"White Farm Solar  LLC",
   "capacity_mw":5.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.1113,33.0368 ]
   },
   "properties": {
   "name":"White Oak Solar  LLC",
   "capacity_mw":76.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.257,32.506 ]
   },
   "properties": {
   "name":"White Pine Solar  LLC",
   "capacity_mw":101.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.4625,35.8714 ]
   },
   "properties": {
   "name":"White River Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.0461,35.8747 ]
   },
   "properties": {
   "name":"White River Solar 2",
   "capacity_mw":19.8,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.972,38.023 ]
   },
   "properties": {
   "name":"Whitehouse Solar Farm",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.8687,33.6165 ]
   },
   "properties": {
   "name":"Whitesboro Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.8675,33.6249 ]
   },
   "properties": {
   "name":"Whitesboro Solar II",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.717,37.691 ]
   },
   "properties": {
   "name":"Whitethorn Solar LLC",
   "capacity_mw":3.3,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.3789,33.4982 ]
   },
   "properties": {
   "name":"Whitewright Solar",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1385,36.3769 ]
   },
   "properties": {
   "name":"Whitney Point Solar",
   "capacity_mw":20,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5783,35.6158 ]
   },
   "properties": {
   "name":"Wildwood Solar I  LLC",
   "capacity_mw":19.5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.5739,35.63 ]
   },
   "properties": {
   "name":"Wildwood Solar II",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4759,40.8149 ]
   },
   "properties": {
   "name":"William G Mennen Sports Solar",
   "capacity_mw":1.3,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1955,40.9521 ]
   },
   "properties": {
   "name":"William Paterson University",
   "capacity_mw":1.4,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.4553,40.3878 ]
   },
   "properties": {
   "name":"Williams-Sonoma Solar Facility",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.7134,42.3871 ]
   },
   "properties": {
   "name":"Williamsburg Solar LLC VNEM",
   "capacity_mw":2.2,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.0631,35.8011 ]
   },
   "properties": {
   "name":"Williamston Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.1642,35.8875 ]
   },
   "properties": {
   "name":"Williamston Speight Solar  LLC",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.108,35.8365 ]
   },
   "properties": {
   "name":"Williamston West Farm  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.6058,44.1131 ]
   },
   "properties": {
   "name":"Williamstown Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1753,42.5463 ]
   },
   "properties": {
   "name":"Wilmington Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8736,35.8036 ]
   },
   "properties": {
   "name":"Wilson Farm 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.98,42.2642 ]
   },
   "properties": {
   "name":"Wilson Solar",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.9,35.7 ]
   },
   "properties": {
   "name":"Wilson Solar Farm 1",
   "capacity_mw":3.4,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.016,35.683 ]
   },
   "properties": {
   "name":"Wilson Solar Farm 2",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78,35.78 ]
   },
   "properties": {
   "name":"Wilson Solar Farm 3",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78,35.7 ]
   },
   "properties": {
   "name":"Wilson Solar Farm 4",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.87,35.68 ]
   },
   "properties": {
   "name":"Wilson Solar Farm 5",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.87,35.68 ]
   },
   "properties": {
   "name":"Wilson Solar Farm 6",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78,35.75 ]
   },
   "properties": {
   "name":"Wilson Solar Farm 7",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.0944,40.8253 ]
   },
   "properties": {
   "name":"Wilzig Associates  LLC",
   "capacity_mw":1.2,
   "primary_fuel":"Solar",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.9917,42.6594 ]
   },
   "properties": {
   "name":"Winchendon Solar",
   "capacity_mw":1.9,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -66.5485,18.0623 ]
   },
   "properties": {
   "name":"Windmar Ponce",
   "capacity_mw":4.5,
   "primary_fuel":"Solar",
   "commissioning_year":null
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.9178,35.9819 ]
   },
   "properties": {
   "name":"Windsor Cooper HIill Solar  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.8831,36.0169 ]
   },
   "properties": {
   "name":"Windsor Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.9389,36.375 ]
   },
   "properties": {
   "name":"Winton Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.8536,35.0583 ]
   },
   "properties": {
   "name":"Woodland Church Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.2211,36.3419 ]
   },
   "properties": {
   "name":"Woodland Solar",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.611,36.89 ]
   },
   "properties": {
   "name":"Woodland Solar Farm",
   "capacity_mw":19,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.5777,42.2364 ]
   },
   "properties": {
   "name":"Woodline Solar",
   "capacity_mw":8,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.8214,35.3231 ]
   },
   "properties": {
   "name":"Woodmere Solar Farm",
   "capacity_mw":15,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.791,42.219 ]
   },
   "properties": {
   "name":"Worcester Landfill",
   "capacity_mw":6.5,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.3763,36.3525 ]
   },
   "properties": {
   "name":"Wortham Solar Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.3171,40.8795 ]
   },
   "properties": {
   "name":"Wyandot Solar Farm",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.0457,38.9404 ]
   },
   "properties": {
   "name":"Wye Mills VNEM",
   "capacity_mw":10,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.8733,35.9117 ]
   },
   "properties": {
   "name":"XPF Solar Field",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.5886,39.7655 ]
   },
   "properties": {
   "name":"Xcel Adams 1 Community Solar Array",
   "capacity_mw":1.8,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.5834,39.7849 ]
   },
   "properties": {
   "name":"Xcel Adams 2 Community Solar Array",
   "capacity_mw":1.5,
   "primary_fuel":"Solar",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.6972,36.1992 ]
   },
   "properties": {
   "name":"Yadkin 601 Farm",
   "capacity_mw":3,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.596,36.1373 ]
   },
   "properties": {
   "name":"Yadkinville Solar",
   "capacity_mw":3.5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.2786,45.1089 ]
   },
   "properties": {
   "name":"Yamhill Solar LLC",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.2789,36.4394 ]
   },
   "properties": {
   "name":"Yanceyville Farm",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3169,36.4139 ]
   },
   "properties": {
   "name":"Yanceyville Farm 2 LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.3489,36.4286 ]
   },
   "properties": {
   "name":"Yanceyville Farm 3  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.6567,40.1688 ]
   },
   "properties": {
   "name":"Yardville Solar Farm",
   "capacity_mw":3.6,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.7294,38.6597 ]
   },
   "properties": {
   "name":"Yolo County Solar Project",
   "capacity_mw":1,
   "primary_fuel":"Solar",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -81.3337,35.2222 ]
   },
   "properties": {
   "name":"York Road Solar I  LLC",
   "capacity_mw":2,
   "primary_fuel":"Solar",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.2,34.8 ]
   },
   "properties": {
   "name":"ZV Solar 1",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.2,34.816 ]
   },
   "properties": {
   "name":"ZV Solar 2  LLC",
   "capacity_mw":4.9,
   "primary_fuel":"Solar",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.2002,34.8162 ]
   },
   "properties": {
   "name":"ZV Solar 3  LLC",
   "capacity_mw":5,
   "primary_fuel":"Solar",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3372,35.1011 ]
   },
   "properties": {
   "name":"85 A",
   "capacity_mw":14.1,
   "primary_fuel":"Wind",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3372,35.1011 ]
   },
   "properties": {
   "name":"85 B",
   "capacity_mw":21.2,
   "primary_fuel":"Wind",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.665,41.4236 ]
   },
   "properties": {
   "name":"Adair Wind Farm",
   "capacity_mw":174.8,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.6717,40.92 ]
   },
   "properties": {
   "name":"Adams Wind",
   "capacity_mw":154.3,
   "primary_fuel":"Wind",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.7241,43.5548 ]
   },
   "properties": {
   "name":"Adams Wind Farm",
   "capacity_mw":24,
   "primary_fuel":"Wind",
   "commissioning_year":2003
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.7356,44.9169 ]
   },
   "properties": {
   "name":"Adams Wind Generations LLC",
   "capacity_mw":20,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.3278,36.4725 ]
   },
   "properties": {
   "name":"Aeolus Wind Facility",
   "capacity_mw":3,
   "primary_fuel":"Wind",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.4356,47.0053 ]
   },
   "properties": {
   "name":"Agassiz Beach LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Wind",
   "commissioning_year":2001
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.6236,41.3017 ]
   },
   "properties": {
   "name":"Agriwind",
   "capacity_mw":8.4,
   "primary_fuel":"Wind",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.8917,42.4489 ]
   },
   "properties": {
   "name":"Ainsworth Wind",
   "capacity_mw":59.4,
   "primary_fuel":"Wind",
   "commissioning_year":2005
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.5075,38.4247 ]
   },
   "properties": {
   "name":"Alexander Wind Farm LLC",
   "capacity_mw":50.7,
   "primary_fuel":"Wind",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.5794,40.3839 ]
   },
   "properties": {
   "name":"Allegheny Ridge Wind Farm",
   "capacity_mw":80,
   "primary_fuel":"Wind",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.6333,43.4 ]
   },
   "properties": {
   "name":"Allendorf",
   "capacity_mw":3.8,
   "primary_fuel":"Wind",
   "commissioning_year":2001
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3534,35.0337 ]
   },
   "properties": {
   "name":"Alta Wind Energy Center I",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2953,35.0239 ]
   },
   "properties": {
   "name":"Alta Wind Energy Center II",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2953,35.0239 ]
   },
   "properties": {
   "name":"Alta Wind Energy Center III",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2422,35.0086 ]
   },
   "properties": {
   "name":"Alta Wind Energy Center IV",
   "capacity_mw":102,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2422,35.0086 ]
   },
   "properties": {
   "name":"Alta Wind Energy Center V",
   "capacity_mw":168,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2348,35.0267 ]
   },
   "properties": {
   "name":"Alta Wind VIII",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2,35.06 ]
   },
   "properties": {
   "name":"Alta Wind X",
   "capacity_mw":138,
   "primary_fuel":"Wind",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.39,35.065 ]
   },
   "properties": {
   "name":"Alta Wind XI",
   "capacity_mw":90,
   "primary_fuel":"Wind",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.5551,33.915 ]
   },
   "properties": {
   "name":"Altech III",
   "capacity_mw":25.1,
   "primary_fuel":"Wind",
   "commissioning_year":1986
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.2092,29.2347 ]
   },
   "properties": {
   "name":"Anacacho Wind Farm  LLC",
   "capacity_mw":99.8,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -91.2342,41.8508 ]
   },
   "properties": {
   "name":"Anchor Wind  LLC",
   "capacity_mw":6,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.8558,33.0294 ]
   },
   "properties": {
   "name":"Anderson Wind I",
   "capacity_mw":5,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.865,33.0139 ]
   },
   "properties": {
   "name":"Anderson Wind II",
   "capacity_mw":10,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -122.0925,38.2336 ]
   },
   "properties": {
   "name":"Anheuser-Busch #2",
   "capacity_mw":1.6,
   "primary_fuel":"Wind",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.315,43.815 ]
   },
   "properties": {
   "name":"Apple Blossom Wind Farm",
   "capacity_mw":100,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.0108,34.8147 ]
   },
   "properties": {
   "name":"Aragonne Wind LLC",
   "capacity_mw":90,
   "primary_fuel":"Wind",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.1369,34.3869 ]
   },
   "properties": {
   "name":"Arbuckle Mountain Wind Farm LLC",
   "capacity_mw":100,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2008,45.7167 ]
   },
   "properties": {
   "name":"Arlington Wind Power Project",
   "capacity_mw":103,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -76.8553,41.7619 ]
   },
   "properties": {
   "name":"Armenia Mountain Wind Farm",
   "capacity_mw":100.5,
   "primary_fuel":"Wind",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.8961,47.1244 ]
   },
   "properties": {
   "name":"Ashtabula Wind Energy Center",
   "capacity_mw":48,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.9317,47.2924 ]
   },
   "properties": {
   "name":"Ashtabula Wind II LLC",
   "capacity_mw":120,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.8956,47.1242 ]
   },
   "properties": {
   "name":"Ashtabula Wind III LLC",
   "capacity_mw":62.4,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.0524,34.7695 ]
   },
   "properties": {
   "name":"Astra Wind Farm",
   "capacity_mw":163,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.4756,40.7649 ]
   },
   "properties": {
   "name":"August Wind Farm",
   "capacity_mw":1.8,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.4325,44.4131 ]
   },
   "properties": {
   "name":"Autumn Hills LLC",
   "capacity_mw":1.9,
   "primary_fuel":"Wind",
   "commissioning_year":2001
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -156.318,20.596 ]
   },
   "properties": {
   "name":"Auwahi Wind Energy",
   "capacity_mw":35,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.3755,43.6514 ]
   },
   "properties": {
   "name":"B&K Energy Systems LLC",
   "capacity_mw":2,
   "primary_fuel":"Wind",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.4253,43.6183 ]
   },
   "properties": {
   "name":"BC Energy LLC",
   "capacity_mw":4,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.7892,27.2231 ]
   },
   "properties": {
   "name":"Baffin Wind",
   "capacity_mw":188,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.7086,47.1133 ]
   },
   "properties": {
   "name":"Baldwin Wind LLC",
   "capacity_mw":102.4,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.8472,36.5181 ]
   },
   "properties": {
   "name":"Balko Wind LLC",
   "capacity_mw":299.7,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.3377,33.068 ]
   },
   "properties": {
   "name":"Barton Chapel Wind Farm",
   "capacity_mw":120,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.091,43.393 ]
   },
   "properties": {
   "name":"Barton Windpower LLC",
   "capacity_mw":160,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.7381,45.7644 ]
   },
   "properties": {
   "name":"Bay Windpower I",
   "capacity_mw":1.8,
   "primary_fuel":"Wind",
   "commissioning_year":2002
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.5242,32.9697 ]
   },
   "properties": {
   "name":"BayWa r.e Mozart LLC",
   "capacity_mw":30,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1178,40.6528 ]
   },
   "properties": {
   "name":"Bayonne MUA- Leitner-Poma Wind Turbine",
   "capacity_mw":1.5,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.1646,42.107 ]
   },
   "properties": {
   "name":"Beaver Creek Wind",
   "capacity_mw":170,
   "primary_fuel":"Wind",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.35,44.4967 ]
   },
   "properties": {
   "name":"Beaver Ridge Wind",
   "capacity_mw":4.5,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.4997,43.2569 ]
   },
   "properties": {
   "name":"Beebe 1B",
   "capacity_mw":50.4,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.4997,43.2569 ]
   },
   "properties": {
   "name":"Beebe Renewable Energy LLC",
   "capacity_mw":81.6,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -80.4925,38.0878 ]
   },
   "properties": {
   "name":"Beech Ridge Energy LLC",
   "capacity_mw":100.5,
   "primary_fuel":"Wind",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.08,43.16 ]
   },
   "properties": {
   "name":"Beethoven Wind",
   "capacity_mw":80,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.4803,43.0536 ]
   },
   "properties": {
   "name":"Bennett Creek Windfarm LLC - Mountain Home",
   "capacity_mw":21,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -117.3439,44.3669 ]
   },
   "properties": {
   "name":"Benson Creek Windfarm (Burnt River)",
   "capacity_mw":10,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.4504,43.7246 ]
   },
   "properties": {
   "name":"Bent Tree Wind Farm Phase 1",
   "capacity_mw":201.3,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.4886,40.695 ]
   },
   "properties": {
   "name":"Benton County Wind Farm",
   "capacity_mw":130.5,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.275,42.5867 ]
   },
   "properties": {
   "name":"Berkshire Wind Power Project",
   "capacity_mw":15,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.4747,34.5753 ]
   },
   "properties": {
   "name":"Bethel Wind Farm LLC",
   "capacity_mw":276,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.1919,43.6122 ]
   },
   "properties": {
   "name":"Big Blue",
   "capacity_mw":36,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.3039,45.9192 ]
   },
   "properties": {
   "name":"Big Horn Wind II",
   "capacity_mw":50,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2896,45.8877 ]
   },
   "properties": {
   "name":"Big Horn Wind Project",
   "capacity_mw":199,
   "primary_fuel":"Wind",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.4561,41.5992 ]
   },
   "properties": {
   "name":"Big Sky Wind LLC",
   "capacity_mw":240,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.3883,32.2075 ]
   },
   "properties": {
   "name":"Big Spring Wind Power Facility",
   "capacity_mw":34.3,
   "primary_fuel":"Wind",
   "commissioning_year":1999
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.4647,45.655 ]
   },
   "properties": {
   "name":"Big Top LLC",
   "capacity_mw":1.7,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -82.7825,43.8508 ]
   },
   "properties": {
   "name":"Big Turtle Wind Farm  LLC",
   "capacity_mw":49.4,
   "primary_fuel":"Wind",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.6034,45.6537 ]
   },
   "properties": {
   "name":"Biglow Canyon Wind Farm",
   "capacity_mw":449.7,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -69.7619,45.1033 ]
   },
   "properties": {
   "name":"Bingham Wind",
   "capacity_mw":186,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.1208,41.2153 ]
   },
   "properties": {
   "name":"Bishop Hill Energy LLC",
   "capacity_mw":200,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.1742,41.2325 ]
   },
   "properties": {
   "name":"Bishop Hill II Wind Farm",
   "capacity_mw":81,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.5547,46.98 ]
   },
   "properties": {
   "name":"Bison 2 Wind Energy Center",
   "capacity_mw":105,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.5547,46.98 ]
   },
   "properties": {
   "name":"Bison 3 Wind Energy Center",
   "capacity_mw":105,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.5547,46.98 ]
   },
   "properties": {
   "name":"Bison 4 Wind Energy Center",
   "capacity_mw":205,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.5547,46.98 ]
   },
   "properties": {
   "name":"Bison I Wind Energy Center",
   "capacity_mw":81.8,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.2194,43.9844 ]
   },
   "properties": {
   "name":"Bisson Windfarm LLC",
   "capacity_mw":2,
   "primary_fuel":"Wind",
   "commissioning_year":2003
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.0128,45.6608 ]
   },
   "properties": {
   "name":"Black Oak Wind Farm",
   "capacity_mw":78,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.53,41.1406 ]
   },
   "properties": {
   "name":"Blackstone Wind Farm II LLC",
   "capacity_mw":200,
   "primary_fuel":"Wind",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.6233,41.1508 ]
   },
   "properties": {
   "name":"Blackstone Wind Farm LLC",
   "capacity_mw":102,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.5211,41.1147 ]
   },
   "properties": {
   "name":"Block Island Wind Farm",
   "capacity_mw":30,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.1564,43.6558 ]
   },
   "properties": {
   "name":"Blue Breezes II LLC",
   "capacity_mw":1.3,
   "primary_fuel":"Wind",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.1536,43.6558 ]
   },
   "properties": {
   "name":"Blue Breezes LLC",
   "capacity_mw":1.3,
   "primary_fuel":"Wind",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.5773,34.8508 ]
   },
   "properties": {
   "name":"Blue Canyon Windpower",
   "capacity_mw":85,
   "primary_fuel":"Wind",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.6056,34.8661 ]
   },
   "properties": {
   "name":"Blue Canyon Windpower II",
   "capacity_mw":151,
   "primary_fuel":"Wind",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.4525,34.8217 ]
   },
   "properties": {
   "name":"Blue Canyon Windpower V LLC",
   "capacity_mw":99,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.5599,34.9104 ]
   },
   "properties": {
   "name":"Blue Canyon Windpower VI LLC",
   "capacity_mw":100,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.5618,40.9315 ]
   },
   "properties": {
   "name":"Blue Creek Wind Project",
   "capacity_mw":302,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.2708,43.8794 ]
   },
   "properties": {
   "name":"Blue Sky Green Field Wind Project",
   "capacity_mw":145.2,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.3647,34.29 ]
   },
   "properties": {
   "name":"Blue Summit Wind LLC",
   "capacity_mw":135.4,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.4869,40.1006 ]
   },
   "properties": {
   "name":"Bluegrass Ridge",
   "capacity_mw":56.7,
   "primary_fuel":"Wind",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.5876,36.5522 ]
   },
   "properties": {
   "name":"Bluestem",
   "capacity_mw":198,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.9769,40.319 ]
   },
   "properties": {
   "name":"Bluff Point Wind Facility",
   "capacity_mw":119.7,
   "primary_fuel":"Wind",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.5819,33.4931 ]
   },
   "properties": {
   "name":"Bobcat Bluff Wind Project LLC",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.0933,44.05 ]
   },
   "properties": {
   "name":"Boeve Windfarm LLC",
   "capacity_mw":2,
   "primary_fuel":"Wind",
   "commissioning_year":2003
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.6139,48.9647 ]
   },
   "properties": {
   "name":"Border Winds Wind Farm",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.7383,41.3786 ]
   },
   "properties": {
   "name":"Bowling Green Wind",
   "capacity_mw":7.2,
   "primary_fuel":"Wind",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.7882,46.6115 ]
   },
   "properties": {
   "name":"Brady II Wind Energy Center",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.7651,46.6465 ]
   },
   "properties": {
   "name":"Brady Wind Energy Center",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.1478,32.9479 ]
   },
   "properties": {
   "name":"Brazos Wind Farm",
   "capacity_mw":160,
   "primary_fuel":"Wind",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.6856,36.4769 ]
   },
   "properties": {
   "name":"Breckinridge Wind Project LLC",
   "capacity_mw":98.8,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.3317,44.3197 ]
   },
   "properties": {
   "name":"Breezy Bucks I LLC",
   "capacity_mw":1.3,
   "primary_fuel":"Wind",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.3317,44.3144 ]
   },
   "properties": {
   "name":"Breezy Bucks II LLC",
   "capacity_mw":1.3,
   "primary_fuel":"Wind",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.2372,34.4323 ]
   },
   "properties": {
   "name":"Briscoe Wind Farm",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.108,34.7342 ]
   },
   "properties": {
   "name":"Broadview Energy JN  LLC",
   "capacity_mw":181.7,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.1668,34.727 ]
   },
   "properties": {
   "name":"Broadview Energy KW  LLC",
   "capacity_mw":142.6,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.305,34.7281 ]
   },
   "properties": {
   "name":"Broadview Energy Prime 2 LLC",
   "capacity_mw":9.9,
   "primary_fuel":"Wind",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.325,34.7469 ]
   },
   "properties": {
   "name":"Broadview Energy Prime LLC",
   "capacity_mw":9.9,
   "primary_fuel":"Wind",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.3231,41.3239 ]
   },
   "properties": {
   "name":"Broken Bow Wind II  LLC",
   "capacity_mw":73.1,
   "primary_fuel":"Wind",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.5681,41.4547 ]
   },
   "properties": {
   "name":"Broken Bow Wind LLC",
   "capacity_mw":79.9,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -83.2978,43.7578 ]
   },
   "properties": {
   "name":"Brookfield",
   "capacity_mw":74.8,
   "primary_fuel":"Wind",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.2414,35.0083 ]
   },
   "properties": {
   "name":"Brookfield Tehachapi 1",
   "capacity_mw":102,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.6992,39.9733 ]
   },
   "properties": {
   "name":"Brown County Wind Turbine",
   "capacity_mw":1.5,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.6911,26.5222 ]
   },
   "properties": {
   "name":"Bruennings Breeze Wind Farm",
   "capacity_mw":228,
   "primary_fuel":"Wind",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.4142,39.0039 ]
   },
   "properties": {
   "name":"Buckeye Wind Energy Center",
   "capacity_mw":205.7,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.3774,32.3713 ]
   },
   "properties": {
   "name":"Buckthorn Wind Project",
   "capacity_mw":100.5,
   "primary_fuel":"Wind",
   "commissioning_year":2018
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.6672,37.805 ]
   },
   "properties": {
   "name":"Buena Vista Energy LLC",
   "capacity_mw":38,
   "primary_fuel":"Wind",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.6353,36.7767 ]
   },
   "properties": {
   "name":"Buffalo Bear LLC",
   "capacity_mw":18.9,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.7594,43.3858 ]
   },
   "properties": {
   "name":"Buffalo Center Wind LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.0761,37.6208 ]
   },
   "properties": {
   "name":"Buffalo Dunes Wind Project",
   "capacity_mw":249.8,
   "primary_fuel":"Wind",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.177,32.3182 ]
   },
   "properties": {
   "name":"Buffalo Gap 2 Wind Farm",
   "capacity_mw":232.5,
   "primary_fuel":"Wind",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.1,32.2878 ]
   },
   "properties": {
   "name":"Buffalo Gap 3 Wind Farm",
   "capacity_mw":170.2,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.0616,32.3116 ]
   },
   "properties": {
   "name":"Buffalo Gap Wind Farm",
   "capacity_mw":120.6,
   "primary_fuel":"Wind",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3387,36.121 ]
   },
   "properties": {
   "name":"Buffalo Mountain",
   "capacity_mw":1.8,
   "primary_fuel":"Wind",
   "commissioning_year":2000
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.3442,36.1271 ]
   },
   "properties": {
   "name":"Buffalo Mountain Energy Center",
   "capacity_mw":27,
   "primary_fuel":"Wind",
   "commissioning_year":2005
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.4779,44.4328 ]
   },
   "properties": {
   "name":"Buffalo Ridge I LLC",
   "capacity_mw":50.4,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.6267,44.5281 ]
   },
   "properties": {
   "name":"Buffalo Ridge II LLC",
   "capacity_mw":210,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.5786,32.929 ]
   },
   "properties": {
   "name":"Bull Creek Wind",
   "capacity_mw":180,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -68.2425,44.7231 ]
   },
   "properties": {
   "name":"Bull Hill Wind Project",
   "capacity_mw":34.5,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.4406,41.2258 ]
   },
   "properties": {
   "name":"Bulldog",
   "capacity_mw":1.5,
   "primary_fuel":"Wind",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -113.9266,42.4903 ]
   },
   "properties": {
   "name":"Burley Butte Windpark",
   "capacity_mw":21.3,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.4919,37.8011 ]
   },
   "properties": {
   "name":"Busch Ranch Wind Energy Farm",
   "capacity_mw":29,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.4811,43.4003 ]
   },
   "properties": {
   "name":"Butler Ridge",
   "capacity_mw":54,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.4222,45.7017 ]
   },
   "properties": {
   "name":"Butter Creek Power LLC",
   "capacity_mw":5,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.4381,43.6575 ]
   },
   "properties": {
   "name":"Byron",
   "capacity_mw":1.4,
   "primary_fuel":"Wind",
   "commissioning_year":1999
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.334,40.57 ]
   },
   "properties": {
   "name":"CCC Hastings Wind Turbine",
   "capacity_mw":1.7,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.2186,43.9931 ]
   },
   "properties": {
   "name":"CG Windfarm LLC",
   "capacity_mw":2,
   "primary_fuel":"Wind",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.9247,37.4863 ]
   },
   "properties": {
   "name":"CP Bloom Wind LLC",
   "capacity_mw":178.2,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3083,35.0583 ]
   },
   "properties": {
   "name":"CTV Power Purchase Contract Trust",
   "capacity_mw":4.6,
   "primary_fuel":"Wind",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.7103,33.915 ]
   },
   "properties": {
   "name":"Cabazon Wind Farm",
   "capacity_mw":39.7,
   "primary_fuel":"Wind",
   "commissioning_year":1999
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -116.735,33.9172 ]
   },
   "properties": {
   "name":"Cabazon Wind Partners",
   "capacity_mw":41,
   "primary_fuel":"Wind",
   "commissioning_year":2002
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -87.8783,40.2117 ]
   },
   "properties": {
   "name":"California Ridge Wind Energy LLC",
   "capacity_mw":217,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.0217,32.3039 ]
   },
   "properties": {
   "name":"Callahan Divide Wind Energy Center",
   "capacity_mw":114,
   "primary_fuel":"Wind",
   "commissioning_year":2005
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.64,41.9253 ]
   },
   "properties": {
   "name":"Camelot Wind LLC",
   "capacity_mw":1.5,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3158,35.075 ]
   },
   "properties": {
   "name":"Cameron Ridge LLC",
   "capacity_mw":59.6,
   "primary_fuel":"Wind",
   "commissioning_year":1985
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.4661,26.1953 ]
   },
   "properties": {
   "name":"Cameron Wind 1 LLC",
   "capacity_mw":165,
   "primary_fuel":"Wind",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.6398,41.0906 ]
   },
   "properties": {
   "name":"Camp Grove Wind Farm",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.0489,42.8119 ]
   },
   "properties": {
   "name":"Camp Reed",
   "capacity_mw":22.5,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.275,45.7533 ]
   },
   "properties": {
   "name":"Campbell County Wind Farm",
   "capacity_mw":97.8,
   "primary_fuel":"Wind",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -105.999,43.0145 ]
   },
   "properties": {
   "name":"Campbell Hill Windpower",
   "capacity_mw":99,
   "primary_fuel":"Wind",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.0247,35.6297 ]
   },
   "properties": {
   "name":"Canadian Hills Wind",
   "capacity_mw":298.5,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.42,37.46 ]
   },
   "properties": {
   "name":"Caney River Wind Project",
   "capacity_mw":200,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.3031,44.5147 ]
   },
   "properties": {
   "name":"Canton Mountain Wind",
   "capacity_mw":22.8,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -70.5389,41.7525 ]
   },
   "properties": {
   "name":"Cape Cod Air Force Station - 6 SWS",
   "capacity_mw":3.4,
   "primary_fuel":"Wind",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.9281,31.9261 ]
   },
   "properties": {
   "name":"Capricorn Ridge Wind LLC",
   "capacity_mw":662.5,
   "primary_fuel":"Wind",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.3539,34.9806 ]
   },
   "properties": {
   "name":"Caprock Wind Farm",
   "capacity_mw":80,
   "primary_fuel":"Wind",
   "commissioning_year":2005
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.173,39.334 ]
   },
   "properties": {
   "name":"Carousel Wind Farm LLC",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.8861,41.9414 ]
   },
   "properties": {
   "name":"Carroll Area Wind Farm",
   "capacity_mw":20.7,
   "primary_fuel":"Wind",
   "commissioning_year":2015
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.93,42.1622 ]
   },
   "properties": {
   "name":"Carroll Wind Farm",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.4369,44.0247 ]
   },
   "properties": {
   "name":"Carstensen Wind",
   "capacity_mw":1.7,
   "primary_fuel":"Wind",
   "commissioning_year":2005
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -90.805,43.7339 ]
   },
   "properties": {
   "name":"Cashton Greens Wind Farm",
   "capacity_mw":5,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -106.2214,42.8847 ]
   },
   "properties": {
   "name":"Casper Wind Farm",
   "capacity_mw":17,
   "primary_fuel":"Wind",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.138,39.85 ]
   },
   "properties": {
   "name":"Casselman Wind Power Project",
   "capacity_mw":34.5,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.0172,42.8744 ]
   },
   "properties": {
   "name":"Cassia Gulch",
   "capacity_mw":18.9,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.0369,42.8444 ]
   },
   "properties": {
   "name":"Cassia Wind",
   "capacity_mw":10.5,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.7293,38.6976 ]
   },
   "properties": {
   "name":"Cedar Bluff Wind  LLC",
   "capacity_mw":198.6,
   "primary_fuel":"Wind",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.7839,40.9475 ]
   },
   "properties": {
   "name":"Cedar Creek II",
   "capacity_mw":248.3,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -104.0206,40.8944 ]
   },
   "properties": {
   "name":"Cedar Creek Wind",
   "capacity_mw":300.5,
   "primary_fuel":"Wind",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.7672,46.2456 ]
   },
   "properties": {
   "name":"Cedar Hills Wind Farm",
   "capacity_mw":19.5,
   "primary_fuel":"Wind",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -103.6781,39.4218 ]
   },
   "properties": {
   "name":"Cedar Point Wind",
   "capacity_mw":252,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -88.3297,43.6926 ]
   },
   "properties": {
   "name":"Cedar Ridge",
   "capacity_mw":67.7,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.9053,27.5761 ]
   },
   "properties": {
   "name":"Cedro Hill Wind LLC",
   "capacity_mw":150,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.6019,36.6377 ]
   },
   "properties": {
   "name":"Centennial Wind Farm",
   "capacity_mw":120,
   "primary_fuel":"Wind",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.1615,38.5032 ]
   },
   "properties": {
   "name":"Central Plains Wind Farm",
   "capacity_mw":99,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.6369,42.5644 ]
   },
   "properties": {
   "name":"Century",
   "capacity_mw":200,
   "primary_fuel":"Wind",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.2476,43.8485 ]
   },
   "properties": {
   "name":"Chamberlain Wind Project",
   "capacity_mw":2.6,
   "primary_fuel":"Wind",
   "commissioning_year":2001
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.9506,43.8997 ]
   },
   "properties": {
   "name":"Champepaden Wind Power",
   "capacity_mw":2,
   "primary_fuel":"Wind",
   "commissioning_year":2002
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.6481,32.3983 ]
   },
   "properties": {
   "name":"Champion Wind Farm LLC",
   "capacity_mw":126.5,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.0446,44.011 ]
   },
   "properties": {
   "name":"Chanarambie Power Partners  LLC",
   "capacity_mw":85.5,
   "primary_fuel":"Wind",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.954,43.917 ]
   },
   "properties": {
   "name":"Chandler Hills Wind Farm",
   "capacity_mw":2,
   "primary_fuel":"Wind",
   "commissioning_year":1999
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.5008,27.5925 ]
   },
   "properties": {
   "name":"Chapman Ranch Wind I",
   "capacity_mw":236,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.62,43.0003 ]
   },
   "properties": {
   "name":"Charles City Wind Farm",
   "capacity_mw":75,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.0708,42.3914 ]
   },
   "properties": {
   "name":"Charlestown Wind Turbine",
   "capacity_mw":1.5,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -78.4769,40.5228 ]
   },
   "properties": {
   "name":"Chestnut Flats Wind Farm",
   "capacity_mw":38,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.6736,36.5747 ]
   },
   "properties": {
   "name":"Chisholm View Wind Project",
   "capacity_mw":300,
   "primary_fuel":"Wind",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.4633,45.88 ]
   },
   "properties": {
   "name":"Chopin Wind LLC",
   "capacity_mw":10,
   "primary_fuel":"Wind",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.3725,43.6256 ]
   },
   "properties": {
   "name":"Christoffer Wind Energy I LLC",
   "capacity_mw":2.1,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.3672,43.6256 ]
   },
   "properties": {
   "name":"Christoffer Wind Energy II LLC",
   "capacity_mw":2.1,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.3619,43.6256 ]
   },
   "properties": {
   "name":"Christoffer Wind Energy III LLC",
   "capacity_mw":2.1,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.3567,43.6256 ]
   },
   "properties": {
   "name":"Christoffer Wind Energy IV LLC",
   "capacity_mw":2.1,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.991,37.355 ]
   },
   "properties": {
   "name":"Cimarron Bend Wind Project I  LLC",
   "capacity_mw":200,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -99.991,37.355 ]
   },
   "properties": {
   "name":"Cimarron Bend Wind Project II  LLC",
   "capacity_mw":200,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.2803,37.8739 ]
   },
   "properties": {
   "name":"Cimarron Wind Energy LLC",
   "capacity_mw":165.6,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -100.372,37.9013 ]
   },
   "properties": {
   "name":"Cimarron Windpower II",
   "capacity_mw":131,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.6875,33.0331 ]
   },
   "properties": {
   "name":"Cirrus Wind 1 LLC",
   "capacity_mw":61.2,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -121.3403,36.4211 ]
   },
   "properties": {
   "name":"City of Soledad Water Reclamation",
   "capacity_mw":1,
   "primary_fuel":"Wind",
   "commissioning_year":2014
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.6644,39.4375 ]
   },
   "properties": {
   "name":"Cloud County Wind Farm",
   "capacity_mw":201,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -124.0654,46.7936 ]
   },
   "properties": {
   "name":"Coastal Energy Project",
   "capacity_mw":6,
   "primary_fuel":"Wind",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -77.52,42.45 ]
   },
   "properties": {
   "name":"Cohocton Wind Project",
   "capacity_mw":87.5,
   "primary_fuel":"Wind",
   "commissioning_year":2009
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.1866,35.2542 ]
   },
   "properties": {
   "name":"Colbec's Corner  LLC",
   "capacity_mw":200,
   "primary_fuel":"Wind",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -115.4005,43.0281 ]
   },
   "properties": {
   "name":"Cold Springs Windfarm",
   "capacity_mw":23,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.6231,37.7033 ]
   },
   "properties": {
   "name":"Colorado Green Holdings LLC",
   "capacity_mw":162,
   "primary_fuel":"Wind",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -102.7431,40.7569 ]
   },
   "properties": {
   "name":"Colorado Highlands Wind",
   "capacity_mw":96.1,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.2497,41.6603 ]
   },
   "properties": {
   "name":"Com Adam 1WF-1",
   "capacity_mw":5,
   "primary_fuel":"Wind",
   "commissioning_year":2007
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.591,45.943 ]
   },
   "properties": {
   "name":"Combine Hills I",
   "capacity_mw":41,
   "primary_fuel":"Wind",
   "commissioning_year":2004
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -96.4064,44.2456 ]
   },
   "properties": {
   "name":"Community Wind North LLC",
   "capacity_mw":30,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.8028,43.7136 ]
   },
   "properties": {
   "name":"Community Wind South",
   "capacity_mw":30,
   "primary_fuel":"Wind",
   "commissioning_year":2013
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -94.6722,40.2572 ]
   },
   "properties": {
   "name":"Conception",
   "capacity_mw":50.4,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2794,45.2766 ]
   },
   "properties": {
   "name":"Condon Windpower LLC",
   "capacity_mw":49.8,
   "primary_fuel":"Wind",
   "commissioning_year":2002
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -84.5703,40.9058 ]
   },
   "properties": {
   "name":"Cooper Farms VW Project",
   "capacity_mw":4.5,
   "primary_fuel":"Wind",
   "commissioning_year":2012
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3417,35.075 ]
   },
   "properties": {
   "name":"Coram Energy LLC",
   "capacity_mw":3,
   "primary_fuel":"Wind",
   "commissioning_year":2005
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3417,35.0583 ]
   },
   "properties": {
   "name":"Coram Energy LLC (ECT)",
   "capacity_mw":7.5,
   "primary_fuel":"Wind",
   "commissioning_year":2005
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -118.3394,35.0663 ]
   },
   "properties": {
   "name":"Coram Tehachapi",
   "capacity_mw":6.5,
   "primary_fuel":"Wind",
   "commissioning_year":1992
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -101.1876,34.0603 ]
   },
   "properties": {
   "name":"Cotton Plains Wind Farm",
   "capacity_mw":50.4,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.406,40.2402 ]
   },
   "properties": {
   "name":"Cottonwood Wind Energy Center",
   "capacity_mw":89.7,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -98.5947,47.1797 ]
   },
   "properties": {
   "name":"Courtenay Wind Farm",
   "capacity_mw":200,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -95.4683,40.4535 ]
   },
   "properties": {
   "name":"Cow Branch",
   "capacity_mw":50.4,
   "primary_fuel":"Wind",
   "commissioning_year":2008
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -92.4736,43.3978 ]
   },
   "properties": {
   "name":"Crane Creek Wind Energy Center",
   "capacity_mw":99,
   "primary_fuel":"Wind",
   "commissioning_year":2010
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -89.5708,41.25 ]
   },
   "properties": {
   "name":"Crescent Ridge",
   "capacity_mw":53,
   "primary_fuel":"Wind",
   "commissioning_year":2006
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.391,41.677 ]
   },
   "properties": {
   "name":"Creston Ridge II  LLC",
   "capacity_mw":6.9,
   "primary_fuel":"Wind",
   "commissioning_year":2017
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.386,41.678 ]
   },
   "properties": {
   "name":"Creston Ridge Wind Farm",
   "capacity_mw":6.8,
   "primary_fuel":"Wind",
   "commissioning_year":2016
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -79.29,39.4047 ]
   },
   "properties": {
   "name":"Criterion",
   "capacity_mw":70,
   "primary_fuel":"Wind",
   "commissioning_year":2011
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -97.58,42.6983 ]
   },
   "properties": {
   "name":"Crofton Bluffs Wind LLC",
   "capacity_mw":40,
   "primary_fuel":"Wind",
   }
 },
 {
   }