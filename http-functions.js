import Stripe from 'stripe';
import wixData from 'wix-data';
import { ok, badRequest, serverError } from 'wix-http-functions';
import { getSecret } from 'wix-secrets-backend';

const secretKey = getSecret('STRIPE_INIT_SECRET_KEY')
const stripe = Stripe(secretKey, {
    apiVersion: "2025-03-31.basil",
});

export async function post_webhook(request) {
  const webhookSecret = await getSecret("STRIPE_WEBHOOK_SECRET");
  const signature = request.headers["stripe-signature"];

  const rawBody = await request.body.text();
  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
    console.log(event)
  }
  catch (error) {
    console.error(' stripe.webhooks.constructEvent', error);
    return badRequest({ body: { errorMessage: error.message } });
  }
  
  try {
    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object;
      console.log({ paymentIntent});
      const firstName = paymentIntent.shipping?.name?.split(' ')[0] || null;

      const paymentData = {
        firstName,
        stripeCustomerId: paymentIntent.customer || null,
        paidOn: new Date(paymentIntent.created * 1000),
        paidWith: paymentIntent.payment_method || null, // Payment method ID
      };
      console.log({ paymentData });
      
      await wixData.insert("Payments", paymentData);
    }

    return ok({ body: {received: true} });
  } catch (error) {
    console.error(error);
    return  serverError({ body: { errorMessage: error.message } });
  }
}

export async function post_createCheckoutSession() {
    const session = await stripe.checkout.sessions.create({
        ui_mode: "custom",
        mode: "payment",
        return_url: `TODO`,
    });

    const response = {
        body: { clientSecret: session.client_secret },
        "headers": {
            "Content-Type": "application/json"
        }
    }
    return ok(response)
}