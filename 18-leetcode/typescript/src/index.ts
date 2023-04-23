// https://leetcode.com/problems/two-sum/
//?------------ 1. Two Sum -----------------

import e from "express";

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

// https://leetcode.com/problems/palindrome-number/
//?---------- 9. Palindrome Number ------------

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  const arr: number[] = [];

  while (x > 0) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }

  let i = 0;

  while (i <= arr.length / 2) {
    if (arr[i] === arr[arr.length - 1 - i]) {
      i++;
    } else {
      return false;
    }
  }
  return true;
}

// Chat gpt solution
function isPalindrome2(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let reversed = 0;
  let original = x;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
}

console.log(isPalindrome(252), isPalindrome(12414));

// https://leetcode.com/problems/roman-to-integer/
// ? ----------- Roman to Integer ---------------

const romanToIntMap: { [key: string]: number } = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function romanToInt(s: string) {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romanToIntMap[s[i] + s[i + 1]]) {
      num += romanToIntMap[s[i] + s[i + 1]];
      i++;
    } else {
      num += romanToIntMap[s[i]];
    }
  }

  return num;
}

console.log(romanToInt("III"), romanToInt("LVIII"), romanToInt("MCMXCIV"));

//?-----------  14. Longest Common Prefix---------

function longestCommonPrefix(strs: string[]): string {
  let shortestStr = strs[0];

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < shortestStr.length) shortestStr = strs[i];
  }

  let counter = shortestStr.length;
  let i = strs.length - 1;
  let matches = false;

  while (i >= -2 && counter > 0) {
    if (i === -1) {
      if (matches) {
        return shortestStr.slice(0, counter);
      }
      counter -= 1;
      i = strs.length - 1;
    }

    if (strs[i].slice(0, counter) !== shortestStr.slice(0, counter)) {
      counter -= 1;
      i = strs.length - 1;
      matches = false;
    } else {
      matches = true;
      i--;
    }
  }

  return "";
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

//? ------------- 26. Remove Duplicates from Sorted Array-----------

function removeDuplicates(nums: number[]): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

//? ------------- 21. Merge Two Sorted Lists-----------

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

// };

//? ------------- 20. Valid Parentheses-----------

function helper(arr: string, p1: string, p2: string): boolean {
  if (arr.indexOf(p1) < 0 && arr.indexOf(p2) < 0) {
    return true;
  } else if (arr.indexOf(p1) < 0 && arr.indexOf(p2) > 0) {
    return false;
  } else if (arr.indexOf(p1) > 0 && arr.indexOf(p2) < 0) {
    return false;
  } else if (arr.indexOf(p1) < arr.indexOf(p2)) {
    return true;
  } else {
    return false;
  }
}

function isValid(s: string): boolean {
  let round = helper(s, "(", ")");
  let square = helper(s, "[", "]");
  let squigly = helper(s, "{", "}");

  return round && square && squigly ? true : false;
}

console.log(isValid("{[]}"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
