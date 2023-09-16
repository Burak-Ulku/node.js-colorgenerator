// Import the necessary libraries
import chalk from 'chalk';

// Function to generate a random hex color code
function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to generate and display the colored block
function generateColoredBlockWithThreeRows(color) {
  for (let i = 0; i < 9; i++) {
    if (i === 3 || i === 5) {
      let hashtag = chalk.hex(color)('#####');
      process.stdout.write(hashtag);
      for (let a = 0; a < 21; a++) {
        process.stdout.write(' ');
      }
      console.log(hashtag);
    } else if (i === 4) {
      let hashtag = chalk.hex(color)('#####');
      process.stdout.write(hashtag);
      for (let a = 0; a < 14; a++) {
        process.stdout.write(' ');
        if (a === 6) {
          let hexcolor = chalk.hex(color)(color);
          process.stdout.write(hexcolor);
        }
      }
function main() {
  let color = getRandomHexColor();
  generateColoredBlockWithThreeRows(color);
}

main();
