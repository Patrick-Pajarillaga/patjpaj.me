#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, time, os, sys, Cookie
cgitb.enable()

form = cgi.FieldStorage()

cookie = Cookie.SimpleCookie()
name = form.getvalue('username')
cookie['username'] = name

print "Content-Type: text/html;charset=utf-8"
print
print '<html><head><title>Python Session</title> \
</head><body><h1 align="center">Python Session</h1> \
<hr>'
print 'Name:', name
print '</body></html>'