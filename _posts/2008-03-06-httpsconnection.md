---
layout: post
title: HTTPSConnection
---
So apparently I now write Python.

In a flustered, last-minute, push to get the [Fire Eagle Python API binding][Fire Eagle Python binding] ready to ship, I had to switch it to use HTTPS (and point to `fireeagle.yahooapis.com`, natch).

Given that I'm relatively new to Python, it took a moment to realise I had simply to switch from `httplib.HTTPConnection` to `httplib.HTTPSConnection`. This would have all been fine, save one issue: apparently, the otherwise wonderful [MacPorts][] doesn't appear to link [OpenSSL][OpenSSL] in Python by default (which, naturally, is a requirement for HTTPS).

Without OpenSSL linked, trying to use `HTTPSConnection` (or, one would imagine, any SSL-related task) results in an error akin to `AttributeError: 'module' object has no attribute 'ssl'`.

To rectify this is, actually, very simple: run <kbd>sudo port install py25-socket-ssl</kbd> in the Terminal (assuming you're using Python 2.5: other versions of Python will require different ports).


[Fire Eagle Python binding]: http://fireeagle.com/developer/
[MacPorts]:                  http://macports.org/
[OpenSSL]:                   http://www.openssl.org/
