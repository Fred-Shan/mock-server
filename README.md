# Setup
```
npm install
npm start
```
# API
`http://localhost:3001/files/00000000000000000000000000000001`

`http://localhost:3001/files/00000000000000000000000000000001/etc/mac/product/product.json`

`http://localhost:3001/files/:assetId`  
*for example: http://localhost:3001/files/8a8181066434b3b10164694fa3ac000f*

`http://localhost:3001/timeseries/:assetId/:aspect?from=:from&to=:to&limit=:limit&select=:aspect`  
*for example: http://localhost:3001/timeseries/8a8181066434b3b101645f7def63000d/OUTPUT?from=2018-07-05T08:59:00.000Z&to=2018-07-18T08:59:00.000Z&limit=5&select=OUTPUT*

`http://localhost:3001/timeseries/:assetId/:aspect?select=:aspect`  
*for example: http://localhost:3001/timeseries/8a8181066434b3b101645f7def63000d/FPY?select=FPY*