
let maxOuterListItems = 10, maxInnerListItems = 10;

window.addEventListener("load",(event)=> {
    // Checking if it loads
    console.log("page is fully loaded");
    createAList(maxOuterListItems, maxInnerListItems);
});
// Checking if it loads
console.log('1111111');

const createAListByUserInput = () => {
    if (innerListMax.value && outerListMax.value) {
        createAList(outerListMax.value, innerListMax.value);
    }
}

const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");

const createAList = (outerListValueParam, innerListValueParam) => {
    // Checking if it loads
    console.log('hhhhh hhhhh inside the function');
    const elem = document.getElementById("myList");
    const myOuterUlElem = document.getElementById("myOuterList");

    // Works if condition is true or false
    if (myOuterUlElem) {
        // If ul element already exist then delete first before creating new
        // this is to not have previously created ul on the page
        myOuterUlElem.remove();
    }

    // Create outer UL
    const outerUL = document.createElement("ul");
    outerUL.setAttribute('id','myOuterList');
    elem.appendChild(outerUL);
    
    // -> outer loop
    for ( let outerLiCounter = 0; outerLiCounter < outerListValueParam; outerLiCounter++ ) {
        console.log('in loop', outerLiCounter);
        
        // create outer Li items
        const outerLiItem = document.createElement("tr");
        const outerValueToDisplay = outerLiCounter + 1;
        const textnode = document.createTextNode(outerValueToDisplay);
        outerLiItem.appendChild(textnode);
        outerUL.appendChild(outerLiItem);
            
        // Create inner UL
        const innerUL = document.createElement("ul");
        outerLiItem.appendChild(innerUL);

        // -> inner loop
        for ( let innerLiCounter = 0; innerLiCounter < innerListValueParam; innerLiCounter++ ) {
            console.log('in another loop', innerLiCounter);
              
            // Create inner Li items
            const innerLiItem = document.createElement("td");
            const innerValueToDisplay = innerLiCounter + 1;
            const multiplicationOfOuterAndInner = (outerValueToDisplay) * (innerValueToDisplay);
            const innerTextNode = document.createTextNode(`${outerValueToDisplay} * ${innerValueToDisplay} = ${multiplicationOfOuterAndInner}`);
            innerLiItem.appendChild(innerTextNode);
            innerUL.appendChild(innerLiItem);
            outerLiItem.appendChild(innerUL);
        }
        tblBody.appendChild(outerLiItem);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tblBody.setAttribute("border", "2");
    tbl.setAttribute("border", "3");
}
// Checking if it loads
console.log('222222');