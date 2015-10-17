$("#coverart").click(function(e) {
  $.ajax({
  	type: "GET",
   	url: "lab4.json",
   	dataType: "json",

   	success: function(responseData, status){

      var title = '<h2>Song</h2>';
      var artist = '<h2>Artist</h2>';
      var album = '<h2>Album</h2>';
      var year = '<h2>Release Date</h2>';
      var genre = '<h2>Genre</h2>';
      var website = '<h2>Website</h2>';
      var image = '<h2>Cover</h2>';
      var footer = '<h5>End of list</h5>';

  	 	$.each(responseData.favoriteSongs, function(i, item) {
        title += '<p>' + item.title + '</p>';
        artist += '<p>' + item.artist + '</p>';
        album += '<p>' + item.album + '</p>';
        year += '<p>' + item.year + '</p>';
        genre += '<p>' + item.genre + '</p>';
        website += '<p><a href="' + item.websiteUrl + '">' + item.website + '</a></p>';
        image += '<p><img src="' + item.image + '" width="120" height="120"></p>';
    	});

      document.getElementById("title").innerHTML = title;
      title += document.getElementsByTagName("p").innerHTML;

      document.getElementById("artist").innerHTML = artist;
      artist += document.getElementsByTagName("p").innerHTML;

      document.getElementById("album").innerHTML = album;
      album += document.getElementsByTagName("p").innerHTML;

      document.getElementById("year").innerHTML = year;
      year += document.getElementsByTagName("p").innerHTML;

      document.getElementById("genre").innerHTML = genre;
      genre += document.getElementsByTagName("p").innerHTML;

      document.getElementById("website").innerHTML = website;
      website += document.getElementsByTagName("p").innerHTML;

      document.getElementById("image").innerHTML = image;
      image += document.getElementsByTagName("p").innerHTML;

      document.getElementById("footer").innerHTML = footer;
      footer += document.getElementsByTagName("h5").innerHTML;

      var disc = document.getElementById("coverart");
      disc.style.visibility = "hidden";

      var page = document.getElementById("container-page");
      page.style.visibility = "visible";


   	}, error: function(msg) {
      				// there was a problem
    	alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
});