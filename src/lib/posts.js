var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "voting_db"
});

async function queryData() {
    return new Promise((resolve, reject) => {
        conn.query("SELECT * FROM proposals", function (err, results, fields) {
            if (err) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

export async function getAllPostsData() {
    var data = [];

    console.log("Connecting to DB!");
    conn.connect(function(err) {
        if (err) throw err;
    });

    console.log("Connected! Fetching data...");
    await queryData()
        .then((results) => {
            console.log('results:', results);
            data = results;
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
    return JSON.stringify(data);
}
