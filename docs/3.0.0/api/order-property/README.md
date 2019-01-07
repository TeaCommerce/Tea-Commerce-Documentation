# Order Property

## AddOrUpdateOrderProperty

Adds or updates a single custom order property on the current order. If the customer does not have a current order a new one will be created.

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
		<td><strong>key</strong></td>
		<td>string</td>
		<td>The key/alias of the property.</td>
	</tr>
	<tr>
		<td><strong>value</strong></td>
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

::: tab "HTML API"

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
		<td><strong>properties</strong></td>
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

::: tab "JavaScript API"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>properties</strong></td>
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
		<td><strong>properties</strong></td>
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

## System Properties

When updating an order, as well as the properties passed via the ` AddOrUpdateOrderProperty` or ` AddOrUpdateOrderProperties` methods `properties` collection as documented above, Tea Commerce will also add some system defined properties to the Order who's values will be automatically extracted. Details of these properties and how they are extracted can be found below.

<table>
	<tr>
		<th>Name</th>
		<th>Source</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>CustomerId</strong></td>
		<td>Current logged in Members member ID. Extracted at the time of <router-link to="../payment-provider/#generatepaymentform" append>GeneratePaymentForm()</router-link> being called.</td>
		<td>The ID of the customer making the order. Useful if you have a members only store and you want to find all order belonging to the same customer.</td>
	</tr>
	<tr>
		<td><strong>PaymentInformation.FirstName</strong></td>
		<td>Extracted from an Orders `properties` collection. Property alias must be `"firstName"`.</td>
		<td>The first name of the person making the order.</td>
	</tr>
	<tr>
		<td><strong>PaymentInformation.LastName</strong></td>
		<td>Extracted from an Orders `properties` collection. Property alias must be `"lastName"`.</td>
		<td>The last name of the person making the order.</td>
	</tr>
	<tr>
		<td><strong>PaymentInformation.Email</strong></td>
		<td>Extracted from an Orders `properties` collection. Property alias must be `"email"`.</td>
		<td>The email address of the person making the order.</td>
	</tr>
</table>