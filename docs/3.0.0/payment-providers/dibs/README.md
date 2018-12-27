# DIBS

## Configure DIBS

Login to the [DIBS administration](https://payment.architrade.com/login/login.action?request_locale=en_UK).

### MD5 keys

Click **Integration -> MD5 Keys** in the menu to the left. Check the **Perform MD5 control** and click **Update**.

![dibs-1.png](/img/5d0bbd8-dibs-1.png)

### Return values

Next click on the **Integration -> Return values** menu item. Check the following items – **Order ID**, **Paytype**, **Card number with last four digits unmasked** and **All fields exclusive of card information response**.

![dibs-2.png](/img/855d0fa-dibs-2.png)

### API user

Click **Setup -> User Setup -> API users** and create a new API user.

![dibs-3.png](/img/77f476f-dibs-3.png)

## Configure Tea Commerce

Create a payment method and select **DIBS** as the payment provider. Now configure the settings.

DIBS supports a wide range of different settings which you can read more about in their [documentation](http://tech.dibspayment.com/D2/Hosted/Input_parameters/Standard).

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>merchant</td>
		<td>Find it in DIBS administration</td>
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
		<td>cancelurl</td>
		<td>URL customer is redirected to when he cancels the payment</td>
	</tr>
	<tr>
		<td>capturenow</td>
		<td>Whether the payment is deducted immediately from the customers credit card</td>
	</tr>
	<tr>
		<td>calcfee</td>
		<td>Whether the transaction fees are paid by the customer</td>
	</tr>
	<tr>
		<td>paytype</td>
		<td>Which card types the customer can select to pay with</td>
	</tr>
	<tr>
		<td>md5k1</td>
		<td>Find it in DIBS administration
**Integration -&gt; MD5 Keys**</td>
	</tr>
	<tr>
		<td>md5k2</td>
		<td>Find it in DIBS administration
**Integration -&gt; MD5 Keys**</td>
	</tr>
	<tr>
		<td>apiusername</td>
		<td>Find it in DIBS administration
**Setup -&gt; User Setup -&gt; API users**</td>
	</tr>
	<tr>
		<td>apipassword</td>
		<td>Find it in DIBS administration
**Setup -&gt; User Setup -&gt; API users**</td>
	</tr>
	<tr>
		<td>test</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![dibs-4.png](/img/9deedac-dibs-4.png)

## Useful Links

* [DIBS website](http://www.dibspayment.com/)
* [DIBS API – input parameters](http://tech.dibspayment.com/D2/Hosted/Input_parameters/Standard)
