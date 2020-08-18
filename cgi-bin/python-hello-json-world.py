#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging
import cgitb, time, os, json, sys
cgitb.enable(display=0, logdir='./')

#j = {'message':'Team PJP - Hello World!', 'date':time.asctime(time.localtime()), 'currentIP':'YUH'}

#myjson = json.load(sys.stdin)

print "Content-Type: application/json;charset=utf-8"
print
#print json.dumps(j)