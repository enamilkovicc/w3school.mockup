function f1(){
             var c = confirm('Are you sure you want to submit your anwsers?');
             if(c)
                document.getElementById("f1").innerHTML ="You have submited your anwsers.";
             else 
              document.getElementById("f1").innerHTML ="Your anwsers are not submited.";
            }             
 function f2() {
                var ime = prompt("Enter your name", "name surname");
                var dat = new Date();
                var hh = dat.getHours();
                var min=dat.getMinutes();
                var ss=dat.getSeconds();
                var dd=dat.getDate();
                var mm=dat.getMonth();
                var gg=dat.getFullYear();
                if(hh<12)
                  {var poz="Good morning";}
                else if(hh<20)
                  {var poz="Good day";}
                else
                  {var poz="Good evening";}
                if (ime != null)
                  {document.getElementById("f2").innerHTML = poz +" " + ime + "!";}
                }
 function f3(){
               var dat=new Date();
               var hh=dat.getHours();
               var min=dat.getMinutes();
               var ss=dat.getSeconds();
               var dd=dat.getDate();
               var mm=dat.getMonth();
               var gg=dat.getFullYear();
 
              document.getElementById("f3").innerHTML ="Time: " +hh+":"+min+":"+ss+" Date: "+dd+"/"+mm+"/"+gg+".";
}
function f4()
{
	          document.getElementById("f4").innerHTML = "We are glad that you like our site. ";
}
function f5()
{
	 window.alert("You are now going on a site we don't own. Don't share your personal information.");
}
