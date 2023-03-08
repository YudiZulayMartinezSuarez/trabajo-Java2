/*si queremos reemplazar en una cadena de texto, una subcadena por otra, se usa generalmente el método replace. Este método admite para buscar una subcadena lo mismo un String que una RegExp. Veamos a continuación cómo se usa este método:*/
function str_replace($f, $r, $s){
    return $s.replace(new RegExp("(" + (typeof($f) == "string" ? $f.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&") : $f.map(function(i){return i.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")}).join("|")) + ")", "g"), typeof($r) == "string" ? $r : typeof($f) == "string" ? $r[0] : function(i){ return $r[$f.indexOf(i)]});
}