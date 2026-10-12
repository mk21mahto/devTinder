const adminAuth = (re, res, next) => {
  console.log("admin auth is getting checked");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.send(401).send("Unauthorized request");
  } else {
    next();
  }
};

const userAuth = (re, res, next) => {
  console.log("admin auth is getting checked");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.send(401).send("Unauthorized request");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
