---
title: Welcome
date: Created
layout: page
tags:
  - home
  - welcome
  - info
---

<div class="row">
  <div class="main-content col-lg-9">
    <header class="mb-4">
      <h4 class="text-secondary mt-2 mb-0">Main Content</h4>
    </header>
    <div class="row">
      <div class="col">
        <p>You can add your own content</p>
      </div>
    </div>
  </div>
  <sidebar class="col-12 col-lg-3">
    <header class="mb-4">
      <h4 class="text-secondary mt-2 mb-0">Sidebar</h4>
    </header>
    <article class="row mb-5">
      <div class="col">
        <p class="sidebar">Sidebar content</p>
      </div>
    </article>
  </sidebar>

<h2>Blog</h2>
  <ul>
    {%- for post in collections.post -%}
      <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endfor -%}
  </ul>

<h2>Blog Again</h2>
  <ul>
    {%- for post in collections.articles -%}
      <li><a href="{{ post.url }}">{{ post.data.title }}</a>
        <p>{{ post.data.title }}</p>
      </li>
    {%- endfor -%}
  </ul>

<h2>People</h2>
  <ul>
    {%- for person in collections.person -%}
      <li><a href="{{ person.url }}">{{ person.data.fullname }}</a>
        <p>Age: {{ person.data.age }}</p>
        <br>
        Location: {{ person.data.location }}
      </li>
    {%- endfor -%}
  </ul>

</div>