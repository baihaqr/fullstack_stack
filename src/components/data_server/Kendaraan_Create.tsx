
'use client'
import React from 'react'
import Link from 'next/link'
import { createKendaraan } from '@/lib/actions'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
export default function Kendaraan_Create() {
  return (
      <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Tambah Kendaraan Baru</CardTitle>
        <CardDescription>Isi form di bawah ini untuk menambahkan kendaraan baru</CardDescription>
      </CardHeader>
      <form action={createKendaraan}>
        <CardContent className="space-y-4">
          {/* Merek */}
          <div className="space-y-2">
            <Label htmlFor="merek">Merek</Label>
            <Input id="merek" name="merek" placeholder="Contoh: Toyota" required />
          </div>

          {/* Jenis */}
          <div className="space-y-2">
            <Label htmlFor="jenis">Jenis</Label>
            <Select name="jenis">
              <SelectTrigger>
                <SelectValue placeholder="Pilih jenis kendaraan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SUV">SUV</SelectItem>
                <SelectItem value="MPV">MPV</SelectItem>
                <SelectItem value="SEDAN">SEDAN</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Jumlah Stok & Harga */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="jumlah_stok">Jumlah Stok</Label>
              <Input
                id="jumlah_stok"
                name="jumlah_stok"
                type="number"
                placeholder="Stok tersedia"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="harga">Harga</Label>
              <Input
                id="harga"
                name="harga"
                type="number"
                placeholder="Harga kendaraan"
                required
              />
            </div>
          </div>

          {/* Keterangan */}
          <div className="space-y-2">
            <Label htmlFor="keterangan">Keterangan</Label>
            <Textarea
              id="keterangan"
              name="keterangan"
              placeholder="Tambahkan deskripsi tambahan (opsional)"
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4 border-t pt-4 mt-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard/kendaraan">Batal</Link>
          </Button>
          <Button type="submit">  Tambah</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
