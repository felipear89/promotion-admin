
exports.search = function(req, res, next) {
  res.send([
    {
      "id": 1,
      "name": "Fake 1",
    },
    {
      "id": 2,
      "name": "Fake 2",
    },
    {
      "id": 3,
      "name": "Fake 3",
    },
    {
      "id": 4,
      "name": "Fake 4",
    }
  ]);
};
