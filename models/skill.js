const skills = [
  {id: 123456, skill: 'JavaScript', learning: true},
  {id: 127412, skill: 'HTML5', learning: true},
  {id: 114213, skill: 'CSS', learning: true},
  {id: 132456, skill: 'Python', learning: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, skill) {
  id = parseInt(id);
  const updatedSkill = skills.find((skill) => skill.id === id);
  Object.assign(updatedSkill, skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.learning = false;
  skills.push(skill);
}

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  return skills.find((skill) => skill.id === id);
}

function getAll() {
  return skills;
}