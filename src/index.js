import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductCard from "./pages/ProductCard";

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <div>
        <ProductCard name={"Abc"} color={"RED"} />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
