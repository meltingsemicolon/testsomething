export const TAX_SLABS = {
            general: [
                { min: 0, max: 500000, rate: 0.01 },
                { min: 500000, max: 700000, rate: 0.10 },
                { min: 700000, max: 1000000, rate: 0.20 },
                { min: 1000000, max: 2000000, rate: 0.30 },
                { min: 2000000, max: Infinity, rate: 0.36 }
            ],
            women: [
                { min: 0, max: 600000, rate: 0.01 },
                { min: 600000, max: 800000, rate: 0.10 },
                { min: 800000, max: 1100000, rate: 0.20 },
                { min: 1100000, max: 2000000, rate: 0.30 },
                { min: 2000000, max: Infinity, rate: 0.36 }
            ],
            senior: [
                { min: 0, max: 800000, rate: 0.01 },
                { min: 800000, max: 1000000, rate: 0.10 },
                { min: 1000000, max: 1500000, rate: 0.20 },
                { min: 1500000, max: 2500000, rate: 0.30 },
                { min: 2500000, max: Infinity, rate: 0.36 }
            ]
        };