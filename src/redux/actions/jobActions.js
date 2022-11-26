import { message } from "antd";
import axios from "axios";


export const getAllJobs = () => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const response = await axios.get("/api/jobs/getalljobs");
      dispatch({ type: "GET_ALL_JOBS", payload: response.data });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOADING", payload: false });
    }
  };

  export const postJob = (values) => async (dispatch) => {
    values.postedBy = JSON.parse(localStorage.getItem('token'),_id)

    dispatch({ type: "LOADING", payload: true });
    try {
      const response = await axios.post("/api/jobs/postjob");
      dispatch({ type: "LOADING", payload: false });
      message.success("Job posted successfully")
      setTimeout(()=> {
        window.location.href="/"
      },1000)

    } catch (error) {
      console.log(error);
      dispatch({ type: "LOADING", payload: false });
    }
  };