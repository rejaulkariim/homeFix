"use client";

const CallToAction = () => {
  return (
    // <div classNameName="wrapper">
    //   <motion.div
    //     initial={{ y: "-100%" }}
    //     whileInView={{ y: 0 }}
    //     transition={{
    //       ease: "easeInOut",
    //       duration: 1.35,
    //     }}
    //     className="bg-primary text-white py-16 px-8 text-center rounded-xl"
    //   >
    //     <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase">
    //       Ready to Discuss Your Project?
    //     </h2>
    //     <p className="text-lg mb-6">Our team is here to help. Call us now!</p>
    //     <div className="flex flex-col">
    //       <Link
    //         href="tel:+60179928203"
    //         className="text-3xl font-extrabold hover:underline tracking-wider"
    //       >
    //         +6017-9928-203
    //       </Link>
    //       <Link
    //         href="tel:+60109750594"
    //         className="text-3xl font-extrabold hover:underline tracking-wider"
    //       >
    //         +60109-750-594
    //       </Link>
    //     </div>
    //   </motion.div>
    // </div>

    <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div className="lg:w-1/2"></div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Build Your New <span className="text-blue-500">Idea</span>
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi reprehenderit vitae exercitationem aliquid dolores ullam
            temporibus enim expedita aperiam mollitia iure consectetur dicta
            tenetur, porro consequuntur saepe accusantium consequatur.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
