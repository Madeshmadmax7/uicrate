import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CardShowcase.css";

const cardData = [
{
    id: 1,
    output: "Hover me",
    reactCode: `function InnerCard() {\n  return <div className="inner">Hover me</div>;\n}`,
    cssCode: `.inner {\n  padding: 20px;\n  background: #111;\n  color: white;\n  border-radius: 10px;\n}`,
},
{
    id: 2,
    output: "Click me",
    reactCode: `function InnerCard() {\n  return <div className="inner">Click me</div>;\n}`,
    cssCode: `.inner {\n  padding: 20px;\n  background: #222;\n  color: white;\n  border-radius: 10px;\n}`,
},

];

function CardShowcase() {
const navigate = useNavigate();

const handleCardClick = (reactCode, cssCode) => {
    navigate("/viewer", { state: { reactCode, cssCode } });
};

return (
    <div className="card-grid">
    {cardData.map((card) => (
        <div key={card.id} className="card" onClick={() => handleCardClick(card.reactCode, card.cssCode)}>
        <div className="inner-card">{card.output}</div>
        </div>
    ))}
    </div>
);
}

export default CardShowcase;
