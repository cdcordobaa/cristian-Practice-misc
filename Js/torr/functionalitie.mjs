import * as data from './apiFiles.mjs';
// data = require('./apiFiles');

//console.log(data.userdata);


let rankInJob = () => {
    let matches = 0;
    data.userdata.strengths.map(strengths => {
        console.log("hey here", strengths.name);
        data.opportunityData.details.map(detail => {
            console.log("jumm", detail.content);
            let isMentioned = detail.content.toLowerCase().includes(strengths.name.toLowerCase());
            if (isMentioned) {
                console.log("mentioned")
                matches++;
            }

        })
    })
    console.log("mentioned", matches)
}


rankInJob();