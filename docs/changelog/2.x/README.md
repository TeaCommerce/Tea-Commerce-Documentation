# Changelog

## Version 2.3.5

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Invoicing payment provider was missing in 3.1.3</change-log-item> 
<change-log-item change-type="Fixed">Scanning all assemblies in bin folder and cs files in App_Code</change-log-item> 
</change-log>

## Version 2.3.4

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Staging domains supported</change-log-item> 
<change-log-item change-type="Added">QuickPay v10 supported</change-log-item> 
<change-log-item change-type="Fixed">All assemblies in bin folder is scanned for payment providers and dependencies</change-log-item>
<change-log-item change-type="Fixed">PayPal require TLS 1.2 for all https connections</change-log-item>
</change-log>

## Version 2.3.3

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Installing on Azure would result in no database tables as the detection of DB type was faulty</change-log-item>
<change-log-item change-type="Fixed">Services now uses locks for fixing race conditions</change-log-item>
<change-log-item change-type="Fixed">Removed security checks for some Tea Commerce backoffice controllers</change-log-item>
<change-log-item change-type="Fixed">Using IContent instead of Document for product information extractor</change-log-item>
<change-log-item change-type="Fixed">Now supports v2 licenses</change-log-item>
</change-log>

## Version 2.3.2

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">MailSending event now has a cancel event args to cancel sending</change-log-item>
<change-log-item change-type="Fixed">Shipping method now defaults correctly when country/country region changes</change-log-item>
<change-log-item change-type="Fixed">Order/Order lines properties was wrongly formatted in XML</change-log-item>
<change-log-item change-type="Fixed">MailSend event is now called only when email is send</change-log-item>
<change-log-item change-type="Fixed">Umbraco v7 - vat group picker had naming bug for a variable</change-log-item>
<change-log-item change-type="Fixed">Downgraded Newtonsoft.Json to 5.0.8 for Umbraco 4 and 6</change-log-item>
<change-log-item change-type="Fixed">Ongone payment provider had a casing error in calculating the SHAINPASSPHRASE</change-log-item>
<change-log-item change-type="Broken">Removed DatabaseConnector interface. Use DatabaseFactory</change-log-item>
<change-log-item change-type="Broken">Updated all NotificationCenter event signatures</change-log-item>
</change-log>

## Version 2.3.1

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Updated Newtonsoft.Json to 6.0.3</change-log-item> 
</change-log>

## Version 2.3.0

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Compatible with Umbraco 7.1+</change-log-item>
<change-log-item change-type="Added">Prices can be entered with VAT into Umbraco</change-log-item> 
<change-log-item change-type="Added">Klarna payment provider saves billing_address and shipping_address properties to the order</change-log-item> 
<change-log-item change-type="Fixed">Database can now be fetched without a HttpContext</change-log-item>
<change-log-item change-type="Fixed">SetCurrentOrderId now support orders with the payment status of initialized</change-log-item>
<change-log-item change-type="Fixed">Updated WorldPay payment provider to use 100 as testMode parameter</change-log-item>
<change-log-item change-type="Fixed">Adding cart number to Klarna payment provider</change-log-item>
<change-log-item change-type="Fixed">Payer would double the price if quantity > 1 (Thanks Christerj)</change-log-item>
<change-log-item change-type="Fixed">Updated ePay payment provider webservice reference (Thanks Rasmus Fjord)</change-log-item>
<change-log-item change-type="Broken">Order, shipping, payment and product calculators has minor refactoring (Only affects custom calculators).</change-log-item>
</change-log>

## Version 2.2.3

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Updated Autofac to version 3.3</change-log-item>
<change-log-item change-type="Fixed">Looping dll files with Autofac would give "value is null" exception if a dll had errors - now using try/catch</change-log-item>
<change-log-item change-type="Fixed">Wannafind now opens with target=_self instead of _blank</change-log-item>
<change-log-item change-type="Fixed">Couldn't install on an MySql dabatase</change-log-item>
<change-log-item change-type="Fixed">The information extractor would reuse changed information instead of the original</change-log-item>
</change-log>

## Version 2.2.2

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Added Klarna as a payment provider</change-log-item> 
<change-log-item change-type="Fixed">Wannafind payment provider didn't work with the md5 hash key</change-log-item> 
</change-log>

