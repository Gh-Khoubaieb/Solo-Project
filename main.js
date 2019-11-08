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
var jam3 = music("Another Level","Oh the Larceny","Blood Is Rebel","Indie");
var jam4 = music("Real Good Feeling","Oh the Larceny","Blood Is Rebel","Indie");
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
var a = Math.floor(Math.random() * 5);
console.log(a);

$('#track1').hide();
$('#track2').hide();
$('#track11').hide();
$('#track22').hide();
$('#img1').hide();
$('#indie').hide();
$('#hiphop').hide();
$('#Rock').hide();
$('#Rap').hide();

	 

	 $('.inp1').on('click',function(){
		if ($('.inp1').is(":checked")) {
			$('#Rap').show("slow");
			
		} else 
			$('#Rap').hide("slow");
			

	});
	 	
	 $('.inp2').click(function(){
	 	if ($('.inp2').is(":checked")) {
			$('#Rock').show("slow");
			
			} else 
			$('#Rock').hide("slow");
			
			});	 
		
	 $('.inp3').click(function(){
	 	if ($('.inp3').is(":checked")) {
			$('#hiphop').show("slow");
			
			} else 
			$('#hiphop').hide("slow");
			
			});

	  $('.inp4').click(function(){
	  	if ($('.inp4').is(":checked")) {
			$('#indie').show("slow");
			$('#img1').show("slow");
			$('#track22').show("slow");
			$('#track11').show("slow");
			$('#track2').show("slow");
			$('#track1').show("slow");
			} else 
			$('#indie').hide("slow");
			$('#track22').hide();
			$('#track11').hide();
			$('#track2').hide();
			$('#track1').hide();

			});



//indie track
  $("div #p3").hide();
     $("#track1").click(function(){
     $("div #p3").toggle();
	});

 

	 $("div #p5").hide();
     $("#track1").click(function(){
     $("div #p5").toggle();
	});


     /// Rap tarck
     $("div #p2").hide();
     $("#track2").click(function(){
     $("div #p2").toggle();
	});

  $("div #p4").hide();
     $("#track4").click(function(){
     $("div #p4").toggle();
	});

     $("div #p4").hide();
     $("#track3").click(function(){
     $("div #p4").toggle();
	});

     $("div #p1").hide();
});
