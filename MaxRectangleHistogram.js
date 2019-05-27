

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

function maxRectInHistOn(histArr) {
    const stack = [];
           
    let maxRectArea = 0;
    let top;
    let currentArea;
        
    let i = 0;
    while (i < histArr.length - 1) {
      if (!stack.length || histArr[stack[stack.length-1]] <= histArr[i]) {
        stack.push(i);
        i++;
      } else {
        top = stack[stack.length-1];
        stack.pop();
  
        currentArea = histArr[top] * (!stack.length ? i : i - stack[stack.length-1] - 1);
  
        if (maxRectArea < currentArea) {
          maxRectArea = currentArea;
        }
      }
    }
      
    while (stack.length) {
      top = stack[stack.length-1];
      stack.pop();
      currentArea = histArr[top] * (!stack.length ? i : i - stack[stack.length-1] - 1);
  
      if (maxRectArea < currentArea) {
        maxRectArea = currentArea;
      }
    }
  
    return maxRectArea;
}

console.log(maxRectInHist(histArr));
console.log(maxRectInHistOn(histArr));