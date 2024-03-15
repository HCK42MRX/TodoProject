const { PrismaClient } = require('@prisma/client');
const asyncMiddleware = require('../middleware/asyncHandler');

const prisma = new PrismaClient();

const getTask = asyncMiddleware(async (req, res) => {
  const task = await prisma.tasks.findMany();
  res.send(task);
});

const postTask = asyncMiddleware(async (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).send({ message: 'task tidak boleh kosong' })
  }
  const taskDB = await prisma.tasks.create({
    data: {
      task,
    },
  });
  return res.send({ message: `Task: ${taskDB.task} berhasil ditambahkan` });
});

module.exports = { getTask, postTask };
