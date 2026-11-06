const history = [1.25, 2.10, 1.45, 3.20, 1.80];

const average =
  history.reduce((a, b) => a + b, 0) / history.length;

console.log("CRASH DASHBOARD AI");
console.log("-------------------");
console.log("Nombre de résultats :", history.length);
console.log("Moyenne historique :", average.toFixed(2) + "x");

console.log("\nHistorique :");

history.forEach((cote, index) => {
  console.log(`${index + 1}. ${cote}x`);
});
