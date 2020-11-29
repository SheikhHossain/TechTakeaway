function resturants(name,url,type,items) {
    this.name=name;
    this.url=url;
    this.type=type;
    this.items=items;
}
function item(name,restName,type,url){
    this.name=name;
    this.restName=restName;
    this.type=type;
    this.url=url;
}
var count=0;
var items =[];
items[count] = new item("Hamburger","McDonalds","fast food", "hamBurger.html");
count++;
items[count] = new item("Poutine","McDonalds","fast food", "EggDonalds-Poutine.html");
count++;
items[count] = new item("BeefStake","Deg","steak", "Deg-BeefSteak.html");
count++;
items[count] = new item("AmigosPizza","Amigos","Pizza", "AmigosPizza.html");
count++;
items[count] = new item("bnwSandwich","bnw","sandwich", "bnw-sandwich.html");

