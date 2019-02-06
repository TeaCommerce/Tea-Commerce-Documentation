# Overview

A core principle of Tea Commerce, much like Umbraco itself, is to do it's core job well but provide a robust API and extention points for developers to extend it's functionality further.

Documented here are all the API end points available in Tea Commerce and the various methods of working with them.

Tea Commerce supports 3 kinds of API's

* [HTML API](#html-api)
* [JavaScript API](#javascript-api)
* [Razor API](#razor-api)

## HTML API

The HTML API is a simplyfied subset of the entire Tea Commerce API with focus on reusability and productivity. The basic elements of the HTML API is HTML forms and form tags. The API is quite simple to use - just specify the method/s to invoke and a set of arguments. First, your HTML form should **always** have its method="post" and its action="/base/TC/FormPost.aspx" when using the Tea Commerce HTML API.

In the example below you see that a method is specified - AddOrUpdateOrderLine - with a list of parameter names (found in the documentation for each method). The argument value for each parameter is by default fetched from a HTML form tag with the same name as the parameter. In this example the parameter named "productIdentifier" has an argument value of 1024.

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="AddOrUpdateOrderLine" value="productIdentifier, quantity" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="productIdentifier" value="1024" type="hidden" />
  <input name="quantity" value="1" type="text" />
  <input value="Add order line" type="submit" />
</form>
````

Using this schema it is possible to invoke multiple methods in one form post. You can also customize the HTML for your needs as the parameters are hardcoded, but the names of the HTML form tags can be what ever you want them to be.

### Multiple methods

In some cases you want to post a form with multiple methods executing. Just specify multiple input HTML tags with the methods you want to execute and their parameters. It is **important** to remember that the methods are executed in the order they are specified. Some methods use the same parameter names - to support this you need to use a more advanced way of specifying the parameters. In the example below you see a HTML form tag with multiple methods with identical parameter names.

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="SetCurrentPaymentCountry" value="countryId : paymentCountryId" type="hidden" />
  <input name="SetCurrentShippingCountry" value="countryId : shippingCountryId" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="paymentCountryId" value="2" type="hidden" />
  <input name="shippingCountryId" value="1" type="text" />
  <input value="Change payment and shipping country" type="submit" />
</form>
````

### Redirection

To enable the customer to be redirected when a HTML form is posted, it is possible to specify a return URL. Just post a form tag with the name **returnUrl** and the url to redirect the customer to as the value.

````html
<form method="post" action="/base/TC/FormPost.aspx">
  <input name="RemoveCurrentOrder" value="" type="hidden" />
  <input name="storeId" value="1" type="hidden" />
  <input name="returnUrl" value="http://www.teacommerce.net/" type="hidden" />
  <input value="Remove order and redirect to Tea Commerce" type="submit" />
</form>
````

### AJAX post

The HTML API covers the basic needs for an e-commerce site but now we need to spice it up a bit. Adding a nice looking user interface with different effects is almost a must for moderne e-commerce sites. To accommodate this we built an extension to the JavaScript API to allow you to AJAX post your HTML forms easily. Now you can use the same HTML markup in collaboration with the JavaScript API's notification system to make nice looking effects or advanced features on the client-side.

Include the following scripts to your HTML head section and add the class **ajaxForm** to the HTML forms you want to post using AJAX.

````html
<html>
  <head>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.min.js"></script>
    <script type="text/javascript" src="/App_Plugins/teacommerce/assets/scripts/tea-commerce.min.js"></script>
  </head>
  <body>
    <form class="ajaxForm" method="post" action="/base/TC/FormPost.aspx">
      <input name="RemoveOrderLine" value="orderLineId" type="hidden" />
      <input name="storeId" value="1" type="hidden" />
      <input name="orderLineId" value="3" type="hidden" />
      <input value="Remove order line" type="submit" />
    </form>
  </body>
</html>
````

## JavaScript API

The Tea Commerce JavaScript API is used to fetch common Tea Commerce data and interact with the customers current session. The API can only manipulate the customers current order. The data that is fetched using the JavaScript API uses the customers current session - this means that e.g the getShippingMethods will only return shipping methods that is allowed in the customers currently selected country.

To work with the JavaScript API you need to include the tea-commerce.min.js file and jQuery in your website. This gives you access to the static library class - TC. This class is a facade for the Tea Commerce JavaScript API. Most methods in the JavaScript API returns json objects containing most information about Tea Commerce object. For security reasons some data will not be outputted to the client.

### Mini cart example

````html
<html>
  <head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script type="text/javascript" src="/App_Plugins/teacommerce/assets/scripts/tea-commerce.min.js"></script>

    <script type="text/javascript">
      var _storeId = 1;

      function updateMiniCart() {
        var order = TC.getCurrentOrder(),
            miniCart = jQuery('#miniCart');
    
        if (miniCart[0]) {
          var totalQuantity = getOrderTotalQuantity(order);
          miniCart.find('#miniCartTotalPrice').text(order.subtotalPrice.withVatFormatted);
          miniCart.find('#miniCartTotalQuantity').text(totalQuantity);
          miniCart.attr('class', 'items' + totalQuantity);
        }
      }

      function getOrderTotalQuantity(order) {
        var totalQuantity = 0;
        for (var i = 0; i < order.orderLines.length; i++) {
          totalQuantity += order.orderLines[i].quantity;
        }
        return totalQuantity;
      }
    </script>
  </head>
</html>
````

## Razor API

The Tea Commerce Razor API is used to fetch common Tea Commerce data and interact with the customers current session. The API can only manipulate the customers current order. The data that is fetched using the Razor API uses the customers current session - this means that e.g the GetShippingMethods will only return shipping methods that is allowed in the customers currently selected country.

To work with the Razor API you need to make a using for TeaCommerce.Umbraco.Web. This gives you access to the static .NET library class - TC. This class is a facade for the Tea Commerce .NET API. Most methods in the Razor API returns business models. Most of the time these objects will be used to display data from Tea Commerce or fetch other information - but if you want to, you can manipulate these returned business models.

### Mini cart example

````csharp
@using TeaCommerce.Umbraco.Web
@using TeaCommerce.Api.Models
  
@{
  //Store id
  long storeId = long.Parse( Model._Store );

  Order order = TC.GetCurrentOrder( storeId, false );
  string totalPrice = order != null ? order.SubtotalPrice.ToString() : "";
  decimal totalQuantity = order != null ? order.OrderLines.Sum( o => o.Quantity ) : 0;
  
  string cssClass = string.Format( "items{0}", totalQuantity );
}
<div id="miniCart" class="@cssClass">
  <h4>Your cart</h4>
  <span>Total price</span> <span id="miniCartTotalPrice">
    @totalPrice
  </span>
</div>
````

<script>
// export default {
//   created() {
//     this.$router.replace('api-types/')
//   }
// } 
</script>