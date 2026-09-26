import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Bookkeeping from "./pages/Bookkeeping";
import Accounting from "./pages/Accounting";
import Taxes from "./pages/Taxes";
import OtherServices from "./pages/OtherServices";
import Contact from "./pages/Contact";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/bookkeeping" component={Bookkeeping} />
      <Route path="/accounting" component={Accounting} />
      <Route path="/taxes" component={Taxes} />
      <Route path="/other-services" component={OtherServices} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="bottom-right" closeButton={false} />
          <Router hook={useHashLocation}>
            <Routes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
