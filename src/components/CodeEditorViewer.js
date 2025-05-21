import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/CodeEditorViewer.css';
import Navbar from './Navbar';

function CodeEditorViewer({ reactCode, cssCode }) {
const [activeTab, setActiveTab] = useState('react');

const handleCopy = () => {
    const codeToCopy = activeTab === 'react' ? reactCode : cssCode;
    navigator.clipboard.writeText(codeToCopy);
    alert('Code copied!');
};

const displayedCode = activeTab === 'react' ? reactCode : cssCode;
const language = activeTab === 'react' ? 'jsx' : 'css';

return (
    <>
       <Navbar/> 
        <div className="code-editor-container">
        <div className="code-editor-header">
            <div className="window-controls">
            <div className="circle red"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
            </div>
            <div className="code-editor-menu">
            <button
                className={activeTab === 'react' ? 'active' : ''}
                onClick={() => setActiveTab('react')}
            >
                React
            </button>
            <button
                className={activeTab === 'css' ? 'active' : ''}
                onClick={() => setActiveTab('css')}
            >
                CSS
            </button>
            </div>
        </div>

        <div className="code-editor-content">
            <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers>
            {displayedCode}
            </SyntaxHighlighter>
            <button className="copy-btn" onClick={handleCopy} aria-label="Copy Code">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M15 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
            </svg>
            </button>
        </div>
        </div>
        
    </>
);
}

export default CodeEditorViewer;
