import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { Calendar22 } from "./components/FormArea"
import { InputSelect } from "./components/InputSelect"
import { AlertDialogSys } from "./components/AlertDialogSys"
import { Skeleton } from "@/components/ui/skeleton"
import { TabsArea } from "./components/TabsArea"
import { InputTypeJsx } from "./components/InputType"
import { Textarea } from "./components/ui/textarea"
import { TableArea } from "./components/TableArea"

export default function App2() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button className="cursor-pointer">Click me</Button>
      <Calendar22 />
      <InputSelect />
      <InputTypeJsx />
      <Textarea className="w-[250px]"/>
      <AlertDialogSys />  
      <TableArea />
      <TabsArea />
    </div>
  )
}