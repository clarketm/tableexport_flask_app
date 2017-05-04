# -*- coding: utf-8 -*-
"""Application assets."""
from flask_assets import Bundle, Environment

css = Bundle(
    'libs/bootstrap/css/bootstrap.css',
    'css/style.css',
    filters='cssmin',
    output='public/css/common.css'
)

js = Bundle(
    'libs/jquery/jquery.js',
    'libs/bootstrap/js/bootstrap.js',
    'js/plugins.js',
    filters='jsmin',
    output='public/js/common.js'
)

te_css = Bundle(
    'libs/tableexport.js/css/tableexport.css',
    filters='cssmin',
    output='public/css/te.css'
)

te_js = Bundle(
    'libs/js-xlsx/xlsx.core.min.js',
    'libs/blobjs/Blob.js',
    'libs/file-saverjs/FileSaver.js',
    'libs/tableexport.js/js/tableexport.js',
    filters='jsmin',
    output='public/js/te.js'
)

assets = Environment()

assets.register('css_all', css)
assets.register('js_all', js)
assets.register('te_css', te_css)
assets.register('te_js', te_js)
