const Skill = require('../models/skill');

module.exports = {
  index,
  show
};

function show(req, res) {
  // Access all route params using req.params (object)
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', { skill });
}

// controller action <--> controller function
function index(req, res) {
  const skills = Skill.getAll();
  res.render('skills/index', { skills });
}