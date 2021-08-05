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
  
  for (let i = 0; i < lrcArray.length; i++) {
    if (!lrcArray[i]) {
      break;
    }
    const lrcText = lrcArray[i].match(/(?<=\]).*/g)[0];
    if (!lrcText) {
      continue;
    }
    let lrcTime = lrcArray[i].match(/(?<=\[)(\d{2}):(\d{2})\.((\d{2,3}))?(?=\])/g)[0];
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
  const minute = timeString.match(/\w{2}(?=\:)/g);
  const second = timeString.match(/(?<=\:)\w{2}(?=\.)/g);
  const millisecond = timeString.match(/(?<=\.)\d*/g);
  return parseInt(minute) * 60 + parseInt(second) + parseFloat(millisecond) / 1000;
};
