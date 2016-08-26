Bmob.initialize("ffeb409183729c1a7566afde03f7d177", "4e3faee2d71b4ec901bb759a6dea5284");


function showact(){
    var frame=document.getElementById('mainframe');
    frame.setAttribute("src","actlist.html");

}

function showsub(){
  var frame=document.getElementById('mainframe');

  frame.setAttribute("src","acsubmit.html");
}

function formsubmit(){

  var a_name=document.getElementById('a_name').value;
  var a_intruduce=document.getElementById('a_introduce').value;
  var a_phonenum=document.getElementById('a_phonenum').value;
  var act =Bmob.Object.extend("activ");
  var Act=new act();
  Act.set("a_name",a_name);
  Act.set("a_introduce",a_intruduce);
  Act.set("a_phonenum",a_phonenum);

  Act.save(null,{
      success: function(object) {

        //alert("create  success");
      },
      error: function(model, error) {
        alert("create object fail");
        return;
      }
    });
    alert("create  success");
}
