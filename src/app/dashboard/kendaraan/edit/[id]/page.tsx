import { AppSidebar } from "@/components/app-sidebar"
import { notFound } from 'next/navigation'
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import Image from "next/image";

import  KendaraanEditForm from '../../../../../components/data_server/Kendaraan_Edit'
import { PrismaClient } from '../../../../../generated/prisma'




const prisma = new PrismaClient(  )

interface Params {
  id: string
}

export default async function Page({ params }: { params: Params }) {


      // Handle GET - Fetch data
      const kendaraan = await prisma.kendaraan.findUnique({
        where: { id: Number(params.id) }
      })
    
      if (!kendaraan) notFound()
  
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
             


                   <KendaraanEditForm  kendaraan={kendaraan}/>



            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
