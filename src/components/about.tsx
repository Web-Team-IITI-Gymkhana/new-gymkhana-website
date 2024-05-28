import Image from "next/image"
export default function bout(){
    return(
        <section className="bg-[url(/bg2.jpg)] bg-cover bg-center text-white px-12 md:px-48 py-8 md:py-8">
            <h1 className="text-6xl font-sans font-bold my-4 text-center max-sm:text-4xl">About Us</h1>
          <div className="flex flex-row flex-wrap-reverse">
            <div className="min-w-[50%]  flex flex-col items-center mx-auto pb-4">
            
            <p className="max-w-3xl text-2xl my-12 text-justify max-sm:text-xl">
              A major attraction of IITI is its eminent faculty members and
              flexible education system. The faculty of IM is one of the best
              among Indian professional institutes. The faculty members are
              excellent teachers and mentors and have many achievements in their
              fields. Most of our professors are researchers themselves and are
              deeply connected to their subjects of interest, says a student. It
              is this attitude of our professors that really makes them special
              and attractive to our students. Student Gymkhana is the student
              organization of IIT Indore. The Senate consists of two branches
              namely the Executive and the Councillors. The elected
              representatives of the students strive to promote growth and
              leadership among the students by helping them maximize their talents
              by coordinating various programs. To promote co-curricular
              activities and interests. Gymkhana has a number of clubs and groups
              dedicated to the interests of the students.
            </p>
            <div>
            <a href="https://www.iiti.ac.in/" target="_blank" className="p-3 border-2 border-white text-2xl rounded-lg hover:text-black hover:bg-white">Learn More</a>
            </div>
            </div>
            <div className=" mx-auto min-w-[15rem] max-w-[30rem] px-4">
            <Image
        className="pt-10  "
        src="/main_logo.png"
        width={550}
        height={550}
        alt="Gymkhana main Logo"
      />
            </div>
          </div>
        </section>
    )

}