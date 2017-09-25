var car = "Fiat";
var carobj = {type:"Fiat", 
              model:"500", 
              color:"white", 
              write:function()
              {
                return this.type + " " + this.model + " " + this.color;
              }
             };

function ChangeText(text)
{
  document.getElementById("testtext").innerHTML = text;
}

function WriteToHTML()
{
  document.write("Writing to HTML");
}

function Add(x, y)
{
  document.getElementById("testtext").innerHTML = x + y;
}

function ChangeObject(object)
{
  document.getElementById("testobj").innerHTML = object.write();
}


function Validate()
{
  var nameBox = document.getElementById("nameBox");
  var phoneBox = document.getElementById("phoneBox");
  
  if(document.getElementById("phoneBox").value == ""){
    document.write("Number missing!");
  }else{
    if(phoneBox.validity.patternMismatch == false){
      document.write("Good phone number");
    }else{
      document.write("Bad phone number!");
    }
  }
}