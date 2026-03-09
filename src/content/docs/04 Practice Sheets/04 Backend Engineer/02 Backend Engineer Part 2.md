---
title: Backend Engineer Part 2 Important Questions
description: This document contains a list of important questions related to Backend Engineer Part 2 that are commonly asked in interviews.

---

### 1. **What is backend development?**  
Answer: Backend development involves server-side programming that powers the logic, databases, and APIs of an application. It handles data processing, business rules, and communication with databases or external services. For example, a backend might receive a user’s API request, query a database, and return the result in JSON. It typically uses languages like Python, Java, or JavaScript (Node.js) and focuses on server logic and data storage【8†L28-L33】.

### 2. **What is a web server?**  
Answer: A web server is software that listens for HTTP/HTTPS requests from clients (such as browsers) and returns the appropriate response. It handles network requests on a specific port (usually 80 or 443) and serves content like HTML pages or API data. For example, Nginx and Apache are common web servers that can serve static files or pass dynamic requests to application code【67†L7-L10】.

### 3. **What is an API (Application Programming Interface)?**  
Answer: An API is a set of rules and endpoints that allows one software application to communicate with another. In web backends, APIs are usually HTTP endpoints that clients call to get or modify data. For example, a REST API might let a client GET `/users/123` to retrieve user data or POST `/orders` to create a new order. APIs standardize data exchange and hide internal implementation details.

### 4. **What is the difference between frontend and backend development?**  
Answer: Frontend development involves building the user interface (what users see and interact with) using technologies like HTML, CSS, and JavaScript. Backend development is server-side: it handles data storage, business logic, and the APIs that serve or process data. In simple terms, the frontend is the “client” side, and the backend is the “server” side of an application, working together to deliver content to users.

### 5. **What is HTTP?**  
Answer: HTTP stands for HyperText Transfer Protocol. It is the protocol browsers and servers use to communicate. When you visit a website or call an API, your browser (client) sends an HTTP request to the server, and the server sends back an HTTP response with data. HTTP defines methods (like GET, POST) and status codes (like 200 OK, 404 Not Found) used in these communications.

### 6. **What is HTTPS and how is it different from HTTP?**  
Answer: HTTPS is HTTP over TLS/SSL, meaning it encrypts the data between the client and server for security. Unlike plain HTTP (which sends data in clear text), HTTPS uses TLS (Transport Layer Security) to encrypt the communication【14†L29-L32】【14†L99-L104】. This prevents eavesdropping or tampering. For example, when you send a login password to a server, HTTPS ensures the password is encrypted in transit.

### 7. **What are the main HTTP methods and when should they be used?**  
Answer: The main HTTP methods correspond to CRUD operations on resources. **GET** retrieves data without modifying it (idempotent)【49†L46-L54】. **POST** creates a new resource (not idempotent)【49†L79-L87】. **PUT** updates or replaces an existing resource (idempotent)【49†L109-L117】. **DELETE** removes a resource (idempotent)【49†L135-L143】. For example, `GET /users` fetches users, `POST /users` creates a user, `PUT /users/123` updates user 123, and `DELETE /users/123` deletes user 123.

### 8. **What do HTTP status codes 200, 404, and 500 mean?**  
Answer: Status codes are three-digit numbers that indicate the result of an HTTP request. **200 (OK)** means the request succeeded and the server is returning the requested data【51†L131-L134】. **404 (Not Found)** means the server couldn’t find the requested resource【51†L212-L214】. **500 (Internal Server Error)** indicates the server encountered an unexpected error while processing the request【51†L230-L233】. For example, requesting a missing page yields 404, and a server crash might yield 500.

### 9. **What is a REST API?**  
Answer: A REST API is an Application Programming Interface that follows the REST (Representational State Transfer) architectural style【12†L13-L16】. It uses standard HTTP methods to operate on resources identified by URLs. REST APIs are stateless and expose resources (like `/users`, `/products`) which clients can create, read, update, or delete via GET, POST, PUT, DELETE, etc. For example, a RESTful `/articles/10` endpoint might allow fetching (GET), updating (PUT), or deleting (DELETE) article 10【12†L13-L16】.

### 10. **What does statelessness mean in a RESTful API?**  
Answer: Statelessness means each HTTP request from the client contains all information needed for the server to process it, without relying on any stored session on the server. The server does not remember any previous requests. For example, if a client calls `/profile` twice, each call must include authentication credentials if required. This simplifies scaling, since any server instance can handle any request independently【15†L131-L139】.

