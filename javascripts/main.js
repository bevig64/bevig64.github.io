Bmob.initialize("ffeb409183729c1a7566afde03f7d177", "4e3faee2d71b4ec901bb759a6dea5284");
//获取一行数据

var count = Bmob.Object.extend("test");
var query = new Bmob.Query(count);
query.get("a9Zz444W", {
  success: function(object) {
    // The object was retrieved successfully.
    alert(object.get("test1"));
  },
  error: function(object, error) {
    alert("query object fail");
  }
});
