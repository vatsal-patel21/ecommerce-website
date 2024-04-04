# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Determining workspace structure

Deciding which workspace information to collect

Gathering workspace info

# VastVoyage

This is a brief description of your project. It explains what your project is about and what it does.

## Project Structure

The project has the following structure:

```
.
+---src
|   |   App.css
|   |   App.jsx
|   |   index.css
|   |   logo.svg
|   |   main.jsx
|   |
|   +---assets
|   |       react.svg
|   |
|   +---container
|       +---cart
|       |       Cart.css
|       |       Cart.jsx
|       |       CartContext.jsx
|       |
|       +---mainPage
|       |       MainPage.css
|       |       MainPage.jsx
|       |
|       +---profile
|               Profile.css
|               Profile.jsx
```

### src

This is the main folder that contains all the source code of the project.

- `App.css`: This file contains global styles.
- `App.jsx`: This is the main React component that serves as the entry point of the app.
- `index.css`: This file contains additional global styles.
- `logo.svg`: This is the logo of the app.
- `main.jsx`: This is the JavaScript entry point of the app.

### src/assets

This folder contains all the static assets required by the project.

- `react.svg`: This is an SVG image used in the project.

### src/container

This folder contains all the main container components of the project.

#### src/container/cart

This folder contains the components related to the cart functionality.

- `Cart.css`: This file contains styles for the Cart component.
- `Cart.jsx`: This is the main Cart component.
- `CartContext.jsx`: This file contains the React context for the cart.

#### src/container/mainPage

This folder contains the components for the main page.

- `MainPage.css`: This file contains styles for the MainPage component.
- `MainPage.jsx`: This is the main MainPage component.

#### src/container/profile

This folder contains the components for the user profile.

- `Profile.css`: This file contains styles for the Profile component.
- `Profile.jsx`: This is the main Profile component.


## Running the Project

To run the project, you need to have Node.js and npm installed on your machine. After you have installed these, follow the steps below:

1. Install the project dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The `npm run dev` command starts the development server provided by Vite. It supports Hot Module Replacement (HMR) for fast development.

Now, open your browser and navigate to `http://localhost:5173` (or whatever port your console says the app is running on). You should see the app running.

If you make changes to the code, the browser will automatically refresh the page reflecting the changes.

## Usage

This application provides a user-friendly interface to browse and shop items. Here's how you can use it:

1. **Search Items**: You can search for items using their category or name. This makes it easy to find exactly what you're looking for.

2. **Add Items to Cart**: Once you've found an item you like, you can add it to your cart. You can specify the quantity of the item that you want to add.

3. **Manage Cart**: In the cart section, you can review the items you've added. If you change your mind about an item, you can easily remove it from the cart.

4. **Profile Section**: The profile section allows you to add your personal details. This information is used to personalize your shopping experience.

Remember to save your changes frequently to ensure that your shopping cart and profile information are up-to-date.
