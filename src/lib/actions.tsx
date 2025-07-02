'use server'

import { prisma } from './prisma'
    
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export async function getKendaraan() {
  return await prisma.kendaraan.findMany();
}





export async function createKendaraan(formData: FormData){
    const merek = formData.get('merek');
    const jenis = formData.get('jenis');
    const stok = formData.get('jumlah_stok');
    const harga = formData.get('harga');
    const keterangan = formData.get('keterangan')

     try {
        if (!merek) throw new Error('Merek is required');
        if (!jenis) throw new Error('Jenis is required');
        if (!stok) throw new Error('Stok is required');
        if (!harga) throw new Error('Harga is required');

        await prisma.kendaraan.create({
            data: {
                merek: merek as any, // Replace 'any' with '$Enums.Merek' if imported
                jenis: jenis as any, 
                jumlah_stok: Number(stok),
                harga: Number(harga),
                keterangan: keterangan ? String(keterangan) : null
            }
        })
       
        revalidatePath('/dashboard/kendaraan')
        return  redirect('/dashboard/kendaraan')
        
     } catch (error) {
        
        console.error(error)
     }

}



export async function  updateKendaraan(id: number, formData: FormData) {
  try {
    await prisma.kendaraan.update({
      where: { id },
      data: {
        merek: formData.get('merek') as any,
        jenis: formData.get('jenis') as any,
        jumlah_stok: Number(formData.get('jumlah_stok')),
        harga: Number(formData.get('harga')),
        keterangan: formData.get('keterangan') as string || null
      }
    })
    
    
   
    //revalidatePath('/dashboard/kendaraan')
    redirect('/dashboard/kendaraan')
  } catch (error) {
    console.error('Update failed:', error)
    throw error
  }
}


export async function deleteKendaraan(id: number) {


    try {
       
        let findData  = await prisma.kendaraan.findUnique({where: {id}})
        if(!findData) return  console.log("tidak ada data")  
            
            await prisma.kendaraan.delete({
            where: { id }
        })


        revalidatePath('/dashboard/kendaraan')
        redirect('/dashboard/kendaraan')
    

        // delete kendaran



    } catch (error) {
        
    }
}