import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Info = () => {

  const Data = [
    {title: "CUSTOM UNIFORM", text:" Yes. It adheres to the WAI-ARIA design pattern."},
    {title: "MARKETING", text:" Yes. It adheres to the WAI-ARIA design pattern."},
    {title: "Public Relations", text:" Yes. It adheres to the WAI-ARIA design pattern."},
    {title: "SEO", text:" Yes. It adheres to the WAI-ARIA design pattern."},
    {title: "Revenue Sharing", text:" Yes. It adheres to the WAI-ARIA design pattern."},
  ];

  return (
    <section className="flex justify-center px-5">
      <div className="w-full p-4 sm:p-7 md:p-11 flex justify-between gap-10 items-end rounded-3xl  bg-gray-100">
        <Accordion type="single" collapsible className="w-full">
        {
          Data.map((res,index)=>{
            return(
              <AccordionItem
              key={index}
              value={`item-${index+1}`}
              className="border-0 my-4  bg-white px-5 rounded-3xl"
            >
              <AccordionTrigger className="text-lg sm:text-2xl lg:text-3xl hover:no-underline">
                {res.title}
              </AccordionTrigger>
              <AccordionContent className="text-base sm:text-xl">
               {res.text}
              </AccordionContent>
            </AccordionItem>
            )
          })
        }
        </Accordion>
      </div>
    </section>
  );
};

export default Info;
