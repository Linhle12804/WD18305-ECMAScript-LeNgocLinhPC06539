const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr){
    const failureItems =[];
    for (const element of arr){
        failureItems.push(`<li class= "text-warning">${element}</li>`)
    }
    return failureItems;
}

const failureList = makeList(result.success);
console.log(failureList.join('\n'));

