// 1 - Créer un tableau de note d'élèves
const studentGrade = [15, 4, 12, 6, 1, 17, 9, 13, 2];

// 2 - Faire une fonction qui retourne la longueur de la liste en utilisant une boucle while
function lengthList(studentGrade) {
  const length = 0;

  while (studentGrade[length] !== undefined) {
    length++;
  }
  return length;
}

// 3 - Fonction pour calculer la moyenne
function average(studentGrade) {
  let total = 0;

  for (let index = 0; index < studentGrade.length; index++) {
    total += studentGrade[index];
  }
  return total / studentGrade.length;
}

// 4 - Fonction pour déterminer combien de personnes ont une note supérieure ou inférieure à la moyenne
function determineGrade(studentGrade) {
  let average1 = average(studentGrade);
  let superior = 0;
  let lower = 0;

  for (let index = 0; index < studentGrade.length; index++) {
    if (studentGrade[index] > average1) {
      superior++;
    } else if (studentGrade[index] < average1) {
      lower++;
    }
  }
  return { superior, lower };
}
