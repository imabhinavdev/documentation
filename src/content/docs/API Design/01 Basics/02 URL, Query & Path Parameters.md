---
title: URL, Query & Path Parameters
description: Learn about URLs, query parameters, and path parameters, and how they are used to access resources on the web.
---

URL (Uniform Resource Locator) web pe resources ka address hai. Yeh ek specific location identify karta hai jahan resource available hai aur browser ya client ko batata hai ki us resource tak kaise pahunchna hai. URL ke different parts hote hain jo collectively ek complete address banate hain.

### URL Ka Structure

Ek typical URL kuch is tarah ka hota hai:

```
https://www.example.com:8080/path/to/resource?query=parameter#fragment
```

Is URL ko different parts me tod kar samajhte hain:

1. **Scheme**:
   - Protocol specify karta hai jo resource tak access karne ke liye use hota hai (jaise `http`, `https`, `ftp`).
   - Example: `https`

2. **Host**:
   - Domain name ya IP address jo server ko identify karta hai.
   - Example: `www.example.com`

3. **Port**:
   - Optional part jo specific port number specify karta hai jahan server request ko listen kar raha hai.
   - Example: `8080`

4. **Path**:
   - Server pe specific resource ka location specify karta hai.
   - Example: `/path/to/resource`

5. **Query Parameters**:
   - Additional parameters jo resource retrieve karne ke liye use hote hain.
   - Example: `?query=parameter`

6. **Fragment**:
   - Page ke specific section ka reference hota hai.
   - Example: `#fragment`

### Path Parameters

Path parameters URL path me directly embedded hote hain aur specific resource ko identify karte hain. Yeh typically resource ke location ya type specify karte hain.

- **Example**:
  ```
  https://api.example.com/users/123
  ```
  - Is URL me `123` ek path parameter hai jo specific user ko identify karta hai.

### Query Parameters

Query parameters URL ke end me `?` se start hote hain aur key-value pairs me hote hain, jo additional data provide karte hain request ke context me. Multiple query parameters `&` se separate hote hain.

- **Example**:
  ```
  https://www.example.com/search?query=web&sort=asc
  ```
  - Is URL me `query=web` aur `sort=asc` query parameters hain jo search query aur sorting order specify karte hain.

### Path Aur Query Parameters Ka Usage

- **Path Parameters**:
  - Specific resources ya entities ko uniquely identify karte hain.
  - Example: `/products/456` (Product ID `456` ko identify karta hai).

- **Query Parameters**:
  - Filtering, sorting, aur additional data specify karne ke liye use hote hain.
  - Example: `/products?category=books&sort=price` (Books category filter aur price sorting specify karta hai).

### URL, Path, Aur Query Parameters Ke Fayde

- **Clarity**: URLs resources aur actions ko clearly represent karte hain, jo understanding aur debugging ko easier banata hai.
- **Flexibility**: Query parameters dynamic data provide karne ke liye flexible aur powerful tarika hain bina resource path change kiye.
- **Modularity**: Path parameters URL structure ko modular aur clean banate hain, jo readability aur maintainability improve karta hai.

### Conclusion

URL, path parameters, aur query parameters web navigation aur resource identification ka fundamental part hain. Inke correct usage se developers clear aur efficient communication setup kar sakte hain between clients aur servers. URLs ko samjho, path aur query parameters ko effectively use karo, aur apni web applications ko powerful aur user-friendly banao! 🌐🚀