### 11. **What is a database?**  
Answer: A database is a structured collection of data stored in a computer system. It allows applications to store, query, and manipulate data efficiently. Common databases include relational ones (like MySQL, PostgreSQL) which organize data into tables, and NoSQL ones (like MongoDB, Redis) which use other models. Backends use databases to persist user data, configuration, logs, etc., for example storing user accounts and order history.

### 12. **What is the difference between SQL and NoSQL databases?**  
Answer: SQL (relational) databases store data in tables with a fixed schema and use SQL for querying, emphasizing ACID transactions【17†L99-L104】. NoSQL (non-relational) databases use flexible schemas (documents, key-value, etc.) and often focus on scalability and performance【17†L96-L104】. For example, MySQL is SQL (strong consistency, structured tables), while MongoDB or Cassandra are NoSQL (schema-less, easier horizontal scaling)【17†L96-L104】.

### 13. **What is the difference between a primary key and a foreign key?**  
Answer: A primary key uniquely identifies each row in a database table and cannot be null【21†L108-L112】. There is only one primary key per table. A foreign key is a column (or set of columns) in one table that refers to the primary key of another table【21†L134-L140】. It creates a relationship between the tables. For example, an `orders` table might have `user_id` as a foreign key referencing the `id` primary key in a `users` table【21†L134-L140】.

### 14. **What is a database index and why is it used?**  
Answer: A database index is a special data structure (similar to an index in a book) that improves lookup speed. It stores selected columns in a way that makes search operations faster, avoiding full table scans【19†L195-L199】. For example, if you query users by email often, an index on the email column allows the database to find rows quickly without scanning every row. Indexes speed up reads but add some overhead on writes, so use them on frequently queried fields【19†L195-L199】.

### 15. **What is ACID in the context of databases?**  
Answer: ACID stands for Atomicity, Consistency, Isolation, Durability. These properties guarantee reliable processing of database transactions. For example, **Atomicity** ensures a transaction (like transferring money) either fully happens or not at all; **Durability** means once committed, changes aren’t lost. SQL databases typically obey ACID properties for data integrity, whereas many NoSQL systems relax some (for scalability) under the BASE approach【17†L99-L104】.

### 16. **What is Node.js and why use it on the backend?**  
Answer: Node.js is a JavaScript runtime built on Chrome’s V8 engine that lets you run JavaScript on the server【25†L29-L32】. It’s event-driven and non-blocking, making it efficient for I/O-heavy tasks. For example, Node.js is used to build APIs or real-time services where it can handle many concurrent connections without creating new threads【25†L29-L32】【23†L161-L169】.

### 17. **How does Node.js handle concurrency given its single-threaded nature?**  
Answer: Although Node.js runs JavaScript on a single thread, it uses an event loop and non-blocking I/O to handle concurrency【23†L161-L169】【25†L79-L88】. When Node performs I/O (like reading a file or querying a database), it offloads that work to the operating system or thread pool. When the I/O is done, the result is placed on an event queue and the callback is invoked. This allows Node to handle many requests concurrently without waiting on each I/O operation【23†L161-L169】【25†L79-L88】.

### 18. **What is the Node.js event loop?**  
Answer: The Node.js event loop is the mechanism that processes asynchronous callbacks. Node runs a single JavaScript thread, but the event loop lets Node offload I/O work (disk or network) and then execute callback functions once that work is completed【23†L161-L169】. For example, when you do an `fs.readFile()`, Node sends the I/O task to the OS, continues with other code, and once the read is finished, puts the callback in the event loop queue to be executed【23†L161-L169】.

### 19. **What is middleware in Express.js?**  
Answer: In Express, middleware are functions that run during the request-response cycle. Each middleware has access to the request and response objects and can modify them or end the response. Middleware can perform tasks like logging, authentication, or parsing JSON, then call `next()` to pass control to the next function【27†L67-L75】. For example, you might use middleware to log each request before sending it on to the actual route handler【27†L67-L75】.

### 20. **What is the difference between authentication and authorization?**  
Answer: Authentication verifies *who* a user is, while authorization determines *what* the user is allowed to do. In other words, authentication checks credentials (like login/password) to confirm identity, and authorization grants or denies access to resources based on that identity【29†L537-L540】. For example, logging in with a username/password is authentication; checking that the user has admin rights to delete a record is authorization【29†L537-L540】.

