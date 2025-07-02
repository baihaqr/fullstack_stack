'use client'

import React, { useState } from 'react'
import { formatRupiah } from '@/lib/currency'
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
 import { useRouter } from 'next/navigation';

import {deleteKendaraan} from '@/lib/actions'

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
  kendaraan: Kendaraan[]
}

const KendaraanTable: React.FC<Props> = ({ kendaraan }) => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  // Filter data
  const filteredData = search === ''
    ? kendaraan
    : kendaraan.filter((item) =>
        item.merek.toLowerCase().includes(search.toLowerCase())
      )

 const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
  e.preventDefault();
  router.push(`/dashboard/kendaraan/edit/${id}`);
};

  return (
    <Card className="w-full mt-2">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Daftar Kendaraan</CardTitle>
            <CardDescription>Kelola data kendaraan Anda</CardDescription>
          </div>
          <div className="w-64">
            <Input
              placeholder="Cari merek..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Merek</TableHead>
              <TableHead>Jenis</TableHead>
              <TableHead>Stok</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Keterangan</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TableRow key={item.id} className="hover:bg-accent">
                  <TableCell>{item.id}</TableCell>
                  <TableCell className="font-medium capitalize">
                    {item.merek.toLowerCase()}
                  </TableCell>
                  <TableCell>{item.jenis}</TableCell>
                  <TableCell>{item.jumlah_stok}</TableCell>
                  <TableCell>{formatRupiah(item.harga)}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {item.keterangan || '-'}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                   
                        <Button size="sm" onClick={(e) => handleClick(e, item.id)}>
                          Edit
                        </Button>
                    
                      <Button onClick={() => deleteKendaraan(item.id)} variant="destructive" size="sm">
                        Hapus
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  Data tidak ditemukan
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default KendaraanTable