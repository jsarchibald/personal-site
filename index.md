---
layout: default
title: Josh Archibald
---

<section>
<h1>Hi there!</h1>

<p>
    <span class="newthought">I&rsquo;m Josh Archibald,</span> a junior at Harvard studying computer science.
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


<h2 id="projects">Projects</h2>

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


<section>

<h2 id="experience">Experience</h2>

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

<h2 id="skills">Skills</h2>

<p>Below is a full listing of the programming languages with which I feel comfortable, and a brief listing of some of the libraries and tools with which I have experience. This is <em>not</em> an exhaustive list of every language and library I have ever used.</p>

<p>Each skill is followed by the year in which I first used it.</p>

<h3>Programming languages</h3>

<ul>
    {% for lang in site.data.skills.languages %}
    <li>{{ lang.name }} ({{ lang.start_year }})</li>
    {% endfor %}
</ul>

<h3>Libraries and tools</h3>

<ul>
    {% for lib in site.data.skills.libraries %}
    <li>{{ lib.name }} ({{ lib.start_year }})</li>
    {% endfor %}
</ul>

</section>
