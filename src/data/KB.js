// Knowledge base for the chatbot - questions and answers
export const knowledgeBase = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response:
      "Hello! I'm TaxEase Assistant. How can I help with your tax questions today?",
  },
  {
    keywords: ["deadline", "due date", "last date", "when to file"],
    response:
      "The deadline for filing tax returns in Nepal is typically the end of the Nepali month of Kartik (which falls around Mid-October to Mid-November).",
  },
  {
    keywords: ["tax slab", "tax rate", "how much tax"],
    response:
      "Nepal uses a progressive tax system. For individuals, the rates are: 1% on first ₹5 lakhs, 10% on next ₹2 lakhs, 20% on next ₹3 lakhs, 30% on next ₹10 lakhs, and 36% above ₹20 lakhs. Women and senior citizens have different slabs.",
  },
  {
    keywords: ["deduction", "save tax", "reduce tax"],
    response:
      "You can save tax through various deductions like contributions to PF, CIT, insurance premiums, and certain investments. Our app helps you track these deductions automatically.",
  },
  {
    keywords: ["penalty", "late filing", "fine"],
    response:
      "If you file your taxes after the deadline, you may have to pay a penalty of 15% per annum on the due amount. Use our Penalty Simulator to calculate potential fines.",
  },
  {
    keywords: ["document", "what documents", "need to file"],
    response:
      "You typically need your citizenship proof, PAN card, income statements, expense receipts, investment proofs, and previous tax documents (if any).",
  },
  {
    keywords: ["business tax", "company tax", "corporate"],
    response:
      "Corporate tax rate in Nepal is generally 25% for most businesses. There are different rates for specific industries and small businesses.",
  },
  {
    keywords: ["vat", "value added tax"],
    response:
      "VAT in Nepal is generally 13% on most goods and services. Some items may be exempt or have different rates.",
  },
  {
    keywords: ["thank", "thanks", "thank you"],
    response:
      "You're welcome! Feel free to ask if you have more questions about taxes in Nepal.",
  },
  {
    keywords: ["what can you do", "help", "features"],
    response:
      "I can help you understand tax deadlines, rates, deductions, penalties, and required documents. The TaxEase app also includes a tax calculator, receipt scanner, and penalty simulator.",
  },
];

// Default response if no keywords match
export const defaultResponse =
  "I'm not sure about that. Please try asking about tax deadlines, rates, deductions, or penalties. You can also use the TaxEase app features for more specific calculations.";
