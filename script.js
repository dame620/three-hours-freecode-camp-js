
/*
 i++ <=> i=i+1
 i-- <=> i=i-1
 i+=2 <=> i=i+2
 i-=2 <=> i=i-2
 */

var myarray_to_push = [["john", 3], ["jean", 5]]

var aray_after_push = myarray_to_push.push("sava")


/*push permet d'ajouter un element à la fin d'un tableau */

var my_array_for_pop = [["john", 3], ["jean", 5]]

my_array_for_pop.pop()
/*pop permet de supprimer le dernier element d'un tableau */

var my_array_for_shift = [["john", 3], ["jean", 5]]

var array_shifted = my_array_for_shift.shift()
/*shift permet de supprimer le premier element d'un tableau*/


var my_array_for_unshift = [["john", 3], ["jean", 5]]

var var_for_un_shifted = my_array_for_unshift.unshift(["salue", "sava", "et vs"])


//si on a une fonction qui contient des console.log alors pour afficher au niveau 
//du console les valeurs en console.log alors on fait un simple appel de la fonction 
//ms si y'a un return on fait un console.log de la fonction lors de l'appel pour afficher sur
//le console la valeur du return ms un console.log de la fonction lors de l'appel n'empeche
//pas les console.log à l'interieur de la fonction de s'afficher correctement


/*PORTÉ DES VARIABLES EN JS */
/*SI UNE VARIABLE EST DÉCLARER EN DEHORS D'UNE FONCTION ALORS ELLE EST DITE DE PORTÉ GLOBAL */

//EXEMPLE

var my_last_name = "ndiaye";

function my_familly_name(name){

    return "je m'appel " + name + " mon nom de famille " + my_last_name
}

var my_familly_fonction = my_familly_name("dame")

console.log(my_familly_fonction)

/*si une variable est defini à l'interieur d'une fonction alors sa porté reste à l'interieur
de cette fonction sauf si on defini la variable sans le mot var*/

/*exemple*/

function my_country(){
    var my_country_name = "senegal"
    my_country_code = "SN"

   console.log("je m'appelle dame" + " j'habie " + my_country_name) 

}

my_country()

/*console.log(my_country_name)  ce  variable n'est pas accessible à l'exterieur*/

/*console.log(my_country_code) the variable inside the function is accessible here*/


/*une variable declarer à l'interieur d'une fonction et redefini à l'exterieur */


var my_school_name = "CEM A"
var my_school_location = "dakar"
function my_school(){
    var my_school_name = "CEM B"

    my_school_location = "lambaye"

    return my_school_name  +  " " + "is loccated" +  " " + my_school_location
}

console.log(my_school())

console.log(my_school_name)

console.log(my_school_location)

/*une variable redefini à l'interieur d'une valeur à l'interieur de cette fonction
mais si sa valeur est redefini avec le mot var cette changement reste juste à l'interieur de la fonction
ms si cette variable est redefini sans un mot devant le changement se propage meme à l'exterieur ainsi sa 
nouvelle valeur devient sa valeur redefini dans la fonction
*/

/*petit exo creons une fonction qui prend en param un array et un nombre ajoute
le nombre au array et puis un supprime et retourne le premier element du array*/

function nextInLine(arr, item){
    arr.push(item)
    return arr.shift()
}

var testArr = [1,2,5,8]

console.log("before", JSON.stringify(testArr))

console.log(nextInLine(testArr, 7))

console.log("after", testArr)

/*remarque on se rend compte que la valeur du array subit les modifs de la fonction 
et sa valeurs final il se comporte comme une variable redéfinie*/


function switch_value(val){
    answer = ""

    switch(val){
        case 1:
            answer = "my value is one"
            break

        case 2:
            answer = "my value is two"
            break
            case 3:
            case 4:
            case 5:
                answer = "my value is between 3 4 5"
                break
        default:
            answer = "different des deux"
            break
    }

    return answer
}

console.log(switch_value(3))

function get_number_puissance(a, b){
    if(a < 0 || b < 0){
        return undefined
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(a), 2))

}

console.log(get_number_puissance(3, 5))

var count = 0;

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count ++
        break

        case 10:
        case "A":
        case "J":
        case "K":
        count --
        break
    }
    var holdbet = "hold"
    if(count > 0){
        holdbet = "bet"
    }
    return count + " is " + holdbet
}


console.log(cc("Q"))


var my_dog ={
    name: "sha",
    "taile": 1,
    color: "black",
    5: "family numbers in life"
}

