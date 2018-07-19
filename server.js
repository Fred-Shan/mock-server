const jsonServer = require('json-server');
const server = jsonServer.create();
const db = require('./db');
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults();

let argv = require('minimist')(process.argv.slice(2));

server.use(middlewares);

server.use(jsonServer.rewriter({
    "/files/00000000000000000000000000000001": "/files",
    "/files/00000000000000000000000000000001/etc/mac/product/:product.json": "/:product",
    "/files/:assetId": "/productionLineFiles?assetId=:assetId",
    "/files/:assetId/etc/mac/line/product_line.json": "/productionLineFile?assetId=:assetId",
    "/timeseries/:assetId/:aspect?from=:from&to=:to&limit=:limit&select=:aspect": "/:aspect?assetId=:assetId&_time_gte=:from&_time_lte=:to&_limit=:limit",
    "/timeseries/:assetId/:aspect?select=:aspect": "/:aspect?assetId=:assetId"
}));

router.render = (req, res) => {
    if (req.url.indexOf("product") !== -1 && req.url.indexOf("productionLineFiles") === -1) {
        res.header('Content-Type', 'application/octet-stream');
    }

    if (req.path === '/OUTPUT' || req.path === '/FPY' || req.path === '/STATUS' || req.path === '/ChangeOver' || req.path === '/STOPCODE') {
        let response = res.locals.data[req.query.assetId];
        if (req.query._time_lte && req.query._time_gte) {
            let _time_lte = new Date(req.query._time_lte);
            let _time_gte = new Date(req.query._time_gte);

            response = response.filter(ele => {
                let _time = new Date(ele._time);
                return _time <= _time_lte && _time >= _time_gte;
            });
        } else {
            response = response.slice(response.length - 1);
        }
        if (req.query._limit) {
            response = response.length > req.query._limit ? response.slice(0, req.query._limit) : response;
        }

        res.jsonp(response);
    } else if (req.path === '/productionLineFiles') {
        let response = res.locals.data[req.query.assetId];
        res.jsonp(response);
    } else if (req.path === '/productionLineFile') {
        let response = res.locals.data[req.query.assetId];
        res.jsonp(response);
    } else {
        res.jsonp(res.locals.data);
    }
};

server.use(router);

server.listen(argv.port, () => {
    console.log('JSON Server is running');
});