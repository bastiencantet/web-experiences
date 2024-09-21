import ExperiencesList from "@/components/experiences/ExperiencesList";
import {Suspense} from "react";
import {LoadingCards} from "@/components/loadingCards";
export default async function Index() {
  return (
    <>
        <div className="flex p-10 justify-center items-center">
            <h1 className="text-5xl mb-4">Experiences</h1>
        </div>
        <Suspense fallback={<LoadingCards/>}>
          <ExperiencesList />
        </Suspense>
    </>
  );
}
