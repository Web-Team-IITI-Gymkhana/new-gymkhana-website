import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import {Launch} from '@mui/icons-material/';
const ClubCard = ({image, event, name}:{image:string; event:string; name:string})=>{
    return(
        <Card
        isFooterBlurred
        className="w-fit h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {event}
          </p>
          <h4 className="text-white font-medium text-2xl">{name}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={image}
        />
        {/* <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <Button className="text-tiny ml-auto" color="primary" radius="full" size="sm">
          Know More
        </Button>
      </CardFooter> */}
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          {/* <p className="text-tiny text-white/80">Available soon.</p> */}
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Know more
            <Launch sx={{fontSize:16}}/>
          </Button>
        </CardFooter>
      </Card>
    )
}

function ClubsHomePage() {
  return (
    <section className="bg-zinc-900 px-8 md:px-32 py-4 md:py-4">
        <p className="text-6xl font-sans font-bold text-white my-4">Our Clubs</p>
        <div className="flex flex-col md:flex-row items-center mb-10 gap-4">
      <ClubCard name={"Cultural Clubs"} event={"T vs M 2023"} image={"/HomePage/CultClubs.jpg"}/>
      <ClubCard name={"Sports Clubs"} event={"?"} image={"/HomePage/CultClubs.jpg"}/>
      <ClubCard name={"Tech Clubs"} event={"?"} image={"/HomePage/CultClubs.jpg"}/>
      </div>
    </section>
  );
}

export default ClubsHomePage;
