# Netaxept

## Configure Tea Commerce

Create a payment method and select **Netaxept** as the payment provider. Now configure the settings.

Netaxept supports a wide range of different settings which you can read more about in their [documentation](http://www.betalingsterminal.no/Netthandel-forside/Teknisk-veiledning/API/Register/).

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>merchantId</td>
		<td>Find it in Netaxept administration</td>
	</tr>
	<tr>
		<td>token</td>
		<td>Provided by Netaxept</td>
	</tr>
	<tr>
		<td>language</td>
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
		<td>instantcapture</td>
		<td>Whether the payment is deducted immediately from the customers credit card</td>
	</tr>
	<tr>
		<td>paymentMethodList</td>
		<td>Which card types should be possible for the customer to choose</td>
	</tr>
	<tr>
		<td>testMode</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![netaxept-1.png](/img/8367848-netaxept-1.png)

## Useful links

* [Netaxept documentation](http://www.betalingsterminal.no/Netthandel-forside/Teknisk-veiledning/API/Register/)
