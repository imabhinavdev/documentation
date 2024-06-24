---
title: HTTP Methods
description: Learn about the different HTTP methods (verbs) used in the Hypertext Transfer Protocol (HTTP) to interact with web servers and resources.
---
HTTP (Hypertext Transfer Protocol) methods, ya HTTP verbs, specify karte hain ki resource identified by a URL par kaunsa action perform kiya jana chahiye. Har method ek specific operation define karta hai, jisse clients (jaise web browsers) web servers ke sath various tarikon se interact kar sakte hain bina directly server ke internals ko access kiye.

### Commonly Used HTTP Methods

1. **GET**:
   - Data retrieve karta hai from a specified resource bina usse alter kiye.
   - GET requests sirf data retrieve karte hain aur server pe side effects nahi hone chahiye.
   - Primarily use hota hai webpages, images, ya static content fetch karne ke liye servers se.

2. **POST**:
   - Data ko process karne ke liye submit karta hai to a specified resource.
   - POST requests typically use hote hain new resources create karne ke liye server pe ya form data submit karne ke liye.
   - GET ke unlike, POST requests may have side effects jaise new record create karna database me.

3. **PUT**:
   - Ek existing resource update karta hai server pe.
   - PUT requests existing data ko modify karte hain.
   - Agar resource already exist karta hai to usse replace karte hain ya agar nahi karta to new resource create karte hain.

4. **DELETE**:
   - Specified resource ko remove karta hai from the server.
   - DELETE requests resources ko remove karne ke liye use hote hain specified by a specific URL.
   - Inhe caution ke sath use karna chahiye kyunki yeh data ko irreversibly remove karte hain server se.

5. **HEAD**:
   - Similar to GET, but sirf response ke headers retrieve karta hai bina message body ke.
   - HEAD requests useful hote hain resource ke metadata check karne ke liye, jaise size ya last modified date, bina entire content download kiye.

6. **PATCH**:
   - Partial modifications apply karta hai to a resource.
   - PATCH requests use hote hain partial updates apply karne ke liye to a resource.
   - PUT ke unlike, jo entire resource replace karta hai, PATCH specific parts of the resource ko modify karta hai.

7. **OPTIONS**:
   - HTTP methods retrieve karta hai jo ek server support karta hai for a specific URL.
   - OPTIONS requests use hote hain target resource ke communication options determine karne ke liye.
   - Yeh cross-origin resource sharing (CORS) aur other access control scenarios me useful hote hain.

8. **TRACE**:
   - Received request ko echo karta hai taaki clients dekh sakein ki intermediate servers ne kya changes ya additions kiye hain.
   - TRACE requests primarily debugging purposes ke liye use hote hain taaki request ko trace kiya ja sake jaise yeh proxies aur servers se travel karti hai.

### Correct HTTP Method Choose Karna

- **GET**: Data retrieve karne ke liye server se, jaise webpages, images, ya other resources fetch karne ke liye.
  
- **POST**: Data submit karne ke liye server ko, jaise form data submit karna ya new resources create karna.
  
- **PUT**: Existing resources update karne ke liye server pe, typically entire resource ko new data se replace karke.
  
- **DELETE**: Resources remove karne ke liye server se, ensure karke caution kyunki yeh action irreversible hai.
  
- **PATCH**: Partial updates karne ke liye existing resources pe, small changes apply karke bina entire resource replace kiye.
  
- **HEAD**: Metadata retrieve karne ke liye resource ke baare me, jaise size ya last modified date check karne ke liye bina entire content download kiye.
  
- **OPTIONS**: Communication options determine karne ke liye target resource ke liye, particularly cross-origin resource sharing (CORS) aur access control scenarios me.
  
- **TRACE**: Primarily debugging purposes ke liye taaki request ko trace kiya ja sake jaise yeh proxies aur servers se travel karti hai.

### Conclusion

HTTP methods ko samajhna web communication aur robust web applications build karne ke liye essential hai. Har method ek specific action define karta hai jo clients perform kar sakte hain server resources par, data retrieval, submission, modification, aur deletion facilitate karke. Appropriate HTTP method choose karke, developers efficient aur secure communication ensure kar sakte hain clients aur servers ke beech. HTTP methods ko apna toolkit banao powerful web functionalities implement karne ke liye! 🚀