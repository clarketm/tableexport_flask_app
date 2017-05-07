# -*- coding: utf-8 -*-
"""Application assets."""
from flask_assets import Bundle, Environment

css = Bundle(
    'libs/bootstrap/dist/css/bootstrap.css',
    'css/style.css',
    filters='cssmin',
    output='public/css/common.css'
)

js = Bundle(
    'libs/jquery/dist/jquery.js',
    'libs/bootstrap/dist/js/bootstrap.js',
    'js/plugins.js',
    filters='jsmin',
    output='public/js/common.js'
)

te_css = Bundle(
    'libs/tableexport.js/dist/css/tableexport.css',
    filters='cssmin',
    output='public/css/te.css'
)

te_js = Bundle(
    'libs/js-xlsx/dist/xlsx.core.min.js',
    'libs/blobjs/Blob.js',
    'libs/file-saverjs/FileSaver.js',
    'libs/tableexport.js/dist/js/tableexport.js',
    filters='jsmin',
    output='public/js/te.js'
)

assets = Environment()

assets.register('css_all', css)
assets.register('js_all', js)
assets.register('te_css', te_css)
assets.register('te_js', te_js)
