// function getdata(){
//     var fname= document.getElementById("firstname").value;
//     var lname= document.getElementById("lastname").value;
//     var pob= document.getElementById("place").value;
//     var contact= document.getElementById("number").value;
//     var mail= document.getElementById("email").value;
//     var houseno= document.getElementById("hseno").value;
//     var street= document.getElementById("stname").value;
//     var mail= document.getElementById("email").value;
//     var City= document.getElementById("city").value;
//     var Town= document.getElementById("town").value;
//     var Country= document.getElementById("country").value;
//      document.write("YOUR PERSONAL INFO : <BR>" + "FIRST NAME : "+fname+"<br>");
//      document.write("LAST NAME : "+lname+"<br>" +"<br>");
//      document.write("LOCATION : "+pob+"<br>");
//      document.write("CONTACT : "+contact+"<br>");
//      document.write("EMAIL : "+mail+"<br>" +"<br>");
//      document.write("YOUR ADDRESS INFO : <BR>" + "House.No : "+houseno+"<br>");
//        document.write("STREET NAME : "+street+"<br>");
//        document.write("COUNTRY : "+Country+"<br>");
//        document.write("CITY : "+City+"<br>");
//        document.write("TOWN : "+Town+"<br>");
// }
    // var fname= document.getElementById("firstname").value;
    // var lname= document.getElementById("lastname").value;
    // var pob= document.getElementById("place").value;
    // var contact= document.getElementById("number").value;
    // var mail= document.getElementById("email").value;
    // var houseno= document.getElementById("hseno").value;
    // var street= document.getElementById("stname").value;
    // var mail= document.getElementById("email").value;
    // var City= document.getElementById("city").value;
    // var Town= document.getElementById("town").value;
    // var Country= document.getElementById("country").value;
var submitbtn=document.getElementById("submit");
var check2=document.getElementById('check2');

submitbtn.addEventListener('click',function getdata(e){
    e.preventDefault();
    form2.style.display='none';
    check2.style.backgroundColor='black';
    var fname= document.getElementById("firstname").value;
    var lname= document.getElementById("lastname").value;
    var pob= document.getElementById("place").value;
    var contact= document.getElementById("number").value;
    var mail= document.getElementById("email").value;
    var houseno= document.getElementById("hseno").value;
    var street= document.getElementById("stname").value;
    var mail= document.getElementById("email").value;
    var City= document.getElementById("city").value;
    var Town= document.getElementById("town").value;
    var Country= document.getElementById("country").value;
     document.write("YOUR PERSONAL INFO : <BR>" + "FIRST NAME : "+fname+"<br>");
     document.write("LAST NAME : "+lname+"<br>" +"<br>");
     document.write("LOCATION : "+pob+"<br>");
     document.write("CONTACT : "+contact+"<br>");
     document.write("EMAIL : "+mail+"<br>" +"<br>");
     document.write("YOUR ADDRESS INFO : <BR>" + "ADDRESS : "+houseno+"<br>");
       document.write("STREET NAME : "+street+"<br>");
       document.write("COUNTRY : "+Country+"<br>");
       document.write("CITY : "+City+"<br>");
       document.write("TOWN : "+Town+"<br>");
});


    let check= document.getElementById("btn-1");
    var form1=document.getElementById('form1');
    var form2= document.getElementById('form2');
    var check1=document.getElementById('check1');
    check.addEventListener('click', function step1(e){
        e.preventDefault();
        console.log(1);
     form1.style.display='none'; 
     form2.style.display='block';
     form2.style.marginLeft='20px';
     check1.style.backgroundColor='black';
    }) ;

    // var submitbtn=document.getElementById("submit");
    // submitbtn.addEventListener('submit',function done(e){
    //     console.log(2);
    //        e.preventDefault();
    //     form2.style.display='none';
    // });
    
