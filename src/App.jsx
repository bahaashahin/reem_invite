import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { FaMusic, FaPause } from "react-icons/fa";
import Confetti from "react-confetti";

import coupleImg from "./assets/couple.jpeg";
import childhoodImg from "./assets/childhood.jpeg";
import songFile from "./assets/song.mp3";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  const audioRef = useRef(new Audio(songFile));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
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
      "
      >
        <div className="text-center">
          <div className="relative">
            <div
              className="
              w-32 h-32
              border-4
              border-[#90e0ef]
              border-t-white
              rounded-full
              animate-spin
              mx-auto
            "
            ></div>

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
    <div className="bg-[#caf0f8] text-[#023e8a] overflow-hidden">
      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={300}
          gravity={0.15}
          colors={["#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#90e0ef"]}
        />
      )}

      {/* MUSIC */}
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

      {/* HERO */}
      <section className="relative h-[90vh] sm:h-screen">
        <img src={coupleImg} alt="" className="w-full h-full object-cover" />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/80
          via-black/70
          to-[#023e8a]/95
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
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

          <p
            className="
            text-lg
            sm:text-xl
            font-medium
            drop-shadow-lg
          "
          >
            Thursday 9 July 2026
          </p>
        </div>
      </section>

      {/* SAVE THE DATE */}
      <section className="-mt-12 sm:-mt-20 relative z-10 px-4">
        <div
          className="
          max-w-5xl
          mx-auto
          bg-white
          border
          border-[#90e0ef]
          rounded-[40px]
          p-6
          sm:p-10
          shadow-2xl
        "
        >
          <h2 className="text-center text-2xl sm:text-4xl mb-6">
            To Join Our Engagement Party
          </h2>

          <p className="text-center text-lg">Don't forget to bring your</p>

          <p className="text-center text-4xl mt-4">شمروخ 🧨</p>
        </div>
      </section>

      {/* INVITE */}
      <section className="py-16 sm:py-20 px-5">
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
      </section>
      {/* DRESS CODE */}
      <section className="py-14 sm:py-20 px-5">
        <div className="max-w-xl mx-auto text-center">
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

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-black
                mx-auto
                shadow-lg
              "
              ></div>

              <p className="mt-3 text-lg">Black</p>
            </div>

            <hr className="my-6 border-[#90e0ef]" />

            <div>
              <h3 className="text-xl mb-4">Men</h3>

              <div
                className="
                flex
                justify-center
                gap-4
              "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-black
                  shadow-lg
                "
                ></div>

                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white
                  border-2
                  border-gray-300
                  shadow-lg
                "
                ></div>
              </div>

              <p className="mt-3 text-lg">Black or White</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHILDHOOD PHOTO */}

      <section className="py-10 sm:py-14 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="
            uppercase
            tracking-[8px]
            text-[#0077b6]
            mb-5
          "
          >
            Then
          </p>

          <img
            src={childhoodImg}
            alt=""
            className="
            w-full
            rounded-[35px]
            shadow-xl
          "
          />

          <h2
            className="
            text-2xl
            sm:text-4xl
            mt-8
          "
          >
            From Little Memories
            <br />
            To A Beautiful Beginning
          </h2>

          <p
            className="
            uppercase
            tracking-[8px]
            text-[#0077b6]
            mt-8
          "
          >
            Now
          </p>
        </div>
      </section>

      {/* COUNTDOWN */}

      <section className="py-16 sm:py-24 px-5">
        <h2
          className="
          text-center
          text-4xl
          sm:text-5xl
          mb-10
        "
        >
          Countdown
        </h2>

        <Countdown
          date={targetDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div
              className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-5
              max-w-4xl
              mx-auto
            "
            >
              {[
                ["Days", days],
                ["Hours", hours],
                ["Minutes", minutes],
                ["Seconds", seconds],
              ].map((item) => (
                <div
                  key={item[0]}
                  className="
                  bg-white
                  border
                  border-[#90e0ef]
                  rounded-[30px]
                  p-6
                  shadow-lg
                  text-center
                "
                >
                  <h3
                    className="
                    text-3xl
                    sm:text-5xl
                    font-bold
                  "
                  >
                    {item[1]}
                  </h3>

                  <p className="mt-3">{item[0]}</p>
                </div>
              ))}
            </div>
          )}
        />
      </section>
      {/* DETAILS */}

      <section
        className="
        py-16
        sm:py-24
        bg-[#90e0ef]
        px-5
      "
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="
            text-4xl
            sm:text-5xl
            mb-10
          "
          >
            Engagement Details
          </h2>

          <h3
            className="
            text-2xl
            sm:text-3xl
            mb-3
          "
          >
            Orkida Hall - Ismailia
          </h3>

          <p
            className="
            text-base
            sm:text-lg
            mb-5
            opacity-80
          "
          >
            اخر طريق البلاجات بنادي التجديف القوات المسلحة
          </p>

          <p
            className="
            text-3xl
          "
          >
            8:00 PM
          </p>

          <a
            href="رابط_المكان"
            target="_blank"
            rel="noreferrer"
            className="
            inline-block
            mt-6
            bg-[#0077b6]
            text-white
            px-8
            py-3
            rounded-full
            shadow-lg
          "
          >
            View Location
          </a>
        </div>
      </section>

      {/* MESSAGE */}

      <section className="py-16 sm:py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <h2
            className="
            text-center
            text-3xl
            sm:text-5xl
            mb-3
          "
          >
            Help Us Create Our Memories
          </h2>

          <p className="text-center mb-8">With Kind Words</p>

          <input
            placeholder="Your Name"
            className="
            w-full
            border
            border-[#90e0ef]
            rounded-2xl
            p-4
            mb-4
            focus:outline-none
            focus:ring-2
            focus:ring-[#0077b6]
          "
          />

          <textarea
            rows="5"
            placeholder="Leave a Message"
            className="
            w-full
            border
            border-[#90e0ef]
            rounded-2xl
            p-4
            focus:outline-none
            focus:ring-2
            focus:ring-[#0077b6]
          "
          />

          <button
            className="
            w-full
            mt-5
            bg-[#0077b6]
            hover:bg-[#0096c7]
            text-white
            py-4
            rounded-2xl
            transition
          "
          >
            Send Message
          </button>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        className="
        py-10
        text-center
        bg-[#023e8a]
        text-white
      "
      >
        <h2 className="text-3xl">Belal & Reem</h2>
      </footer>
    </div>
  );
}
