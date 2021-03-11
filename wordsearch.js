const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(letter => letter.join(''));

  const transpose = function(matrix) {
    const result = [];
    for (let x = 0; x < matrix[0].length; x++) {
      const buffer = [];
      for (let y = 0; y < matrix.length; y++) {
        buffer.push(matrix[y][x]);
      }
      result.push(buffer);
    }
    return result;
  };

  const verticalJoin = transpose(letters).map(letter => letter.join(''));
  console.log(verticalJoin);
  if (word === "") {
    return "";
  }

  for (let item of horizontalJoin) {
    if (item.includes(word)) {
      return true;
    }
  }

  for (let item of verticalJoin) {
    if (item.includes(word)) {
      return true;
    }
  } return false;

};
module.exports = wordSearch;

// wordSearch(['l'], 'hello');
