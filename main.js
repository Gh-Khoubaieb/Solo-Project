$( document ).ready(function() {

 //hidden all tracks inputs
$('#track1').hide();
$('#track2').hide();
$('#track3').hide();
$('#track4').hide();
$('#track5').hide();
$('#track6').hide();
$('#track8').hide();
$('#track11').hide();
$('#track22').hide();
$('#track31').hide();
$('#track32').hide();
$('#track41').hide();
$('#track42').hide();
$('#track52').hide();
$('#img1').hide();
$('#indie').hide();
$('#RapRock').hide();
$('#Rock').hide();
$('#Rap').hide();

	//enable genre Rap on click
	 $('.inp1').on('click',function(){
		if ($('.inp1').is(":checked")) {
			$('#Rap').show("slow");
			$('#img1').show("slow");
			$('#track42').show("slow");
			$('#track41').show("slow");
			$('#track5').show("slow");
			$('#track6').show("slow");
		} else {
			$('#Rap').hide("slow");
			$('#track42').hide();
			$('#track41').hide();
			$('#track5').hide();
			$('#track6').hide();
			$("div #p6").hide();
			$("div #p7").hide();
		}
	});

//enable genre Rock on click
	 $('.inp2').click(function(){
	 	if ($('.inp2').is(":checked")) {
			$('#Rock').show("slow");
			$('#img2').show("slow");
			$('#track32').show("slow");
			$('#track31').show("slow");
			$('#track3').show("slow");
			$('#track4').show("slow");
		} else {
			$('#Rock').hide("slow");
			$('#track32').hide();
			$('#track31').hide();
			$('#track3').hide();
			$('#track4').hide();
			$("div #p4").hide();
			$("div #an").hide();
			
			}	
		});

//enable genre Rap Rock on click
	 $('.inp3').click(function(){
	 	if ($('.inp3').is(":checked")) {
			$('#RapRock').show("slow");
			$('#track8').show();
		} else {
			$('#RapRock').hide("slow");
			$('#track8').hide();
		}
			});

//enable genre Indie on click
	  $('.inp4').click(function(){
	  	if ($('.inp4').is(":checked")) {
			$('#indie').show("slow");
			$('#img1').show("slow");
			$('#track22').show("slow");
			$('#track11').show("slow");
			$('#track2').show("slow");
			$('#track1').show("slow");
		} else {
			$('#indie').hide("slow");
			$('#track22').hide();
			$('#track11').hide();
			$('#track2').hide();
			$('#track1').hide();
			$("div #p2").hide();
			$("div #p5").hide();
		}
			});



//Hide indie lyrics

	 $("div #p5").hide();
     $("#track1").click(function(){
     $("div #p5").toggle();
	});


     /// Hide Rap lyrics
     $("div #p2").hide();
     $("#track2").click(function(){
     $("div #p2").toggle();
	});



$("div #p6").hide();
     $("#track6").click(function(){
     $("div #p6").toggle();
	});

     ///Hide Rock lyrics
       $("div #p4").hide();
     $("#track4").click(function(){
     $("div #p4").toggle();
	});

     $("div #an").hide();
     $("#track31").click(function(){
     $("div #an").toggle();
	});

     

    $("div #p6").hide();
    $("#track42").click(function(){
    $("div #p6").toggle();
	});

	$("div #p7").hide();
    $("#track5").click(function(){
    $("div #p7").toggle();
	});

	//Rap Rock
	$("div #p8").hide();
    $("#track8").click(function(){
    $("div #p8").toggle();
	});

});
