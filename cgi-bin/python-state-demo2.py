#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgi, cgitb, time, os, sys, Cookie
cgitb.enable()

form = cgi.FieldStorage()

cookie = Cookie.SimpleCookie()
name = cookie['username']

print "Content-Type: text/html;charset=utf-8"
print
print '<html><head><title>Python Session 2</title> \
</head><body><h1 align="center">Python Session</h1> \
<hr>'
print 'Name:', name, '<br>'
print '<a href="./python-state-demo1.py">Session 1</a>'
print '</body></html>'