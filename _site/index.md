---
title: Welcome
date: Created
layout: page
tags:
  - home
  - welcome
  - info
eleventyNavigation:
  key: Home
  parent: main
---
<!-- Photos by Ryan Wallace, Christopher Paul High on Unsplash -->
<div class="container">
  <div class="d-flex flex-column text-center">
    <h2 class="boldheader">Welcome!</h2>
    <p>Browse recent small gaming gatherings local to NYC</p>
  </div>
  <div class="d-flex justify-content-center">
    <div id="myCarousel" class="carousel slide w-75" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="images/boardgame1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="images/boardgame2.jpg" alt="Second slide"> 
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="images/boardgame3.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#eventCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#eventCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

  <h3 class="boldheader" style="margin-top:2rem">Upcoming Events</h3>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <div class="card" style="width: 24rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Featured: </h5>
            <p class="card-text">Event description preview</p>
          </div>
        </div>
      </div>
      <div class="col-md">
        <div class="card" style="width: 24rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Featured: </h5>
            <p class="card-text">Event description preview</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
