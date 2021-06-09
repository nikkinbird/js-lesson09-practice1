const currentlyReading = {
  title: "The Fifth Season",
  author: "N.K. Jemisin",
  series: "Broken Earth Trilogy",
  pages: 512,
  publicationDate: "August 4th, 2015",
  currentChapter: 8,
  totalChapters: 23
};

// Using dot notation, log out the title of the book
console.log(currentlyReading.title);

// Using bracket notation, log out the pages
console.log(currentlyReading["pages"]);

// Add new property w dot notation
currentlyReading.awards = "Hugo Award for Best Novel (2016)";
console.log(currentlyReading);

// Create a method to update chapter
currentlyReading.updateChapter = function (chapterNum) {
  this.currentChapter = chapterNum;
};

// Use method to update to ch 11
currentlyReading.updateChapter(11);

console.log(currentlyReading);
