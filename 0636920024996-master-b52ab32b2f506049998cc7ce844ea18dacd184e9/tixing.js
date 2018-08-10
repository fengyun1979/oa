(function () {
    var process = new Packages.cn.myapps.core.dynaform.document.ejb.DocumentProcessBean(getApplication());
    var params = new Packages.cn.myapps.base.action.ParamsTable();
    var doc = new Packages.cn.myapps.core.dynaform.document.ejb.Document();
    doc.setFormid(fromId); //设置表单fromId
    doc.setFormname('新联禽业OA/ERP系统管理/客户管理/养殖批次/ERP客户养殖批次'); //设置fromname的值
    doc.setAuthor(user.getId()); //设置author值
    doc.setCreated(getToday()); //设置created(表单创建的时间)
    doc.setIstmp(false); //设置istmp的值
    doc.setApplicationid(getApplication()); //设置applicationid的值
    doc.setDomainid(user.getDomainid()); //设置domaidid的值
     //向字段原料名称里面 放值
    doc.setId(uuid.getSequence()); //向字段  id 里面 放值(uuid.getSequence() 自动生成 id)
    process.doCreate(doc); //执行方法 doCreate 向设定的表单里面添加数据 根据就是 formID
    var sql = "select * from `tlk_erp客户养殖批次` where `ITEM_批次编号`='YZPC-180807003'";
    var query = queryBySQL(sql);
    for (var iter = query.iterator(); query != null && iter.hasNext();) {
        var sub = iter.next();
        doc.setId(uuid.getSequence()); 
        doc.addStringItem("", "");
    }

})();
(function () {

   
 

    var query = queryBySQL(sql);
    var opts = createOptions();
    var roleid = getRoleIdByName("技术专员(电话)");
    


    var users = getUsersByRoleId(roleid);


    for (var iter = users.iterator(); users != null && iter.hasNext();) {
        var user = iter.next();
        opts.add(user.getName(), user.getName());
    }
    opts;
})();