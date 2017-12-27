---
title: Automating Let’s Encrypt certificate renewal on non-standard servers
---

I run [an IRC bouncer](https://en.wikipedia.org/wiki/BNC_(software)#IRC)
to allow me to maintain a single, consistent presence on IRC. I wanted
to ensure that all my connections to it were encrypted.

Encrypting connections to your servers used to require complicated
configuration and buying expensive SSL certificates. Thanks to [Let’s
Encrypt](https://letsencrypt.org//), encrypting web traffic is much
easier, and entirely free!

Unfortunately, my IRC bouncer ([ZNC](http://znc.in/)) isn’t one of the
servers that `certbot` (Let’s Encrypt’s official client) [supports out
of the
box](https://certbot.eff.org/docs/using.html#getting-certificates-and-choosing-plugins)
or for which there are [third-party
plugins](https://certbot.eff.org/docs/using.html#third-party-plugins),
so I had to do some work to automate getting, installing, and updating
the certificates. Since it involved some effort, I thought it was worth
writing it up here.

## How `certbot` works with non-standard servers

For a server using the ports `certbot` needs for renewal (80 or 443)
and without a way to serve extra files, you have to stop the server,
[run `certbot` in “standalone”
mode](https://certbot.eff.org/docs/using.html#standalone) (where it
runs its own web server for the certificate issuing process), put the
certificate somewhere your server can find it, and restart the server
process. And you have to do this every 60-90 days, because [that’s how
long Let’s Encrypt certificates are valid
for](https://letsencrypt.org/2015/11/09/why-90-days.html).

The actual auto-renewal itself is [pretty clearly
documented](https://certbot.eff.org/docs/using.html#renewing-certificates):
configure `cron` (or some other tool for scheduled tasks) to run
`certbot renew` every night, and it’ll auto-renew any certificates due
to expire in less than 30 days.

## Automating certificate renewal

The trick is that `certbot` allows us to configure, in the [renewal configuration
file](https://certbot.eff.org/docs/using.html#modifying-the-renewal-conf
iguration-file), pre-renewal, post-renewal, and certificate-deployment
scripts for each domain we’re managing certificates for.

In my case, [the pre-renewal
script](https://github.com/SteveMarshall/znc-config/blob/master/certbot-hooks/pre)
stops the IRC bouncer and [the post-renewal
script](https://github.com/SteveMarshall/znc-config/blob/master/certbot-hooks/post)
starts it again.

[The deploy
script](https://github.com/SteveMarshall/znc-config/blob/master/certbot-hooks/deploy.tpl)
has a slightly more complex job: it makes sure the renewed domain is
the one it expects, and merges the various parts of the certificate
into a single file in the format that my IRC bouncer expects.

## Automating SSL certificate renewal with `certbot` is easy

I’m really pleased that I managed to encrypt my ZNC server’s traffic
(for free!), and don’t have to worry about updating certificates by
hand. Being able to add encryption so easily means that even services
with minuscule user bases can benefit from the increased privacy it
brings.

All [the code for my ZNC
setup](https://github.com/stevemarshall/znc-config) is open and MIT
licensed, so feel free to reuse it. If you have questions or
suggestions, open an issue or pull request on GitHub, or let me know on
Twitter.
