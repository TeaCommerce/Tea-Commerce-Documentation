---
sidebarDepth: 2
---
# Configuration

In this guide we will make an imaginary company called "Amazing Boats" selling yachts. This company will be based in the UK and will be selling their products to UK customers only.

## Store

First we need to create a store. Let's create a store named "Amazing Boats". Right click **Stores**, click **Create**, type in the new name of the store and click **Create**. Now hit F5 to see the newly created store.

## Currency

Tea Commerce supports multiple currencies, but in this guide we want to keep it as simple as possible and only support the GBP currency. Click the **JDM** currency and configure it with the values shown below.

<table>
	<tr>
		<th>Field</th>
		<th>Value</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Name</td>
		<td>GBP</td>
		<td>Name of the currency</td>
	</tr>
	<tr>
		<td>ISO code</td>
		<td>GBP</td>
		<td>Parsed along to payment gateways - <a href="https://en.wikipedia.org/wiki/ISO_4217#Active_codes" target="_blank">list of ISO currency codes</a></td>
	</tr>
	<tr>
		<td>Price property alias</td>
		<td>priceGBP</td>
		<td>Alias of the property on a document type, for where to find the GBP price on a product in Umbraco</td>
	</tr>
	<tr>
		<td>Culture name</td>
		<td>English (United Kingdom)</td>
		<td>Used to format prices in the UI</td>
	</tr>
</table>

![currency.png](/img/093b15d-currency.png)

## Country

A country is used to specify which countries the shop will ship orders to. It's easy to create all the countries in the world (just right click and select "Create all"), but in this guide we will only be shipping to the UK. Click on the **Jamaica** country and configure the country as below.

<table>
	<tr>
		<th>Field</th>
		<th>Value</th>
	</tr>
	<tr>
		<td>Name</td>
		<td>United Kingdom</td>
	</tr>
	<tr>
		<td>Region code</td>
		<td>UK</td>
	</tr>
</table>

![country.png](/img/973ee1d-country.png)

## VAT group

The VAT group is used to calculate the VAT/tax on products, shipping etc. As the shop is based in the UK we will configure it with the VAT rate of that. Rename the **Default VAT group** and configure it as below. It's possible to have multiple VAT groups to support different VAT rates for e.g food, baby equipment etc., but in this case the shop will only support one.

<table>
	<tr>
		<th>Field</th>
		<th>Value</th>
	</tr>
	<tr>
		<td>Name</td>
		<td>UK VAT</td>
	</tr>
	<tr>
		<td>VAT rate</td>
		<td>20</td>
	</tr>
</table>

![vat-group.png](/img/cb452cd-vat-group.png)

## Payment Methods

Payment methods define which methods of payment are accepted by the store. When you create a payment method, you provide general information such as any VAT charges and which countries the payment method is available for. In addition, each payment method will generaly have it's own configuration settings. See the specific Payment Provider in the [Payment Providers section](../../payment-providers/) for further details.

## Confirmation email

We want the shop owner and the customer to receive an order confirmation email when an order is completed. Navigate to the **Confirmation** email template and configure the **Sender name**, **Sender address** and **BCC addresses**. The BCC address it the "magic" that makes the webshop owner get the same order confirmation email as the customer.

<table>
	<tr>
		<th>Field</th>
		<th>Value</th>
	</tr>
	<tr>
		<td>Sender name</td>
		<td>Amazing Boats</td>
	</tr>
	<tr>
		<td>Sender address</td>
		<td>info@amazingboats.com</td>
	</tr>
	<tr>
		<td>BCC addresses</td>
		<td>orders@amazingboats.com</td>
	</tr>
</table>

![email template.png](/img/7140923-email_template.png)

## Security

This area gives you access to manage the permissions for users with access to the Tea Commerce section. You can control the access to specific stores and also some general permissions.

![security.png](/img/37b6cd8-security.png)

## Licenses 

This shows you which domains are currently licensed.

A top level domain license is valid for domain.com and all sub domains e.g www.domain.com.

For testing you can also use a subdomain e.g new.domain.com or even domain.com.staging.webhost.com.

localhost and .local domain is always valid.

Click here to [buy a Tea Commerce license](https://teacommerce.net/).

![licenses.png](/img/0340ffa-licenses.png)
