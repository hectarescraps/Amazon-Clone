const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe =
  require("stripe")();
  //input your own Stripe Secret Key Here

/* API */

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://127.0.0.1:5001/clone-874e4/us-central1/api
