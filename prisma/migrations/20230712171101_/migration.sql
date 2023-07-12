/*
  Warnings:

  - You are about to drop the column `city` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Event` DROP COLUMN `city`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL DEFAULT 'music',
    ADD COLUMN `location` VARCHAR(191) NOT NULL DEFAULT 'london';
