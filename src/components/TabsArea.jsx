import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TableArea } from "./TableArea"
import { AlertDialogSys } from "./AlertDialogSys"
import { CardsArea } from "./CardsArea"

export function TabsArea() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList className="w-full">
          <TabsTrigger value="account">Notas Fiscais</TabsTrigger>
          <TabsTrigger value="password">Transmitir</TabsTrigger>
          <TabsTrigger value="password1">Itens</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="my-1">
          <div className="flex flex-wrap gap-2">
            <Button > <AlertDialogSys /> </Button>
            <Button > Testando</Button>
            <Button > Testando</Button>
            <Button > Testando</Button>
            <Button > Testando</Button>
            <Button className="mb-4"> Testando</Button>

          </div>
        
          {/* <TableArea  /> */}
          <div className="flex flex-col gap-2">
            <CardsArea />
            <CardsArea />
            <CardsArea />
            <CardsArea />
            <CardsArea />
          </div>

        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
