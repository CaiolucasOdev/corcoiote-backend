/*
  Warnings:

  - You are about to drop the `costumers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "costumers";

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image_url" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");
