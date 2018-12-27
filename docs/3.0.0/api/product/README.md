# Product

## FormatPrice

Format a decimal to a price using the current currency.

:::: tabs

::: tab "JavaScript API" id="formatprice-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>**price**</td>
		<td>decimal</td>
		<td></td>
		<td>The price to format excl. VAT.</td>
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
var price = TC.formatPrice({storeId:1, price:99.99});
````

:::

::: tab "Razor API" id="formatprice-razor"

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
		<td>**price**</td>
		<td>decimal</td>
		<td>The price to format excl. VAT.</td>
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
  Price price = TC.FormatPrice( 1, 99.99M );
}
````

:::

::::

## GetPrice

Gets a price for a specific product in the current currency.

:::: tabs 

::: tab "JavaScript API" id="getprice-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>**productIdentifier**</td>
		<td>string</td>
		<td></td>
		<td>A unique identifier of the product. E.g. the node id from Umbraco.</td>
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
var price = TC.getPrice({storeId:1, productIdentifier:'1076'});
````

:::

::: tab "Razor API" id="getprice-razor"

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
		<td>**productIdentifier**</td>
		<td>string</td>
		<td>A unique identifier of the product. E.g. the node id from Umbraco.</td>
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
  Price price = TC.GetPrice( 1, "1076" );
}
````

### Example - Variant

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  List<VariantPublishedContent> variants = TC.GetVariants( storeId, productPage ).ToList();
}
@foreach ( VariantPublishedContent variant in variants ) {
  @(TC.GetPrice(1, Model.Content.Id + "_" + variant.VariantId ))
}
````

:::

::::

## GetStock

Gets the current stock for a specific product.

:::: tabs 

::: tab "JavaScript API" id="getstock-javascript"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>**productIdentifier**</td>
		<td>string</td>
		<td></td>
		<td>A unique identifier of the product. E.g. the node id from Umbraco.</td>
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
		<td>float</td>
		<td>The stock of the product. Will be null if no stock have been provided for this product.</td>
	</tr>
</table>

### Example

````javascript
var stock = TC.getStock({storeId:1, productIdentifier:'1076'});
````

:::

::: tab "Razor API" id="getstock-razor"

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
		<td>**productIdentifier**</td>
		<td>string</td>
		<td>A unique identifier of the product. E.g. the node id from Umbraco.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>decimal?</td>
		<td>The stock of the product. Will be null if no stock have been provided for this product.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@{
  decimal? stock = TC.GetStock( 1, "1076" );
}
````

:::

::::

## GetVariant

Returns a single variant from a product node. The product must have a property with the Tea Commerce: Variant Editor property editor on it. Also you should enter the alias of the document type property on the Store in the Tea Commerce section.

:::: tabs 

::: tab "Razor API" id="getvariant-razor"

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
		<td>**model**</td>
		<td>IPublishedContent</td>
		<td>A product.</td>
	</tr>
	<tr>
		<td>**variantId**</td>
		<td>string</td>
		<td>Id of the variant.</td>
	</tr>
	<tr>
		<td>onlyValid</td>
		<td>bool?</td>
		<td>Will remove all variants that does not validate from the result set. A variant does not validate when there&##x27;s problems with the combination of variant types.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>VariantPublishedContent</td>
		<td>A special IPublishedContent representation of a variant.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  VariantPublishedContent variant = TC.GetVariant( 1, Model, "AFA77248-1D5B-4B31-ACE2-6FD1C609B93B", true );
}
````

:::

::::

## GetVariants

Returns a a list of variants from a product node. The product must have a property with the Tea Commerce: Variant Editor property editor on it. Also you should enter the alias of the document type property on the Store in the Tea Commerce section.

:::: tabs 

::: tab "Razor API" id="getvariants-razor"

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
		<td>**storeId**</td>
		<td>IPublishedContent</td>
		<td>A product.</td>
	</tr>
	<tr>
		<td>onlyValid</td>
		<td>bool?</td>
		<td>Will remove all variants that does not validate from the result set. A variant does not validate when there&##x27;s problems with the combination of variant types.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>IEnumerable&lt;VariantPublishedContent&gt;</td>
		<td>A list of special IPublishedContent representations of variants</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  IEnumerable<VariantPublishedContent> variants = TC.GetVariants( 1, Model, true );
}
````

:::

::::

## GetVariantGroups

Returns a list of variant groups that define the product variants. You can use this list to generate e.g. drop downs for the user to choose his variant combination.

:::: tabs 

