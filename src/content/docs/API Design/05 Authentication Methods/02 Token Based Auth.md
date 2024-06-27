---
title: Token-Based Authentication
description: Learn about the Token-Based Authentication method for user authentication in RESTful APIs, including its working, example, advantages, and best practices.

---
Token-based authentication ek modern aur secure method hai RESTful APIs me user authentication ke liye. Yeh method tokens use karta hai, jo ek secure way provide karte hain to authenticate clients without repeatedly sending credentials.

### Token-Based Authentication Ka Working

1. **Client Login**: Client credentials (username aur password) send karta hai to the authentication server.
2. **Token Issuance**: Server credentials verify karta hai aur ek token generate karta hai.
3. **Token Storage**: Client token ko securely store karta hai (e.g., in local storage or a cookie).
4. **Authenticated Requests**: Client token ko `Authorization` header me send karta hai for subsequent requests.
5. **Token Verification**: Server token verify karta hai aur access grant ya deny karta hai.

### Example Flow

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

2. **Server Response with Token**:
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

### Advantages

- **Security**: Token-based authentication se credentials repeatedly transmit nahi hote, reducing risk of interception.
- **Scalability**: Stateless tokens allow easy scaling of servers.
- **Flexibility**: Tokens can carry additional metadata (e.g., user roles, expiration).

### Types of Tokens

1. **JSON Web Tokens (JWT)**: Most common token format, self-contained and stateless.
2. **OAuth Tokens**: Used in OAuth 2.0 framework, supports various grant types.

### Token Security Best Practices

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

### Example: JWT Structure

JWT three parts me divided hota hai: Header, Payload, aur Signature.

1. **Header**: Algorithm aur token type specify karta hai.
   ```json
   {
     "alg": "HS256",
     "typ": "JWT"
   }
   ```

2. **Payload**: Claims contain karta hai, like user info aur token expiration.
   ```json
   {
     "sub": "1234567890",
     "name": "John Doe",
     "iat": 1516239022,
     "exp": 1516242622
   }
   ```

3. **Signature**: Header, Payload, aur secret key ko sign karke generate hota hai.

### Conclusion

Token-based authentication RESTful APIs ke liye ek secure aur scalable method hai. Yeh credentials repeatedly transmit nahi karta, server load ko reduce karta hai, aur flexibility provide karta hai. Proper implementation aur security practices follow karke APIs ko secure aur efficient banaya ja sakta hai. 🌐🔒

### Additional Resources

- JWT.io: JWT ka detailed information aur implementation.
- OAuth.net: OAuth 2.0 ke bare me comprehensive guide.
- OWASP: Secure token storage aur handling practices.