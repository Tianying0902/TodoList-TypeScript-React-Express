const queryPromise = require("../promise");
test("the data is 'Task 02' ", async () => {
  const selectAllTasks = "SELECT * from todo";
  const data = await queryPromise(selectAllTasks);
  const testString = data[0].task;
  expect(testString).toBe("Task 02");
});

test("the fetch fails with an error", async () => {
  //   expect.assertions(1);
  const wrongQuery = "SELECT * from xxx";
  //   expect.assertions(1);
  return queryPromise(wrongQuery).catch((e) =>
    expect(e.toString()).toMatch(
      "ER_NO_SUCH_TABLE: Table 'nodesql.xxx' doesn't exist"
    )
  );
});