var number_five = 5

//pour recuperer un element d'un objet on peut utilisé le point
//dans ce cas on mettra propriété sans double quote
console.log(my_dog.taile)

console.log(my_dog.name)

//en recuperant avec des crochets on mettra double quote avec 
console.log(my_dog["name"])

console.log(my_dog["taile"])
//recuperation de la valeur d'une propriété d'un objet qui est un nombre
console.log(my_dog[number_five])

console.log(my_dog[5])

//mettre à jour or update propriété d'un objet

my_dog.name = "sha sha"

//ajouter une propriété à un objet

my_dog.pseudo = "shoo shoo"


delete(my_dog.pseudo)

console.log("my new dog", my_dog)

//ici on utilise un objet en remplacement de switch
var result = ""

function get_country_capital(val){
    lockup = {
        "senegal": "dakar",
        "gambie": "banjul",
        "mali": "bamako",
        "ghana": "accra"
    }

    result = lockup[val]

    return result
}

console.log(get_country_capital("gambie"))

//create a function that check if  the object has an proprity

var my_obj={
    "name": "dog",
    "gender": "male",
    "age": 3
}

function is_the_proprity_in_my_object(val){
    if(my_obj.hasOwnProperty(val)){
        result = my_obj[val]
    }else{
        result = val + " " + "not found"
    }

    console.log(result)
    return result
}

is_the_proprity_in_my_object("rang")


//creation d'une fonction qui increment un nombre count 
//si la valeur de la variable passer en parametre est paire
//decrementer si le nombre passer en parametre est impaire

function increment_or_decrement(value){
    var count = 0
    if(!(value % 2)){
        count ++
    }
    else{
        count--
    }
  return count
}


console.log(increment_or_decrement(5))



var collection = {
    "2548": {
        "album": "slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "let in Rock",
            "You give love a bad NAME"
        ]
    },
    "2568": {
        "album": "1999",
        "artist": "prince",
        "tracks": [
            "1999",
            "Little red corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA GOLD"
    }
}


var collectionCopy = JSON.parse(JSON.stringify(collection))


/*
L'exercice est simple on a un objet appelé collection cette objet contient
des propriété qui ont des valeurs nous voulons mettre à jour les propriété 
en procédant comme si la valeur d'une propriété n'est pas rensigné on supprime cette propriété
s'il est renseigner mais egale à un array on push la val au array
sinon la valeur de la propriété sera egale à la nouvelle valeur
*/
function update_record_value(id, prop, val){
    if(val === "" || val === null || val === undefined){
        delete collection[id][prop]
    } else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || []
        collection[id][prop].push(val)
    }
    else {
        collection[id][prop] = val
    }
    return collection
}
console.log(update_record_value("2548", "artist", "bob dylan"))


//while loop

var i = 0

var my_array_for_while = []
while(i < 5){
    my_array_for_while.push(i)

    i++
}

console.log(my_array_for_while)

var my_array_for = []

for(i = 0; i < 10; i+=2){
    my_array_for.push(i)
}

console.log("my_array_for", my_array_for)

//on peut avoir un for en commencant par le max et decrementer
var second_array = []

for(var i = 10; i >0 ; i-=2){
    second_array.push(i)
}


console.log("second_array", second_array)

//itérate throught an array
//cette algo permet de calculer la somme des nombres contenu dans  un tableau

var ourTotal = 0
var ourArr = [6, 7,9]
for(i =0 ; i < ourArr.length; i++){
    ourTotal += ourArr[i]
}

console.log("our total", ourTotal)


//NESTING FOR LOOP
//ici on aura un algo qui va prendre chaque element du tableau et le multiplier par un nombre
//à la fin on retourne resultat du produit

var our_complexe_array = [[4, 5], [6, 7, 9], [5, 7]]

var product =1

function multiply_value(arr){
   
    for(var i = 0;  i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }

    return product
}


console.log("complexe array iteration",multiply_value(our_complexe_array))


var prod = 1;

function other_way_multiply_array(arr){
    for(var i = arr.length - 1; i >= 0 ; i--){
        for(var j = arr[i].length -1; j >= 0; j--){
            prod *= arr[i][j]
        }
    }

    return prod
}
var our_complexe_array_two = [[4, 5], [6, 7, 9], [5, 7]]

console.log("other way",other_way_multiply_array(our_complexe_array_two))


console.log(prod)

//do while instruction
//comparaison do while and while

