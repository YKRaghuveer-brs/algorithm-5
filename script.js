document.getElementById('findElement').addEventListener('click', () => {
    const array = document.getElementById('inputArray').value.split(',').map(num => parseInt(num.trim()));
    const target = parseInt(document.getElementById('inputTarget').value.trim());

    const result = findElementInRotatedSortedArray(array, target);
    const resultContainer = document.getElementById('resultContainer');
    
    if (result !== -1) {
        resultContainer.innerHTML = `Target element ${target} found at index ${result}.`;
    } else {
        resultContainer.innerHTML = `Target element ${target} not found in the array.`;
    }
});

// Function to find element in rotated sorted array using binary search
function findElementInRotatedSortedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if mid is the target
        if (arr[mid] === target) {
            return mid;
        }

        // Determine if the left half is sorted
        if (arr[left] <= arr[mid]) {
            // Check if target is in the left half
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } 
        // Otherwise, the right half is sorted
        else {
            // Check if target is in the right half
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    // If the target is not found
    return -1;
}
