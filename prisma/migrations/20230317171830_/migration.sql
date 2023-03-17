/*
  Warnings:

  - You are about to drop the column `classesId` on the `classes_subjects` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "classes_subjects" DROP CONSTRAINT "classes_subjects_classesId_fkey";

-- AlterTable
ALTER TABLE "classes_subjects" DROP COLUMN "classesId",
ADD COLUMN     "classId" INTEGER;

-- AddForeignKey
ALTER TABLE "classes_subjects" ADD CONSTRAINT "classes_subjects_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