//ici l'instruction de push dans le array ne sera jamais effectuer car la condition du while 
//n'est point remplie
var i = 10;
var my_arr_do_while = []

while(i < 5){
    my_arr_do_while.push(i);
    i++;
}


console.log(i, my_arr_do_while)

//with do while 
//ici la valeur de j sera stocké dans le arrau$y puis il fait un j++ avant de checker le while
//la valeur de j sera 11 et le tableau contiendra un element
my_arr_do_while_two = []
j= 10
do {

    my_arr_do_while.push(j);
    j++;

} while(j < 5)

console.log("do while values", j , my_arr_do_while)


//PROFILE LOCKUP
 //EXERCICE
 var array_od_object = [
    {
        "firstName": "modou",
        "lastName": "diop",
        "phone": "7776767777",
        "likes": ["music", "danse", "accapela"]

    },
    {
        "firstName": "abdou",
        "lastName": "sall",
        "phone": "777677827",
        "likes": ["chant", "basket", "foot"]
    },
    {
        "firstName": "modou",
        "lastName": "diop",
        "phone": "777676111",
        "likes": ["baseball", "football", "lecture"]
    }
 ]


 function lookup_profil(name, prop){
    for(var i = 0; i < array_od_object.length; i++ ){
        if(array_od_object[i]["firstName"] == name){
            return array_od_object[i][prop] || 'no such proprity'   
        } else{
            return "no such contac"
        }
    }
 }


 var data = lookup_profil("modou", "likes")


 console.log("data passing on array", data)

//GENERATE RANDOM FUNCTION
//Math.floor effectue un arrondie par defaut 
//Math.random fournit un nbre aléatoire entre 0 et 1
function Randomfraction(){
    return Math.random()
}


console.log("random number", Randomfraction())

var randomNumberBetween0to19 = Math.floor(Math.random()*20)

console.log("number between zero and nighttenn", randomNumberBetween0to19)

//this function render a number between ourmin and our max
function randombeetweenminandmax(ourmin, ourmax){
    return Math.floor(Math.random() * (ourmax - ourmin +1)) + ourmin
}

console.log("NUMBER BETWEEN MIN MAX",randombeetweenminandmax(4, 9))

//parseInt FOR CONVERTING STRING TO NUMBER

console.log("THE INTIGER VALUE",parseInt("2346"))


//parseInt with a redux
//ici on a un binaire à convertir en entier
function convertIntoNumber(str){
    return parseInt(str, 2)
}

console.log("converted binary to int", convertIntoNumber("10011"))


//USING TERNARY OPERATOR with multiple ternary
function checkSigneNumber(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "null"
}


console.log("the number is: ", checkSigneNumber(3))


//difference entre var et let sont avec let on peut pas declarer 
//une variable deux fois 

//EXEMPLE
 var compare_var_and_let_var_declaratin = "first value"

 console.log("first value compre", compare_var_and_let_var_declaratin)

var compare_var_and_let_var_declaratin = "second value"

console.log("second value compre", compare_var_and_let_var_declaratin)


//on voie ici une erreur si la meme variable est declarer deux fois de suite
//let compare_var_and_let_let_declaration = "first value is"

//let compare_var_and_let_let_declaration = "first value is"



function checkVarScope(){
    var i = "function scope"
    
    if(true){
         i = "block scope"
        console.log("block scope i is", i)
    }

    console.log("function scope i is", i)

    return i
}
//on se rend compte que la fonction declarer avec var et sa valeur redefini à l'interieur
//du block if reste tjrs block scope car les variable declarer avec var dans une fonction
//ont une portée globale dans toute cette fonction càd si leur valeur change à l'interieur du if
//on retrouve cette valeur en dehors du if
//console.log(checkVarScope())


function checkLetScope(){
    let i = "function scope"
    if(true){
        let i = "block scope"
        console.log("block scope for let i is", i)
    }

    console.log("function scope for let i is", i)

    return i
}

console.log("==lescope", checkLetScope())
//si une variable est declarer avec le mot let à l'interieur d'une block alors sa porté 
//reste à l'interieur de ce bloque il ne sera pas visiible à l'exterieur de ce block


//DECLARE A READ ONLY VARIABLE WITH CONST
//FOR EXAMPLE 
/*Ceci est impossible car il est impossible de reassigner une variable declarer avec const
const MYCONST = "test"
MYCONST = "test test"
*/

//MUTATE AN ARRAY DECLAARED WITH const


