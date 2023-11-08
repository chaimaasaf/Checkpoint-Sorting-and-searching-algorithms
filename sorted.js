function insertion(tableau) {
  n = tableau.length; // nombre des elements dans tableau donnée, taille table
  for (i = 1; i < n; i++) {
    // i:positon 1er element, i<taille tableau et i++ pas plus1
    currentElement = tableau[i]; // recupérer le 1er element depuis le tableau
    j = i - 1;
    while (j >= 0 && tableau[j] > currentElement) {
      // condition de comparaison entre 2 elements
      tableau[j + 1] = tableau[j];
      j--;
    }
    tableau[j + 1] = currentElement;
  }
  return tableau;
}
// Example console log
const unsorted = [18, 1, 33, 13, 5, 6, 8, 23];
const sorted = insertion(unsorted);
console.log(sorted);
