<div align="center">

<a href="https://www.teacommerce.net" target="_blank"><img src="docs/.vuepress/public/logo.png" alt="Tea Commerce" width="250"/></a>

# Tea Commerce Documentation

This repository contains the raw source files for the documentation of the Umbraco eCommerce platform [Tea Commerce](https://www.teacommerce.net).
The live version of these docs can be found at [https://docs.teacommerce.net](https://docs.teacommerce.net).

</div>

<a href="https://docs.teacommerce.net" target="_blank">
    <img src="screenshot.png?v=2" alt="Screenshot" />
</a>

## Contributing

If you would like to help improve our documentation, contributions via pull request are our prefered method. I guide for which follows:

### Code of Conduct

All contributions / contributors are expected to abide by our [Code of Conduct](https://www.contributor-covenant.org/version/1/1/0/code-of-conduct.html)

### Prerequisites

* **Yarn** - [Yarn](https://yarnpkg.com/en/docs/install) is our prefered package installer so contributors should make sure Yarn has been installed globally

### Getting Setup

1. Fork this repository on GitHub.
2. Clone your forked repository (not our original one) to your hard drive with git clone https://github.com/YOURUSERNAME/tea-commerce-documentation.git
3. Open the `tea-commerce-documentation` directory
4. Open a command window and start a local instance of the site via:

````bash
yarn install
yarn docs:dev
````

5. Launch http://localhost:8080 in a browser to view the site

### Preparing a Pull Request

1. Create a branch in your local repository
2. Make the changes you'd like to submit
3. Commit you changes locally
4. Push your changes to your GitHub repository
5. Submit your changes as a [Pull Request](https://help.github.com/articles/creating-a-pull-request/) to our GitHub repository

**NB** A Pull Request should only contain changes for a single "logical group" of changes. If you have multiple changes to make, you should create branches / Pull Request for each set of changes.

### Writing Documentation

When writing documentation there are a number of principles that should be followed. These principles are documented below.

#### Vuepress

The Tea Commerce documentation site is powered by Vuepress, a vuejs static site generator. You should read up on the basics of [Vuepress](https://v0.vuepress.vuejs.org/) to get an understanding of the available features.

#### Markdown

Documentation files are written using markdown. If you need something more complex than is possible with markdown, you can write bespoke HTML instead, you should aim to write as much as you can in the markdown format.

For details on the various supported markdown tags, checkout the [Vuepress documentation](https://v0.vuepress.vuejs.org/guide/markdown.html).

#### Custom Markdown Tags

As well as the built in markdown tags, there are number of custom markdown tags available.

##### Tabs

Tabs allow you to show content in a tabbed interface. To create tabs you can use the following markdown syntax

````markdown

:::: tabs

::: tab "Tab Name" id="tab-id"

Tab content goes here

:::

::::

````

#### Static Files

If your documentation requires an image or static file to link to, these files should be placed in the `docs/.vuepress/public` folder / sub folder. Anything in this folder will be copied to the site root on compilation. To reference the files in your markdown, you can do so using an absolute path assuming the files have been copied to the root folder. 

For example, if you place a file `myimage.png` into the `docs/.vuepress/public/img` folder, you can reference this image in your markdown using the path `/img/myimage.png`.

#### New Pages

If you need to create a new page, rather than creating a file with the page name, you should instead create a directory with the designer pages name and inside it create a `README.md` file in which to add the page contents.

We do this to ensure all URL's are extentionless.

#### Custom Styles

If you need to create any custom CSS styles, these should be added to the `docs/.vuepress/styles.styl` file. These files are written in `stylus`, however you can write regular CSS inside them if you prefer.

#### Custom Vue Components

As we are using Vupress, you can also create custom Vue components should you need to add some new functionality. Components should be placed in the `docs/.vuepress/components` directory. And files in this directory will be regisered globally and can be used directly in your markdown files.

You should check beforhand before creating any custom components to ensure the new behaviour is desired.

#### Versioning

This repository contains documentation for different versions of Tea Commerce. Versioned docs are located in numbered directories inside the `docs` folder. When making changes, you should ensure you are updating the correct version before you commit your changes. 

If your changes affect multiple versions of Tea Commerce, you should update the files in each version the changes is required in.

Contributors shouldn't need to create new versions of the documentation, but if you do, to create a new version you should duplicate the current version folder, changing it's name to the new version number, and then update the `docs/.vuepress/versions.json` file to update the current, next and previous version numbers accordingly.

## License

This project is licensed under the terms of the [MIT license](LICENSE).