var a=12;
var b= 23;
if (a>b)
{
    document.write("a is big");
}
else
{
    document.write("b is big"); 
}
document.write("<br>");
document.write("<h1>" + "looping statements" + "</h1>");
//for statements
/* syntax 
for(initialization;test condition;increment/decrement) */
document.write("<br>" + "javascript program to print numbers 1-10 using for loop");
for(i=1;i<=10;i++)
{
    document.write(i + "<br>");
}
//javascript functions
/* syntax 
function function_name(function parameters)
example as below */
function add(a,b)
{
return a+b;
}
document.write("<br>" + "sum= " + add(10,30));