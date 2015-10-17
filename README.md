Kayla Cinnamon
Professor Plotka
Web Systems Development
October 16, 2015

Lab 4
Part 1:
	I organized my JSON by each song. I labeled each member according to what its value held. For example, the member "title" holds the title of the song and so forth. Each song is an object. All of the items are inside an array called favoriteSongs.

Part 2:
	I called my jQuery once the disc image was clicked. This makes the AJAX GET request and gets the information from my json file. I then loop through each object in the JSON file and assign each of its members to a variable. Then I connect it to the HTML by using getElementById and getElementsByTagName functions. I also make the disc image disappear and reveal my container CSS once the disc is clicked. I also do an error check at the end of the file in case my previous function was not successful.