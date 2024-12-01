import Link from 'next/link';
import { ClockIcon, CogIcon, CubeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'; 

const Sidebar = () => {

    return (
        <div className="w-[300px] h-screen p-[10px] shadow-md fixed left-0 top-0 bg-white">
            <h2 className="text-[35px] text-center font-russo text-[#205FFF] font-[600]">tePOS</h2>
            <p className="text-[18px] text-center font-[500] text-[#747474] mb-[50px]">Your POS assistant</p>
            <div className="mt-4">
                <Link href="" className="flex items-center text-[20px] mb-[5px] rounder-[10px] px-[15px] py-[8px] text-[#575757] hover:text-white hover:bg-[#205FFF] rounded transition-all duration-300">
                    <ClockIcon className="h-6 w-6 mr-2" /> 
                    History
                </Link>
                <Link href="/product-page" className="flex items-center text-[20px] mb-[5px] rounder-[10px] px-[15px] py-[8px] text-[#575757] hover:text-white hover:bg-[#205FFF] rounded transition-all duration-300">
                    <CubeIcon className="h-6 w-6 mr-2" /> 
                    Product
                </Link>
                <Link href="" className="flex items-center text-[20px] mb-[5px] rounder-[10px] px-[15px] py-[8px] text-[#575757] hover:text-white hover:bg-[#205FFF] rounded transition-all duration-300">
                    <ShoppingCartIcon className="h-6 w-6 mr-2" />
                    Cashier
                </Link>
                <Link href="/settings-page" className="flex items-center text-[20px] mb-[5px] rounder-[10px] px-[15px] py-[8px] text-[#575757] hover:text-white hover:bg-[#205FFF] rounded transition-all duration-300">
                    <CogIcon className="h-6 w-6 mr-2" /> 
                    Settings
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;