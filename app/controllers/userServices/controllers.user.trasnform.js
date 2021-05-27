const userFilter = async (user) => {
  const use = { name: user.name, email: user.email, role: user.role };
  return use;
};
exports.userFilter = userFilter;
