# PayEx

## Configure PayEx

Login to the [PayEx administration](http://payex.com/login/).

## Add server IP

First you need to add the IP of your server running your webshop. Click **Merchant profile** in the left menu, enter the server IP and click **save**.

![payex-1.png](/img/e6e8651-payex-1.png)

## Generate encryption key

Next up is to generate an encryption key. Click **New encryption key** and copy it for later use and then click **Save encryption key**.

![payex-2.png](/img/1de2587-payex-2.png)

## Configure Tea Commerce

Create a payment method and select **PayEx** as the payment provider. Now configure the settings.

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>accountNumber</td>
		<td>Find it in PayEx administration
**Merchant profile** page</td>
	</tr>
	<tr>
		<td>clientLanguage</td>
		<td>UI language of the payment window presented to the customer</td>
	</tr>
	<tr>
		<td>returnURL</td>
		<td>URL customer is redirected to when the payment is completed</td>
	</tr>
	<tr>
		<td>cancelUrl</td>
		<td>URL customer is redirected to when he cancels the payment</td>
	</tr>
	<tr>
		<td>purchaseOperation</td>
		<td>Whether the payment is deducted immediately from the customers credit card</td>
	</tr>
	<tr>
		<td>encryptionKey</td>
		<td>Encryption key generated in PayEx</td>
	</tr>
	<tr>
		<td>testing</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![payex-3.png](/img/125f960-payex-3.png)

## Useful links

  * [PayEx website](http://payex.com/)
