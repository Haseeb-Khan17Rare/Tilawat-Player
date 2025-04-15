import { useRef, useState, useEffect } from "react";

const tilawats = [
  { title: "Tilawat 1", src: "/Tilawat1.mp3.mp3" },  
  { title: "Tilawat 2", src: "/Tilawat2.mp3.mp3" },
  { title: "Tilawat 3", src: "/Tilawt3.mp3.mp3" },
];

export default function Player() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.src = tilawats[current].src;
    setIsPlaying(false);
  }, [current]);

  const playPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const next = () => {
    setCurrent((current + 1) % tilawats.length);
  };

  const prev = () => {
    setCurrent((current - 1 + tilawats.length) % tilawats.length);
  };

  return (
    <div className="bg-gradient-to-br from-green-400 to-amber-100 p-8 rounded-3xl max-w-lg w-full mx-auto text-center shadow-xl">
      <h1 className="text-4xl font-semibold text-green-700 mb-4 drop-shadow-lg">Tilawat Player</h1>
      <p className="text-gray-600 opacity-80 mb-6">{tilawats[current].title}</p>

      <audio
        ref={audioRef}
        controls
        className="w-full mb-8 rounded-xl shadow-lg"
      />

      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={prev}
          className="bg-green-600 hover:bg-green-700 text-white text-3xl px-8 py-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
        >
          ⏮
        </button>
        <button
          onClick={playPause}
          className={`${
            isPlaying
              ? "bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
              : "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600"
          } text-white text-4xl px-8 py-6 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl`}
        >
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button
          onClick={next}
          className="bg-green-600 hover:bg-green-700 text-white text-3xl px-8 py-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
        >
          ⏭
        </button>
      </div>
    </div>
  );
}
