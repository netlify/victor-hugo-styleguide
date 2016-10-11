# Victor Hugo Based Styleguide

This is a boilerplate for using Victor Hugo as the foundation for a living styleguide that can then be imported via npm.

It's setup to use post-css and babel for CSS and JavaScript.

This project is released under the [MIT license](LICENSE). Please make sure you understand its implications and guarantees.

## Usage

Be sure that you have the latest node and npm installed

Next, clone this repository and run:

```bash
npm install
npm start
```

Then visit http://localhost:3000/ - BrowserSync will automatically reload CSS or
refresh the page when stylesheets or content changes.

To build your static output to the `/dist` folder, use:

```bash
npm run build
```

## Working on the styleguide

Each page in the styleguide is a markdown document in the folder `site/content/styleguide`.

Within the styleguide you can use the `{{< example >}}` shortcode to show your HTML snippets.

Header tags will automatically be used to build a table of contents for the page in the sidebar.

To work on the actual CSS edit `src/css/main.css` and any files imported there.

## Deploying to netlify

- Push your clone to your own GitHub repository.
- [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now netlify will build and deploy your site whenever you push to git.

## Enjoy!!
