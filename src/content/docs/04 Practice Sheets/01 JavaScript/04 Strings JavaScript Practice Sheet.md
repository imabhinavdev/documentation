---
title: Strings JavaScript Practice Sheet
description: This practice sheet covers a wide range of string manipulation concepts and questions in JavaScript to help you prepare for interviews and assessments.

---

### 1. String Length

**Question:** Ek string ki length kaise find karte hain?

**Code:**

```jsx
let str = "Hello, World!";
let length = str.length;
console.log(length); // 13

```

**Explanation:** `length` property se hum string ki total characters count kar sakte hain.

---

### 2. String Concatenation

**Question:** Do strings ko kaise concatenate karte hain?

**Code:**

```jsx
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result); // "Hello World"

```

**Explanation:** Do strings ko concatenate karne ke liye hum `+` operator ka use karte hain.

---

### 3. String to Uppercase

**Question:** String ko uppercase mein kaise convert karte hain?

**Code:**

```jsx
let str = "hello world";
let upperStr = str.toUpperCase();
console.log(upperStr); // "HELLO WORLD"

```

**Explanation:** `toUpperCase()` method se hum string ko uppercase mein convert kar sakte hain.

---

### 4. String to Lowercase

**Question:** String ko lowercase mein kaise convert karte hain?

**Code:**

```jsx
let str = "HELLO WORLD";
let lowerStr = str.toLowerCase();
console.log(lowerStr); // "hello world"

```

**Explanation:** `toLowerCase()` method se hum string ko lowercase mein convert kar sakte hain.

---

### 5. String Includes

**Question:** Kaise check karte hain ki ek string mein doosri string included hai?

**Code:**

```jsx
let str = "Hello, World!";
let includesHello = str.includes("Hello");
console.log(includesHello); // true

```

**Explanation:** `includes()` method se hum check kar sakte hain ki ek string doosri string ko contain karti hai ya nahi.

---

### 6. String StartsWith

**Question:** Kaise check karte hain ki ek string kisi particular substring se start hoti hai?

**Code:**

```jsx
let str = "Hello, World!";
let startsWithHello = str.startsWith("Hello");
console.log(startsWithHello); // true

```

**Explanation:** `startsWith()` method se hum check kar sakte hain ki string kisi specific substring se start hoti hai ya nahi.

---

### 7. String EndsWith

**Question:** Kaise check karte hain ki ek string kisi particular substring se end hoti hai?

**Code:**

```jsx
let str = "Hello, World!";
let endsWithWorld = str.endsWith("World!");
console.log(endsWithWorld); // true

```

**Explanation:** `endsWith()` method se hum check kar sakte hain ki string kisi specific substring se end hoti hai ya nahi.

---

### 8. Extracting Substring

**Question:** Ek string se substring kaise nikaalte hain?

**Code:**

```jsx
let str = "Hello, World!";
let subStr = str.substring(0, 5);
console.log(subStr); // "Hello"

```

**Explanation:** `substring(startIndex, endIndex)` method se hum string ka ek hissa nikaal sakte hain.

---

### 9. String IndexOf

**Question:** Ek string mein particular character ka index kaise nikaalte hain?

**Code:**

```jsx
let str = "Hello, World!";
let index = str.indexOf('W');
console.log(index); // 7

```

**Explanation:** `indexOf()` method se hum kisi character ka pehla occurrence ka index nikaal sakte hain.

---

### 10. String LastIndexOf

**Question:** Ek string mein kisi particular character ka last index kaise nikaalte hain?

**Code:**

```jsx
let str = "Hello, World! Hello again!";
let lastIndex = str.lastIndexOf('H');
console.log(lastIndex); // 13

```

**Explanation:** `lastIndexOf()` method se hum kisi character ka aakhri occurrence ka index nikaal sakte hain.

---

### 11. Splitting a String

**Question:** Ek string ko parts mein kaise split karte hain?

**Code:**

```jsx
let str = "Hello, World!";
let parts = str.split(' ');
console.log(parts); // ["Hello,", "World!"]

```

**Explanation:** `split(delimiter)` method se hum string ko specified delimiter ke basis par split kar sakte hain.

---

### 12. Joining Strings

**Question:** Ek array of strings ko single string mein kaise join karte hain?

**Code:**

```jsx
let arr = ["Hello", "World"];
let joinedStr = arr.join(' ');
console.log(joinedStr); // "Hello World"

```

**Explanation:** `join(delimiter)` method se hum array of strings ko ek single string mein join kar sakte hain.

