import React, { useState } from 'react'
import './App.css'
import TaxCalculator from './components/TaxCalculator'
import TaxResult from './components/TaxResult'
import Chatbot from './components/chatbot'

function App() {
  const [taxResult, setTaxResult] = useState(null);
return (
                <div className="container">
                    <header>
                        <div className="logo">
                            <i className="fas fa-file-invoice-dollar logo-icon"></i>
                            <h1>TaxEase Nepal</h1>
                        </div>
                        <p className="tagline">AI-Powered Smart Tax Compilation for Everyone</p>
                    </header>
                    
                    <div className="app-container">
                        <TaxCalculator setTaxResult={setTaxResult}/>
                        <TaxResult taxResult={taxResult} />
                    </div>
                    
                    <Chatbot />
                    
                    <footer>
                        <p>TaxEase Nepal - Making Tax Compliance Simple and Stress-Free</p>
                        <p>© 2023 TaxEase Nepal. For demonstration purposes only.</p>
                    </footer>
                </div>
            );
}

export default App;
