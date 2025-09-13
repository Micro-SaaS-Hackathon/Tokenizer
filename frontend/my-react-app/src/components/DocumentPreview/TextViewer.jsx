import React from 'react';

const TextViewer = ({ content }) => {
  return (
    <div className="h-full overflow-auto p-6">
      <div className="max-w-none">
        <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-800 bg-white p-6 rounded-lg border border-gray-200">
          {content}
        </pre>
      </div>
    </div>
  );
};

export default TextViewer;