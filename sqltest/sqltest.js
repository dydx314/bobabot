var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config =
{
    userName: 'bobabot', // update me
    password: 'b0babot!', // update me
    server: 'bobabot.database.windows.net', // update me
    options:
    {
        database: 'bobabot', //update me
        encrypt: true
    }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err)
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
            //createTables()

            //insertMenu("'tea'", "'gg'")

            //callgm()
        }
    }
);

function insertMenu(itemName, img)
{
    console.log('Inserting boba item...');

    var request = new Request(
        "INSERT INTO menu(ITEM_NAME, IMAGE, ORDER_COUNT) "
        + "VALUES (" + itemName + ", " + img + ", 0)"
        , function (err, rowCount, rows)
        {
            console.log(err);
            console.log(rowCount + ' row(s) returned');
            process.exit();
        }
    );

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);

}

function dropTables(tableName)
{
    console.log('Dropping table for boba...');

    var request = new Request(
        "DROP TABLE " + tableName,
        function(err, rowCount, rows)
        {
            console.log(err);
            console.log(rowCount + ' row(s) returned');
            process.exit();
        }
    );

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
}

function createTables()
{
    console.log('Creating table for boba...');

    var request = new Request(
        "CREATE TABLE menu( "
        + "ITEM_NAME varchar(20), "
        + "IMAGE varchar(20), "
        + "ORDER_COUNT int)",
        function(err, rowCount, rows)
        {
            console.log(err);
            console.log(rowCount + ' row(s) returned');
            process.exit();
        }
    );

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
}

function getMenu(next)
{
    console.log('Reading rows from the Table...');

    // Read all rows from table
    var request = new Request(
        "SELECT * FROM menu",
        function(err, rowCount, rows)
        {
            console.log(rowCount + ' row(s) returned');
            // process.exit();
        }
    );

    request.on('row', function (columns) {

        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
        next(null, columns);
    });
    connection.execSql(request);
}

module.exports = function callgm(next) {
    getMenu(next);
};
// async function callgm() {
//     a = await getMenu();
//     console.log("got here");
//     a.forEach(function(column) {
//         console.log("%s\t%s", column.metadata.colName, column.value);
//     });
// }
