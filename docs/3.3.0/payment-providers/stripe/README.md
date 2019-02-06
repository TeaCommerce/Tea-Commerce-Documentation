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

When using the Stripe provider, the payment status will be updated as actions occur within the system. If you'd like payment statuses to be updated if a payment is updated from within Stripe (Refund, Capture, etc) then you can use Stripe webhooks to do this.

Click **Developers** and then **Webhooks** in the left hand side menu. On the right hand side, click **Add Endpoint** and enter the Tea Commerce cummunication URL as follows (replacing the parameters in square brackets with the corisponding values taken from your store):

`https://[domain]/base/TC/PaymentCommunicationWithoutOrderId/[storeId]/Stripe%20-%20inline/[paymentMethodId]`

![stripe_003.png](/img/stripe_003.png)

You can leave **Filter events** set to all event types, or you can select just the **charge** based event types. Click **Add endpoint** to add the endpoint.

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
| live_secret_key | Your live stripe secret key. |
| live_public_key | Your live stripe public key. |
| mode | The mode of the provider - test/live. |
| capture | Flag indicating if a payment should be captured instantly - true/false. |
| send_stripe_receipt | Flag indicating whether to send a Stripe receipt to the customer - true/false. |

![stripe_004.png](/img/stripe_004.png)

## Useful Links

* [Stripe Website](https://www.stripe.com/) 
* [Stripe API Documentation](https://stripe.com/docs/api)
* [Stripe Radar Documentation](https://stripe.com/docs/radar/rules)
* [Stripe Dashboard](https://dashboard.stripe.com/)
