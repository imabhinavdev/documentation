---
title: HTTP Status Code
description: Learn about HTTP status codes, their categories, and practical examples to understand the outcome of client requests to web servers.

---
HTTP (Hypertext Transfer Protocol) status codes woh standardized responses hain jo web server deta hai client ke request ka outcome batane ke liye. Yeh codes valuable information dete hain ki request successful thi, redirected thi, ya error encounter hui, jisse client (jaise web browsers ya applications) appropriate action le sakte hain server ke response ke basis par.

### Categories of HTTP Status Codes

HTTP status codes paanch classes me categorize hote hain, har ek alag type ka response represent karta hai:

1. **1xx - Informational**: Yeh status codes batate hain ki request receive ho gayi hai aur server process continue kar raha hai. Yeh mostly informational purposes ke liye use hote hain aur practical life me rarely dikhte hain.

   - **100 Continue**: Server ne initial part of the request receive kar liya hai aur baaki ka intezaar kar raha hai.

2. **2xx - Success**: Yeh status codes indicate karte hain ki request successfully receive, understand, aur accept kar li gayi hai server ke dwara.

   - **200 OK**: Request successful thi aur server ne requested data return kar diya hai.

3. **3xx - Redirection**: Yeh status codes indicate karte hain ki client ko request complete karne ke liye further action lena padega.

   - **301 Moved Permanently**: Requested resource permanently move ho gaya hai new URL par.
   - **302 Found**: Requested resource temporary ek different URL par hai.
   - **304 Not Modified**: Client ka cached version of the resource still valid hai aur use kiya ja sakta hai.

4. **4xx - Client Error**: Yeh status codes indicate karte hain ki client ki side se request me error hai.

   - **400 Bad Request**: Server request ko samajh nahi paaya due to invalid syntax ya other client-side errors.
   - **401 Unauthorized**: Client ko authenticate karna padega apne aap ko requested response pane ke liye.
   - **404 Not Found**: Server requested resource ko find nahi kar paaya.

5. **5xx - Server Error**: Yeh status codes indicate karte hain ki server ki side se error hui hai request ko process karte waqt.

   - **500 Internal Server Error**: Ek generic error message jo batata hai ki server par unexpected condition hai.
   - **503 Service Unavailable**: Server temporarily unable hai request handle karne me due to overload ya maintenance.

### HTTP Status Codes Ka Matlab

- **Successful Requests (2xx)**: Indicate karte hain ki request successful thi aur server ne requested data return kiya. Examples hain `200 OK` for successful responses aur `204 No Content` for requests jo successful thi but koi content return nahi kiya.

- **Redirection (3xx)**: Indicate karte hain ki client ko request complete karne ke liye further action lena padega, jaise ki server dwara provided new URL follow karna.

- **Client Errors (4xx)**: Indicate karte hain ki client ki request me error thi, jaise incorrect syntax ya unauthorized access.

- **Server Errors (5xx)**: Indicate karte hain ki server ki side se error hui hai request ko process karte waqt, jaise unexpected condition ya temporary overload.

### Practical Examples

- **Successful Example (200 OK)**: `HTTP/1.1 200 OK`
  
- **Redirection Example (301 Moved Permanently)**: `HTTP/1.1 301 Moved Permanently`
  
- **Client Error Example (404 Not Found)**: `HTTP/1.1 404 Not Found`
  
- **Server Error Example (500 Internal Server Error)**: `HTTP/1.1 500 Internal Server Error`

### Conclusion

HTTP status codes web communication me crucial role play karte hain, clear aur standardized responses provide karte hain client requests ka. Yeh status codes samajhkar, developers issues diagnose aur troubleshoot kar sakte hain, user experience improve kar sakte hain, aur reliable communication ensure kar sakte hain clients aur servers ke beech. HTTP status codes ko samjho aur web interactions ko effectively navigate aur manage karo! 🚀