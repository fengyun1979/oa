var process = new Packages.cn.myapps.core.dynaform.document.ejb.DocumentProcessBean(getApplication());
var params = new Packages.cn.myapps.base.action.ParamsTable();
var doc = new Packages.cn.myapps.core.dynaform.document.ejb.Document();
var formID = "11e8-9a52-7330bdf2-9cb0-3f7891e4208d";
doc.setFormid(fromId); //设置表单fromId
doc.setFormname('新联禽业OA/ERP系统管理/客户管理/客户信息/树'); //设置fromname的值
doc.setAuthor(user.getId()); //设置author值
doc.setCreated(getToday()); //设置created(表单创建的时间)
doc.setIstmp(false); //设置istmp的值
doc.setApplicationid(getApplication()); //设置applicationid的值
doc.setDomainid(user.getDomainid()); //设置domaidid的值
doc.addStringItem("", ""); //向字段原料名称里面 放值
doc.setId(uuid.getSequence()); //向字段  id 里面 放值(uuid.getSequence() 自动生成 id)
process.doCreate(doc); //执行方法 doCreate 向设定的表单里面添加数据 根据就是 formID
var id = getId();
var sql = "select a.DOMAINID,a.`ITEM_收货仓库`,b.`ITEM_商品名称`,b.`ITEM_单价`,b.`ITEM_数量` from  `tlk_入库单` as a inner JOIN `tlk_入库明细` as b on b.PARENT=a.ID  where PARENT='" + id + "'";
var query = queryBySQL(sql);
if (query != null) {
    for (var iter = query.iterator(); iter.hasNext();) {
        var sub = iter.next();
        var canku = sub.getItemValueAsString("收货仓库");
        var chang = sub.getItemValueAsString("商品名称");
        var sql="select * from tlk_";
        var query = queryBySQL(sql);if(query!=null){
        var iter  =query.iterator();
        if(iter != null && iter.hasNext()){
        doc = iter.next();
        rtn = doc.getItemValueAsString("");
         }
        }
        }
    }
