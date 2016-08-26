window.onload=listload;
function listload(){
  alert(1);
  var re=document.getElementById('result');
  var tablelist=document.getElementById('actlist');
  // var ul=document.createElement("ul");
  // tablelist.appendChild(ul);
  var list=Bmob.Object.extend("activ");
  var alllist=new Bmob.Query(list);


  alllist.find({
    success: function(results) {
      var text1="共查到"+results.length+"条记录:";
      var txt1=document.createTextNode(text1);
      re.appendChild(txt1);
      // 循环处理查询到的数据
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var tr=document.createElement("tr");
        // var text2="<td>"+object.get("a_name")+"</td><td>"+object.get("a_introduce")+"</td><td>"+object.get("a_phonenum")+"</td>";
        // var txt2=document.createTextNode(text2);
        var td1=document.createElement("td");
        var t1=document.createTextNode(object.get("a_name"));
        td1.appendChild(t1);
        tr.appendChild(td1);

        var td2=document.createElement("td");
        var t2=document.createTextNode(object.get("a_introduce"));
        td2.appendChild(t2);
        tr.appendChild(td2);

        var td3=document.createElement("td");
        var t3=document.createTextNode(object.get("a_phonenum"));
        td3.appendChild(t3);
        tr.appendChild(td3);

        tablelist.appendChild(tr);
      }
    },
    error: function(error) {
      alert("查询失败: " + error.code + " " + error.message);
    }
  });
}
