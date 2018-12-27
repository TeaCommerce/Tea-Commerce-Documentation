# Gift Card

## AddGiftCard

Add a gift card code to the customer's current order.

:::: tabs 

::: tab "HTML API" id="addgiftcard-html"

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
		<td>**code**</td>
		<td>string</td>
		<td>Code to add.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="AddGiftCard" value="code" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="code" value="hsn7tl" type="hidden" />
  <input value="Add gift card code" type="submit" />
</form>
````

:::

::: tab "JavaScript API" id="addgiftcard-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>**code**</td>
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
TC.addGiftCard({storeId:1, code:'hsn7tl'});
````

:::

::: tab "Razor API" id="addgiftcard-razor"

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
		<td>**code**</td>
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
		<td>AppliedGiftCard</td>
		<td>The added gift card object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  AppliedGiftCard appliedGiftCard = TC.AddGiftCard( 1, "hsn7tl" );
}
````

:::

::::

## RemoveGiftCard

Remove a gift card code from the customer's current order.

:::: tabs 

::: tab "HTML API" id="removegiftcard-html"

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
		<td>**code**</td>
		<td>string</td>
		<td>Code to remove.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="RemoveGiftCard" value="code" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="code" value="hsn7tl" type="hidden" />
  <input value="Remove gift card code" type="submit" />
</form>
````

:::

::: tab "JavaScript API" id="removegiftcard-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>**code**</td>
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
TC.removeGiftCard({storeId:1, code:'hsn7tl'});
````

:::

::: tab "Razor API" id="removegiftcard-razor"

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
		<td>**code**</td>
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
		<td>The removed gift card object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  AppliedGiftCard appliedGiftCard = TC.RemoveGiftCard( 1, "hsn7tl" );
}
````

:::

::::