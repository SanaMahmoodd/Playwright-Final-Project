# Playwright Testing Framework – SauceDemo.com

This project contains end-to-end automated UI tests for [SauceDemo.com](https://www.saucedemo.com/) using **Playwright** and **TypeScript**.  
It tests essential features such as login, cart functionality, checkout, and product sorting.

---

## Features Covered

- Login with valid credentials
- Add product to cart
- Complete checkout process
- Remove product from cart
- Sort products by name (A-Z) and price (High to Low) 

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanaMahmoodd/Playwright-Final-Project.git
   cd project-playwright
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run all tests**
   ```bash
   npm run test
   ```

---

## View Test Report

After running tests, a visual HTML report will open automatically.  
You can also run it manually:

```bash
npx playwright show-report
```

---

## Tested On

- Chromium (Chrome)
- Firefox
- WebKit (Safari)

---

## Notes

- Using Playwright’s parallel browser testing.
- Page Object Model (POM) is used for maintainability.
- Hooks, `.env`, and custom scripts included.

---

## Author

**Sana Saleh & Nedal Shoqo**

If you like this repo, don't forget to ⭐ star it!
