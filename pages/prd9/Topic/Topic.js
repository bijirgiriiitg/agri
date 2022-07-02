import React from "react";
import Header from "../Header/Header";
import Button1 from "../Buttons/Button1";
import Button2 from "../Buttons/Button2";
import Switch from "../Buttons/Switch";
import { useState } from "react";
import Questions from "../Questions/Questions";
function Topic() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <Button1></Button1>
      <Button2></Button2>
      <Switch
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      ></Switch>
      <Questions></Questions>
    </div>
  );
}

export default Topic;
