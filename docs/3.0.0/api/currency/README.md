# Currency

## GetCurrency

Gets a currency from a specfic store.

:::: tabs

::: tab "JavaScript API" id="getcurrency-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>currencyId</strong></td>
		<td>long</td>
		<td></td>
		<td>The currency id.</td>
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
		<td>currency</td>
		<td>A currency object.</td>
	</tr>
</table>

### Example

````javascript
var currency = TC.getCurrency({storeId:1, currencyId:2});
````

:::

::: tab "Razor API" id="getcurrency-razor"

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
		<td><strong>currencyId</strong></td>
		<td>long</td>
		<td>The currency id.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Currency</td>
		<td>A currency object.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Currency currency = TC.GetCurrency(1, 2);
}
````

:::

::::

## GetCurrencies

Gets the currencies for a specific store that are allowed in the current payment country region. Will fallback to current payment country.

:::: tabs

::: tab "JavaScript API" id="getcurrencies-javascript"

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
		<td>Specify if only currencies allowed in the current session state will be returned.</td>
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
		<td>currency[]</td>
		<td>A collection of currency objects.</td>
	</tr>
</table>

### Example

````javascript
var currencies = TC.getCurrencies({storeId:1});
````

:::

::: tab "Razor API" id="getcurrencies-razor"

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
		<td>Specify if only currencies allowed in the current session state will be returned.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>IEnumerable&lt;Currency&gt;</td>
		<td>A collection of currency objects.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  IEnumerable<Currency> currencies = TC.GetCurrencies(1);
}
````

:::

::::

## GetCurrentCurrency

Gets the current currency of the customer's session. If the customer has a current order the currency of that order is returned.

:::: tabs

::: tab "JavaScript API" id="getcurrentcurrency-javascript"

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
		<td>currency</td>
		<td>A currency object.</td>
	</tr>
</table>

### Example

````javascript
var currency = TC.getCurrency({storeId:1});
````

:::

::: tab "Razor API" id="getcurrentcurrency-razor"

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
		<td>Currency</td>
		<td>The current currency.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Currency currency = TC.GetCurrentCurrency(1);
}
````

:::

::::

## SetCurrentCurrency

Changes the current currency of the customer's session. The currency is also changed for the customer's current order if present.

:::: tabs

::: tab "HTML API" id="setcurrentcurrency-html"

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
		<td><strong>currencyId</strong></td>
		<td>long</td>
		<td>Id of the currency to change to.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="SetCurrentCurrency" value="currencyId" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="currencyId" value="3" type="hidden" />
  <input value="Change currency" type="submit" />
</form>
````

:::

::: tab "JavaScript API" id="setcurrentcurrency-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>currencyId</strong></td>
		<td></td>
		<td></td>
		<td>The currency id.</td>
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
TC.setCurrency({storeId:1, currencyId:2});
````

:::

::: tab "Razor API" id="setcurrentcurrency-razor"

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
		<td><strong>currencyId</strong></td>
		<td>long</td>
		<td>Id of the currency to change to.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Currency</td>
		<td>The current currency.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Currency currency = TC.SetCurrentCurrency(1, 2);
}
````

:::

::::
