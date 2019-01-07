# Order Line

## AddOrUpdateOrderLine

This method has multiple use cases, but common for all is that its updating the customer's current order. The most simple scenario is adding an order line. The other uses are updating the quantity of an existing order line, add unique order lines, add bundled products etc.

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
		<td>productIdentifier</td>
		<td>string?</td>
		<td>A unique identifier of the product. E.g. the node id from Umbraco.</td>
	</tr>
	<tr>
		<td>orderLineId</td>
		<td>long?</td>
		<td>Id of the order line.</td>
	</tr>
	<tr>
		<td>quantity</td>
		<td>decimal?</td>
		<td>The quantity of the order line. Default behavior will add the quantity to the existing order line&#x27;s quantity. This can be changed using the overwriteQuantity parameter.</td>
	</tr>
	<tr>
		<td>properties</td>
		<td></td>
		<td>A list of key/value pairs identifying the property alias and name of a html input to deliver the value.</td>
	</tr>
	<tr>
		<td>overwriteQuantity</td>
		<td>bool?</td>
		<td>If true - the parameter will overwrite the current quantity of the order line.</td>
	</tr>
	<tr>
		<td>bundleIdentifier</td>
		<td>string?</td>
		<td>Use to be able to create product bundles. This identifier is used when adding sub order lines to this order line.</td>
	</tr>
	<tr>
		<td>parentBundleIdentifier</td>
		<td>string?</td>
		<td>The bundleIdentifier of the order line you want to add this product to.</td>
	</tr>
</table>

### Example - Add order line - 1

Adding an order line in its most simple form.

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="AddOrUpdateOrderLine" value="productIdentifier, quantity" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="productIdentifier" value="1072" type="hidden" />
  <input name="quantity" value="1" type="text" />
  <input value="Add order line" type="submit" />
</form>
````

### Example - Add order line - 2

The example extends the first example by adding custom properties to the added order line. These properties can be any key/value pair that you desire. The properties can be updated after the order line has been added by submitting new values.

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="AddOrUpdateOrderLine" value="productIdentifier, quantity, properties" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="productIdentifier" value="1072" type="hidden" />
  <input name="quantity" value="1" type="text" />
  <input name="properties" value="fromDate, toDate" type="hidden" />
  <input name="engraving" value="cool product" type="text" />
  <input value="Add order line" type="submit" />
</form>
````

### Example - Overwrite quantity

This example shows how to overwrite the quantity for an existing order line.

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="AddOrUpdateOrderLine" value="orderLineId, quantity, overwriteQuantity" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="orderLineId" value="3" type="hidden" />
  <input name="overwriteQuantity" value="true" type="hidden" />
  <input name="quantity" value="2" type="text" />
  <input value="Update quantity" type="submit" />
</form>
````

### Example - Product bundle

This example demonstrates how to add product bundles. A computer is added as the main product bundle item. Another product - it could be a RAM module - is added, specifying the computer as its bundle parent.

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="AddOrUpdateOrderLine" value="productIdentifier : productIdentifier_1, quantity : quantity_1, bundleIdentifier : bundleIdentifier" type="hidden" />
  <input name="AddOrUpdateOrderLine" value="productIdentifier : productIdentifier_2, quantity : quantity_2, parentBundleIdentifier : bundleIdentifier" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="productIdentifier_1" value="1072" type="hidden" />
  <input name="quantity_1" value="1" type="text" />
  <input name="bundleIdentifier" value="Computer" type="hidden" />
  <input name="productIdentifier_2" value="1073" type="hidden" />
  <input name="quantity_2" value="2" type="text" />
  <input value="Add product bundle" type="submit" />
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
		<td>productIdentifier</td>
		<td>string?</td>
		<td></td>
		<td>A unique identifier of the product. E.g. the node id from Umbraco.</td>
	</tr>
	<tr>
		<td>orderLineId</td>
		<td>long?</td>
		<td></td>
		<td>Id of the order line.</td>
	</tr>
	<tr>
		<td>quantity</td>
		<td>decimal?</td>
		<td></td>
		<td>The quantity of the order line. Default behavior will add the quantity to the existing order line&#x27;s quantity. This can be changed using the overwriteQuantity parameter.</td>
	</tr>
	<tr>
		<td>properties</td>
		<td>property object?</td>
		<td></td>
		<td>A property object containing keys and values of the properties to be added.</td>
	</tr>
	<tr>
		<td>overwriteQuantity</td>
		<td>boolean</td>
		<td>false</td>
		<td>If true - the parameter will overwrite the current quantity of the order line.</td>
	</tr>
	<tr>
		<td>bundleIdentifier</td>
		<td>string?</td>
		<td></td>
		<td>Use to be able to create product bundles. This identifier is used when adding sub order lines to this order line.</td>
	</tr>
	<tr>
		<td>parentBundleIdentifier</td>
		<td>string?</td>
		<td></td>
		<td>The bundleIdentifier of the order line you want to add this product to.</td>
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