const MY_ARRAY_FOR_MUTATE = [4, 6, 9]

function mutateArray(){
    /* impossible de changer les valeur d'un tableau comme suit
    MY_ARRAY_FOR_MUTATE = [6, 7, 2]
    */
   //par contre ceci est possible
   MY_ARRAY_FOR_MUTATE[0] = 6
   MY_ARRAY_FOR_MUTATE[1] = 2
   MY_ARRAY_FOR_MUTATE[2] = 7

   return MY_ARRAY_FOR_MUTATE
}


console.log(mutateArray())

//PREVENT OBJECT MUTATION

//object.freeze

function freezeOBJ(){
    //use strict permet de capturer les erreurs de syntax et autres...
    "use strict"
    const MATH_CONSTANT = {
        PI: 3.14
    }
    //ici vu que la valeur de pi est inchangeable on utilise Object.freeze() pour eviter
    //que l'object change 

    //ceci permettra d'eviter le changement de la valeur de pi et rentrera directement dans 
    //le catch et nous retourne la valeur de pi de depart
    
    Object.freeze(MATH_CONSTANT)
    try{
        MATH_CONSTANT.PI = 4.567
    } catch(e){
        console.log(e)
    }

    return MATH_CONSTANT;
}

//console.log(freezeOBJ())

//USE ARROW FUNCTION TO WRITE CONCISE ANONYMOUS FUNCTION

//DEPUIS LE DEBUT LORSQU'ON ECRIT FUNCTION ON LE FAIT SUIVRE DU NOM DE LA FONCTION 
//MS LORSQU'ON ECRIT FUNCTION SANS LE SUIVRE DU NOM DE LA FONCTION ON A UN ANONYMOUS FUNCTION

//EXEMPLE

var magic = function(){
    return new Date();
}
 //pour simplifier on peut utiliser un arrow function
 var magic = ()=>{
    return new Date();
}

//si il ne retourne qu'une seul ligne on peut simplifier comme suit en enlevant return et
//les crochets

var magic = () => new Date();

console.log(magic())


//WRITE ARROW FUNCTION WITH PARAMETERS

//ICI NOTRE OBJECTIF C'EST D'ECRIRE UNE FUNCTION QUI PREND EN PARAMETRES DEUX TABLEAUX
//LE RESULTAT QU'IL RETOURNE EST LE MERGE DES DEUX TABLEAUX AVEC LA FONCTION CONCAT

const my_concat = function(arr1, arr2){
    return arr1.concat(arr2)
}
//AUTRES FACON D'ECRIRE LA FONCTION
const my_concats = (arr1, arr2) => arr1.concat(arr2)

console.log(my_concats([3,5,6], [7, 3, 6]))

//write higher order arrow functions

const realNumberArray = [6, 7, -5, 7.3, 6, -9, -7.8]


//ici on a utilisé fonction arrow et fonction anonyme en simple juste

const realInteger = (arr)=>{
    const positive_vaue_multiply = arr.filter(num => Number.isInteger(num) && num > 0 ).map(function(x){ return x * 3} )
    return positive_vaue_multiply
}

//filter sur un array permet de prendre chaque element du tableau et retourne les elements
//du tableau qui retourne la condition defini au niveau du return de la arrow function que filter
//prend en parametre retourne

//map permet de manipuler des elements d'un tableau il prend chaque element et retourne les elements
//avec l'operation effectuer dessus
console.log(realInteger(realNumberArray))

const increment = (function(){
    return function increment(num, value = 1){
        return num + value
    }
})()


console.log(increment(5, 3))

//USE THE REST OPERATOR WITH FUNCTION PARAMETERS

//rest operator nous permet de creer une fonction qui prend un nbre d'argument variable


const sum = (function(){
    return function sum(x, y, z){
        const args = [x, y, z]
        return args.reduce((a, b) =>a + b, 0);
    }
})();
//la methode reduce est un accumulateur il prend en parametre un callback et un initiale
//il prend chaque valeur de notre array il applique notre operation + ici  sur le resultat
// trouver on applique une operation similaire dessus ainsi de suite ...
console.log(sum(3, 5, 7))

//aulieu de proceder ainsi on peut tenter de faire avec une fonction en utilisant rest operator
//ainsi on va pas specifier le nbre de parametres avec ...args on va avoir tous ce qui sera renseigner
//en parametres stocké dans une array appelé args 
//le ...args nous permet deux simplifier deux chose tous ce qui est passer en params est directement 
//stocké dans un array appelé args et on peut renseigner le nbre de parametres que l'on veut
const sums = (function(){
    return function sums(...args){
        return args.reduce((a, b) =>a + b, 0);
    }
})();

