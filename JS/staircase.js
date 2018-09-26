console.log("Staircase!");

// Takes in amount of steps and array to store results to prevent redundant computation
// Defualt value of storage is empty array
const stairCase = (steps, storage = []) => {
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



console.log(stairCase(5)); // 8

console.log(stairCase(4)); // 5

console.log(stairCase(3)); // 3

console.log(stairCase(2)); // 2

console.log(stairCase(1)); // 1

console.log(stairCase(0)); // 1

console.log(stairCase(7)); // 21