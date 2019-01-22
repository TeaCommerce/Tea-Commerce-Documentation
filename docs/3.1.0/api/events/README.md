# Events

## Bind

Attaches a handler to a Tea Commerce event.

### Event types

There are two kind of event types that your script can be notified about - "before" and "after" events. To specify the eventType you concatenate the keyword "before" or "after" and then the name of the method to be notified about - e.g afterSetCurrentCurrency.

### Before

The notification for before events is invoked everytime a JavaScript API method is executed asynchronously or for each method specified in a [ajaxForm](#section-ajax-post) that is posted. Besides the more specific events being invoked, the universal "beforeCartUpdated" is also invoked, but just ones.

### After

For each method returned in the method called object will result in an after event being invoked. The universal "afterCartUpdated" event is invoked everytime a method called object is returned from a JavaScript Api method.

### Error

The universal "cartUpdateError" event is invoked if an error happens during any of the JavaScript API method calls.

### Arguments

<table>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>event</td>
		<td>string</td>
		<td>Name of the event.</td>
	</tr>
	<tr>
		<td>handler([model,] data[, jQForm])</td>
		<td>function()</td>
		<td>A function to execute each time the event is triggered.</td>
	</tr>
</table>

### Example

````javascript
TC.bind('afterCartUpdated', function (data, jQForm) {
  if(data.order){
      alert('Total price: ' + data.order.subtotalPrice.withVatFormatted);
  }
});

TC.bind('beforeSetCurrentCurrency', function (data, jQForm) {
  alert('Changing currency');
});

TC.bind('afterAddOrUpdateOrderLine', function (model, data, jQForm) {
  alert('New order line quantity: ' + model.quantity);
});
````

## NotificationCenter

The notification center is the heart of the Tea Commerce event model. This is where your code can be notified when different events happens in the Tea Commerce system. The way to subscribe to the notification center using Umbraco, depends on which version you use. Read about the [Application event registration](http://our.umbraco.org/documentation/Reference/Events/application-startup) to learn how.

````csharp
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using TeaCommerce.Api.Models;
using TeaCommerce.Api.Notifications;
using Umbraco.Core;

namespace TeaCommerce.Tests.Notifications {
  public class ApplicationStartup : ApplicationEventHandler {

    public ApplicationStartup() {
      NotificationCenter.Order.OrderPropertiesUpdated += Order_OrderPropertiesUpdated;
      NotificationCenter.EmailTemplate.MailSending += EmailTemplate_MailSending;
    }

    void Order_OrderPropertiesUpdated( Order order, OrderPropertiesUpdatedEventArgs e ) {
      CustomProperty couponCode = e.Properties.SingleOrDefault( p => p.Alias == "couponCode" );

      if ( couponCode != null /* && couponCode is valid */ ) {
        order.Properties.AddOrUpdate( new CustomProperty( "discount", "0.1" ) { ServerSideOnly = true } );
        order.Save();
      }
    }

    void EmailTemplate_MailSending( EmailTemplate emailTemplate, MailSendingEventArgs e ) {
      if ( emailTemplate.Alias == "confirmationEmail" ) {
        e.MailMessage.Bcc.Add( "info@teacommerce.net" );
      }
    }

  }
}
````

### Most used events

### Order

#### Order specific

* NotificationCenter.Order.Finalized
* NotificationCenter.Order.Creating/Created
* NotificationCenter.Order.Updating/Updated
* NotificationCenter.Order.Deleting/Deleted

#### Order lines

* NotificationCenter.Order.OrderLinesAdding/Added
* NotificationCenter.Order.OrderLinesUpdating/Updated
* NotificationCenter.Order.OrderLinesRemoving/Removed

#### Order properties

* NotificationCenter.Order.OrderPropertiesAdding/Added
* NotificationCenter.Order.OrderPropertiesUpdating/Updated
* NotificationCenter.Order.OrderPropertiesRemoving/Removed

#### Payment information

* NotificationCenter.Order.PaymentCountryChanging/Changed
* NotificationCenter.Order.PaymentCountryRegionChanging/Changed
* NotificationCenter.Order.PaymentMethodChanging/Changed

#### Shipping information

* NotificationCenter.Order.ShippingCountryChanging/Changed
* NotificationCenter.Order.ShippingCountryRegionChanging/Changed
* NotificationCenter.Order.ShippingMethodChanging/Changed

#### Transaction information

* NotificationCenter.Order.PaymentStateChanging/Changed

#### Discount codes

* NotificationCenter.Order.DiscountCodesAdding/Added
* NotificationCenter.Order.DiscountCodesRemoving/Removed

#### Gift cards

* NotificationCenter.Order.GiftCardsAdding/Added
* NotificationCenter.Order.GiftCardsRemoving/Removed

#### Currency

* NotificationCenter.Order.CurrencyChanging/Changed

#### Order status

* NotificationCenter.Order.OrderStatusChanging/Changed

#### Vat group

* NotificationCenter.Order.VatGroupChanging/Changed

#### Language

* NotificationCenter.Order.LanguageChanging/Changed

#### Customer

* NotificationCenter.Order.CustomerChanging/Changed

### Email template

* NotificationCenter.EmailTemplate.MailSending
* NotificationCenter.EmailTemplate.MailSend
* NotificationCenter.EmailTemplate.ErrorSendingMail
