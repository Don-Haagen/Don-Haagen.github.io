---
layout: post
title: The Trade-off Sliders
date: 2020-07-10 21:31
category: 
author: Don Haagen
tags: [agile slider]
summary: How to know what is most important for your product owner.
---
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.0/themes/black-tie/jquery-ui.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src="{{ base.url | prepend: site.url }}/assets/js/slider.js"></script>

<style>
.container{width:100%;}
.left{
    float:left;
    width:100px;
}
.right{
    float:right;
}
.center{
    margin:0 auto;
    width:100px;
    text-align:center;
}
</style>

These sliders come from the book *The Agile Samurai*. The book explains that in projects the time is fixed, the budget is defined and the scope is always increasing and the quality is at top level... So it seems that these furious four are all priority number 1. However, this cannot be true! Something has to give. The rules are simple. There can be only one lever at each position. This can serve as a tool for you to start discussing with the stakeholder about the project and figure together what is really the most important on. With this said everything is **important** putting quality to off doesn't mean that there will be no testing done. It might just mean that there might not be tested to the full extent.

So I give you these levers to play around with and discover what is most important...

<div class="left"><strong>On</strong></div><div class="right"><strong>Off</strong></div><div class="center"><strong>Scope</strong></div>
<div id="scope-slider"  class="slide-value"></div>
<input type="hidden" id="scope-slider-value" value="">
<br />
<br />

<div class="left"><strong>On</strong></div><div class="right"><strong>Off</strong></div><div class="center"><strong>Budget</strong></div>
<div id="budget-slider" class="slide-value"></div>
<input type="hidden" id="budget-slider-value" value="">
<br />
<br />

<div class="left"><strong>On</strong></div><div class="right"><strong>Off</strong></div><div class="center"><strong>Time</strong></div>
<div id="time-slider" class="slide-value"></div>
<input type="hidden" id="time-slider-value" value="">
<br />
<br />

<div class="left"><strong>On</strong></div><div class="right"><strong>Off</strong></div><div class="center"><strong>Quality</strong></div>
<div id="quality-slider" class="slide-value"></div>
<input type="hidden" id="quality-slider-value" value="">


