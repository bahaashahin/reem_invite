import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { FaMusic, FaPause } from "react-icons/fa";
import Confetti from "react-confetti";

import coupleImg from "./assets/couple.jpeg";
import childhoodImg from "./assets/childhood.jpeg";
import songFile from "./assets/song.mp3";
import wardImg from "./assets/ward.png"; // تم تعديل الاسم هنا بناءً على طلبك

// مكون الفاصل الوردي المكثّف والكبير - يجلس على حافة القسم تماماً
const FloralDivider = () => (
  <div className="absolute left-0 right-0 -bottom-10 sm:-bottom-16 flex justify-center items-center gap-x-reverse -space-x-8 sm:-space-x-12 overflow-hidden px-2 select-none pointer-events-none z-20">
    <img
      src={wardImg}
      alt=""
      className="w-14 h-14 sm:w-24 sm:h-24 object-contain opacity-40 rotate-12"
    />
    <img
      src={wardImg}
      alt=""
      className="w-20 h-20 sm:w-32 sm:h-32 object-contain opacity-75 -rotate-12"
    />
    <img
      src={wardImg}
      alt=""
      className="w-24 h-24 sm:w-36 sm:h-36 object-contain opacity-90 rotate-45 scale-110 z-10"
    />
    <img
      src={wardImg}
      alt=""
      className="w-28 h-28 sm:w-40 sm:h-40 object-contain opacity-100 -rotate-45 scale-125 z-20"
    />
    <img
      src={wardImg}
      alt=""
      className="w-24 h-24 sm:w-36 sm:h-36 object-contain opacity-90 rotate-90 scale-110 z-10"
    />
    <img
      src={wardImg}
      alt=""
      className="w-18 h-18 sm:w-28 sm:h-28 object-contain opacity-70 -rotate-90"
    />
    <img
      src={wardImg}
      alt=""
      className="w-12 h-12 sm:w-20 sm:h-20 object-contain opacity-40 rotate-12"
    />
  </div>
);

