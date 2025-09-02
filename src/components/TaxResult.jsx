import React  from "react";
const TaxResult = ({ taxResult }) => {
            if (!taxResult) {
                return (
                    <div className="result-container">
                        <h2>Your Tax Results</h2>
                        <div className="result-box">
                            <h3 className="result-title">
                                <i className="fas fa-clock"></i>
                                Results Will Appear Here
                            </h3>
                            <p>Enter your income details and click "Calculate Tax" to see your tax liability.</p>
                        </div>
                        
                        <div className="features">
                            <div className="feature">
                                <div className="feature-icon">
                                    <i className="fas fa-camera"></i>
                                </div>
                                <h3 className="feature-title">OCR Receipt Scanner</h3>
                                <p>Scan bills and automatically track expenses</p>
                            </div>
                            
                            <div className="feature">
                                <div className="feature-icon">
                                    <i className="fas fa-robot"></i>
                                </div>
                                <h3 className="feature-title">AI Chat Assistant</h3>
                                <p>Get answers to your tax questions in Nepali/English</p>
                            </div>
                            
                            <div className="feature">
                                <div className="feature-icon">
                                    <i className="fas fa-bell"></i>
                                </div>
                                <h3 className="feature-title">Smart Reminders</h3>
                                <p>Never miss a deadline with personalized alerts</p>
                            </div>
                            
                            <div className="feature">
                                <div className="feature-icon">
                                    <i className="fas fa-file-pdf"></i>
                                </div>
                                <h3 className="feature-title">PDF Reports</h3>
                                <p>Generate professional reports for filing</p>
                            </div>
                        </div>
                    </div>
                );
            }
            
            return (
                <div className="result-container">
                    <h2>Your Tax Results</h2>
                    
                    <div className="result-box">
                        <h3 className="result-title">
                            <i className="fas fa-file-invoice"></i>
                            Tax Summary
                        </h3>
                        <div className="tax-amount">
                            रु {taxResult.totalTax.toLocaleString()}
                        </div>
                        <p>Taxable Income: रु {taxResult.taxableIncome.toLocaleString()}</p>
                    </div>
                    
                    <div className="result-box">
                        <h3 className="result-title">
                            <i className="fas fa-list-alt"></i>
                            Tax Breakdown
                        </h3>
                        <div className="breakdown">
                            {taxResult.breakdown.map((item, index) => (
                                <div key={index} className="breakdown-item">
                                    <span>{item.range} ({item.rate})</span>
                                    <span>रु {item.amount.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        };
export default TaxResult;