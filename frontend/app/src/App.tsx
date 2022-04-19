import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// for test
import { SoshiTest } from "./temp/SoshiTest";
import { NatsuyaTest } from "./temp/NatsuyaTest";

function App() {
  // 画面アクセス時にリリースの状態を管理するstate
  const [releaseData, setReleaseData] = useState<any>([]);
  // リリースに基づいたデータを管理するstate
  const [countsData, setCountsData] = useState([]);

  // デフォルトにアクセスした時にリリースデータ取ってくる
  useEffect(() => {
    fetch("http://localhost:3001/getReleases", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setReleaseData(data);
      });
  }, []);

  console.log(releaseData);

  // releaseDataで取ってきたidによって各カウントを取得する
  // useEffect(() => {
  //   fetch(
  //     `https://localhost:3001/getCountsByReleaseId?release_id=${releaseData[0].id}`,
  //     { method: "GET" }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountsData(data);
  //     });
  // }, []);

  return (
    <>
      <SoshiTest />
      <Routes>
        <Route path="2022-01" element={<NatsuyaTest />} />
        <Route path="2022-02" element={<NatsuyaTest />} />
        <Route path="2022-03" element={<NatsuyaTest />} />
      </Routes>
    </>
  );
}
export default App;
