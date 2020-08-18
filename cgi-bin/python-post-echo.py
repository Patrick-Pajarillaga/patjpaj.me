#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, time, os, sys
cgitb.enable()

print "Content-Type: text/html;charset=utf-8"
print
print '<html><head><title>POST Message Body</title> \
</head><body><h1 align="center">POST Message Body</h1> \
<hr>'
print 'Message Body:', sys.stdin.read(), '\n'
print '</body></html>'