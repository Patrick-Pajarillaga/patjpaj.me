#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, time, os
cgitb.enable()

print "Content-Type: text/html;charset=utf-8"
print
print '<html>'
print '<head>'
print '<h1 align="center">'
print "Hello World!"
print '</h1>'
print '</head>'
print '<body><p>'
print 'Server time is', time.asctime(time.localtime())
print '</p><p>'
print 'User IP is', os.environ['REMOTE_ADDR']
print '</p></body>'
print '</html>'