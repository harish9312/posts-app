import React from "react";
import "./App.css";
import { getData } from "./appService";
import { Posts } from "./components/Posts";

const App = () => {
  const [postData, setPostData] = React.useState({
    isLoading: true,
    hasError: false,
    data: null,
  });
  React.useEffect(() => {
    getData().then((res) => {
      setPostData({ isLoading: false, hasError: false, data: res });
    });
  }, []);

  return postData.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Posts postData={postData.data.data.posts} />
      <div className="page-number">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </>
  );
};

export default App;
