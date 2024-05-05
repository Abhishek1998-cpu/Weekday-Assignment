import { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./components/JobCard/JobCard";
import Filter from "./components/Filter/Filter";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";

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
    if (experience === "" || experience === 0) {
      setJobsData(resData);
    } else {
      const filteredData = resData?.jdList?.filter((item) => {
        return item?.minExp <= experience;
      });
      if (filteredData) {
        setJobsData({
          jdList: [...filteredData],
          totalCount: resData?.totalCount,
        });
      }
    }
  }, [experience]);

  useEffect(() => {
    if (minBasePay === "" || minBasePay === 0) {
      setJobsData(resData);
    } else {
      const filteredData = resData?.jdList?.filter((item) => {
        return item?.minJdSalary >= minBasePay;
      });
      if (filteredData) {
        setJobsData({
          jdList: [...filteredData],
          totalCount: resData?.totalCount,
        });
      }
    }
  }, [minBasePay]);

  useEffect(() => {
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
      if (filteredData) {
        setJobsData({
          jdList: [...filteredData],
          totalCount: resData?.totalCount,
        });
      }
    }
  }, [location]);

  const loadMoreData = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !loading) {
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
        <div className="job-list-card-container">
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
