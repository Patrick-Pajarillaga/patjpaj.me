#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, time, os, json, sys
cgitb.enable()

j = {'message':'Team PJP - Hello World!', 'date':time.asctime(time.localtime()), 'currentIP':os.environ['REMOTE_ADDR']}

myjson = json.load(sys.stdin)

print "Content-Type: application/json"
print
print json.dumps(j)