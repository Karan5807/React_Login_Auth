import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const Root = createRoot(document.getElementById("root"));
const Domain = import.meta.env.VITE_DOMAIN;
const ClientId = import.meta.env.VITE_CLIENTID;
console.log(Domain,ClientId);

Root.render(
  <StrictMode>
    <Auth0Provider
      domain={Domain}
      clientId={ClientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
