import { Header, About, Skills, Project, Contact } from "./sections"
import ProjectPage from "./pages/ProjectPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import {
   createBrowserRouter,
   RouterProvider,
   Route,
   Outlet,
} from "react-router-dom";

const Layout = () => {
   return (
      <>
         <Navigation />
         <Outlet />
         <Footer />
      </>
   )
}

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            path: "/",
            element: (
               <>
                  <Header />
                  <About />
                  <Skills />
                  <Project />
                  <Contact />
               </>
            )
         },
         {
            path: "/projekt/:id",
            element: <ProjectPage />
         },
      ]
   }
])

function App() { 

   return (
      <div className="scroll-smooth">
         <RouterProvider router={router}/>
      </div>
   )
}

export default App