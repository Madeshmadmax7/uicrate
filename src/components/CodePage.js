import React from 'react';
import { useParams } from 'react-router-dom';
import CodeEditorViewer from './CodeEditorViewer';
import { cardData } from './Gallery';

function CodePage() {
const { id } = useParams();

const selectedCard = cardData.find(card => card.id === parseInt(id));

if (!selectedCard) {
    return <div>Card not found</div>;
}

return (
    <CodeEditorViewer
    reactCode={selectedCard.reactCode}
    cssCode={selectedCard.cssCode}
    />
);
}

export default CodePage;
