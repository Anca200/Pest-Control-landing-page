import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 const AccordionCustomIcon =() => {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div 
         data-aos="fade-up"
        data-aos-duration="1000"
    className=" w-[70%] m-auto mt-[150px] items-center font-heroFont max-lg:w-full" id="faq">
        <h2 className="text-center text-[2rem] font-bold text-[#333333] mb-[50px]">Frequently asked <span className="text-green-900 font-extrabold">questions</span></h2>


      <Accordion 
      
       className="bg-[#113D3C] p-[10px]  text-white mb-[10px] rounded-tl-[20px] rounded-br-[20px]"
      open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
        className="text-[1.3rem] mb-[10px] "
        onClick={() => handleOpen(1)}><h3>How often should I have my home inspected for pests?</h3></AccordionHeader>
        <AccordionBody>
        <p>Regular inspections are recommended at least once a year to catch any potential pest problems early. However, if you’ve experienced frequent issues in the past or live in an area prone to certain pests, bi-annual or quarterly inspections might be more beneficial.</p>
        </AccordionBody>
      </Accordion>
      <Accordion
      className="bg-[#113D3C] p-[10px] text-white mb-[10px] rounded-tl-[20px] rounded-br-[20px] "
      open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader 
        className="text-[1.3rem] mb-[10px] "
        onClick={() => handleOpen(2)}>
        <h3> Are the pest control treatments safe for my pets and children?</h3>
        </AccordionHeader>
        <AccordionBody>
        Yes, our pest control treatments are designed with safety in mind. We use eco-friendly, non-toxic products that are safe for both pets and children. Our technicians are trained to apply treatments in a manner that minimizes any potential risks.
        </AccordionBody>
      </Accordion>
      <Accordion 
      className="bg-[#113D3C] p-[10px]  text-white mb-[10px] rounded-tl-[20px] rounded-br-[20px]"
      open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader 
        className="text-[1.3rem] mb-[10px]"
        onClick={() => handleOpen(3)}>
       <h3> What should I do to prepare my home for a pest control treatment?</h3>
        </AccordionHeader>
        <AccordionBody>
       <p> Before our technicians arrive, we recommend clearing any clutter from areas where pests are commonly found, such as kitchens, bathrooms, and basements. Secure food items and remove pet dishes. Our team will provide you with specific instructions tailored to your treatment plan.</p>
        </AccordionBody>
      </Accordion>
      <Accordion 
      className="bg-[#113D3C] p-[10px]  text-white mb-[10px] rounded-tl-[20px] rounded-br-[20px]"
      open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader 
        className="text-[1.3rem] mb-[10px]"
        onClick={() => handleOpen(3)}>
       <h3>How long does it take to see results after a pest control treatment?</h3>
        </AccordionHeader>
        <AccordionBody>
       <p>The time it takes to see results can vary depending on the type of pest and the extent of the infestation. In many cases, you may notice a significant reduction in pest activity within a few days. However, for more severe infestations, it may take a couple of weeks for the treatment to be fully effective. Our technicians will provide you with a detailed timeline and follow-up plan during the service.</p>
        </AccordionBody>
      </Accordion>
      </div>
    </>
  );
}
export default  AccordionCustomIcon