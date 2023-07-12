/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Event` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Owner_id_key` ON `Owner`;

-- CreateIndex
CREATE UNIQUE INDEX `Event_id_key` ON `Event`(`id`);
