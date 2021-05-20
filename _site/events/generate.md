---
pagination:
    data: events
    size: 1
    alias: event
permalink: 'events/{{event.group.urlname | slug }}-{{event.id}}/'
eleventyNavigation:
    key: '{{event.group.urlname | slug }}-{{event.id}}'
    parent: events
layout: base
---
<div class="container" style="width: 18rem;">
  <img src="" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title"><a href="{{event.link}}" class="card-link">{{event.name}}</a></h5>
    <p class="card-text">{{event.description | safe }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{{event.group.name}}</li>
    <li class="list-group-item">{{event.venue.name}}</li>
    <li class="list-group-item">{{event.local_date}} at {{event.local_time}}</li>
  </ul>
</div>