---
title: HTTP Headers
description: Learn about HTTP headers, their types, common examples, and how they enhance web communication between clients and servers.


---
HTTP headers woh secret agents hain jo client aur server ke beech communicate karte hain, additional information exchange karte hain, aur requests aur responses ko control karte hain. Yeh headers HTTP messages (requests aur responses) ke start me include hote hain aur various functionalities provide karte hain jaise content type specify karna, caching rules set karna, authentication information bhejna, aur bahut kuch.

### HTTP Headers Ke Types

HTTP headers ko broadly teen categories me divide kiya ja sakta hai:

1. **Request Headers**: Client se server ko information provide karte hain.
2. **Response Headers**: Server se client ko information provide karte hain.
3. **Entity Headers**: Request aur response, dono me additional information provide karte hain about the body content.

### Common HTTP Headers

#### 1. General Headers

- **Date**:
  - Request ya response message ki date aur time specify karta hai.
  - Example: `Date: Tue, 15 Nov 2022 08:12:31 GMT`

- **Connection**:
  - Connection type specify karta hai jo client aur server ke beech maintain hoga.
  - Example: `Connection: keep-alive`

#### 2. Request Headers

- **Host**:
  - Targeted host aur port number specify karta hai.
  - Example: `Host: www.example.com`

- **User-Agent**:
  - Client software (browser, app, etc.) ka information provide karta hai.
  - Example: `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)`

- **Accept**:
  - Client ke preferred response media types specify karta hai.
  - Example: `Accept: text/html, application/json`

- **Accept-Language**:
  - Client ke preferred languages specify karta hai.
  - Example: `Accept-Language: en-US, en`

- **Accept-Encoding**:
  - Client ke supported encodings specify karta hai (jaise `gzip`, `deflate`).
  - Example: `Accept-Encoding: gzip, deflate`

- **Authorization**:
  - Client ke credentials provide karta hai for authentication.
  - Example: `Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=`

#### 3. Response Headers

- **Server**:
  - Server software ka information provide karta hai.
  - Example: `Server: Apache/2.4.1 (Unix)`

- **Content-Type**:
  - Response body ke media type ko specify karta hai.
  - Example: `Content-Type: text/html; charset=UTF-8`

- **Content-Length**:
  - Response body ki length (bytes me) specify karta hai.
  - Example: `Content-Length: 348`

- **Set-Cookie**:
  - Server cookies set karta hai jo client subsequent requests me bhejta hai.
  - Example: `Set-Cookie: sessionId=abc123; Path=/; HttpOnly`

- **Cache-Control**:
  - Caching policies specify karta hai for the response.
  - Example: `Cache-Control: no-cache, no-store, must-revalidate`

#### 4. Entity Headers

- **Content-Encoding**:
  - Response body ko encode karne ka method specify karta hai.
  - Example: `Content-Encoding: gzip`

- **Content-Language**:
  - Response body ki language specify karta hai.
  - Example: `Content-Language: en-US`

- **Content-Location**:
  - Response body ka direct URL specify karta hai.
  - Example: `Content-Location: /index.htm`

### HTTP Headers Ke Usage

1. **Content Negotiation**:
   - Client aur server negotiate kar sakte hain content type aur format using headers like `Accept` aur `Content-Type`.

2. **Caching**:
   - Cache control policies set ki ja sakti hain using headers like `Cache-Control`, `Expires`, aur `ETag`.

3. **Authentication**:
   - Client apne credentials bhej sakta hai using `Authorization` header aur server responses ke sath `WWW-Authenticate` headers use kar sakta hai.

4. **Custom Headers**:
   - Developers custom headers define kar sakte hain specific functionalities ke liye.
   - Example: `X-Custom-Header: my-value`

### HTTP Headers Ke Fayde

- **Flexibility**: HTTP headers communication ko flexible aur extensible banate hain.
- **Control**: Request aur response behavior ko control karne ki ability provide karte hain.
- **Security**: Authentication aur encryption information headers ke through manage ki ja sakti hai.
- **Optimization**: Caching aur compression headers web performance optimize karte hain.

### Conclusion

HTTP headers web communication ke invisible warriors hain jo seamless interaction aur data exchange ensure karte hain between client aur server. Yeh additional information aur control provide karte hain jo modern web applications ke functionality aur performance ko enhance karta hai. HTTP headers ka deep understanding aur effective usage aapko efficient aur robust web solutions develop karne me madad karta hai. Headers ko explore karo aur apni web applications ko next level pe le jao! 🌐🚀