# Ogone

You can apply for a [Ogone account](https://secure.ogone.com/ncol/test/new_account.asp?BRANDING=ogone&ISP=OBE&SubID=1&SOLPRO=&MODE=STD&ACountry=BE&Lang=1) to get you started.

![ogone-1.png](/img/97cca45-ogone-1.png)

## Configure Ogone

Login to the [Ogone administration](https://secure.ogone.com/ncol/test/frame_ogone.asp?BRANDING=ogone&ISP=OBE&SubID=1&SOLPRO=&MODE=STD&ACountry=BE&Lang=1).

## Your subscription and options

Select the subscription you need - I just selected **Horizon** for this test scenario. In the next step you have to activate the **Refunds** and **User manager** options.

## Your payment methods

Add the different payment options you need for your e-commerce solution. For testing you can just add the **VISA** payment option. If you don't have a signed contract with an acquiring partner, just select the **I have not yet signed a contract...** to allow VISA

## Activate Fraud detection module

Activate Fraud detection

## Your technical settings

First click the **Confirm and go to 'Data and origin verification'** button located in the lower right corner. Select **SHA-512** as the hash algorithm and **UFT-8** as the character encoding and confirm this step. Just confirm the **Payment page layout** page. Fill in all 4 fields

"I want to receive transaction feedback parameters on the redirection URLs". has to be choosen Input SHA-OUT Select "NO" in "Receive transaction confirmation e-mails": Select I want to simulate transaction results based on the card number. Activate the account Add an API user REMEMBER to setup which currencies you want to allow - "Account" ->"Currencies

## Configure Tea Commerce

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

## Useful links

  * [Ogone website](http://www.ogone.com/)
  * [Ogone registration form](https://secure.ogone.com/ncol/test/new_account.asp?BRANDING=ogone&ISP=OBE&SubID=1&SOLPRO=&MODE=STD&ACountry=BE&Lang=1)
  * [Ogone API - input parameters](https://secure.ogone.com/ncol/Ogone_e-Com-ADV_EN.pdf)