### 21. **What is a JSON Web Token (JWT)?**  
Answer: A JSON Web Token (JWT) is a compact, self-contained token that securely transmits information between parties as a JSON object【32†L88-L92】. It is digitally signed (e.g., with HMAC or RSA) so that the server can verify its integrity. JWTs are often used for stateless authentication: after a user logs in, the server issues a JWT containing the user’s ID and claims, and the client sends this token on subsequent requests to prove identity【32†L88-L92】.

### 22. **What is caching and why is it used in backend systems?**  
Answer: Caching involves storing copies of data in a faster, temporary storage (like memory) to speed up future access【35†L55-L62】. It reduces the time and resources needed to recompute or fetch the data again. For example, a backend might cache query results in Redis so that repeated requests for the same data return quickly from memory instead of querying the database【35†L55-L62】. This improves performance and reduces load on slower data sources.

### 23. **What is a Content Delivery Network (CDN) and why is it useful?**  
Answer: A CDN is a network of geographically distributed servers that cache static assets (like images, scripts, videos) close to end users【35†L99-L107】. When a user requests a static resource, the CDN serves it from a nearby server instead of the origin, reducing latency. For example, if your website’s images are on a CDN, visitors globally get them faster because they come from the nearest CDN point of presence【35†L99-L107】.

### 24. **What is a message queue and why would you use one?**  
Answer: A message queue is an intermediary service that holds messages in a FIFO order for asynchronous communication【37†L118-L126】. It decouples components: a producer service can send a message to the queue without waiting for the consumer. The consumer retrieves and processes messages when ready. This is useful for background tasks; for example, an e-commerce checkout service might enqueue order notifications so that email sending and inventory updates happen later without delaying the user’s response【37†L118-L126】.

### 25. **What is horizontal scaling vs vertical scaling?**  
Answer: Vertical scaling (scaling up) means adding more resources (CPU, RAM) to a single server. Horizontal scaling (scaling out) means adding more servers to a system and distributing load among them【6†L1757-L1763】. For example, increasing a server’s memory is vertical scaling; running multiple servers behind a load balancer is horizontal scaling【6†L1757-L1763】. Horizontal scaling often improves availability and handles growth more flexibly.

### 26. **What is a load balancer and why is it used?**  
Answer: A load balancer is a system (hardware or software) that distributes incoming network requests across multiple servers【39†L152-L160】. It ensures no single server is overwhelmed and improves availability. For example, in a web application, a load balancer might route each incoming HTTP request to one of several backend servers, so that if one server is down or busy, others can handle requests【39†L152-L160】.

### 27. **What is a CDN (Content Delivery Network)?**  
Answer: (Note: Already answered in question 23.)

### 28. **How do you improve database query performance?**  
Answer: You improve performance by optimizing queries and using indexes. For example, make sure SELECT queries use WHERE clauses that match indexed columns to avoid full scans. Normalize or denormalize data appropriately, and avoid N+1 query problems (see next question). Also, use caching (like Redis) for frequent queries, and use query profiling to find slow operations.

### 29. **What is the N+1 query problem?**  
Answer: The N+1 query problem happens when your code runs one query to fetch a list of items, then runs additional queries inside a loop for each item【46†L74-L82】. This causes many database round-trips. For example, selecting users and then querying each user’s orders in a loop produces N+1 queries. It’s inefficient; instead, you should fetch related data with a join or batch query to reduce the total queries【46†L74-L82】.

### 30. **What is rate limiting and why is it important?**  
Answer: Rate limiting is a technique that controls how many requests a client can make to a server in a given time window【62†L1-L4】. It protects the backend from abuse or overload by preventing a single user from sending too many requests. For example, an API might allow 100 requests per minute per IP; if exceeded, it returns an error. This ensures fair usage and keeps the service available to all users【62†L1-L4】.

### 31. **What is a race condition in concurrent programming?**  
Answer: A race condition occurs when two or more threads or processes access and modify the same resource at the same time, and the outcome depends on timing【42†L141-L146】. Because their operations overlap, the final result can vary unpredictably. For example, two threads incrementing the same counter simultaneously can produce the wrong count. We prevent race conditions using locks, mutexes, or atomic operations to ensure only one thread updates the shared data at a time【42†L141-L146】.

### 32. **What is session vs token-based authentication?**  
Answer: Session-based authentication stores session data on the server and often uses a cookie to track the session. Token-based (like JWT) means the server issues a signed token and the client sends it with each request. In session auth, the server keeps session state in memory or database; in token auth, the server doesn’t store session data and verifies the token each time. Tokens allow stateless servers and are often used for APIs, while sessions are common for traditional web apps.

