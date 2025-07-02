import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import Image from "next/image";
import KendaraanTable from "../../../components/data_server/Kendaraan_Table"
import  {getKendaraan} from "../../../lib/actions"
import { Button } from '@/components/ui/button'
import Link from "next/link";


export default async function Page() {
    let kendaraan =  await getKendaraan()
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

          
       
        <div className="bg-white rounded-lg shadow-md p-6">

          <Link className="ml-2 my-10" href="/dashboard/Kendaraan/create">  <Button>+ Tambah</Button> </Link> 

        {kendaraan.length > 0 ? (
          <KendaraanTable kendaraan={kendaraan} />
        ) : (
          <div className="text-center py-12">
            <Image
              src="/empty-state.svg"
              alt="No data"
              width={300}
              height={300}
              className="mx-auto"
            />
            <h3 className="text-xl font-medium mt-4">Data kendaraan kosong</h3>
            <p className="text-gray-500 mt-2">
              Silakan tambahkan data kendaraan melalui admin panel
            </p>
          </div>
        )}
      </div>



            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
