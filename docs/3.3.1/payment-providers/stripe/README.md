# Stripe  

## Configure Stripe

Login to the [Stripe dashboard](https://dashboard.stripe.com/).

### Live API Keys

Click **Developers** and then **API Keys** in the left hand side menu. On the right hand side you will find your **Publishable key**. To view your **Secret key**, click the **Reveal live key token**.

![stripe_001.png](/img/stripe_001.png)

### Test API Keys

To retreieve your test API keys, click the **View test data** toggle switch in the left hand side menu and then repeat the steps outlined in the [Live API Keys](#live-api-keys) section above.

![stripe_002.png](/img/stripe_002.png)

### Webhook Notifications

When using the Stripe provider, the status of an order is updated based on responses from Stripe sent over webhooks. Tea Commerce automatically creates a webhook communication URL for you which should be registered with Stripe as follows.

Click **Developers** and then **Webhooks** in the left hand side menu. On the right hand side, click **Add Endpoint** and enter the Tea Commerce cummunication URL as follows (replacing the parameters in square brackets with the corisponding values taken from your store):

`https://[domain]/base/TC/PaymentCommunicationWithoutOrderId/[storeId]/Stripe%20-%20inline/[paymentMethodId]`

![stripe_003a.png](/img/stripe_003a.png)

From the **Version** dropdown select **Latest API version (2019-05-16)** and then in the **Events to send** dropdown select the following events:

* `charge.succeed`
* `charge.failed`
* `charge.captured`
* `charge.refunded`

Click **Add endpoint** to create the webhook endpoint registration and be send to the webhook details screen.

Finally, from this screen, located the **Signing secret** section and click the **Click to reveal** button to display and take note of the webhook signing secret as we will need this later so that we can validate webhook requests.

![stripe_003a.png](/img/stripe_003c.png)

**NB** You'll need to configure a webhook endpoint for both test and live configurations. To configure the test webhook, toggle the **View test data** toggle in the left hand side menu and then repeat the steps from above.

### Radar

The Stripe payment provider is automatically configured to send through billing contact information, this is in order for you to be able to perform validation rules using Stripe Radar. It is optional, but strongly recommended that you configure Radar Rules to validate the submitted Credit Card against these billing details. See the [Radar documentation](https://stripe.com/docs/radar/rules) for more details.

## Configure Tea Commerce

Create a payment method and select **Stripe - inline** as the payment provider. Now configure the settings as follows.

| Key | Description |
| --- | ----------- |
| form_url | The url of the page with the Stripe payment form on - e.g. /payment/ |
| continue_url | The url to navigate to after payment is processed - e.g. /confirmation/ | 
| cancel_url | The url to navigate to if the customer cancels the payment - e.g. /cancel/ | 
| billing_address_line1_property_alias | The alias of the property containing line 1 of the billing address - e.g. addressLine1. Used by Stripe for Radar verification. | 
| billing_address_line2_property_alias | The alias of the property containing line 2 of the billing address - e.g. addressLine2. Used by Stripe for Radar verification. |
| billing_city_property_alias | The alias of the property containing the billing address city - e.g. city. Used by Stripe for Radar verification. | 
| billing_state_property_alias | The alias of the property containing the billing address state - e.g. state. Used by Stripe for Radar verification. | 
| billing_zip_code_property_alias | The alias of the property containing the billing address zip code - e.g. zipCode. Used by Stripe for Radar verification. |
| test_secret_key | Your test stripe secret key. |
| test_public_key | Your test stripe public key. |
| test_webhook_secret | Your test webhook signing secret for validating webhook requests. |
| live_secret_key | Your live stripe secret key. |
| live_public_key | Your live stripe public key. |
| live_webhook_secret | Your live webhook signing secret for validating webhook requests. |
| mode | The mode of the provider - test/live. |
| send_stripe_receipt | Flag indicating whether to send a Stripe receipt to the customer - true/false. |

![stripe_004.png](/img/stripe_004.png)

## Useful Links

* [Stripe Website](https://www.stripe.com/) 
* [Stripe API Documentation](https://stripe.com/docs/api)
* [Stripe Radar Documentation](https://stripe.com/docs/radar/rules)
* [Stripe Dashboard](https://dashboard.stripe.com/)
