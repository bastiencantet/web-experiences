import ExperiencesList from "@/components/experiences/ExperiencesList";
export default async function Index() {
  return (
    <>
        <div className="flex p-10 justify-center items-center">
            <h1 className="text-3xl mb-4">Experiences</h1>
        </div>
          <ExperiencesList />
    </>
  );
}
