const Procedimiento = (text, map, map2) => {
    var $resul = new String();
    var $i, $j, $c, posicion, fila1; //27
    let $minus = text.toLowerCase();



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
        } else {
            posicion = map.indexOf($c);
            $j = posicion + posicion - posicion;
            fila1 = map2[$j];
            console.log(fila1)
            $resul += fila1; //!+
        }
    }
    return $resul;
}
const enCRIPTADO = (text) => {
    var $resul = new String();
    let formula = ["!-", "!+", "!+-", "!++", "!++-",
        "/-", "/+", "/+-", "/++", "/++-",
        "#-", "#+", "#+-", "#++", "#++-",
        "$-", "$+", "$+-", "$++", "$++-",
        "%-", "%+", "%+-", "%++", "%++-",
        "&-", "&+", " "
    ];
    $resul = Procedimiento(text, "abcdefghijklmnñopqrstuvwxyz ", formula);
    return $resul;
}

const Pro2 = (text) => {
    var $resul = new String();
    let contador, var2, x3;
    let matris = {
        fila: ['a', 'b', 'c', 'd', 'e'], //FILA 1 (!) = 0
        fila2: ['f', 'g', 'h', 'i', 'j'],
        fila3: ['k', 'l', 'm', 'n', 'ñ'],
        fila4: ['o', 'p', 'q', 'r', 's'],
        fila5: ['t', 'u', 'v', 'w', 'x'],
        fila6: ['y', 'z', '', '', ''] //FILA 2 (/)
    };
    var $i, $c, posicion2 = -1;



    let banderaf1 = false,
        banderaf2 = false,
        banderaf3 = false,
        banderaf4 = false,
        banderaf5 = false,
        banderaf6 = false,
        max = -1;


    for ($i = 0; $i < text.length; $i++) {
        max++;
        $c = text.charAt($i);

        if (banderaf1 === true && $c != "+" && $c != "-" && max <= text.length) {
            $resul += matris.fila[posicion2];

        }
        if (banderaf2 === true && $c != "+" && $c != "-" && max <= text.length) {
            $resul += matris.fila2[posicion2];

        }
        if (banderaf3 === true && $c != "+" && $c != "-" && max <= text.length) {
            $resul += matris.fila3[posicion2];

        }
        if (banderaf4 === true && $c != "+" && $c != "-" && max <= text.length) {
            $resul += matris.fila4[posicion2];

        }
        if (banderaf5 === true && $c != "+" && $c != "-" && max <= text.length) {
            $resul += matris.fila5[posicion2];

        }
        if (banderaf6 === true && $c != "+" && $c != "-" && max <= text.length) {
            $resul += matris.fila6[posicion2];

        }
        if ($c === ' ') {
            banderaf1 = false;
            banderaf2 = false;
            banderaf3 = false;
            banderaf4 = false;
            banderaf5 = false;
            banderaf6 = false;

            posicion2 = -1;
            $resul += " ";
        }
        if ($c === '!') {
            banderaf1 = true;
            banderaf2 = false;
            banderaf3 = false;
            banderaf4 = false;
            banderaf5 = false;
            banderaf6 = false;

            posicion2 = -1;
            $resul += "";
        }
        if ($c === '/') {
            banderaf1 = false;
            banderaf2 = true;
            banderaf3 = false;
            banderaf4 = false;
            banderaf5 = false;
            banderaf6 = false;

            posicion2 = -1;
            $resul += "";
        }
        if ($c === '#') {
            banderaf1 = false;
            banderaf2 = false;
            banderaf3 = true;
            banderaf4 = false;
            banderaf5 = false;
            banderaf6 = false;

            posicion2 = -1;
            $resul += "";
        }
        if ($c === '$') {
            banderaf1 = false;
            banderaf2 = false;
            banderaf3 = false;
            banderaf4 = true;
            banderaf5 = false;
            banderaf6 = false;

            posicion2 = -1;
            $resul += "";
        }
        if ($c === '%') {
            banderaf1 = false;
            banderaf2 = false;
            banderaf3 = false;
            banderaf4 = false;
            banderaf5 = true;
            banderaf6 = false;

            posicion2 = -1;
            $resul += "";
        }
        if ($c === '&') {
            banderaf1 = false;
            banderaf2 = false;
            banderaf3 = false;
            banderaf4 = false;
            banderaf5 = false;
            banderaf6 = true;

            posicion2 = -1;
            $resul += "";
        } else if ($c === '-') {
            posicion2 += 1;
        } else if ($c === '+') {
            posicion2 += 2;
        }
        if (max === (text.length - 1)) {
            // $resul += matris.fila[posicion2];
            if (banderaf1 === true) {
                $resul += matris.fila[posicion2];
            } else if (banderaf2 === true) {
                $resul += matris.fila2[posicion2];
            } else if (banderaf3 === true) {
                $resul += matris.fila3[posicion2];
            } else if (banderaf4 === true) {
                $resul += matris.fila4[posicion2];
            } else if (banderaf5 === true) {
                $resul += matris.fila5[posicion2];
            } else if (banderaf6 === true) {
                $resul += matris.fila6[posicion2];
            }

        }
        console.log($resul);

    }



    return $resul;
}
const desCRIPTADO = (text) => {
    var $resul = new String();
    $resul = Pro2(text);
    return $resul;
}




const codificarR13 = () => document.getElementById("resultado").innerHTML = enCRIPTADO(document.getElementById("cadena").value);

const descodificarR13 = () => document.getElementById("resultado2").innerHTML = desCRIPTADO(document.getElementById("cadena2").value);