import{
    Brain,
    CalenderDays,
    ClipboardCheck,
    FileCheck2,
    Mic2,
    ShieldCheck,
    Sparkles,
    Target,
} from 'lucide-react';

const features=[
    {
        icon:CalenderDays,
        title:"A plan that adapts to your time",
        description:
        "tell us how much time you have and when your interview is.Your prepration is organized aroung the time you actually have available.",


    },
    {
        icon:FileCheck2,
        title:"Stay on top of your documents",
        description:"Keep track of what you have , what you still need, and what needs attention instead of keeping everything in your head.",

    },
    {
        icon:Target,
        title:"Practice that learns your weak areas",
        description:
        "Tracks your answers and focus more of your prep on topics where it's the most needed",
    },{
        icon:Brain,
        title:"Understand and don't just memorize",
        description:
        "get simple explanations when you get stuck so difficult civics questions become easier to understand and remember",
    },
    {
        icon:Mic2,
        title:"Prepare for the real interview",
        description:
        "Practice speaking and interview questions with voice-based sesions to make actual convos feel more familiar.",
    },
    {
        icon:ShieldCheck,
        title:"Support for both test versions",
        description:"Your prepration can be organized around the civics test version that applies to your citizenship journey",
    },
    {
        icon:Sparkles,
        title:"One place for the whole journey",
        description:
        "Prepration , documents, study sessions , progress and interview practice come together instead of being across different resources",

    },
]
export default function Features(){
    return(
        <section
        id="features"
        className='bg-white px-6 py-24 sm:px-8 lg:px-12'>
            <div className='mx-auto max-w-7xl'>
                <div className='max-w-2xl'>
                    <p className='text-sm font-semibold uppercase tracking-[0.16rem] text-[var(--color-blue)]'>

                        More than test prep
                    </p>


                    <h2 className='mt-4 text-4xl font-semibold leading-tight tracking-[0.03em] text-[var(--color-navy)} sm:text-5xl'>

                        Everything you need to stay prepared.
                    </h2>

                    <p>
                        Your citizenship journey has more moving parts than memorizing civics questions.We bring the important pieces together and organize them around your situation.
                    </p>

                </div>
                 <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="bg-white p-7 transition-colors duration-200 hover:bg-[var(--color-warm-white)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-[var(--color-blue)]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-semibold leading-snug text-[var(--color-navy)]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}