console.log(sums(5, 6, 8, 9))

//USE SPREAD OPERATOR TO EVALUATE ARRAYS IN PEACE

const arr1 = ["mengo", "salade", "potato", "apple"];
let arr2;

(function(){
    arr2 = arr1;
    arr1[0] ="orange"
})();

console.log(arr2);
//ic on constate que lorsqu'on change une valeur du arr1 on observe ce changement au niveau du arr2
//car arr2 est textuellemnt egale à arr1

//POUR EVITER un tel comportement on peut utiliser un spread oprator ...suivi d'un array permet
//de recuperer le contnu du array

(function(){
    arr2 = [...arr1];
    arr1[0] ="banana"
})();
//ici ...arr1 permet de recuperer l contenu du arr1 que l'on stock dans une autre array arr2
//donc tt changement du arr1 n'affecte pas le arr2
console.log(arr2)

//USE DESTRUCTING ASSIGNEMENT TO ASSIGN VARIABLES FROM OBJECTS
var voyel = {x: 3.6, y: 7.4, Z: 6.54 }

//on a un moyen simple d'assigner les contenu de l'objet à des variabls
//ancienne methode 
/*
var a = voyel.x

var b = voyel.y

var c = voyel.z*/

//nouvelles et forme simple pr faire la meme chose 
//this is the destructuring syntaxe

const { x: a, y: b, z: c } = voyel 

const AVG_TEMPERATURES ={
    today: 77.5,
    tomorrow: 79
}

//Ici on crée une fonction qui permet de recuperer la temprature de demain

const gettempoftmrw =function (avgtemperatures){

    const { tomorrow: tempoftomorrow} = avgtemperatures

    return tempoftomorrow
}


const tempavg = gettempoftmrw(AVG_TEMPERATURES)

console.log("avg temp",tempavg)

//DESTRUCTERING ASIGNEMENT WITH NESTED OBJECTS

local_forecast = {
    today:{
        min: 72, 
        max: 83
    },
    tomorrow:{
        min: 73.3,
        max: 84.6
    }
}

function getmaxoftomorrow(forcast){
    const {tomorrow: { max: maxofTomorrow } } = forcast
    return maxofTomorrow
}

console.log(getmaxoftomorrow(local_forecast))

//USE DESTRUCTERING ASSIGNEMENT TO ASSIGN VARIABLES FROM ARRAYS

const [Z, X, , Y] = [1,2,3,4,5,6]

console.log(Y)

let ax = 8, bx=9;

(
    ()=>{
      return  [ax, bx] = [bx, ax]
    }
)();

console.log(ax)
console.log(bx)


//USE DESTRUCTERING ASSIGNEMENT with the rest operator

//ici nous voulons creer une fonction qui prend en parametre un tableau
//et supprime les deux premiers elements de ce tableau
const source =[1,2,3,4,5,6,7,8,9]

function deletefirstwoelements(list){
    const [ , , ...arr] =list
    return arr
}
const array_simplified = deletefirstwoelements(source)
console.log(array_simplified)

//USE DESTRUCTERING ASSIGNEMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETERS

//ici on veut creer une fonction qui prend en parametres max et max d'un objet et 
//return (stats.max + stats.min)/2
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.8,
    min: -0.75,
    average: 35.85

}

function half({max, min}){
    return (max + min) / 2.0;
}
console.log(half(stats))

const halfs =(function(){
    return function halfs({min, max}){
        return (min + max) / 2
    };
})();

console.log(halfs(stats))

//CREATE STRINGS USING TEMPLATE LITERALS

//ici on utilise  les backticks on a la possibilité 
//de mettre un chaine de caractere accompagné  de variables
//we can use multiple lines and also we can double quote and don't skipe them
const person = {
    name: "meda",
    age: 30
}

const greatings = `hello my name is ${person.name} i am 
${person.age} 
` 
console.log(greatings)


const result_list = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "line-break"],
    skipped: ["id-blacklist", "no-dup-keys"]
}


function makeList(arr){
    var resultDisplayArray = [];
    for(i = 0; i < arr.failure.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr.failure[i]}<\li>`);
    }
    return resultDisplayArray;
}

console.log(makeList(result_list));

//Write Concise Object litteral Declarations Using Simple Fields