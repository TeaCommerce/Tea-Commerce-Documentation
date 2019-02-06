# Wannafind

You can apply for a [Wannafind demo account](https://www.wannafind.dk/betalingssystem/) to get you started.

## Configure Wannafind

Login to the [Wannafind administration](https://betaling.wannafind.dk/).

Click **Indstillinger** in the top menu and find the section named **MD5 checksum indstillinger**. Activate MD5 check and then select the different values in the dropdowns. Be sure to have the same order as in the screenshot below. You will also have to generate a MD5 auth secret and a MD5 callback secret for the last two fields. Generate two secrets – min. 10 charaters, a-Z 0-9. Click the **Opdater** button to save.

![wannafind-1.png](/img/7cd930f-wannafind-1.png)

Now find the section named **API indstillinger** and enter the IP addresses that will make API calls – like capture, refund etc.

![wannafind-2.png](/img/71f3c35-wannafind-2.png)

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
		<td>Find it in Wannafind administration
**Indstillinger -&gt; ShopID**</td>
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
		<td>Find it in Wannafind administration
**Indstillinger -&gt; MD5 checksum indstillinger**</td>
	</tr>
	<tr>
		<td>md5CallbackSecret</td>
		<td>Find it in Wannafind administration
**Indstillinger -&gt; MD5 checksum indstillinger**</td>
	</tr>
	<tr>
		<td>apiUser</td>
		<td>Same as your Wannafind username</td>
	</tr>
	<tr>
		<td>apiPassword</td>
		<td>Same as your Wannafind password</td>
	</tr>
	<tr>
		<td>testmode</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![wannafind-3.png](/img/319f174-wannafind-3.png)

## Configure Website

To use the Wannafind payment provider, it is required by Wannafind, that you add the following script reference in your &lt;head&gt; section of your website. The script handles the opening of the payment window in a popup window.

````html
<script type="text/javascript" src="https://betaling.wannafind.dk/customers/wannafind/js/openpaymentwindow.js"></script>
````

## Useful Links

  * [Wannafind website](https://www.wannafind.dk/)
  * [Wannafind API – input parameters](https://static.zitcom.dk/marketing/wannafind/paymentgateway_documentation.pdf)
