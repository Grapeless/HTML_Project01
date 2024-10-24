//DOM 文档对象模型，将标记语言的各个组成部分封装为对应的对象
//Document，Element，Attribute，Text，Comment

//Document对象获取：通过window对象
let docObj = window.document;

//Element对象获取：通过Document对象
//1.据id属性获取，id属性值在规范写法中唯一，故得到的对象也唯一
let eleObj1  = docObj.getElementById('img1');
//2.据标签名获取,返回一个element对象数组
let eleObjArray1 =docObj.getElementsByTagName('img');
//3.据name属性获取，返回一个element对象数组
let eleObjArray2 = docObj.getElementsByName('')