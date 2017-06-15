---
layout: page
title: Projects
permalink: /projects/
---

All Projects Here

<ul>
{% for page in site.projects %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
{% endfor %}
</ul>
