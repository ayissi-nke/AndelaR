   const covid19ImpactEstimator = (data) => {
    
        const input = data
        return {
        
            data :input ,

            impact: {
                currentlyInfected: data.reportedCases * 10 ,
                infectionsByRequestedTime : impact.currentlyInfected *512,
                severeCasesByRequestedTime: impact.infectionsByRequestedTime * 0.15,
                hospitalBedsByRequestedTime : Math.trunc( (data.totalHospitalBeds*0.35) - impact.severeCasesByRequestedTime),
                casesForICUByRequestedTime: Math.trunc(impact.infectionsByRequestedTime * 0.5),
                casesForVentilatorsByRequestedTime : (impact.infectionsByRequestedTime * 0.2),
                dollarsInFlight : (data.avgDailyIncomeInUSD *  avgDailyIncomePopulation)*30
        
            
            

            }, 
            severeImpact: {
                currentlyInfected: data.reportedCases*50,
                infectionsByRequestedTime : severeImpact.currentlyInfected * 512,
                severeCasesByRequestedTime: severeImpact.infectionsByRequestedTime * 0.15,
                hospitalBedsByRequestedTime : Math.trunc( (data.totalHospitalBeds*0.35) - severeImpact.severeCasesByRequestedTime),
                casesForICUByRequestedTime: Math.trunc(severe.infectionsByRequestedTime * 0.5),
                casesForVentilatorsByRequestedTime : (severe.infectionsByRequestedTime * 0.2),
                dollarsInFlight : (data.avgDailyIncomeInUSD *  avgDailyIncomePopulation)*30
               
        
            } ,

            
        } ;

};
     

export default covid19ImpactEstimator
