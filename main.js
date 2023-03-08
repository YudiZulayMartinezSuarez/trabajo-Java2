/*Un objeto de expresión regular o cualquier objeto que tenga un método Symbol.match.
Si regexp no es un objeto RegExp y no tiene un método Symbol.match, se convierte implícitamente en RegExp usando new RegExp(regexp).*/

const csLewisQuote = 'zulay martinez suarez.';
const regex1 = /are/;
const regex2 = /eat/;

csLewisQuote.match(regex1); 
csLewisQuote.match(regex2);