---

### 13. Replacing Substring

**Question:** Ek string mein substring ko replace kaise karte hain?

**Code:**

```jsx
let str = "Hello, World!";
let newStr = str.replace("World", "Universe");
console.log(newStr); // "Hello, Universe!"

```

**Explanation:** `replace(oldSubstring, newSubstring)` method se hum string mein specified substring ko replace kar sakte hain.

---

### 14. Trimming Whitespace

**Question:** Ek string ke aage aur peeche ke whitespaces kaise remove karte hain?

**Code:**

```jsx
let str = "   Hello, World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // "Hello, World!"

```

**Explanation:** `trim()` method se hum string ke starting aur ending whitespaces ko remove kar sakte hain.

---

### 15. Padding String Start

**Question:** Ek string ke starting mein specified characters kaise add karte hain?

**Code:**

```jsx
let str = "5";
let paddedStr = str.padStart(3, '0');
console.log(paddedStr); // "005"

```

**Explanation:** `padStart(targetLength, padString)` method se hum string ke starting mein specified characters add kar sakte hain.

---

### 16. Padding String End

**Question:** Ek string ke ending mein specified characters kaise add karte hain?

**Code:**

```jsx
let str = "5";
let paddedStr = str.padEnd(3, '0');
console.log(paddedStr); // "500"

```

**Explanation:** `padEnd(targetLength, padString)` method se hum string ke ending mein specified characters add kar sakte hain.

---

### 17. String from Char Code

**Question:** Char codes se string kaise banate hain?

**Code:**

```jsx
let str = String.fromCharCode(72, 101, 108, 108, 111);
console.log(str); // "Hello"

```

**Explanation:** `String.fromCharCode()` method se hum char codes ko string mein convert kar sakte hain.

---

### 18. Character at Specific Index

**Question:** String ke kisi specific index par character kaise nikaalte hain?

**Code:**

```jsx
let str = "Hello, World!";
let char = str.charAt(7);
console.log(char); // "W"

```

**Explanation:** `charAt(index)` method se hum string ke specified index par character nikaal sakte hain.

---

### 19. Char Code at Specific Index

**Question:** String ke kisi specific index par character ka char code kaise nikaalte hain?

**Code:**

```jsx
let str = "Hello, World!";
let charCode = str.charCodeAt(7);
console.log(charCode); // 87

```

**Explanation:** `charCodeAt(index)` method se hum string ke specified index par character ka char code nikaal sakte hain.

---

### 20. String Repeat

**Question:** Ek string ko kaise repeat karte hain?

**Code:**

```jsx
let str = "Hello";
let repeatedStr = str.repeat(3);
console.log(repeatedStr); // "HelloHelloHello"

```

**Explanation:** `repeat(count)` method se hum string ko specified count times repeat kar sakte hain.

---

### 21. String Raw

**Question:** Raw string literals kaise banate hain?

**Code:**

```jsx
let str = String.raw`Hello\\nWorld`;
console.log(str); // "Hello\\nWorld"

```

**Explanation:** `String.raw` tag se hum raw string literals banate hain jisme escape characters ko process nahi kiya jata.

---

### 22. Template Literals

**Question:** Template literals kaise use karte hain?

**Code:**

```jsx
let name = "World";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, World!"

```

**Explanation:** Template literals ko backticks `````` ke saath use karte hain aur variables ko `${}` ke andar interpolate karte hain.

---

### 23. String Slice

**Question:** Ek string ko slice kaise karte hain?

**Code:**

```jsx
let str = "Hello, World!";
let slicedStr = str.slice(0, 5);
console.log(slicedStr); // "Hello"

```

**Explanation:** `slice(startIndex, endIndex)` method se hum string ka ek portion nikaal sakte hain.

---

### 24. String Search

**Question:** Ek string mein specified value ko search

kaise karte hain?

**Code:**

```jsx
let str = "Hello, World!";
let index = str.search("World");
console.log(index); // 7

```

**Explanation:** `search()` method se hum specified value ko string mein search kar sakte hain aur uska index return karte hain.

---

### 25. String Match

**Question:** Ek string ko regular expression se match kaise karte hain?

**Code:**

```jsx
let str = "Hello, World!";
let matches = str.match(/o/g);
console.log(matches); // ["o", "o"]

```

**Explanation:** `match()` method se hum string ko regular expression se match karte hain aur saare matches ko return karte hain.

---

### 26. String Match All

