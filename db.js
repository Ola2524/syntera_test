const { Client } = require("pg");

const client = new Client({
  host: "98.81.190.243",
  port: 5432,
  user: "user_x69a3b0e9ccbeeb5361e61cdd",
  password: "O8rKhRyFOMZB53vTtOiWoJDn",
  database: "proj_x69a3b0e9ccbeeb5361e61cdd",
});

async function getAllTableData() {
  try {
    await client.connect();
    console.log("✅ Connected to database\n");

    // Get all table names from public schema
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `);

    const tables = tablesResult.rows.map((row) => row.table_name);
    console.log(`📊 Found ${tables.length} tables: ${tables.join(", ")}\n`);

    // Get data from each table
    for (const table of tables) {
      console.log(`\n${"=".repeat(60)}`);
      console.log(`TABLE: ${table}`);
      console.log("=".repeat(60));

      // Get column information
      const columnsResult = await client.query(
        `
        SELECT column_name, data_type, character_maximum_length, is_nullable
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = $1
        ORDER BY ordinal_position;
      `,
        [table]
      );

      console.log("\nColumns:");
      columnsResult.rows.forEach((col) => {
        const length = col.character_maximum_length
          ? `(${col.character_maximum_length})`
          : "";
        const nullable = col.is_nullable === "YES" ? "NULL" : "NOT NULL";
        console.log(
          `  - ${col.column_name}: ${col.data_type}${length} ${nullable}`
        );
      });

      const dataResult = await client.query(`SELECT * FROM ${table}`);

      console.log(`\nRows: ${dataResult.rows.length}`);

      if (dataResult.rows.length > 0) {
        console.log("\nData:");
        console.log(JSON.stringify(dataResult.rows, null, 2));
      } else {
        console.log("(no data)");
      }
    }

    console.log("\n✅ Complete!");
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await client.end();
  }
}

getAllTableData();
