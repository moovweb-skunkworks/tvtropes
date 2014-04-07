/*
  Cachify 1.0
  by Hampton Catlin

  This is a simple library that works with Moovweb's "cache"
  mixer to make it very easy to late load content onto 
  the Moov'd site.
*/
$(function() {
  $("span[data-cache-hold]").first().each(function() {
    $.ajax(document.location.href, {
      headers: {"X-Requested-With": "CacheRequest"},
      data: {"_mw_cached_fragments": "true"},
      cache: false,
      dataType: "json",
      success: function(data, textStatus, jqXHR ) {
        for (var i = 0; i < data.length; i++) {
            $("span[data-cache-hold=" + (i+1) + "]").replaceWith(data[i])
        }
      },
      failure: function() {
        console.log("Looks like the cachify process failed. Oh noes!")
      }
    })
  })
})
