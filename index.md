---
layout: default
title: Josh Archibald
---

<section>

<h1>Hi there!</h1>

<p>
    <span class="newthought">I'm Josh Archibald,</span> a rising junior at Harvard studying computer science.
    <label for="me" class="margin-toggle">&#8853;</label>
    <input type="checkbox" id="me" class="margin-toggle"/>
    <span class="marginnote">
        <img src="/assets/josh.jpg" alt="It's me!">
        This is a photograph of me!
    </span>
</p>

{% capture bio %}{% include_relative bio.md %}{% endcapture %}
{{ bio | markdownify }}


</section>


<section>

<h2>Experience</h2>

{% for position in site.data.experience %}

<h3>{{ position.title }}, {{ position.organization }}</h3>
<p>{{ position.location }} &nbsp;&bull;&nbsp; {{ position.start }} &minus; {{ position.end }}</p>

<ul>
{% for highlight in position.highlights %}
<li>{{ highlight }}</li>
{% endfor %}
</ul>

{% endfor %}


</section>


<section>


<h2>Projects</h2>

{% for project in site.data.projects %}

{% assign remainder = forloop.index0 | modulo: 3 %}

{% if forloop.index0 > 0 and remainder == 0 %}
</div>
{% endif %}

{% if remainder == 0 %}
<div class="pure-g d-flex">
{% endif %}

<div class="pure-u-1 pure-u-md-7-24 flex-1">
    <div class="card">
        <h3 class="card-title">{{ project.name }}</h3>
        <p><strong>{{ project.date }}</strong></p>

        {{ project.description }}

        <ul class="tags">
        {% for tag in project.tags %}
        
        <li class="tag">{{ tag }}</li>
        {% endfor %}
        </ul>

        {% if project.links %}
        <ul class="card-actions">
            {% for link in project.links %}
            <li><a href="{{ link.url }}" class="button-primary">{{ link.name }}</a></li>
            {% endfor %}
        </ul>
        {% endif %}
    </div>
</div>
{% endfor %}
