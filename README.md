
# KMM Bakery Website

**Student Name:** Keoratile Matabane  
**Student Number:** ST10513349  
**Module:** Web Development - WEDE5020

## 1. Project Overview

KMM Bakery is a bakery website developed to showcase the bakery's products and provide customers with an easy and convenient way to explore the menu, place orders and make enquiries.

The website presents information about the bakery, displays available baked goods and provides direct communication channels through WhatsApp, Instagram and an online enquiry form.

## 2. Project Objectives

The main objectives of the website are to:

- Create an attractive and user-friendly online presence for KMM Bakery.
- Display the bakery's products and their prices.
- Allow customers to place orders through an online order form.
- Provide customers with information about the bakery.
- Make it easier for customers to contact the bakery.
- Improve customer interaction through interactive website features.

## 3. Website Features

### 3.1 Home Page

The homepage introduces KMM Bakery and welcomes visitors with the message:

"So Freshly Baked, Just for YOU."

It includes:
- A navigation bar for accessing different website pages.
- A hero section introducing the bakery.
- A call-to-action button that directs customers to the order page.
- Featured bakery products with images and prices.
- An About section introducing the bakery.
- A contact section displaying the bakery's contact information.
- A footer containing the bakery's copyright information.

### 3.2 Menu Page

The menu allows customers to explore the different baked products offered by KMM Bakery.

Products include:
- Cupcakes
- Brownies
- Cookies
- Cinnamon Rolls
- Custom Cakes

Each product category provides customers with an opportunity to explore the available products.

### 3.3 About Page

The About page provides more information about KMM Bakery and its purpose.

It includes:
- An introduction to the bakery.
- The bakery's mission and vision.
- The bakery's values.
- A product showcase featuring images of selected baked goods.
- A call-to-action section encouraging customers to explore the menu, place an order or contact the bakery.

The About page includes three interactive navigation buttons:
- Explore Our Menu
- Place an Order
- Contact Us

### 3.4 Order Page

The order page allows customers to select products and provide the information needed for an order.

Features include:
- Customer name input.
- Selection of up to five products.
- Flavour selection for each product.
- Cake size selection for custom cakes.
- Quantity selection.
- Collection date selection.
- An allergy and special instructions field.
- A displayed order total.

JavaScript is used for order-related calculations and interactive behaviour through the `Calculations.js` file.

### 3.5 Contact Page

The contact page provides customers with different ways to communicate with KMM Bakery.

It includes:

**Contact Information**
- WhatsApp: +27 76 081 5437
- Instagram: @YummyKMMummyBakery

**Opening Hours**
- Monday to Friday: 08:00 – 17:00
- Weekends: 10:00 – 17:00
- Public Holidays: 10:00 – 13:00

**Online Enquiry Form**

Customers can submit enquiries by providing:
- Full name
- Email address
- Phone number
- Enquiry type
- Message

The form uses AJAX-style submission through JavaScript Fetch API and FormSubmit. This allows form information to be submitted asynchronously without requiring the page to reload.

The form also provides success and error messages to inform customers about the submission status.

## 4. Interactive Features

The website incorporates several interactive features to improve the user experience.

These include:

- **Navigation links:** Allow users to move between the different website pages.
- **Hover effects:** Buttons, navigation links and product elements respond visually when users hover over them.
- **Clickable product cards:** Allow customers to access individual product pages.
- **Call-to-action buttons:** Direct customers to the menu, order and contact pages.
- **Order calculations:** JavaScript supports the calculation of order totals based on selected products and quantities.
- **Dynamic form feedback:** The contact form displays success or error messages after submission.
- **Form validation:** Required fields help ensure customers provide the necessary information before submitting enquiries.
- **Responsive styling:** CSS media queries help adapt the website layout to different screen sizes.

## 5. Technologies Used

The website was developed using the following technologies:

| Technology | Purpose |
|---|---|
| HTML5 | Structures the website content and pages. |
| CSS3 | Controls the website's appearance, layout, styling and hover effects. |
| JavaScript | Adds interactivity and handles order calculations and form submission. |
| Fetch API | Allows asynchronous submission of contact form information. |
| FormSubmit | Handles the delivery of contact form submissions through email. |

## 6. Project File Structure

The project is organised into different files and folders to make the website easier to manage.

```text
KMM-Bakery/
│
├── KMM.html
├── Menu.html
├── About.html
├── Order.html
├── contact.html
│
├── Cupcakes.html
├── Brownies.html
├── Cookies.html
├── CR.html
├── Cakes.html
│
├── style.css
├── Calculations.js
│
├── Font/
│   └── Logo.jpeg
│
└── Images/
    └── Main/
        ├── CupcakeM.jpg
        ├── BrownieM.jpg
        ├── CookieM.jpg
        ├── CRM.jpg
        └── CakesM.jpg
```

## 7. Target Audience

The website is intended for customers interested in purchasing freshly baked products from KMM Bakery.

This includes:
- Individuals looking for baked treats.
- Customers ordering cakes for special occasions.
- Customers interested in customised bakery products.
- Individuals who want to enquire about prices, products or special orders.

## 8. Expected Benefits

The website is expected to provide the following benefits:

- Increased online visibility for KMM Bakery.
- Easier access to product information and prices.
- Improved communication between the bakery and its customers.
- A convenient way for customers to submit enquiries.
- A more organised process for collecting order information.
- A professional online representation of the bakery.

## 9. Future Improvements

Possible future improvements include:

- Adding an online payment system.
- Introducing customer accounts and order tracking.
- Adding a database to store customer orders.
- Including customer reviews and testimonials.
- Improving the website's mobile experience.
- Adding an automated order confirmation system.

## 10. Conclusion

The KMM Bakery website provides an online platform where customers can explore bakery products, learn about the business, submit enquiries and provide their order details.

By combining HTML, CSS and JavaScript, the website offers an informative and interactive experience while supporting the bakery's communication and customer engagement.
