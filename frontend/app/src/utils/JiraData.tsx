import * as React from "react";
import jsonText from "./sample_job_data.json";

export type JiraData = {
  date: Date;
  total: number;
  backlog: number;
  "in-progress": number;
  "in-check": number;
  "on-review": number;
  done: number;
  "total-progress-rate": number;
  "date-to-all-in": number;
  outstanding: number;
  wip: number;
  "ideal-progress-rate": number;
  "num-testers": number;
  "additional-testers": number;
};
function setJiraDataList() {
  let jiraDataList: JiraData[] = [];
  console.log(jsonText);
  jsonText.map((jsonData, index) => {
    //TODO: if parameters lack
    let jobData: JiraData = {
      date: new Date(jsonData.date),
      total: Number(jsonData.total),
      backlog: Number(jsonData.backlog),
      "in-progress": Number(jsonData["in-progress"]),
      "in-check": Number(jsonData["in-check"]),
      "on-review": Number(jsonData["on-review"]),
      done: Number(jsonData.done),
      "total-progress-rate": Number(jsonData["total-progress-rate"]),
      "date-to-all-in": Number(jsonData["date-to-all-in"]),
      outstanding: Number(jsonData.outstanding),
      wip: Number(jsonData.wip),
      "ideal-progress-rate": Number(jsonData["ideal-progress-rate"]),
      "num-testers": Number(jsonData["num-testers"]),
      "additional-testers": Number(jsonData["additional-testers"]),
    };
    jiraDataList.push(jobData);
  });
  return jiraDataList;
}

export function getJiraDataList() {
  return setJiraDataList();
}
