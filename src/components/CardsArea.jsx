import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardsArea() {
  return (
    <Card className="w-[100%] gap-0 mx-auto">
      <CardHeader>
        <CardTitle>#ID 1</CardTitle>
        <CardDescription>
          Status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form >
          <div className="flex flex-col ">
            <div className="grid">
             <span>NCM: 283476</span>
            </div>
            <div className="grid ">
              <div className="flex items-center">
                 <span>CEST: 2</span>
              </div>
              <span className="text-gray-400 truncate  w-[350px] md:w-full"><span className="text-black font-bold ">Descrição:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consectetur rerum vel recusandae quia labore, esse dolorem nisi itaque voluptas dolores officiis sint corrupti numquam dicta beatae animi culpa alias?</span>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
