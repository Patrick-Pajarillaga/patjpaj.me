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
print 'Request Method:', os.environ['REQUEST_METHOD'], '\n'
print 'Server Protocol', os.environ['SERVER_PROTOCOL'], '\n'
print 'Message Body:', sys.stdin.read(), '\n'
print '</body></html>'