### 33. **What is CORS and why is it needed?**  
Answer: CORS (Cross-Origin Resource Sharing) is a browser security feature that allows a server to specify which domains (origins) can access its resources【58†L210-L218】. By default, browsers block frontend JavaScript from making requests to a different domain. With CORS, the server includes headers like `Access-Control-Allow-Origin` in its response, specifying allowed domains. For example, if `api.example.com` allows `app.example.org`, it adds `Access-Control-Allow-Origin: https://app.example.org` so the browser permits the request【58†L210-L218】.

### 34. **What is a microservice?**  
Answer: A microservice is a small, independent service that performs a specific business function. In a microservices architecture, an application is split into many such services, each with its own codebase and database【56†L54-L58】【56†L81-L90】. They communicate via APIs. For example, an e-commerce site might have separate microservices for users, orders, and payments. Each team can develop and deploy their service independently【56†L54-L58】【56†L81-L90】.

### 35. **What is the difference between monolithic and microservices architectures?**  
Answer: In a monolithic architecture, an application is built as a single unit where all components share the same codebase and database. Microservices split the app into multiple small services that communicate over APIs. The monolith is simpler to start, but harder to scale and maintain as it grows. Microservices allow independent development, deployment, and scaling of each part, but add complexity in communication and monitoring between services.

### 36. **What is continuous integration/continuous deployment (CI/CD)?**  
Answer: CI/CD is the practice of automating the build, test, and deployment pipeline. **Continuous Integration** means developers frequently merge code changes to a central repository, where automated tests run to catch issues early. **Continuous Deployment (or Delivery)** means code that passes tests is automatically (or with minimal manual steps) deployed to production. This enables rapid, reliable updates without manual deployment steps.

### 37. **What is Docker and why use containerization?**  
Answer: Docker is a platform for containerization. Containers package an application and all its dependencies into an isolated environment. This ensures the app runs the same way anywhere (development, staging, production). Unlike virtual machines, containers share the host OS kernel and are lightweight. For example, you can Dockerize a Node.js app so that it includes specific Node and library versions, making deployment consistent across servers.

### 38. **What is a message queue vs a message broker?**  
Answer: A message queue is a service that holds messages in a queue for asynchronous processing. A message broker (like RabbitMQ, Kafka) often includes queuing plus features like routing, publish/subscribe, and persistence. In practice, we use message broker as the message queue. The broker ensures producers can send messages without needing consumers to be ready immediately. This decouples services and smooths load spikes.

### 39. **What is middleware in backend services (in general)?**  
Answer: Middleware is software that sits between the client request and the core logic, handling cross-cutting concerns. For example, logging, authentication, or parsing request bodies are done by middleware before the request reaches the route handler. In Node/Express, middleware functions take `request` and `response` objects and can modify them or end the response. If not ending the response, they call `next()` to continue processing.

### 40. **How does the backend handle validation and error responses?**  
Answer: The backend should validate incoming data (e.g., required fields, formats) and respond with appropriate HTTP errors if invalid. For example, if a client sends a bad request, the server can return a 400 status with an error message. Good practice is to catch errors (e.g., exceptions, DB errors) and convert them to meaningful responses (like 404 if an item isn’t found, or 500 for server errors), often in a consistent JSON error format. Logging the error details internally also helps debugging.

### 41. **What is API versioning and why is it used?**  
Answer: API versioning means providing different versions of an API so that clients depending on old behavior don’t break when the API changes. For example, a backend might expose `/api/v1/users` and later `/api/v2/users` if the schema changes. This allows developers to add fields or change behavior in a new version while still supporting older clients.

### 42. **What is rate limiting and how can it be implemented?**  
Answer: (Note: This duplicates Q30 where rate limiting was explained. We should skip duplicates.)

### 43. **What is data normalization in databases?**  
Answer: Data normalization is organizing a database so that redundancy is minimized. It involves structuring tables and relationships (using normal forms) to ensure data is logically stored. For example, separating `user` and `address` into different tables to avoid duplicate addresses. Normalization prevents update anomalies and keeps data consistent, though sometimes controlled denormalization is used for performance.

### 44. **What is the difference between SQL joins (INNER, LEFT, RIGHT)?**  
Answer: In SQL, a JOIN combines rows from two tables based on a related column. An INNER JOIN returns only rows where the join condition matches in both tables. A LEFT JOIN returns all rows from the left table and matching rows from the right (filling with NULL if no match). A RIGHT JOIN is the opposite (all from right, matching from left). For example, LEFT JOIN can fetch all users and their orders, including users with no orders.

