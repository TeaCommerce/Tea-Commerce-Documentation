# Country Region

## GetCountryRegion

Gets a country region from a specfic store.

:::: tabs

::: tab "JavaScript API" id="getcountryregion-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>**countryRegionId**</td>
		<td>long</td>
		<td></td>
		<td>Id of the country region</td>
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
		<td>countryRegion</td>
		<td>A country region object.</td>
	</tr>
</table>

### Example

````javascript
var countryRegion = TC.getCountryRegion({storeId:1, countryRegionId:2});
````

:::

::: tab "Razor API" id="getcountryregion-razor"

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
		<td>**countryRegionId**</td>
		<td>long</td>
		<td>Id of the country region</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>CountryRegion</td>
		<td>A country region object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  CountryRegion countryRegion = TC.GetCountryRegion( 1, 2 );
}
````

:::

::::

## GetCountryRegions

Gets the country regions for a specific store. Specify the countryId parameter to only get country regions for this country.

:::: tabs

::: tab "JavaScript API" id="getcountryregions-javascript"

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
		<td>countryRegion[]</td>
		<td>A collection of country region objects.</td>
	</tr>
</table>

### Example

````javascript
var countryRegions = TC.getCountryRegions({storeId:1});
````

::: 

::: tab "Razor API" id="getcountryregions-razor"

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
		<td>countryId</td>
		<td>long?</td>
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
		<td>IEnumerable&lt;CountryRegion&gt;</td>
		<td>A collection of country region objects.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  IEnumerable<CountryRegion> countryRegions = TC.GetCountryRegions(1);
}
````

:::

::::

## GetCurrentPaymentCountryRegion

Gets the current payment country region of the customer's session. If the customer has a current order the payment country region of that order is returned.

:::: tabs

::: tab "JavaScript API" id="getcurrentpaymentcountryregion-javascript"

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
		<td>countryRegion</td>
		<td>A country region object.</td>
	</tr>
</table>

### Example

````javascript
var countryRegion = TC.getCurrentPaymentCountryRegion({storeId:1});
````

:::

::: tab "Razor API" id="getcurrentpaymentcountryregion-razor"

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
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>CountryRegion</td>
		<td>A country region object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  CountryRegion countryRegion = TC.GetCurrentPaymentCountryRegion( 1 );
}
````

:::

::::

## GetCurrentShippingCountryRegion

Gets the current shipping country region of the customer's session. If the customer has a current order the shipping country region of that order is returned.

:::: tabs

::: tab "JavaScript API" id="getcurrentshippingcountryregion-javascript"

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
		<td>countryRegion</td>
		<td>A country region object.</td>
	</tr>
</table>

### Example

````javascript
var countryRegion = TC.getCurrentShippingCountryRegion({storeId:1});
````

:::

::: tab "Razor API" id="getcurrentshippingcountryregion-razor"

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
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>CountryRegion</td>
		<td>A country region object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  CountryRegion countryRegion = TC.GetCurrentShippingCountryRegion( 1 );
}
````

:::

::::

## SetCurrentPaymentCountryRegion

Changes the current payment country region of the customer's session. The payment country region is also changed for the customer's current order if present. If the country region is changed and the current payment and method isn't allowed in this country region - then the payment method will change to the default payment method of the new payment country region. If no current payment country region is specified it will fallback to use the payment country.

:::: tabs

::: tab "HTML API" id="setcurrentpaymentcountryregion-html"

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
		<td>countryRegionId</td>
		<td>long?</td>
		<td>Id of the country region to change to.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="SetCurrentPaymentCountryRegion" value="countryRegionId" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="countryRegionId" value="3" type="hidden" />
  <input value="Change payment country region" type="submit" />
</form>
````

::: 

::: tab "JavaScript API" id="setcurrentpaymentcountryregion-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>countryRegionId</td>
		<td>long?</td>
		<td></td>
		<td>Id of the country region to change to.</td>
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
TC.setCurrentPaymentCountryRegion({storeId:1, countryRegionId:2});
````

:::

::: tab "Razor API" id="setcurrentpaymentcountryregion-razor"

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
		<td>countryRegionId</td>
		<td>long?</td>
		<td>Id of the country region to change to.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>CountryRegion</td>
		<td>The new current payment country region object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  CountryRegion countryRegion = TC.SetCurrentPaymentCountryRegion( 1, 2 );
}
````

:::

::::

## SetCurrentShippingCountryRegion

Changes the current shipping country region of the customer's session. The shipping country region is also changed for the customer's current order if present. If the country region is changed and the current shipping method isn't allowed in this country region - then the shipping method will change to the default shipping method of the new shipping country region. If no current shipping country region is specified it will fallback to use the shipping country and then payment country.

:::: tabs

::: tab "HTML API" id="setcurrentshippingcountryregion-html"

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
		<td>countryRegionId</td>
		<td>long?</td>
		<td>Id of the country region to change to.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="SetCurrentShippingCountryRegion" value="countryRegionId" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="countryRegionId" value="3" type="hidden" />
  <input value="Change shipping country region" type="submit" />
</form>
````

:::

::: tab "JavaScript API" id="setcurrentshippingcountryregion-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>countryRegionId</td>
		<td>long?</td>
		<td></td>
		<td>Id of the country region to change to.</td>
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
TC.setCurrentShippingCountryRegion({storeId:1, countryRegionId:2});
````

:::

::: tab "Razor API" id="setcurrentshippingcountryregion-razor"

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
		<td>countryRegionId</td>
		<td>long?</td>
		<td>Id of the country region to change to.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>CountryRegion</td>
		<td>The new current shipping country region object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  CountryRegion countryRegion = TC.SetCurrentShippingCountryRegion( 1, 2 );
}
````

:::

::::