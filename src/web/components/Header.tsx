import Image from "next/image";
import { HeaderNavigation } from "@/components/HeaderNavigation";
import { HeaderCombobox} from "@/components/HeaderCombobox";

export default function Header() {
  return (
    <div className="flex fixed top-0 left-0 w-full items-center justify-between px-6 py-4 shadow-md">
      <div className="flex items-center space-x-4">
        <Image src="/images/yaoyorozu.png" alt="logo" width={50} height={50} />
        <p className="text-2xl font-bold text-headline">Yaoyorozu</p>
      </div>
      <HeaderNavigation />
      <HeaderCombobox />
    </div>
  );
}
