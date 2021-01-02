(function () {
  function getUsers() {
    console.log("Getting users...");
    if (true) throw new Error("Failed to get the video HTML node.");
    console.log("Finish getting users..."); // This won't execute.
  }
  function handleGetUsers() {
    console.log("Begin handling...");
    getUsers();
    console.log("Finish handling..."); // This won't execute.
  }

  console.log("1...");
  try {
    handleGetUsers();
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
  console.log("2...");
})();