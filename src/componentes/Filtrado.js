import React from "react";
import { Select } from "antd";
import "../styles/Header.css";

const { Option } = Select;

const Filtrado = () => {
  return (
    <Select className="filtrado" defaultValue="Escoge" style={{ width: 120 }} onChange="">
      <Option value="Option1">Option1</Option>
      <Option value="Option2">Option2</Option>
      <Option value="Option3">Option3</Option>
      <Option value="Option4">Option4</Option>
    </Select>
  );
};

export default Filtrado;
