import Sidebar from './Sidebar'
'use client';

export default function Dashboard(){
    return(
        <div className="flex min-h-screen bg-white">
            <Sidebar />
            <main className="flex px-8 py-8 ">
                <div className="flex flex-wrap items-center justify-between gap-4">
 <h1 className="flex text-4xl ">
                    Dashboard

                </h1>
                </div>


               

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 rounded-md border border-slate-200 text-sm text-slate-600 px-4 py-4">
                        
                    </div>
                </div>

                <div>
<Link href="/profile" className="flex items-center gap-2 rounded-full border bg-white border-slate-200 font-medium text-slate-200" >
                </Link>
                </div>


                <div className="grid gap-6 lg:grid-cols-3 mt-4">
                    <h1>streak</h1>
                </div>

                <div>
                    days
                </div>
                <div>
                    <h2>days to go</h2>
                </div>

                <div>
                    current days module
                </div>
                
            </main>
        </div>
    )
}