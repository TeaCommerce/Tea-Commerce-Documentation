# Changelog

## Version 3.4.0

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Distributed cache clearing on ALL servers rather than just child servers</change-log-item>
<change-log-item change-type="Fixed">Payment provider dependencies now internalized to prevent conflicts (mostly with JSON.NET)</change-log-item>
<change-log-item change-type="Fixed">Removed Transaction added in previous update due to it causing multiple deadlocks</change-log-item>
<change-log-item change-type="Improved">Improved HTML API performance by only persisting an Order once per request</change-log-item>
<change-log-item change-type="Improved">Improved Cache performance by moving to ConcurrentDictionary over the old List + Lock approach</change-log-item>
<change-log-item change-type="Improved">Stripe now updated to the latest version</change-log-item>
<change-log-item change-type="Improved">Stripe one-time payment provider now uses a synchronous approach so no need for webhooks <br />(<strong>NB</strong> provider settings may have changed so please read the <a href="/3.4.0/payment-providers/stripe/">docs</a> before upgrading)</change-log-item> </change-log-item>
<change-log-item change-type="Improved">Stripe subscription payment provider now requires manual webhook registration rather than the "magic" automatic registration <br />(<strong>NB</strong> provider settings may have changed so please read the <a href="/3.4.0/payment-providers/stripe-subscription/">docs</a> before upgrading)</change-log-item> </change-log-item>
</change-log>

## Version 3.3.2

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Stripe payment provider updated to sel register webhooks as it wasn't possible in the Stripe dashboard to select a specific webhook API version</change-log-item> 
<change-log-item change-type="Improved">Stripe now updated to the latest version</change-log-item>
<change-log-item change-type="Improved">Payment providers now merged with ILRepack as ILMerge was causing some issues</change-log-item>
<change-log-item change-type="Broken">Payment providers now require Tea Commerce 3.3.0 minimum dependency</change-log-item> 
</change-log>

