/*
  Warnings:

  - You are about to drop the `task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `task`;

-- CreateTable
CREATE TABLE `tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task` VARCHAR(255) NOT NULL,
    `isComplete` BOOLEAN NOT NULL DEFAULT false,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
