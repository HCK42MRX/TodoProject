const { PrismaClient } = require('@prisma/client');
const asyncMiddleware = require('../middleware/asyncHandler');

const prisma = new PrismaClient();

const getTask = asyncMiddleware(async (req, res) => {
  const task = await prisma.tasks.findMany();
  res.json(task);
});

const postTask = asyncMiddleware(async (req, res) => {
  const { task } = req.body;
  const taskDB = await prisma.tasks.create({
    data: {
      task
    }
  })
  res.json({message: `Task: ${taskDB.task} berhasil ditambahkan`})
});

module.exports = { getTask, postTask };