**Question:** Ek string mein saare matches ko array of objects mein kaise nikaalte hain?

**Code:**

```jsx
let str = "test1 test2 test3";
let matches = [...str.matchAll(/test\\d/g)];
console.log(matches); // [Array of match objects]

```

**Explanation:** `matchAll()` method se hum string mein saare matches ko array of objects ke roop mein nikaalte hain.

---

### 27. String Replace All

**Question:** Ek string mein saari occurrences ko replace kaise karte hain?

**Code:**

```jsx
let str = "test1 test2 test3";
let newStr = str.replaceAll("test", "exam");
console.log(newStr); // "exam1 exam2 exam3"

```

**Explanation:** `replaceAll(oldSubstring, newSubstring)` method se hum string mein saari occurrences ko replace kar sakte hain.

---

### 28. String Locale Compare

**Question:** Do strings ko locale-specific order mein compare kaise karte hain?

**Code:**

```jsx
let str1 = "a";
let str2 = "b";
let comparison = str1.localeCompare(str2);
console.log(comparison); // -1

```

**Explanation:** `localeCompare()` method se hum do strings ko locale-specific order mein compare karte hain.

---

### 29. String Normalize

**Question:** Ek string ko Unicode normalization form mein kaise convert karte hain?

**Code:**

```jsx
let str = "café";
let normalizedStr = str.normalize("NFD");
console.log(normalizedStr); // "café"

```

**Explanation:** `normalize(form)` method se hum string ko specified Unicode normalization form mein convert karte hain.

---

### 30. String Raw Escapes

**Question:** Kaise raw string escapes ko show karte hain?

**Code:**

```jsx
let rawStr = String.raw`Hello\\nWorld`;
console.log(rawStr); // "Hello\\nWorld"

```

**Explanation:** `String.raw` se hum raw string escapes ko exactly jaisa hai waisa show kar sakte hain.

---

### 31. String from Code Points

**Question:** Code points se string kaise banate hain?

**Code:**

```jsx
let str = String.fromCodePoint(9731, 9733, 9842, 0x2F804);
console.log(str); // "☃★♲你"

```

**Explanation:** `String.fromCodePoint()` method se hum Unicode code points ko string mein convert kar sakte hain.

---

### 32. String Code Point at Specific Index

**Question:** String ke kisi specific index par code point kaise nikaalte hain?

**Code:**

```jsx
let str = "A你B";
let codePoint = str.codePointAt(1);
console.log(codePoint); // 195076

```

**Explanation:** `codePointAt(index)` method se hum string ke specified index par code point nikaal sakte hain.

---

### 33. String Iteration

**Question:** Ek string ko characters mein iterate kaise karte hain?

**Code:**

```jsx
let str = "Hello";
for (let char of str) {
  console.log(char);
}
// H
// e
// l
// l
// o

```

**Explanation:** `for...of` loop se hum string ke characters ko iterate kar sakte hain.

---

### 34. String Escape Sequences

**Question:** Escape sequences kaise use karte hain?

**Code:**

```jsx
let str = "Hello\\nWorld";
console.log(str);
// Hello
// World

```

**Explanation:** `\\n` ek escape sequence hai jo newline character ko represent karta hai.

---

### 35. String Raw Templates

**Question:** Raw templates kaise banate hain?

**Code:**

```jsx
let rawStr = String.raw`Hello\\nWorld`;
console.log(rawStr); // "Hello\\nWorld"

```

**Explanation:** `String.raw` tag se hum raw templates bana sakte hain jisme escape sequences process nahi hote.

---

### 36. String Search using Regular Expressions

**Question:** Regular expressions ka use karte hue string ko search kaise karte hain?

**Code:**

```jsx
let str = "Hello, World!";
let index = str.search(/World/);
console.log(index); // 7

```

**Explanation:** `search()` method se hum regular expressions ka use karte hue string ko search kar sakte hain.

---

### 37. String Replace using Regular Expressions

**Question:** Regular expressions ka use karte hue string ko replace kaise karte hain?

**Code:**

```jsx
let str = "Hello, World!";
let newStr = str.replace(/World/, "Universe");
console.log(newStr); // "Hello, Universe!"

```

**Explanation:** `replace()` method se hum regular expressions ka use karte hue string ko replace kar sakte hain.

---

### 38. String Splitting using Regular Expressions

**Question:** Regular expressions ka use karte hue string ko split kaise karte hain?

**Code:**

