import React from "react";
import { Card } from "antd";
import "../styles/Cards.css";

const { Meta } = Card;

const Cards = () => {
  return (
    <Card hoverable className="hero__card" cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
      <Meta title="Titulo" description="descripcion" />
    </Card>
  );
};

export default Cards;