// إعدادات حركة الظهور عند السكرول المشتركة بين الأقسام
const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const audioRef = useRef(new Audio(songFile));

  // التحكم في شاشة التحميل وتشغيل الأغنية تلقائياً بعدها
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // تشغيل الموسيقى تلقائياً بعد اختفاء اللودنج
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
      <div
        className="
        h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-[#023e8a]
        via-[#0077b6]
        to-[#0096c7]
        text-white
        px-5
        relative
        overflow-hidden
      "
      >
        <img
          src={wardImg}
          alt=""
          className="absolute -top-5 -left-5 w-40 h-40 opacity-20 rotate-45 animate-pulse"
        />
        <img
          src={wardImg}
          alt=""
          className="absolute -bottom-5 -right-5 w-48 h-48 opacity-20 -rotate-45 animate-pulse"
        />

        <div className="text-center z-10">
          <div className="relative flex items-center justify-center">
            <div
              className="
            w-36 h-36
            border-4
            border-[#90e0ef]/30
            border-t-white
            rounded-full
            animate-spin
            mx-auto
          "
            ></div>

            <img
              src={wardImg}
              alt=""
              className="absolute w-24 h-24 opacity-50 animate-[spin_25s_linear_infinite]"
            />

            <h1
              className="
            absolute inset-0
            flex items-center justify-center
            text-3xl
            tracking-[8px]
            font-light
          "
            >
              B & R
            </h1>
          </div>

          <p className="mt-8 tracking-[4px] text-[#caf0f8]">
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
          numberOfPieces={300}
          gravity={0.15}
          colors={["#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#90e0ef"]}
        />
      )}

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="
        fixed
        z-50
        bottom-5
        right-5
        w-14
        h-14
        rounded-full
        bg-[#0077b6]
        hover:bg-[#0096c7]
        text-white
        shadow-xl
        flex
        items-center
        justify-center
        transition-all
      "
      >
        {playing ? <FaPause /> : <FaMusic />}
      </button>

      {/* HERO SECTION */}
      <section className="relative h-[90vh] sm:h-screen">
        <img src={coupleImg} alt="" className="w-full h-full object-cover" />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/40
          via-black/30
          to-[#023e8a]/85
        "
        ></div>

        <div
          className="
          absolute
          inset-0
          flex
          flex-col
          justify-center
          items-center
          text-center
          text-white
          px-5
        "
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
            text-sm
            sm:text-lg
            uppercase
            tracking-[5px]
          "
          >
            Save The Date
          </motion.h2>

          {/* تركاية انزلاق الأسماء بسلاسة ونعومة من الأعلى */}
          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 45,
              damping: 15,
              delay: 0.2,
            }}
            className="
            text-5xl
            sm:text-7xl
            md:text-8xl
            font-serif
            my-5
            drop-shadow-[0_5px_25px_rgba(0,0,0,0.9)]
          "
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
            className="
            text-lg
            sm:text-xl
            font-medium
            drop-shadow-lg
          "
          >
            Thursday 9 July 2026
          </motion.p>
        </div>
      </section>

      {/* SAVE THE DATE (جزء الشمروخ مع أنيميشن السكرول) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="-mt-12 sm:-mt-20 relative z-30 px-4"
      >
        <div
          className="
          max-w-5xl
          mx-auto
          bg-white
          border
          border-[#90e0ef]
          rounded-[40px]
          p-8
          sm:p-12
          shadow-2xl
          relative
          overflow-hidden
        "
        >
          {/* ورود في الزاوية السفلية اليسرى */}
          <div className="absolute -bottom-12 -left-12 flex items-center select-none pointer-events-none opacity-90 mix-blend-multiply">
            <img
              src={wardImg}
              alt=""
              className="w-24 h-24 sm:w-36 sm:h-36 object-contain rotate-12 relative z-10"
            />
            <img
              src={wardImg}
              alt=""
              className="w-28 h-28 sm:w-44 sm:h-44 object-contain -ml-14 -mb-4 -rotate-45 relative z-20 scale-110"
            />
            <img
              src={wardImg}
              alt=""
              className="w-20 h-20 sm:w-32 sm:h-32 object-contain -ml-16 mb-8 rotate-90 relative z-0 opacity-60"
            />
          </div>

          {/* ورود في الزاوية العلوية اليمنى */}
          <div className="absolute -top-12 -right-12 flex items-center select-none pointer-events-none opacity-90 mix-blend-multiply">
            <img
              src={wardImg}
              alt=""
              className="w-20 h-20 sm:w-32 sm:h-32 object-contain mr-8 mt-8 rotate-45 relative z-0 opacity-60"
            />
            <img
              src={wardImg}
              alt=""
              className="w-28 h-28 sm:w-44 sm:h-44 object-contain -mr-14 -mt-4 rotate-180 relative z-20 scale-110"
            />
            <img
              src={wardImg}
              alt=""
              className="w-24 h-24 sm:w-36 sm:h-36 object-contain -mr-16 -rotate-90 relative z-10"
            />
          </div>

          <h2 className="text-center text-2xl sm:text-4xl mb-6 relative z-10 font-medium">
            To Join Our Engagement Party
          </h2>

          <p className="text-center text-lg relative z-10">
            Don't forget to bring your
          </p>
          <p className="text-center text-4xl mt-4 relative z-10 drop-shadow-sm">
            شمروخ 🧨
          </p>
        </div>
      </motion.section>

      {/* INVITE (مع أنيميشن السكرول) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-20 sm:py-28 px-5 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="
            uppercase
            tracking-[6px]
            text-[#0077b6]
            mb-4
          "
          >
            Together with their families
          </p>

          <h2 className="text-3xl sm:text-5xl leading-relaxed">
            Invite You To Celebrate
            <br />
            Their Engagement
          </h2>
        </div>
        <FloralDivider />
      </motion.section>

      {/* DRESS CODE (مع أنيميشن السكرول) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-20 sm:py-28 px-5 relative"
      >
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl mb-8">Dress Code</h2>

          <div
            className="
            bg-white
            rounded-[35px]
            p-6
            sm:p-8
            shadow-xl
            border
            border-[#90e0ef]
          "
          >
            <div>
              <h3 className="text-xl mb-4">Women</h3>
              <div className="w-14 h-14 rounded-2xl bg-black mx-auto shadow-lg"></div>
              <p className="mt-3 text-lg">Black</p>
            </div>

            <hr className="my-6 border-[#90e0ef]" />

            <div>
              <h3 className="text-xl mb-4">Men</h3>
              <div className="flex justify-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-black shadow-lg"></div>
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-gray-300 shadow-lg"></div>
              </div>
              <p className="mt-3 text-lg">Black or White</p>
            </div>
          </div>
        </div>
        <FloralDivider />
      </motion.section>

      {/* CHILDHOOD PHOTO (مع أنيميشن السكرول) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-20 sm:py-24 px-5 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[8px] text-[#0077b6] mb-5">Then</p>
          <img
            src={childhoodImg}
            alt=""
            className="w-full rounded-[35px] shadow-xl"
          />
          <h2 className="text-2xl sm:text-4xl mt-8">
            From Little Memories
            <br />
            To A Beautiful Beginning
          </h2>
          <p className="uppercase tracking-[8px] text-[#0077b6] mt-8">Now</p>
        </div>
        <FloralDivider />
      </motion.section>

      {/* COUNTDOWN (مع أنيميشن السكرول) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-20 sm:py-28 px-5 relative"
      >
        <h2 className="text-center text-4xl sm:text-5xl mb-10">Countdown</h2>

        <Countdown
          date={targetDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {[
                ["Days", days],
                ["Hours", hours],
                ["Minutes", minutes],
                ["Seconds", seconds],
              ].map((item) => (
                <div
                  key={item[0]}
                  className="bg-white border border-[#90e0ef] rounded-[30px] p-6 shadow-lg text-center"
                >
                  <h3 className="text-3xl sm:text-5xl font-bold">{item[1]}</h3>
                  <p className="mt-3">{item[0]}</p>
                </div>
              ))}
            </div>
          )}
        />
        <FloralDivider />
      </motion.section>

      {/* DETAILS & LOCATION (مع أنيميشن السكرول والماب الشغالة) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-24 sm:py-32 bg-[#90e0ef] px-5 relative"
      >
        <img
          src={wardImg}
          alt=""
          className="absolute -top-12 -right-12 w-44 h-44 opacity-25 pointer-events-none rotate-45"
        />
        <img
          src={wardImg}
          alt=""
          className="absolute -bottom-12 -left-12 w-44 h-44 opacity-25 pointer-events-none -rotate-45"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl mb-10">Engagement Details</h2>
          <h3 className="text-2xl sm:text-3xl mb-3">Orkida Hall - Ismailia</h3>
          <p className="text-base sm:text-lg mb-5 opacity-80">
            اخر طريق البلاجات بنادي التجديف القوات المسلحة
          </p>
          <p className="text-3xl mb-8">8:00 PM</p>

          {/* مربع الخريطة التفاعلية الشغال */}
          <div className="max-w-2xl mx-auto mb-8 bg-white p-2 rounded-[30px] shadow-xl border border-[#0077b6]/20 overflow-hidden">
            <iframe
              title="Orkida Hall Location"
              src="https://maps.google.com/maps?q=Orkida%20Hall%20-%20Ismailia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 sm:h-80 rounded-[24px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            href="https://maps.app.goo.gl/PAXcfQSp8zJHCcAK9"
            target="_blank"
            rel="noreferrer"
            className="
            inline-block
            bg-[#0077b6]
            hover:bg-[#005f93]
            text-white
            px-10
            py-4
            rounded-full
            shadow-lg
            font-medium
            transition-all
            transform
            hover:scale-105
          "
          >
            View Location on Map
          </a>
        </div>
        <FloralDivider />
      </motion.section>

      {/* MESSAGE (مع أنيميشن السكرول) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="py-20 sm:py-28 px-5 relative"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl sm:text-5xl mb-3">
            Help Us Create Our Memories
          </h2>
          <p className="text-center mb-8">With Kind Words</p>

          <input
            placeholder="Your Name"
            className="w-full border border-[#90e0ef] rounded-2xl p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
          />

          <textarea
            rows="5"
            placeholder="Leave a Message"
            className="w-full border border-[#90e0ef] rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
          />

          <button className="w-full mt-5 bg-[#0077b6] hover:bg-[#0096c7] text-white py-4 rounded-2xl transition">
            Send Message
          </button>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-[#023e8a] text-white">
        <h2 className="text-3xl">Belal & Reem</h2>
      </footer>
    </div>
  );
}