```jsx
let str = "Hello1World2Hello3World";
let parts = str.split(/\\d/);
console.log(parts); // ["Hello", "World", "Hello", "World"]

```

**Explanation:** `split()` method se hum regular expressions ka use karte hue string ko split kar sakte hain.

---

### 39. String to Locale Uppercase

**Question:** String ko locale-specific uppercase mein kaise convert karte hain?

**Code:**

```jsx
let str = "istanbul";
let upperStr = str.toLocaleUpperCase('tr-TR');
console.log(upperStr); // "İSTANBUL"

```

**Explanation:** `toLocaleUpperCase()` method se hum string ko locale-specific uppercase mein convert kar sakte hain.

---

### 40. String to Locale Lowercase

**Question:** String ko locale-specific lowercase mein kaise convert karte hain?

**Code:**

```jsx
let str = "İSTANBUL";
let lowerStr = str.toLocaleLowerCase('tr-TR');
console.log(lowerStr); // "istanbul"

```

**Explanation:** `toLocaleLowerCase()` method se hum string ko locale-specific lowercase mein convert kar sakte hain.

---

### 41. String Unicode Escape Sequences

**Question:** Unicode escape sequences kaise use karte hain?

**Code:**

```jsx
let str = "\\u0048\\u0065\\u006C\\u006C\\u006F";
console.log(str); // "Hello"

```

**Explanation:** Unicode escape sequences se hum specific Unicode characters ko string mein represent kar sakte hain.

---

### 42. String Octal Escape Sequences

**Question:** Octal escape sequences kaise use karte hain?

**Code:**

```jsx
let str = "\\101\\102\\103";
console.log(str); // "ABC"

```

**Explanation:** Octal escape sequences se hum specific octal values ko string mein represent kar sakte hain.

---

### 43. String Hexadecimal Escape Sequences

**Question:** Hexadecimal escape sequences kaise use karte hain?

**Code:**

```jsx
let str = "\\x48\\x65\\x6C\\x6C\\x6F";
console.log(str); // "Hello"

```

**Explanation:** Hexadecimal escape sequences se hum specific hexadecimal values ko string mein represent kar sakte hain.

---

### 44. String Escaped Backslashes

**Question:** Escaped backslashes kaise use karte hain?

**Code:**

```jsx
let str = "This is a backslash: \\\\";
console.log(str); // "This is a backslash: \\"

```

**Explanation:** `\\\\` se hum ek single backslash ko string mein represent kar sakte hain.

---

### 45. String Tagged Templates

**Question:** Tagged templates kaise use karte hain?

**Code:**

```jsx
function tag(strings, ...values) {
  return strings[0] + values.map((v, i) => v + strings[i + 1]).join('');
}
let str = tag`Hello, ${'World'}!`;
console.log(str); // "Hello, World!"

```

**Explanation:** Tagged templates se hum template strings ko custom functions ke saath process kar sakte hain.

---

### 46. String Locale Specific Comparison

**Question:** Strings ko locale-specific tarike se compare kaise karte hain?

**Code:**

```jsx
let str1 = "ä";
let str2 = "z";
let comparison = str1.localeCompare(str2, 'de-DE');
console.log(comparison); // -1

```

**Explanation:** `localeCompare()` method se hum strings ko locale-specific tarike se compare kar sakte hain.

---

### 47. String Indexing

**Question:** String ko

index ke through kaise access karte hain?

**Code:**

```jsx
let str = "Hello, World!";
let char = str[7];
console.log(char); // "W"

```

**Explanation:** Strings ko index ke through access karne ke liye bracket notation `str[index]` ka use kar sakte hain.

---

### 48. String Splitting by Newline

**Question:** Ek string ko newline characters par kaise split karte hain?

**Code:**

```jsx
let str = "Line1\\nLine2\\nLine3";
let lines = str.split('\\n');
console.log(lines); // ["Line1", "Line2", "Line3"]

```

**Explanation:** `split()` method se hum string ko newline characters par split kar sakte hain.

---

### 49. String Template Variables

**Question:** Template literals mein variables ko kaise include karte hain?

**Code:**

```jsx
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"

```

**Explanation:** Template literals mein variables ko `${}` ke saath include karte hain.

---

### 50. String Length Property

**Question:** String ki length property kaise use karte hain?

**Code:**

```jsx
let str = "Hello, World!";
let length = str.length;
console.log(length); // 13

```

**Explanation:** `length` property se hum string ki length (characters count) ko nikaal sakte hain.

