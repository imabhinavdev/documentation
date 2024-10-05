---

title: JWT Authentication
description: Learn about JSON Web Tokens (JWT) authentication for user authentication in RESTful APIs, including its working, example, advantages, disadvantages, and best practices.


---


JSON Web Tokens (JWT) authentication ek popular method hai RESTful APIs me user authentication ke liye. JWT ek self-contained token hai jo user ke information aur authentication claims store karta hai, making it both secure aur stateless.

### JWT Authentication Ka Working

1. **Client Login**: Client credentials (username aur password) send karta hai authentication server ko.
2. **Token Issuance**: Server credentials verify karta hai aur ek JWT generate karta hai.
3. **Token Storage**: Client JWT ko securely store karta hai (e.g., in local storage or a cookie).
4. **Authenticated Requests**: Client JWT ko `Authorization` header me send karta hai for subsequent requests.
5. **Token Verification**: Server JWT verify karta hai aur access grant ya deny karta hai.

### JWT Structure

JWT three parts me divided hota hai: Header, Payload, aur Signature.

1. **Header**: 
   - Algorithm aur token type specify karta hai.
   ```json
   {
     "alg": "HS256",
     "typ": "JWT"
   }
   ```

2. **Payload**: 
   - Claims contain karta hai, like user info aur token expiration.
   ```json
   {
     "sub": "1234567890",
     "name": "John Doe",
     "iat": 1516239022,
     "exp": 1516242622
   }
   ```

3. **Signature**: 
   - Header, Payload, aur secret key ko sign karke generate hota hai.

### JWT Example

Assume karo user `john` with password `secret`.

1. **Login Request**:
   ```http
   POST /auth/login HTTP/1.1
   Host: example.com
   Content-Type: application/json

   {
     "username": "john",
     "password": "secret"
   }
   ```

2. **Server Response with JWT**:
   ```json
   {
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   }
   ```

3. **Authenticated API Request**:
   ```http
   GET /api/resource HTTP/1.1
   Host: example.com
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### JWT Advantages

- **Stateless**: Server pe session maintain karne ki zaroorat nahi hoti, improving scalability.
- **Self-contained**: Token me sab information hoti hai to verify authenticity, reducing server load.
- **Secure**: Properly implemented JWTs are secure, ensuring data integrity and authenticity.

### JWT Security Best Practices

1. **Use HTTPS**: Ensure encrypted communication to prevent token interception.
   - Example: `https://api.example.com`

2. **Token Expiration**: Set token expiration to limit token lifetime.
   - Example: `exp` claim in JWT to specify expiration time.

3. **Secure Storage**: Store tokens securely on the client side.
   - Example: Use HttpOnly cookies to store tokens to prevent XSS attacks.

4. **Token Revocation**: Implement token revocation mechanisms for compromised tokens.
   - Example: Maintain a token blacklist on the server.

5. **Use Strong Signing Algorithms**: Ensure tokens are signed with strong algorithms (e.g., HS256, RS256).
   - Example: Use `alg` claim in JWT to specify the algorithm.

6. **Validate Tokens**: Always validate tokens on the server side before granting access.
   - Example: Use libraries to decode and validate JWTs.

### Example: JWT Validation Flow

1. **Token Reception**: Server receives the token in the `Authorization` header.
2. **Token Decoding**: Server decodes the token to extract the header and payload.
3. **Signature Verification**: Server verifies the signature using the secret key.
4. **Claims Verification**: Server checks the claims (e.g., expiration, issuer) to ensure token validity.

### Conclusion

JWT authentication RESTful APIs ke liye ek secure aur scalable method hai. Yeh credentials repeatedly transmit nahi karta, server load ko reduce karta hai, aur flexibility provide karta hai. Proper implementation aur security practices follow karke APIs ko secure aur efficient banaya ja sakta hai. 🌐🔒

### Additional Resources

- JWT.io: JWT ka detailed information aur implementation.
- OWASP: Secure token storage aur handling practices.