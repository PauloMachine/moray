import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "../components/ui/modal/modal.context.tsx";
import Routes from "./routes.tsx";
import "../../chart.config.ts";
import "leaflet/dist/leaflet.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <Routes />
        </ModalProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
