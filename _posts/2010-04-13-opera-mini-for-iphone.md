---
layout: post
title: Opera Mini for iPhone
---

[Opera Mini for iPhone][] was released this morning, and after some
discussion on Twitter, I thought it might be useful (if only to
[Chris][Chris Mills]) to write up my thoughts. In general, though, I
think <cite>[Aral][Aral Balkan]</cite> [said it best][Aral on Opera Mini]:

> Opera Mini: the Nokia browsing experience, now on iPhone.

[Opera Mini for iPhone]: http://www.opera.com/mobile/
[Aral Balkan]: http://aralbalkan.com/
[Chris Mills]: http://twitter.com/chrisdavidmills
[Aral on Opera Mini]: http://twitter.com/aral/status/12092104843

Essentially, Opera Mini doesn't feel at all like an iPhone app. The
gestures are all wrong to varying degrees, the interface is jarring and
detracts from the pages you're trying to view, and it's not fast enough
(its main selling point) to justify using it over Safari (particularly
given the myriad interface oddities).

## Gestures

### Scrolling

Let's start with the most basic interaction we have on iPhone:
scrolling. Scrolling on iPhone is *fun*. iPhone uses inertial
scrolling; it employs real-world physics to make scrolling feel like
you're interacting with something physical with weight and friction.
People sit and endlessly scroll back and forth through their lists on
iPhone because it's so tactile.

I have to admit, I spent about five minutes simply scrolling around in
Opera Mini. Not because it was *fun*, mind you, but because it felt so
badly wrong. In Opera Mini, scrolling doesn't accelerate or decelerate
in the same way as elsewhere on iPhone, or bounce back when you hit a
boundary.

But then again, sometimes it doesn't do that: sometimes, it slides at a
constant rate until it stops and then jumps in the /opposite/ direction
to your gesture and scrolls a little bit in that direction. Not because
it hit a page edge, though (those stop scrolling dead, mostly): these
reversals tend to happen just when you think you've got the measure of
scrolling in Opera.

Then there are the invisible pseudo-boundaries Opera puts into the page:
if you're within a column in the page you're looking at (the sort that
double-tapping in Safari would fill the screen with; more on that
later), Opera will put a scroll boundary around that so that flinging
the page across hits that boundary and stops or, more likely, scrolls a
little further vertically. I suspect these boundaries are what cause the
aforementioned changes in direction, come to think of it.

### Zooming

![](http://nascentguruism.com/wp-content/uploads/2010/04/zoom-e1271197835389.jpg)So
what about the other most common gesture in Safari? Zooming in Opera is
a little like scrolling: it feels like a first-cut demo that you'd get
if you described how an iPhone does it to someone who had never used
one, then had them build their own.

Opera Mini has two levels of zoom: in, or out. In Safari, if I want to
zoom in just a little, I can zoom to *exactly* the level I want. I have
full control. In Opera, if I'm zoomed out and pinch in either direction,
for any distance, I get zoomed right in. If I'm zoomed in and pinch at
all, I get zoomed out fully.

For a time, I thought that double-tap-to-zoom (in both directions)
didn't work in Opera Mini. As it happens, it does but you have to tap in
*exactly* the same spot for both taps, or Opera considers it a scroll
instead of a zoom. Unlike Safari, double-tap doesn't zoom in on the
content you tapped to fill the screen's width, though: it simply zooms
you all the way in where you double-tapped.

But that's OK because you can single-tap to zoom in. Yes, you read that
right: single-tap when zoomed out zooms you in. Know the site you're
visiting well enough that you know exactly which link you want to click
on as soon as you see it? Well, tough: you have to zoom in and *then*
click the link.

What if I want to focus on a picture that takes up two thirds of the
page? I either have to look at it one bit at a time, fully zoomed in, or
as a thumbnail when zoomed out.

Also: since when is zooming a browsing operation? If I'm zoomed in, why
does pressing 'Back' zoom me out? Why can't I just navigate back to the
page prior to the current page?

### Text selection

Remember the days when iPhone didn't have copy and paste (or text
selection), and how Apple's solution seemed to fit into the OS so
naturally?

Opera doesn't. If you try to select text by pressing and holding when
zoomed out, you get zoomed in (or maybe scrolled). If you try to select
text when zoomed in, a spinning cursors orbits your fingertip for a few
seconds and, sometimes, presents you with a popup menu. Unless you've
lost your internet connection since loading the page, in which case it
doesn't.

