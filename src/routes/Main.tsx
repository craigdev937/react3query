import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { List } from "../pages/List";
import { Detail } from "../pages/Detail";
import { Add } from "../pages/Add";
import { NotFound } from "../pages/NotFound";
import { Layout } from "./Layout";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/houses" element={<List />} />
                    <Route path="/houses/:id" element={<Detail />} />
                    <Route path="/houses/add" element={<Add />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


