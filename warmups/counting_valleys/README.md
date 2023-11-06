# Walkthrough my solutions 

HERE Link to parts of this document 

#### Counting Valleys

> Example
> 
> steps = 8 path = [DDUUUUDD]
> 
> 
> The hiker first enters a valley units deep.
> Then they climb out and up onto a mountain units high.
> Finally, the hiker returns to sea level and ends the hike.

solution can be found in counting_valleys.js

Problem statement :

We are given a number of steps to the function then that number of steps 
is the number of characters we will take as input

Suppose we only have an easier problem
We only count the **final** **destination** of level IE if we take UUU as input
then we return 3 if we take DUD then we return -1

This is simply solved as such 

```js
let countingValleys = (steps, path) => {
	// Init the current level variable
	let current_level = 0;
	
	//loop through the path
	for(var i=0; i < steps; i++)
	{
	// if input is U add one to current_level
	if (path.charAt(i) === 'U') current_level++;
	// if input is D subtract one from current_level
	if (path.charAt(i) === 'D') current_level--;
	}

	return current_level;
}
```

Hence we have solved the simpler problem, next up is we need to identify
a valley.
A valley in this problem is simply a low land between two other normal 
leveld lands. Based on this we just need to identify once we exit a 
negative elevation area we should count a valley.

Thats what will do exaclty will set up a flag to count if we exit a 
valley. Based on that will increase the count of valleys by 1.
This way we solved the problem by breaking it down into simpler easier
problems.

if we have decreased our elevation , check if the in valley
flag is false if are now in less than 0 elevation then if it is set it 
to true as we are in a valley now. if we increase our elevation then 
check if we were in a valley if we were then set the flag to false if 
more than or equal to 0
