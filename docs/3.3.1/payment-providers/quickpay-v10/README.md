# QuickPay v10

## Configure QuickPay

Login to the [QuickPay administration](https://manage.quickpay.net/).

Click **Settings -> Merchant** in the left handside menu and type in your information.

![quickpay-1.png](/img/e280e6d-quickpay-1.png)

## Configure Tea Commerce

Create a payment method and select **QuickPay10** as the payment provider. Now configure the settings.

QuickPay supports a wide range of different settings which you can read more about in their [documentation](https://learn.quickpay.net/tech-talk/payments/form/#parameters).

<table>
	<tr>
		<td>merchant_id</td>
		<td>Find it in QuickPay administration
**Settings -&gt; Integration -&gt; Merchantid**</td>
	</tr>
	<tr>
		<td>apiKey</td>
		<td>Find it in QuickPay administration
**Settings -&gt; Integration -&gt; API user -&gt; API KEY**</td>
	</tr>
	<tr>
		<td>windowApiKey</td>
		<td>Find it in QuickPay administration
**Settings -&gt; Integration -&gt; Payment Window -&gt; API KEY**</td>
	</tr>
	<tr>
		<td>privateKey</td>
		<td>Find it in QuickPay administration
**Settings -&gt; Integration -&gt; Private key**</td>
	</tr>
	<tr>
		<td>agreement_id</td>
		<td>Find it in QuickPay administration
**Settings -&gt; Integration -&gt; Payment Window -&gt; AGREEMENT ID**</td>
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
		<td>payment_methods</td>
		<td>Which card types the customer can select to pay with</td>
	</tr>
	<tr>
		<td>testmode</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![quickpay-2.png](/img/486b006-quickpay-2.png)

## Useful Links

  * [QuickPay website](https://quickpay.net/)
  * [QuickPay API – input parameters](https://learn.quickpay.net/tech-talk/payments/form/#parameters)

