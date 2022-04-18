import express from 'express';
import mysql from 'mysql2';

const app : express.Express = express();
const port : number = 3000;

/*
app.get('/', (req, res) => {
    getMonthData();
    res.send('Hello!')
})
*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jira_db'
  });

const getMonthData = (req : express.Request, res : express.Response) => {
    new Date("2022-01-27").toLocaleString();
    connection.query(
        // `SELECT * FROM jira_table WHERE date = ${req.query['target_date']}`,
        `SELECT * FROM jira_table WHERE date >= '${req.query['target_month']}-01' AND date <= '${req.query['target_month']}-31'`,
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
          res.json(results);
        }
      );  
}

app.get('/', getMonthData);
