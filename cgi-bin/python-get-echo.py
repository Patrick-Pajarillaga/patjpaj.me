#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
from urlparse import urlparse
import cgitb, time, os
cgitb.enable()

st = urlparse.parse_qs(os.environ['QUERY_STRING'])

print "Content-Type: text/html;charset=utf-8"
print
print '<html><head><title>GET Request Echo</title> \
</head><body><h1 align="center">Get Request Echo</h1> \
<hr>'
print '<b>Query String:</b>', os.environ['QUERY_STRING']
if(len(os.environ['QUERY_STRING']) == 0):
  st = urlparse.parse_qs(os.environ['QUERY_STRING'])
  for key, value in st.items():
    print key, ':', value

print '</body></html>'