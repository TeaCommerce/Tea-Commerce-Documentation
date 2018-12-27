# Store

## GetStore

Gets a specific store.

:::: tabs

::: tab "Razor API" id="tab-001"

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
		<td>Store</td>
		<td>A store object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Store store = TC.GetStore( 1 );
}
````

:::

::::
