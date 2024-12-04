const getOptions = (req) => {
  const search = req.query.search || "";
  const pageSize = parseInt(req.params.pageSize) || 10;
  const page = +req.params.page || 1;
  const skip = (page - 1) * pageSize;
  const { dir = "asc", sort = "name" } = req.query;
  let filter = {};
  if (search) {
    filter = {
      name: { $regex: search, $options: "i" },
    };
  }
  return {
    filter,
    sort,
    dir,
    skip,
    pageSize,
  };
};

export { getOptions };
