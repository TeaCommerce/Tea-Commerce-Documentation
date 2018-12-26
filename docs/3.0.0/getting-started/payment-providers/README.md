# Payment Providers

## 2Checkout

### Configure 2Checkout

Login to the [2Checkout administration](https://www.2checkout.com/va/).

### Secret word

Click **Account** in the top menu and then **Site Management**, the option to choose a secret word should be avaliable at the bottom of the resulting page.

![2checkout-1.png](/img/08a7901-2checkout-1.png)

### Account number

While you are logged into the 2Checkout administration you should also note down your Account Number because you will need it when you configure Tea Commerce later. It can be found by clicking the account-icon in the top right corner.

![2checkout-2.png](/img/dc8f561-2checkout-2.png)

### Configure Tea Commerce

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

### Useful links

* [2Checkout website](https://www.2checkout.com/) 
* [2Checkout parameters documentation](https://www.2checkout.com/documentation/checkout/parameters)
* [2Checkout administration](https://www.2checkout.com/va/)

----------

## Authorize.Net

You can apply for a [Authorize.net developer test account](https://developer.authorize.net/testaccount) to get you started. When you have applied for the your developer account you will be presented with a screen with your API Login ID and Transaction Key – save those for future use.

![authorize-net-1.png](/img/74d4fe2-authorize-net-1.png)

### Configure Authorize.Net

Login to the [Authorize.net administration](https://sandbox.authorize.net/).

### MD5 Hash

Click **Account** in the top menu and find the link named **MD5-Hash**. Write a new hash value and click **Submit**. Save this hash value for later use.

![authorize-net-2.png](/img/873074a-authorize-net-2.png)

### Transaction Details API

Activate the Transaction Details API by clicking **Account** and then **Transaction Details API**. Type in your answer to your secret question and hit **Enable Transaction Details API**.

![authorize-net-3.png](/img/ef97200-authorize-net-3.png)

### Silent Post URL

Now go to **Account** and click **Silent Post URL**. This is the callback url for your site so Authorize.net can finalize the order correctly.

This url should look something like this: 

http://[domain]/base/TC/PaymentCallbackWithoutOrderId/[storeId]/AuthorizeNet/[paymentMethodId]

You should replace [domain] with your sites domain, [storeId] with the store id of your store and [paymentMethodId] with the id of your Tea Commerce paymentmethod using Authorize.net

![authorize-net-4.png](/img/e69ab6d-authorize-net-4.png)

### Payment Form – Form Fields

Next click **Account -> Payment Form -> Form fields**. You have to configure which fields should be presented to the end-user. For the Tea Commerce Authorize.net payment provider the only field that should be visible is the **Invoice No**. Check in the view column. All other fields must be set to not visible/edit

![authorize-net-5.png](/img/0c54bdd-authorize-net-5.png)

### Receipt Link Text

Final step in the Authorize.net configuration is to set the link text for the end-user to click in the Authorize.net receipt page. Click **Account -> Response/Receipt URLs -> Default Receipt URL EDIT -> Receipt Link Text** and set the link text.

![authorize-net-6.png](/img/b395cf9-authorize-net-6.png)

### Configure Tea Commerce

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

### Useful links

* [Authorize.net website](http://www.authorize.net/)
* [Authorize.net SIM API](https://developer.authorize.net/api/sim/)

----------

## Axcess  

<callout-box type="info" heading="Work in progress">

If you want to help write the documentation for this provider - just let us know 

</callout-box>

----------

## CyberSource  

<callout-box type="info" heading="Work in progress">

If you want to help write the documentation for this provider - just let us know 

</callout-box>

----------

## DIBS

### Configure DIBS

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

### Configure Tea Commerce

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

### Useful links

* [DIBS website](http://www.dibspayment.com/)
* [DIBS API – input parameters](http://tech.dibspayment.com/D2/Hosted/Input_parameters/Standard)

----------

## ePay

### Configure ePay

Login to the [ePay administration](https://ssl.ditonlinebetalingssystem.dk/admin/). Change the language to English by clicking on the flag at the bottom left side.

Click **Settings -> Payment system** in the menu to the left. Enter the domain of your e-commerce solution (automatically includes all subdomains). Then select that ePay should work with unique order ids, and enter a security key of your choice.

![epay-1.png](/img/a5669d2-epay-1.png)

Next click on the **API / Webservices -> Access** menu item. Enter a random webservice password and at the same time add the external IP address of your server running the webshop.

![epay-2.png](/img/88d8631-epay-2.png)

### Configure Tea Commerce

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

### Configure website

To use the ePay payment provider, it is required by ePay, that you add the following script reference in your &lt;head&gt; section of your website. The script handles the opening of the payment window on the page itself or in a popup window.

````html
<script type="text/javascript" src="http://www.epay.dk/js/standardwindow.js"></script>
````

### Useful links

* [ePay website](http://www.epay.eu/)
* [ePay API - input parameters](http://tech.epay.dk/en/payment-window-parameters)

----------

## Invoicing

### Configure Tea Commerce

Create a payment method and select **Invoicing** as the payment provider. Now configure the settings.

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>acceptUrl</td>
		<td>URL customer is redirected to when the payment is completed</td>
	</tr>
</table>

![invoicing-1.png](/img/27a7e99-invoicing-1.png)

----------

## Klarna  

<callout-box type="info" heading="Work in progress">

If you want to help write the documentation for this provider - just let us know 

</callout-box>

----------

## Netaxept

### Configure Tea Commerce

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

### Useful links

* [Netaxept documentation](http://www.betalingsterminal.no/Netthandel-forside/Teknisk-veiledning/API/Register/)

----------

## Ogone

You can apply for a [Ogone account](https://secure.ogone.com/ncol/test/new_account.asp?BRANDING=ogone&ISP=OBE&SubID=1&SOLPRO=&MODE=STD&ACountry=BE&Lang=1) to get you started.

![ogone-1.png](/img/97cca45-ogone-1.png)

### Configure Ogone

Login to the [Ogone administration](https://secure.ogone.com/ncol/test/frame_ogone.asp?BRANDING=ogone&ISP=OBE&SubID=1&SOLPRO=&MODE=STD&ACountry=BE&Lang=1).

### Your subscription and options

Select the subscription you need - I just selected **Horizon** for this test scenario. In the next step you have to activate the **Refunds** and **User manager** options.

### Your payment methods

Add the different payment options you need for your e-commerce solution. For testing you can just add the **VISA** payment option. If you don't have a signed contract with an acquiring partner, just select the **I have not yet signed a contract...** to allow VISA

### Activate Fraud detection module

Activate Fraud detection

### Your technical settings

First click the **Confirm and go to 'Data and origin verification'** button located in the lower right corner. Select **SHA-512** as the hash algorithm and **UFT-8** as the character encoding and confirm this step. Just confirm the **Payment page layout** page. Fill in all 4 fields

"I want to receive transaction feedback parameters on the redirection URLs". has to be choosen Input SHA-OUT Select "NO" in "Receive transaction confirmation e-mails": Select I want to simulate transaction results based on the card number. Activate the account Add an API user REMEMBER to setup which currencies you want to allow - "Account" ->"Currencies

### Configure Tea Commerce

Create a payment method and select **Ogone** as the payment provider. Now configure the settings.

Ogone supports a wide range of different settings which you can read more about in their [documentation](https://secure.ogone.com/ncol/Ogone_e-Com-ADV_EN.pdf).

<table>
	<tr>
		<td>PSPID</td>
		<td>Your Ogone login name</td>
	</tr>
	<tr>
		<td>LANGUAGE</td>
		<td>UI language of the payment window presented to the customer</td>
	</tr>
	<tr>
		<td>ACCEPTURL</td>
		<td>URL customer is redirected to when the payment is completed</td>
	</tr>
	<tr>
		<td>CANCELURL</td>
		<td>URL customer is redirected to when he cancels the payment</td>
	</tr>
	<tr>
		<td>BACKURL</td>
		<td>URL customer is redirected to when he clicks the back button</td>
	</tr>
	<tr>
		<td>PMLIST</td>
		<td>Which card types should be possible for the customer to choose</td>
	</tr>
	<tr>
		<td>SHAINPASSPHRASE</td>
		<td>Find it in Ogone administration
**Configuration -&gt; Technical information -&gt; Data and origin verification**</td>
	</tr>
	<tr>
		<td>SHAOUTPASSPHRASE</td>
		<td>Find it in Ogone administration
**Configuration -&gt; Technical information -&gt; Transaction feecback**</td>
	</tr>
	<tr>
		<td>APIUSERID</td>
		<td>Find it in Ogone administration
**Configuration -&gt; Users**</td>
	</tr>
	<tr>
		<td>APIPASSWORD</td>
		<td>Find it in Ogone administration
**Configuration -&gt; Users**</td>
	</tr>
	<tr>
		<td>TESTMODE</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![ogone-2.png](/img/c677800-ogone-2.png)

### Useful links

  * [Ogone website](http://www.ogone.com/)
  * [Ogone registration form](https://secure.ogone.com/ncol/test/new_account.asp?BRANDING=ogone&ISP=OBE&SubID=1&SOLPRO=&MODE=STD&ACountry=BE&Lang=1)
  * [Ogone API - input parameters](https://secure.ogone.com/ncol/Ogone_e-Com-ADV_EN.pdf)

----------

## Payer  

<callout-box type="info" heading="Work in progress">

If you want to help write the documentation for this provider - just let us know 

</callout-box>

----------

## PayEx

### Configure PayEx

Login to the [PayEx administration](http://payex.com/login/).

### Add server IP

First you need to add the IP of your server running your webshop. Click **Merchant profile** in the left menu, enter the server IP and click **save**.

![payex-1.png](/img/e6e8651-payex-1.png)

### Generate encryption key

Next up is to generate an encryption key. Click **New encryption key** and copy it for later use and then click **Save encryption key**.

![payex-2.png](/img/1de2587-payex-2.png)

### Configure Tea Commerce

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

### Useful links

  * [PayEx website](http://payex.com/)

----------

## Paymentsense  

<callout-box type="info" heading="Work in progress">

If you want to help write the documentation for this provider - just let us know 

</callout-box>

----------

## Paynova  

<callout-box type="info" heading="Work in progress">

If you want to help write the documentation for this provider - just let us know 

</callout-box>

----------

## PayPal

<callout-box type="warning" heading="SSL">

As of June 2015 all callbacks done by PayPal **must** be to a domain with SSL and minumum SHA2 encrypted SSL certificate. This is also true for your dev url's. 

</callout-box>

### Configure PayPal

Login to the [PayPal administration](https://www.paypal.com/signin/?country.x=US).

### API Information

To set up your API credentials click on tools in the top menu and click on API credentials.

![paypal-1.png](/img/299a8e9-paypal-1.png)

On the API Access screen choose option 2 **Request API credentials to create your own API username and password**.

![paypal-2.png](/img/2007fd0-paypal-2.png)

If you had not yet requested API credentials this will lead you to a screen where you choose between an API signature or an API certificate. On this screen pick API signature.

![paypal-3.png](/img/cc384b3-paypal-3.png)

On your API Signature screen you can choose to view your API username, API password and signature. These are used later on in configuration of Tea Commerce.

### Configure Tea Commerce

Create a payment method and select **PayPal** as the payment provider. Now configure the settings.

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>business</td>
		<td>A confirmed email address associated with the PayPal account.</td>
	</tr>
	<tr>
		<td>lc</td>
		<td>UI language of the payment window presented to the customer</td>
	</tr>
	<tr>
		<td>return</td>
		<td>URL customer is redirected to when the payment is completed</td>
	</tr>
	<tr>
		<td>cancel_return</td>
		<td>URL customer is redirected to when he cancels the payment</td>
	</tr>
	<tr>
		<td>paymentaction</td>
		<td>Whether the payment is deducted immediately from the customers credit card</td>
	</tr>
	<tr>
		<td>USER</td>
		<td>Find it in PayPal administration
**API signature page**</td>
	</tr>
	<tr>
		<td>PWD</td>
		<td>Find it in PayPal administration
**API signature page**</td>
	</tr>
	<tr>
		<td>SIGNATURE</td>
		<td>Find it in PayPal administration
**API signature page**</td>
	</tr>
	<tr>
		<td>isSandbox</td>
		<td>Whether or not test mode is enabled</td>
	</tr>
</table>

![paypal-4.png](/img/61166cd-paypal-4.png)

### Useful links

  * [PayPal website](https://www.paypal.com/)
  * [PayPal Payments Standard documentation](https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/)
  * [PayPal developer website](https://developer.paypal.com/)


----------

## QuickPay v10

### Configure QuickPay

Login to the [QuickPay administration](https://manage.quickpay.net/).

Click **Settings -> Merchant** in the left handside menu and type in your information.

![quickpay-1.png](/img/e280e6d-quickpay-1.png)

### Configure Tea Commerce

Create a payment method and select **QuickPay10** as the payment provider. Now configure the settings.

QuickPay supports a wide range of different settings which you can read more about in their [documentation](https://learn.quickpay.net/tech-talk/payments/form/##parameters).

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

### Useful links

  * [QuickPay website](https://quickpay.net/)
  * [QuickPay API – input parameters](https://learn.quickpay.net/tech-talk/payments/form/##parameters)


----------

## QuickPay

### Configure QuickPay

Login to the [QuickPay administration](https://manage.quickpay.net/).

Click **Indstillinger -> Min konto** in the left handside menu and change the language to english. Log out and login again.

![quickpay-1.png](/img/ea8736d-quickpay-1.png)

Now go to **Settings -> Merchant** and type in your information.

![quickpay-2.png](/img/429b112-quickpay-2.png)

Lastly go to **Settings -> API Access** and type in the IP address of your server running Tea Commerce.

![quickpay-3.png](/img/414d9dc-quickpay-3.png)

### Configure Tea Commerce

Create a payment method and select **QuickPay** as the payment provider. Now configure the settings.

QuickPay supports a wide range of different settings which you can read more about in their [documentation](http://doc.quickpay.dk/api/specificationsandfeatures.html##index2h2).

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

### Useful links

  * [QuickPay website](https://quickpay.net/)
  * [QuickPay API – input parameters](http://doc.quickpay.dk/api/specificationsandfeatures.html##index2h2)

----------

## Sage Pay

You can apply for a [Sage Pay Simulator account](https://applications.sagepay.com/apply/RequestSimAccount.aspx) to get you started.

### Configure Sage Pay

Login to the [Sage Pay administration](https://test.sagepay.com/Simulator/).

Click the red **Account** button at the bottom of the screen and insert the URL of your webshop. You also need to add the IP of your server running Tea Commerceand add the currencies you want to support.

![sage-pay-1.png](/img/2584fb1-sage-pay-1.png)

![sage-pay2.png](/img/352ad29-sage-pay2.png)

![sage-pay-3.png](/img/b9b160a-sage-pay-3.png)

### Configure Tea Commerce

Create a payment method and select **Sage Pay** as the payment provider. Now configure the settings.

Sage Pay support a wide range of different settings which you can read more about in their [documentation](http://www.sagepay.co.uk/support/find-an-integration-document/server-integration-documents).

<table>
	<tr>
		<th>Key</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Vendor</td>
		<td>Your vendor login for Sage Pay</td>
	</tr>
	<tr>
		<td>SuccessURL</td>
		<td>URL customer is redirected to when the payment is completed</td>
	</tr>
	<tr>
		<td>FailureURL</td>
		<td>URL customer is redirected to when he cancels the payment</td>
	</tr>
	<tr>
		<td>TxType</td>
		<td>Whether the payment is deducted immediately from the customers credit card</td>
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
		<td>Description</td>
		<td>A static description that we be in the payment window</td>
	</tr>
	<tr>
		<td>testMode</td>
		<td>Whether or not demo mode is enabled</td>
	</tr>
</table>

![sage-pay-4.png](/img/ba2a375-sage-pay-4.png)

### Useful links

  * [Sage Pay website](http://www.sagepay.com/)
  * [Create Sage Pay simulator account](https://applications.sagepay.com/apply/RequestSimAccount.aspx)
  * [Sage Pay server integration guide](http://www.sagepay.co.uk/support/find-an-integration-document/server-integration-documents)

----------

## Stripe  

<callout-box type="info" heading="Work in progress">

If you want to help write the documentation for this provider - just let us know 

</callout-box>

----------

## Wannafind

You can apply for a [Wannafind demo account](https://www.wannafind.dk/betalingssystem/) to get you started.

### Configure Wannafind

Login to the [Wannafind administration](https://betaling.wannafind.dk/).

Click **Indstillinger** in the top menu and find the section named **MD5 checksum indstillinger**. Activate MD5 check and then select the different values in the dropdowns. Be sure to have the same order as in the screenshot below. You will also have to generate a MD5 auth secret and a MD5 callback secret for the last two fields. Generate two secrets – min. 10 charaters, a-Z 0-9. Click the **Opdater** button to save.

![wannafind-1.png](/img/7cd930f-wannafind-1.png)

Now find the section named **API indstillinger** and enter the IP addresses that will make API calls – like capture, refund etc.

![wannafind-2.png](/img/71f3c35-wannafind-2.png)

### Configure Tea Commerce

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

### Configure website

To use the Wannafind payment provider, it is required by Wannafind, that you add the following script reference in your &lt;head&gt; section of your website. The script handles the opening of the payment window in a popup window.

````html
<script type="text/javascript" src="https://betaling.wannafind.dk/customers/wannafind/js/openpaymentwindow.js"></script>
````

### Useful links

  * [Wannafind website](https://www.wannafind.dk/)
  * [Wannafind API – input parameters](https://static.zitcom.dk/marketing/wannafind/paymentgateway_documentation.pdf)

----------

## Worldpay  

<callout-box type="info" heading="Work in progress">

If you want to help write the documentation for this provider - just let us know 

</callout-box>