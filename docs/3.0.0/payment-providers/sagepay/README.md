# Sage Pay

You can apply for a [Sage Pay Simulator account](https://applications.sagepay.com/apply/RequestSimAccount.aspx) to get you started.

## Configure Sage Pay

Login to the [Sage Pay administration](https://test.sagepay.com/Simulator/).

Click the red **Account** button at the bottom of the screen and insert the URL of your webshop. You also need to add the IP of your server running Tea Commerceand add the currencies you want to support.

![sage-pay-1.png](/img/2584fb1-sage-pay-1.png)

![sage-pay2.png](/img/352ad29-sage-pay2.png)

![sage-pay-3.png](/img/b9b160a-sage-pay-3.png)

## Configure Tea Commerce

Create a payment method and select **Sage Pay** as the payment provider. Now configure the settings.

Sage Pay support a wide range of different settings which you can read more about in their [documentation](http://www.sagepay.co.uk/support/find-an-integration-document/server-integration-documents).

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Vendor</td>
		<td>Your vendor login for Sage Pay</td>
	</tr>
	<tr>
		<td>SuccessURL</td>
		<td>URL customer is redirected to when the payment is completed</td>
	</tr>
	<tr>
		<td>FailureURL</td>
		<td>URL customer is redirected to when he cancels the payment</td>
	</tr>
	<tr>
		<td>TxType</td>
		<td>Whether the payment is deducted immediately from the customers credit card</td>
	</tr>
	<tr>
		<td>streetAddressPropertyAlias</td>
		<td>Order property alias containing the street address</td>
	</tr>
	<tr>
		<td>cityPropertyAlias</td>
		<td>Order property alias containing the city</td>
	</tr>
	<tr>
		<td>zipCodePropertyAlias</td>
		<td>Order property alias containing the zip code</td>
	</tr>
	<tr>
		<td>Description</td>
		<td>A static description that we be in the payment window</td>
	</tr>
	<tr>
		<td>testMode</td>
		<td>Whether or not demo mode is enabled</td>
	</tr>
</table>

![sage-pay-4.png](/img/ba2a375-sage-pay-4.png)

## Useful Links

  * [Sage Pay website](http://www.sagepay.com/)
  * [Create Sage Pay simulator account](https://applications.sagepay.com/apply/RequestSimAccount.aspx)
  * [Sage Pay server integration guide](http://www.sagepay.co.uk/support/find-an-integration-document/server-integration-documents)
