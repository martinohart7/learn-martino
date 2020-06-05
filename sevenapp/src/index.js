import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker } from "antd";
import "antd/dist/antd.css";
import Body1 from './class/Body1';
import Constructor1 from './constructor/Constructor1';
import Toggle from './event-handler/Toggle';
import Function1 from './function/Function1';
import ParenComponent from './props/ParenComponent';
import SetState1 from './set-state/SetState1';
import State1 from './state/State1';
import "./index.css";

ReactDOM.render(
    <div className="App">
        <h1>Input your join date : </h1>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
            Submit
    </Button>

        <Body1 />
        <Constructor1 />
        <Toggle />
        <Function1 />
        <ParenComponent />
        <SetState1 />
        <State1 />

    </div>,

    document.getElementById("root")
);


