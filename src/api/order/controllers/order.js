"use strict";

/**
 * order controller
 */
const Stripe = require("stripe");
const stripe = new Stripe(
  "sk_test_51NwGSBFSf4AIOY8sX8BRik6m9H8S7sy1kFsPT3LfEtFN9jsLRZE5pmQRqzUVRJKmie0mTkWCbaJmF5VTQV50IiAa00kFH12c7c",
  {
    apiVersion: "2024-02-19",
  }
);
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order");
