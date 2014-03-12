---
layout: post
title: Perfection
---
> Perfection is achieved, not when there is nothing more to add, but
> when there is nothing left to take away.
> 
> <footer>—<cite>Antoine de Saint Exupéry, 'Terre des Hommes' (1939)</cite></footer>

This sentiment is just as true for markup, style, and behaviour on the
web. The trick, though, is to find the optimal balance between the four.

##Markup

When building a page, one should assume nothing: mark it up in the most
minimal, sparse way possible whilst still maintaining a logical
structure.

No `class`es. No `id`s. No `div`s or `span`s. Just pure, semantically
rich HTML elements.

Next, divide the page into major logical divisions using `div`s with apt
`id`s. Use `class`es to identify patterns used throughout the page (cf.
[Microformats][]). At this stage, one should be adding semantic context
as minimally as possible.

Further, this context should be added at the highest level in the DOM
that is appropriate, and no higher. For example, an ordered list of blog
posts should not feature a class of `post` on each list item; rather,
the list itself should have the class `posts`.

Remove redundancy in all aspects of the markup. Consider different
choices of elements, even if they seem unfit for purpose.

If, at the end of this process, it seems like the document should be
easy to style accordingly then there are probably too many styling
hooks, in the form of non-semantic `class`es, `id`s and elements, in
place already. Go back and think about everything once more. Make every
element and attribute justify its existence.

By this point all functionality of the page, be it part of an
application or straight prose, should be exposed and fully usable.

**All of it**.

If there's a single piece of functionality that you feel you can't
provide in raw HTML, you're doing it wrong.

This doesn't mean the interaction has to be as rich as it might be, but
it should be usable.

##Style

As with the markup, styling should be approached by using the most
simple approaches possible to achieve the desired look.

The styling shouldn't obfuscate any functionality: everything should
still work as intended.

Avoid adding extra markup at all costs. If it seems that extra markup is
necessary to aid styling, consider that the approach being used to
acheive the style is the wrong one.

##Behaviour

Finally, enhance the behaviour as necessary. As with styling, consider
that the desire to add to the DOM (either before or during the life of a
script) could be a sign that the solution is not the optimal one.
Similarly, if styles must be added _before_ any interaction occurs,
separate them using some class high in the DOM tree.

If anything must be added, be they elements, `id`s, `class`es, or
styles, add them at the latest possible instant and promptly remove them
when unneeded. When applying behaviour use, as far as possible, already
extant semantics for context.

Further, if the behaviour relies on styling to justify its existence, it
may need rethinking.

Throughout all three, one should attempt to focus on the smallest area
possible at a time. Break the document into its requisite parts,
developing these in isolation from one another and the framework to bind
them together.

Above all: if you're not finding it hard, and agonising over it, you're
probably not doing it right.

[Microformats]: http://microformats.org/
