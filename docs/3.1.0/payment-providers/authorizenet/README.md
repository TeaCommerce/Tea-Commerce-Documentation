# Authorize.Net

You can apply for a [Authorize.net developer test account](https://developer.authorize.net/testaccount) to get you started. When you have applied for the your developer account you will be presented with a screen with your API Login ID, Transaction Key and Secret Answer (Key) – save those for future use.

![authorize-net-1.png](/img/authorizenet_credentials.png)

## Configure Authorize.Net

Login to the [Authorize.net administration](https://sandbox.authorize.net/).

### Signature Key

Click **Account** in the top menu and find and click the link named **API Credentials & Keys**. At the bottom, enter your secret answer from earlier into the **Secret Answer** input field and select the **Signature Key** radio button. 

![signature-2.png](/img/authorizenet_signature01.png)

Click **Submit** then save the displayed signature key for later use.

![signature-2.png](/img/authorizenet_signature02.png)

### Transaction Details API

Activate the Transaction Details API by clicking **Account** and then **Transaction Details API**. Type in your answer to your secret question and hit **Enable Transaction Details API**.

![authorize-net-3.png](/img/ef97200-authorize-net-3.png)

### Webhook

We need to configure a webhook in order to allow Authorize.net to notify Tea Commerce of any changes to a transaction and also to be notifed of successfull transaction.

Go to **Account** and click **Webhooks** and then click **Add Endpoint**. 

![webhooks-01.png](/img/authorizenet_webhooks_01.png)

Give the endpoint a name and then enter the callback url into the endpoint url field.

This url should look something like this: 

    http://[domain]/base/TC/PaymentCallbackWithoutOrderId/[storeId]/AuthorizeNet/[paymentMethodId]

You should replace **[domain]** with your sites domain, **[storeId]** with the store id of your store and **[paymentMethodId]** with the id of your Tea Commerce paymentmethod using Authorize.net

In the status dropdown select **active** and then from the events list select the checkbox next to **Payment events** and click **save**.

![webhooks-02.png](/img/authorizenet_webhooks_02.png)

### Payment Form – Form Fields

Next click **Account -> Payment Form -> Form fields**. You have to configure which fields should be presented to the end-user. For the Tea Commerce Authorize.net payment provider the only field that should be visible is the **Invoice No**. Check in the view column. All other fields must be set to not visible/edit

![authorize-net-5.png](/img/0c54bdd-authorize-net-5.png)

## Configure Tea Commerce

Create a payment method and select **Authorize.net** as the payment provider. Now configure the settings.

Authorize.net supports a wide range of different settings which you can read more about in their [documentation](https://developer.authorize.net/api/reference/features/accept_hosted.html).

| Key | Description |
| --- | ----------- |
| continue_url | The URL to return to once payment is complete. e.g. /continue/ |
| cancel_url | The URL to return to if a payment is canceled. e.g. /cancel/ |
| order_options_merchant_name | The merchant name to appear on the payment gateway. |
| capture | Whether to capture or just authorise the payment. true/false |
| sandbox_api_login_id | The API Login ID for the sandbox test account. |
| sandbox_transaction_key | The Transaction Key for the sandbox test account. |
| sandbox_signature_key | The Signature Key for the sandbox test account. | 
| live_api_login_id | The API Login ID for the live account. |
| live_transaction_key | The Transaction Key for the live account. |
| live_signature_key | The Signature Key for the live account. |
| mode | The mode of the provider. sandbox/live |

In addition to the core documented settings above, you can also add settings for all the possible [Payment Form Paramters](https://developer.authorize.net/api/reference/features/accept_hosted.html#Hosted_Form_Parameter_Settings) that Authorize.net supports. 

To add a setting, you should take the **setting name** and remove **hostedPayment** from the begining and then combine it with the **parameter key**, all formated in snake_case, for example, to set the **hostedPaymentReturnOptions.urlText** setting to **Return to site**, you would add a setting of **return_options_url_text** and set it's value to **Return to site**.

![authorize-net-7.png](/img/authorizenet_umbraco.png)

## Useful Links

* [Authorize.net Website](http://www.authorize.net/)
* [Authorize.net Accept Hosted](https://developer.authorize.net/api/reference/features/accept_hosted.html)
