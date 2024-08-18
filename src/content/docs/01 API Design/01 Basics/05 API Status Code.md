---
title: API Status Code
description: Learn about the status code used in the API.


---

HTTP Status Codes ek important aspect hai API development ka. Yeh codes specify karte hain response status ko jo server se client ko send hota hai. Har status code ek specific situation ko represent karta hai. Iss documentation mein hum detail mein samjhenge different HTTP status codes ke baare mein aur kaunsa status code kis situation mein use karna chahiye.

---

#### 1. **1xx Informational Responses**
Yeh status codes indicate karte hain ki server ne request ko receive kar liya hai aur abhi processing chal rahi hai.

- **100 Continue**  
  Jab client ne request body send karni hai lekin pehle server se confirmation chahiye, toh yeh code use hota hai. Agar server ne is code se response diya, toh client apni request ko continue kar sakta hai.

- **101 Switching Protocols**  
  Yeh code tab use hota hai jab client ne server se request ki hai ki woh protocols switch kare. Agar server ne agree kiya, toh yeh status code return hota hai.

- **102 Processing (WebDAV)**  
  Yeh status code indicate karta hai ki server ne request ko receive kar liya hai lekin abhi process kar raha hai. Yeh code WebDAV (Web Distributed Authoring and Versioning) applications mein zyada dekha jaata hai.

---

#### 2. **2xx Success Responses**
Yeh status codes batate hain ki client ki request successfully receive, understand, aur accept ki gayi hai.

- **200 OK**  
  Yeh sabse common success code hai jo indicate karta hai ki request successful thi aur expected data return ho gaya hai. Yeh code GET, POST, PUT, DELETE, etc. operations ke liye use hota hai.

- **201 Created**  
  Jab client ki request ka result ek naya resource create hota hai, toh yeh status code return hota hai. Mostly POST requests ke saath dekha jaata hai.

- **202 Accepted**  
  Yeh status code batata hai ki request accept kar li gayi hai processing ke liye, lekin processing abhi complete nahi hui hai. Yeh code asynchronous operations mein useful hota hai.

- **204 No Content**  
  Yeh code indicate karta hai ki request successful thi lekin server ne koi content return nahi kiya. Yeh mostly DELETE requests ke baad dekha jaata hai.

---

#### 3. **3xx Redirection Responses**
Yeh status codes batate hain ki client ko request ko complete karne ke liye additional action perform karna hoga.

- **301 Moved Permanently**  
  Jab ek resource permanently move ho chuka hai ek naye URI par, toh yeh status code return hota hai. Yeh code batata hai ki client ko future requests naye URI par send karni chahiye.

- **302 Found**  
  Yeh status code indicate karta hai ki requested resource temporarily ek different URI par hai. Client ko same URI par future requests send karni chahiye.

- **304 Not Modified**  
  Jab client ne If-Modified-Since ya If-None-Match header ke saath request bheji ho aur resource mein koi modification nahi hua ho, toh yeh status code return hota hai. Yeh batata hai ki cached version ko use kiya jaa sakta hai.

---

#### 4. **4xx Client Error Responses**
Yeh status codes indicate karte hain ki client ki request galat thi ya phir server usko process nahi kar pa raha.

- **400 Bad Request**  
  Yeh code batata hai ki client ki request mein syntax ya format ka koi issue hai, jis wajah se server usko samajh nahi pa raha. Yeh error client-side se fix karna hota hai.

- **401 Unauthorized**  
  Jab client ko requested resource access karne ke liye authentication ki zarurat hai aur woh provide nahi kiya, toh yeh status code return hota hai. Yeh code batata hai ki client ko apne credentials provide karne padenge.

- **403 Forbidden**  
  Yeh status code batata hai ki client ko resource access karne ki permission nahi hai, chahe woh authenticated ho ya na ho.

- **404 Not Found**  
  Jab requested resource server par available nahi hota, toh yeh status code return hota hai. Yeh indicate karta hai ki ya toh resource ka URI galat hai ya phir resource delete ho chuka hai.

- **405 Method Not Allowed**  
  Yeh status code batata hai ki client ne jo HTTP method use kiya hai, woh resource ke liye allowed nahi hai. For example, agar POST method allow nahi hai resource par, toh yeh error return hoti hai.

---

#### 5. **5xx Server Error Responses**
Yeh status codes indicate karte hain ki server apni taraf se request ko process karne mein fail ho gaya.

- **500 Internal Server Error**  
  Yeh ek generic error code hai jo tab return hota hai jab server request ko process karte waqt koi unexpected error face karta hai. Specific reason ko debug karna zaroori hota hai.

- **501 Not Implemented**  
  Yeh status code indicate karta hai ki server ne requested functionality ko implement nahi kiya hai. Agar server HTTP method ko samajh nahi raha ya support nahi kar raha, toh yeh code return hota hai.

- **502 Bad Gateway**  
  Jab server ek upstream server se invalid response receive karta hai, toh yeh status code return hota hai. Yeh proxy servers mein commonly dekha jaata hai.

- **503 Service Unavailable**  
  Yeh code batata hai ki server temporarily unavailable hai, usually due to overload ya maintenance. Client ko kuch der baad request retry karne ka suggestion diya jaata hai.

- **504 Gateway Timeout**  
  Jab server ek upstream server se timely response nahi le paata, toh yeh status code return hota hai. Yeh code indicate karta hai ki delay kahin beech mein ho raha hai.

---

#### 6. **Conclusion**
HTTP status codes API development ka integral part hain aur unhe sahi tarike se use karna zaroori hai taaki client aur server ke beech communication smooth ho. Is documentation ne commonly used status codes ko detail mein explain kiya hai aur bataya hai ki unka use kis situation mein karna chahiye. Iss information ko use karke aap apne APIs ko zyada robust aur client-friendly bana sakte hain.

