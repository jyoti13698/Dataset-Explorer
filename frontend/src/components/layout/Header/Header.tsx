import "./Header.scss";
import { Bell, UserCircle2 } from "lucide-react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <h1>Dataset Explorer</h1>
                <p>Discover and explore datasets across various domains.</p>
            </div>

            <div className="header__right">
                <button className="icon-btn">
                    <Bell size={20} />
                </button>

                <button className="icon-btn">
                    <UserCircle2 size={22} />
                </button>
            </div>
        </header>
    );
};

export default Header;