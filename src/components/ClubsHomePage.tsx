import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function HorizontalCard() {
  return (
    <section className="w-full flex-col py-6 items-center bg-gray-800">
      <h1 className="font-bold text-6xl text-center text-white">
        CLUBS AT IITI
      </h1>
      {/* Card1  */}
      <Card className="w-[70%] flex-row my-6 mx-auto ml-6">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="/technicalclubs.png"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h3" color="blue-gray" className="mb-2 mt-6">
            Technical Clubs
          </Typography>
          <Typography color="gray" className="mb-8 font-normal text-lg">
            Technical clubs at IIT Indore foster innovation and skill
            development, offering students opportunities in robotics, coding,
            electronics, and analytics through workshops, competitions, and
            collaborative projects, enhancing their practical knowledge and
            industry readiness.
          </Typography>
          <a href="/club/clubs" className="inline-block">
            <Button variant="text" className="flex items-center gap-2 text-lg">
              See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
      {/* Card2  */}
      <Card className="w-[70%] flex-row my-6 mx-auto mr-6">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="/culturalclubs.png"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h3" color="blue-gray" className="mb-2 mt-6">
            Cultural Clubs
          </Typography>
          <Typography color="gray" className="mb-8 font-normal text-lg">
            Cultural clubs at IIT Indore celebrate diversity and creativity,
            offering students opportunities in music, dance, drama, art, and
            literature through events, workshops, and festivals, enriching their
            campus life and personal growth.
          </Typography>
          <a href="/cult/clubs" className="inline-block">
            <Button variant="text" className="flex items-center gap-2 text-lg">
              See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
      {/* Card3  */}
      <Card className="w-[70%] flex-row my-6 mx-auto ml-6">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="/sportsclubs.jpg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h3" color="blue-gray" className="mb-2 mt-6">
            Sports Clubs
          </Typography>
          <Typography color="gray" className="mb-8 font-normal text-lg">
            Sports clubs at IIT Indore promote fitness and teamwork, offering
            students opportunities in athletics, cricket, football, basketball,
            and more through regular training, competitions, and events,
            enhancing their physical health and sportsmanship.
          </Typography>
          <a href="/sports/clubs" className="inline-block">
            <Button variant="text" className="flex items-center gap-2 text-lg">
              See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    </section>
  );
}
