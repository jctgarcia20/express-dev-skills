const skills = [
  {id: 123456, skill: 'JavaScript', learning: true},
  {id: 127412, skill: 'HTML5', learning: true},
  {id: 114213, skill: 'CSS', learning: true},
  {id: 132456, skill: 'Python', learning: false},
];

module.exports = {
  getAll,
  getOne
};

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