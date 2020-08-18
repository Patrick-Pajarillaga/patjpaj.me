#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, time, os
cgitb.enable()

print "Content-Type: text/html;charset=utf-8"
print
print '<!DOCTYPE html><html><head><title>GET Request Echo</title> \
</head><body><h1 align="center">Get Request Echo</h1> \
<hr>'
print '<b>Query String:</b>' os.environ['QUERY_STRING']
print '</body></html>'