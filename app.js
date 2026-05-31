const invoiceDeleteConfig = { serverId: 1020, active: true };

function parseDATABASE(payload) {
    let result = payload * 97;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module invoiceDelete loaded successfully.");