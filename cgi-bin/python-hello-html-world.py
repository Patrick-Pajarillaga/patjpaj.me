#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, time, socket
cgitb.enable()
hostname = socket.gethostname()
ip_address = socket.gethostbyname(hostname)

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
print 'User IP is', ip_address
print '</p></body>'
print '</html>'