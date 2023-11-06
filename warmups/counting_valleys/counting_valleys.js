console.log("Bismillah");

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

let countingValleys = (steps, path) => {
	// Init the current level variable
	let current_level = 0;
	let in_valley = false;
	let number_of_valleys = 0;
	
	//loop through the path
	for(var i=0; i < steps; i++)
	{
	// if input is U add one to current_level
	if (path.charAt(i) === 'U') {
			// if we are in valley and current level is -1 then increase
			// number of valleys and then set in valley flag to false
			if((current_level === -1) && in_valley)
			{
				number_of_valleys++;
				in_valley = false;
			}
			current_level++
	}
	// if input is D subtract one from current_level
	if (path.charAt(i) === 'D') 
		{
			// if we are not in valley and current level is 0 
			// then set in valley flag to true
			if((current_level === 0) && (!in_valley))
			{
				in_valley = true;
			}
			current_level--;
		}
	}

	return number_of_valleys;
}
