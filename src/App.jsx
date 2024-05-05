import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import viteLogo from "/vite.svg";
import "./App.css";
import JobCard from "./components/JobCard";
import Filter from "./components/Filter";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [resData, setResData] = useState({});
  const [jobsData, setJobsData] = useState({});
  const [searchString, setSearchString] = useState("");
  const [experience, setExperience] = useState("");
  const [minBasePay, setMinBasePay] = useState("");
  const [location, setLocation] = useState("");
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchData = async () => {
    setLoading(true);
    const data = {
      limit: limit,
      offset: 0,
    };

    try {
      const res = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        data,
        config
      );
      if (res?.data) {
        setResData({ ...res?.data });
        setJobsData({ ...res?.data });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Hello World ", limit);
    fetchData();
  }, [limit]);

  useEffect(() => {
    if (searchString === "") {
      setJobsData(resData);
    } else {
      const filteredData = resData?.jdList?.filter((item) => {
        return item?.companyName
          ?.toLowerCase()
          .includes(searchString.toLowerCase());
      });
      if (filteredData) {
        setJobsData({
          jdList: [...filteredData],
          totalCount: resData?.totalCount,
        });
      }
    }
  }, [searchString]);

  useEffect(() => {
    console.log(experience);
    if (experience === "" || experience === 0) {
      setJobsData(resData);
    } else {
      const filteredData = resData?.jdList?.filter((item) => {
        return item?.minExp <= experience;
      });
      console.log("FilterData => ", filteredData);
      if (filteredData) {
        setJobsData({
          jdList: [...filteredData],
          totalCount: resData?.totalCount,
        });
      }
    }
  }, [experience]);

  useEffect(() => {
    console.log("Min => ", minBasePay);
    if (minBasePay === "" || minBasePay === 0) {
      setJobsData(resData);
    } else {
      const filteredData = resData?.jdList?.filter((item) => {
        return item?.minJdSalary >= minBasePay;
      });
      console.log("FilterData => ", filteredData);
      if (filteredData) {
        setJobsData({
          jdList: [...filteredData],
          totalCount: resData?.totalCount,
        });
      }
    }
  }, [minBasePay]);

  useEffect(() => {
    console.log(location);
    if (location === "both") {
      setJobsData(resData);
    } else {
      const filteredData = resData?.jdList?.filter((item) => {
        if (location == "remote") {
          return item?.location?.toLowerCase()?.includes(location);
        } else {
          return !item?.location?.toLowerCase()?.includes("remote");
        }
      });
      console.log("FilterData => ", filteredData);
      if (filteredData) {
        setJobsData({
          jdList: [...filteredData],
          totalCount: resData?.totalCount,
        });
      }
    }
  }, [location]);

  const loadMoreData = (entries) => {
    console.log("Loading ", loading);
    const target = entries[0];
    if (target.isIntersecting && !loading) {
      // fetchData(page);
      console.log("Load More Data Called");
      setLimit((prevState) => prevState + 10);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(loadMoreData, {
      threshold: 0.5,
    });
    observer.observe(document.querySelector("#load-more"));
    return () => observer.disconnect();
  }, [loading]);

  console.log("New => ", resData, loading);

  return (
    <>
      <div>
        <p>Weekday Assignment</p>
        <div className="filter-wrapper">
          <Filter
            setSearchString={setSearchString}
            setExperienceFilter={setExperience}
            setMinBasePayFilter={setMinBasePay}
            setLocationFilter={setLocation}
          />
        </div>
        <div className="joblist-card-container">
          {jobsData?.jdList?.map((ele, index) => {
            return (
              <JobCard
                jobData={ele}
                key={ele?.jdUid}
              />
            );
          })}
        </div>
        <div id="load-more">
          {loading && (
            <div className="loader-container">
              <CircularProgress />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
