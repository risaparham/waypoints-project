---
title: Event Finder
date: Created
layout: page
tags:
  - events
eleventyNavigation:
  key: Events
  parent: main
---

<div class="container" >
  <h3 class="boldheader">Find meetups in the NYC area</h3>
  {% for event in events %} 
  {% raw %}
  <div class="card" style="width: 18rem;">
    <img src="{{ ... }}" class="card-img-top" alt="{{ ... }}">
    <div class="card-body">
      <h5 class="card-title"><a href="#" class="card-link">{{ event.name }}</a></h5>
      <p class="card-text">{{ event.description }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Host</li>
      <li class="list-group-item">Location</li>
      <li class="list-group-item">Date and Time</li>
    </ul>
  </div>
  {% raw %}
  {% endfor %}
</div>

