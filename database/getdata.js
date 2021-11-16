const {connection} = require('connection')

async function getData(queryString){
    const promise = new Promise(((resolve, reject) => {
        connection.query(queryString, function (error, results, fields) {
            if (error) throw error;
            resolve(results)
        });
    }))
    const data = await promise;
    return data;
}
export function getUserByEmail(email) {
    return getData(`SELECT * FROM members WHERE email = '${email}'`);
}