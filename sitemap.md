---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: false
redirect_from:
  - /academic-page/sitemap/
---

The machine-readable XML sitemap is available at [sitemap.xml]({{ '/sitemap.xml' | relative_url }}).

## Main pages

- [About]({{ '/about/' | relative_url }})
- [Research]({{ '/research/' | relative_url }})
- [Publications]({{ '/publications/' | relative_url }})
- [Talks]({{ '/talks/' | relative_url }})
- [Projects]({{ '/projects/' | relative_url }})
- [ML Freelance]({{ '/ml-freelance/' | relative_url }})
- [Teaching]({{ '/teaching/' | relative_url }})
- [CV]({{ '/cv/' | relative_url }})

## Publications

{% assign publications = site.publications | sort: "date" | reverse %}
{% for post in publications %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}

## Talks

{% assign talks = site.talks | sort: "event_date" | reverse %}
{% for post in talks %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}

## Projects

{% assign projects = site.portfolio | sort: "date" | reverse %}
{% for post in projects %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
