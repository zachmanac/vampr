class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

// Adds the vampire as an offspring of this vampire
addOffspring(vampire) {
  this.offspring.push(vampire);
  vampire.creator = this;
}

// Returns the total number of vampires created by that vampire
get numberOfOffspring() {
  return this.offspring.length;
}

// Returns the number of vampires away from the original vampire this vampire is
get numberOfVampiresFromOriginal() {
  let numberofVampires = 0;
  let currentVampire = this;

  while (currentVampire.creator) {
    currentVampire = currentVampire.creator;
    numberofVampires++;
  }
  return numberofVampires;
}

// Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
isMoreSeniorThan(vampire) {
  if (this.offspring.length > vampire.offspring.length) {
    return true;
  }
  return false;
}

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name == name) {
      return this;
    }

    let found = null;

    for (const child of this.offspring) {
      found = found || child.vampireWithName(name);
    }
    return found;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let count = 0;

    for (const child of this.offspring) {
      //initial 1 count for the child itself
      count += 1;
      count += child.totalDescendents;
    }
    return count;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let arr = [];
    if (this.yearConverted > 1980) {
      arr.push(this);
    }

    for (const child of this.offspring) {
      const children = child.allMillennialVampires;
      arr = arr.concat(children);
    }
    return arr;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

