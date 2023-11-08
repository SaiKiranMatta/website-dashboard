import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
    return (
        <main className=" bg-slate-100 min-h-screen min-w-full flex ">
            <Sidebar />
            <Header />
        </main>
    );
}
