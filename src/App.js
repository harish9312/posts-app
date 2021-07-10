import React from "react";
import "./App.css";
import { getData } from "./appService";
import { Loader } from "./components/Loader";
import { Posts } from "./components/Posts";

const App = () => {
  const [postData, setPostData] = React.useState({
    isLoading: true,
    hasError: false,
    data: null,
    page: 1,
  });
  React.useEffect(() => {
    getData("59b3f0b0100000e30b236b7e").then((res) => {
      setPostData({ isLoading: false, hasError: false, data: res, page: 1 });
    });
  }, []);

  const changePage = (id, page) => {
    setPostData({ isLoading: true, hasError: false, data: [], page });

    getData(id).then((res) => {
      setPostData({ isLoading: false, hasError: false, data: res, page });
    });
  };

  return (
    <div className="main-container">
      {postData.isLoading ? (
        <Loader />
      ) : (
        <>
          <Posts postData={postData.data.data.posts} />
          <div className="page-number">
            {[
              "59b3f0b0100000e30b236b7e",
              "59ac28a9100000ce0bf9c236",
              "59ac293b100000d60bf9c239",
            ].map((id, i) => (
              <PageNumber
                id={id}
                onChange={changePage}
                pageNumber={i + 1}
                postData={postData}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;

const PageNumber = ({ postData, onChange, pageNumber, id }) => {
  return (
    <div
      style={{
        color: postData.page === pageNumber ? "white" : "",
        backgroundColor: postData.page === pageNumber ? "gray" : "",
      }}
      onClick={() => onChange(id, pageNumber)}
      className="page"
    >
      {pageNumber}
    </div>
  );
};
