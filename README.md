# 🛒 BazarDor — বাজারদর

BazarDor is a modern, responsive grocery price tracking web application designed to help people in Bangladesh explore daily prices of essential products, compare prices across local markets, and monitor price changes over time. With a Bengali-friendly interface, BazarDor makes grocery price information accessible and easy to understand.

## 🌐 Project Links

- **Live Demo:** [Website Link](https://bazardor-next-app.vercel.app/)
- **GitHub Repository:** [GitHub repository URL](https://github.com/sojibkhan567/bazardor-next-app)

## ✨ Features

### 🏠 1. Homepage — Product Price Sections

The homepage provides an overview of grocery prices through three main sections:

- **আজ দাম বেড়েছে ▲** — Displays the top 6 products with the highest price increases.
- **আজ দাম কমেছে ▼** — Displays the top 6 products with the largest price decreases.
- **সব পণ্য** — Displays all available products with a descriptive subtitle and responsive product cards.

**Product cards include:**

- 📷 Product emoji or illustration, such as 🍚 🫘 🥔 🧅 🌶️ 🐟 🍗 🥚 🧄
- 📛 Bengali product name, such as স্বর্ণমাছি চাল, মিনিকেট চাল, ইলিশ মাছ, and পেঁয়াজ
- 🖇️ Unit information, such as প্রতি কেজি, প্রতি লিটার, প্রতি ডজন, and প্রতি পিস
- 💰 Today's price displayed in Bengali digits, such as ১৪৮ টাকা or ১,৮৫০ টাকা
- 📊 Price change badge showing the percentage increase, decrease, or no change

**Price indicator colors:**

- 🟢 Green — Price increased
- 🔴 Red — Price decreased
- ⚪ Gray — Price unchanged

Products are displayed in a responsive grid with 3–4 columns on large screens and fewer columns on smaller devices. Clicking a product card navigates to its corresponding detail page.

### 📊 2. Daily Price Tracking

- View current grocery prices.
- Compare today's prices with yesterday's prices.
- Track prices from the previous week and month.
- Identify price increases, decreases, and unchanged prices.
- Display price changes as percentages using Bengali digits where appropriate.

### 🥬 3. Category Pages

Browse grocery products by category, with a dedicated page for each category.

**Features include:**

- Category title and icon.
- Product cards consistent with the homepage design.
- Sorting options:
  - সাজান: ডিফল্ট
  - দাম: কম থেকে বেশি
  - দাম: বেশি থেকে কম
- Loading while products are being fetched.
- An empty state for categories without products or invalid category slugs.
- A **হোম পেজে ফিরে যান** button to return to the homepage.

### 🛍️ 4. Product Details Page

Each product has a dedicated detail page accessible through `/product/[slug]`. This page requires the user to be logged in.

**Product summary:**

- Product emoji and title.
- Description and market summary.
- Category tags, such as সবজি and চাল.
- Unit information, such as প্রতি কেজি, প্রতি লিটার, প্রতি ডজন, and প্রতি পিস.

**Price summary:**

- Minimum price
- Maximum price
- Average price

**বাজারভিত্তিক আজকের দাম**

Displays today's prices across different markets, allowing users to compare grocery prices by bazar. The layout can use a clean, Figma-inspired design with market names and their respective prices.

### 🔐 5. User Authentication with Better Auth

BazarDor uses Better Auth to provide secure authentication and personalized access.

**Sign In — `/signin`**

- Email and password login form.
- Google and GitHub social login options.
- Link to the registration page.
- Success and error toast notifications.
- Validation messages for invalid form submissions.
- Redirect to the homepage after successful login.

**Sign Up — `/signup`**

- Registration form with name, email, and password fields.
- Google and GitHub social login options.
- Link to the sign-in page.
- Validation and registration error messages.
- Success notification after registration.
- Redirect to the sign-in page after successful email/password registration.

**Authentication features:**

- Email/password authentication using Better Auth.
- Google OAuth integration.
- GitHub OAuth integration.
- Protected product detail routes.
- Login, registration, and logout notifications.
- Form validation and user-friendly error handling.
- Loading indicators and skeleton loaders during authentication operations.

### 🔔 6. Toast Notifications and Loading States

- Success notifications for login, registration, and logout.
- Error notifications for authentication failures and validation errors.
- Feedback for failed requests and other relevant operations.
- Skeleton loaders or loading indicators while fetching product and category data.

### 📱 7. Fully Responsive Design

BazarDor is designed to work across mobile, tablet, laptop, and desktop screens.

- Responsive product grids.
- Mobile-friendly navigation.
- Readable Bengali text and prices.
- Flexible layouts for category and product detail pages.
- Touch-friendly buttons, forms, and interactive elements.

### 🇧🇩 8. Bengali-Friendly User Experience

- Bengali product names and market information.
- Bengali numerals for prices and percentages.
- Familiar Bangladeshi market terminology.
- Clear indicators for rising and falling prices.
- Grocery units displayed in Bengali.

## 🛠️ Technologies Used

| Technology                 | Purpose                                  |
| -------------------------- | ---------------------------------------- |
| Next.js                    | Application framework and App Router     |
| React                      | User interface development               |
| TypeScript                 | Static type checking                     |
| Tailwind CSS               | Responsive styling                       |
| DaisyUI                    | Theme and UI utilities, if configured    |
| Better Auth                | Authentication and session management    |
| Google OAuth               | Social authentication                    |
| GitHub OAuth               | Social authentication                    |
| REST API / JSON            | Product, category, and market price data |
| Toast notification library | User feedback and alerts                 |
| Git & GitHub               | Version control                          |
| Vercel                     | Deployment and hosting                   |

## 🚀 Deployment

BazarDor can be deployed using Vercel or another platform compatible with Next.js.

Before deployment:

- Configure the required environment variables.
- Set up Better Auth with the production application URL.
- Configure Google and GitHub OAuth credentials and callback URLs.
- Verify product API endpoints and database connectivity, where applicable.
- Test authentication, protected routes, and redirects.
- Run the production build and resolve any errors.
- Verify responsive layouts and all major features on the live website.

## 📄 License

Specify the project's license before distributing the application.

---

**BazarDor — আপনার বাজারের দামের বিশ্বস্ত সঙ্গী। 🇧🇩**

_Built with Next.js, React, TypeScript, Tailwind CSS, and Better Auth._
