import AgentForm from "./components/AgentForm";
import { TabsLine } from "./components/Tabs";

const page = () => {
  return (
    <main>
      <section className="space-y-1.5 pb-10">
        <h2 className="text-3xl font-extrabold">Agent Settings</h2>
        <p className="">
          Agents <span className="text-black/50">&#8226; Agent Settings</span>
        </p>
      </section>
      <div className="space-y-4">
        <TabsLine />
        <AgentForm />
      </div>
    </main>
  );
};

export default page;
