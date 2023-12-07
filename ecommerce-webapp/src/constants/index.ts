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

export const generateBreadcrumbs = (currentPage: string) => {
  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
  ];

  switch (currentPage) {
    case "product":
      breadcrumbs.push({
        title: "Product",
        link: "/product",
      });
      break;
    case "product-description":
      breadcrumbs.push(
        {
          title: "Product",
          link: "/product",
        },
        {
          title: "Product Description",
          link: "/product/description",
        }
      );
      break;
    case "about":
      breadcrumbs.push({
        title: "About Us",
        link: "/about",
      });
      break;
    case "contact":
      breadcrumbs.push({
        title: "Contact",
        link: "/contact",
      });
      break;
    default:
      break;
  }

  return breadcrumbs;
};
