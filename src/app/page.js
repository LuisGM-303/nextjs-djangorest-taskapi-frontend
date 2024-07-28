import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";

export const dynamic = "force-dynamic"

export default function HomePage() {
  return (
    <div>
      <h1>Task App</h1>

      <div className="flex gap-x-10">
        <FormTask />
        <ListTask />
      </div>
    </div>
  );
}
