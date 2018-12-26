# Order Property

## AddOrUpdateOrderProperty

Adds or updates a single custom order property on the current order. If the customer does not have a current order a new one will be created.

:::: tabs

::: tab "Razor API" id="addorupdateorderproperty-razor"

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
		<td>**key**</td>
		<td>string</td>
		<td>The key/alias of the property.</td>
	</tr>
	<tr>
		<td>**value**</td>
		<td>string</td>
		<td>Value of the property.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>CustomProperty</td>
		<td>The custom order property just created or updated.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  CustomProperty customProperty = TC.AddOrUpdateOrderProperty(1, "company", "Tea Commerce");
}
````

:::

::::

## AddOrUpdateOrderProperties

Adds or updates a collection of custom order properties on the current order. If the customer does not have a current order a new one will be created.

:::: tabs

::: tab "HTML API" id="addorupdateorderproperties-html"

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
		<td>**properties**</td>
		<td></td>
		<td>A list of key/value pairs identifying the property alias and name of a html input to deliver the value.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="AddOrUpdateOrderProperties" value="properties" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="properties" value="firstName, lastName, email" type="hidden" />
  <input name="firstName" type="text" placeholder="First name" />
  <input name="lastName" type="text" placeholder="Last name" />
  <input name="email" type="text" placeholder="Email" />
  <input value="Update order properties" type="submit" />
</form>
````

:::

::: tab "JavaScript API" id="addorupdateorderproperties-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>**properties**</td>
		<td>object</td>
		<td></td>
		<td>An object containing keys and values for the properties you want to change.</td>
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
TC.addOrUpdateOrderProperties({storeId:1, properties: {company: 'Tea Commerce', industry: 'E-Commerce'}});
````

:::

::: tab "Razor API" id="addorupdateorderproperties-razor"

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
		<td>**properties**</td>
		<td>Dictionary&lt;string, string&gt;</td>
		<td>A dictionary containing keys and values for the properties you want to change.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>IEnumerable&lt;CustomProperty&gt;</td>
		<td>A collection of the added or updated custom order properties.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Dictionary<string, string> customPropertiesToAdd = new Dictionary<string, string>();
  customPropertiesToAdd.Add( "company", "Tea Commerce" );
  customPropertiesToAdd.Add( "address", "Roemersvej 19c" );
  IEnumerable<CustomProperty> customProperties = TC.AddOrUpdateOrderProperties(1, customPropertiesToAdd);
}
````

:::

::::

