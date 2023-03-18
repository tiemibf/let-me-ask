import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react"

const NewRoom = lazy(() => import("./pages/NewRoom/NewRoom"))
const Home = lazy(() => import("./pages/Home/Home"))

const Router = (): JSX.Element => {
    return(
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense>
                        <Home />
                    </Suspense>
                }
            />
            <Route
                path="/rooms/new"
                element={
                    <Suspense>
                        <NewRoom />
                    </Suspense>
                }
            />


        </Routes>
    )
}

export default Router;