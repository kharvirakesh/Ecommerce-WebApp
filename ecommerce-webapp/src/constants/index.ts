// Replace `userIsLoggedIn`, `userName`, and `isFirstTime` with values from your Redux store.
const userIsLoggedIn = false; // Example: Get this from your Redux store
const userName = null; // Example: Get this from your Redux store
const isFirstTime = !false; // Example: Get this from your Redux store

export const navLinks = [
  {
    title: "Home",
    routePath: "/",
  },
  {
    title: "Overview",
    routePath: "/overview",
  },
  {
    title: "Our Services",
    routePath: "/our-services",
  },
  {
    title: "Contact Us",
    routePath: "/contact-us",
  },
  {
    title: "Blog",
    routePath: "/blog",
  },
  {
    title: userIsLoggedIn
      ? userName || "User" // Display user name or "User" if name is not available
      : isFirstTime
      ? "Sign Up"
      : "Login",
    routePath: userIsLoggedIn ? "/profile" : isFirstTime ? "/signup" : "/login",
  },
];
