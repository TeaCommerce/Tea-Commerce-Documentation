# VAT Group

## GetVatGroup

Gets a vat group from a specfic store.

:::: tabs

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
		<td><strong>vatGroupId</strong></td>
		<td>long</td>
		<td>The vat group id.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>VatGroup</td>
		<td>A vat group object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  VatGroup vatGroup = TC.GetVatGroup(1, 2);
}
````

:::

::::

## GetVatGroups

Gets all vat groups for a specific store.

:::: tabs 

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
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>IEnumerable&lt;VatGroup&gt;</td>
		<td>A collection of vat group objects.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  IEnumerable<VatGroup> vatGroup = TC.GetVatGroups(1);
}
````

:::

::::

## GetCurrentVatGroup

Gets the current vat group of the customer's session. If the customer has a current order the vat group of that order is returned.

:::: tabs 

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
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>VatGroup</td>
		<td>The current vat group.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  VatGroup vatGroup = TC.GetCurrentVatGroup(1);
}
````

:::

::::

## SetCurrentVatGroup

Changes the current vat group of the customer's session. The vat group is also changed for the customer's current order if present.

:::: tabs 

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
		<td><strong>vatGroupId</strong></td>
		<td>long</td>
		<td>Id of the vat group to change to.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>VatGroup</td>
		<td>The new current vat group object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  VatGroup vatGroup = TC.GetVatGroup(1, 2);
}
````

:::

::::