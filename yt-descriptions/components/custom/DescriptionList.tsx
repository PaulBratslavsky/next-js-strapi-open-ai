import { flattenAttributes } from "@/lib/utils";
import { updateDescriptionAction } from "@/actions/update-description-action";
import { deleteDescriptionAction } from "@/actions/delete-description-action";

import { TextareaCustom } from "@/components/custom/TextareaCustom";
import { TrashIcon } from "@/components/icons/TrashIcon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

async function getTranscripts() {
  const baseUrl = process.env.STRAPI_URL || "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + "/api/videos");
    const data = await response.json();
    const flattenedData = flattenAttributes(data);

    console.log(flattenedData);
    return flattenedData;
  } catch (error) {
    console.log("error", error);
  }
}

export default async function DescriptionList() {
  const { data } = await getTranscripts();

  if (!data) return <p>No Items Found</p>;

  return (
    <div className="my-4">
      {data.map((item: any) => (
        <DescriptionCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function DescriptionCard({ item }: { item: any }) {
  const deleteUserById = deleteDescriptionAction.bind(null, item.id);

  return (
    <Card className="mb-8 relative">
      <CardHeader>
        <CardTitle>Video Description</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <form action={updateDescriptionAction}>
            <TextareaCustom
              name="description"
              className="w-full mb-4"
              defaultValue={item.description}
            />
            <input type="hidden" name="id" value={item.id} />
            <Button className="absolute right-4 bottom-4" type="submit">
              Update
            </Button>
          </form>
          <form action={deleteUserById}>
            <Button
              className="absolute right-4 top-4 bg-red-700 hover:bg-red-600"
              type="submit"
            >
              <TrashIcon className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
