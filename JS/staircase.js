console.log("Staircase!");

// Takes in amount of steps and array to store results to prevent redundant computation
const stairCase = (steps, storage) => {
	// Exit code for when stairs equal 0 or 1 step
	if (steps <= 1) return 1;

	// If we already found the result, return it
	if (storage[steps]) return storage[steps];

	// Ex: Answer to 3 steps equals answer to 2 steps + answer to 1 Step
	let result = stairCase(steps - 1, storage) + stairCase(steps - 2, storage);

	// Store result in array before returning it
	storage[steps] = result;

	return result;

}