"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_routes_1 = require("../modules/Product/Product.routes");
const Order_routes_1 = require("../modules/Order/Order.routes");
const router = (0, express_1.Router)();
const modulesRoutes = [
    {
        path: '/products',
        router: Product_routes_1.productRoutes,
    },
    {
        path: '/orders',
        router: Order_routes_1.orderRoutes,
    },
];
modulesRoutes.forEach((route) => router.use(route.path, route.router));
exports.default = router;
