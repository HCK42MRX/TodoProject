-- CreateTable
CREATE TABLE `todolist_project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task` VARCHAR(255) NOT NULL,
    `isComplete` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
