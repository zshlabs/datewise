/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D8RpkvjDLtr
 */
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";

export default function Component() {
  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">April, 2023</h2>
        <Button className="bg-blue-500 text-white">+ Add event</Button>
      </div>
      <Select>
        <SelectTrigger id="timezone">
          <SelectValue>PST</SelectValue>
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="pst">PST</SelectItem>
          <SelectItem value="est">EST</SelectItem>
          <SelectItem value="cst">CST</SelectItem>
          <SelectItem value="mst">MST</SelectItem>
        </SelectContent>
      </Select>
      <div className="grid grid-cols-7 gap-4 mt-4">
        <div className="text-center">SUN 9</div>
        <div className="text-center">MON 10</div>
        <div className="text-center">TUE 11</div>
        <div className="text-center">WED 12</div>
        <div className="text-center">THU 13</div>
        <div className="text-center">FRI 14</div>
        <div className="text-center">SAT 15</div>
      </div>
      <div className="grid grid-cols-7 gap-4 mt-4">
        <div className="space-y-2">
          <Card className="bg-orange-200">
            <CardHeader>
              <CardTitle> Carsl's birthday</CardTitle>
              <CardDescription>All day</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-orange-200">
            <CardHeader>
              <CardTitle>The walking dead</CardTitle>
              <CardDescription>9 AM - 10 AM</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-orange-200">
            <CardHeader>
              <CardTitle>Reporting</CardTitle>
              <CardDescription>11 AM - 11:20 AM</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-pink-200">
            <CardHeader>
              <CardTitle>Lunch break</CardTitle>
              <CardDescription>11:20 AM - 12 PM</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-orange-200">
            <CardHeader>
              <CardTitle>Deep work</CardTitle>
              <CardDescription>1 PM - 2 PM</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="space-y-2">
          <Card className="bg-yellow-200">
            <CardHeader>
              <CardTitle>Sales meeting</CardTitle>
              <CardDescription>9 AM - 10 AM</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Initial briefing</CardTitle>
              <CardDescription>...</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Brainstorming</CardTitle>
              <CardDescription>...</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Reporting</CardTitle>
              <CardDescription>...</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="space-y-2">
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Job interview</CardTitle>
              <CardDescription>All day</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="space-y-2">
          <Card className="bg-gray-200">
            <CardHeader>
              <CardTitle>Reuni ngarit</CardTitle>
              <CardDescription>9 AM - 10 AM</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Weekly review</CardTitle>
              <CardDescription>11 AM - 12 PM</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Sales call</CardTitle>
              <CardDescription>12 PM - 12:30 PM</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Internal meeting</CardTitle>
              <CardDescription>12:30 PM - 1 PM</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Feedback session</CardTitle>
              <CardDescription>...</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Working</CardTitle>
              <CardDescription>...</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Reporting</CardTitle>
              <CardDescription>...</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="space-y-2">
          <Card className="bg-pink-200">
            <CardHeader>
              <CardTitle>Travel to Pati</CardTitle>
              <CardDescription>All day</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-orange-200">
            <CardHeader>
              <CardTitle>Arabic class</CardTitle>
              <CardDescription>10 AM - 11 AM</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-orange-200">
            <CardHeader>
              <CardTitle>Jummah prayer</CardTitle>
              <CardDescription>12 PM - 1 PM</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="space-y-2">
          <Card className="bg-gray-200">
            <CardHeader>
              <CardTitle>Negleyur</CardTitle>
              <CardDescription>11 AM - 12 PM</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-orange-200">
            <CardHeader>
              <CardTitle>Mieck dilut</CardTitle>
              <CardDescription>9 AM - 10 AM</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
