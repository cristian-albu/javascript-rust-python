// https://leetcode.com/problems/two-sum/
//?------------ 1. Two Sum -----------------

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
