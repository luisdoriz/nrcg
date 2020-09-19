const formatComponentName = (word) => {
  const fromattedWord = [...word];
  fromattedWord[0] = fromattedWord[0].toUpperCase();
  const lastIndex = fromattedWord.length - 1;
  fromattedWord[lastIndex] = fromattedWord[lastIndex].toLowerCase();
  return fromattedWord.join('');
};

module.exports = formatComponentName;
