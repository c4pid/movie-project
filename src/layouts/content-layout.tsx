import Navbar from "../components/Navbar";

const ContentLayout = ({ children }: any) => {
    return (
        <div className="mv-content-layout-container">
            <Navbar />
            <div className="mv-content-layout-children">{children}</div>
        </div>
    );
};

export default ContentLayout;
