import { useEffect, useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { FaMusic, FaPause } from "react-icons/fa";
import Confetti from "react-confetti";
import coupleImg from "./assets/couple.jpeg";
import childhoodImg from "./assets/childhood.jpeg";
import songFile from "./assets/song.mp3";
import wardImg from "./assets/ward.png";

// مكون الفاصل الوردي المكثّف والمتداخل - تم ضبط التداخل والأحجام لتصبح مرنة ومتجاوبة بالكامل على الموبايل
const FloralDivider = () => (
  <div className="absolute left-0 right-0 -bottom-8 sm:-bottom-16 flex justify-center items-center gap-x-reverse -space-x-4 sm:-space-x-12 overflow-hidden px-2 select-none pointer-events-none z-10">
    <img
      src={wardImg}
      alt=""
      className="w-10 h-10 sm:w-24 sm:h-24 object-contain opacity-40 rotate-12"
    />
    <img
      src={wardImg}
      alt=""
      className="w-14 h-14 sm:w-32 sm:h-32 object-contain opacity-75 -rotate-12"
    />
    <img
      src={wardImg}
      alt=""
      className="w-16 h-16 sm:w-36 sm:h-36 object-contain opacity-90 rotate-45 scale-110 z-10"
    />
    <img
      src={wardImg}
      alt=""
      className="w-20 h-20 sm:w-40 sm:h-40 object-contain opacity-100 -rotate-45 scale-125 z-20"
    />
    <img
      src={wardImg}
      alt=""
      className="w-16 h-16 sm:w-36 sm:h-36 object-contain opacity-90 rotate-90 scale-110 z-10"
    />
    <img
      src={wardImg}
      alt=""
      className="w-14 h-14 sm:w-28 sm:h-28 object-contain opacity-70 -rotate-90"
    />
    <img
      src={wardImg}
      alt=""
      className="w-10 h-10 sm:w-20 sm:h-20 object-contain opacity-40 rotate-12"
    />
  </div>
);

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const audioRef = useRef(new Audio(songFile));
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = async () => {
    await addDoc(collection(db, "messages"), {
      name,
      message,
      createdAt: new Date(),
    });

    setName("");
    setMessage("");

    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);
    }, 4000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch((err) =>
          console.log(
            "المتصفح يمنع التشغيل التلقائي حتى يتفاعل المستخدم أولاً:",
            err,
          ),
        );
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.log(err));
    }
    setPlaying(!playing);
  };

  const targetDate = new Date("2026-07-09T20:00:00");

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#023e8a] via-[#0077b6] to-[#0096c7] text-white px-5 relative overflow-hidden">
        <img
          src={wardImg}
          alt=""
          className="absolute -top-5 -left-5 w-32 h-32 sm:w-40 sm:h-40 opacity-20 rotate-45 animate-pulse z-0"
        />
        <img
          src={wardImg}
          alt=""
          className="absolute -bottom-5 -right-5 w-36 h-36 sm:w-48 sm:h-48 opacity-20 -rotate-45 animate-pulse z-0"
        />

        <div className="text-center z-10">
          <div className="relative flex items-center justify-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 border-4 border-[#90e0ef]/30 border-t-white rounded-full animate-spin mx-auto"></div>
            <img
              src={wardImg}
              alt=""
              className="absolute w-16 h-16 sm:w-24 sm:h-24 opacity-50 animate-[spin_25s_linear_infinite]"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl tracking-[8px] font-light">
              B & R
            </h1>
          </div>
          <p className="mt-8 tracking-[4px] text-[#caf0f8] text-sm sm:text-base">
            Loading Invitation...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#caf0f8] text-[#023e8a] overflow-hidden relative">
      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={150}
          gravity={0.15}
          colors={["#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#90e0ef"]}
        />
      )}

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed z-50 bottom-5 right-5 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0077b6] hover:bg-[#0096c7] text-white shadow-xl flex items-center justify-center transition-all"
      >
        {playing ? <FaPause /> : <FaMusic />}
      </button>

      {/* HERO SECTION */}
      <section className="relative h-[85vh] sm:h-screen">
        <img src={coupleImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#023e8a]/85"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-5 z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xs sm:text-lg uppercase tracking-[5px]"
          >
            Save The Date
          </motion.h2>

          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 45,
              damping: 15,
              delay: 0.2,
            }}
            className="text-4xl sm:text-7xl md:text-8xl font-serif my-5 drop-shadow-[0_5px_25px_rgba(0,0,0,0.9)]"
          >
            Belal
            <br />
            &
            <br />
            Reem
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-xl font-medium drop-shadow-lg"
          >
            Thursday 9 July 2026
          </motion.p>
        </div>
      </section>

      {/* SAVE THE DATE (جزء الشمروخ) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="-mt-12 sm:-mt-20 relative z-30 px-4"
      >
        <div className="max-w-5xl mx-auto bg-white border border-[#90e0ef] rounded-[24px] sm:rounded-[40px] p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* باقة ورود متداخلة ومتجاوبة في الزاوية السفلية اليسرى للكارت */}
          <div className="absolute -bottom-6 -left-6 sm:-bottom-12 sm:-left-12 flex items-center select-none pointer-events-none opacity-90 mix-blend-multiply z-0 -space-x-4 sm:-space-x-14 flex-row-reverse">
            <img
              src={wardImg}
              alt=""
              className="w-14 h-14 sm:w-36 sm:h-36 object-contain rotate-12 relative z-10"
            />
            <img
              src={wardImg}
              alt=""
              className="w-16 h-16 sm:w-44 sm:h-44 object-contain -rotate-45 relative z-20 scale-110"
            />
            <img
              src={wardImg}
              alt=""
              className="w-12 h-12 sm:w-32 sm:h-32 object-contain rotate-90 relative z-0 opacity-60"
            />
          </div>

          {/* باقة ورود متداخلة ومتجاوبة في الزاوية العلوية اليمنى للكارت */}
          <div className="absolute -top-6 -right-6 sm:-top-12 sm:-right-12 flex items-center select-none pointer-events-none opacity-90 mix-blend-multiply z-0 -space-x-4 sm:-space-x-14">
            <img
              src={wardImg}
              alt=""
              className="w-12 h-12 sm:w-32 sm:h-32 object-contain rotate-45 relative z-0 opacity-60"
            />
            <img
              src={wardImg}
              alt=""
              className="w-16 h-16 sm:w-44 sm:h-44 object-contain rotate-180 relative z-20 scale-110"
            />
            <img
              src={wardImg}
              alt=""
              className="w-14 h-14 sm:w-36 sm:h-36 object-contain -rotate-90 relative z-10"
            />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-xl sm:text-4xl mb-4 sm:mb-6 font-medium px-4">
              To Join Our Engagement Party
            </h2>
            <p className="text-sm sm:text-lg">Don't forget to bring your</p>
            <p className="text-2xl sm:text-4xl mt-3 sm:mt-4 drop-shadow-sm">
              شمروخ 🧨
            </p>
          </div>
        </div>
      </motion.section>

      {/* INVITE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-16 sm:py-28 px-5 relative"
      >
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-[#0077b6] mb-4 text-xs sm:text-base">
            Together with their families
          </p>
          <h2 className="text-2xl sm:text-5xl leading-relaxed">
            Invite You To Celebrate
            <br />
            Their Engagement
          </h2>
        </div>
        <FloralDivider />
      </motion.section>

      {/* DRESS CODE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-16 sm:py-28 px-5 relative"
      >
        <div className="max-w-xl mx-auto text-center relative z-20">
          <h2 className="text-2xl sm:text-5xl mb-6 sm:mb-8">Dress Code</h2>
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-8 shadow-xl border border-[#90e0ef]">
            <div>
              <h3 className="text-lg sm:text-xl mb-3">Women</h3>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black mx-auto shadow-lg"></div>
              <p className="mt-2 text-base sm:text-lg">Black</p>
            </div>
            <hr className="my-5 sm:my-6 border-[#90e0ef]" />
            <div>
              <h3 className="text-lg sm:text-xl mb-3">Men</h3>
              <div className="flex justify-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black shadow-lg"></div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-gray-300 shadow-lg"></div>
              </div>
              <p className="mt-2 text-base sm:text-lg">Black or White</p>
            </div>
          </div>
        </div>
        <FloralDivider />
      </motion.section>

      {/* CHILDHOOD PHOTO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-16 sm:py-24 px-5 relative"
      >
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <p className="uppercase tracking-[6px] sm:tracking-[8px] text-[#0077b6] mb-4 text-xs sm:text-base">
            Then
          </p>
          <img
            src={childhoodImg}
            alt=""
            className="w-full rounded-[24px] sm:rounded-[35px] shadow-xl"
          />
          <h2 className="text-xl sm:text-4xl mt-6 sm:mt-8">
            From Little Memories
            <br />
            To A Beautiful Beginning
          </h2>
          <p className="uppercase tracking-[6px] sm:tracking-[8px] text-[#0077b6] mt-6 sm:mt-8 text-xs sm:text-base">
            Now
          </p>
        </div>
        <FloralDivider />
      </motion.section>

      {/* COUNTDOWN */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-16 sm:py-28 px-5 relative"
      >
        <div className="relative z-20">
          <h2 className="text-center text-2xl sm:text-5xl mb-8 sm:mb-10">
            Countdown
          </h2>
          <Countdown
            date={targetDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto">
                {[
                  ["Days", days],
                  ["Hours", hours],
                  ["Minutes", minutes],
                  ["Seconds", seconds],
                ].map((item) => (
                  <div
                    key={item[0]}
                    className="bg-white border border-[#90e0ef] rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 shadow-lg text-center"
                  >
                    <h3 className="text-2xl sm:text-5xl font-bold">
                      {item[1]}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm">{item[0]}</p>
                  </div>
                ))}
              </div>
            )}
          />
        </div>
        <FloralDivider />
      </motion.section>

      {/* DETAILS & LOCATION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-20 sm:py-32 bg-[#90e0ef] px-5 relative"
      >
        {/* ورود زوايا القسم الخلفية متداخلة ومرنة */}
        <div className="absolute -top-10 -right-10 flex select-none pointer-events-none opacity-25 z-0 -space-x-4 sm:-space-x-8 rotate-45">
          <img
            src={wardImg}
            alt=""
            className="w-16 h-16 sm:w-36 sm:h-36 object-contain"
          />
          <img
            src={wardImg}
            alt=""
            className="w-20 h-20 sm:w-44 sm:h-44 object-contain scale-110"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 flex select-none pointer-events-none opacity-25 z-0 -space-x-4 sm:-space-x-8 -rotate-45 flex-row-reverse">
          <img
            src={wardImg}
            alt=""
            className="w-16 h-16 sm:w-36 sm:h-36 object-contain"
          />
          <img
            src={wardImg}
            alt=""
            className="w-20 h-20 sm:w-44 sm:h-44 object-contain scale-110"
          />
        </div>

        {/* محتوى القسم الأساسي والخريطة */}
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <h2 className="text-3xl sm:text-5xl mb-8 sm:mb-10">
            Engagement Details
          </h2>
          <h3 className="text-xl sm:text-3xl mb-2">Orkida Hall - Ismailia</h3>
          <p className="text-sm sm:text-lg mb-4 opacity-80 px-2">
            اخر طريق البلاجات بنادي التجديف القوات المسلحة
          </p>
          <p className="text-2xl sm:text-3xl mb-6 sm:mb-8">8:00 PM</p>

          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 bg-white p-1.5 sm:p-2 rounded-[20px] sm:rounded-[30px] shadow-xl border border-[#0077b6]/20 overflow-hidden relative z-30">
            <iframe
              title="Orkida Hall Location"
              src="https://maps.google.com/maps?q=Orkida%20Hall%20-%20Ismailia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-56 sm:h-80 rounded-[16px] sm:rounded-[24px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            href="https://maps.app.goo.gl/PAXcfQSp8zJHCcAK9"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#0077b6] hover:bg-[#005f93] text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-full shadow-lg text-sm sm:text-base font-medium transition-all transform hover:scale-105"
          >
            View Location on Map
          </a>
        </div>
        <FloralDivider />
      </motion.section>

      {/* MESSAGE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-16 sm:py-28 px-5 relative"
      >
        <div className="max-w-3xl mx-auto relative z-20">
          <h2 className="text-center text-2xl sm:text-5xl mb-2">
            Help Us Create Our Memories
          </h2>
          <p className="text-center mb-6 sm:mb-8 text-sm sm:text-base">
            With Kind Words
          </p>
          {successMessage && (
            <div className="mb-5 rounded-2xl border border-[#90e0ef] bg-white p-4 text-center shadow-lg animate-pulse">
              <h3 className="text-lg font-semibold text-[#0077b6]">
                Thank You ❤️
              </h3>
              <p className="mt-1 text-sm text-[#023e8a]">
                Your message has been received. Wishing you all the happiness
                too!
              </p>
            </div>
          )}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full border border-[#90e0ef] rounded-xl p-3.5 sm:p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-[#0077b6] text-sm sm:text-base"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            placeholder="Leave a Message"
            className="w-full border border-[#90e0ef] rounded-xl p-3.5 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#0077b6] text-sm sm:text-base"
          />
          <button
            onClick={handleSubmit}
            className="w-full mt-4 bg-[#0077b6] hover:bg-[#0096c7] text-white py-3.5 sm:py-4 rounded-xl transition text-sm sm:text-base"
          >
            Send Message
          </button>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="py-8 sm:py-10 text-center bg-[#023e8a] text-white relative z-20">
        <h2 className="text-2xl sm:text-3xl">Belal & Reem</h2>
      </footer>
    </div>
  );
}
