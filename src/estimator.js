const covid19ImpactEstimator = (data) => ({
        data,

        impact: {
            currentlyInfected: data.reportedCases * 10 ,
            infectionsByRequestedTime : impact.currentlyInfected *512
        

        }, 
        severeImpact: {
            currentlyInfected: data.reportedCases*50,
            infectionsByRequestedTime : severeImpact.currentlyInfected * 512
    
        } 
    } )


     console.log("wtf");

export default covid19ImpactEstimator;
