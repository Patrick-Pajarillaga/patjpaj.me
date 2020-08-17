#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, time
cgitb.enable()

print "Content-Type: text/html;charset=utf-8"
print

print '<html>'
print '<head>'
print "Hello World!"
print '</head>'
print '<body>'
print 'Server time is', time.asctime(time.localtime())
print '</body>'
print '</html>'