## Version 2.2.1

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">TC.GetCurrentOrder would create a new order even if autoCreate was false</change-log-item>
<change-log-item change-type="Fixed">JSON serialization with " chars would fail</change-log-item>
<change-log-item change-type="Fixed">Race conditions that could get the cache to fail</change-log-item> 
<change-log-item change-type="Fixed">Fallback to node id and node name didn't work correctly</change-log-item> 
<change-log-item change-type="Fixed">Wannafind now opens in a new tab instead of a popup window</change-log-item> 
<change-log-item change-type="Fixed">Dependencies can now be loaded from App_Code</change-log-item> 
<change-log-item change-type="Fixed">hasCurrentOrder was removed from the JavaScript API as it was removed in other API's</change-log-item>
</change-log>

## Version 2.2.0

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Product uniqueness can now be determined from order line properties</change-log-item>
<change-log-item change-type="Added">HTML API now default to an input field with the same name as the parameter</change-log-item> 
<change-log-item change-type="Added">Stripe payment gateway is supported using inline form (thanks to Matt Brailsford)</change-log-item> 
<change-log-item change-type="Added">CyberSource payment gateway is supported using inline form</change-log-item> 
<change-log-item change-type="Added">Email templates can now have To addresses</change-log-item> 
<change-log-item change-type="Added">Added totalQuantity of order lines to the Order object and in XML and JSON</change-log-item>
<change-log-item change-type="Added">The name of an order line will fallback to the name of the page</change-log-item>
<change-log-item change-type="Added">edit-order.cshtml and email-template-confimation.cshtml is now available in the zip file of the package</change-log-item>
<change-log-item change-type="Fixed">Deleting an order line with a child order line would result in an SQL exception</change-log-item>
<change-log-item change-type="Fixed">Saving prices for shipping and payment methods would result in an SQL exception</change-log-item>
<change-log-item change-type="Fixed">async setting couldn't be overwritten in the JavaScript API</change-log-item>
<change-log-item change-type="Fixed">RenderTemplateFile is now case insensitive</change-log-item>
<change-log-item change-type="Fixed">Original prices was outputted to JSON for child order lines</change-log-item>
<change-log-item change-type="Fixed">Order and order line properties is saved as nvarchar instead of ntext - so its possible to make where clauses</change-log-item>
<change-log-item change-type="Fixed">Calculators default to use the method without an order - so the code can be written in one place</change-log-item>
<change-log-item change-type="Fixed">Payment provider settings is now saved as nvarchar</change-log-item>
<change-log-item change-type="Fixed">MD5 check sum error when doing Quickpay API calls - e.g. get status, capture etc.</change-log-item>
<change-log-item change-type="Fixed">PayPal now only supports an interger for quantity instead of decimal</change-log-item>
<change-log-item change-type="Fixed">Removed permission check for VAT group picker</change-log-item>
<change-log-item change-type="Broken">HasCurrentOrder has been removed from the HTML, JavaScript and Razor API's. Use GetCurrentOrder( storeId, false) to get an order if it exists</change-log-item>
<change-log-item change-type="Broken">HasCurrentFinalizedOrder has been removed from the HTML, JavaScript, Razor and XSLT API's</change-log-item>
<change-log-item change-type="Broken">The notification center has moved or renamed events PaymentFormGenerating, OrderFinalized and OrderFinalizing</change-log-item>
<change-log-item change-type="Broken">Payment provider API has changed - only affects custom created providers</change-log-item>
<change-log-item change-type="Broken">ParsePrice method has been renamed to ParseToDecimal</change-log-item>
</change-log>

## Version 2.1.3

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Added PaymentSense payment provider</change-log-item> 
<change-log-item change-type="Added">Added swedish language to the Tea Commerce backend</change-log-item>
<change-log-item change-type="Added">Added list of ISO 3166 country codes to the payment provider API</change-log-item>
<change-log-item change-type="Fixed">The new domain architecture in Umbraco 6.1+ is now supported</change-log-item>
<change-log-item change-type="Fixed">XSLT extensions wouldn't load in Umbraco 6.1+</change-log-item>
<change-log-item change-type="Fixed">Stock data type wouldn't save the right value when creating a new node in Umbraco 6.1+</change-log-item>
<change-log-item change-type="Fixed">Saving a finalized order would add a duplicate entry in the order XML cache</change-log-item>
<change-log-item change-type="Fixed">SessionController wouldn't move an order correctly in a rare edge case</change-log-item>
<change-log-item change-type="Fixed">Refactored license check for Url referrer</change-log-item>
<change-log-item change-type="Broken">Hashing methods renamed for payment providers</change-log-item>
</change-log>

