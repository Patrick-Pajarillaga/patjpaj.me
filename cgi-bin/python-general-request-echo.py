#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, time, os, sys
cgitb.enable()

print "Content-Type: text/html;charset=utf-8"
print
print '<html><head><title>General Request Echo</title> \
</head><body><h1 align="center">General Request Echo</h1> \
<hr>'
print '<p>Request Method:', os.environ['REQUEST_METHOD'], '</p><br>'
print '<p>Server Protocol', os.environ['SERVER_PROTOCOL'], '</p><br>'
print '<p>Message Body:', sys.stdin.read(), '</p><br>'
print '</body></html>'