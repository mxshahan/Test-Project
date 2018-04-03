import React, { Component } from 'react';
import {StripeCheckout} from 'react-stripe-checkout';

export const handler = StripeCheckout.configure({
  key: 'pk_test_w4b6hSLwG2b0zTdYBD1sK4hY',
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function(token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
  }
});
