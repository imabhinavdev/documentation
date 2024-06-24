---
title: URL, Query & Path Parameters
description: Learn about URLs, query parameters, and path parameters, and how they are used to access resources on the web.
---

A URL is the address used to access resources on the web. It consists of several components:

- **Scheme**: Specifies the protocol used (e.g., `http://`, `https://`).
- **Host**: Specifies the domain or IP address of the server (e.g., `www.example.com`).
- **Port**: Optional; specifies the port number on the server (e.g., `:8080`).
- **Path**: Specifies the location of a specific resource on the server (e.g., `/products`).
- **Query Parameters**: Optional; used for passing key-value pairs to a resource (e.g., `?category=electronics&price_range=100-500`).

### Query Parameters

Query parameters are appended to the end of a URL and start with a question mark (`?`). They are used to pass data to a web server as key-value pairs. Here are some examples:

- `https://www.example.com/search?query=api`
- `https://www.example.com/products?category=electronics&price_range=100-500`
- `https://www.example.com/users?id=123&name=John&status=active`

In these examples:
- `query=api`, `category=electronics`, `price_range=100-500`, `id=123`, `name=John`, and `status=active` are query parameters.

### Path Parameters

Path parameters are segments within the path of a URL that denote specific resources or identifiers. They are typically used in RESTful APIs to specify unique resource identifiers. Here are some examples:

- `https://api.example.com/users/123`
- `https://api.example.com/products/laptops`
- `https://api.example.com/countries/USA/cities/NewYork`

In these examples:
- `123`, `laptops`, `USA`, and `NewYork` are path parameters representing unique identifiers or resource names.

### Combining URL Components

URLs often combine multiple components to specify a complete address for accessing resources. Here's an example combining scheme, host, path, and query parameters:

- `https://api.example.com/products/laptops?category=electronics&price_range=100-500`

In this URL:
- `https` is the scheme.
- `api.example.com` is the host.
- `/products/laptops` is the path.
- `category=electronics&price_range=100-500` are query parameters.

### Conclusion

Understanding URL, query parameters, and path parameters is fundamental for navigating and interacting with resources on the web. URL components work together to specify the location of resources and provide mechanisms for passing data to servers. Whether you're building APIs, developing web applications, or troubleshooting network issues, grasping these concepts will empower you to effectively utilize and navigate the vast landscape of the internet.