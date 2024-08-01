                //  Javascript is a Dynamic language (freely typed like Python)
                //  it can be changed as Static  By Using  TypeScript Framework






//   alert("Hi");

// - SingleLine Comment
/* - MultiLineComment -  */

console.log("Hi");
console.log(12345);
console.log(123.45);
console.log("True");
console.log([20,30,40,50]);


console.log({f_name : 'Arvin' , l_name : 'kritik' , age:18});

// if want this in Table form 

console.table({fname:"Arvin" , l_name:"kritik" , age:18});

// For error msge in error format

console.error("Custom Sample Error");

// For warning msge in warning format

console.warn("Custom Sample Warning");

// To Clear the Console 

console.clear();

// Timer program to Check the run time of code

console.time("Timer");
for(i=0;i<10;i++) 
{
    console.log(i);
}
console.timeEnd("Timer");

/*   variable declaration  :
              1.  Var
              2.  Let
              3.  Const


*/

// Var :-  

 
var a=25;
var b=30;
console.log(a+b);    // to get ans
console.log("a+b");  // to get the expression

//  1. Scope :-
   //  In Var:-

      var a=25;
      var b=30;
      console.log(a+b);
      
      if(true)
      {
          var msge="Welcome";
          console.log(msge);
      }
          console.log(msge);   

          // It prints both console msges , but not same for  Let and Const !

      // In var  , it acts as a Global scope so wherever we ask output it comes !

      // But in Let and Const , the msge which is declared inside the  Curly Braces will only provide Output !

//  2. variable  REDeclaration  :-
    //  Var:-
    
    var a= 25;
    console.log(a);

    var a=45;
    console.log(a);

    // In Var we can do redeclaration !

    // in Let it will not accepts it , only ione time declared   !

    // in Const also it will not accepts it , only one time declared  !


// Value  Assignment and ReAssignment !

// var

var a=25;
console.log(a);

a=50;
console.log(a);

// for  Var it will reassign !

//  for  Let also it will reassign !

// for Const it will not Normal variables like above Examaple !
// it works for  array and table forms of datas !!

const student = {fname:"Arvin" , age:10}
console.log(student);
console.table(student);

// Now Reasssigning !!

student.fname = "Unknown";

console.log(student.fname);
console.table(student);

/* Datatypes include :
 
1.  Primitive:
      Numbers (whole, decimal) , Boolean , Null , Unspecified , String , Symbols !

2.  Reference types:
      Arrays , Objects , Date and time , Functions !

      */

// Finding datatypes  Using  (typeof):-

var a=25;
console.log(typeof a);  

var a="Arvin";
console.log(typeof a);

var a=25.5;
console.log(typeof a);  

var a=null;
console.log(typeof a);  


var isMarried=true;                 
console.log(typeof isMarried);


// Symbol function  always gives  different values !

const s1= Symbol();
console.log(s1);

const s2= Symbol();
console.log(s2);

console.log(s1==s2);

// Reference 
// Using Array
var Courses = ["Java" , "C" , "Python"];
console.log(typeof Courses);

// Using  Object data
var Datas = { fname :  "Arvin" , age:10 ,
              Nname :  "kritik" , age : 15

}
console.log(typeof Datas);

// Using Date and Time Function
var Time = new Date();
console.log(typeof  Time);

console.log(Time);

// We can also Declare like this -

var a;
a= 10;
console.log(a, typeof a);

// Type Conversion

// Converting it into 2 types :-

// 1st Type
var a=10;
a = String(a);
console.log(a,typeof a);

// 2nd Type
var a=20;
a = a.toString();
console.log(a, typeof a);



// Date function to  String

var a= new Date();
console.log(a,typeof a);

a = a.toString();
console.log(a, typeof a);


// to Number();

var a="Arvin";
a = Number(a);
console.log(a,typeof a);

var a="25";
a = Number(a);
console.log(a,typeof a);


// Decimal to Integer

var a=25.5;
console.log(a,typeof a);

a= parseInt(a);
console.log(a,typeof a);


// normal to Float value

var  a=10.10;
console.log(a,typeof a);

a= parseFloat(a);
console.log(a,typeof a);


// Type CoErcion

var a="25";
var b=15;
console.log(a+b);

// to  concatenate both 

a=Number(a);
console.log(a+b);

// Now it is concatenated

















































































































































































































































