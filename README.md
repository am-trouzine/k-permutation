# Simple k-Permutation Algorithm (JavaScript)

This is a JavaScript implementation of the **k-permutation algorithm**, which generates all possible arrangements of a set without repetition, where each arrangement consists of `k` elements.

## Usage

The function `k_permutate(e, s)` generates all unique permutations of a set of elements.

### Arguments

-   **`e`**: A string containing the elements of the set.
-   **`s`** (optional): A character used to split the string into individual elements. If not provided, the string is treated as a sequence of characters.

### Returns

An array of strings, where each string represents a unique permutation of the input set.

### Examples

[k-Permutation](https://codepen.io/am_trouzine/pen/wBvMYWL)

#### Example 1: Permutations of a String

```javascript
k_permutate('122');
// Expected Output:
// ["122", "212", "221"]
k_permutate('abc');
// Expected Output:
// ["abc","acb","bac","bca","cab","cba"]
```

#### Example 2: Permutations of a Delimited String

```javascript
k_permutate('11-12-13', '-');
// Expected Output:
// ["11-12-13", "11-13-12", "12-11-13", "12-13-11", "13-11-12", "13-12-11"]
k_permutate('12-12-13', '-');
// Expected Output:
// ["12-12-13","12-13-12","13-12-12"]
```

#### Example 3: Permutations with Custom Formatting

```javascript
k_permutate('21-22-23', '-').map(function(e) { return e.split('-').join(''); });
// Expected Output:
// ["212223", "212322", "222123", "222321", "232122", "232221"]
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Attribution
If you use, modify, or translate this algorithm, please:
- Keep the name **"Simple k-Permutation"**.
- Include the original authors' names: **Abderrezzaq TROUZINE** and **Omar AZZOUG**.

## Authors
- Abderrezzaq TROUZINE
- Omar AZZOUG

December 26, 2025
