# DocPad Configuration File
# http://docpad.org/docs/config

docpadConfig = {
  templateData:
    site:
      # The default title of our website.
      title: "Learn Learnin'"

      # The production url of our website.
      url: "http://learnlearn.in"

      # The website description (for SEO).
      description: """
        Learning how to learn is more important than learning itself.
        """

      # The website keywords (for SEO) separated by commas.
      keywords: """
        learn, learning
        """

      # The cascading stylesheets for the site.
      styles: [
       # "main.css"
      ]

      # The JavaScript files for the site.
      scripts: [
       # "main.js"
      ]

  collections:
    posts: -> @getCollection("html").findAllLive().on "add", (model) -> model.setMetaDefaults({layout: "default"})
  plugins:
    ghpages:
      deployRemote:"origin"
      deployBranch:"master"
    lunr:
      indexes:
        myIndex:
          collection: "posts"
    cleanurls:
      trailingSlashes: true

}

# Export the DocPad Configuration
module.exports = docpadConfig
