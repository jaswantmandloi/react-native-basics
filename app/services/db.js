import SQLite from 'react-native-sqlite-storage';



// import {openDb, createTable, selectTable, insertTable} from './app/services/db'

// const db = openDb()

// createTable(db)
// insertTable(db)
// selectTable(db)



export const openDb = () => {
  const db = SQLite.openDatabase(
    {
      name: 'TestDB.db',
      location: 'default',
      //createFromLocation: '~www/TestDB.db',
    },
    () => {},
    error => {
      console.log('error',error);
    }
  );

  return db
}


export const existsTable = (db) => {
  var tableExistsQuery = "SELECT name FROM sqlite_master WHERE type='table' AND name='test';";
  db.transaction(tx => {
    tx.executeSql(tableExistsQuery, [], (tx, results) => {
      const rows = results.rows;
      
      if(rows.length) {
        console.log('Table exists')
      } else {

      }

      console.log('table', results)

    });
  });
}


export const createTable = (db) => {
  const createTableQuery = `CREATE TABLE IF NOT EXISTS test 
  (id INT,  description)`

  db.transaction(tx => {
    tx.executeSql(createTableQuery, [], (tx, results) => {
      console.log('Table created')
    });
  });

}

export const selectTable = (db) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM test;', [], (tx, results) => {
      const rows = results.rows;
      let users = [];
  
      for (let i = 0; i < rows.length; i++) {
        users.push({
          ...rows.item(i),
        });
      }
  
      console.log('users', users)
    });
  });
}

export const insertTable = (db) => {
  var postInsertQuery = `INSERT INTO test VALUES 
  (?, ?);`;

  db.transaction(tx => {
    tx.executeSql(postInsertQuery, [new Date().getTime(), ` testing ${new Date().getTime()}` ]
    , (tx, results) => {
    
      console.log('inserted', results)
    });
  });

}