---
permalink: journal/
---
# Archive

{% for post in site.posts %}{%
   assign next_year = post.next.date | date: "%Y" %}{%
   assign current_year = post.date | date: "%Y" %}{%
   capture title %}{%
     include markdown_title.html title=post.title %}{%
   endcapture %}{%
   if next_year != current_year %}

## {{ current_year }}
{% endif %}
- [{{ title | strip_newlines }}]({{post.url}}){%
  endfor %}
