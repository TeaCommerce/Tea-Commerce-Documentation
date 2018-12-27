# Payment Provider

## GeneratePaymentForm

Generates and returns the full html for the form to post when going to payment. Will use the current payment method's payment provider.

:::: tabs

::: tab "JavaScript API" id="generatepaymentform-javascript"

The generated form will be submitted automatically.

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>storeId</td>
		<td>long</td>
		<td>_storeId</td>
		<td>Id of the store.</td>
	</tr>
</table>

### Example

````javascript
TC.generatePaymentForm({storeId:1});
````

:::

::: tab "Razor API" id="generatepaymentform-razor"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>**storeId**</td>
		<td>long</td>
		<td>Id of the store.</td>
	</tr>
	<tr>
		<td>**submitInput**</td>
		<td>string</td>
		<td>A html button/input that should be outputted with the form.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>A html form.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@{
  string htmlForm = TC.GeneratePaymentForm( 1, "<input type=\"submit\" value=\"Submit\" />" );
}
````

:::

::::