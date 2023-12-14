import React from "react";
import { Grip } from "lucide-react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import dots from "../../public/dots.png";

export function SortableItem(props: any) {
  const { value } = props;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: value.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="flex">
        <div className="relative w-12 h-16 m-auto">
          <Image
            src={dots}
            alt="dots"
            fill
            style={{ objectFit: "contain" }}
            sizes="100%"
            className="opacity-20"
          />
        </div>

        <CardHeader className="w-full sm:max-w-lg">
          <CardTitle>
            <span className="mr-2 text-blue-400">{"#" + value.id}</span>
            {value.name}
          </CardTitle>
          <CardDescription>{value.desc}</CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
}
