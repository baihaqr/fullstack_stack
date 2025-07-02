-- CreateTable
CREATE TABLE "Produk" (
    "id" SERIAL NOT NULL,
    "merek" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "jumlah_stok" INTEGER NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "keterangan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produk_pkey" PRIMARY KEY ("id")
);
