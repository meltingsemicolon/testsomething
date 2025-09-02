import React, { useState } from "react";
import { TAX_SLABS } from "../data/taxSlabs";
const TaxCalculator = ({ setTaxResult }) =>  {
            const [income, setIncome] = React.useState('');
            const [category, setCategory] = React.useState('general');
            const [deductions, setDeductions] = React.useState('');
            // const [taxResult, setTaxResult] = React.useState(null);
            
            const calculateTax = () => {
                // Convert input values to numbers
                const incomeValue = parseFloat(income) || 0;
                const deductionsValue = parseFloat(deductions) || 0;
                
                // Calculate taxable income
                const taxableIncome = Math.max(0, incomeValue - deductionsValue);
                
                // Get the appropriate tax slab based on category
                const slab = TAX_SLABS[category];
                
                // Calculate tax based on slabs
                let remainingIncome = taxableIncome;
                let totalTax = 0;
                const breakdown = [];
                
                for (let i = 0; i < slab.length; i++) {
                    const { min, max, rate } = slab[i];
                    
                    if (remainingIncome <= 0) break;
                    
                    const taxableAmountInSlab = Math.min(remainingIncome, max - min);
                    if (taxableAmountInSlab <= 0) continue;
                    
                    const taxInSlab = taxableAmountInSlab * rate;
                    totalTax += taxInSlab;
                    
                    breakdown.push({
                        range: `रु ${min.toLocaleString()} - ${max === Infinity ? '∞' : max.toLocaleString()}`,
                        rate: `${(rate * 100)}%`,
                        amount: taxInSlab
                    });
                    
                    remainingIncome -= taxableAmountInSlab;
                }
                
                setTaxResult({
                    taxableIncome,
                    totalTax,
                    breakdown
                });
            };
            
            return (
                <div className="calculator-container">
                    <h2>Smart Tax Calculator</h2>
                    <p>Calculate your income tax liability based on Nepali tax slabs</p>
                    
                    <div className="form-group">
                        <label htmlFor="income">Annual Income (NPR)</label>
                        <input
                            type="number"
                            id="income"
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            placeholder="Enter your annual income"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="category">Tax Payer Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="general">General Individual</option>
                            <option value="women">Women</option>
                            <option value="senior">Senior Citizen</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="deductions">Deductions (PF, Insurance, etc.)</label>
                        <input
                            type="number"
                            id="deductions"
                            value={deductions}
                            onChange={(e) => setDeductions(e.target.value)}
                            placeholder="Enter total deductions"
                        />
                    </div>
                    
                    <button className="btn" onClick={calculateTax}>
                        <i className="fas fa-calculator"></i>
                        Calculate Tax
                    </button>
                    
                    <div className="disclaimer">
                        <i className="fas fa-info-circle"></i>
                        Note: This is a simplified calculation. Actual tax may vary based on specific circumstances.
                    </div>
                </div>
            );
        };
export default TaxCalculator;