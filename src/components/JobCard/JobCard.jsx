import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { showDescription, capitalizeFirstWord, styleObj } from "../../utils";
import "./JobCard.css";

const JobCard = ({ jobData }) => {
  const cardStyleObj = {
    cardActionStyle: {
      mt: "auto",
    },
  };
  return (
    <Card
      variant="outlined"
      className="card-style"
    >
      <CardContent>
        <div className="first-container">
          <div className="company-logo-container">
            <img
              src={jobData?.logoUrl}
              className="company-logo"
            />
          </div>
          <div className="company-details-wrapper">
            <p className="company-name">{jobData?.companyName}</p>
            <p className="job-role">{capitalizeFirstWord(jobData?.jobRole)}</p>
          </div>
        </div>
        <p className="job-location">{capitalizeFirstWord(jobData?.location)}</p>
        <p className="estimated-salary">
          {jobData?.minJdSalary
            ? `Estimated Salary: ₹${jobData?.minJdSalary} - ${jobData?.maxJdSalary} LPA `
            : `Max Salary: ₹${jobData?.maxJdSalary} LPA `}
          &nbsp;
          <CheckBoxIcon sx={{ color: "green" }} />
        </p>
        <div className="job-description-container">
          <p className="job-description-title">Job Description :</p>
          <p className="job-description">
            {showDescription(jobData?.jobDetailsFromCompany)}
          </p>
        </div>
        {jobData?.minExp && (
          <div className="min-experience-container">
            <p className="min-experience-text">Min Experience : </p>
            <p className="min-experience">{`${jobData?.minExp} years`}</p>
          </div>
        )}
        {jobData?.maxExp && (
          <div className="min-experience-container">
            <p className="min-experience-text">Max Experience : </p>
            <p className="min-experience">{`${jobData?.maxExp} years`}</p>
          </div>
        )}
      </CardContent>
      <CardActions
        className="action-button-container"
        disableSpacing
        sx={cardStyleObj.cardActionStyle}
      >
        <Button
          size="small"
          variant="outlined"
          disableRipple
          sx={styleObj?.jobCardActionButton}
        >
          Easy Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
