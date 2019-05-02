

const histArr = [3, 1, 4, 2, 2, 1];

function maxRectInHist(histArr) {
  // Fill in this method

  let maxRectArea = 0;

  for (let i = 0; i < histArr.length; ++i) {
	let height = histArr[i];

	maxRectArea = Math.max(maxRectArea, height);

	for (let j = i - 1; j >= 0; j--) {
		let width = i - j + 1;

		height = Math.min(height, histArr[j]);

		maxRectArea = Math.max(maxRectArea, height * width);
	}
  }
  return maxRectArea;
}

console.log(maxRectInHist(histArr));