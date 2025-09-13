// import React, { useState, useEffect } from 'react';
// import PDFViewer from './PDFViewer';
// import TextViewer from './TextViewer';
// import DocxViewer from './DocxViewer';
// import { FileText, Eye } from 'lucide-react';

// const DocumentPreview = ({ file }) => {
//   const [fileContent, setFileContent] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (file) {
//       loadFile();
//     }
//   }, [file]);

//   const loadFile = async () => {
//     setIsLoading(true);
    
//     try {
//       if (file.type === 'application/pdf') {
//         // For PDF, we'll pass the file directly to PDFViewer
//         setFileContent(file);
//       } else if (file.type === 'text/plain') {
//         // For text files, read the content
//         const text = await file.text();
//         setFileContent(text);
//       } else if (
//         file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
//         file.type === 'application/msword'
//       ) {
//         // For DOCX files, pass to DocxViewer
//         setFileContent(file);
//       }
//     } catch (error) {
//       console.error('Error loading file:', error);
//       setFileContent(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const renderViewer = () => {
//     if (isLoading) {
//       return (
//         <div className="flex items-center justify-center h-64">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//         </div>
//       );
//     }

//     if (!fileContent) {
//       return (
//         <div className="flex items-center justify-center h-64 text-gray-500">
//           <div className="text-center">
//             <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
//             <p>Unable to preview this file type</p>
//           </div>
//         </div>
//       );
//     }

//     if (file.type === 'application/pdf') {
//       return <PDFViewer file={fileContent} />;
//     } else if (file.type === 'text/plain') {
//       return <TextViewer content={fileContent} />;
//     } else if (
//       file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
//       file.type === 'application/msword'
//     ) {
//       return <DocxViewer file={fileContent} />;
//     }

//     return null;
//   };

//   return (
//     <div className="h-full flex flex-col">
//       {/* File Info Header */}
//       <div className="flex-shrink-0 bg-gray-50 px-6 py-3 border-b border-gray-200">
//         <div className="flex items-center space-x-3">
//           <FileText className="w-5 h-5 text-blue-600" />
//           <span className="font-medium text-gray-900 truncate">{file.name}</span>
//           <span className="text-sm text-gray-500 ml-auto">
//             {(file.size / 1024 / 1024).toFixed(2)} MB
//           </span>
//         </div>
//       </div>

//       {/* Document Content */}
//       <div className="flex-1 overflow-auto">
//         {renderViewer()}
//       </div>
//     </div>
//   );
// };

// export default DocumentPreview;


import React, { useState, useEffect } from 'react';
import PDFViewer from './PDFViewer';
import TextViewer from './TextViewer';
import DocxViewer from './DocxViewer';
import { FileText, Eye } from 'lucide-react';

const DocumentPreview = ({ file }) => {
  const [fileContent, setFileContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (file) {
      loadFile();
    }
  }, [file]);

  const loadFile = async () => {
    setIsLoading(true);
    
    try {
      if (file.type === 'application/pdf') {
        // For PDF, we'll pass the file directly to PDFViewer
        setFileContent(file);
      } else if (file.type === 'text/plain') {
        // For text files, read the content
        const text = await file.text();
        setFileContent(text);
      } else if (
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        file.type === 'application/msword'
      ) {
        // For DOCX files, pass to DocxViewer
        setFileContent(file);
      }
    } catch (error) {
      console.error('Error loading file:', error);
      setFileContent(null);
    } finally {
      setIsLoading(false);
    }
  };

  const renderViewer = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    if (!fileContent) {
      return (
        <div className="flex items-center justify-center h-64 text-gray-500">
          <div className="text-center">
            <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Unable to preview this file type</p>
          </div>
        </div>
      );
    }

    if (file.type === 'application/pdf') {
      return <PDFViewer file={fileContent} />;
    } else if (file.type === 'text/plain') {
      return <TextViewer content={fileContent} />;
    } else if (
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      file.type === 'application/msword'
    ) {
      return <DocxViewer file={fileContent} />;
    }

    return null;
  };

  return (
    <div className="h-full flex flex-col">
      {/* File Info Header */}
      <div className="flex-shrink-0 bg-gray-50 px-6 py-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <FileText className="w-5 h-5 text-blue-600" />
          <span className="font-medium text-gray-900 truncate">{file.name}</span>
          <span className="text-sm text-gray-500 ml-auto">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </span>
        </div>
      </div>

      {/* Document Content */}
      <div className="flex-1 overflow-auto">
        {renderViewer()}
      </div>
    </div>
  );
};

export default DocumentPreview;