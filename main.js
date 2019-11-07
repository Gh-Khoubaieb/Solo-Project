$( document ).ready(function() {
	   
	   //create function that make mak music library
function music(song, singer, album, genre) {
var musicLib = {};
musicLib.song = song;
musicLib.singer = singer;
musicLib.album = album;
musicLib.genre = genre
return musicLib;
}	

	//	creating music 
var jam1 = music("I'm dangerous","The Everlove","Walk Through Fire","Rock");
var jam2 = music("I Will Rule","The Everlove","Walk Through Fire","Rock");
var jam3 = music("Another Level","Oh the Larceny","Blood Is Rebel","Alternative/Indie");
var jam4 = music("Real Good Feeling","Oh the Larceny","Blood Is Rebel","Alternative/Indie");
var jam5 = music("What I've Done","Linkin Park","Minutes To Midnight","Rap rock");
var jam6 = music("Castle of Glass","Linkin Park","Living Things","Rap rock");
var jam7 = music("A la Ideal J","Kery James","J'rap encore","Hip-Hop/Rap");
var jam8 = music("Mouhammad Alix","Kery James","Mouhammad Alix","Hip-Hop/Rap");
var jam9 = music("Mouhammad Alix","Kery James","Mouhammad Alix","Hip-Hop/Rap");
var jam10 = music("Hokuto Shinken","Psyco-M","Solide","Hip-Hop/Rap");
var jam11 = music("Tsuki No Me","Psyco-M","Solide","Hip-Hop/Rap");
var jam12 = music("Legend ","The Score","Atlas","Alternative/Indie");
var jam13 = music("Unstoppable","The Score","Atlas","Alternative/Indie");
var jam14 = music("Centuries","Fall Out Boy","American Beauty/American Psycho","Alternative/Indie");
var jam15 = music("Light em up","Fall Out Boy","Save Rock and Roll","Alternative/Indie");


//creating an array to hold all music
var allMusic = [jam1, jam2, jam3, jam4, jam5, jam6, jam7, jam8, jam9, jam10, jam11, jam12, jam13, jam14, jam15];


$('#search').on('click',function(){
	$('#h1').hide("slow")
})

	
});
