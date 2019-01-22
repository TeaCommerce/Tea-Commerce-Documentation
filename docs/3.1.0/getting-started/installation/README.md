# Installation

## Package installation

In your Umbraco install, head to the **Developer** section and the select the **Packages** node in the tree. In the search box in the right hand side, search for **Tea Commerce** and select the Tea Commerce package in the results. On the next screen, click **Install Package** to start installing the package.

![Install Tea Commerce](/img/install-package.png)

At the end of the installation you will see an install screen which tells you about the next steps.

## Post installation

When Tea Commerce is installed you need to do the following things.  

1. Add the scripts below to your websites HTML head section   

````html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.min.js"></script>
<script type="text/javascript" src="/App_Plugins/TeaCommerce/Assets/Scripts/tea-commerce.min.js"></script>
<script type="text/javascript">
    var _storeId = @Model.Content.GetPropertyValue("store", true);
</script>
````

2. Create a **Commerce** user group with access to the **Tea Commerce section**, assigning your user to the group by adding them to the **Users** list.

![install-users.png](/img/51d7310-install-users.png)