## Version 3.3.1

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Order calculations no longer error if a product rule is defined against an unpublished product node (Issue #84)</change-log-item>  
<change-log-item change-type="Fixed">Fixed error in Tea Commerce section when Security/License node access is removed for a user (Issue #86)</change-log-item>  
<change-log-item change-type="Fixed">Variants property editor is now hidden untill initial save (Issue #88)</change-log-item>  
<change-log-item change-type="Fixed">Fixed error if an order is saved too quickly (Issue #90)</change-log-item> 
<change-log-item change-type="Fixed">Fixed core data types not playing nicely with Umbraco Deploy (Issue #82)</change-log-item> 
<change-log-item change-type="Fixed">Added productContent null check to OrderLinesThatMatchProductOrProductCategory which was causing errors (PR #85)</change-log-item> 
<change-log-item change-type="Fixed">Fixed master relations not working for MNTP / content pickers in Umbraco v7 (Issue #32 / PR #77)</change-log-item> 
<change-log-item change-type="Improved">Tea Commerce can now render partial views as well as macroscripts (Issue #79 / PR #80)</change-log-item>
<change-log-item change-type="Improved">Stripe payment provider has been updated with the latest Strong Customer Authentication (SCA) recomendations <br />(<strong>NB</strong> provider settings may have changed so please read the <a href="/3.3.1/payment-providers/stripe/">docs</a> before upgrading)</change-log-item> 
<change-log-item change-type="Broken">Klarna payment provider has been removed due to depricated API (If you are using the previoulsy built in Klarna provider, you should move to an alternative provider prior to upgrading)</change-log-item> 
</change-log>

## Version 3.3.0

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

### Install notes

Because payment providers are now ILMerged into a single DLL to prevent conflicts, if you are upgrading from a previous install the old DLLs will remain in the bin folder. It isn't essential these are removed as the ones inside the payment providers DLL will take presedence, but if you would like to keep your bin folder tidy, you can safely delete the following DLLs:

* Klarna.Checkout.dll  
* Paynova.Api.Client.dll  
* Stripe.net.dll  

**Changelog** 

<change-log>
<change-log-item change-type="Added">Added additional method signature to <strong>TC.GetOrder</strong> to support getting an order by <strong>cartNumber</strong>.</change-log-item>
<change-log-item change-type="Added">Added distributed cache support so internal caches will stay in sync on load balanced environments</change-log-item>
<change-log-item change-type="Added">Added <strong>Updated</strong> events to all entity types</change-log-item>
<change-log-item change-type="Added">Added <strong>Finalizing</strong> event to orders about to be finalized</change-log-item>
<change-log-item change-type="Added">Added azurewebsites.net as an allowed dev/staging top level domain</change-log-item>
<change-log-item change-type="Added">New Stripe Subscriptions payment provider has been added</change-log-item>
<change-log-item change-type="Improved">AuthorizeNet payment provider has been Upgraded to Accept Hosted as previous implementation has been depricated <br />(<strong>NB</strong> provider settings may have changed so please read the <a href="/3.3.0/payment-providers/authorizenet/">docs</a> before upgrading)</change-log-item>
<change-log-item change-type="Improved">Stripe payment provider has been Upgraded to the lastest implementation including TLS 1.2 support <br />(<strong>NB</strong> provider settings may have changed so please read the <a href="/3.3.0/payment-providers/stripe/">docs</a> before upgrading)</change-log-item> 
<change-log-item change-type="Improved">Payment providers DLL now ILMerge's any third party dependencies into the one DLL meaning less to deploy and less likliehood of conflicts</change-log-item> 
  <change-log-item change-type="Improved">Relaxed the email validation regex to <code>^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,9}$</code> as previous regex was too strict causing false negatives</change-log-item> 
<change-log-item change-type="Fixed">Fixed issue with variants property editor loosing value if content is saved before property editor is fully initialized</change-log-item> 
<change-log-item change-type="Fixed">Fixed issue with variants property editor not showing variants doctype properties</change-log-item> 
<change-log-item change-type="Fixed">Fixed issue where you would get logged out when creating new entities where the parent node previously had no children</change-log-item>  
<change-log-item change-type="Fixed">Fixed console errors when attempting to add campaign rule but with no rule type selected</change-log-item>  
<change-log-item change-type="Fixed">Fixed trees not highlighting current position</change-log-item>  
<change-log-item change-type="Fixed">Fixed missing icons in security section</change-log-item>    
<change-log-item change-type="Fixed">Fixed error when removing an image from a payment/shipping method</change-log-item> 
<change-log-item change-type="Broken">Payment providers are now compiled against .NET 4.5 (was previously 4.0)</change-log-item> 
</change-log>

## Version 3.2.5

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Fixed MySql DB error with discounts</change-log-item>  
<change-log-item change-type="Fixed">Fixed inconsistent payment status with 3+ decimals</change-log-item>  
</change-log>


## Version 3.2.4

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Fixed culture problem making server UI culture decide how to format stock</change-log-item>
<change-log-item change-type="Fixed">Make sure the install task always installs translations</change-log-item>  
</change-log>

## Version 3.2.3

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Added en-us translations</change-log-item>
<change-log-item change-type="Fixed">Problem with stock property editor when product had no sku property</change-log-item>
<change-log-item change-type="Fixed">Fixed problem with a closing database reader in Umbraco 7.6+</change-log-item>
<change-log-item change-type="Fixed">PayPal payment provider made more secure</change-log-item>
</change-log>

## Version 3.2.2

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Suppress Dependency code can now be debugged again</change-log-item>
</change-log>

## Version 3.2.1

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Improved">Changed all TC "T" products to type class to force people not to use </change-log-item>
<change-log-item change-type="Fixed">Null pointer exception when there's no SKU and no Variants</change-log-item>
</change-log>

## Version 3.2.0

This release is all about better support of Umbraco Cloud and using Tea Commerce with custom product data. This gives you the opportunity to use Tea Commerce with e.g data from a search index, your own product database, an XML file with products etc.

### Better Umbraco Cloud support
Umbraco Cloud is a great tool made by the great people at Umbraco HQ. Tea Commerce now support the domain umbraco.io as a valid test domain. So now you can test as much as you like :)

Packages for Umbraco normally use package actions to do custom install tasks - e.g. installing DB scheme, adding application trees etc. Package actions is not supported in the flow of Umbraco Cloud. So to better support it, we removed all the package actions and made Tea Commerce bootstrap the install process on application load. This means that Tea Commerce will detect if it is fully installed, else it will run its install tasks. So now Tea Commerce will auto install in all your Umbraco Cloud environments.

::: tip No data is moved

At the moment, we don't move any Tea Commerce data on Umbraco Cloud. So when you create a new shipping method on your local, you also need to create it in your other environments. That is by purpose, because when a shop is online you don't want a payment method deleted by accident, because you deleted it on your local machine for testing.

:::

Your products, categories etc, is just normal Umbraco content and is there by automatically moved by Umbraco out of the box.

### Use Tea Commerce with non Umbraco content
Using other data than the Umbraco content as your product data has been made more integrated. Tea Commerce will now be able to interact with your custom product objects. We have created and tested the new feature focusing on making a way to let Tea Commerce use the Examine index as it's product backing. This makes searching and cross-referencing products extremely fast, and Tea Commerce will not waste any time when creating prices and getting other information from the products.  

To read about how to create your own generic product information extractor click [here](https://docs.teacommerce.net/reference#product-information-extractor)

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Huge generic product overhaul</change-log-item>
<change-log-item change-type="Added">Use Tea Commerce with non Umbraco content - e.g. search index, custom product DB, XML file etc.</change-log-item>
<change-log-item change-type="Added">Support Umbraco Cloud (Auto install on environment - no data is moved)</change-log-item>
<change-log-item change-type="Added">umbraco.io is now a valid domain for testing</change-log-item>
<change-log-item change-type="Improved">New tree icons i backoffice (Thanks Matt Brailsford)</change-log-item>
<change-log-item change-type="Improved">Right access permissions are given when user is given access to the Tea Commerce section</change-log-item>
<change-log-item change-type="Improved">One class can suppress multiple dependencies</change-log-item>
<change-log-item change-type="Fixed">Order calculator calculated prices when when using bundles and discounts at the same time</change-log-item>
<change-log-item change-type="Broken">Removed currencyId from TC.FormatPrice</change-log-item>
<change-log-item change-type="Broken">IProductInformationExtractor, IPublishedContentProductInformationExtractor and IProductService have been extended with extra methods</change-log-item>
<change-log-item change-type="Broken">TC.GetVariantGroups() now needs the product</change-log-item>
<change-log-item change-type="Broken">Variant models namespaces have been streamlined</change-log-item>
</change-log>

## Version 3.1.4

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Invoicing payment provider was missing in 3.1.3</change-log-item>
<change-log-item change-type="Fixed">Scanning all assemblies in bin folder and cs files in App_Code</change-log-item>
</change-log>

## Version 3.1.3

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Staging domains supported</change-log-item>
<change-log-item change-type="Added">JavaScript API supports logging with TC.log = true</change-log-item>
<change-log-item change-type="Fixed">All assemblies in bin folder is scanned for payment providers and dependencies</change-log-item>
<change-log-item change-type="Fixed">PayPal require TLS 1.2 for all https connections</change-log-item>
<change-log-item change-type="Fixed">Users is given permissions when given access to the Tea Commerce section instead of on install</change-log-item>
<change-log-item change-type="Fixed">MySql install error after install script 007</change-log-item>
<change-log-item change-type="Fixed">	Variant properties will now be parsed instead of just returning its raw value</change-log-item>
<change-log-item change-type="Broken">LoggingService has new method signatures. Attention if you use custom payment providers</change-log-item>
</change-log>

## Version 3.1.2

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">From now on Tea Commerce does not ship with Newtonsoft and will therefore upgrade with no complications</change-log-item>
</change-log>

## Version 3.1.1

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Problem with error logging when redirecting when JavaScript did not send the request to the form post handler</change-log-item>
</change-log>

## Version 3.1.0

### Variants
This update add's a brand new variant property editor for your products. You can now generate variants from multiple variant types or specifications. Each variant can have all the custom information you need using Umbraco document types.

### Umbraco 7 only updates
In this update we have started transforming the project in the direction of Umbraco 7. This means some new features will only be available to Umbraco 7 websites.

### Install notes
**UPDATE:** From Tea Commerce version **3.1.2** you no longer have to change anything to make Newtonsoft work.

If you install this on an Umbraco version that uses an older version of `Newtonsoft.Json` than v8.x, you have to unzip the install package, copy the `Newtonsoft.Json.dll` to the bind folder. Now make a `dependentAssembly` entry in your web.config to redirect the assembly to v8.x.

````xml
<dependentAssembly>
  <assemblyIdentity name="Newtonsoft.Json" publicKeyToken="30ad4fe6b2a6aeed" culture="neutral" />
  <bindingRedirect oldVersion="0.0.0.0-8.0.0.0" newVersion="8.0.0.0" />
</dependentAssembly>
`````

If you have used either `XmlNodeProductInformationExtractor` or `DynamicNodeProductInformationExtractor` you will also need to overwrite the Tea Commerce binaries and make your project build before you install Tea Commerce. The replacement is the `PublishedContentProductInformationExtractor` which should be implemented instead. Remember to change the `SuppressDependency` attribute to:

````csharp
[SuppressDependency( "TeaCommerce.Umbraco.Configuration.InformationExtractors.IPublishedContentProductInformationExtractor", "TeaCommerce.Umbraco.Configuration" )]
````

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">FormPostHandler will now log errors to the Umbraco log</change-log-item>
<change-log-item change-type="Added">Created virtual property for DiscountCodeService ValidChars</change-log-item>
<change-log-item change-type="Added">Created virtual property for GiftCardService ValidChars</change-log-item>
<change-log-item change-type="Added">Javascript can now be set to log everything to the browser console by setting TC.log = true</change-log-item>
<change-log-item change-type="Added">Marketing rules do now have a not equals option</change-log-item>
<change-log-item change-type="Added">Umbraco 7 - Variants property editor</change-log-item>
<change-log-item change-type="Added">Umbraco 7 - Added methods for fetching variants to TC</change-log-item>
<change-log-item change-type="Added">Umbraco 7 - A column will be added to the TeaCommerce_Store table</change-log-item>
<change-log-item change-type="Improved">Umbraco 7 - Changed discount code tree icons</change-log-item>
<change-log-item change-type="Fixed">Marketing PropertyRule would not work unless the property was either ServerSideOnly or IsReadOnly</change-log-item>
<change-log-item change-type="Broken">Upgraded Newtonsoft.Json to v8.0.2</change-log-item>
<change-log-item change-type="Broken">Umbraco 7 - Replaced XmlNodeProductInformationExtractor with PublishedContentProductInformationExtractor and ContentProductInformationExtractor</change-log-item>
<change-log-item change-type="Broken">Umbraco 7 - Removed DynamicNodeProductInformationExtractor</change-log-item>
<change-log-item change-type="Broken">Umbraco 7 - Refactored TC GetPropertyValue method to use IPublishedContent and generic return types</change-log-item>
</change-log>
  
## Version 3.0.7

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">QuickPay v10 supported</change-log-item>
<change-log-item change-type="Added">Shipping and payment method marketing rules is now available</change-log-item>
<change-log-item change-type="Added">Specify "Allow with previous campaigns" for a marketing campaign</change-log-item>
<change-log-item change-type="Added">Wannafind and SagePay supports 3dSecure payments</change-log-item>
<change-log-item change-type="Added">Marketing campaign icons will change to red when not active</change-log-item>
<change-log-item change-type="Fixed">Klarna now updates order information correctly at Klarna</change-log-item>
<change-log-item change-type="Fixed">Updated link to documentation</change-log-item>
<change-log-item change-type="Fixed">Printing an order in Chrome would cut most of the order info away</change-log-item>
<change-log-item change-type="Fixed">UI changes for the marketing section</change-log-item>
</change-log>

## Version 3.0.6

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Added new Vat methods to TC</change-log-item>
</change-log>

## Version 3.0.5

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Change current VAT group using the API</change-log-item>
<change-log-item change-type="Added">Changed default number of generated discount codes</change-log-item>
<change-log-item change-type="Added">Check that discount code already exists when entering it manually</change-log-item>
<change-log-item change-type="Fixed">System.Security.SecurityException fixed for security/permissions settings</change-log-item>
<change-log-item change-type="Broken">Marketing campaigns are applied to the order in the sorted order</change-log-item>
</change-log>

## Version 3.0.4

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Possible to limit other campaigns from giving discounts if a discount is already applied</change-log-item>
<change-log-item change-type="Fixed">System.Security.SecurityException fixed for store settings</change-log-item>
<change-log-item change-type="Broken">NotificationCenter will trigger MailSending and MailSend events everytime an email template is sent</change-log-item>
<change-log-item change-type="Broken">Bug with marketing and using SQL CE</change-log-item>
</change-log>

## Version 3.0.3

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Store id would not be fetched correctly from the query string on marketing campaigns in Umbraco 7.2.4</change-log-item>
</change-log>

## Version 3.0.2

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Fixed">Tea Commerce JavaScript library would not post forms</change-log-item>
</change-log>

## Version 3.0.1

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Updated the edit order and email standard templates (Remember to merge it with yours)</change-log-item>
<change-log-item change-type="Added">Added code comments for all objects associated with an order</change-log-item>
<change-log-item change-type="Added">Added the possibility to ajax the form from generatePaymentForm</change-log-item>
<change-log-item change-type="Added">Only edit permissions for users that have access to the Tea Commerce section</change-log-item>
<change-log-item change-type="Fixed">GetFinalizedOrdersForCustomer would always return 0 orders</change-log-item>
<change-log-item change-type="Fixed">Deleting an order would result in a 404 in Umbraco 7</change-log-item>
<change-log-item change-type="Fixed">Conctants bug with ClientDependency</change-log-item>
<change-log-item change-type="Fixed">It was not possible to edit the recalculate finalized order at an order status</change-log-item>
<change-log-item change-type="Fixed">User would redirect to login screen in Umbraco 7 when creating first shop or a gift card</change-log-item>
<change-log-item change-type="Fixed">Some times users installing Tea Commerec wouldn't get automatic access</change-log-item>
<change-log-item change-type="Fixed">Users with en-us culture would fail when browsing to the Tea Commerce section</change-log-item>
<change-log-item change-type="Fixed">Stock would not be deducted when an order was finalized</change-log-item>
<change-log-item change-type="Fixed">Services now uses locks for fixing race conditions</change-log-item>
<change-log-item change-type="Fixed">Gift card valid days saved from wrong UI field</change-log-item>
<change-log-item change-type="Fixed">Giving Marketing permissions would result in wrong permission settings</change-log-item>
<change-log-item change-type="Fixed">Opened OrderCalculator again</change-log-item>
<change-log-item change-type="Fixed">Adding a discount code/gift card code would result in a faulty order state</change-log-item>
<change-log-item change-type="Fixed">JavaScript function arrayContains would break some 3 party JS library</change-log-item>
<change-log-item change-type="Fixed">Installing on Azure would result in no database tables as the detection of DB type was faulty</change-log-item>
<change-log-item change-type="Fixed">Order calculator will now calculate true order total without discounts</change-log-item>
</change-log>

## Version 3.0.0

### Marketing marketing marketing!
This release is all about the marketing capabilities in Tea Commerce.
Now the webshop owner can create discount codes, free shipping discount, 10% discount for specific product categories etc.

We have also open sourced the Tea Commerce integration with Umbraco on GitHub.
So now everyone can contribute!

* [https://github.com/TeaCommerce/Tea-Commerce-for-Umbraco](https://github.com/TeaCommerce/Tea-Commerce-for-Umbraco)
* [https://github.com/TeaCommerce/Payment-providers](https://github.com/TeaCommerce/Payment-providers)

Remember to read the install notes - both when installing or upgrading!

### Install note
If you install this on an Umbraco version that uses an older version of Newtonsoft.Json than v6.x, you have to unzip the install package, copy the Newtonsoft.Json.dll to the bin folder. Now make a dependentAssembly entry in your web.config to redirect the assembly to v6.x.

````xml
<dependentAssembly>
  <assemblyIdentity name="Newtonsoft.Json" publicKeyToken="30ad4fe6b2a6aeed" culture="neutral" />
  <bindingRedirect oldVersion="0.0.0.0-6.0.0.0" newVersion="6.0.0.0" />
</dependentAssembly>
````

All custom code has to be recompiled using the new dll files because the Assembly versions of the files has changed. Because of changes to the price object structure, you need to update templates that use these objects - both email templates and page templates.

If you upgrade an existing site that has orders that is not yet finalized but has been paid at the payment gateway. The gateway can't send notifications to Tea Commerce for these orders as the URL's in Tea Commerce has changed. So upgrade with this in mind - probably a late night with tea and biscuits :)

Download from [Our Umbraco](https://our.umbraco.com/packages/website-utilities/tea-commerce/)

**Changelog** 

<change-log>
<change-log-item change-type="Added">Added marketing capabilities - discount codes, free shipping, 10% discount etc.</change-log-item>
<change-log-item change-type="Added">Paynova gateway added</change-log-item>
<change-log-item change-type="Added">Restocking items when quantity is changed or order is deleted</change-log-item>
<change-log-item change-type="Added">Email templates are now generic</change-log-item>
<change-log-item change-type="Added">Added getFinalizedOrderForCustomer to the JavaScript API</change-log-item>
<change-log-item change-type="Fixed">Allowed shipping- and paymentmethods now works correctly</change-log-item>
<change-log-item change-type="Fixed">Wrong currency would be used to format prices for multi currency setups</change-log-item>
<change-log-item change-type="Fixed">Searching orders will now search using both cart- and ordernumber</change-log-item>
<change-log-item change-type="Fixed">Uppercase error with Ogone SHA IN</change-log-item>
<change-log-item change-type="Fixed">Payer used total price instead of unit price</change-log-item>
<change-log-item change-type="Broken">Price structure/calculators has changed to support marketing</change-log-item>
<change-log-item change-type="Broken">SKU, product name and VAT group property alias is now hardcoded - sku, productName, vatGroup</change-log-item>
<change-log-item change-type="Broken">Upgraded Newtonsoft.Json to v6.0.6</change-log-item>
<change-log-item change-type="Broken">Security checks added to payment gateways</change-log-item>
<change-log-item change-type="Broken">Template engine refactored - edit order and email templates need to be revisited</change-log-item>
<change-log-item change-type="Broken">Updated Assembly versions</change-log-item>
<change-log-item change-type="Broken">Order XML cache has been removed</change-log-item>
<change-log-item change-type="Broken">XSLT support has been removed</change-log-item>
<change-log-item change-type="Broken">Removed SetCurrentOrder from JavaScript and HTML API</change-log-item>
<change-log-item change-type="Broken">Removed GetAllFinalizedOrdersAsXml method from the Tea Commerce Helper</change-log-item>
</change-log>
