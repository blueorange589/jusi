


// Give the correspondent route (template) or fail
let resolveRoute = (route) => {
  try {
   return routes[route];
  } catch (error) {
      throw new Error("The route is not defined");
  }
};
// The actual router, get the current URL and generate the corresponding template
let router = (evt) => {
  const url = window.location.hash.slice(1) || "/";
  console.log(url)
  /* const routeResolved = resolveRoute(url);
  routeResolved(); */
};
// For first load or when routes are changed in browser url box.
window.addEventListener('load', router);
window.addEventListener('hashchange', router);