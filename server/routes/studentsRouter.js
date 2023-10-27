const studentRouter = require('express').Router();
const { Student } = require('../db/models');

studentRouter.route('/group:id')
  .get(async (req, res) => {
    const { id } = req.params();
    if (Number.isNaN(id)) {
      res.sendStatus(401).json({ message: 'wrong group id' });
    }
    try {
      const students = await Student.findAll({
        where: {
          id,
        },
      });

      res.json(students);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

studentRouter.route('/:id')
  .delete(async (req, res) => {
    const { id } = req.params();
    if (Number.isNaN(id)) {
      res.sendStatus(401).json({ message: 'wrong group id' });
    }

    try {
      await Student.destroy(({
        where: {
          id,
        },
      }));
      res.sendStatus(200).json({ message: 'deleted' });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

module.exports = studentRouter;
