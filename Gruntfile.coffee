# Grunt Configuration
# http://gruntjs.com/getting-started#an-example-gruntfile

module.exports = (grunt) ->

  # Initiate the Grunt configuration.
  grunt.initConfig

    # Allow use of the package.json data.
    pkg: grunt.file.readJSON("package.json")

    # Use Uglify to minify files.
    uglify:
      fontloader:
        files:
          'src/partials/fontload-min.html': 'src/partials/fontload.html'

  # Build the available Grunt tasks.
  grunt.loadNpmTasks "grunt-contrib-uglify"

  # Register our Grunt tasks.
  grunt.registerTask "default", [
    #"uglify"
  ]
  grunt.registerTask "generateFonts", ->
    fs = require('fs')
    util = require('util')
    woffFile = fs.openSync('src/files/fonts.woff.css', 'w')
    woff2File = fs.openSync('src/files/fonts.woff2.css', 'w')
    files = fs.readdirSync('src/files/fonts')
    files.forEach (file) ->
      return unless /\.woff/.test(file)
      b64 = fs.readFileSync('src/files/fonts/' + file).toString('base64')
      format =  (if file.indexOf('.woff2') >= 0 then "woff2" else "woff")
      fontWeight = (if /Semibold/i.test(file) then 600 else 400)
      fontStyle = (if /It/.test(file) then 'italic' else 'normal')
      fontFamily = file.split('.')[0].split('-')[0].split(/(?=[A-Z])/).join(' ')
      template = '@font-face{font-family:%s;src:url(data:application/x-font-%s;charset=utf-8;base64,%s) format("%s");font-weight:%d;font-style:%s}\n'
      css = util.format(template, fontFamily, format, b64, format, fontWeight, fontStyle)
      fs.write( (if format is 'woff' then woffFile else woff2File), css)
    fs.closeSync(woffFile)
    fs.closeSync(woff2File)
