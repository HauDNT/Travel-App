import Image from "next/image";
import { PEOPLE_URL } from "../constant";

interface CampSiteProps {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subTitle, peopleJoined }: CampSiteProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}>
      <div className="flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/folded-map.svg"
              alt="folded-map"
              width={28}
              height={28}
            />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subTitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-3 overflow-hidden">
            {PEOPLE_URL.map((url, index) => (
              <Image
                className="inline-block rounded-full"
                src={url}
                key={index}
                alt="url-person"
                width={50}
                height={50}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

export default CampSite
