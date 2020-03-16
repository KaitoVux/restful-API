const Post = require("../models/post");

module.exports.getAllPost = async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports.getById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports.create = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save().then(data => {
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.status(200).json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports.update = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
};
