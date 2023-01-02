import React from "react";
import CsvDownloadButton from "react-json-to-csv";

const DownloadFile = (props) => {
  const data = props.data;
  const headers = props.headers;
  const filename = props.filename;
  let arr = [];
  for (let i in headers) {
    arr.push(headers[i].label);
  }
  return (
    <div className="App">
      <CsvDownloadButton data={data} filename={filename} headers={arr} />
    </div>
  );
};

export default DownloadFile;
