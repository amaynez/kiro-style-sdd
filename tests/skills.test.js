const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('verify skills structure', async (t) => {
  const skillsDir = path.join(__dirname, '../.skills');
  const expectedSkills = ['spec', 'design', 'plan', 'implement'];

  for (const skill of expectedSkills) {
    await t.test(`skill "${skill}" should exist and have SKILL.md`, () => {
      const skillPath = path.join(skillsDir, skill);
      assert.ok(fs.existsSync(skillPath), `Directory .skills/${skill} should exist`);

      const skillFile = path.join(skillPath, 'SKILL.md');
      assert.ok(fs.existsSync(skillFile), `File .skills/${skill}/SKILL.md should exist`);
    });
  }
});
