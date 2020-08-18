#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, time
cgitb.enable()

print "Content-Type: text/html;charset=utf-8"
print
print '<html>'
print '<head>'
print '<h1>'
print "Hello World!"
print '</h1>'
print '</head>'
print '<body>'
print 'Server time is', time.asctime(time.localtime())
print '</body>'
print '</html>'