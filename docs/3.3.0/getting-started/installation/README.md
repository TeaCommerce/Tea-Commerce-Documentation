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

## Upgrading

### Backup

Before upgrading it's always advisable to take a complete backup of your site / database, but at a bare minium you should make sure to backup your `Partials\MacroScripts` folder just in case you made any changes to the default email templates / edit order view. If you duplicated these files and made your own versions before editing them then everything should upgrade without a problem, but it's always better to be safe and take a backup.

### Upgrade

Once you are backed up, upgrading should be a case of reinstalling the Tea Commerce package over the top. Tea Commerce has an inbuilt migrations system which will detect what version you are currently on and will perform the relevant migration steps to get you to the latest version.

Once installed, if you did make any changes to the default templates you can either re-apply them now, or even better, copy the files back with a new name and update your stores configuration to use these files instead of the defaults (for the edit order view this is via the **Store -> UI Tab -> Editor order UI file** and for the email templates this is via the emails template definitions **Template file** field).