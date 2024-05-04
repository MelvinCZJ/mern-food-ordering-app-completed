# Mern Stack Food Ordering App

Credits to Chris Blakely @ChrisBlakely <br>

## Demo

[Click here to check it out!](https://mern-food-ordering-app-frontend-84wk.onrender.com)<br>

## Tech Stack

### Frontend

- Framework/Language:
  - React (with Vite)
- Styling:
  - Tailwind CSS
- UI Components:
  - Shadcn/ui Components
- Authentication:
  - Auth0

### Backend

- Framework/Language:
  - Node.js (Express Router)
- Database:
  - MongoDB (via Mongoose)
- Image Hosting:
  - Cloudinary
- Payment Processing:
  - Stripe

### Additional Tools

- Testing:
  - Stripe CLI
  - MongoDB Compass

### Hosting

- Platform:
  - Render

## Feature Descriptions

### Homepage

#### Log In

- **Description:** Allows users to sign up/sign in through Auth0.

#### Searchbar

- **Description:** Allows users to search for restaurants by City or Town.

#### Order Status

- **Description:** Allows users to check the statuses of their orders, view order details including estimated delivery time, delivery address, user name, ordered items, and total amount paid.

#### Navigation (After Logging In)

- **Description:** Allows users to navigate to the manage restaurant page, user profile page, or log out.

### Manage Restaurant Page

#### Orders

- **Description:** Allows restaurant owners to view and update the status of orders, including order creation date and order details.

#### Manage Restaurant Information

- **Description:** Allows restaurant owners to manage their restaurant information such as name, location, delivery details, cuisines, menu, and image.

### User Profile Page

#### Update Profile

- **Description:** Allows users to update their name, address, city, and country.

### Search Page

#### Filter and Sort

- **Description:** Allows users to filter restaurants by name or cuisines and sort results by best match, shortest delivery time, or lowest delivery price. No results will be shown if no restaurants are found in the searched city or town.

#### Restaurant Details

- **Description:** Displays restaurant details including image, location, cuisines offered, and menu. Allows users to add items to their order and proceed to checkout.

### Checkout Process

#### Order Summary and Checkout

- **Description:** Displays a summary of the user's order with the option to add or remove items. Enables checkout only when items are in the cart. Redirects to Stripe payment site for payment processing.

### Additional Features

#### Mobile-Friendly Design

- **Description:** Ensures the webpage is optimized for mobile devices.

## Deployment

**Note:** This repository currently contains the most updated code from both the frontend and backend repositories mentioned below.

This project is deployed on [Render.com](https://render.com/), a cloud platform that makes it easy to deploy and manage web applications. The app consists of separate frontend and backend components, each hosted in its own GitHub repository. This approach allows for concurrent development and updates to both the frontend and backend without disrupting the services of the app.

### Frontend Deployment

The frontend of the application is hosted in a dedicated GitHub repository at [mern-food-ordering-app-frontend](https://github.com/MelvinCZJ/mern-food-ordering-app-frontend). It is deployed using Render's static site hosting service, which provides fast and reliable hosting for static websites. Whenever changes are made to the frontend codebase and pushed to the repository, Render automatically rebuilds and deploys the updated frontend, ensuring that the latest version of the app is always available to users.

### Backend Deployment

The backend of the application is hosted in a separate GitHub repository at [mern-food-ordering-app-backend](https://github.com/MelvinCZJ/mern-food-ordering-app-backend). It is deployed using Render's managed service for Docker containers, which allows for easy deployment and scaling of backend services. Similar to the frontend deployment process, any changes made to the backend codebase are automatically deployed to Render, ensuring continuous availability of the backend services.

By deploying the frontend and backend components separately on Render.com, it allows for a scalable and resilient architecture while enabling seamless development and updates to the application.

## License

This project is licensed under the MIT License.
