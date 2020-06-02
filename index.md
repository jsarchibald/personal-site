---
layout: default
title: Josh Archibald
---

## Hi there!

I'm Josh Archibald, a rising junior at Harvard studying computer science. I'm currently a research assistant at the [Creative Computing Lab](https://creativecomputing.gse.harvard.edu/) at the Harvard Graduate School of Education, where I work on tools to analyze [Scratch](https://scratch.mit.edu/) projects and help develop a website for the [Getting Unstuck](https://gettingunstuck.gse.harvard.edu/) professional development program.

This summer I'm working as a software development intern at [CS50](https://cs50.harvard.edu/), helping to design software tools to improve the student experience for Harvard's introductory computer science course. I've previously worked as a Teaching Fellow for the course in both its undergraduate and law school iterations.

Outside of class, I enjoy volunteering my time teaching in Boston Public Schools - I've taught American government as part of the [Harvard CIVICS](https://iop.harvard.edu/get-involved/civics-program) program since my first semester of college and currently serve as the president of the [Digital Literacy Project](https://digilit.io/), which teaches middle school computer science.

#### Contact Me
- You can reach me by email at [jarchibald@college.harvard.edu](mailto:jarchibald@college.harvard.edu).

#### Links
- [Github](https://github.com/jsarchibald/)
- [LinkedIn](https://www.linkedin.com/in/josh-archibald/)

<hr>

## Experience

{% for position in site.data.experience %}

<h6 class="mb-0">{{ position.title }}, {{ position.organization }}</h6>
{{ position.location }} &nbsp;&diams;&nbsp; {{ position.start }} &minus; {{ position.end }}

<ul class="indented">
{% for highlight in position.highlights %}
<li>{{ highlight }}</li>
{% endfor %}
</ul>

{% endfor %}

<hr>

## Projects

<div class="container">
{% for project in site.data.projects %}

{% assign remainder = forloop.index0 | modulo: 2 %}
{% if forloop.index0 > 0 and remainder == 0 %}
</div>
{% endif %}
{% if remainder == 0 %}
<div class="row">
{% endif %}

<div class="col-md-6">
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
</div>
