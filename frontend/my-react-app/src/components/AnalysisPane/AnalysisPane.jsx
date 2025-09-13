import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import AnalysisResults from './AnalysisResults';
import { Brain, FileSearch } from 'lucide-react';

const AnalysisPane = ({ analysisData, isAnalyzing, error }) => {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="w-6 h-6" />
            <h2 className="text-lg font-semibold">AI Analysis</h2>
          </div>
          
          {/* Loading Indicator in Top-Right */}
          {isAnalyzing && <LoadingIndicator />}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {error ? (
          <div className="h-full flex items-center justify-center p-6">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileSearch className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Analysis Failed</h3>
              <p className="text-gray-600">{error}</p>
            </div>
          </div>
        ) : analysisData ? (
          <AnalysisResults data={analysisData} />
        ) : !isAnalyzing ? (
          <div className="h-full flex items-center justify-center p-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ready for Analysis</h3>
              <p className="text-gray-600">AI analysis will appear here once processing begins</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AnalysisPane;