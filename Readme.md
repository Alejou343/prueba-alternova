# Frontend developer Jr, Technical test to Alternova.

## About the Project
This project was created using Vite and Tailwind with React as the framework. The website simulates the flow of a virtual shop where you can purchase various products such as drinks, snacks, and food. These products are only available if they exist in the storage stock. Please select your desired products, generate an order, and create an order to purchase these products.

To build this project, dependencies such as Tailwind, Vite, React Hooks, and React Router DOM were used. Several functions, custom hooks, and components contribute to the functionality of this website, which is deployed using Netlify.

**Preview of the Project**

![Alt text](/src/Assets/image.png)

This is the main page of the project. It displays cards representing products with their prices, quantity selection inputs, and an "Add to Cart" button.

**Project Structure**

![Alt text](/src/Assets/image-1.png)

In **Assets** folder you can find the logos of the Light/Dark mode to manage styles of main css.

In the **Components** folder, you can find various elements such as App, CartItem, Footer, Header, NotFound, ProductItem, ProductList, ShoppingCart, and Success. These components are used to build the application. The main component is App.jsx, which provides the context, routes, and several child components.

In the **Context** folder, there is a function that provides a global context for the application. It stores the state and includes some functions to manage the global state.

In the **Hooks** folder, you can find a custom hook called useInitialState, which provides the initial information to render the application in its initial state. These values are used in the Context.

In the **Products** folder, an object is present containing the available products in the shop. Each product has properties such as its name, price, image, and quantity available in stock.

In the **Routes** folder, we can found the main component of our application (App) with the Provider, Routes integrated by React router dom and children components.

In the **Styles** folder, there are files that assist with styling the application, including responsive design and global styles.

**The other files** are used to configure the project with custom utilities for production and deployment to a hosting website, ensuring a high-quality project.