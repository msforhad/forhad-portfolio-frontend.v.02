import assets from "../assets/image/logo-2xl.png";
import Qualification from "../components/Qualification";

const About = () => {
  return (
    <div className="bg-primary">
      <div className="mx-2 md:mx-10 xl:mx-20 grid grid-cols-1 md:grid-cols-[65%30%] gap-20 md:gap-[5%] py-10 md:py-30 ">
        <div className="grid grid-cols-1 md:grid-cols-[20%75%] gap-5 items-center ">
          <div className="flex md:flex-col items-center md:gap-25 gap-2 color-primary">
            <p className="md:rotate-90 tracking-[4px] poppins font-semibold">
              ABOUT ME
            </p>
            <p className="border px-10 color-primary md:rotate-90"></p>
          </div>

          <div className="flex flex-col gap-5 md:items-start items-center ">
            <div className="flex flex-col gap-5 ">
              <p className="text-3xl md:text-4xl font-black outfit color-primary tracking-widest">
                Need a{" "}
                <span className="text-orange-400">
                  Creative
                  <br /> Product?{" "}
                </span>{" "}
                I can Help You!
              </p>

              <p className="text-justify color-secondary ">
                HI! I'm {""}
                <span className="text-orange-500 font-bold">
                  Md.Mehedi Hasan Forhad
                </span>
                , and I'm a developer who has passion for building clean web
                application with intuitive functionalities.I enjoy the process
                of turing ideas into reality using creative solutions.I'm always
                curious about learning new skills,tools,and concepts.In
                additions to working on various solo full stack projects,I have
                worked with creative teams,which involves daily stand-ups and
                communications,source control, and project management.
              </p>
            </div>

            <div className="flex flex-row justify-end gap-5 items-start">
              <button className="py-2 px-4 rounded bg-orange-500 text-white hover:bg-orange-300 font-bold">
                HIRE ME
              </button>

              <button className="py-2 px-4 rounded hover:bg-cyan-500 hover:text-white text-slate-600 bg-white font-bold">
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <img className="" src={assets} alt="" />
        </div>
      </div>
      <Qualification></Qualification>
    </div>
  );
};

export default About;
