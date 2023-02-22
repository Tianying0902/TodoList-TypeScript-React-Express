const queryPromise = require("../promise");
test("fetch data successfully with the content is 'Task 02' ", async () => {
  const selectAllTasks = "SELECT * from todo";
  const data = await queryPromise(selectAllTasks);
  const testString = data[0].task;
  expect(testString).toBe("Task 002");
});

test("the fetch fails with a table that is not exist", async () => {
  //   expect.assertions(1);
  const wrongTableName = "xxx";
  const wrongQuery = "SELECT * from " + wrongTableName + "";
  return queryPromise(wrongQuery).catch((e) =>
    expect(e.toString()).toMatch(
      `ER_NO_SUCH_TABLE: Table 'nodesql.${wrongTableName}' doesn't exist`
    )
  );
});
