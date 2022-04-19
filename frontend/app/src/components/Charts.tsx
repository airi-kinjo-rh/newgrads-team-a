import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend } from "recharts";
import data from "../utils/sample_job_data.json";
import { useState } from "react";
import { JiraData } from "../utils/JiraData";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: "#FFFFFF",
        color: "#292C2E",
        border: "1px solid",
        borderColor: "transparent",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function FlexWrap(props: { jiraDataList: any }) {
  const [jiraDataList, setjiraDataList] = useState(data);
  let jobTypeList = Object.keys(jiraDataList[0]);

  function formatXAxis(value: Date) {
    return value.getDate().toString();
  }
  return (
    <div style={{ width: "100%" }}>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          p: 10,
          m: 0,
          marginLeft: 30,
          marginTop: -6,
          bgcolor: "#E5F2FF",
        }}
      >
        🏃‍♂️<br></br> <br></br> 1月の進みぐあい！
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          m: 0,
          marginLeft: 30,
          bgcolor: "#E5F2FF",
          //   maxWidth: 300,
          // borderRadius: 1,
        }}
      >
        {jobTypeList.map((jobType) => {
          // ignore first parameter "date"
          if (jobType === "date") return null;

          return (
            <Item sx={{ boxShadow: 3, mx: 3, my: 2 }}>
              <div>
                <Typography gutterBottom variant="h5" align="center">
                  {jobType}
                </Typography>
                <LineChart width={300} height={300} data={props.jiraDataList}>
                  {/* <CartesianGrid stroke="#eee" strokeDasharray="" /> */}
                  <XAxis
                    dataKey="date"
                    interval="preserveStartEnd"
                    tickFormatter={formatXAxis}
                  />
                  <YAxis interval="preserveStartEnd" />
                  {/* <Legend /> */}
                  <Line
                    type="monotone"
                    dataKey={jobType}
                    stroke="#3EA8FF"
                    dot={false}
                  />
                </LineChart>
              </div>
            </Item>
          );
        })}
      </Box>
    </div>
  );
}
