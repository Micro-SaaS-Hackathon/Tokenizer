export const highlightKeywords = (text) => {
  const keywords = [
    'Contract', 'Agreement', 'Terms', 'Conditions', 'Liability', 'Payment',
    'Termination', 'Intellectual Property', 'Confidentiality', 'Indemnification',
    'Force Majeure', 'Dispute Resolution', 'Compliance', 'Risk', 'Warning',
    'Critical', 'Important', 'Recommendation', 'Issue', 'Problem', 'Concern',
    'High Risk', 'Medium Risk', 'Low Risk', 'GDPR', 'Data Protection'
  ];

  let highlightedText = text;

  // Highlight normal keywords
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    highlightedText = highlightedText.replace(
      regex,
      `<mark class="bg-yellow-200 px-1 rounded font-medium">${keyword}</mark>`
    );
  });

  // Highlight risk levels with different colors
  highlightedText = highlightedText.replace(
    /\b(High Risk|Critical)\b/gi,
    '<span class="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">$1</span>'
  );

  highlightedText = highlightedText.replace(
    /\b(Medium Risk|Warning)\b/gi,
    '<span class="bg-orange-100 text-orange-800 px-2 py-1 rounded font-medium">$1</span>'
  );

  highlightedText = highlightedText.replace(
    /\b(Low Risk|Safe)\b/gi,
    '<span class="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">$1</span>'
  );

  // Format headings
  highlightedText = highlightedText.replace(
    /^\*\*(.*?)\*\*/gm,
    '<h3 class="text-lg font-semibold text-gray-900 mt-6 mb-3 border-b border-gray-200 pb-2">$1</h3>'
  );

  // Format numbered bullet points with bold
  highlightedText = highlightedText.replace(
    /^\d+\.\s\*\*(.*?)\*\*/gm,
    '<h4 class="font-semibold text-gray-800 mt-4 mb-2">$1</h4>'
  );

  // Format checkmarks and warnings
  highlightedText = highlightedText.replace(
    /✓/g,
    '<span class="text-green-600 font-bold">✓</span>'
  );

  highlightedText = highlightedText.replace(
    /⚠/g,
    '<span class="text-orange-500 font-bold">⚠</span>'
  );

  return highlightedText;
};

export const formatAnalysisText = (text) => {
  return text
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
};
