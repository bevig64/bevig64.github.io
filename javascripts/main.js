Bmob.initialize("ffeb409183729c1a7566afde03f7d177", "4e3faee2d71b4ec901bb759a6dea5284");


function showact(){
   var re=document.getElementById('result');
   var tablelist=document.getElementById('actlist');
   var ul=document.createElement("ul");
   tablelist.appendChild(ul);
   var list=Bmob.Object.extend("activ");
   var alllist=new Bmob.Query(list);
  //  alllist.find({
  //    success:function(results){
  //      var text1="共查到"+results.length+"条记录";
  //      var txt1=document.createTextNode(text1);
  //      re.appendChild(txt1);
  //      for(var i=0;i<results.length;i++){
  //        var object=results[i];
  //        var li=document.createElement("li");
  //        var text2="活动名称:"+object.get("a_name")+"<br> 活动介绍:"+object.get("a_introduce")+"<br> 联系方式:"+object.get("a_phonenum")+"<br>";
  //        var txt2=document.createTextNode(text2);
  //        li.appendChild(txt2);
  //        ul.appendChild(li);
  //      }
  //  }
    //  error:function(error){
    //    alert("未查询到结果！");
    //  }
  //  });
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
