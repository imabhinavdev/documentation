---
title: CORS
description: Learn about Cross-Origin Resource Sharing (CORS) in web development, its working process, security considerations, implementation guidelines, and best practices to enable secure cross-origin requests.
---
CORS (Cross-Origin Resource Sharing) ek security feature hai jo browsers me implement hota hai to restrict web pages se resources access ko cross-origin (different domain, protocol, aur port) pe. Yeh security measure hai jo unauthorized data access aur tampering se protect karta hai, while allowing legitimate cross-origin requests.

### Cross-Origin Concept

Cross-origin request tab hota hai jab web page ek domain (protocol aur port ke saath) se resources access karta hai jo dusre domain se hai. Browser security policies typically prevent such requests due to potential security risks.

### CORS Ka Working Process

1. **Browser Pre-Flight Request**:
   - Before actual request, browser pre-flight request send karta hai `OPTIONS` method ke sath to determine server permissions.
   - Pre-flight request `Access-Control-Request-*` headers me include hota hai jaise `Origin`, `Method`, `Headers`, etc.

2. **Server Response**:
   - Server CORS policies evaluate karta hai based on received `OPTIONS` request headers.
   - Server `Access-Control-Allow-*` headers set karta hai to grant permissions cross-origin requests ke liye.
   - Example: `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`, etc.

3. **Actual Request**:
   - Agar server pre-flight request ko authorize karta hai, actual request execute hota hai client browser me.
   - Server response normal HTTP response format me hota hai.

### CORS Headers

1. **Request Headers**:
   - **Origin**: Browsers send karte hain current origin information.
   - Example: `Origin: http://example.com`

2. **Response Headers**:
   - **Access-Control-Allow-Origin**: Server specify karta hai allowed origins for requests.
   - **Access-Control-Allow-Methods**: Server specify karta hai allowed HTTP methods (GET, POST, etc.).
   - **Access-Control-Allow-Headers**: Server specify karta hai allowed headers.
   - **Access-Control-Allow-Credentials**: Server allow karta hai cookies aur authentication headers cross-origin requests ke liye.
   - **Access-Control-Expose-Headers**: Server specify karta hai additional headers jo browser expose karega.

### CORS Ke Usage Scenarios

1. **API Access**: JavaScript clients se API access enable karna.
   - Example: `Access-Control-Allow-Origin: *` ya specific domains ke liye.

2. **Web Fonts, Images, Videos**: Cross-domain resources access allow karna.
   - Example: CDN (Content Delivery Network) se resources load karna.

3. **Authentication**: Cross-origin authentication aur session management facilitate karna.
   - Example: Cookies aur authentication tokens cross-origin requests me include karna.

### CORS Security Considerations

1. **Same-Origin Policy**: Browser same-origin policy enforce karta hai jo unauthorized data access se protect karta hai.
2. **Pre-Flight Requests**: Additional network requests introduce karte hain pre-flight checks ke liye.
3. **Server Configuration**: Proper CORS headers set karna important hai to avoid misconfigurations aur security vulnerabilities.

### CORS Implementation Guidelines

1. **Server-Side Configuration**: Server side pe proper CORS policies implement karna.
2. **Testing**: Cross-origin requests ke liye thorough testing karna browsers me.
3. **Error Handling**: Proper error handling implement karna pre-flight checks aur CORS violations ke liye.

### Conclusion

CORS ek important security feature hai modern web applications ke liye jo cross-origin requests ko control karta hai while maintaining security standards. Is feature ka proper implementation aur configuration developers ko allow karta hai secure aur efficient cross-origin resource sharing karne ke liye. CORS policies ko samajhna aur sahi tareeke se implement karna critical hai web security aur functionality ke liye. CORS ke saath smartly navigate karo aur web applications ko secure aur reliable banate jao! 🌐🔒