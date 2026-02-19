import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SearchParamPage from "./pages/search-params/page";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>Hello World</div>,
    },
    {
      path: "search-params",
      element: <SearchParamPage />,
      loader: SearchParamPage.loader,
    },
  ],
  {
    basename: "/rr7_docusaurus", // <--- THIS is the key for GitHub Pages
  }
);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
