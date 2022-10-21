import "./Loader.css";
export const Loader = () => {
    return (
        <div className="wrapper">
            <div className="loading">
                <div className="loading-ring">

                </div>
                <span className="loading-text">
                    Loading...
                </span>
            </div>
        </div>
    );
};