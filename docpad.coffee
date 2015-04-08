# DocPad Configuration File
# http://docpad.org/docs/config

siteUrl = if process.env.NODE_ENV is not 'static' then "http://localhost:9778" else "http://learnlearn.in"

docpadConfig = {
  templateData:
    site:
      # The default title of our website.
      title: "Learn Learnin'"
      # The production url of our website.
      url: siteUrl
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
        "/main.css"
      ]
      # The JavaScript files for the site.
      scripts: [
        "/main.js"
      ]
    getPreparedTitle: ->
      if @document.title
        "#{@document.title} | #{@site.title}"
      else
        @site.title
    getPreparedDescription: ->
      @document.description or @site.description
    getPreparedKeywords: ->
      @site.keywords.concat(@document.keywords or []).join(', ')
    getAbsoluteUrl: ->
      "#{@site.url}#{@document.url}"

  collections:
    posts: ->
      @getCollection("html").findAllLive({write:true}).on 'add', (model) ->
        model.setMetaDefaults({layout:"default"})
  plugins:
    ghpages:
      deployRemote:"origin"
      deployBranch:"master"
    cleanurls:
      trailingSlashes: true
    marked:
      markedOptions:
        pedantic: false
        gfm: true
        breaks: true
        sanitize: false
        highlight: null
}

# Export the DocPad Configuration
module.exports = docpadConfig
