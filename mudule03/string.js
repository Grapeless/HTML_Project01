//定义字符串（对象）
//1.var 变量名 = new String("...");
//2.var 变量名 = "...";

//属性
//length

//方法
//1.charAt(index )  //获取指定位置的字符
//2.indexOf(string ) //获取所检索字符所在位置
//3.trim()
//4.subString(startIndex , endIndex(exclusive) )
var str = " a bc  ";
var strTrim = str.trim();
console.log(str.length);
console.log(str.charAt(1));
console.log(str.indexOf('a'));
console.log(strTrim);
console.log(str.substring(1,4));

