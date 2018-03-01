---
title: Why I use `chruby` instead of RVM or `rbenv`
---

When you're working with multiple Ruby projects, you often end up
needing to run different versions of Ruby. Version managers help
make this easier, and there are three well-known choices for Ruby:
[RVM](https://github.com/rvm/rvm),
[`rbenv`](https://github.com/rbenv/rbenv), and
[`chruby`](https://github.com/postmodern/chruby).

Here's why I use `chruby`.

## `chruby` is simpler and easier to understand

[`chruby`](https://github.com/postmodern/chruby) is essentially a very
small shell script that sets a few environment variables (mostly
`$PATH`) to point at a given install of Ruby. It also has a separate,
optional, script to auto-switch ruby versions when changing
directories. Both of the scripts are short enough and clear enough that
I can read and follow what they’re doing. It doesn’t do anything more
than that, itself; you use
[`ruby-install`](https://github.com/postmodern/ruby-install) (a
completely separate tool) to install versions of Ruby. Or install them
by hand. Or whatever.

[RVM](https://github.com/rvm/rvm) and
[`rbenv`](https://github.com/rbenv/rbenv), on the other hand, do things
like overriding `cd` so that it can switch rubies "magically". They
also install shims of commands like `gem`, `ruby`, and others that
dynamically look up the available Rubies. These sometimes have bugs, or
aren’t entirely transparent. RVM does a bunch of this to enable
features like [Gemsets](https://rvm.io/gemsets), but most of that
functionality has been surpassed by [Bundler](https://bundler.io).
`rbenv` is a bit better, but the shims still require "rehashing"
(updating) whenever you install a new gem that offers executables.

In short: I’ve had weird issues in the past that ended up being down to
RVM or `rbenv` components misbehaving. With `chruby`, there’s nothing
actually there other than a script that tweaks environment variables,
so issues are pretty much nonexistent.

## What you need to do to use `chruby`

Getting started with `chruby` is pretty easy and, because it's designed
to be self-contained and loosely coupled, it's easy to back out if
change your mind. Here's how to install it and set it up with your first
Ruby version:

1. Install [`chruby`](https://github.com/postmodern/chruby) and
   [`ruby-install`](https://github.com/postmodern/ruby-install). This
   doesn’t install a version of Ruby, just `chruby` itself and
   `ruby-install`. I do this with a [Homebrew](https://brew.sh)
   [Brewfile](https://github.com/SteveMarshall/suit/blob/master/Brewfile#L5...L7).
2. Use `ruby-install` to install a version of Ruby, then install
   Bundler for that version of Ruby:
```bash
ruby-install ruby-2.5.0
~/.rubies/ruby-2.5.0/bin/gem install bundler
```
3. Enable `chruby` in your shell ([like
   this](https://github.com/postmodern/chruby#configuration)). This
   means you can run `chruby ruby-2.5.0` or `chruby system` (for
   example) to switch to that version of Ruby, wherever you are. Just
   running `chruby` will list the available versions (not including
   “system”).
4. Set your default Ruby by calling `chruby ruby-2.5.0` in your
   `~/.bash_profile`. Without this, you'll need to manually call
   `chruby` every time you want to use something other than the system
   Ruby.
5. You can also optionally set up `chruby` to auto-switch Ruby versions
   based on the presence of `.ruby-version` files in folders you `cd` to
   by adding it to your `~/.bash_profile`, too ([like
   this](https://github.com/postmodern/chruby#auto-switching)). With
   this enabled, you can also set your default Ruby with a
   `~/.ruby-version` instead of running `chruby` in your shell.

You can see 3 and 5 in [my bash
profile](https://github.com/SteveMarshall/homedir/blob/master/etc/bash/r
c/ruby#L6...L9). I haven't done step 4 because I have a [`.ruby-version`
in my home directory](https://github.com/SteveMarshall/homedir/blob/master/.ruby-version).

## `chruby` is a simple tool that does one thing well

Like all [good Unix tools](https://en.wikipedia.org/wiki/Unix_philosophy),
`chruby` does one thing well and works with other programs to achieve
its goal. It doesn't try to take over, or insert itself between its
user and Ruby, it just helps switch between versions of the language.

I hope this helps you get started with `chruby`. If you want to know
more, [`chruby`'s documentation](https://github.com/postmodern/chruby)
is pretty clear and easy to follow.
