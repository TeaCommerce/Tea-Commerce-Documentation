# Extending Tea Commerce

## Order Line Calculator

An order line calculator is the engine used in Tea Commerce to calculate price for an order line. The order line calculator is used in the order calculator.

To create your own order line calculator your class must implement the IOrderLineCalculator interface. If you want to save time you can just inherit from OrderLineCalculator which is the standard order line calculator in Tea Commerce. Use the [SuppressDependency](#override-default-providers) class attribute to register your custom order line calculator - see example below.

### Example

This example shows a simple implementation of a custom order line calculator. It inherits from the Tea Commerce standard order line calculator to save time and only override the methods that needs to be custom.

````csharp
using TeaCommerce.Api.Dependency;
using TeaCommerce.Api.Models;
using TeaCommerce.Api.PriceCalculators;
using TeaCommerce.Api.Services;

namespace TeaCommerce.Tests.PriceCalculators {
  [SuppressDependency( "TeaCommerce.Api.PriceCalculators.IOrderLineCalculator", "TeaCommerce.Api" )]
  public class CustomOrderLineCalculator : OrderLineCalculator {

    public CustomOrderLineCalculator( IVatGroupService vatGroupService, IProductInformationExtractor productInformationExtractor )
      : base( vatGroupService, productInformationExtractor  ) {
    }

    public override Price CalculatePrice( OrderLine orderLine, Currency currency, Order order ) {
      return new Price( 100M, orderLine.VatRate, currency );
    }

  }
}
````

## Shipping Calculator

A shipping calculator is the engine used in Tea Commerce to calculate the shipping costs for a specific shipping method. It can calculate the price based on order information or a country/-region.

To create your own shipping calculator your class must implement the IShippingCalculator interface. If you want to save time you can just inherit from ShippingCalculator which is the standard shipping calculator in Tea Commerce. Use the [SuppressDependency](#override-default-providers) class attribute to register your custom shipping calculator - see example below.

### Example

This example shows a simple implementation of a custom shipping calculator. It inherits from the Tea Commerce standard shipping calculator to save time and only override the methods that needs to be custom. The overridden method just returns a hardcoded price.

````csharp
using TeaCommerce.Api.Dependency;
using TeaCommerce.Api.Models;
using TeaCommerce.Api.PriceCalculators;
using TeaCommerce.Api.Services;

namespace TeaCommerce.Tests.PriceCalculators {
  [SuppressDependency( "TeaCommerce.Api.PriceCalculators.IShippingCalculator", "TeaCommerce.Api" )]
  public class CustomShippingCalculator : ShippingCalculator {

    public CustomShippingCalculator( IVatGroupService vatGroupService )
      : base( vatGroupService ) {
    }

    public override Price CalculatePrice( ShippingMethod shippingMethod, Currency currency, Order order ) {
      return new Price( 100M, order.VatRate, currency );
    }

  }
}
````

## Payment Calculator

Tea Commerce uses a payment calculator to calculate the price for a specific payment method. It can calculate the price based on order information or a country/-region.

Implementing your own payment calculator is pretty easy - just implement the IPaymentCalculator interface. If you want to save time you can just inherit from PaymentCalculator which is the standard payment calculator in Tea Commerce. Use the [SuppressDependency](#override-default-providers) class attribute to register your custom payment calculator - see example below.

### Example

This example features a simple implementation of a custom payment calculator. It inherits from the Tea Commerce standard payment calculator and only overrides the methods that need custom behavior. The overridden method just returns a hardcoded price.

````csharp
using TeaCommerce.Api.Dependency;
using TeaCommerce.Api.Models;
using TeaCommerce.Api.PriceCalculators;
using TeaCommerce.Api.Services;

namespace TeaCommerce.Tests.PriceCalculators {
  [SuppressDependency( "TeaCommerce.Api.PriceCalculators.IPaymentCalculator", "TeaCommerce.Api" )]
  public class CustomPaymentCalculator : PaymentCalculator {

    public CustomPaymentCalculator( IVatGroupService vatGroupService )
      : base( vatGroupService ) {
    }

    public override Price CalculatePrice( PaymentMethod paymentMethod, Currency currency, long countryId, long? countryRegionId, VatRate vatRate ) {
      return new Price( 1.5M, vatRate, currency);
    }

  }
}
````

## Product Calculator

The product calculator is used in Tea Commerce when a product price is needed for UI rendering in the shop. The calculator is NOT used in the order calculator.

To create a custom product calculator you just need a class to implement the IProductCalculator interface. If you want to save time you can just inherit from ProductCalculator which is the standard product calculator in Tea Commerce. Use the [SuppressDependency](#override-default-providers) class attribute to register your custom product calculator - see example below.

### Example

A simple implementation of a custom product calculator. It inherits from the Tea Commerce default product calculator to save time and only override the methods that needs to be custom. To keep the example simple, one method has been overridden and returns a hardcoded price.

````csharp
using TeaCommerce.Api.Dependency;
using TeaCommerce.Api.Models;
using TeaCommerce.Api.PriceCalculators;
using TeaCommerce.Api.Services;

namespace TeaCommerce.Tests.PriceCalculators {
  [SuppressDependency( "TeaCommerce.Api.PriceCalculators.IProductCalculator", "TeaCommerce.Api" )]
  public class CustomProductCalculator : ProductCalculator {

    public CustomProductCalculator( IVatGroupService vatGroupService, IProductService productService )
      : base( vatGroupService, productService ) {
    }

    public override Price CalculatePrice( string productIdentifier, Currency currency, VatRate vatRate ) {
      return new Price( 45M, vatRate, currency);
    }

  }
}
````

## Product Information Extractor

So what is behind this fancy name. As you might know, Tea Commerce doesn't manage products, instead it relies on a 3rd party system to manage this information. An example of a 3rd party system is Umbraco, where the products are managed as nodes in the Umbraco node structure. The glue between a 3rd party system's product information and Tea Commerce is a product information extractor.

The product information extractor is mainly used in two scenarios. First case is when Tea Commerce is used to display product information in the UI of the e-commerce solution. The other one is when a customer adds a new product to his current order and Tea Commerce needs to take a snapshot of the product information. A snapshot is created of the current product information to ensure that future changes to a product doesn't affect the information of previously bought products.

Tea Commerce ships with a product information extractor for each 3rd party system that it supports. If you need to customize the way the built-in extractors work you can find more information here: [Umbraco](#customizing-umbraco-information-extractor). It is also possible to create a 100% custom product information extractor that supports a 3rd party system that Tea Commerce doesn't already know. When creating a new product information extractor you just need to implement the IProductInformationExtractor interface. Then use the [SuppressDependency](#override-default-providers) class attribute to register your product information extractor.

### Generic Products

From version 3.2.0 Tea Commerce supports generic information extractors. This means you can feed the Tea Commerce API with an object of your own custom classes, and Tea Commerce will be able to get the information it needs directly, without needing to first find the product again. This means better performance and more control.

Because of the generic products the information extrators have now been split into 3 parts. 

### None Generic Part

This part only needs a product identifier to get the product and the information. Tea Commerce needs this to get information for the order lines, which is added with only the product identifier.

### Generic Product

This part needs a model of the product and can interact directly with that to find the information.

### Generic Product and Variant

This part needs both a model og the product and the variant. This one is only needed if the website uses variants. Tea Commerce have a variants system, which can be used with your own product models. You can also choose to implement your own variants system and models. The example below will use the built in variant system of Tea Commerce.

### Example

This example uses the Examine SearchResult as its product model and the Tea Commerce VariantPublishedContent as its variants model.

Note that there are three SuppressDependency attributes on the class, matching the three inherited interfaces. When you create your own make sure that the name spaces and class names in your SuppressDependency attributes matches exactly or your information extractor will not be loaded.

### About the Examine Index

By default the examine index holds all the information that is entered on your Umbraco nodes. The index is extremely fast when searching and by adding all your product data to the index, you will have fast and easy access to your products even with tens of thousands of products.

For more information on Examine [click here](https://our.umbraco.com/documentation/reference/searching/examine/)

### SearchResultProductInformationExtractor

This class is the information extractor. It will be responsible for getting the needed information from the SearchResult and returning it. 

### SearchResultVariantService

This is a variant service helping Tea Commerce getting variants from the SearchResult. In this case we are using the standard Tea Commerce variants system, which depends on variants coming from a blob of json on the product. This blob is saved in Umbraco, and  indexed directly into the search index.

### What else is Needed

You will need to create a custom indexer for Umbraco for this to work proberly. Tea Commerce needs the store id of the products and instead of hardcoding it into the service we are indexing the store id onto each product in the index. This way you will also be able to use the store id when searching for products on multistore websites. To make your own indexer you must inherit from the UmbracoExamine.UmbracoContentIndexer class and override the OnDocumentWriting method. Make sure to check the dos and don'ts [here](https://our.umbraco.com/documentation/Reference/Common-Pitfalls/).

````csharp
using Examine;
using System;
using System.Globalization;
using TeaCommerce.Api;
using TeaCommerce.Api.Common;
using TeaCommerce.Api.Dependency;
using TeaCommerce.Api.InformationExtractors;
using TeaCommerce.Api.Models;
using TeaCommerce.Api.Services;
using TeaCommerce.Umbraco.Configuration.Services;
using TeaCommerce.Umbraco.Configuration.Variants.Models;
using umbraco;
using Website.Extensions.Ecommerce.Extensions;
using Website.Extensions.Ecommerce.Services;
using Website.Extensions.Extensions;

namespace Website.Extensions.Ecommerce.TeaCommerceExtensions {

  [SuppressDependency( "TeaCommerce.Api.InformationExtractors.IProductInformationExtractor", "TeaCommerce.Api" )]
  [SuppressDependency( "TeaCommerce.Api.InformationExtractors.IProductInformationExtractor`1[[Examine.SearchResult, Examine]]", "TeaCommerce.Api" )]
  [SuppressDependency( "TeaCommerce.Api.InformationExtractors.IProductInformationExtractor`2[[Examine.SearchResult, Examine],[TeaCommerce.Umbraco.Configuration.Variants.Models.VariantPublishedContent, TeaCommerce.Umbraco.Configuration]]", "TeaCommerce.Api" )]
  public class SearchResultProductInformationExtractor : IProductInformationExtractor<SearchResult, VariantPublishedContent>, IProductInformationExtractor<SearchResult>, IProductInformationExtractor {
    protected readonly IStoreService StoreService;
    protected readonly ICurrencyService CurrencyService;

    #region IProductInformationExtractor<IPublishedContent, VariantPublishedContent>

    public SearchResultProductInformationExtractor( IStoreService storeService, ICurrencyService currencyService ) {
      StoreService = storeService;
      CurrencyService = currencyService;
    }

    public long? GetLanguageId( SearchResult product, VariantPublishedContent variant ) {
      return LanguageService.Instance.GetLanguageIdByNodePath( product.GetValue( "path" ) );
    }

    public string GetName( SearchResult product, VariantPublishedContent variant ) {
      return product.GetVariantValue( "productName", variant, CultureInfo.CurrentUICulture.Name );
    }

    public CustomPropertyCollection GetProperties( SearchResult product, VariantPublishedContent variant ) {
      CustomPropertyCollection properties = new CustomPropertyCollection();

      long? storeId = product.GetValue<long>( "storeId" );
      if ( storeId != null ) {
        foreach ( string productPropertyAlias in StoreService.Get( storeId.Value ).ProductSettings.ProductPropertyAliases ) {
          properties.Add( new CustomProperty( productPropertyAlias, product.GetVariantValue( productPropertyAlias, variant ) ) { IsReadOnly = true } );
        }
      }

      return properties;
    }

    public string GetSku( SearchResult product, VariantPublishedContent variant ) {
      return product.GetVariantValue( "sku", variant );
    }

    public long? GetVatGroupId( SearchResult product, VariantPublishedContent variant ) {
      return product.GetVariantValue<long>( Constants.ProductPropertyAliases.VatGroupPropertyAlias, variant );
    }

    public long GetStoreId( SearchResult product, VariantPublishedContent variant ) {
      long? storeId = product.GetValue<long>( "storeId" );

      if ( storeId != null ) {
        return storeId.Value;
      } else {
        throw ( new Exception( "SearchResultProductInformationExtractorT could not find a store id on the searchResult with id " + product.Id ) );
      }
    }

    public OriginalUnitPriceCollection GetOriginalUnitPrices( SearchResult product, VariantPublishedContent variant ) {
      OriginalUnitPriceCollection prices = new OriginalUnitPriceCollection();

      foreach ( Currency currency in CurrencyService.GetAll( GetStoreId( product ) ) ) {
        decimal? price = product.GetVariantValue( currency.PricePropertyAlias, variant ).ParseToDecimal();
        prices.Add( new OriginalUnitPrice( ( price != null ? price.Value : 0M ), currency.Id ) );
      }

      return prices;
    }

    public string GetPropertyValue( SearchResult product, string propertyAlias, VariantPublishedContent variant ) {
      return product.GetVariantValue( propertyAlias, variant );
    }

    #endregion

    #region IProductInformationExtractor<IPublishedContent>

    public long? GetLanguageId( SearchResult product ) {
      return GetLanguageId( product, null );
    }

    public string GetName( SearchResult product ) {
      return GetName( product, null );
    }

    public OriginalUnitPriceCollection GetOriginalUnitPrices( SearchResult product ) {
      return GetOriginalUnitPrices( product, null );
    }

    public CustomPropertyCollection GetProperties( SearchResult product ) {
      return GetProperties( product, null );
    }

    public string GetPropertyValue( SearchResult product, string propertyAlias ) {
      return GetPropertyValue( product, propertyAlias, null );
    }

    public string GetSku( SearchResult product ) {
      return GetSku( product, null );
    }

    public long GetStoreId( SearchResult product ) {
      return GetStoreId( product, null );
    }

    public long? GetVatGroupId( SearchResult product ) {
      return GetVatGroupId( product, null );
    }

    #endregion

    #region IProductInformationExtractor

    public string GetSku( string productIdentifier ) {
      ProductIdentifier productIdentifierObj = new ProductIdentifier( productIdentifier );
      SearchResult searchResult = ProductSearchService.Instance.GetProductSearchResult( productIdentifierObj.NodeId );
      long storeId = GetStoreId( searchResult );
      VariantPublishedContent variant = SearchResultVariantService.Instance.GetVariant( storeId, searchResult, productIdentifierObj.VariantId );
      return GetSku( searchResult, variant );
    }

    public long? GetVatGroupId( string productIdentifier ) {
      ProductIdentifier productIdentifierObj = new ProductIdentifier( productIdentifier );
      SearchResult searchResult = ProductSearchService.Instance.GetProductSearchResult( productIdentifierObj.NodeId );
      long storeId = GetStoreId( searchResult );
      VariantPublishedContent variant = SearchResultVariantService.Instance.GetVariant( storeId, searchResult, productIdentifierObj.VariantId );
      return GetVatGroupId( searchResult, variant );
    }

    public bool HasAccess( long storeId, string productIdentifier ) {
      ProductIdentifier productIdentifierObj = new ProductIdentifier( productIdentifier );
      bool hasAccess = false;

      SearchResult searchResult = ProductSearchService.Instance.GetProductSearchResult( productIdentifierObj.NodeId );
      if ( searchResult != null ) {
        long productStoreId = GetStoreId( searchResult );
        string path = searchResult.GetValue( "path" );
        hasAccess = productStoreId == storeId && library.HasAccess( searchResult.Id, path );
      }

      return hasAccess;
    }

    public long GetStoreId( string productIdentifier ) {
      ProductIdentifier productIdentifierObj = new ProductIdentifier( productIdentifier );
      SearchResult searchResult = ProductSearchService.Instance.GetProductSearchResult( productIdentifierObj.NodeId );
      return GetStoreId( searchResult );
    }

    public OriginalUnitPriceCollection GetOriginalUnitPrices( string productIdentifier ) {
      ProductIdentifier productIdentifierObj = new ProductIdentifier( productIdentifier );
      SearchResult searchResult = ProductSearchService.Instance.GetProductSearchResult( productIdentifierObj.NodeId );
      long storeId = GetStoreId( searchResult );
      VariantPublishedContent variant = SearchResultVariantService.Instance.GetVariant( storeId, searchResult, productIdentifierObj.VariantId );
      return GetOriginalUnitPrices( searchResult, variant );
    }

    public ProductSnapshot GetSnapshot( string productIdentifier ) {
      ProductIdentifier productIdentifierObj = new ProductIdentifier( productIdentifier );
      SearchResult searchResult = ProductSearchService.Instance.GetProductSearchResult( productIdentifierObj.NodeId );
      long storeId = GetStoreId( searchResult );
      VariantPublishedContent variant = SearchResultVariantService.Instance.GetVariant( storeId, searchResult, productIdentifierObj.VariantId );

      ProductSnapshot snapshot = new ProductSnapshot(
        GetStoreId( searchResult ), productIdentifier ) {
        Sku = GetSku( searchResult, variant ),
        Name = GetName( searchResult, variant ),
        VatGroupId = GetVatGroupId( searchResult, variant ),
        LanguageId = GetLanguageId( searchResult ),
        OriginalUnitPrices = GetOriginalUnitPrices( searchResult, variant ),
        Properties = GetProperties( searchResult, variant )
      };

      return snapshot;
    }

    #endregion
  }

}

````

````csharp
using Examine;
using TeaCommerce.Api.Dependency;
using TeaCommerce.Api.Models;
using TeaCommerce.Api.Services;
using TeaCommerce.Umbraco.Configuration.Variants.Models;
using TeaCommerce.Umbraco.Configuration.Variants.Services;
using Umbraco.Core.Logging;
using Website.Extensions.Extensions;

namespace Website.Extensions.Ecommerce.Services {

  [SuppressDependency( "TeaCommerce.Umbraco.Configuration.Variants.Services.IVariantService`2[[Examine.SearchResult, Examine],[TeaCommerce.Umbraco.Configuration.Variants.Models.VariantPublishedContent, TeaCommerce.Umbraco.Configuration]]", "TeaCommerce.Umbraco.Configuration" )]
  public class SearchResultVariantService : AVariantPublishedContentService<SearchResult> {

    public override int GetId( SearchResult content ) {
      return content.Id;
    }

    public override string GetVariantDataFromContent( long storeId, SearchResult content, bool onlyValid ) {
      string variantsJson = "";

      if ( content != null ) {
        Store store = StoreService.Instance.Get( storeId );
        if ( store != null ) {

          variantsJson = content.GetValue( store.ProductSettings.ProductVariantPropertyAlias );

          if ( string.IsNullOrEmpty( variantsJson ) ) {
            LogHelper.Debug<SearchResultVariantService>( "There was no variants in the property \"" + store.ProductSettings.ProductVariantPropertyAlias + "\". Check the " + content.Fields["nodeTypeAlias"] + " doc type and the product variant alias setting on the \"" + store.Name + "\" store." );
          }
        }
      }

      return variantsJson;
    }

    public override string GetVariantProductIdentifier( SearchResult content, VariantPublishedContent variant ) {
      return content.Id + "_" + variant.VariantIdentifier;
    }
  }
}

````

### Customizing Umbraco Information Extractor

The default [product information extractor](#product-information-extractor) in Umbraco use the node structure to manage products. This means you can use any document type as a product and create exactly the node structure you need for your e-commerce setup. Umbraco saves the node information in a XML cache which is used by the default product information extractor, for Umbraco, as the source for product information.

If you want to change the default behavior of the product information extractor in Umbraco you need to implement the IXmlNodeProductInformationExtractor interface. If you which to save some time, then just inherit from the XmlNodeProductInformationExtractor, which is the default provider in Tea Commerce. This product information extractor is used internally in the ProductInformationExtractor which is actually just a mediator in Umbraco. Use the [SuppressDependency](#override-default-providers) class attribute to register your custom product information extractor.

Tea Commerce also has a IDynamicNodeProductInformationExtractor interface which is only used to support a selector function in the TeaCommerce.Umbraco.Web.TC.GetPropertyValue methods. Use the same approch as above to customize this.

#### Example

This example shows how simple it is to customize the default product information extractor for Umbraco. All product prices will be discounted 10% when a customer is logged in. **REMEMBER** - Modifying the result for the original unit prices will affect products being added to a customers cart and in the carts entire life time. Make a custom [order line calculator](#order-line-calculator) if you want dynamic pricing that doesn't change the original unit price of an order line.

````csharp
using System.Xml.XPath;
using TeaCommerce.Api.Dependency;
using TeaCommerce.Api.Models;
using TeaCommerce.Api.Services;
using TeaCommerce.Umbraco.Configuration.InformationExtractors;
using umbraco.cms.businesslogic.member;

namespace TeaCommerce.Tests.InformationExtractors {

  [SuppressDependency( "TeaCommerce.Umbraco.Configuration.InformationExtractors.IPublishedContentProductInformationExtractor", "TeaCommerce.Umbraco.Configuration" )]
  public class CustomPublishedContentProductInformationExtractor : PublishedContentProductInformationExtractor {

    public CustomPublishedContentProductInformationExtractor( IStoreService storeService, ICurrencyService currencyService, IVatGroupService vatGroupService )
      : base( storeService, currencyService, vatGroupService ) {
    }

    public override OriginalUnitPriceCollection GetOriginalUnitPrices( IPublishedContent model, string variantId = null ) {
      OriginalUnitPriceCollection originalUnitPrices = base.GetOriginalUnitPrices( model, variantId );

      //Give 10% discount if a member is logged in
      int currentMemberId = Member.CurrentMemberId();
      if(currentMemberId > 0){
        foreach ( OriginalUnitPrice originalUnitPrice in originalUnitPrices ) {
          originalUnitPrice.Value = originalUnitPrice.Value * 0.9M;
        }
      }

      return originalUnitPrices;
    }

    public override ProductSnapshot GetSnapshot( string productIdentifier ) {

      ProductSnapshot snapshot = new ProductSnapshot( GetStoreId( productIdentifier ), productIdentifier ) {
        Sku = GetSku( productIdentifier ),
        Name = GetName( productIdentifier ),
        VatGroupId = GetVatGroupId( productIdentifier ),
        LanguageId = GetLanguageId( productIdentifier ),
        OriginalUnitPrices = GetOriginalUnitPrices( productIdentifier ),
        Properties = GetProperties( productIdentifier )
      };

      return snapshot;
    }
  }
}
````

## Override Default Providers

When we build Tea Commerce we wanted it to be as flexible as possible. To achieve this we used Autofac as our IoC container. This makes it possible for you as a developer to register a new dependency or to override almost any of the dependencies that Tea Commerce has internally.

### Suppress Dependency

The SuppressDependency class attribute is used to either register a new dependency or override one of the default Tea Commerce providers in the .NET API. Start by adding the class attribute to your class. Then specify the fully qualified name that will be used as the identifier. Lastly specify the name of the assembly where the class/interface of the fully qualified name can be found.

::: tip Note

When overriding a default provider in Tea Commerce you should always use the fully qualified name and assembly of the interface.

:::

See an example below of how to override the default shipping calculator in Tea Commerce. 

### Example

````csharp
using TeaCommerce.Api.Dependency;
using TeaCommerce.Api.Models;
using TeaCommerce.Api.PriceCalculators;
using TeaCommerce.Api.Services;

namespace TeaCommerce.Tests.PriceCalculators {
  [SuppressDependency( "TeaCommerce.Api.PriceCalculators.IShippingCalculator", "TeaCommerce.Api" )]
  public class CustomShippingCalculator : ShippingCalculator {

    public CustomShippingCalculator( IVatGroupService vatGroupService )
      : base( vatGroupService ) {
    }

    protected override Price CalculatePrice( ShippingMethod shippingMethod, Currency currency, long countryId, long? countryRegionId, VatRate vatRate ) {
      return new Price( 100M, vatRate, currency );
    }

  }
}
````