### 45. **What are transactions and why use them?**  
Answer: A transaction is a sequence of database operations treated as a single unit. Either all operations succeed (commit) or none do (rollback). Transactions ensure consistency: for example, transferring money between accounts involves debiting one and crediting another; a transaction ensures you don’t debit one without crediting the other. Using transactions preserves data integrity.

### 46. **How do you implement authentication in a stateless API?**  
Answer: In a stateless API, common methods include JSON Web Tokens (JWTs) or API keys. For example, after a user logs in, the server issues a signed JWT that contains user identity and claims. The client sends this token in the `Authorization` header on each request. The server verifies the token signature and checks claims, without needing to store session state. This keeps the API stateless and scalable.

### 47. **What is caching at different layers of a backend system?**  
Answer: Caching can be applied at multiple layers: (1) **Network level** – CDNs cache static assets at edge servers (see Q23). (2) **Application level** – the app caches data in memory (e.g., Redis or in-process memory) to avoid repeated computation or DB queries. (3) **Database level** – databases have internal caches (like query cache). For example, Redis is often used as an in-memory cache for frequent DB query results.

### 48. **What are environment variables and why are they used?**  
Answer: Environment variables are system variables (like `PORT` or `DB_URL`) set outside the app, often for configuration. They allow configuring things like database credentials or ports without hard-coding them. For example, `process.env.PORT` in Node.js reads an environment variable. This makes applications flexible and secure (you don’t store secrets in code).

### 49. **What is cross-site scripting (XSS) and how do you prevent it?**  
Answer: XSS is a security vulnerability where attackers inject malicious scripts into web pages viewed by others. On the backend, preventing XSS means sanitizing any user-input before sending it to the client. For example, if a comment form inputs HTML, the backend should escape it so `<script>` tags aren’t executed. Setting the `Content-Security-Policy` header can also help mitigate XSS.

### 50. **What is SQL injection and how can it be prevented?**  
Answer: SQL injection occurs when user input is inserted directly into SQL queries, allowing attackers to manipulate the query. To prevent it, use parameterized (prepared) statements or ORM query methods which separate code from data. For example, using placeholders (`?` or named params) ensures user input is treated as data, not executable SQL. Validating and sanitizing inputs also helps.

### 51. **What is logging and why do we need it in backend services?**  
Answer: Logging is the practice of recording events or messages from an application (such as errors, info, warnings) to a log file or service. We need logging to debug issues, audit behavior, and monitor application health. For example, logging an error stack trace when something fails helps developers find the bug later. Common log levels are DEBUG, INFO, WARN, ERROR, used to categorize messages.

### 52. **What is monitoring and how does it differ from logging?**  
Answer: Monitoring involves tracking the runtime performance and health metrics of a system (like CPU usage, memory, request rates, error rates) in real time. Logging records discrete events or messages. Monitoring tools (e.g., Prometheus, Grafana, CloudWatch) can alert on thresholds (e.g., if CPU > 80%). Together, logging and monitoring (plus tracing) form observability: logs for debugging, metrics for trends and alerts.

### 53. **What is a background job or worker, and why use it?**  
Answer: A background job (processed by a worker) is a task run asynchronously outside the main request flow. We use it for long-running or non-critical tasks so the user gets a fast response. For example, after a user places an order, sending a confirmation email can be done as a background job via a message queue. This decoupling means the checkout API can respond immediately while the email is sent in the background.

### 54. **What is the difference between synchronous and asynchronous processing?**  
Answer: Synchronous processing means tasks occur one after another and the requester waits for each to finish. Asynchronous means tasks can run in the background and the requester is not blocked. For example, a sync API call might wait for a database query before responding. An async design would queue the query and immediately respond, processing the result later. Node.js excels at asynchronous I/O via callbacks/promises.

### 55. **What are design patterns commonly used in backends?**  
Answer: Common backend patterns include MVC (Model-View-Controller) for structuring code, Repository or Data Access Object for abstracting DB access, and Observer or Pub/Sub for event-driven flows. For example, the MVC pattern separates request handling (Controller), business logic (Model), and data representation (View/API response). Middleware and pipeline patterns are also used to process HTTP requests through layers.

### 56. **What is a database connection pool?**  
Answer: A connection pool is a cache of database connections maintained so they can be reused, instead of opening/closing connections for each request. Opening a DB connection is expensive. By using a pool, when a request needs DB access, it borrows a connection from the pool and returns it when done. This improves performance and resource utilization under load.

