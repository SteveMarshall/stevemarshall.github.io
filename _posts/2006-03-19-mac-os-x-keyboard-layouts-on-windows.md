---
layout: post
title: Mac OS X Keyboard Layouts on Windows
---
A while back, [Ben][] was trying to replicate [certain keyboard niceties
from the wonderful Mac OS X][Ben typography] in Windows. As a fellow
<del>superhero with an alter ego</del><ins>Mac user by night, Windows
user by day</ins> and utter pedant, I was intrigued, so decided to dig
further into the problem.

[iBook Keyboard]: /images/posts/mac-os-x-keyboard-layouts-on-windows/keyboard.jpg
[Ben]: http://ben-ward.co.uk/
[Ben typography]: http://ben-ward.co.uk/journal/macosx_typography_on_windows/ "Ben Ward's post on Mac OS X Typography in Windows"

## Microsoft Keyboard Layout Creator

The [Microsoft Keyboard Layout Creator][msklc] seems the most obvious
option to start with: it allows re-mapping of all of the standard keys
on a keyboard (all the way across to the return key), along with the use
of any of the Windows modifiers (`Ctrl`, `Shift`, and `AltGr` - which is
the same as pressing `Ctrl` and `Alt` together; apparently `Alt` isn't
considered a "Shift state" by the Keyboard Layout Creator)

It's easy enough to get most of the way to Mac OS X keyboard goodness:
one can assign whatever characters to keys as one sees fit, assign
values for the aforementioned modifiers, and generally make some pretty
cool changes to your keyboard layout. This lets us get most of the way
towards the dream of proper, nice OS X typography on Windows: you can
rearrange the standard keyboard, set up `AltGr` to behave like the
Mac's `Opt` with lots of keys, and generally get most of the real
niceness in OS X done, and using native Windows functionality.

**Warning: the following will almost certainly make the characters
shown on your keyboard not match those they produce in Windows (unless
you use Windows through Virtual PC on Mac OS X, in which case they will
match more). If you have to look at the keys to remember which is
which, using this is not advised. I cannot be held responsible for you
breaking/being unable to use your computer if you use this.**

To save everyone the time and effort, however, I've already made [a
keyboard layout for Windows][macosuk keyboard]. To install the new
layout, simply unzip the file and run the contained MacOSUK.msi. To then
set the layout up for use, go to Control Panel>Regional and Language
Options>Languages, click Details..., then click Add..., and set 'Input
Language' to 'English (United Kingdom)' and 'Keyboard layout/IME' to
'United Kingdom (Mac OS X)'. Click Ok, and then Apply.

With this, the Windows language bar should appear on your task bar. You
can then switch between United Kingdom (Mac OS X) keyboard and whatever
other keyboard layout you so choose. Alternatively, you could remove
other keyboard layouts in the 'Text Service and Input Languages' (the
one where you added the new layout), making the new Mac OS X style
layout your default (and hiding the language bar).

## Accent chords

The one thing that this doesn't cover, though, is the neat little
tricks you can do in Mac OS X to create characters like ñ: hold `Opt`
and press `n` followed by `n` on its own, along with various others of
a similar ilk.

Here is where [AutoHotKey][], that Ben mentioned, comes in: you can
specify character replacement strings which are identified as you type
(think auto-correct for letters). The observant members of the audience
will already be thinking to themselves 'but didn't you just link to a
homebrew keyboard layout to make our Windows keyboards just like those
on the Mac, save a few keys?'

Why yes I did Billy, yes I did.

With a combination of AutoHotKey and our Mac-esque keyboard layout, we
can have almost identical input on Mac and Windows, save the need, on
Windows, to use `AltGr` in lieu of the Mac's `Opt`.

Once again, because I've more time on my hands than is necessarily
healthy, I've already made [an AutoHotKey script for most of the easier
accent chords][ahk chords]. Notably absent are grave chords (due to what
appears to be a bug in AutoHotKey's Unicode handling, I felt compelled
to leave them commented out) and all those chords that create characters
with no extended-ASCII value.

To use it, install and run AutoHotKey, right-click the system tray icon
and select 'Edit This Script'. Copy and paste the contents of my script
into this script (either overwrite or append it), save, and select
'Reload This Script' from the menu of AutoHotKey's system tray icon.

## That's all, folks!

By this point, you should have Mac OS X style text input on your humble
Windows computer. The only thing that's missing now is switching the
modifier keys so that they're all laid out like the Mac but, thus far,
I've not found any program that successfully achieves that. I'll let you
know when I do.

[msklc]: http://www.microsoft.com/globaldev/tools/msklc.mspx
[macosuk keyboard]: http://nascentguruism.com/files/posts/mac-os-x-keyboard-layouts-on-windows/MacOSUK.zip "Mac OS X keyboard layout for Windows"
[AutoHotKey]: http://www.autohotkey.com/
[ahk chords]: http://nascentguruism.com/files/posts/mac-os-x-keyboard-layouts-on-windows/AHKChords.txt "Mac OS X accent chords for AutoHotKey on Windows"
