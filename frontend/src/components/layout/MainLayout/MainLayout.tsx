import type { ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./MainLayout.scss";

interface Props {
    children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <div className="layout">
            <Sidebar />

            <div className="layout__content">
                <Header />

                <main>{children}</main>

                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;