### Example - Add order line - 1

Adding an order line in its most simple form.

````javascript
TC.addOrUpdateOrderLine({storeId:1, productIdentifier:1072, quantity:1});
````

### Example - Add order line - 2

The example extends the first example by adding custom properties to the added order line. These properties can be any key/value pair that you desire. The properties can be updated after the order line has been added by submitting new values.

````javascript
TC.addOrUpdateOrderLine({storeId:1, productIdentifier:1072, quantity:1, properties:{engraving:'cool product'}});
````

### Example - Overwrite quantity

This example shows how to overwrite the quantity for an existing order line.

````javascript
TC.addOrUpdateOrderLine({storeId:1, orderLineId:3, quantity:2, overwriteQuantity:true});
````

### Example - Product bundle

This example demonstrates how to add product bundles. A computer is added as the main product bundle item. Another product - it could be a RAM module - is added, specifying the computer as its bundle parent.

````javascript
TC.addOrUpdateOrderLine({storeId:1, productIdentifier:1072, quantity:1, bundleIdentifier:'Computer'});
TC.addOrUpdateOrderLine({storeId:1, productIdentifier:1073, quantity:1, parentBundleIdentifier:'Computer'});
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
		<td><strong>productIdentifier</strong></td>
		<td>string</td>
		<td>A unique identifier of the product. E.g. the node id from Umbraco.</td>
	</tr>
	<tr>
		<td>quantity</td>
		<td>decimal?</td>
		<td>The quantity of the order line. Default behavior will add the quantity to the existing order line&#x27;s quantity. This can be changed using the overwriteQuantity parameter.</td>
	</tr>
	<tr>
		<td>properties</td>
		<td>Dictionary&lt;string, string&gt;</td>
		<td>A dictionary containing the property aliases and their values.</td>
	</tr>
	<tr>
		<td>overwriteQuantity</td>
		<td>bool?</td>
		<td>If true - the parameter will overwrite the current quantity of the order line.</td>
	</tr>
	<tr>
		<td>bundleIdentifier</td>
		<td>string?</td>
		<td>Use to be able to create product bundles. This identifier is used when adding sub order lines to this order line.</td>
	</tr>
	<tr>
		<td>parentBundleIdentifier</td>
		<td>string?</td>
		<td>The bundleIdentifier of the order line you want to add this product to.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>OrderLine</td>
		<td>The order line just created or updated.</td>
	</tr>
</table>

### Example - Add order line - 1

Adding an order line in its most simple form.

````csharp
@using TeaCommerce.Umbraco.Web
@{
  OrderLine orderLine = TC.AddOrUpdateOrderLine(1, "1072", 1);
}
````

### Example - Add order line - 2

The example extends the first example by adding custom properties to the added order line. These properties can be any key/value pair that you desire. The properties can be updated after the order line has been added by submitting new values.

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  Dictionary<string, string> customPropertiesToAdd = new Dictionary<string, string>();
  customPropertiesToAdd.Add( "engraving", "cool product" );
  OrderLine orderLine = TC.AddOrUpdateOrderLine(1, "1072", 1, properties: customPropertiesToAdd);
}
````

### Example - Overwrite quantity

This example shows how to overwrite the quantity for an existing order line.

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{

  OrderLine orderLine = TC.AddOrUpdateOrderLine(1, "1072", 2, overwriteQuantity: true);
}
````

