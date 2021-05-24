---
title: Event Finder
date: Created
layout: page
tags:
  - events
eleventyNavigation:
  key: events
  parent: main
---

<div class="meet-container" >
  <h3 class="boldheader">Find meetups in the NYC area</h3>
  {% for event in events %} 
  <div class="card">
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title"><a href="/events/{{ event.group.urlname | slug }}-{{ event.id }}/" class="card-link">{{ event.name }}</a></h5>
      <p class="card-text">{{ event.description | safe | truncate(144) }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Group/Organizer:</b> {{ event.group.name }}</li>
      <li class="list-group-item"><b>Location:</b> {{ event.venue.name }}</li>
      <li class="list-group-item"><b>Address: </b>{{ event.venue.address_1 }}, {{ event.venue.city }}, {{ event.venue.zip }}</li>
      <li class="list-group-item"><b>Time: </b>{{ event.local_date }} at {{ event.local_time }}</li>
    </ul>
  </div>
  {% endfor %}
</div>

