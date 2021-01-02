// Source: https://stackoverflow.com/a/32750746
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyError';
  }
}

(function () {
  function getUsers() {
    console.log("Getting users...");
    if (true) throw new MyError("Failed to get the video HTML node."); // "An instance of MyError occurred."
    // if (true) throw new Error("Failed to get the video HTML node."); // "A normal Error type occurred."
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
    if (error instanceof MyError) {
      console.error("An instance of MyError occurred.");
    } else {
      console.error("A normal Error type occurred.");
    }
  }
  console.log("2...");
})();