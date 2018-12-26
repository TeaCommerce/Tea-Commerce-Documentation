# 2Checkout

## Configure 2Checkout

Login to the [2Checkout administration](https://www.2checkout.com/va/).

## Secret word

Click **Account** in the top menu and then **Site Management**, the option to choose a secret word should be avaliable at the bottom of the resulting page.

![2checkout-1.png](/img/08a7901-2checkout-1.png)

## Account number

While you are logged into the 2Checkout administration you should also note down your Account Number because you will need it when you configure Tea Commerce later. It can be found by clicking the account-icon in the top right corner.

![2checkout-2.png](/img/dc8f561-2checkout-2.png)

## Configure Tea Commerce

Create a payment method and select **2Checkout** as the payment provider. Now configure the settings.

2Checkout supports a wide range of different settings which you can read more about in their [documentation](https://www.2checkout.com/documentation/checkout/parameters).

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>sid</td>
		<td>Find it in 2Checkout administration
**Click account icon in the top right corner**</td>
	</tr>
	<tr>
		<td>lang</td>
		<td>UI language of the payment window presented to the customer</td>
	</tr>
	<tr>
		<td>x_receipt_link_url</td>
		<td>URL customer is redirected to when the payment is completed</td>
	</tr>
	<tr>
		<td>secretWord</td>
		<td>Find it in 2Checkout administration
**Account -&gt; Site Management**</td>
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
		<td>phonePropertyAlias</td>
		<td>Order property alias containing the phone</td>
	</tr>
	<tr>
		<td>phoneExtensionPropertyAlias</td>
		<td>Order property alias containing the phone extension</td>
	</tr>
	<tr>
		<td>demo</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![2checkout-3.png](/img/af79048-2checkout-3.png)

## Useful links

* [2Checkout website](https://www.2checkout.com/) 
* [2Checkout parameters documentation](https://www.2checkout.com/documentation/checkout/parameters)
* [2Checkout administration](https://www.2checkout.com/va/)
