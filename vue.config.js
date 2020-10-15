module.exports = {
  pluginOptions: {
    sitemap: {
      urls: [
        'https://wickedtruckrentals.com/',
        'https://wickedtruckrentals.com/contact',
        'https://wickedtruckrentals.com/about'
      ]
    }
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Brisbanes Cheapest Truck Rental - No Truck Licence Required'
    }
  }
}
