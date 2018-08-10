
    var value = getParameter("keyword");
    var sql = "select DOMAINID, `ITEM_名称`,`ITEM_拼音码`,`ITEM_编码` from `tlk_商品类型信息`  where `ITEM_名称` like '%" + value + "%' or `ITEM_拼音码` like '%" + value + "%' limit 0,10";
println(sql);
    var options = createOptions();
   options, add("", "");
    var query = queryBySQL(sql);
    println(sql);
    if (query != null) {
        var iter = query.iterator();
        for (var iter = query.iterator(); iter.hasNext();) {
            var sub = iter.next();
            var name = sub.getItemValueAsString("名称");
            var code = sub.getItemValueAsString("编码");
            var pin = sub.getItemValueAsString("拼音码");
            options, add(name, code);
        }
    }
    options;
