import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  const FAQList = [
    {
      id: 1,
      title: "How many hours of fasting are required before the procedure?",
      text: "10-12 Hours of fasting required, do ensure that you do not over fast (beyond 13-14 hours",
    },
    {
      id: 2,
      title:
        "Do I have to bring any ID proof while coming to the hospital for the procedure?",
      text: "If already registered at the hospital provide the hospital ID number at the time of reporting at the hospital. In case the first time please carry Government ID Proof for Registration purposes.",
    },
    {
      id: 3,
      title: "Can I drink water before the procedure?",
      text: "Report at the Health check reception on empty stomach, there is no restriction to the intake of water",
    },
    {
      id: 4,
      title: "What type of clothes can I wear for the procedure?",
      text: "Avoid wearing tight, formal clothes.",
    },
    {
      id: 5,
      title: "How many hours of fasting are required before the procedure?",
      text: "10-12 Hours of fasting required, do ensure that you do not over fast (beyond 13-14 hours",
    },
    {
      id: 6,
      title:
        "Do I have to bring any ID proof while coming to the hospital for the procedure?",
      text: "If already registered at the hospital provide the hospital ID number at the time of reporting at the hospital. In case the first",
    },
  ];
  return (
    <div className="px-10 my-10">
      <h1 className="text-3xl font-medium text-blue-800">FAQs</h1>
      <div>
        <Accordion type="single" collapsible className="w-full  p-1">
          {FAQList.map((item) => (
            <AccordionItem
              value={`item-${item.id}`}
              className=" bg-custom-gradient p-[2px] rounded-lg my-2 "
            >
              <div className="bg-white  rounded-lg">
                <AccordionTrigger className=" p-4">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className=" p-4 ">
                  {item.text}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
