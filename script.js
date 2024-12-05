const skillInput = document.getElementById('skillInput');
const addSkillBtn = document.getElementById('addSkillBtn');
const skillsList = document.getElementById('skillsList');

addSkillBtn.addEventListener('click', () => {
  const skill = skillInput.value.trim(); 
  if (skill) {
    addSkill(skill);
    skillInput.value = ''; 
  }
});

function addSkill(skill) {
  const skillItem = document.createElement('div');
  skillItem.classList.add('skill-item');

  const skillText = document.createElement('span');
  skillText.textContent = skill;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'x';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', () => {
    skillsList.removeChild(skillItem);
  });

  skillItem.appendChild(skillText);
  skillItem.appendChild(deleteBtn);

  skillsList.appendChild(skillItem);
}