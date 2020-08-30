# fct_element-size_js
Ce script permet de récupérer les valeurs numériques de la taille d'un élément du DOM.

## convertStrPixelsValueToFloat()

La fonction `convertStrPixelsValueToFloat()` permet de convertir une chaîne de caractères contenant une valeur en pixels.
- Exemples de valeurs :

`var px_val = "123px";`

`var px_val = "123.45px";`

`var px_val = "0.45 px";`

- Exemples de mauvaises valeurs :

`var px_val = "12 3px";`

`var px_val = ".45px";`

`var px_val = " .45 px";`

`var px_val = " 12.3px";`

`var px_val = "12.3px ";`

`var px_val = "123p x";`

### Paramètre

`pixels_val` : la chaîne de caractères contenant une valeur en pixels

### Valeur de retour

Type `float` : la valeur en pixels

### Eventuelle exception lancée

`Error` : "Ce paramètre n'est pas une valeur en pixels."
