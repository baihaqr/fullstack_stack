'use client'

import Link from 'next/link'
import { updateKendaraan } from '@/lib/actions'
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

interface Kendaraan {
  id: number
  merek: string
  jenis: string
  jumlah_stok: number
  harga: number
  keterangan?: string | null
  createdAt: Date
}

interface Props {
  kendaraan: Kendaraan
}

export default function KendaraanEditForm({ kendaraan }: Props) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Edit Kendaraan #{kendaraan.id}</CardTitle>
        <CardDescription>Ubah informasi kendaraan di bawah ini</CardDescription>
      </CardHeader>
      <form action={updateKendaraan.bind(null, kendaraan.id)}>
        <CardContent className="space-y-4">
          {/* Merek */}
          <div className="space-y-2">
            <Label htmlFor="merek">Merek</Label>
            <Input
              id="merek"
              name="merek"
              defaultValue={kendaraan.merek}
              required
            />
          </div>

          {/* Jenis */}
          <div className="space-y-2">
            <Label htmlFor="jenis">Jenis</Label>
            <Select name="jenis" defaultValue={kendaraan.jenis}>
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

          {/* Jumlah Stok */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="jumlah_stok">Jumlah Stok</Label>
              <Input
                id="jumlah_stok"
                name="jumlah_stok"
                type="number"
                defaultValue={kendaraan.jumlah_stok}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="harga">Harga</Label>
              <Input
                id="harga"
                name="harga"
                type="number"
                defaultValue={kendaraan.harga}
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
              defaultValue={kendaraan.keterangan || ''}
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4 border-t pt-4 mt-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard/kendaraan">Batal</Link>
          </Button>
          <Button type="submit">Simpan Perubahan</Button>
        </CardFooter>
      </form>
    </Card>
  )
}