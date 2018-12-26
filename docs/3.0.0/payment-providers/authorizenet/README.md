# Authorize.Net

You can apply for a [Authorize.net developer test account](https://developer.authorize.net/testaccount) to get you started. When you have applied for the your developer account you will be presented with a screen with your API Login ID and Transaction Key – save those for future use.

![authorize-net-1.png](/img/74d4fe2-authorize-net-1.png)

## Configure Authorize.Net

Login to the [Authorize.net administration](https://sandbox.authorize.net/).

## MD5 Hash

Click **Account** in the top menu and find the link named **MD5-Hash**. Write a new hash value and click **Submit**. Save this hash value for later use.

![authorize-net-2.png](/img/873074a-authorize-net-2.png)

## Transaction Details API

Activate the Transaction Details API by clicking **Account** and then **Transaction Details API**. Type in your answer to your secret question and hit **Enable Transaction Details API**.

![authorize-net-3.png](/img/ef97200-authorize-net-3.png)

## Silent Post URL

Now go to **Account** and click **Silent Post URL**. This is the callback url for your site so Authorize.net can finalize the order correctly.

This url should look something like this: 

http://[domain]/base/TC/PaymentCallbackWithoutOrderId/[storeId]/AuthorizeNet/[paymentMethodId]

You should replace [domain] with your sites domain, [storeId] with the store id of your store and [paymentMethodId] with the id of your Tea Commerce paymentmethod using Authorize.net

![authorize-net-4.png](/img/e69ab6d-authorize-net-4.png)

## Payment Form – Form Fields

Next click **Account -> Payment Form -> Form fields**. You have to configure which fields should be presented to the end-user. For the Tea Commerce Authorize.net payment provider the only field that should be visible is the **Invoice No**. Check in the view column. All other fields must be set to not visible/edit

![authorize-net-5.png](/img/0c54bdd-authorize-net-5.png)

## Receipt Link Text

Final step in the Authorize.net configuration is to set the link text for the end-user to click in the Authorize.net receipt page. Click **Account -> Response/Receipt URLs -> Default Receipt URL EDIT -> Receipt Link Text** and set the link text.

![authorize-net-6.png](/img/b395cf9-authorize-net-6.png)

## Configure Tea Commerce

Create a payment method and select **Authorize.net** as the payment provider. Now configure the settings.

Authorize.net supports a wide range of different settings which you can read more about in their [documentation](https://developer.authorize.net/api/sim/).

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>x_login</td>
		<td>API Login ID you got when you applied for an account</td>
	</tr>
	<tr>
		<td>x_receipt_link_url</td>
		<td>URL customer is redirected to when the payment is completed</td>
	</tr>
	<tr>
		<td>x_cancel_url</td>
		<td>URL customer is redirected to when he cancels the payment</td>
	</tr>
	<tr>
		<td>x_type</td>
		<td>Tells whether the payment is deducted immediately from the customer’s credit card</td>
	</tr>
	<tr>
		<td>transactionKey</td>
		<td>API Login ID you got when you applied for an account</td>
	</tr>
	<tr>
		<td>md5HashKey</td>
		<td>Find it in Authorize.Net administration
**Account -&gt; MD5-Hash**</td>
	</tr>
	<tr>
		<td>testing</td>
		<td>Whether or not demo mode is enabled</td>
	</tr>
</table>

![authorize-net-7.png](/img/3caa253-authorize-net-7.png)

## Useful links

* [Authorize.net website](http://www.authorize.net/)
* [Authorize.net SIM API](https://developer.authorize.net/api/sim/)
