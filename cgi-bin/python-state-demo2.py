#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgi, cgitb, time, os, sys, Cookie
cgitb.enable()

cookie_string = os.environ.get('HTTP_COOKIE')
cookie.load(cookie_string)

print "Content-Type: text/html;charset=utf-8"
print
print '<html><head><title>Python Session 2</title> \
</head><body><h1 align="center">Python Session</h1> \
<hr>'
print 'Name:', cookie['username'].value, '<br>'
print '<a href="/cgi-bin/python-state-demo1.py">Session 1</a>'
print '</body></html>'