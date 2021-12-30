const testData = require ('../testData/data.json');

describe('Json Information: ', () => {

    it('Should iterate json', async () => { // Use of the Json
        testData.forEach(function(element){
            console.log("Dropdown Text " + element['text']);
            console.log(parseInt(element['index']));
    });  
});
});