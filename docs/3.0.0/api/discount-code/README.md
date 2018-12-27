# Discount Code

## AddDiscountCode

Add a discount code to the customer's current order.

:::: tabs 

::: tab "HTML API" id="adddiscountcode-html"

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
		<td><strong>code</strong></td>
		<td>string</td>
		<td>Code to add.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="AddDiscountCode" value="code" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="code" value="hsn7tl" type="hidden" />
  <input value="Add discount code" type="submit" />
</form>
````

:::

::: tab "JavaScript API" id="adddiscountcode-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>code</strong></td>
		<td>string</td>
		<td></td>
		<td>Code to add.</td>
	</tr>
	<tr>
		<td>storeId</td>
		<td>long</td>
		<td>_storeId</td>
		<td>Id of the store.</td>
	</tr>
	<tr>
		<td>async</td>
		<td>boolean</td>
		<td>true</td>
		<td>Specifies if a request should be asynchronously.</td>
	</tr>
	<tr>
		<td>successfn</td>
		<td>function(json[, jQForm])</td>
		<td></td>
		<td>A function to be called if the request succeeds.</td>
	</tr>
	<tr>
		<td>errorfn</td>
		<td>function(json)</td>
		<td></td>
		<td>A function to be called if the request fails.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>methodsCalled</td>
		<td>An object containing information about the methods called, related data to the methods and the order object if present.
Will only be returned if you use async = false</td>
	</tr>
</table>

### Example

````javascript
TC.addDiscountCode({storeId:1, code:'hsn7tl'});
````

:::

::: tab "Razor API" id="adddiscountcode-razor"

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
		<td><strong>code</strong></td>
		<td>string</td>
		<td>Code to add.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>AppliedDiscountCode</td>
		<td>The added discount code object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@using TeaCommerce.Api.Marketing.Models
@{
  AppliedDiscountCode appliedGiftCard = TC.AddDiscountCode( 1, "hsn7tl" );
}
````

:::

::::

## RemoveDiscountCode

Remove a discount code from the customer's current order.

:::: tabs

::: tab "HTML API" id="removediscountcode-html"

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
		<td><strong>code</strong></td>
		<td>string</td>
		<td>Code to remove.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="RemoveDiscountCode" value="code" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="code" value="hsn7tl" type="hidden" />
  <input value="Remove discount code" type="submit" />
</form>
````

:::

::: tab "JavaScript API" id="removediscountcode-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>code</strong></td>
		<td>string</td>
		<td></td>
		<td>Code to remove.</td>
	</tr>
	<tr>
		<td>storeId</td>
		<td>long</td>
		<td>_storeId</td>
		<td>Id of the store.</td>
	</tr>
	<tr>
		<td>async</td>
		<td>boolean</td>
		<td>true</td>
		<td>Specifies if a request should be asynchronously.</td>
	</tr>
	<tr>
		<td>successfn</td>
		<td>function(json[, jQForm])</td>
		<td></td>
		<td>A function to be called if the request succeeds.</td>
	</tr>
	<tr>
		<td>errorfn</td>
		<td>function(json)</td>
		<td></td>
		<td>A function to be called if the request fails.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>methodsCalled</td>
		<td>An object containing information about the methods called, related data to the methods and the order object if present.
Will only be returned if you use async = false</td>
	</tr>
</table>

### Example

````javascript
TC.removeDiscountCode({storeId:1, code:'hsn7tl'});
````

:::

::: tab "Razor API" id="removediscountcode-razor"

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
		<td><strong>code</strong></td>
		<td>string</td>
		<td>Code to remove.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>AppliedDiscountCode</td>
		<td>The removed discount code object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@using TeaCommerce.Api.Marketing.Models
@{
  AppliedDiscountCode appliedGiftCard = TC.RemoveDiscountCode( 1, "hsn7tl" );
}
````

:::

::::