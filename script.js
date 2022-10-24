const gymnastic_team_1 = `Dolphins`;
const gymnastic_team_2 = `Koalas`;

let average_score_1 = (96 + 108 + 89) / 3;
console.log(average_score_1);

let average_score_2 = (88 + 91 + 110) / 3;
console.log(average_score_2);

// let winner = `winner`;

if (average_score_1 > average_score_2) {
  console.log(`Winner is ${gymnastic_team_1}`);
} else if (average_score_1 < average_score_2) {
  console.log(`Winner is ${gymnastic_team_2}`);
} else {
  console.log(`Both of the teams wins`);
}

//////BONUS 1////////

const dolphins_match_1 = 97;
const dolphins_match_2 = 112;
const dolphins_match_3 = 95; // 101

const koalas_match_1 = 109;
const koalas_match_2 = 95;
const koalas_match_3 = 90; // 123

// Eğer 1 takımın skoru diğer takımın skorundan fazlaysa o takım kazanır,
// ancak en az 100 puana sahip olması gerekli.

const minimum_score = 100;

// const dolphins_match_1 > minimum_score = true;
// const koalas_match_1 > minimum_score = true;

// Match 1

if (minimum_score < dolphins_match_1 && koalas_match_1 < dolphins_match_1) {
  console.log(`Winner is ${gymnastic_team_1}`);
} else if (
  minimum_score < dolphins_match_1 &&
  minimum_score < koalas_match_1 &&
  dolphins_match_1 === koalas_match_1
) {
  console.log(`Draw`);
} else if (minimum_score > dolphins_match_3 && minimum_score > koalas_match_3) {
  console.log(`No one wins`);
} else {
  console.log(`Winner is ${gymnastic_team_2}`);
}

// Match 2

if (minimum_score < dolphins_match_2 && koalas_match_2 < dolphins_match_2) {
  console.log(`Winner is ${gymnastic_team_1}`);
} else if (
  minimum_score <= dolphins_match_2 &&
  minimum_score <= koalas_match_2 &&
  dolphins_match_2 === koalas_match_2
) {
  console.log(`Draw`);
} else if (minimum_score > dolphins_match_3 && minimum_score > koalas_match_3) {
  console.log(`No one wins`);
} else {
  console.log(`Winner is ${gymnastic_team_2}`);
}

// Match 3

if (minimum_score < dolphins_match_3 && koalas_match_3 < dolphins_match_3) {
  console.log(`Winner is ${gymnastic_team_1}`);
} else if (
  minimum_score < dolphins_match_3 &&
  minimum_score < koalas_match_3 &&
  dolphins_match_3 === koalas_match_3
) {
  console.log(`Draw`);
} else if (minimum_score > dolphins_match_3 && minimum_score > koalas_match_3) {
  console.log(`No one wins`);
} else {
  console.log(`Winner is ${gymnastic_team_2}`);
}
