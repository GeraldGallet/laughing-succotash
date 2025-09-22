import * as fs from 'fs';

type Human = {
  id: number;
  firstName: string;
  lastName: string;
}

type Cat = {
  id: number;
  name: string;
  ownerId?: number;
}

const {humans, cats}: { humans: Human[], cats: Cat[] } = JSON.parse(fs.readFileSync('cat-data.json', 'utf8'));

console.log(humans);
console.log(cats);

function getCatOwner(cat: Cat, humans: Human[]): Human | undefined {
  if (!cat.ownerId) {
    return undefined;
  }

  return humans.find(human => human.id === cat.ownerId);
}

function getCatsWithNoOwner(cats: Cat[]): Cat[] {
  return cats.filter(cat => !cat.ownerId);
}

function countCatsByHuman(cats: Cat[], humans: Human[]): void {
  humans.forEach(human => {
    const myCats = cats.filter(cat => cat.ownerId === human.id);

    console.log(myCats)
  })
}
