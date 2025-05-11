import type { Route } from "./+types/home";
import { Welcome } from "ui/components/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const response = await fetch('https://xrf7uypwf25f7zxzujauuzkdc40swvul.lambda-url.us-east-1.on.aws/sample', {
    method: 'POST',
    body: JSON.stringify({
      message: 'Hello World!'
    })
  })
  const data = await response.json() as { message: string }
  console.info('What is our data', JSON.stringify(data))
  return { message: data.message }
}

export default function Home({ loaderData }) {
  return <Welcome message={loaderData.message} />;
}