![](http://nascentguruism.com/wp-content/uploads/2010/04/select-op-pre.jpg)Typically,
this menu offers simply 'Select Text'. If you press-and-hold on, or
near, an image, the popup menu offers, in addition to text selection,
the option of opening or saving the image, as you'd see in native image
selection popover dialogs.

So you click on 'Select Text', and a serifed bar cursor (rather than
iPhone's native slab bar cursor) is inserted where your finger was. You
then have to click at the beginning of the text you wish to select, and
drag to the end.

Sounds like iPhone text selection, right? Wrong: you get no
insertion-point loupe like you would elsewhere on iPhone, making precise
selection impossible. Made a mistake in your selection? You have to
deselect (by clicking away from the popover offering to copy, search,
etc.) and start again.

## Interface & rendering

Opera Mini really seems to have an inferiority complex.

Whenever you're using it, the interface screams 'you're using Opera!',
detracting from the web pages you're trying to read. For starters: I
know I'm using Opera Mini. I clicked on the app icon on my home screen,
so I really don't need to see Opera's logo for my entire browsing
session. Sure, this is subtle and in the title bar, but it's another
un-iPhone-like touch. Worse, this title/branding bar is fixed and never
leaves the screen , regardless of where you scroll.

The branding, though, pales in comparison to the 'look at me!' colour
scheme. If I'm using a web browser, I'm using it to look at web pages.
This means browser chrome should be kept to a minimum, fade into the
background, and be relatively low-contrast.

It does not mean that you should make the browser chrome black and red
stripes around the web page I'm trying to use. Red and black is
high-contrast and, thus, attracts the eye to it. If I'm using Opera,
this means my eye is drawn away from the sole reason for me using the
app.

This, of course, is ignoring the fact that Opera commits [the ultimate
faux pas][Atebits black status bar for dark apps]: it uses iPhone's
light status bar instead of the black status bar, despite most of the
app's chrome being black. Whilst we're looking at visual faux pas, the
[settings interface][] is awful, using completely custom controls for
everything.

[Atebits black status bar for dark apps]: http://news.atebits.com/post/197574144/once-you-go-black
[settings interface]: http://my.opera.com/chooseopera/blog/2010/04/13/opera-mini-5-settings

All that said, there is one piece of Opera Mini's interface that *is*
quite nice: the tabs. Where Safari shuffles you off to a full-screen tab
switcher, Opera Mini slides a pane up from the bottom of the screen with
small snapshots of your tabs stacked on top of one another, with the
active tab frontmost. It's not worlds ahead of Safari's implementation,
granted, but it's a nice differentiator.

## Speed, privacy, and JavaScript

I mentioned at the outset that Opera Mini isn't fast enough to justify
using it over Safari. That's not to say it's not faster than Safari in
terms of raw page rendering speed. The problem is that the difference in
speed isn't significant enough to justify using it over Safari,
particularly when you take into account the cognitive dissonance
required to use it on iPhone. Sure, the page renders a second or two
faster but, if it takes you an extra half-second to second-guess
everything you do, what's the point?

This speed-boost is achieved by Opera's servers downloading, rendering,
and compressing the requested page into one bundle, then passing that
back to the user's browser. On older phones this was a boon because they
were underpowered enough that rendering HTML and CSS was a significant
overhead. On iPhone, sufficient processing power makes performance
increase from offloaded rendering moot, but the
connection-and-compression optimisation can still be a significant
benefit over slow EDGE and GPRS connections.

On top of that, there's the matter of privacy: with all the data going
through Opera's servers, you have to trust Opera. If you're just
checking the news or weather, that's no big deal. The idea of checking
email, or doing mobile online banking, through Opera Mini and, thus,
Opera's cache servers (even if nothing *is* cached) concerns me.

And then there's JavaScript. Opera Mini doesn't support JavaScript.
Except where it does, which tend to be the most inconvenient places.
[Yahoo! Finance News][Finance], for example, sports a number of
progressively enhanced personalisation features. If you visit the page
in Opera Mini, it executes the first-run JavaScript but disables any
further JavaScript-enhanced interactions.

It seems that Opera Mini runs JavaScript on the server such that pages
are progressively enhanced, then delivers the rendered page to the
client. For any progressively enhanced pages that hide the
non-JavaScript interactions when they're not needed (read: most of
them), this will mean that Opera Mini users get a broken experience.

On the plus side, at least the JavaScript experience matches with the
rest of the Opera Mini for iPhone experience.

[Finance]: http://finance.yahoo.com/news
