import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import 'tailwindcss/tailwind.css'; 

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="airplane-mode" className="text-black">Airplane Mode</Label>
      <Switch id="airplane-mode" className="data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-neutral-400 outline outline-offset-2 outline-[1.5px] outline-gray-900" />
    </div>
  )
}

