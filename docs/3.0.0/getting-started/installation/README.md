# Installation

## Package installation

Download Tea Commerce at [our.umbraco.org](https://our.umbraco.org/projects/website-utilities/tea-commerce). Then go to the **Developer** section, select **Packages** and click **Install local**.

Click the **Accept terms of use** checkbox, click **Install package** and let the package install. At the end of the installation you will see an install screen which tells you about the next steps.

## Post installation

When Tea Commerce is installed you need to do the following things.  

1. Add the scripts below to your HTML head section   

````html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.min.js"></script>
<script type="text/javascript" src="/App_Plugins/TeaCommerce/Assets/Scripts/tea-commerce.min.js"></script>
<script type="text/javascript">
    var _storeId = @Model.Content.GetPropertyValue("store", true);
</script>
````

2. Give your user access to the Tea Commerce section 


![install-users.png](/img/51d7310-install-users.png)