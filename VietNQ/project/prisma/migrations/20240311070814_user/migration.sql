/*
  Warnings:

  - You are about to drop the `TimeSheet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TimeSheet" DROP CONSTRAINT "TimeSheet_userId_fkey";

-- DropTable
DROP TABLE "TimeSheet";
