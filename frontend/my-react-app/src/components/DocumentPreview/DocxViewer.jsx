import React, { useState, useEffect } from 'react';
import mammoth from 'mammoth';
import { FileText } from 'lucide-react';

const DocxViewer = ({ file }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDocx = async () => {
      try {
        setIsLoading(true);
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        setHtmlContent(result.value);
        setError(null);
      } catch (err) {
        setError('Failed to load document');
        console.error('Error loading DOCX:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (file) {
      loadDocx();
    }
  }, [file]);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading document...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-gray-500">
          <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto p-6">
      <div
        className="prose prose-sm max-w-none bg-white p-6 rounded-lg border border-gray-200"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{
          fontFamily: 'inherit',
          lineHeight: '1.6',
        }}
      />
    </div>
  );
};

export default DocxViewer;