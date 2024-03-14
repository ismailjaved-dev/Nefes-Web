import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";


const Gallery = ({ layout }) => {


  const data = [
    { title: "Venue", img: "/galleryPic1.png", location: "Venue Location" },
    { title: "Venue", img: "/galleryPic2.png", location: "Venue Location" },
    { title: "Venue", img: "/galleryPic3.png", location: "Venue Location" },
  ];

  return (
    <section className="flex justify-center px-5">
      {layout == "layout_1" && (
        <div className="w-full p-4 sm:p-7 md:p-11 rounded-3xl border my-5 lg:my-8 xl:my-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center">
            Gallery
          </h1>
          <div className="flex justify-center">
            <p className="text-center max-w-[700px] text-base text-grayDark">
              Lorem ipsum dolor sit amet consectetur. Sodales quis nulla egestas
              aliquet id pharetra aliquam blandit. Semper pretium proin at
              laoreet vivamus vitae. Nullam faucibus varius euismod fermentum
              aliquam consectetur sapien. Molestie vitae urna ac in commodo.
              Viverra pulvinar vitae dignissim nibh sem tincidunt.
              <br />
              <Button className="mt-4 text-black-200" variant="grayOutline">
                Expolre Gallery
              </Button>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 py-10 gallery-grid">
            {data.map((res, index) => {
              return (
                <AlertDialog key={index}>
                  <AlertDialogTrigger className="relative h-[20rem] sm:h-[25rem] lg:h-[20rem] xl:h-[30rem]	rounded-3xl overflow-hidden cursor-pointer gallery-thumbnail">
                    <div
                      key={index}>
                      <Image
                        alt=""
                        src={res.img}
                        fill={true}
                        priority
                        style={{ objectFit: "cover" }}
                      />
                      <div className="z-10 absolute w-full bottom-0 p-6 pb-2 xl:p-8 text-white h-2/4 flex items-end opacity-0 ease-in duration-300">
                        <span className="text-end w-full">
                          <p>{res.location}</p>
                          <h5 className="text-3xl xl:text-4xl">{res.title}</h5>
                        </span>
                      </div>
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="max-w-[70rem]  overflow-hidden p-5 rounded-3xl">
                    <div className="w-full h-[50dvh] overflow-hidden rounded-2xl">
                      <img src="https://placehold.it/1920x1080" className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="mt-4 text-3xl leading-[80%]">
                      {res.title}
                    </h1>
                    <h3 className="text-lg leading-[80%]">
                      {res.location}
                    </h3>
                    <AlertDialogCancel className="absolute right-8 top-8 border rounded-full p-3 m-0 bg-white opacity-70"><Cross1Icon /></AlertDialogCancel>
                  </AlertDialogContent>
                </AlertDialog>
              );  
            })}
          </div>
        </div>
      )}

      {layout == "layout_2" && (
        <div className="w-full p-4 sm:p-7 md:p-11 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 py-10">
            {data.map((res, index) => {
              return (
                <AlertDialog key={index}>
                <AlertDialogTrigger className="relative h-[20rem] sm:h-[25rem] lg:h-[20rem] xl:h-[30rem]	rounded-3xl overflow-hidden cursor-pointer gallery-thumbnail">
                  <div
                    key={index}>
                    <Image
                      alt=""
                      src={res.img}
                      fill={true}
                      priority
                      style={{ objectFit: "cover" }}
                    />
                    <div className="z-10 absolute w-full bottom-0 p-6 pb-2 xl:p-8 text-white h-2/4 flex items-end opacity-0 ease-in duration-300">
                      <span className="text-end w-full">
                        <p>{res.location}</p>
                        <h5 className="text-3xl xl:text-4xl">{res.title}</h5>
                      </span>
                    </div>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-[70rem]  overflow-hidden p-5 rounded-3xl">
                    <div className="w-full h-[50dvh] overflow-hidden rounded-2xl">
                      <img src="https://placehold.it/" className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="mt-4 text-3xl leading-[80%]">
                      {res.title}
                    </h1>
                    <h3 className="text-lg leading-[80%]">
                      {res.location}
                    </h3>
                    <AlertDialogCancel className="absolute right-8 top-8 border rounded-full p-3 m-0 bg-white opacity-70"><Cross1Icon /></AlertDialogCancel>
                  </AlertDialogContent>
              </AlertDialog>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
