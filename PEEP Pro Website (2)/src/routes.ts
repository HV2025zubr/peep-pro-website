import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { ForBuildingManagers } from "./components/ForBuildingManagers";
import { ForFireServices } from "./components/ForFireServices";
import { Regulations } from "./components/Regulations";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "for-building-managers", Component: ForBuildingManagers },
      { path: "for-fire-services", Component: ForFireServices },
      { path: "regulations", Component: Regulations },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);