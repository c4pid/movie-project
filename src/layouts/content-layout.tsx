import Navbar from "../components/Navbar";

const ContentLayout = ({ children }: any) => {
    return (
        <div className="mv-content-layout-container">
            <div className="container">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default ContentLayout;
