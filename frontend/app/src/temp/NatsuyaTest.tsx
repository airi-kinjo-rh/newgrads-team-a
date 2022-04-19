import React from "react";
import Charts from "../components/Charts";
import { getJiraDataList } from "../utils/JiraData";

export function NatsuyaTest() {
  let jiraDataList = getJiraDataList();
  return <Charts jiraDataList={jiraDataList} />;
}
