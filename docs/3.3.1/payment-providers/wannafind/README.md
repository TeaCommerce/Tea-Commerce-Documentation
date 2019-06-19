# Wannafind

::: warning Legacy

The Wannafind payment provider is built upon a legacy API. There isn't currently a confirmed deactivation timeframe for this API, however implementors should be aware that it may be replaced in future. Wannafind is being replaced with OnPay.

:::

Before you begin, please ensure you have signed up for a [Wannafind account](https://www.wannafind.dk/betalingssystem/). A trial account should be enough to get you started. You will want to sign up for the **Payment System** product. Once signed up, you will receive an email saying you have been invited to the **OnPay** platform. 

![OnPay Email](/img/onpay_email.png)

Click the **Finish Registration** link in the email and compelte the online form to register for the **OnPay** portal.

## Configure Wannafind

Login to the [OnPay Portal](https://manage.onpay.io/login).

In the menu, under **Legacy industillinger**, click the **Integrationer** link. 

![Menu](/img/onpay_legacy_menu.png)

Next, under the **MD5 indistillinger** heading, check the **MD5 aktiveret** checkbox and fill in the **MD5 godkendelse af checksum** and **MD5 callback checksum** dropdowns and fields as follows.

![Integrations](/img/onpay_legacy_md5.png)

Be sure to have the same order as in the screenshot above. You will also have to change the MD5 auth secret and a MD5 callback secret for the last two fields. Generate two secrets – min. 10 charaters, a-Z 0-9. 

Click the **Gem indstillinger** button to save.

Finally we need to create an API user in order to perform tasks on an order within the back office. In the menu, under **Legacy industillinger**, click the **API user** link. 

![API User](/img/onpay_legacy_apiuser.png)

In the form on the right hand side, enter and **user name** and **password** for the API user and click the **Create** button. 

## Configure Tea Commerce

Create a payment method and select **Wannafind** as the payment provider. Now configure the settings.

Wannafind supports a wide range of different settings which you can read more about in their [documentation](https://static.zitcom.dk/marketing/wannafind/paymentgateway_documentation.pdf).

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>shopid</td>
		<td>Find it in OnPay menu under the heading <b>Gateway ID</b></td>
	</tr>
	<tr>
		<td>lang</td>
		<td>UI language of the payment window presented to the customer</td>
	</tr>
	<tr>
		<td>accepturl</td>
		<td>URL customer is redirected to when the payment is completed</td>
	</tr>
	<tr>
		<td>declineurl</td>
		<td>URL customer is redirected to when he cancels the payment</td>
	</tr>
	<tr>
		<td>cardtype</td>
		<td>Which card types should be possible for the customer to choose</td>
	</tr>
	<tr>
		<td>md5AuthSecret</td>
		<td>The secret string entered in the last field of the <b>Integrations &gt; MD5 approval for checksum</b> configuration earlier</td>
	</tr>
	<tr>
		<td>md5CallbackSecret</td>
		<td>The secret string entered in the last field of the <b>Integrations &gt; MD5 callback checksum</b> configuration earlier</td>
	</tr>
	<tr>
		<td>apiUser</td>
		<td>The API user username created earlier</td>
	</tr>
	<tr>
		<td>apiPassword</td>
		<td>The API user password created earier</td>
	</tr>
	<tr>
		<td>testmode</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![Wannafind Settings](/img/wannafind_settings.png)

## Configure Website

To use the Wannafind payment provider, it is required by Wannafind, that you add the following script reference in your &lt;head&gt; section of your website. The script handles the opening of the payment window in a popup window.

````html
<script type="text/javascript" src="https://betaling.wannafind.dk/customers/wannafind/js/openpaymentwindow.js"></script>
````

## Useful Links

  * [Wannafind website](https://www.wannafind.dk/)
  * [Wannafind API – input parameters](https://static.zitcom.dk/marketing/wannafind/paymentgateway_documentation.pdf)
