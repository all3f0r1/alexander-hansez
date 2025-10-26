import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Weddings from "./pages/Weddings";
import Events from "./pages/Events";
import Headshots from "./pages/Headshots";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/weddings" component={Weddings} />
        <Route path="/events" component={Events} />
        <Route path="/headshots" component={Headshots} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
