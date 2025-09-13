// //const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.your-ai-service.com';

// // Mock AI response for demonstration
// const mockAnalysisResponse = `**Contract Analysis Report**

// **Document Type:** Service Agreement
// **Analysis Date:** ${new Date().toLocaleDateString()}
// **Risk Assessment:** Medium Risk

// **Executive Summary:**
// This contract presents a balanced commercial agreement with standard terms and conditions. While the overall structure is sound, there are several areas that require attention to mitigate potential risks and ensure comprehensive protection for all parties.

// **Key Contract Elements:**

// 1. **Payment Terms Analysis**
// The contract specifies Net 30 payment terms, which is standard in commercial agreements. However, the absence of late payment penalties could create cash flow issues. Consider adding a late fee clause of 1.5% per month on overdue amounts.

// 2. **Liability and Indemnification**
// ✓ Mutual indemnification clauses are present
// ⚠ Liability cap is set at contract value - consider if this provides adequate protection
// ✓ Standard industry liability exclusions included

// 3. **Intellectual Property Rights**
// ✓ Clear work-for-hire provisions
// ✓ Client retains ownership of deliverables
// ⚠ Consider adding provisions for pre-existing IP protection

// 4. **Termination Clauses**
// ✓ 30-day notice period for termination
// ⚠ No early termination penalties specified
// ⚠ Consider adding specific termination triggers

// 5. **Data Protection and Compliance**
// ✓ GDPR compliance clauses included
// ✓ Standard data protection measures outlined
// ⚠ Consider adding specific data breach notification procedures

// **Risk Assessment:**

// **High Risk Areas:**
// - Missing force majeure clause could leave parties vulnerable to unforeseen circumstances
// - Dispute resolution mechanism lacks specificity regarding jurisdiction and arbitration procedures

// **Medium Risk Areas:**
// - Payment terms lack late fee provisions
// - Termination clauses could be more comprehensive

// **Low Risk Areas:**
// ✓ IP ownership clearly defined
// ✓ Standard liability protections in place
// ✓ Compliance requirements adequately addressed

// **Recommendations:**

// 1. **Immediate Actions Required:**
//    - Add comprehensive force majeure clause
//    - Specify dispute resolution procedures and jurisdiction
//    - Include late payment penalty provisions

// 2. **Consider for Next Revision:**
//    - Enhanced termination triggers and procedures
//    - More detailed data breach response protocols
//    - Additional IP protection for pre-existing materials

// 3. **Legal Review Recommended:**
//    Given the medium risk assessment, we recommend having this contract reviewed by qualified legal counsel before execution, particularly focusing on jurisdiction-specific requirements and industry regulations.

// **Confidence Score: 89%**

// This analysis is based on standard contract review practices and industry benchmarks. For complex or high-value agreements, professional legal review is always recommended.`;

// export const analyzeContract = async (file) => {
//   try {
//     // Simulate API processing time
//     await new Promise(resolve => setTimeout(resolve, 3000));

//     // In a real implementation, you would make an API call like this:
//     /*
//     const formData = new FormData();
//     formData.append('contract', file);
    
//     const response = await fetch(`${API_BASE_URL}/analyze-contract`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
//       },
//       body: formData,
//     });
    
//     if (!response.ok) {
//       throw new Error(`API request failed: ${response.status}`);
//     }
    
//     const data = await response.json();
//     return data.analysis;
//     */

//     // For demo purposes, return mock data
//     return mockAnalysisResponse;

//   } catch (error) {
//     console.error('AI Service Error:', error);
//     throw new Error('Failed to analyze contract. Please try again later.');
//   }
// };

// // Alternative API integration example for OpenAI
// export const analyzeContractWithOpenAI = async (file) => {
//   try {
//     // Extract text content from file
//     let textContent = '';
    
//     if (file.type === 'text/plain') {
//       textContent = await file.text();
//     } else if (file.type === 'application/pdf') {
//       // You would need a PDF text extraction library here
//       textContent = 'PDF text extraction would go here';
//     }

//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'gpt-4',
//         messages: [
//           {
//             role: 'system',
//             content: 'You are a legal contract analysis expert. Analyze the provided contract and provide detailed insights on terms, risks, and recommendations.'
//           },
//           {
//             role: 'user',
//             content: `Please analyze this contract and provide a comprehensive review:\n\n${textContent}`
//           }
//         ],
//         max_tokens: 2000,
//         temperature: 0.7,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`OpenAI API request failed: ${response.status}`);
//     }

