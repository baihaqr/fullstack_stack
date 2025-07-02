/*
  Warnings:

  - You are about to drop the `Produk` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Merek" AS ENUM ('TOYOTA', 'DAIHATSU', 'HONDA', 'SUZUKI');

-- CreateEnum
CREATE TYPE "Jenis" AS ENUM ('SUV', 'MPV', 'SEDAN', 'CITY_CAR', 'PICKUP');

-- DropTable
DROP TABLE "Produk";

-- CreateTable
CREATE TABLE "Kendaraan" (
    "id" SERIAL NOT NULL,
    "merek" "Merek" NOT NULL,
    "jenis" "Jenis" NOT NULL,
    "tahun" INTEGER NOT NULL,
    "jumlah_stok" INTEGER NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "keterangan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kendaraan_pkey" PRIMARY KEY ("id")
);