### Example - Product bundle

This example demonstrates how to add product bundles. A computer is added as the main product bundle item. Another product - it could be a RAM module - is added, specifying the computer as its bundle parent.

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{

  OrderLine orderLineComputer = TC.AddOrUpdateOrderLine(1, "1072", 1, bundleIdentifier: "Computer");
  OrderLine orderLineRAM = TC.AddOrUpdateOrderLine(1, "1073", 1, parentBundleIdentifier: "Computer");
}
````

:::

::::

## UpdateOrderLine

Updates a single order line on the current order. If the customer does not have a current order a new one will be created.

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
		<td><strong>orderLineId</strong></td>
		<td>long</td>
		<td>If of the order line.</td>
	</tr>
	<tr>
		<td>quantity</td>
		<td>decimal?</td>
		<td>The quantity of the order line. Default behavior will add the quantity to the existing order line&#x27;s quantity. This can be changed using the overwriteQuantity parameter.</td>
	</tr>
	<tr>
		<td>properties</td>
		<td>Dictionary&lt;string, string&gt;?</td>
		<td>A dictionary containing the property aliases and their values.</td>
	</tr>
	<tr>
		<td>overwriteQuantity</td>
		<td>bool?</td>
		<td>If true - the parameter will overwrite the current quantity of the order line.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>OrderLine</td>
		<td>The order line updated.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  OrderLine orderLine = TC.UpdateOrderLine(1, 72, 1);
}
````

:::

::::

## RemoveOrderLine

Removes a single order line from the customer's current order.

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
		<td><strong>orderLineId</strong></td>
		<td>long</td>
		<td>Id of the order line.</td>
	</tr>
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="RemoveOrderLine" value="orderLineId" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="orderLineId" value="3" type="hidden" />
  <input value="Remove order line" type="submit" />
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
		<td><strong>orderLineId</strong></td>
		<td>long</td>
		<td></td>
		<td>Id of the order line.</td>
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
TC.removeOrderLine({storeId:1, orderLineId: 172});
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
		<td><strong>orderLineId</strong></td>
		<td>long</td>
		<td>Id of the order line.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>OrderLine</td>
		<td>The removed order line.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  OrderLine orderLine = TC.RemoveOrderLine(1, 78);
}
````

:::

::::

## RemoveAllOrderLines

Removes all order lines from the customer's current order.

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
</table>

### Example

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="RemoveAllOrderLines" value="" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input value="Remove all order lines" type="submit" />
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
TC.removeAllOrderLines({storeId:1});
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
		<td>IEnumerable&lt;OrderLine&gt;</td>
		<td>A collection of all removed order lines.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  IEnumerable<OrderLine> orderLines = TC.RemoveAllOrderLines(1);
}
````

:::

::::




## Automatic Properties

When adding an item to an order, you can provide extra information to add to an OrderLine by passing a `properties` collection through to either of the `AddOrUpdateOrderLine` or `UpdateOrderLine` methods documented above. 

However, you can also configure Tea Commerce to automatically copy across certain product information for you automatically. This can be useful if you have information you constantly want to display next to an OrderLine item but don't want to have to perform a node lookup every time.

To automatically copy node fields to an OrderLine, these can be configured by entering a comma separated list of property aliases into the **Product property aliases** field found on the **Store** editor, under the **Product** tab.

![Store Product Information](/img/store-product-config.png)

## System Properties

When adding an item to an order, as well as the properties passed via the `AddOrUpdateOrderLine` or `UpdateOrderLine` methods `properties` collection as documented above, Tea Commerce will also add some system defined properties to the OrderLine who's values will be automatically extracted from the product node. In order for these properties to work, you must have fields on your product node with the documented property aliases defined below.

<table>
	<tr>
		<th>Name</th>
		<th>Property Alias</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><strong>SKU</strong></td>
		<td>sku</td>
		<td>A product SKU code.</td>
	</tr>
</table>

**NB** These fields are extracted via a [Product Information Extractor](../extending-tea-commerce/#product-information-extractor), if you need to extract these fields from alternative sources, you can do so by overriding the default Product Information Extractor with  your own.