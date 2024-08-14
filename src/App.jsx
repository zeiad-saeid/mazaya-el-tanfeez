import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound/Notfound";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Moreserves from "./Components/Moreserves/Moreserves";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";
import WhatsappBtn from "./Components/FloatingFormButton/FloatingFormButton";
import Latestproject from "./Components/Latestproject/Latestproject";
import Servesepage from "./Components/Servesepage/Servesepage";
import Projectpage from "./Components/Projectpage/Projectpage";
import Portfolio from "./Components/Portfolio/Portfolio";
import { Offline } from "react-detect-offline";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./Components/ScrollToTopButton/ScrollToTopButton.css";
import { SettingsProvider } from "./Components/SettingsContext";
import { AboutProvider } from "./Components/AboutContext";
import Serves from "./Components/Serves/Serves";

let routers = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "gallery", element: <Serves /> },
        { path: "latestproject", element: <Latestproject /> },
        { path: "contact", element: <Contact /> },
        { path: "services/:id", element: <Moreserves /> },
        { path: "projects/:id", element: <Portfolio /> },
        { path: "services", element: <Servesepage /> },
        { path: "projects", element: <Projectpage /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]
  // ,
  // {
  //   basename: "/mazaya-el-tanfeez",
  // }
);

function App() {
  const [showOfflineAlert, setShowOfflineAlert] = useState(true);

  const handleDismiss = () => setShowOfflineAlert(false);

  return (
    <>
      <SettingsProvider>
        <AboutProvider>
          <Offline>
            {showOfflineAlert && (
              <Alert
                variant="danger"
                onClose={handleDismiss}
                dismissible
                className="offline-alert"
              >
                <Alert.Heading>Oh snap! You are offline!</Alert.Heading>
                <p>
                  It seems that your internet connection is lost. Please check
                  your connection and try again.
                </p>
                <div className="d-flex justify-content-end">
                  <Button onClick={handleDismiss} variant="outline-danger">
                    Close
                  </Button>
                </div>
              </Alert>
            )}
          </Offline>
          <RouterProvider router={routers} />
          <ScrollToTopButton />
          <WhatsappBtn />
        </AboutProvider>
      </SettingsProvider>
    </>
  );
}

export default App;
