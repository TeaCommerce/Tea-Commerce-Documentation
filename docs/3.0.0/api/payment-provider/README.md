# Payment Provider

## GeneratePaymentForm

Generates and returns the full html for the form to post when going to payment. Will use the current payment method's payment provider.

**NB** If you have configured culture specific settings for your payment provider, you must make sure to set the `order.LanguageId` property to the appropriate ISO code before calling `GeneratePaymentForm`.

:::: tabs

::: tab "JavaScript API"

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

::: tab "Razor API"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>storeId</strong></td>
		<td>long</td>
		<td>Id of the store.</td>
	</tr>
	<tr>
		<td><strong>submitInput</strong></td>
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
