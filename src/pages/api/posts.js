// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var mysql = require('mysql');

async function queryData(conn) {
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

async function getAllPostsData() {
    var data = [];
    var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "voting_db"
    });

    console.log("Connecting to DB!");
    conn.connect(function(err) {
        if (err) throw err;
    });

    console.log("Connected! Fetching data...");
    await queryData(conn)
        .then((results) => {
            console.log('results:', results);
            data = results;
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
    conn.end();
    return data;
}

export default async function handler(req, res) {
    const allPosts = await getAllPostsData();
    res.status(200).json(allPosts ? {message: "Successfully fetched data", posts: allPosts} : {message: "Failed to fetch data", posts: []});
}
