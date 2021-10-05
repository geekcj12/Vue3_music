/**
 * Parse lyrics string
 * @param {string} lrcString 
 * @returns {Array}
 */
export const parse = lrcString => {
  if (!lrcString) {
    return []
  }

  let lrcArray = lrcString.split('\n');
  let lrcResult = [];
  const lrcTimePattern = new RegExp('\\[(\\d{2}):(\\d{2})\\.((\\d{2,3}))\\]', 'g');
  
  for (let i = 0; i < lrcArray.length; i++) {
    if (!lrcArray[i]) {
      break;
    }
    const lrcText = lrcArray[i].replace(lrcTimePattern, '');
    if (!lrcText) {
      continue;
    }
    let lrcTime = lrcArray[i].match(new RegExp(lrcTimePattern, 'g'))[0];
    lrcTime = handleLrcTime(lrcTime);
    lrcResult.push([lrcTime, lrcText]);
  }

  return lrcResult;
};

/**
 * Convert time string to seconds
 * @param {string} timeString 
 * @returns {number}
 */
const handleLrcTime = timeString => {
  const minute = timeString.match(new RegExp('\\w{2}(?=\:)', 'g'));
  const second = timeString.match(new RegExp('\\w{2}(?=\\.)', 'g'));
  const millisecond = timeString.match(new RegExp('\\d{3}', 'g'));
  return parseInt(minute) * 60 + parseInt(second) + parseFloat(millisecond) / 1000;
};
