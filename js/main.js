function initialize() {
    var map_canvas = document.getElementById('map_canvas');
    var myLatlng = new google.maps.LatLng(39.7552374, -105.2210565);
    var map_options = {
      center: myLatlng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    };
	var map = new google.maps.Map(map_canvas, map_options);

	var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

// var fetchData = function () {
//   $.ajax({
//     url: "https://api.instagram.com/v1/users/145955895/media/recent/?client_id=a5170e2af08b46a0b7f3c50094729136",
//     dataType: 'jsonp',
//   }).done(buildSlideshow);
// };

// var buildSlideshow = function (data) {
//   var slideData = data.data,
//     slideContent = [],
//     currentSlide;

//   for (var i = 0; i < slideData.length; i++) {
//     currentSlide = buildSlide(slideData[i]);
    
//     currentSlide && slideContent.push(currentSlide);
//   }

//   $(".js-gallery").append(slideContent);
// };

// var buildSlide = function (media) {
//   var slideHtml, slideImgUrl;

//   // Photos only
//   if (media.type !== "image") {
//     return;
//   }

//   slideImgUrl = media.images.standard_resolution.url;
//   slideHtml = "<li><img src='" + slideImgUrl + "'></li>";

//   return slideHtml;
// };

// fetchData();