## Version 2.1.2

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Added Axcess payment provider</change-log-item> 
<change-log-item change-type="Added">Entire Razor and XSLT API has been commented in the .NET code</change-log-item> 
<change-log-item change-type="Fixed">Notification center wouldn't send the correct events when saving the order</change-log-item> 
<change-log-item change-type="Fixed">The JavaScript API now alerts with a readable error when Tea Commerce isn't licensed</change-log-item> 
<change-log-item change-type="Fixed">Removed faulty async settings from a few methods in the JavaScript API</change-log-item> 
<change-log-item change-type="Fixed">Custom properties database type was ntext - changed to nvarchar(max)</change-log-item> 
</change-log>

## Version 2.1.1

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Updating order lines using the order line id was broken in 2.1</change-log-item> 
<change-log-item change-type="Fixed">SagePay had problems with capture/cancel because of a wrong order properties casing for VendorTxCode and TxAuthNo</change-log-item> 
<change-log-item change-type="Fixed">GetAllFinalizedOrdersForCustomer would return no orders because of a wrong select</change-log-item> 
<change-log-item change-type="Fixed">JavaScript events would not fire in all cases</change-log-item> 
<change-log-item change-type="Fixed">Problems updating order lines after customer went to payment</change-log-item> 
<change-log-item change-type="Broken">payment, shipment, transaction has been renamed to paymentInformation, shipmentInformation, transactionInformation in the order JSON</change-log-item> 
</change-log>

## Version 2.1.0

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Updated QuickPay to protocol 7</change-log-item> 
<change-log-item change-type="Added">Added SetCurrentOrder to the JavaScript API</change-log-item> 
<change-log-item change-type="Added">Stores can now share stock of the products</change-log-item> 
<change-log-item change-type="Fixed">Cart/Order numbers wasn't assigned correctly when previous orders was deleted</change-log-item> 
<change-log-item change-type="Fixed">Adding a setting to a payment method's payment provider</change-log-item> 
<change-log-item change-type="Fixed">Email templates couldn't be deleted</change-log-item> 
<change-log-item change-type="Fixed">Email template settings didn't get saved</change-log-item> 
<change-log-item change-type="Fixed">JavaScript bug in the default implementation of edit-order.cshtml</change-log-item> 
<change-log-item change-type="Fixed">Order search would break using SQL CE when no orders was found</change-log-item> 
<change-log-item change-type="Fixed">GetFinalizedOrdersAsXml didn't return any orders</change-log-item> 
<change-log-item change-type="Fixed">SQL CE couldn't save orders</change-log-item> 
<change-log-item change-type="Fixed">Product bundles couldn't be specified in the JavaScript API</change-log-item> 
<change-log-item change-type="Fixed">ServerSideOnly order/order lines properties would be exposed to the JavaScript API</change-log-item> 
<change-log-item change-type="Fixed">SagePay didn't work if no shipping address was added to the order</change-log-item> 
<change-log-item change-type="Fixed">Order/Order lines properties was nvarchar(255) instead of ntext</change-log-item> 
<change-log-item change-type="Broken">Changed the format of order/order line properties in the HTML API - see new format <a href="/3.0.0/api/order-property/#addorupdateorderproperty" target="_blank">here</a></change-log-item>
<change-log-item change-type="Broken">Dependencies that needs to be suppressed should be specified in code using the SuppressDependency attribute instead of the config file in Tea Commerce</change-log-item>
<change-log-item change-type="Broken">Changed BeforePaymentFormGenerated event to PaymentFormGenerating</change-log-item>
<change-log-item change-type="Broken">ProductService has been moved to TeaCommerce.Api.Services and ProductSnapshot has been moved to TeaCommerce.Api.Models</change-log-item>
</change-log>

## Version 2.0.0

**IMPORTANT** It's not possible to upgrade a Tea Commerce 1.x to 2.0

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Multiple stores</change-log-item> 
<change-log-item change-type="Added">Supports MS SQL, SQL CE, MySql, Azure SQL</change-log-item> 
<change-log-item change-type="Added">Brand new APIs - JavaScript, Razor, XSLT, .NET and HTML</change-log-item> 
<change-log-item change-type="Added">Support for product bundles</change-log-item> 
<change-log-item change-type="Added">Supporting countries and regions (states)</change-log-item> 
<change-log-item change-type="Added">Tool that makes it easy to manage/copy multiple language versions</change-log-item> 
<change-log-item change-type="Added">Notification API to get notified when things changes</change-log-item>
<change-log-item change-type="Added">Customizable price calculations - for orders, shipping, payment etc.</change-log-item>
<change-log-item change-type="Added">Shop owners can edit orders in the backend</change-log-item>
</change-log>