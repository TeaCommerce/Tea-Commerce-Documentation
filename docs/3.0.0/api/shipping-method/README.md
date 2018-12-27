# Shipping Method

## GetShippingMethod

Gets a shipping method from a specfic store.

:::: tabs

::: tab "JavaScript API" id="getshippingmethod-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>shippingMethodId</strong></td>
		<td>long</td>
		<td></td>
		<td>Id of the shipping method.</td>
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
		<td>shippingMethod</td>
		<td>A shipping method object.</td>
	</tr>
</table>

### Example

````javascript
var shippingMethod = TC.getshippingMethod({storeId:1, shippingMethodId:2});
````

:::

::: tab "Razor API" id="getshippingmethod-razor"

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
		<td><strong>shippingMethodId</strong></td>
		<td>long</td>
		<td>Id of the shipping method.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>ShippingMethod</td>
		<td>A shipping method object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  shippingMethod shippingMethod = TC.GetshippingMethod( 1, 2 );
}
````

:::

::::

## GetShippingMethods

Gets a collection of all shipping methods that are allowed in the current shipping country and shipping country region - fallback to the payment country and country region.

:::: tabs

::: tab "JavaScript API" id="getshippingmethods-javascript"

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
		<td>onlyAllowed</td>
		<td>boolean</td>
		<td>true</td>
		<td>Specify if only payment methods allowed in the current session state will be returned.</td>
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
		<td>shippingMethod[]</td>
		<td>A collection of shipping method objects.</td>
	</tr>
</table>

### Example

````javascript
var shippingMethods = TC.getShippingMethods({storeId:1});
````

:::

::: tab "Razor API" id="getshippingmethods-razor"

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
		<td>onlyAllowed</td>
		<td>bool</td>
		<td>Specify if only shipping methods allowed in the current session state will be returned.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>IEnumerable&lt;ShippingMethod&gt;</td>
		<td>A collection of shipping methods.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  IEnumerable<ShippingMethod> shippingMethods = TC.GetShippingMethods( 1 );
}
````

:::

::::

## GetCurrentShippingMethod

Gets the current shipping method of the customer's session. If the customer has a current order the shipping method of that order is returned.

:::: tabs

::: tab "JavaScript API" id="getcurrentshippingmethod-javascript"

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
		<td>shippingMethod</td>
		<td>A shipping method object.</td>
	</tr>
</table>

### Example

````javascript
var shippingMethod = TC.getCurrentShippingMethod({storeId:1});
````

:::

::: tab "Razor API" id="getcurrentshippingmethod-razor"

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
		<td>ShippingMethod</td>
		<td>The current shipping method object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  ShippingMethod shippingMethod = TC.GetCurrentShippingMethod( 1 );
}
````

:::

::::

## SetCurrentShippingMethod

Changes the current shipping method of the customer's session. The shipping method is also changed for the customer's current order if present.

:::: tabs

::: tab "HTML API" id="setcurrentshippingmethod-html"

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
		<td>shippingMethodId</td>
		<td>long?</td>
		<td>Id of the shipping method to change to.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="SetCurrentShippingMethod" value="shippingMethodId" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="shippingMethodId" value="3" type="hidden" />
  <input value="Change shipping method" type="submit" />
</form>
````

:::

::: tab "JavaScript API" id="setcurrentshippingmethod-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>shippingMethodId</td>
		<td>long?</td>
		<td></td>
		<td>The shipping method id.</td>
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
TC.setCurrentShippingMethod({storeId:1, shippingMethodId:2});
````

:::

::: tab "Razor API" id="setcurrentshippingmethod-razor"

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
		<td>shippingMethodId</td>
		<td>long?</td>
		<td>Id of the shipping method.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>ShippingMethod</td>
		<td>The new current shipping method object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  ShippingMethod shippingMethod = TC.SetCurrentShippingMethod( 1, 2 );
}
````

:::

::::

## GetPriceForShippingMethod

Get the price for a specific shipping method, based on the customers current currency, shipping country and shipping country region - fallback to the payment country and country region.

:::: tabs

::: tab "JavaScript API" id="getpriceforshippingmethod-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>shippingMethodId</strong></td>
		<td>long</td>
		<td></td>
		<td>Id of the shipping method.</td>
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
		<td>price</td>
		<td>A price object.</td>
	</tr>
</table>

### Example

````javascript
var price = TC.getPriceForShippingMethod({storeId:1, shippingMethodId:2});
````

:::

::: tab "Razor API" id="getpriceforshippingmethod-razor"

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
		<td><strong>shippingMethodId</strong></td>
		<td>long</td>
		<td>Id of the shipping method.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Price</td>
		<td>A price object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Price price = TC.GetPriceForShippingMethod( 1, 2 );
}
````

:::

::::
