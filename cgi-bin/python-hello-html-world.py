#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, socket
cgitb.enable()
hostname = socket.gethostname()    
IPAddr = socket.gethostbyname(hostname) 

print "Content-Type: text/plain;charset=utf-8"
print

print "Hello World!"
print '<html><body>'
print 'Server time is', time.asctime(time.localtime())
print 'Host IP is', IPAddr
print '</body></html>'