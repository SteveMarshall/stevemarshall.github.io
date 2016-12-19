---
permalink: journal/
---
# Archive

## {{ site.posts.first.date | date: "%Y" }}
{% for post in site.posts %}{% capture t %}{% include markdown_title.html title=post.title %}{% endcapture %}{% assign curr_year = post.date | date: "%Y" %}{% assign prev_year = post.previous.date | date: "%Y" %}
- [{{ t | strip_newlines }}]({{post.url}}){% if curr_year != prev_year and prev_year %}

## {{ prev_year }}
{% endif %}{% endfor %}
