function loadJson(file,callback){
   var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function(){
     if(xhr.readyState===4 && xhr.status=="200"){
        callback(xhr.responseText);
     }
   }
   xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_education(data.education);
  });
  var div2=document.getElementById("child2");
  function fun_education(edu){
    var headLine=document.createElement("h2");
    headLine.textContent="Educational Qualifications";
    div2.appendChild(headLine);
    var underLine=document.createElement("hr");
    div2.appendChild(underLine);
    var list=document.createElement("ul");
    div2.appendChild(list);
    for(var i=0;i<edu.length;i++){
       var listItem1=document.createElement("li");
       listItem1.textContent=edu[i].degree;
       listItem1.style.fontWeight="600";
       listItem1.style.fontSize="25px";
       var listItem2=document.createElement("p");
       listItem2.textContent=edu[i].institute;
       var listItem3=document.createElement("p");
         listItem3.textContent=edu[i].data;
        list.appendChild(listItem1);
        list.appendChild(listItem2);
        list.appendChild(listItem3);
    }
  }
