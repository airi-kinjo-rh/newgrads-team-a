import express from 'express';
import mysql from 'mysql2';

const app : express.Express = express();
const port : number = 3001;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const connection = mysql.createConnection({
    host: 'mysql-server',
    user: 'root',
    password: 'password',
    database: 'jira_db'
  });

const getMonthData = (req : express.Request, res : express.Response) => {
    connection.query(
        `SELECT * FROM jira_table WHERE date >= '${req.query['target_month']}-01' AND date <= '${req.query['target_month']}-31'`,
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
          res.json(results);
        }
      );  
}

app.get('/', getMonthData);
