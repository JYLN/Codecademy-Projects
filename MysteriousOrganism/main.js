// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => ({
  specimenNum,
  dna,
  mutate() {
    const randIdx = Math.floor(Math.random() * this.dna.length);
    let newBase = returnRandBase();
    while (this.dna[randIdx] === newBase) {
      newBase = returnRandBase();
    }
    this.dna[randIdx] = newBase;
    return this.dna;
  },
  compareDNA(otherOrgObj) {
    const similarBases = this.dna.reduce((acc, val, idx, arr) => {
      if (arr[idx] === otherOrgObj.dna[idx]) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    const percentOfDNAShared = ((similarBases / this.dna.length) * 100).toFixed(2);

    console.log(
      `${this.specimenNum} and ${otherOrgObj.specimenNum} have ${percentOfDNAShared}% DNA in common.`
    );
  },
  willLikelySurvive() {
    const cOrG = this.dna.filter(base => base === 'C' || base === 'G');
    return cOrG.length / this.dna.length >= 0.6;
  },
});

const survivingOrganisms = [];

for (let i = 0; survivingOrganisms.length < 30; i++) {
  let newOrg = pAequorFactory(i, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingOrganisms.push(newOrg);
  }
}

console.log(survivingOrganisms);
console.log(survivingOrganisms.length);
