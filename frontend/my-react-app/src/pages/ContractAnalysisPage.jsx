import React, { useState } from 'react';
import Header from '../components/Header/Header';
import FileUpload from '../components/FileUpload/FileUpload';
import DocumentPreview from '../components/DocumentPreview/DocumentPreview';
import AnalysisPane from '../components/AnalysisPane/AnalysisPane';
import { analyzeContract } from '../services/aiService';

const ContractAnalysisPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState(null);

  const handleFileSelect = async (file) => {
    setSelectedFile(file);
    setAnalysisData(null);
    setError(null);
    setIsAnalyzing(true);

    try {
      const analysis = await analyzeContract(file);
      setAnalysisData(analysis);
    } catch (err) {
      setError('Failed to analyze contract. Please try again.');
      console.error('Analysis error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleNewAnalysis = () => {
    setSelectedFile(null);
    setAnalysisData(null);
    setError(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header onNewAnalysis={handleNewAnalysis} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedFile ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                AI-Powered Contract Analysis
              </h1>
              <p className="text-lg text-gray-600">
                Upload your contract document to get instant AI-powered insights and analysis
              </p>
            </div>
            <FileUpload onFileSelect={handleFileSelect} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-180px)]">
            {/* Document Preview Pane */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                  Document Preview
                  <button
                    onClick={handleNewAnalysis}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Upload New Document
                  </button>
                </h2>
              </div>
              <DocumentPreview file={selectedFile} />
            </div>

            {/* Analysis Pane */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <AnalysisPane 
                analysisData={analysisData}
                isAnalyzing={isAnalyzing}
                error={error}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ContractAnalysisPage;