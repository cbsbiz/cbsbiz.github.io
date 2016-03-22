---
layout: page
title: Meet the Team
permalink: /meet-the-team
banner: banner-meet-the-team.jpg
---

CBS is a family owned and operated business serving the Central FL community and beyond for over twenty five years. Curtis Dupree, our fearless leader and once Football Star at Edgewater High School, molded our company from nothing. From the inception of our first office in Ormond Beach FL, to the successful small business that it is today with our headquarters located in Titusville FL. Curtis and his ever so handsome son Dale Dupree have been running the show for the last few years. Now more than ever they are motivated and pumped up to get out and serve the community, with our cost saving and efficient product line we hope to meet and serve you as well!!!

{% for member in site.team %}
<div class="employee">
<img src="/images/{{ member.image }}" data-pin-nopin="true" />
<h1>{{ member.name }}<a href="{{ member.twitter }}" target="_blank"><img src="/images/twitter.png" data-pin-nopin="true"></a></h1>
{{ member.content }}
</div>
{% endfor %}

# Our History

CBS was incorporated in February of 1984 with the name of Integrated Business Systems. In the summer of 1994 IBS became Connectivity Business Systems. The company wanted to mirror the industry paradigm shift towards digital technology and the new name was chosen to more eloquently describe the solutions offered by CBS. CBS was selected as an official Konica dealer in September of 1984 and has exclusively sold their excellent business solutions since then. CBS was formed as a privately owned small business and has remained so in order to rapidly respond to the changing needs of its customers. This hands-on approach to business has allowed CBS to be on the cutting edge of introducing new technology and business solutions such as our line of Premium Compatible Cartridges, document imaging and electronic file management along with IT and Managed Services for your desktop and server needs. CBS has been serving Central Florida with excellence since our inception, we look forward to meeting you and helping your business grow with the same excellence we have been practicing for decades.
