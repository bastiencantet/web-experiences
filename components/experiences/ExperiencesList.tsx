import { createClient } from '@/utils/supabase/server';
import {Card} from "@/components/card";

export default async function ExperiencesList() {
  const supabase = createClient();
  const { data: experiences } = await supabase.from("experiences").select();


  return (

    <div className="px-4 flex flex-col gap-10 w-full justify-center items-center mb-10  transition duration-300 ease-in-out">
      {experiences?.map((experience: any) => (
          <Card key={experience.id}  title={experience.name} description={experience.description} image={experience.icon} href={experience.link} />
        ))}
    </div>
    );
}
