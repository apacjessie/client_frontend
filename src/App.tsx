import AppProviders from "./providers/app";
import AppRoutes from "./routes/app";

const App = () => {
  return (
    <>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </>
  );
};

export default App;