//     const data = await response.json();
//     return data.choices[0].message.content;

//   } catch (error) {
//     console.error('OpenAI Service Error:', error);
//     throw new Error('Failed to analyze contract with OpenAI. Please try again later.');
//   }
// };
//const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.your-ai-service.com';

// Mock AI response for demonstration
const mockAnalysisResponse = `**Contract Analysis Report**

**Document Type:** Service Agreement
**Analysis Date:** ${new Date().toLocaleDateString()}
**Risk Assessment:** Medium Risk

**Executive Summary:**
This contract presents a balanced commercial agreement with standard terms and conditions. While the overall structure is sound, there are several areas that require attention to mitigate potential risks and ensure comprehensive protection for all parties.

**Key Contract Elements:**

1. **Payment Terms Analysis**
The contract specifies Net 30 payment terms, which is standard in commercial agreements. However, the absence of late payment penalties could create cash flow issues. Consider adding a late fee clause of 1.5% per month on overdue amounts.

2. **Liability and Indemnification**
✓ Mutual indemnification clauses are present
⚠ Liability cap is set at contract value - consider if this provides adequate protection
✓ Standard industry liability exclusions included

3. **Intellectual Property Rights**
✓ Clear work-for-hire provisions
✓ Client retains ownership of deliverables
⚠ Consider adding provisions for pre-existing IP protection

4. **Termination Clauses**
✓ 30-day notice period for termination
⚠ No early termination penalties specified
⚠ Consider adding specific termination triggers

5. **Data Protection and Compliance**
✓ GDPR compliance clauses included
✓ Standard data protection measures outlined
⚠ Consider adding specific data breach notification procedures

**Risk Assessment:**

**High Risk Areas:**
- Missing force majeure clause could leave parties vulnerable to unforeseen circumstances
- Dispute resolution mechanism lacks specificity regarding jurisdiction and arbitration procedures

**Medium Risk Areas:**
- Payment terms lack late fee provisions
- Termination clauses could be more comprehensive

**Low Risk Areas:**
✓ IP ownership clearly defined
✓ Standard liability protections in place
✓ Compliance requirements adequately addressed

**Recommendations:**

1. **Immediate Actions Required:**
   - Add comprehensive force majeure clause
   - Specify dispute resolution procedures and jurisdiction
   - Include late payment penalty provisions

2. **Consider for Next Revision:**
   - Enhanced termination triggers and procedures
   - More detailed data breach response protocols
   - Additional IP protection for pre-existing materials

3. **Legal Review Recommended:**
   Given the medium risk assessment, we recommend having this contract reviewed by qualified legal counsel before execution, particularly focusing on jurisdiction-specific requirements and industry regulations.

**Confidence Score: 89%**

This analysis is based on standard contract review practices and industry benchmarks. For complex or high-value agreements, professional legal review is always recommended.`;

export const analyzeContract = async (file) => {
  try {
    // Simulate API processing time
    await new Promise(resolve => setTimeout(resolve, 3000));

    // In a real implementation, you would make an API call like this:
    /*
    const formData = new FormData();
    formData.append('contract', file);
    
    const response = await fetch(`${API_BASE_URL}/analyze-contract`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    return data.analysis;
    */

    // For demo purposes, return mock data
    return mockAnalysisResponse;

  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error('Failed to analyze contract. Please try again later.');
  }
};

// Alternative API integration example for OpenAI
export const analyzeContractWithOpenAI = async (file) => {
  try {
    // Extract text content from file
    let textContent = '';
    
    if (file.type === 'text/plain') {
      textContent = await file.text();
    } else if (file.type === 'application/pdf') {
      // You would need a PDF text extraction library here
      textContent = 'PDF text extraction would go here';
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a legal contract analysis expert. Analyze the provided contract and provide detailed insights on terms, risks, and recommendations.'
          },
          {
            role: 'user',
            content: `Please analyze this contract and provide a comprehensive review:\n\n${textContent}`
          }
        ],
        max_tokens: 2000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.error('OpenAI Service Error:', error);
    throw new Error('Failed to analyze contract with OpenAI. Please try again later.');
  }
};