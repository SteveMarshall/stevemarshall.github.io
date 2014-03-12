---
layout: post
title: Search, and ye shall fail
---
There's an accepted solution for channelled searching: offer a textbox
input and a submit button, supported by a series of links to each
channel of the search. The links will typically have JavaScript layered
onto them (in theory, at least) to rewrite the form's target, so that
the user may refine their search before submitting it. This behaviour
can be seen on [Yahoo! US][Y!US], [Yahoo! UK and Ireland][Y!UK],
[MSN][MSN], and yes, even [Google][].

It *must* be the best solution, mustn't it, if all these sites use
similar techniques?

## The objective of my affection

If we step back for a moment, to examine the user's needs, we can see
two objectives for the average searcher: **find something** and
[<ins>perhaps</ins>] make it *of this type*.

The 'something' for which the user is searching is, in their mind, the
foremost concern. *Everything else* is secondary. When searching, a
user's first instinct will almost always be to enter their search terms
(and why should it be otherwise?). Everything about a search interface
is geared toward this: the keyword input has the most visual weight on
the screen -- on a typical search index page -- and the most prominent
position -- either near dead-centre or in the head of the page,
depending on the type of page.

The accepted solution, happily, cedes to this under all circumstances.

The second objective, then, is the type of results that will satisfy the
search. The introduction of this second objective is where user
behaviour will begin to deviate: depending on their priorities and
personal inclinations, users' execution of this may take place before,
after, or even *during* the steps to meet the primary objective. Unlike
the emphasis placed on the keyword input, the type of results to return
should be -- and, typically, are -- de-emphasised where possible, but be
present -- and have their presence known -- should the user require them
(either to confirm their beliefs or to make a change).

## Humbled

But the accepted solution only pays lip-service to this more complex
interaction: for any user without JavaScript, the only acknowledged
paths for them to change the channel in which they are searching is to
select it before they begin their search or, assuming that the search
engine alters the links based on the latest query, directly after (and
before they attempt to manipulate their search further).

By using JavaScript to bludgeon links into selecting from a choice of
mutually exclusive channels, the user experience of what *should* be a
simple search form is broken for many users when they attempt to
interact with it in a way that seems natural to them. To compound this
issue further, the use of links means that screen reader users may
*never* be able to use this functionality, as links within the form will
never be announced when they are entering their search terms.

The problem is that whomever has implemented these solutions (or their
forebears) had the mindset of 'HTML is static, JavaScript is dynamic' --
or simply didn't care enough to question the accepted norm -- and so
overlooked what was staring them right in the face: HTML already has a
perfectly good input device for selecting one and only one item from a
collection:

The humble radio-button.

Given a little semantic markup and CSS (with a smattering of JavaScript
to add extra styling hooks), it's entirely possible to style a group of
radio-buttons in a more visually apt way to indicate that it is
filtering the search input, whilst offering a far more interactive
experience to *all* users of the site, not just those with JavaScript.

So I did.

That's what you can see in action on the new [Yahoo! UK and Ireland
TV][Y!TV UK] (along with [France][Y!TV FR], [Germany][Y!TV DE],
[Italy][Y!TV IT], and [Spain][Y!TV ES]).

## Implementation notes

As noted above, the main components of the form are a list of
radio-buttons, a textbox, and a submit button. Of particular note is the
way the radio-buttons are scripted and styled, and the structure of the
radio-button labels relative to the form's `<legend>`. Further,
implementing the search this way requires that the server-side script be
able to handle the new field being passed its way appropriately.

### Scripted style

For all users, the core functionality of the radio-buttons is available,
with these styled as an inline list for users with CSS enabled. The
JavaScript, when enabled, will simply add a class to the root of the
list, along with an extra `<span>` to allow styling of the labels in
accordance with the design. When the radio-buttons receive focus the
'selected' class is moved to the new selection. This activity takes
place on focus, mark you, and not click: click events fire on the
*originating* control which, when navigating with the keyboard, will
mean the *previously selected* radio-button.

### A `<legend>` in its own life-time

It was brought to my attention that a form's `<legend>` will, by
default, be announced before each and every form field by screen
readers. To make this as unobtrusive as possible, each radio-button's
`<label>` is worded such that it makes the most possible sense when
preceded by the legend text. In English, for example, the radio-buttons
will be announced as 'Search… the web', 'Search… for images', and so
forth (where 'Search' is the form's `<legend>`).

The radio-buttons' full text, though, would not make sense in a visual
context: they should be presented as tabs titled 'Web', 'Images', and so
on. To achieve this, the visually inappropriate portions of the
`<label>` are wrapped in `<span>`s and positioned outside the browser's
viewport -- along with the form's legend and the radio-buttons
themselves -- such that they may still be accessed by screen readers and
the like.

Furthermore, because the radio-buttons are still present in the content
of the page, keyboard users may navigate the form fully through the
keyboard (using arrow keys to move between items radio-buttons in a
collection).

<ins>Once again, this can all be seen in action on the new [Yahoo! UK
and Ireland TV][Y!TV UK] (along with [France][Y!TV FR], [Germany][Y!TV
DE], [Italy][Y!TV IT], and [Spain][Y!TV ES]). [Links added at Mike's
suggestion]</ins>

## Thanks

I can by no means take full responsibility for the successful
implementation of this concept, though: I'd particularly like to thank
[Norm!][], [Mike Davies][], [Alex Lee][] (our designer), [Tim
Huegdon][], and [Ann McMeekin][] (of the [RNIB][RNIB]) for all their
help, advice, and patience (particularly when I got things working and
made lots of excited noises at them), and this wouldn't have ever been a
reality on Yahoo! TV for Europe if it hadn't been for the receptive,
responsive attitude of the engineers working on Yahoo! Search for
Europe.

[Y!US]:   http://yahoo.com/
[Y!UK]:   http://uk.yahoo.com/
[MSN]:    http://msn.com/
[Google]: http://google.com/

[Y!TV UK]:http://uk.tv.yahoo.com/
[Y!TV FR]:http://fr.tv.yahoo.com/ "Yahoo! France Télé"
[Y!TV DE]:http://de.tv.yahoo.com/ "Yahoo! Deutschland TV"
[Y!TV IT]:http://it.tv.yahoo.com/ "YahoO! Italia TV"
[Y!TV ES]:http://es.tv.yahoo.com/ "Yahoo! España TV"

[Norm!]:       http://cackhanded.net/ "Mark Norman Francis's Cackhanded.net"
[Mike Davies]: http://www.isolani.co.uk/ "Mike Davies's isolani"
[Alex Lee]:    http://www.csensedesign.co.uk/ "Alex Lee: in the arms of strangers"
[Tim Huegdon]: http://nefariousdesigns.co.uk/ "Tim Huegdon's Nefarious Designs"
[Ann McMeekin]:http://www.pixeldiva.co.uk/ "Ann McMeekin: pixeldiva"
[RNIB]:        http://www.rnib.org.uk/

*[RNIB]: Royal National Institute of the Blind
