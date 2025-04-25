/*
  Warnings:

  - You are about to drop the column `categoryCode` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `departmentCode` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `employeeCode` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `positionCode` on the `Position` table. All the data in the column will be lost.
  - You are about to drop the column `productCode` on the `Product` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'pending';

-- DropIndex
DROP INDEX "Employee_employeeCode_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "categoryCode";

-- AlterTable
ALTER TABLE "Department" DROP COLUMN "departmentCode";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "employeeCode";

-- AlterTable
ALTER TABLE "Position" DROP COLUMN "positionCode";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "productCode";
