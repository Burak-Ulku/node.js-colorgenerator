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
function generateColoredBlock() {
  const color = getRandomHexColor();
  const block = '#'.repeat(31) + '\n';
  const coloredBlock = chalk.hex(color)(block);
  console.log(coloredBlock);
}

// Main function to run the application
function main() {
  generateColoredBlock();
}

// Run the main function
main();
