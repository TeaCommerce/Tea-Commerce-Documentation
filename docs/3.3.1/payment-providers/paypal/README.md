# PayPal

::: warning SSL

As of June 2015 all callbacks done by PayPal **must** be to a domain with SSL and minumum SHA2 encrypted SSL certificate. This is also true for your dev url's. 

:::

## Configure PayPal

Login to the [PayPal administration](https://www.paypal.com/signin/?country.x=US).

### API Information

To set up your API credentials click on tools in the top menu and click on API credentials.

![paypal-1.png](/img/299a8e9-paypal-1.png)

On the API Access screen choose option 2 **Request API credentials to create your own API username and password**.

![paypal-2.png](/img/2007fd0-paypal-2.png)

If you had not yet requested API credentials this will lead you to a screen where you choose between an API signature or an API certificate. On this screen pick API signature.

![paypal-3.png](/img/cc384b3-paypal-3.png)

On your API Signature screen you can choose to view your API username, API password and signature. These are used later on in configuration of Tea Commerce.

## Configure Tea Commerce

Create a payment method and select **PayPal** as the payment provider. Now configure the settings.

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>business</td>
		<td>A confirmed email address associated with the PayPal account.</td>
	</tr>
	<tr>
		<td>lc</td>
		<td>UI language of the payment window presented to the customer</td>
	</tr>
	<tr>
		<td>return</td>
		<td>URL customer is redirected to when the payment is completed</td>
	</tr>
	<tr>
		<td>cancel_return</td>
		<td>URL customer is redirected to when he cancels the payment</td>
	</tr>
	<tr>
		<td>paymentaction</td>
		<td>Whether the payment is deducted immediately from the customers credit card</td>
	</tr>
	<tr>
		<td>USER</td>
		<td>Find it in PayPal administration
**API signature page**</td>
	</tr>
	<tr>
		<td>PWD</td>
		<td>Find it in PayPal administration
**API signature page**</td>
	</tr>
	<tr>
		<td>SIGNATURE</td>
		<td>Find it in PayPal administration
**API signature page**</td>
	</tr>
	<tr>
		<td>isSandbox</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![paypal-4.png](/img/61166cd-paypal-4.png)

## Useful Links

  * [PayPal website](https://www.paypal.com/)
  * [PayPal Payments Standard documentation](https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/)
  * [PayPal developer website](https://developer.paypal.com/)

