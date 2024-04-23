const express = require("express");
const LocationController = require("../controllers/LocationController");
const RestaurantController = require("../controllers/RestaurantContoller");
const UserController = require("../controllers/UserController");
const PaymentController = require("../controllers/PaymentController");
const AppRoutes = express.Router();

AppRoutes.get("/", LocationController.getHome);

AppRoutes.get("/get-location-list", LocationController.getLocationList);

AppRoutes.get(
  "/get-restaurant-list-by-location-id/:loc_id",
  RestaurantController.getRestaurantList
);
AppRoutes.get(
  "/get-restaurant-details-by-id/:id",
  RestaurantController.getRestaurantByid
);
AppRoutes.get("/get-meal-types-list", RestaurantController.getMealTypeList);
AppRoutes.get(
  "/get-menu-items-by-restaurant-id/:r_id",
  RestaurantController.getMenuItemByRestaurantId
);

AppRoutes.post("/create-user-account", UserController.createUserAccount);
AppRoutes.post("/user-login", UserController.userLogin);

AppRoutes.post("/filter", RestaurantController.filter);

AppRoutes.post("/create-order-id", PaymentController.createOrderId);
AppRoutes.post("/verify-payment", PaymentController.verifyPayment);

module.exports = AppRoutes;
