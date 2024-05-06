import Image from "next/image";
import {Button} from "antd";

export default function Home() {
  return (
      <div style={{width:"300px",margin:"0px auto;"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <a href="./challenge1">
            <Button style={{marginTop: "20px"}}>Challenge 1</Button>
          </a>
          <a href="./challenge2">
            <Button style={{marginTop: "20px"}}>Challenge 2</Button>
          </a>
          <a href="./challenge3">
            <Button style={{marginTop: "20px"}}>Challenge 3</Button>
          </a>
        </div>
      </div>
  );
}
