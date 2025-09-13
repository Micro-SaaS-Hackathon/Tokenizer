import React from 'react';
import { Loader2, Zap } from 'lucide-react';

const LoadingIndicator = () => {
  return (
    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
      <Loader2 className="w-4 h-4 animate-spin" />
      <span className="text-sm font-medium">Analyzing...</span>
      <Zap className="w-4 h-4 text-yellow-300" />
    </div>
  );
};

export default LoadingIndicator;