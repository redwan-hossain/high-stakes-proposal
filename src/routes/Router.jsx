import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Proposal from "../pages/Proposal";
import Story1 from "../pages/Story1";
import Story2 from "../pages/Story2";
import Story3 from "../pages/Story3";
import RejectConfirm from "../pages/RejectConfirm";
import LastChance from "../pages/LastChance";
import Accept from "../pages/Accept";
// import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "proposal",
                Component: Proposal,
            },
            {
                path: "story1",
                Component: Story1,
            },
            {
                path: "story2",
                Component: Story2,
            },
            {
                path: "story3",
                Component: Story3,
            },
            {
                path: "reject-confirm",
                Component: RejectConfirm,
            },
            {
                path: "last-chance",
                Component: LastChance,
            },
            {
                path: "accept",
                Component: Accept,
            },
        ],
    },
    // {
    //     path: "*",
    //     Component: NotFound,
    // },
]);