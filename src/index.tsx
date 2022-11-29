import React from 'react';
import { createRoot } from "react-dom/client";
import { App } from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import "app/styles/index.scss";
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { StoreProvider } from 'app/providers/StorProvider';
import "./shared/config/i18n/i18n";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
