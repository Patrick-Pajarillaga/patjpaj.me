#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgi, cgitb, time, os, sys, Cookie
cgitb.enable()

form = cgi.FieldStorage()

cookie = Cookie.SimpleCookie()
cookie_string = os.environ.get('HTTP_COOKIE')
cookie.load(cookie_string)
if(cookie['username']):
  name = cookie['username'].value
else:
  name = form.getvalue('username')
  cookie['username'] = name
  print cookie




print "Content-Type: text/html;charset=utf-8"
print
print '<html><head><title>Python Session 1</title> \
</head><body><h1 align="center">Python Session 1</h1> \
<hr>'
print 'Name:', name, '<br>'
print '<a href="/cgi-bin/python-state-demo2.py">Session 2</a>'
print '</body></html>'