import type { Route } from "./+types/home";
import { HomePage } from "~/ui/components/home-page";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientAction({
  request,
}: Route.ClientActionArgs) {
  let formData = await request.formData();
  console.info(formData);
}

export default function Home() {
  return <HomePage />
}
