class PowerOfTwoMaxHeap {
    constructor(x) {
      this.heap = [];
      this.x = x;
    }
  
    /**
     * Inserts a value into the power of two max heap.
     * @param {*} value - The value to be inserted.
     */
    insert(value) {
      this.heap.push(value); // Add the value to the end of the array.
      this._siftUp(this.heap.length - 1); // Sift up the newly added value to its correct position.
    }
  
    /**
     * Removes and returns the maximum value from the power of two max heap.
     * @returns {*} The maximum value in the heap, or undefined if the heap is empty.
     */
    popMax() {
      if (this.heap.length === 0) {
        return undefined; // Return undefined if the heap is empty.
      }
  
      const max = this.heap[0]; // Store the maximum value.
      this.heap[0] = this.heap[this.heap.length - 1]; // Replace the root with the last element in the array.
      this.heap.pop(); // Remove the last element from the array.
      this._siftDown(0); // Sift down the root element to its correct position.
  
      return max; // Return the maximum value.
    }
  
    /**
     * Sifts up the element at the given index to its correct position in the heap.
     * @param {number} index - The index of the element to be sifted up.
     */
    _siftUp(index) {
      const parent = Math.floor((index - 1) / this.x); // Calculate the parent index using the power of two property.
  
      // Compare the element with its parent and swap if necessary.
      while (index > 0 && this.heap[index] > this.heap[parent]) {
        [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
        index = parent;
        parent = Math.floor((index - 1) / this.x); // Update the parent index.
      }
    }
  
    /**
     * Sifts down the element at the given index to its correct position in the heap.
     * @param {number} index - The index of the element to be sifted down.
     */
    _siftDown(index) {
      let maxChildIndex = this._getMaxChild(index); // Get the index of the maximum child.
  
      // Compare the element with its maximum child and swap if necessary.
      while (maxChildIndex !== -1 && this.heap[index] < this.heap[maxChildIndex]) {
        [this.heap[index], this.heap[maxChildIndex]] = [this.heap[maxChildIndex], this.heap[index]];
        index = maxChildIndex;
        maxChildIndex = this._getMaxChild(index); // Update the maximum child index.
      }
    }
  
    /**
     * Gets the index of the maximum child for the element at the given index.
     * @param {number} index - The index of the parent element.
     * @returns {number} The index of the maximum child, or -1 if there are no children.
     */
    _getMaxChild(index) {
      const startChild = this.x * index + 1; // Calculate the start index of the children.
      const endChild = Math.min(startChild + this.x, this.heap.length); // Calculate the end index of the children.
  
      let maxChildIndex = -1;
      let maxChildValue = -Infinity;
  
      // Find the maximum child index and value among the children.
      for (let i = startChild; i < endChild; i++) {
        if (this.heap[i] > maxChildValue) {
          maxChildIndex = i;
          maxChildValue = this.heap[i];
        }
      }
  
      return maxChildIndex;
    }
  }  