::: tab "Razor API" id="getvariantgroups-razor"

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>**variants**</td>
		<td>IEnumerable&lt;VariantPublishedContent&gt;</td>
		<td>A list of variants.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>IEnumerable&lt;VariantGroup&gt;</td>
		<td>A list of the Variant groups and types that define a list of variants.</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  IEnumerable<VariantGroup> variantGroups = TC.GetVariantGroups( variants );
}
@foreach ( VariantGroup variantGroup in attributeGroups ) {
  <select>
    <option value="">Select @variantGroup.Name</option>
    @foreach ( VariantType variantType in variantGroup.Attributes ) {
      <option value="@variantType.Id">@variantType.Name</option>
    }
  </select>
}
````

:::

::::

## GetVariantJson

Returns a json object containing all variants for the product. The data contains information about each variants combination of variant types. Use this data to javascript filter e.g. drop downs when a user/customer selects his variant.

:::: tabs 

::: tab "Razor API" id="getvariantjson-razor"

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
		<td>**model**</td>
		<td>IPublishedContent</td>
		<td>A product.</td>
	</tr>
	<tr>
		<td>onlyValid</td>
		<td>bool</td>
		<td>Will remove all variants that does not validate from the result set. A variant does not validate when there&##x27;s problems with the combination of variant types.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>string</td>
		<td>A json object containing all variants for the product</td>
	</tr>
</table>

### Example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
@{
  string variantJson = TC.GetVariantJson( 1, product, true );
}
````

### Example data

````json
{  
   "1113":{  
      "dc8a57d9-ceb3-757e-ee98-073e37df5dd0":{  
         "combinations":[  
            1120,
            1124
         ],
         "productIdentifier":"1113_dc8a57d9-ceb3-757e-ee98-073e37df5dd0"
      },
      "debe8f77-7537-77e8-e454-daab8d7d12a7":{  
         "combinations":[  
            1120,
            1125
         ],
         "productIdentifier":"1113_debe8f77-7537-77e8-e454-daab8d7d12a7"
      },
      "0f18230d-fc26-b794-ca24-4b90637850be":{  
         "combinations":[  
            1120,
            1126
         ],
         "productIdentifier":"1113_0f18230d-fc26-b794-ca24-4b90637850be"
      },
      "6101dc40-d562-357d-9865-742110847978":{  
         "combinations":[  
            1122,
            1124
         ],
         "productIdentifier":"1113_6101dc40-d562-357d-9865-742110847978"
      },
      "23bbe693-0630-080f-a3c1-885cec9539ee":{  
         "combinations":[  
            1122,
            1125
         ],
         "productIdentifier":"1113_23bbe693-0630-080f-a3c1-885cec9539ee"
      },
      "76235695-bb54-e51c-f328-5e332b98ae08":{  
         "combinations":[  
            1122,
            1126
         ],
         "productIdentifier":"1113_76235695-bb54-e51c-f328-5e332b98ae08"
      }
   }
}
````

:::

::::

## GetPropertyValue

Returns the value of a property on the product. Will traverse the content tree recursively to find the value. Will also use the master relation property of the product to search master products.

<callout-box type="info" heading="Note">

If you have a IPublishedContent model use that instead of the string productIdentifier, which is slightly slower.

</callout-box>

:::: tabs 

::: tab "Razor API" id="getpropertyvalue-razor"

### Arguments 1

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
		<td>**productIdentifier**</td>
		<td>string</td>
		<td>A unique identifier of the product. E.g. the node id from Umbraco.</td>
	</tr>
	<tr>
		<td>**propertyAlias**</td>
		<td>string</td>
		<td>Alias of the property to find.</td>
	</tr>
	<tr>
		<td>func</td>
		<td>Func&lt;IPublishedContent, bool&gt;</td>
		<td>A function to filter the recursive call.</td>
	</tr>
</table>

## Arguments 2

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
		<td>**model**</td>
		<td>IPublishedContent</td>
		<td>A product.</td>
	</tr>
	<tr>
		<td>**propertyAlias**</td>
		<td>string</td>
		<td>Alias of the property to find.</td>
	</tr>
	<tr>
		<td>variantId</td>
		<td>string</td>
		<td>Guid id of the variant.</td>
	</tr>
	<tr>
		<td>func</td>
		<td>Func&lt;IPublishedContent, bool&gt;</td>
		<td>A function to filter the recursive call.</td>
	</tr>
</table>

### Return values

<table>
	<tr>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>T</td>
		<td>The value of the property in the type you want.</td>
	</tr>
</table>

### Example 1

````csharp
@using TeaCommerce.Umbraco.Web
@{
  string productName = TC.GetPropertyValue<string>( 1, "1076", "productName" );
}
````

### Example 2

````csharp
@using TeaCommerce.Umbraco.Web
@{
  string productName = TC.GetPropertyValue<string>( 1, Model, "productName" );
}
````

### Example 3 - variant

````csharp
@using TeaCommerce.Umbraco.Web
@{
  string productName = TC.GetPropertyValue<string>( 1, Model, "productName", "50D790BC-8848-43FA-B443-2EC0DE25CF3E" );
}
````

:::

::::