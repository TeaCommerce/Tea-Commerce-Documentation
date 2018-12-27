# Payment Method

## GetPaymentMethod

Gets a payment method from a specfic store.

:::: tabs

::: tab "JavaScript API" id="getpaymentmethod-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>paymentMethodId</strong></td>
		<td>long</td>
		<td></td>
		<td>Id of the payment method.</td>
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
		<td>paymentMethod</td>
		<td>A payment method object.</td>
	</tr>
</table>

### Example

````javascript
var paymentMethod = TC.getPaymentMethod({storeId:1, paymentMethodId:2});
````

:::

::: tab "Razor API" id="getpaymentmethod-razor"

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
		<td><strong>paymentMethodId</strong></td>
		<td>long</td>
		<td>Id of the payment method.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>PaymentMethod</td>
		<td>A payment method object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  PaymentMethod paymentMethod = TC.GetPaymentMethod( 1, 2 );
}
````

:::

::::

## GetPaymentMethods

Gets a collection of all payment methods that are allowed in the current payment country and payment country region.

:::: tabs

::: tab "JavaScript API" id="getpaymentmethods-javascript"

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
		<td>paymentMethod[]</td>
		<td>A collection of payment methods.</td>
	</tr>
</table>

### Example

````javascript
var paymentMethods = TC.getPaymentMethods({storeId:1});
````

:::

::: tab "Razor API" id="getpaymentmethods-razor"

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
		<td>Specify if only payment methods allowed in the current session state will be returned.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>IEnumerable&lt;PaymentMethod&gt;</td>
		<td>A collection of payment methods.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  IEnumerable<PaymentMethod> paymentMethods = TC.GetPaymentMethods( 1 );
}
````

:::

::::

## GetCurrentPaymentMethod

Gets the current payment method of the customer's session. If the customer has a current order the payment method of that order is returned.


:::: tabs

::: tab "JavaScript API" id="getcurrentpaymentmethod-javascript"

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
		<td>paymentMethod</td>
		<td>A payment method object.</td>
	</tr>
</table>

### Example

````javascript
var paymentMethod = TC.getCurrentPaymentMethod({storeId:1});
````

:::

::: tab "Razor API" id="getcurrentpaymentmethod-razor"

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
		<td>PaymentMethod</td>
		<td>The current payment method object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  PaymentMethod paymentMethod = TC.GetCurrentPaymentMethod( 1 );
}
````

:::

::::

## SetCurrentPaymentMethod

Changes the current payment method of the customer's session. The payment method is also changed for the customer's current order if present.

:::: tabs 

::: tab "HTML API" id="setcurrentpaymentmethod-html"

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
		<td>paymentMethodId</td>
		<td>long?</td>
		<td>Id of the payment method to change to.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="SetCurrentPaymentMethod" value="paymentMethodId" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="paymentMethodId" value="3" type="hidden" />
  <input value="Change payment method" type="submit" />
</form>
````

:::

::: tab "JavaScript API" id="setcurrentpaymentmethod-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>paymentMethodId</td>
		<td>long?</td>
		<td></td>
		<td>The payment method id.</td>
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
TC.setCurrentPaymentMethod({storeId:1, paymentMethodId:2});
````

:::

::: tab "Razor API" id="setcurrentpaymentmethod-razor"

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
		<td>paymentMethodId</td>
		<td>long?</td>
		<td>Id of the payment method.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>PaymentMethod</td>
		<td>The new current payment method object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  PaymentMethod paymentMethod = TC.SetCurrentPaymentMethod( 1, 2 );
}
````

:::

::::

## GetPriceForPaymentMethod

Get the price for a specific payment method, based on the customers current currency, payment country and payment country region.

:::: tabs 

::: tab "JavaScript API" id="getpriceforpaymentmethod-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>paymentMethodId</strong></td>
		<td>long</td>
		<td></td>
		<td>Id of the payment method.</td>
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
var price = TC.getPriceForPaymentMethod({storeId:1, paymentMethodId:2});
````

:::

::: tab "Razor API" id="getpriceforpaymentmethod-razor"

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
		<td><strong>paymentMethodId</strong></td>
		<td>long</td>
		<td>Id of the payment method.</td>
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
  Price price = TC.GetPriceForPaymentMethod( 1, 2 );
}
````

:::

::::