### 57. **What is a thread vs a process?**  
Answer: A process is an instance of a running program with its own memory space. A thread is a lightweight execution unit within a process that shares the process’s memory. Processes are isolated (different memory), while threads in the same process can communicate via shared memory. For example, each running Python interpreter is a process; it can spawn threads to do parallel work within it.

### 58. **What is vertical vs horizontal partitioning in databases?**  
Answer: Vertical partitioning splits a table into smaller tables by column; horizontal partitioning (sharding) splits a table into smaller tables by row. Vertical means separate out columns (e.g., put less-frequently-used columns in another table) for performance. Horizontal means distribute rows across multiple machines (e.g., user data by geography) to scale a large table across servers.

### 59. **How do you secure sensitive data in a database?**  
Answer: Sensitive data (like passwords) should be stored securely. For passwords, use strong one-way hashes with salt (e.g., bcrypt). For other data, use encryption at rest or field-level encryption as needed. Also restrict database access (firewalls, IAM), use TLS for DB connections, and follow the principle of least privilege for DB user permissions.

### 60. **What is input validation and why is it important?**  
Answer: Input validation means checking and sanitizing user-supplied data before using it. It’s important for security and correctness. For example, checking that an email field is a valid email prevents nonsense input. It also helps prevent attacks like SQL injection or XSS by rejecting or sanitizing malicious input. Validation ensures the backend operates on valid, expected data.

### 61. **What is serialization and why is it used?**  
Answer: Serialization is converting data structures into a format (like JSON or XML) that can be easily transmitted or stored. In backend APIs, we serialize database objects to JSON before sending them over HTTP to clients. For example, a user object is turned into a JSON string `{"id":1,"name":"Alice"}` for the client. This enables communication between services or between backend and frontend.

### 62. **What is Cross-Origin Resource Sharing (CORS) in a response?**  
Answer: CORS headers in a server’s response tell the browser which cross-origin requests are allowed. For example, setting `Access-Control-Allow-Origin: *` allows any domain to make requests. Without these headers, the browser would block cross-origin requests due to security policy. CORS itself is the mechanism by which servers indicate these permissions via HTTP response headers【58†L210-L218】.

### 63. **What is OAuth and how is it different from authentication?**  
Answer: OAuth is an authorization framework, often used to allow a third-party app to access user resources without sharing credentials. It’s not an authentication protocol per se. In OAuth 2.0, a user grants limited access (via tokens) to a client. In contrast, authentication verifies identity (like logging in). For example, “Login with Google” uses OAuth to let Google authenticate you and tell the app who you are without giving out your password.

