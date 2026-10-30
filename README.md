
# 🧁 KMM Bakery Website

**Student Name:** Keoratile Matabane  
**Student Number:** ST10513349  
**Module:** Web Development - WEDE5020

---

## 1. Project Overview

KMM Bakery is an interactive bakery website developed to establish a professional online presence for the business. The website allows customers to explore bakery products, view prices, learn about the bakery, submit enquiries, and prepare orders through an interactive ordering page.

The website uses HTML5, CSS3, and JavaScript to provide structured content, visual styling, hover effects, interactive form controls, and automatic order calculations. The contact page also uses asynchronous form submission through the FormSubmit service.

## 2. Project Objectives

The main objectives of the KMM Bakery website are to:

- Establish a professional online presence for KMM Bakery.
- Showcase bakery products with images and prices.
- Allow customers to navigate between different website pages.
- Provide individual pages for different bakery products.
- Enable customers to select multiple products in one order.
- Allow customers to choose product flavours and quantities.
- Provide cake size options for custom cakes.
- Calculate order totals automatically.
- Allow customers to specify collection dates and special instructions.
- Provide an online enquiry form.
- Improve user interaction through hover effects and interactive controls.
- Make business information and contact details accessible to customers.

## 3. Website Features

### 3.1 Navigation Bar

The navigation bar provides links to the main website pages:

- Home
- Menu
- About
- Contact Us

The links allow customers to move between the different sections and pages of the website.

### 3.2 Interactive Product Menu

The homepage displays five bakery product categories:

| Product | Price |
|---|---|
| Cupcakes | R15 each |
| Brownies | R20 each |
| Cookies | R15 each |
| Cinnamon Rolls | R25 each |
| Custom Cakes | From R150 |

Each product is displayed with an image, name, price, and link to its respective product page.

### 3.3 Interactive Elements and Hover Effects

The website incorporates interactive elements to improve usability and navigation.

These include:

- Navigation links to other website pages.
- Clickable product links.
- Buttons linking to the ordering page.
- CSS hover effects that provide visual feedback when users move their cursor over interactive elements.
- Select menus and input fields for entering order information.
- Clickable WhatsApp and Instagram links.
- Interactive enquiry form controls.

### 3.4 About Section

The About section introduces KMM Bakery and describes its selection of freshly baked treats, including cupcakes, cookies, cinnamon rolls, custom cakes, and brownies.

It presents the bakery's focus on providing delicious treats for everyday enjoyment and special occasions.

### 3.5 Online Ordering System

The website includes a dedicated ordering page, `Order.html`, where customers can prepare an order by selecting products and entering their order details.

The ordering page includes the following features:

- **Customer name:** Allows customers to enter their name.
- **Product selection:** Provides five order slots for selecting bakery products.
- **Flavour selection:** Provides a dropdown menu for choosing a flavour for each selected item.
- **Cake size selection:** Offers size options for custom cakes.
- **Quantity selection:** Allows customers to specify the quantity of each product.
- **Collection date:** Allows customers to choose their preferred collection date.
- **Allergies and special instructions:** Provides a text area for additional information.
- **Order total:** Displays the calculated total price.
- **Place Order button:** Provides a control for initiating the order process.

### 3.6 Automatic Price Calculations

The ordering page links to an external JavaScript file named `Calculations.js`.

This script is intended to handle the ordering calculations and interactive behaviour of the page.

The system is designed to calculate the total cost based on the selected products, quantities, and applicable cake sizes.

The total is displayed on the page so customers can review their order cost before proceeding.

### 3.7 Contact Information

The contact page provides customers with ways to communicate with KMM Bakery.

- **WhatsApp:** +27 76 081 5437
- **Instagram:** @YummyKMMummyBakery

The page includes links for opening WhatsApp and visiting the bakery's Instagram profile.

### 3.8 Opening Hours

The contact page displays the bakery's operating hours:

- **Weekdays:** 08:00–17:00
- **Weekends:** 10:00–17:00
- **Public holidays:** 10:00–13:00

### 3.9 Online Enquiry Form

The contact page includes an enquiry form for customers who have questions or special requests.

The form collects:

- Full name
- Email address
- Phone number
- Enquiry type
- Message

Customers can select an enquiry category, including general enquiries, custom cakes, product prices, special orders, delivery, and other requests.

Required fields and email input validation help ensure that the necessary information is provided.

### 3.10 AJAX-Style Form Submission Using FormSubmit

The enquiry form uses JavaScript's `fetch()` API to send form data asynchronously to the FormSubmit service.

This implementation includes:

- Collecting form data using the `FormData` interface.
- Sending an asynchronous HTTP request.
- Processing the JSON response.
- Displaying a success message when submission succeeds.
- Displaying an error message when submission fails.
- Temporarily disabling the submit button during submission.
- Resetting the form after successful submission.

This approach provides feedback without requiring a traditional page reload.

Successful email delivery depends on the external service and correct recipient configuration.

## 4. Technologies Used

The website uses the following technologies and services:

- **HTML5:** Structures the website pages, navigation, product cards, forms, and content.
- **CSS3:** Controls layout, visual presentation, and hover effects.
- **JavaScript:** Provides interactive behaviour and order calculations.
- **Fetch API:** Sends enquiry data asynchronously.
- **FormData API:** Collects form values for submission.
- **FormSubmit:** Processes and forwards enquiry submissions to the configured email recipient.

## 5. Website Structure

The project contains the following files and directories:

- `KMM.html` - Main homepage.
- `Menu.html` - Menu page.
- `About.html` - About page.
- `contact.html` - Contact information and enquiry form.
- `Order.html` - Interactive ordering page.
- `Cupcakes.html` - Cupcakes product page.
- `Brownies.html` - Brownies product page.
- `Cookies.html` - Cookies product page.
- `CR.html` - Cinnamon rolls product page.
- `Cakes.html` - Custom cakes product page.
- `Calculations.js` - JavaScript for order calculations and ordering interactions.
- `style.css` - Website styling and hover effects.
- `Font/` - Directory containing the bakery logo.
- `Images/Main/` - Directory containing homepage product images.

## 6. Target Audience

The target audience includes customers who want to browse bakery products, compare prices, prepare orders, enquire about custom cakes, and contact the bakery.

The website caters to individuals purchasing baked goods for personal enjoyment, celebrations, and special occasions.

## 7. Expected Benefits

The KMM Bakery website aims to:

- Increase the bakery's online visibility.
- Present products in an organised and attractive format.
- Make product information and prices easier to access.
- Improve navigation through interactive elements.
- Help customers prepare orders with multiple products.
- Reduce manual price calculations through an automatic total.
- Provide convenient access to contact information.
- Allow customers to submit enquiries online.
- Improve the overall customer browsing experience.

## 8. Future Improvements

Potential future improvements include:

- Integrating online payment functionality.
- Connecting orders to a database or order management system.
- Sending automatic order confirmation messages.
- Providing customers with order tracking.
- Improving and testing mobile responsiveness.
- Adding customer reviews and testimonials.
- Providing product availability information.
- Enhancing accessibility and keyboard navigation.

## 9. Conclusion

The KMM Bakery website combines HTML5, CSS3, and JavaScript to create an interactive platform for showcasing bakery products, preparing orders, and communicating with customers.

The product menu, hover effects, ordering controls, automatic price calculations, and asynchronous enquiry form contribute to a user-friendly experience. The project demonstrates how front-end web technologies and an external form-processing service can support the online presence and customer communication needs of a bakery.
