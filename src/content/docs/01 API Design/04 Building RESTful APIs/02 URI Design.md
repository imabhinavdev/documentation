---
title: URI Design
description: Learn about the key principles, best practices, and examples for designing effective URIs (Uniform Resource Identifiers) in RESTful APIs.


---
URI (Uniform Resource Identifier) web resources ko identify karne ka tarika hai. RESTful APIs me, URI design critical hota hai kyunki yeh APIs ko intuitive, easy to use, aur maintainable banata hai. Achhe URI design se aapke API endpoints user-friendly, self-descriptive, aur consistent hote hain.

### URI Design Ke Key Principles

1. **Resource-Based Approach**:
   - URI me resources ko nouns ke through represent karo, verbs avoid karo.
   - Example:
     - Correct: `/users`, `/products`
     - Incorrect: `/getUser`, `/createProduct`

2. **Consistent Structure**:
   - Consistent naming conventions aur structure use karo throughout your API.
   - Example:
     - Correct: `/users`, `/users/{id}/orders`
     - Incorrect: `/users`, `/user_orders`

3. **Use Hierarchical Structure**:
   - Resources ko hierarchical structure me organize karo to represent relationships.
   - Example:
     - Users aur unke orders: `/users/{id}/orders`

4. **Plural Nouns for Collections**:
   - Collections ko plural nouns use karke represent karo.
   - Example:
     - Correct: `/users`, `/orders`
     - Incorrect: `/user`, `/order`

5. **Avoid Deep Nesting**:
   - URI ko unnecessary deep nesting se avoid karo; yeh complex aur difficult to use ho sakti hain.
   - Example:
     - Correct: `/users/{id}/orders`
     - Incorrect: `/users/{id}/orders/{orderId}/items/{itemId}`

### URI Design Ke Best Practices

1. **Use Meaningful Resource Names**:
   - Resource names meaningful aur understandable hone chahiye.
   - Example:
     - `/customers` instead of `/cust`
     - `/products` instead of `/prod`

2. **Use Path Parameters for Resource Identification**:
   - Specific resources ko identify karne ke liye path parameters use karo.
   - Example:
     - `/users/{userId}`
     - `/orders/{orderId}`

3. **Use Query Parameters for Filtering and Sorting**:
   - Filtering, sorting, aur pagination ke liye query parameters use karo.
   - Example:
     - `/users?age=30`
     - `/products?category=electronics&sort=price`

4. **Implement Versioning**:
   - API versions ko represent karne ke liye URI me versioning implement karo.
   - Example:
     - `/v1/users`
     - `/v2/users`

5. **Use Hyphens for Readability**:
   - URI components ko readable banane ke liye hyphens use karo, underscores avoid karo.
   - Example:
     - Correct: `/user-profile`
     - Incorrect: `/user_profile`

6. **Lowercase Letters**:
   - URI me lowercase letters use karo, uppercase avoid karo to maintain consistency.
   - Example:
     - Correct: `/products`
     - Incorrect: `/Products`

7. **Indicate Resource Hierarchy**:
   - URI me resource hierarchy clearly indicate karo.
   - Example:
     - `/users/{userId}/orders` for user’s orders
     - `/shops/{shopId}/products` for shop’s products

### URI Design Examples

1. **Basic Resource URIs**:
   - Retrieve all users: `/users`
   - Retrieve a specific user: `/users/{userId}`
   - Retrieve all orders: `/orders`
   - Retrieve a specific order: `/orders/{orderId}`

2. **Hierarchical Resource URIs**:
   - Retrieve orders of a specific user: `/users/{userId}/orders`
   - Retrieve items of a specific order: `/orders/{orderId}/items`

3. **Query Parameters for Filtering and Sorting**:
   - Retrieve users filtered by age: `/users?age=30`
   - Retrieve products sorted by price: `/products?sort=price`
   - Retrieve paginated results: `/users?page=2&pageSize=10`

4. **Versioning URIs**:
   - Version 1 of users endpoint: `/v1/users`
   - Version 2 of users endpoint: `/v2/users`

### Conclusion

Achhe URI design se aapke RESTful APIs intuitive, user-friendly, aur maintainable bante hain. URI design ke principles aur best practices follow karke aapke endpoints consistent aur self-descriptive hote hain, making them easy to understand aur use. Meaningful resource names, proper use of path aur query parameters, versioning, aur readability maintain karke aap effective aur efficient URI design ensure kar sakte hain. Yeh guidelines follow karke aap apne web services ko streamline kar sakte hain aur better developer aur user experience provide kar sakte hain! 🌐🚀