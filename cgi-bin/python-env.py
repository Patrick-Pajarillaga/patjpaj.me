#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, os
cgitb.enable()

print "Content-Type: text/html;charset=utf-8"
print
print '<html><head><title>Environment Variables</title></head> \
      <body><h1 align=center>Environment Variables</h1> \
      <hr/>\n'
for param in os.environ.keys():
   print "<b>%20s</b>: %s\n<br>" % (param, os.environ[param])
print '</body></html>'