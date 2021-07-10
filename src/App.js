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
  const [sortType, setType] = React.useState({ sortBy: "", type: "asc" });
  React.useEffect(() => {
    getData("59b3f0b0100000e30b236b7e").then((res) => {
      console.log(">> res", res);
      setPostData({
        isLoading: false,
        hasError: false,
        data: res.data.posts,
        page: 1,
      });
    });
  }, []);

  const changePage = (id, page) => {
    setPostData({ isLoading: true, hasError: false, data: [], page });
    getData(id).then((res) => {
      setPostData({
        isLoading: false,
        hasError: false,
        data: res.data.posts,
        page,
      });
    });
  };

  const sortData = (value, sortType) => {
    console.log(">> value", value);
    setType({ sortBy: value, type: sortType });
    switch (value) {
      case "date":
        setPostData({
          isLoading: false,
          hasError: false,
          data: postData.data.sort((x, y) =>
            sortType === "asc"
              ? new Date(Number(x.event_date + "000")) -
                new Date(Number(y.event_date + "000"))
              : new Date(Number(y.event_date + "000")) -
                new Date(Number(x.event_date + "000"))
          ),
        });
        break;
      case "likes":
        setPostData({
          isLoading: false,
          hasError: false,
          data: postData.data.sort((x, y) =>
            sortType === "asc" ? x.likes - y.likes : y.likes - x.likes
          ),
        });
        break;
      case "views":
        setPostData({
          isLoading: false,
          hasError: false,
          data: postData.data.sort((x, y) =>
            sortType === "asc" ? x.views - y.views : y.views - x.views
          ),
        });
        break;
      case "shares":
        setPostData({
          isLoading: false,
          hasError: false,
          data: postData.data.sort((x, y) =>
            sortType === "asc" ? x.shares - y.shares : y.shares - x.shares
          ),
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-container">
      {postData.isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="page-title">Posts</h1>

          <SortOptions
            onChangeType={(e) => sortData(sortType.sortBy, e.target.value)}
            onChange={(e) => sortData(e.target.value, sortType.type)}
          />
          <hr />
          <Posts postData={postData.data} />
          <div className="page-number">
            {[
              "59b3f0b0100000e30b236b7e",
              "59ac28a9100000ce0bf9c236",
              "59ac293b100000d60bf9c239",
            ].map((id, i) => (
              <PageNumber
                id={id}
                key={i}
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

const SortOptions = (props) => {
  return (
    <div className="sort-container">
      <div className="sort-input">
        Sort By:
        <select className="sorter" defaultValue="" onChange={props.onChange}>
          <option disabled value="">
            Select
          </option>
          <option value="date">Date</option>
          <option value="likes">Likes</option>
          <option value="views">Views</option>
          <option value="shares">Share</option>
        </select>
      </div>
      <div className="sort-input">
        Type:
        <select className="sorter" onChange={props.onChangeType}>
          <option value="asc">Ascending</option>
          <option value="dsc">Dessding</option>
        </select>
      </div>
    </div>
  );
};
