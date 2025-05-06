"use client";

const AboutUsSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-18 pt-14 pb-8">
        <div className="w-full self-end">
          <h2 className="text-[#B12433] text-base md:text-lg font-medium md:font-semibold">
            About Us
          </h2>
          <h4 className="my-4 md:my-0 text-3xl md:text-4xl font-medium md:font-semibold">
            Connecting You to Memorable Live Experiences
          </h4>
        </div>
        <div className="w-[70%]">
          <p className="text-[#475467] text-base md:text-lg font-normal md:font-medium ">
            We are passionate about enriching lives through the power of live
            entertainment. Our platform is dedicated to curating a diverse range
            of events ensuring that there&apos;s something for every interest.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
