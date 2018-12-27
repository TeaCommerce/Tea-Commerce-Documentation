# Country

## GetCountry

Gets a country from a specfic store.

:::: tabs 

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
		<td><strong>countryId</strong></td>
		<td>long</td>
		<td></td>
		<td>Id of the country.</td>
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
		<td>false</td>
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
		<td>country</td>
		<td>A country object.</td>
	</tr>
</table>

### Example

````javascript
var country = TC.getCountry({storeId:1, countryId:2});
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
		<td><strong>countryId</strong></td>
		<td>long</td>
		<td>Id of the country.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Country</td>
		<td>A country object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Country country = TC.GetCountry( 1, 2 );
}
````

:::

::::

## GetCountries

Gets the countries for a specific store.

:::: tabs

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
		<td>storeId</td>
		<td>long</td>
		<td>_storeId</td>
		<td>Id of the store.</td>
	</tr>
	<tr>
		<td>async</td>
		<td>boolean</td>
		<td>false</td>
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
		<td>country[]</td>
		<td>A collection of country objects.</td>
	</tr>
</table>

### Example

````javascript
var countries = TC.getCountries({storeId:1});
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
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>IEnumerable&lt;Country&gt;</td>
		<td>A collection of country objects.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  IEnumerable<Country> countries = TC.GetCountries(1);
}
````

:::

::::

## GetCurrentPaymentCountry

Gets the current payment country of the customer's session. If the customer has a current order the payment country of that order is returned.

:::: tabs

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
		<td>storeId</td>
		<td>long</td>
		<td>_storeId</td>
		<td>Id of the store.</td>
	</tr>
	<tr>
		<td>async</td>
		<td>boolean</td>
		<td>false</td>
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
		<td>country</td>
		<td>A country object.</td>
	</tr>
</table>

### Example

````javascript
var country = TC.getCurrentPaymentCountry({storeId:1});
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
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Country</td>
		<td>The current payment country object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Country country = TC.GetCurrentPaymentCountry(1);
}
````

:::

::::

## GetCurrentShippingCountry

Gets the current shipping country of the customer's session. If the customer has a current order the shipping country of that order is returned.

:::: tabs

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
		<td>storeId</td>
		<td>long</td>
		<td>_storeId</td>
		<td>Id of the store.</td>
	</tr>
	<tr>
		<td>async</td>
		<td>boolean</td>
		<td>false</td>
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
		<td>country</td>
		<td>A country object.</td>
	</tr>
</table>

### Example

````javascript
var country = TC.getCurrentShippingCountry({storeId:1});
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
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Country</td>
		<td>The current shipping country object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Country country = TC.GetCurrentShippingCountry(1);
}
````

:::

::::

## SetCurrentPaymentCountry

Changes the current payment country of the customer's session. The payment country is also changed for the customer's current order if present. If the country is changed and the current currency isn't allowed in this country - then the currency will change to the default currency of the new payment country. It is the same with the current shipping method and payment method.

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
		<td><strong>countryRegionId</strong></td>
		<td>long</td>
		<td>Id of the country region to change to.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="SetCurrentPaymentCountry" value="countryId" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="countryId" value="3" type="hidden" />
  <input value="Change payment country" type="submit" />
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
		<td><strong>countryId</strong></td>
		<td>long</td>
		<td></td>
		<td>Id of the country to change to.</td>
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
TC.setCurrentPaymentCountry({storeId:1, countryId:2});
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
		<td><strong>countryId</strong></td>
		<td>long</td>
		<td>Id of the country to change to.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Country</td>
		<td>The new current payment country object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Country country = TC.SetCurrentPaymentCountry( 1, 2 );
}
````

:::

::::

## SetCurrentShippingCountry

Changes the current shipping country of the customer's session. The shipping country is also changed for the customer's current order if present. If the country is changed and the current shipping method isn't allowed in this country - then the shipping method will change to the default shipping method of the new shipping country. If no current shipping country is specified it will fallback to use the payment country.

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
		<td>countryRegionId</td>
		<td>long?</td>
		<td>Id of the country region to change to.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="SetCurrentShippingCountry" value="countryId" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="countryId" value="3" type="hidden" />
  <input value="Change shipping country" type="submit" />
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
		<td>countryId</td>
		<td>long?</td>
		<td></td>
		<td>Id of the country to change to.</td>
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
TC.setCurrentShippingCountry({storeId:1, countryId:2});
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
		<td>countryId</td>
		<td>long?</td>
		<td>Id of the country to change to.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Country</td>
		<td>The new current shipping country object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Country country = TC.SetCurrentShippingCountry( 1, 2 );
}
````

:::

::::