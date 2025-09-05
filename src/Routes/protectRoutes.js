const protectRouter = () => {
  const token = localStorage.getItem("token");
  const routes = ["admin.html", "checkout.html", "orders.html"];
  if (!token) {
    routes.forEach((route) => {
      if (window.location.href.includes(route)) {
        window.location.href = "login.html";
      }
    });
  }
};
export default protectRouter;
