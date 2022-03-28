
//function for change back ground colour.
function ChangeBackGroundColour(){
	var selectedColour=document.getElementById("backGroundColourOptions")[document.getElementById("backGroundColourOptions").selectedIndex].value;
	if(selectedColour==="#ffcdf3"){
	document.body.style.backgroundColor="#ffcdf3";
	} else if(selectedColour==="#c7f25e"){
	document.body.style.backgroundColor="#c7f25e";
	} else if(selectedColour==="#fdc38c"){
	document.body.style.backgroundColor="#fdc38c";
	} else if(selectedColour==="#9bc38c"){
	document.body.style.backgroundColor="#9bc38c";
	} else if(selectedColour==="#62caff"){
	document.body.style.backgroundColor="#62caff";
	}
   }
					
//function for change text colour.	  
function ChangeTextColour(){
	var selectedColour=document.getElementById("textColourOptions")[document.getElementById("textColourOptions").selectedIndex].value;
	if(selectedColour==="#5f2a56"){
	document.body.style.color="#5f2a56";
	} else if(selectedColour==="#065903"){
	document.body.style.color="#065903";
	} else if(selectedColour==="#0a0a0a"){
	document.body.style.color="#0a0a0a";
	} else if(selectedColour==="#054e5f"){
	document.body.style.color="#054e5f";
	} else if(selectedColour==="#4f3d5d"){
	document.body.style.color="#4f3d5d";
	} 
   }				 
//functions for display enlarge image and image discription.					 
function changeimage1(){
	document.getElementById("enlargeImage").src="Thumbnailimages/Manchester-United-Logo.jpg";
        document.getElementById("discrip").innerHTML="Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football.";
}
	 
function changeimage2(){
	document.getElementById("enlargeImage").src="Thumbnailimages/ground.jpg";
        document.getElementById("discrip").innerHTML="Old Trafford is a football stadium in Old Trafford, Greater Manchester, England, and the home of Manchester United. With a capacity of 74,140 seats, it is the largest club football stadium (and second-largest football stadium overall after Wembley Stadium) in the United Kingdom, and the eleventh-largest in Europe. It is about 0.5 miles (800 m) from Old Trafford Cricket Ground and the adjacent tram stop.";
}	  
function changeimage3(){
	document.getElementById("enlargeImage").src="Thumbnailimages/players.jpg";
        document.getElementById("discrip").innerHTML="The club was renamed Manchester United F.C. in 1902, and moved to Old Trafford in 1910. Since playing their first competitive match, 939 players have made a competitive first-team appearance for the club, of whom 217 players have made at least 100 appearances (including substitute appearances).";
}
function changeimage4(){
	document.getElementById("enlargeImage").src="Thumbnailimages/win.jpg";
	  document.getElementById("discrip").innerHTML="The club currently holds the record for most top-division titles, with 20. They were also the first team to win the Premier League, as well as holding the record for the most Premier League titles (13), and became the first English team to win the European Cup when they won it in 1968. Their most recent trophy came in May 2017, when they won the UEFA Europa League.";
}
function changeimage5(){
	document.getElementById("enlargeImage").src="Thumbnailimages/match.jpg";
	  document.getElementById("discrip").innerHTML="The 2021–22 season is Manchester United's 30th season in the Premier League and their 47th consecutive season in the top flight of English football. The club will participate in the Premier League, the EFL Cup, the UEFA Champions League, and the FA Cup. This will be the first season since 2013–14 that Chevrolet will not be the main shirt sponsor; they will be replaced by software company TeamViewer."; 
}	  