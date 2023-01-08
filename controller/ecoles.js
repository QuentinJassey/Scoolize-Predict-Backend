const ecoles = require("../model/ecoles");

exports.getecoles = async (req, res) => {
  try {
    let foundecoles = req.query
      ? await ecoles.find().limit(req.query.limit)
      : await ecoles.find();
    res.json(foundecoles);
  } catch {
    res.status(409).json("There was an error please try again later");
  }
};

exports.postecoles = async (req, res) => {
  try {
    let ecolesDraft = new ecoles(req.body);

    let postedecoles = await ecolesDraft.save();
    res.json(postedecoles);
  } catch {
    res.status(409).json("There was an error please try again later");
  }
};

exports.getOneecoles = async (req, res) => {
  try {
    let foundecoles = await ecoles.findById(req.params.id);
    res.json(foundecoles);
  } catch {
    res.status(409).json("There was an error please try again later");
  }
};

exports.updateecoles = async (req, res) => {
  try {
    let updatedecoles = await ecoles.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedecoles);
  } catch {
    res.status(409).json("There was an error please try again later");
  }
};

exports.deleteecoles = async (req, res) => {
  try {
    let deletedecoles = await ecoles.findByIdAndDelete(req.params.id);
    res.json(deletedecoles);
  } catch {
    res.status(409).json("There was an error please try again later");
  }
};
