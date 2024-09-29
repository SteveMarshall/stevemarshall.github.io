---
title: "How to enable empowered, autonomous teams by prioritising ways of working"
---

When we were rebooting MOJ’s Cloud Platform team in 2018 as part of our
then-new [hosting strategy](https://mojdigital.blog.gov.uk/2018/10/15/how-were-making-our-hosting-simpler-more-cost-effective-and-more-modern/),
we had a lot of work to do in a short period: build a new platform,
retrain the team on a new technology stack, and prove the value of a
[new approach to operating infrastructure in MOJ](https://stevemarshall.com/journal/how-loosely-coupled-autonomous-teams-are-improving-mojs-hosting-estate/),
all while operating (and, ideally, migrating from) the team’s current
infrastructure. With all of these competing priorities, we wanted to be
intentional in how the team worked, and what they worked on, in these
formative months.

How a team works together, and what types of work they do, is incredibly
important to help them succeed, so in this post I’ll describe the steps
we took to prioritise specific ways of working for the team, how we got
the team to buy in to that, and how this helped the MOJ Cloud Platform
team to successfully reinvent itself and build a platform that, six
years later, hosts hundreds of government services and has saved
millions of pounds a year.

## How did we do it?

The first step was organising a workshop to identify two things:

* What **types** of work (not specific features or tasks) we should
  focus on for the next 3-6 months
* What we should **avoid** working on in that time (even—especially—if
  we care about it or it’s interesting)

The workshop was two hours long. In order to make sure that the whole
team bought in to how we were prioritising, we had about eight people in
it: all of the senior members of the MOJ Cloud Platform team (product
manager, delivery manager, technical architect, and the three senior
engineers), the team’s product coach (this was their first foray into
product-centric development), and the head of hosting (me).

The group weren’t asked to prepare anything, but were told what we’d be
discussing, and to think about how they thought we should work, and what
sorts of work to prioritise.

The workshop was then structured like this:

* 30 minutes collating ideas of things we would like to consider, with
  no judgement of if they’re things to optimise for, avoid, or something
  else.
* 45 minutes identifying duplicates, ensuring shared understanding of
  all the ideas, and identifying those that are about prioritisation and
  those that weren’t
* 45 minutes identifying what to optimise for and what to actively
  avoid optimising for

All of this work was done on a whiteboard in the room, but we’ve since
re-run it remotely, both live and asynchronously in shared documents.

Because this workshop was about *how* to do the work, not the specifics
of what we were building, we made a point of quickly noting and moving on
from any conversations that arose around specifics of what we might
build. All of these details, like which infrastructure as code tool we
would use, or how users would describe their services, were important
but could be worked out by understanding our users and their systems.

The important thing was that the group worked together to come up with
as broad a list of ideas for how we wanted to work, generated a shared
understanding of those ideas, and identified, together, which few of a
long list we would use to prioritise our work.

## The output

After the workshop, I documented what we’d agreed, adding descriptions
for each item both to ensure we still agreed with the ideas and to allow
others who hadn’t been in the meeting to understand what our headlines
meant. This document was then shared with everyone in the team so that
we all understood what sorts of work we would prioritise.

You can [read the complete prioritisation document](https://docs.google.com/document/d/1kHaghp-68ooK-NwxozYkScGZThYJVrdOGWf4_K8Wo6s/edit).
It comprises three sections:

1. Our priorities: An ordered list of the five types of things we were
   going to optimise our work to deliver, in order of preference.
2. Our principles: The group of ideas that we valued, but were
   day-to-day things we expected the team to embed in all their work,
   regardless of the team’s current focus.
3. Things we value, but won’t optimise for right now: These are things
   that either might happen as a natural consequence of our work, but we’re
   not going to organise our work to force them, or are things we’d like to
   do but aren’t important yet (either because the platform was too young,
   or the rest of the organisation wasn’t ready)

These three things allowed us to focus the team on only doing the sorts
of work they needed to do to meet our initial objectives, do so fast,
and with everyone able to understand why a particular type of work is
being prioritised (or why not!).

### Our top priority was regularly shipping value to our users

In the workshop, it became clear that our top priority should be to
regularly ship value to our users.

Before the reboot, the team had spent a number of years working on
various ultimately-unreleased attempts at “solving” infrastructure. Each
of these previous iterations spent so much time being polished and
updated to meet users’ needs before being officially launched that the
users had moved on and got more needs. With the rebooted Cloud Platform,
we decided that the most important thing was to start small, with
something that added value and could be shipped quickly, then iterate to
bring more and more users needs into the fold.

Shipping value to users regularly is, to this day, the team’s highest
priority, to the point that the team make changes to the production
platform dozens of times a day, and the platform itself changes
thousands of times a day, all to make sure tenants are getting the value
they need.

### Learning simultaneously was something we valued, but decided not to optimise for

An example of something we decided not to optimise for was making sure
that the whole team learned every new thing at the same pace.

We cared very much about the team having opportunities to learn and
grow, but we decided not to optimise for everyone learning about
everything from day one. Instead, we relied on the fact that we were
prioritising good software development practices (notably, code reviews
and pairing) to ensure that everyone was able to learn the technologies
we were using over time.

As the team became more mature, we added both 10% learning time and
“fire breaks”: every fourth sprint was dedicated to priorities set by
the engineers on the team, often investigating potentially-useful
technologies for the future.

## This workshop set the team up for years of success

It’s now six years since I ran the Cloud Platform’s first prioritisation
workshop. In that time, the team has built and grown a hosting
platform that’s now the default choice to host all new systems being
built in the MOJ. It hosts [nearly 500 services](https://reports.cloud-platform.service.justice.gov.uk/hosted_services),
allowing those teams to focus on meeting their users’ needs, is
[developed entirely in the open](https://github.com/ministryofjustice/cloud-platform),
allowing others to learn from and reuse our work, and allows MOJ to make
dramatically better use of cloud infrastructure than before by
offering our teams a platform that can scale up or down to meet their
needs without them having to understand how to run their own
infrastructure.

Without our early focus on how to prioritise the team’s work, they could
have been easily distracted by potential users’ ideal-world features, or
by focussing on making the platform more resilient than it needed to be
when it hadn’t got any users. Instead, the team set up a world-class
hosting platform, went live within six months, and have added an average
of seven new services a month since then, saving millions of pounds per
year in the process.
