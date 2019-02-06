# QuickPay

## Configure QuickPay

Login to the [QuickPay administration](https://manage.quickpay.net/).

Click **Indstillinger -> Min konto** in the left handside menu and change the language to english. Log out and login again.

![quickpay-1.png](/img/ea8736d-quickpay-1.png)

Now go to **Settings -> Merchant** and type in your information.

![quickpay-2.png](/img/429b112-quickpay-2.png)

Lastly go to **Settings -> API Access** and type in the IP address of your server running Tea Commerce.

![quickpay-3.png](/img/414d9dc-quickpay-3.png)

## Configure Tea Commerce

Create a payment method and select **QuickPay** as the payment provider. Now configure the settings.

QuickPay supports a wide range of different settings which you can read more about in their [documentation](http://doc.quickpay.dk/api/specificationsandfeatures.html#index2h2).

<table>
	<tr>
		<td>merchant</td>
		<td>Find it in QuickPay administration
**Settings -&gt; Merchant -&gt; QuickpayId**</td>
	</tr>
	<tr>
		<td>language</td>
		<td>UI language of the payment window presented to the customer</td>
	</tr>
	<tr>
		<td>continueurl</td>
		<td>URL customer is redirected to when the payment is completed</td>
	</tr>
	<tr>
		<td>cancelurl</td>
		<td>URL customer is redirected to when he cancels the payment</td>
	</tr>
	<tr>
		<td>autocapture</td>
		<td>Whether the payment is deducted immediately from the customers credit card</td>
	</tr>
	<tr>
		<td>cardtypelock</td>
		<td>Which card types the customer can select to pay with</td>
	</tr>
	<tr>
		<td>md5secret</td>
		<td>Find it in QuickPay administration
**Settings -&gt; MD5 secret**</td>
	</tr>
	<tr>
		<td>testmode</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![quickpay-4.png](/img/1f8814d-quickpay-4.png)

## Useful Links

  * [QuickPay website](https://quickpay.net/)
  * [QuickPay API – input parameters](http://doc.quickpay.dk/api/specificationsandfeatures.html#index2h2)
