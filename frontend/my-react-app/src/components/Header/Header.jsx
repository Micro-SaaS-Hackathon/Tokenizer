import React from 'react';
import { FileText, Zap } from 'lucide-react';

const Header = ({ onNewAnalysis }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ContractAI</h1>
              <p className="text-sm text-gray-500 hidden sm:block">
                Professional Contract Analysis Platform
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;