import React from "react";

const ColorfulMessage = (props) => {
  //分割代入して、props.ほにゃららを簡単に
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    color, //オブジェクト名と変数名が同じときは省略OK
    fontSize: "18px"
  };
  //childrenはタグ内のテキストに使う特別な変数名
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
