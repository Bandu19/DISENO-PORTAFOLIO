const Procedimiento = (text, map, map2) => {
    var $resul = new String();
    var $i, $j, $k, $c, posicion, fila1; //27
    let $minus = text.toLowerCase();

    //holá
    for ($i = 0; $i < $minus.length; $i++) { //hola mundo
        // $c = text.toLowerCase($i);
        $c = $minus.charAt($i); // ESPACIO
        //$minus = text.toLowerCase($c);
        //DEVUELVE UN NUMERO

        if ($c === ' ') {
            posicion = map2.indexOf($c); // "  "
            //4
            $j = posicion + posicion - posicion;
            fila1 = map2[$j];
            $resul += fila1;
        } else if ($c == 'a' || $c == 'b' || $c == 'c' || $c == 'd' || $c == 'e' || $c == 'f' || $c == 'g' || $c == 'h' || $c == 'i' || $c == 'j' || $c == 'k' || $c == 'l' || $c == 'm' || $c == 'n' || $c == 'ñ' || $c == 'o' || $c == 'p' || $c == 'q' || $c == 'r' || $c == 's' || $c == 't' || $c == 'u' || $c == 'v' || $c == 'w' || $c == 'x' || $c == 'y' || $c == 'z') {
            posicion = map.indexOf($c);
            $j = posicion + posicion - posicion;
            fila1 = map2[$j];
            console.log(fila1)
            $resul += fila1; //!+
        } else {
            $resul = 'Dentro del texto que ingreso hay algo diferente a una letra del abecedario, esto es un error y no se puede hacer la encriptacion'
        }
    }


    return $resul;
}
const enCRIPTADO = (text) => {
    var $resul = new String();
    let formula = ["!-,", "!+,", "!+-,", "!++,", "!++-,",
        "/-,", "/+,", "/+-,", "/++,", "/++-,",
        "#-,", "#+,", "#+-,", "#++,", "#++-,",
        "$-,", "$+,", "$+-,", "$++,", "$++-,",
        "%-,", "%+,", "%+-,", "%++,", "%++-,",
        "&-,", "&+,", " "
    ];
    $resul = Procedimiento(text, "abcdefghijklmnñopqrstuvwxyz ", formula);
    return $resul;
}

const Pro2 = (text, map3) => {
    var $resul = new String();
    var $i, $c, posicion2 = -1;
    var $resul = new String();
    let fila1, var2;
    var $i, $c, $j;

    let signos = ["!-", "!+", "!+-", "!++", "!++-",
        "/-", "/+", "/+-", "/++", "/++-",
        "#-", "#+", "#+-", "#++", "#++-",
        "$-", "$+", "$+-", "$++", "$++-",
        "%-", "%+", "%+-", "%++", "%++-",
        "&-", "&+", " "
    ];

    var separar = text.split(","); //,"#","$","%","&","/"
    for ($i = 0; $i < separar.length; $i++) {
        // $resul+="posicion "+$i+":     "+ separar[$i]+"\n" ; // IMPRIMES EL VALOR
        if (separar[$i] === '!-') {
            $j = $i + $i - $i;
            fila1 = "" + map3.charAt($j);
            $resul += fila1;
            console.log($resul);
        }else if(separar[$i] != ''){
            alert("UPS");
        }
        
    }

    return $resul;


}
const desCRIPTADO = (text) => {
    var $resul = new String();
    $resul = Pro2(text, "abcdefghijklmnñopqrstuvwxyz ");
    return $resul;
}




const codificarR13 = () => document.getElementById("resultado").innerHTML = enCRIPTADO(document.getElementById("cadena").value);

const descodificarR13 = () => document.getElementById("resultado2").innerHTML = desCRIPTADO(document.getElementById("cadena2").value);