import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "How far is IIT Indore from the city?",
    answer:
      "The Institute is around 24 kms away from Indore Railway Station and 31 kms from Indore Airport. The Institute is well connected with the city through Khandwa Road. Local bus service plies (bus No. M-19) from Bhavarkuan to the Institute & back and it takes approximately 40-50 minutes to reach the campus.",
  },
  {
    question: "How is the climate of Indore?",
    answer:
      "Indore lies on a borderline between a humid subtropical climate and a tropical savanna climate. Because of its high elevation and inland location even during the hottest months the nights are relatively cool. Three distinct seasons are observed: summer, monsoon and winter. Indore gets moderate rainfall of 700 to 800 millimeters (28 to 31 in) during June–September.",
  },
  {
    question: "Can B. Tech students participate in research?",
    answer:
      "The greatest advantage of learning in IITI is that every faculty takes the inputs from his/her research and tries to impart them into teaching. So the students will get to know cutting edge research activities and also can participate in minor projects in coordination with a Professor. Through this way, you will also get to work with research students of the Institute and you can access world-class research facilities of the Institute. ",
  },
  {
    question:
      "Do you get to meet industry experts from different fields at IIT Indore?",
    answer:
      "Frequent talks, workshops and interactions are organized with the industries to increase the industry-academia engagement. Areas of joint research work are also explored.",
  },
  {
    question: "How are the library facilities at IIT Indore?",
    answer:
      "Library@IIT Indore, known as Learning Resource Center, is a 4-storey building with several books, journals and other publications as well. In addition, the Library also has a 24 hours free study-zone that can be accessed at any time. It has some computers and provides a vibrant space to have a good study time.",
  },
  {
    question: "What are the branch change rules in IIT Indore?",
    answer:
      "There are options for change of branch and this option is based on the grade point average secured in the first year. More details will be provided by the Academic Office at the time of admission.",
  },
  {
    question: "What are the job opportunities after graduation?",
    answer:
      "Students take multiple routes after graduation from IIT Indore. The first path is to look for a job after graduation. There are significant students who pursue higher studies from India and abroad. The third path, is that many students want to look at being an entrepreneur, to start their own company. The Institute also supports such students through ACE foundation, which is part of our Institute. Students get jobs in core and non-core companies with a very good average package.",
  },
  {
    question: "How are the hostels in IIT Indore?",
    answer:
      "IIT Indore provides one of the best hostel experiences. It has six hostels, out of which one is reserved for married students. We have one hostel exclusively for women and four for male students. Every hostel unit consists of an apartment style with several rooms and a common hall. Every hostel is equipped with basic sports facilities (badminton court, TT, foosball etc.) and also has a common facility for gatherings and spending time together with friends. Every hostel also has a laundry facility to be used on a payable basis.",
  },
  {
    question: "Are the hostels in IIT Indore furnished?",
    answer:
      "Each resident student is provided with a cot, table, chair and almirah. Curtains and mattresses can be purchased at the time of admission in the hostel premises itself.",
  },
  {
    question: "Are girls and boys allowed to enter each other's hostel?",
    answer:
      "Girls and boys are allowed to interact in the common areas of the campus including the Dining Hall. However, for safety reasons, students of the opposite gender are not allowed to enter any hostel room. More details can be found in the Hostel webpage.",
  },
  {
    question: "What are the sports facilities available at IIT Indore?",
    answer:
      "IIT Indore has a very good Olympic standard sports infrastructure. Presently, it has facilities for Cricket, Football, Lawn tennis, Volleyball,etc. It also has indoor sports facilities which include BasketBall, Badminton, TT, Squash and a Gym. There is also an Olympic size swimming pool. In the upcoming phase, the construction for an athletics track, football, hockey ground is underway.",
  },
  {
    question: "What are the different Cultural Clubs available in IIT Indore?",
    answer:
      "There are a total of 15 Cultural Clubs which include Dance, Drama, Music, Arts (Drawing, etc), Gaming, Animation & Video editing, Photography, Movie making, Hindi and English Literature, Debating, Nature Loving, Social Service, etc.",
  },
  {
    question:
      "Are there shops on campus for basic needs like grocery, stationary restaurants?",
    answer:
      "Yes, there are a couple of shops to take care of basic needs of the campus residents. In addition, we also have a saloon / parlor on campus. There is also a stationery shop and a few eating outlets on campus.",
  },
  {
    question: "How are the Medical facilities at IIT Indore?",
    answer:
      "IIT Indore has a Health Center that has full-fledged doctors and a complete medical team that works round the clock. In addition, for any exigencies, the Institute facilitates providing medical insurance for in-patient medical services so that their health is taken care of.",
  },
  {
    question:
      "Is there any Ragging Atmosphere? Does College take actionable steps to stop ragging?",
    answer:
      "Ragging is strictly prohibited on campus. Anti-ragging committee continuously inspects hostels and other areas from time to time for any suspected ragging. In order to have a conducive environment, every student is tagged with one senior mentor and a faculty advisor. This team helps in settling down and solving your concerns as well. Through this practice, you get constant help and also get to know the seniors. In a nutshell, this is a friendly campus.",
  },
  {
    question: "How is Security at IIT Indore?",
    answer:
      "Security is proactive, vigilant and alert. To assist them, HighTech surveillance cameras with 360 degree rotation and ultra zoom features are installed in the campus.",
  },
  {
    question: "Till what time students are allowed to roam outside the campus?",
    answer:
      "Since IIT Indore is located on the highway that connects Maharashtra, due to safety reasons, the students should return back by 11 PM.",
  },
  {
    question: "How are the festivals celebrated at IIT Indore?",
    answer:
      "A IIT Indore is a cosmopolitan campus with members from different regions and backgrounds. From time to time, different techno-cultural festivals are conducted on campus. Needless to say, the biggest cultural fest is the Fluxus, which is a 3-day techno-cultural event.",
  },
  {
    question: "Are Bikes or Scooters allowed for students to park on campus?",
    answer:
      "Undergraduate students can bring their bicycles to ply around the campus. Other vehicles are not allowed inside campus for safety reasons.",
  },
];

function Page() {
  return (
    <main className="px-6 sm:px-24">
      <p className="text-4xl font-bold">FAQs:</p>
      <section>
        {questions.map((item) => {
          return (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </section>
    </main>
  );
}

export default Page;
