# React-Shopping-Cart

Building a shopping cart app using react

Absolutely — here’s a **clear, practical assignment** for building a **React Shopping Cart App**, tailored like a dev task you'd get in the real world.

---

## 🛒 React Project Assignment: Shopping Cart

### 🎯 Goal:

Build a simple shopping cart app in React. Users can view products, add them to a cart, update quantities, and see a running total.

---

## 📋 Requirements

### 1. **Product List Page**

- Display a list/grid of 5–10 products (name, image, price, “Add to Cart” button).
- Products can be hardcoded in an array or pulled from a mock API (e.g., `https://fakestoreapi.com`).

### 2. **Cart Functionality**

- When “Add to Cart” is clicked:

  - If the product is already in the cart, increment the quantity.
  - If it’s not, add it with quantity = 1.

- Cart should be **global** state (you can use React Context or jump into Redux).
- Cart should track:

  - Item name
  - Quantity
  - Price
  - Subtotal (price × quantity)

### 3. **Cart View / Sidebar / Modal**

- Show all items currently in the cart
- Show a total cost at the bottom
- Include buttons:

  - ➕ Increase quantity
  - ➖ Decrease quantity
  - ❌ Remove item

- Optionally allow clearing the entire cart

### 4. **Styling**

- Use CSS or a framework like Bootstrap or Tailwind
- Make it clean and responsive (especially for mobile)

### 5. **Bonus Features (Optional)**

- Store cart in `localStorage` so it persists on refresh
- Add a "Checkout" button with a fake payment confirmation
- Add product categories or a search filter
- Use Redux Toolkit instead of Context

---

## 🧠 What You’ll Practice

- State management across components
- Component reuse
- Managing derived data (subtotal, total)
- Conditional rendering
- Building real-world user interactions

---

## 🧑‍💻 Suggested Folder Structure

```
src/
├── components/
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
├── context/ (or redux/)
│   └── CartContext.jsx (or store.js)
├── data/
│   └── products.js
├── App.jsx
└── index.js
```

---

## ✅ Deliverable

- A working shopping cart React app
- Hosted live (on Netlify, GitHub Pages, etc.)
- Code in a public GitHub repo

---

Let me know if you want help setting up the product data, designing the layout, or choosing between Context and Redux!
