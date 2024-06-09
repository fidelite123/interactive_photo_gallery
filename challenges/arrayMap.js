function subarraySum(arr, target) {
    let currentSum = 0;
    let sumMap = new Map();
    sumMap.set(0, -1); // To handle the case where the subarray starts from index 0

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (sumMap.has(currentSum - target)) {
            return true;
        }

        sumMap.set(currentSum, i);
    }

    return false;
}

// Example usage:
let arr = [4, 2, 7, 1, 9, 5];
let target = 17;
console.log(subarraySum(arr, target)); // Output: true
