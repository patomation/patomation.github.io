
	
//CustomEase.create("myCustomEase", [{s:0,cp:0.69,e:0.94},{s:0.94,cp:1.19,e:1}]); //doesn't work need to dl plugin and pay for Club Greenstock to get. gut will be amazing to get. 
//TweenLite.from(webBTN, 1, {delay:0.7, margin:"-100px 120px 0 0", ease:CustomEase.byName("myCustomEase")}); //customEase EXAMPLE 

//PAGE LOAD ANIMATION		
		$(document).ready(function() {
			$(".ANfade").delay(300).animate( {opacity: 1}, 500 );
			
			TweenMax.from(container, .5, {delay:.6, opacity:"0"});
			//TweenLite.from(logo, .5, {delay:0.5, margin:"-100px 0 0 0", ease:Bounce.easeOut});
			//TweenLite.from(webBTN, .5, {delay:0.75, margin:"-100px 120px 0 0", ease:Bounce.easeOut});
			TweenLite.from(chainAnimation, .5, {delay:1, margin:"0 0 0 100px", ease:Bounce.easeOut});
			TweenLite.from(footerText, .5, {delay:1.25, margin:"0 0 0 -300px", ease:Bounce.easeOut});

			TweenMax.from(can, .5, {delay:1.5, margin:"0 0 0 -400px"});
			TweenMax.from(canInfo, .5, {delay:2, margin:"0 0 0 -400px"});	
			TweenMax.from(canInfoTitle, .5, {delay:2, margin:"0 0 0 -400px"});
			TweenMax.from(canInfoLine1, .5, {delay:2.25, margin:"0 0 0 -400px"});
			TweenMax.from(canInfoLine2, .5, {delay:2.5, margin:"0 0 0 -400px"});
			TweenMax.from(canInfoLine3, .5, {delay:2.75, margin:"0 0 0 -400px"});	
		});	
//CANIMATE
		function CanOmateOut () {
			TweenMax.to(canInfoLine3, .5, {delay:.00, margin:"0 0 0 -400px"});
			TweenMax.to(canInfoLine2, .5, {delay:.02, margin:"0 0 0 -400px"});
			TweenMax.to(canInfoLine1, .5, {delay:.04, margin:"0 0 0 -400px"});
			TweenMax.to(canInfoTitle, .5, {delay:.20, margin:"0 0 0 -400px"});
			TweenMax.to(canInfo, .5, {delay:.30, margin:"0 0 0 -400px"});
			TweenMax.to(can, .5, {delay:.6, opacity:"0"});
			//TweenMax.to(can, 1, {delay:1, margin:"0 0 0 -400px"});
			
		}
		function CanOmateIN () {
			//TweenMax.to(can, 1, {delay:0.00, margin:"0 0 0 50px"});
			TweenMax.to(can, .5, {delay:.6, opacity:"1"});
			TweenMax.to(canInfo, .5, {delay:0.6, margin:"0 0 0 0px"});	
			TweenMax.to(canInfoTitle, .5, {delay:0.9, margin:"0 0 0 0px"});
			TweenMax.to(canInfoLine1, .5, {delay:1.0, margin:"0 0 0 0px"});
			TweenMax.to(canInfoLine2, .5, {delay:1.1, margin:"0 0 0 0px"});
			TweenMax.to(canInfoLine3, .5, {delay:1.2, margin:"0 0 0 0px"});		
		}
		
//Button Click Stuff		
		function canBTNclick(number){				
			var stDelay = 1000; 
			if 	(number == 1){ 
				function changeIT() {
					$("#can").removeClass(); //clears classes
					$("#can").toggleClass("canImage1");
					document.getElementById("canInfoTitle").innerHTML="ORGANIC HOPWORKS IPA";
					document.getElementById("canInfoLine1").innerHTML="ABV: 6.6&#37;";
					document.getElementById("canInfoLine2").innerHTML="IBU: 75";
					document.getElementById("canInfoLine3").innerHTML="Plato: 15";		
				}
			
				setTimeout(CanOmateOut, 0);
				setTimeout(changeIT, stDelay);
				setTimeout(CanOmateIN, stDelay);	
			}
			else if (number == 2){
				function changeIT() {
					$("#can").removeClass(); //clears classes			
					$("#can").toggleClass("canImage2");
					document.getElementById("canInfoTitle").innerHTML="ORGANIC RISE UP RED";
					document.getElementById("canInfoLine1").innerHTML="ABV: 5.8&#37;";
					document.getElementById("canInfoLine2").innerHTML="IBU: 60";
					document.getElementById("canInfoLine3").innerHTML="Plato: 13.5";			
				}
				setTimeout(CanOmateOut, 0);
				setTimeout(changeIT, stDelay);
				setTimeout(CanOmateIN, stDelay);	
			}
			else if (number == 3){ 
				function changeIT() {
					$("#can").removeClass(); //clears classes
					$("#can").toggleClass("canImage3");
					document.getElementById("canInfoTitle").innerHTML="ABOMINABLE WINTER ALE";
					document.getElementById("canInfoLine1").innerHTML="ABV: 7.3&#37;";
					document.getElementById("canInfoLine2").innerHTML="IBU: 70";
					document.getElementById("canInfoLine3").innerHTML="Plato: 17";
				}
				setTimeout(CanOmateOut, 0);
				setTimeout(changeIT, stDelay);
				setTimeout(CanOmateIN, stDelay);					
			}
			else if (number == 4){ 
				function changeIT() {
					$("#can").removeClass(); //clears classes
					$("#can").toggleClass("canImage4");
					document.getElementById("canInfoTitle").innerHTML="HUB ORGANIC LAGER";
					document.getElementById("canInfoLine1").innerHTML="ABV: 5.1&#37;";
					document.getElementById("canInfoLine2").innerHTML="IBU: 32";
					document.getElementById("canInfoLine3").innerHTML="Plato: 11.5";	
				}
				setTimeout(CanOmateOut, 0);
				setTimeout(changeIT, stDelay);
				setTimeout(CanOmateIN, stDelay);			
			}
			else {}
		}

		
//CHAIN ANIMATION
		var scrollSpeed = 100;
		// set the default position
		var current = 0;
		// set the direction
		var direction = 'v';
		function bgscroll(){
			// 1 pixel row at a time
			current -= 1;
			// move the background with backgrond-position css properties
			$('div#container').css("backgroundPosition", (direction == 'h') ? current+"px 0" : "0 " + current+"px"); 
		}
		//Calls the scrolling function repeatedly
		setInterval(bgscroll, scrollSpeed);
