---
layout: post
title: "XAML: An insider's look out"
---
[Zach][zach home] recently [posted his thoughts][zach xaml post] on 
Microsoft's XAML. As my main development environment is Microsoft's .Net Framework, I've had a chance to have a more in-depth look at what XAML is and does, and feel that I should clear some points up.

**Disclaimer**: I have no knowledge of Microsoft's true plans for XAML. These are simply _my observations_ based on what I've read and seen on the Internet, and cursory fiddlings with XAML as part of the [WinFX pre-release SDK][WinFX SDK]

##What is this XAML you speak of?##
XAML is Microsoft's new _application_ markup language (as noted in the name 'eXtensible Application Markup Language'). 

This, then, automatically implies that its primary focus is applications or, more specifically, _client-side_ applications. These could be the likes of Microsoft Word, or they could be something that runs on the client, but is hosted in a browser environment (read: Flash applications).

The raison d'être of XAML, rather than being to replace HTML, is (or rather, would appear to be) to allow _client-side_ application developers to seperate their user interface 'code' from their functional code.  

##Why all the hubbub?##
Web developers know that having a hulking great piece of <del>JavaScript</del><ins>ECMAScript</ins> to build their entire user interface isn't good for code maintenance. Why should the same not be true for client-side applications? After all, you don't hear anyone crying "think of the children!" when people talk about [XUL][Wiki XUL] which is, ultimately, a different implementation of the same concept.

Personally, I think most of the noise is because Microsoft is making (and, in fact, _has to_ make) noise about the benefits of XAML over the old-school way of doing things. Your average in-house developer, closed off from the outside world, that only uses computers for their day job will probably only care about what comes from [the hand of God][msdn]. Add to that the fact that Microsoft has to get the message out to what probably amounts to millions of developers, and they need to make a lot of noise.

Compare this again to XUL: it's _not_ the default framework for the most used operating system in the world; it has a handful of 'big' adopters (who are, in terms of user base, significantly smaller than that of Windows) and a (relatively) small, vocal developer-base. 

The point, however, is that XUL and XAML have very similar goals in mind: seperation of interface structure and presentation from 'logic'.

##Implementation##
As a very strong advocate of semantic, accessible web development, the implementation details of XAML grate against my nerves slightly, but not as much as you might think. 

###Usability###
> Look at the CD Catalogue, that's less usable friendly than what Amazon is. That makes me wonder if the web is turning too looks specific. _Soon the content will be forgotten and it'll only be about looks_. With that, it looks as though its taking the focus of what the web's built for ('To house globally accessible documents').

I'm not sure Zach's comparison of the CD Catalogue tech demo with [Amazon][] is a fair one; a better one would be to something like [CoverFlow][] with Amazon integration. It's also worth bearing in mind that this is a tech demo we're talking about, _not a final product_. 

Further, I would reiterate the point that XAML is for _applications_, not documents.

###Semantics###
Zach also laments the lack of semantics within XAML, referencing setting an attribute value (`Value="verticalgradient LimeGreen Green"`), rather than some seperate, more semantic notation (he seperates the three values into their own attributes). 

This is one point I'd tend to agree with Zach on and, in fact, take one step further: if Microsoft _really_ want to seperate things, allow seperation of structure from presentation, too. As I noted earlier, I've a strong feeling that this is already possible, to some degree but, if it is, it's almost certainly not enforced in any way (like, say, a completely different markup tailored for each, with some form of referencing).

###Platform specificity###
>Every year more people are switching to a Mac for various reasons(I'm not going to get into a debate here), what about them? Will Mac retaliate and do their own version thus leaving Windows users in the dark on some of the web pages. Will their \[sic\] be a port? Will it get taken back by Microsoft in the hope to fish some Mac users over?

Looking at the direction Microsoft appear to be taking with their [Sparkle Interactive Designer][Sparkle] (as a tool to create rich applications on Windows and the web), you can almost taste the 'we want a piece of Flash' sentiment. Add to that the fact that Microsoft explicitly state that the output from Sparkle will work cross platform and device (in their [Expression family tour][Expression tour]). I wouldn't be in the least surprised if we see:

* A gradual uptake (mostly by [Microsoft shops][FSC] and geeks, initially) of Sparkle in addition to Flash (or, perhaps, instead of, for some geeks).
* A cross-platform .Net runtime environment that is, in some way, endorsed by Microsoft. This might be in the form of support for [Mono][] or the like, some extension of the current [shared source initiative][.Net shared source], a fully-fledged, Microsoft-built .Net runtime for the Mac and *nix, or something in between.

##Final thoughts##
This is something I've actually been mulling over for quite a while and, much as I don't like the approach Microsoft are taking in terms of the actual markup, I can see XAML making my life (and the lives of those I work with) far, far easier when we have to manage future application interfaces.

It _is_ far from the panacea Microsoft are suggesting that it is, but it is still _far_ superior to the current code-soup approach in most Windows applications.

[zach home]: http://www.zachinglis.com/ "Zach Inglis"
[zach xaml post]: http://www.zachinglis.com/web-accessibility/xaml-who/ "XAML: An Outsiders Look In"
[WinFX SDK]: http://www.microsoft.com/downloads/info.aspx?u=http%3A%2F%2Fgo.microsoft.com%2Ffwlink%2F%3FLinkId%3D50707&na=44&p=0&SrcDisplayLang=en&SrcCategoryId=&SrcFamilyId=CE888B4C-CCBD-452F-9D90-F4B7190CCA24
[Wiki XUL]: http://en.wikipedia.org/wiki/XUL "Wikipedia entry on XUL"
[msdn]: http://msdn.microsoft.com/ "Microsoft Developer Network"
[Amazon]: http://www.amazon.com/
[CoverFlow]: http://www.steelskies.com/coverflow/HomePage.html
[Sparkle]: http://www.microsoft.com/products/expression/en/interactive_designer/default.aspx
[Expression tour]: http://www.microsoft.com/products/expression/en/demos.aspx "Microsoft Expression Tours & Demos"
[FSC]: http://www.fujitsu-siemens.com/ "Fujitsu Siemens Computers, the company I work for"
[Mono]: http://www.mono-project.com/
[.Net shared source]: http://www.microsoft.com/downloads/details.aspx?FamilyId=3A1C93FA-7462-47D0-8E56-8DD34C6292F0&displaylang=en

*[XAML]: eXtensible Application Markup Language
*[SDK]: Software Development Kit
*[ECMA]: European Computer Manufacturers Association
*[XUL]: XML User Interface Language
