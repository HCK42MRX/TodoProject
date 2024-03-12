/*
  Warnings:

  - You are about to drop the column `uodateAt` on the `todolist_project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `todolist_project` DROP COLUMN `uodateAt`,
    ADD COLUMN `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);
