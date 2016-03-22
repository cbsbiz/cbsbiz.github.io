---
layout: page
title: Konica Minolta Black & White Printers
banner: banner-products-bw.jpg
permalink: /multi-function-products/blackandwhite/index.html
---

{% for product in site.multi-function-products %}
{% if product.type == 'bw' %}
<div id="content-area">
  <div class="view view-uc-products view-id-uc_products view-display-id-page_4 view-dom-id-1">
    <div class="view-content">
      <div class="views-row views-row-1 views-row-odd views-row-first">
        <div class="views-field-field-image-cache-fid">
          <div class="field-content">
            <a href="{{ product.id }}"></a>
            <a href="{{ product.id }}" class="imagecache imagecache-product_list imagecache-linked imagecache-product_list_linked">
              <img src="/images/{{ product.image }}" alt="{{ product.title }}" title="{{ product.title }}" width="65" height="100" class="imagecache imagecache-product_list" data-pin-nopin="true">
            </a>
          </div>
        </div>
        <div class="views-field-title">
          <span class="field-content"><a href="{{ product.id }}">{{ product.title }}</a></span>
        </div>
        <div class="views-field-field-blurb-value">
          <span class="field-content">{{ product.blurb }}</span>
        </div>
      </div>
    </div>
  </div>
</div>
{% endif %}
{% endfor %}