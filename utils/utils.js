const getOptions = (req) => {
  const pageSize = parseInt(req.params.pageSize) || 10;
  const page = +req.params.page || 1;
  const skip = (page - 1) * pageSize;
  const { dir, sort } = req.query;
  return {
    sort,
    dir,
    skip,
    pageSize,
  };
};

export { getOptions };
