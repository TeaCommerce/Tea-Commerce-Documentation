# ePay

## Configure ePay

Login to the [ePay administration](https://ssl.ditonlinebetalingssystem.dk/admin/). Change the language to English by clicking on the flag at the bottom left side.

Click **Settings -> Payment system** in the menu to the left. Enter the domain of your e-commerce solution (automatically includes all subdomains). Then select that ePay should work with unique order ids, and enter a security key of your choice.

![epay-1.png](/img/a5669d2-epay-1.png)

Next click on the **API / Webservices -> Access** menu item. Enter a random webservice password and at the same time add the external IP address of your server running the webshop.

![epay-2.png](/img/88d8631-epay-2.png)

## Configure Tea Commerce

Create a payment method and select **ePay** as the payment provider. Now configure the settings.

ePay supports a wide range of different settings which you can read more about in their [documentation](http://tech.epay.dk/en/payment-window-parameters).

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>merchantnumber</td>
		<td>Find it in ePay administration
**Settings -&gt; Payment system -&gt; Merchant number**</td>
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
		<td>paymenttype</td>
		<td>Which card types the customer can select to pay with</td>
	</tr>
	<tr>
		<td>windowstate</td>
		<td>Different modes the payment window can open in</td>
	</tr>
	<tr>
		<td>iframeelement</td>
		<td>Id of a HTML element to insert the iFrame into</td>
	</tr>
	<tr>
		<td>md5securitykey</td>
		<td>Find it in ePay administration
**Settings -&gt; Payment system**</td>
	</tr>
	<tr>
		<td>webservicepassword</td>
		<td>Find it in ePay administration
**API / Webservices -&gt; Access**</td>
	</tr>
	<tr>
		<td>testMode</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![epay-3.png](/img/40133d0-epay-3.png)

## Configure Website

To use the ePay payment provider, it is required by ePay, that you add the following script reference in your &lt;head&gt; section of your website. The script handles the opening of the payment window on the page itself or in a popup window.

````html
<script type="text/javascript" src="http://www.epay.dk/js/standardwindow.js"></script>
````

## Useful Links

* [ePay website](http://www.epay.eu/)
* [ePay API - input parameters](http://tech.epay.dk/en/payment-window-parameters)
