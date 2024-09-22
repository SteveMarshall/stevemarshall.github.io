---
title: "How loosely coupled, autonomous teams are improving MOJ’s hosting estate"
---

At the Ministry of Justice (MOJ), we have hundreds of different systems.
Over the last six years, we’ve saved tens of millions of pounds on
hosting them. In order to do that, we had to change our organisation
structure. In this post I’ll share how we did that.

## Most services had their own unique hosting environment

When we started on this journey six years ago, MOJ had dozens of teams
responsible for the infrastructure underlying our services. 

Some of these teams were staffed by MOJ employees but the majority of
infrastructure for the MOJ was managed by suppliers and related to just
one or a few services. 

MOJ had to pay each supplier for the hosting and the people to support
it. Because each environment was unique, MOJ couldn’t benefit from
consolidation or economies of scale.

In addition, very few of MOJ’s services used public cloud hosting. Many
systems could only be released every six months, making releases
expensive and error prone.

## We predicted we could reduce our costs by 60%

In 2017, I pitched to our then-CTO to build a team to manage hosting for
the MOJ. We predicted we could reduce MOJ’s overall hosting costs by
60%, all while improving MOJ’s ability to deliver modern, user-centred
software at pace. 

I [described our strategy on the MOJ Digital blog in
2018](https://mojdigital.blog.gov.uk/2018/10/15/how-were-making-our-hosting-simpler-more-cost-effective-and-more-modern/),
a year into the process.

## Principles for a strategic team structure

As outlined in that strategy, we had three types of infrastructure: 

* Retirement infrastructure: we aimed to close these down
* Modernisation infrastructure: in the public cloud, but not yet cloud native
* Cloud native infrastructure: reproducible, and easily scalable in response to demand 

In order to deliver the strategy, we needed teams to work on each of
these areas, and there were some key principles:

Each team should be able to [work
iteratively](https://www.gov.uk/service-manual/service-standard/point-7-use-agile-ways-of-working)
and independently of the other teams, so that teams using the platforms
were able to deliver their work without being blocked by work in other
teams. This is similar to how we architect software to be loosely
coupled, so that one system can be changed without breaking another.

At this stage we didn’t know how many retirement environments we would
need to close down, so we needed to be able to add new work without
derailing existing teams. This meant we needed to be able to grow our
capacity without affecting other work: adding or combining teams where
needed. This is similar to the software design principle of modularity,
where we design software such that its components are able to be
separated and recombined flexibly.

We also wanted to ensure that each sub-team was [solving a whole problem
for their users](https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem),
so they had a clear vision for their area that fed into the wider
strategy, and the autonomy to deliver it. This is analogous to how we
design systems to take account of the separation of concerns, where each
component of the system is autonomously responsible for its area of
concern.

In summary, we needed to design a team structure like a well-architected
software system, where:

* Teams are loosely coupled
* Teams are modular
* Teams are responsible for an area of concern

## We built the Cloud Platform to support new services that needed infrastructure

In order to stem the tide of new services setting up new infrastructure,
I re-focused one of our in-house teams on building a new, cloud native
hosting platform: the [MOJ Cloud
Platform](https://user-guide.cloud-platform.service.justice.gov.uk/).
This platform is now the default hosting environment for the MOJ.

This is a mature, evergreen product built to offer an excellent
developer experience to the teams responsible for over 400 production
systems. The Cloud Platform handles more than 200 million requests a
day, and the platform and the systems that run on it are changed more
than 5000 times a day.

## We built the Modernisation Platform for services that can’t yet be Cloud Native

Many of MOJ’s legacy systems weren’t likely to become cloud native in
the near future.

To allow us to support more of these services while improving their
ability to be changed and operated, we built the [MOJ Modernisation
Platform](https://user-guide.modernisation-platform.service.justice.gov.uk/)
and migrated services onto it. These services now get the benefits of
being on the cloud and we can operate their fundamental infrastructure
at scale rather than having duplicated teams for each system.

The Modernisation Platform now hosts the majority of MOJ’s largest, most
sensitive and complex services, used across the justice system.

## We set up an Operations Engineering team to improve shared services

Many shared services like our GitHub organisation or DNS were being
looked after by a small number of busy people, and were often reliant on
things only they knew, so we couldn’t improve how we used them. 

To tackle this, I set up the [Operations Engineering
team](https://operations-engineering.service.justice.gov.uk/), whose
mission is to manage shared services and identify opportunities to
improve our developers’ experience by buying, building, or otherwise
solving common problems.

## We also got involved in governance

We also started supporting MOJ’s spend controls process. Many projects
don’t look like they involve hosting but a lot of government work
ultimately involves running a website or a piece of software somewhere.
We work with those project teams to use our strategic solutions, making
sure they’re getting the best value for money and are aligned to our
hosting strategy.

By doing this, we have been able to save time and money for many
systems, as well as giving them a better outcome than they expected.

## We have reduced costs by nearly 50% so far

We’ve already saved tens of millions of pounds by turning off older
systems and environments and by making newer systems more efficient by
moving them onto our [Cloud
Platform](https://user-guide.cloud-platform.service.justice.gov.uk/) and
[Modernisation Platform](https://user-guide.modernisation-platform.service.justice.gov.uk/).

All of our hosting teams improve their systems multiple times a day, and
work to improve the experience of the developers who use their systems.
Solving hosting issues once, for all of MOJ, means more of us can focus
on meeting users’ needs.

There’s still more to do: we’re migrating all of our remaining prison,
probation, and legal aid systems to our platforms over the next year.
All of our teams can focus on delivering the best experiences for users
and we know that the team structure we’ve built allows us to continue to
make the most efficient use of public money.

_This post originally appeared [on the MOJ Digital blog](https://mojdigital.blog.gov.uk/2024/09/20/how-loosely-coupled-autonomous-teams-are-improving-mojs-hosting-estate/)._