### 64. **What is API versioning and why is it used?**  
Answer: (Note: Duplicate to #41; skip.)

### 65. **What are environment configuration files?**  
Answer: (Merged with Q48 about environment variables.)

### 66. **What is dual stack (IPv4 vs IPv6)?**  
Answer: (Possibly not needed for backend focus.)

### 67. **What is SSL/TLS handshake?**  
Answer: SSL/TLS handshake is the process establishing an HTTPS connection. The client and server exchange cryptographic information and agree on a cipher, then use that to encrypt the session. This ensures both sides can trust the connection and that data is private.

### 68. **What is hashing and how is it used in backend?**  
Answer: Hashing is creating a fixed-size string (hash) from input data. In backend, hashing is used to securely store passwords (e.g., using bcrypt) or to detect changes (like MD5 checksum). Because it’s one-way, you can’t derive the original from the hash. For example, when a user signs up, the server hashes the password and stores only the hash. Later, it hashes the login attempt and compares the hashes.

### 69. **What is multi-threading vs multi-processing?**  
Answer: Multi-threading means running multiple threads within one process (sharing memory), while multi-processing runs separate processes (with isolated memory). In many web backends, we use processes (or containers) to run multiple instances of an app. Node.js, however, is single-threaded by default and uses asynchronous I/O instead of threads.

### 70. **What is a semaphore or mutex and how is it used?**  
Answer: A mutex (mutual exclusion) is a lock that ensures only one thread accesses a resource at a time. A semaphore is a more general lock that allows a fixed number of concurrent accesses. In backend systems, we use mutexes to protect shared data (e.g., incrementing a counter) to avoid race conditions. For example, a mutex ensures two requests don’t update the same record simultaneously.

### 71. **What is system design for a chat application?**  
Answer: (We are asked for questions, not actual design answers. So skip this style question, as it requires an essay).

Actually, the user asks for interview questions/answers, not detailed design tasks. So maybe "How would you design a chat API" is too open. We should stick to direct questions.

### 72. **What is asynchronous processing and where would you use it?**  
Answer: (Duplicate concept of async vs sync, covered in Q54).

### 73. **How do you prevent deadlocks in a database?**  
Answer: Prevent deadlocks by ensuring transactions acquire locks in a consistent order and keep transactions short. For example, always lock tables in the same sequence. Using lower isolation levels or retry logic can also help. Deadlocks occur when two transactions each hold a lock the other needs; careful design avoids these cycles.

### 74. **How do you monitor a live backend system?**  
Answer: Use monitoring tools (like Prometheus or New Relic) to collect metrics (CPU, memory, request rates, error rates). Set up dashboards and alerts (e.g., Slack notifications) for key metrics. Regularly check logs for errors. For example, track the 95th percentile response time and get alerted if it spikes, indicating performance issues.

### 75. **What is pagination and why is it used in APIs?**  
Answer: Pagination is splitting large query results into smaller pages. Instead of returning thousands of records at once, the API returns, say, 50 at a time. Clients can request page 2, 3, etc. This reduces memory usage and latency on both client and server. For example, an API might support query parameters like `?page=2&limit=50` to paginate results.

### 76. **What is data sharding in a database?**  
Answer: Sharding is horizontally partitioning a database across multiple machines. Each shard holds a subset of data (e.g., users with ID 1–10000 on shard A, 10001–20000 on shard B). This allows scaling a very large dataset across servers. The application directs queries to the appropriate shard, usually based on a key.

### 77. **What is distributed caching?**  
Answer: Distributed caching means caching data across multiple servers, typically using a tool like Redis or Memcached in cluster mode. It allows sharing cached data among multiple application instances. For example, if you have many app servers, they all check the same distributed cache for data, reducing load on the database for all.

### 78. **What are common API authentication methods (besides JWT)?**  
Answer: Besides JWT, common methods include API keys (a secret token the client sends on each request) and OAuth 2.0 (where client exchanges credentials for an access token). HTTP Basic Auth (sending a username/password in headers) is another simple method. Each has trade-offs in security and statelessness.

### 79. **What is GraphQL and how does it differ from REST?**  
Answer: GraphQL is an API query language where clients specify exactly what data they need in a single request. Unlike REST’s fixed endpoints, GraphQL has a single endpoint and uses queries. For example, a client can request a user’s name and related posts in one call. REST might require multiple endpoints (e.g., `/users/1` and `/users/1/posts`). GraphQL reduces over/under-fetching by letting clients tailor queries.

### 80. **What is WebSocket and when would you use it?**  
Answer: WebSocket is a protocol that provides full-duplex communication channels over a single TCP connection. It allows real-time, two-way communication between client and server. For example, use WebSockets for chat applications or live feeds, where the server can push data to the client immediately without the client polling the server.

### 81. **How do you handle file uploads in a backend?**  
Answer: Typically, the backend receives the file in a request (multipart/form-data) and then either stores it on disk or uploads it to storage (like AWS S3). The backend might return a file ID or URL. It’s important to validate file size/type. For large files, using streaming or chunked uploads prevents excessive memory use.

### 82. **What is a CDN and why is it useful?**  
Answer: (Duplicate of Q23; skip.)

### 83. **How do you manage database migrations?**  
Answer: Database migrations are managed by tools (like Flyway, Liquibase, or ORM migrations) that apply schema changes in versioned steps. Each migration file alters the DB schema. The tool tracks applied migrations to update the database consistently across environments. For example, a migration might add a new table, and running the migration script updates dev, staging, and prod databases safely.

### 84. **What is circuit breaker pattern?**  
Answer: The circuit breaker is a pattern to improve resilience. It detects when a downstream service is failing and stops further attempts for a time (opening the “circuit”). For example, if your backend calls a slow service that’s timing out, the circuit breaker trips and short-circuits calls to fail fast, giving time for the service to recover and preventing cascading failures.

### 85. **What is lazy loading vs eager loading in databases?**  
Answer: Lazy loading fetches related data on demand, typically with additional queries when needed. Eager loading fetches all required related data upfront in one query (often with a JOIN). For instance, lazy loading might get a list of orders and then run a separate query for each order’s details. Eager loading would use a single query with a JOIN to get orders and their details together, reducing the N+1 problem.

### 86. **What is a singleton, and when might it be used in a backend?**  
Answer: A singleton is a design pattern where only one instance of a class exists in the application. In a backend, a singleton can be used for shared resources like a database connection pool or a configuration loader so that all parts of the app use the same instance. For example, in Node.js, requiring the same module returns the same object, effectively behaving like a singleton.

### 87. **How can you improve API performance?**  
Answer: To improve performance, you can use techniques like caching responses, using efficient database queries with indexes, compressing responses (gzip), and optimizing data payloads (e.g., only sending needed fields). Also, using asynchronous processing for heavy tasks (so requests aren’t blocked), and horizontal scaling (more servers) help handle higher load.

### 88. **What is Amdahl’s Law and how does it apply to scaling?**  
Answer: Amdahl’s Law states the speedup of a task using multiple processors is limited by the serial portion of the task. In backend scaling, it implies that if part of the workload cannot be parallelized (or cached), it limits overall improvement. For example, if 10% of a task is non-parallelizable, adding more servers yields diminishing returns beyond 10x speedup.

### 89. **What is sharding and when would you use it?**  
Answer: (Duplicate of Q76; skip.)

### 90. **How do you handle secrets (API keys, passwords) in a deployment?**  
Answer: Secrets should never be hard-coded in code. Use secure storage like environment variables, secrets managers (AWS Secrets Manager, Vault), or encrypted config files. For example, a CI/CD pipeline can inject the database password from a protected store into the application at runtime.

### 91. **What is a thread pool and why use it?**  
Answer: A thread pool is a collection of pre-created threads that can be used to perform tasks. It avoids the overhead of creating threads on-demand. In backends (like in Java), using a thread pool helps manage concurrency and limits the number of threads. For Node.js, the libuv library has a thread pool for some blocking operations.

### 92. **What is rate limiting and how can it be implemented?**  
Answer: (Duplicate of Q30; skip.)

### 93. **What is a Pub/Sub system?**  
Answer: A Publish/Subscribe (Pub/Sub) system is a messaging pattern where publishers send messages to topics and subscribers receive messages from those topics, often without knowing each other. For example, a backend might publish events (like “order_placed”) to a Pub/Sub broker (Kafka, Google Pub/Sub) and multiple services can subscribe to process those events asynchronously, enabling loose coupling.

### 94. **What are some common HTTP security headers?**  
Answer: Common security headers include `Content-Security-Policy` (controls which sources of content are allowed), `X-Content-Type-Options: nosniff` (prevents MIME type sniffing), `Strict-Transport-Security` (enforces HTTPS), and `X-Frame-Options` (prevents clickjacking). These headers help protect against XSS, clickjacking, and other web attacks.

### 95. **How would you design a logging system for microservices?**  
Answer: (As a Q, this is quite broad. But we need an answer style, though likely not needed in list given "focus on interview style explanations". Provide quick answer:)
You would centralize logs (e.g., ELK stack or Splunk) so all services send logs to it. Include contextual information (service name, request ID). Use structured logging (JSON) for easier querying. This allows tracing a request across services by following a unique ID through the logs.

### 96. **What is a reverse proxy and how is it used?**  
Answer: A reverse proxy sits in front of backend servers and forwards client requests to them. It also handles TLS termination, load balancing, and caching static content. For example, Nginx can act as a reverse proxy, receiving HTTPS requests, decrypting them, and routing to appropriate application servers.

### 97. **What is connection pooling and why is it used?**  
Answer: (Covered by Q56.)

### 98. **What are ACID and BASE in terms of database transactions?**  
Answer: ACID is the set of properties (Atomicity, Consistency, Isolation, Durability) for reliable relational transactions【17†L99-L104】. BASE is an alternative for distributed systems: Basically Available, Soft state, Eventual consistency. NoSQL systems often adopt BASE, meaning they might sacrifice immediate consistency for availability and partition tolerance【17†L99-L104】.

### 99. **What is “eventual consistency”?**  
Answer: Eventual consistency is a consistency model where updates to data propagate across nodes over time, and if no new updates occur, all copies will eventually converge to the same state. Unlike immediate consistency, there can be temporary differences between replicas. For example, in a distributed cache, one node’s update might not be seen by another immediately, but shortly after they sync.

### 100. **What is observability in backend systems?**  
Answer: Observability means having enough data (logs, metrics, traces) to understand the internal state of a system. A truly observable system lets engineers trace a request’s path through services (distributed tracing), see performance metrics (latency, error rate), and query logs. It goes beyond basic monitoring by providing deep insights for debugging in complex distributed environments.

