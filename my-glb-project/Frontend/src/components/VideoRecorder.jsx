import { useState, useRef } from "react";

const VideoRecorder = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const chunks = [];
      mediaRecorder.ondataavailable = (event) => chunks.push(event.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);

        // Reproducir el video grabado en el mismo reproductor
        videoRef.current.srcObject = null;
        videoRef.current.src = url;
        videoRef.current.controls = true;
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Error al acceder a la cámara:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    videoRef.current.srcObject?.getTracks().forEach((track) => track.stop());
    setRecording(false);
  };

  return (
    <div className="flex flex-col items-center p-4 relative">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Validación de Seña en tiempo real
      </h3>
      <video
        ref={videoRef}
        autoPlay
        className=" border  rounded-lg  w-[90%] bg-black"
      />
      {!recording ? (
        <button
          className=" absolute mt-50 cursor-pointer  "
          onClick={startRecording}
        >
          <img src="./assets/rec.png" className="h-10 w-10 mx-auto " alt="" />
          <p className="text-md text-white my-4 font-semibold">
            Click para Activar la Cámara
          </p>
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="px-4 py-2 mt-4 bg-red-500 text-white rounded"
        >
          Detener Validación
        </button>
      )}
      <p className="text-md text-gray-600 my-4 font-semibold px-12">
        Sigue la seña que te indica el asistente virtual <span className="font-bold">Juanchito</span>. Te diremos
        qué tan bien la realizaste y, si alcanzas al menos un 90% de precisión
        en la posición de la mano, podrás avanzar a la siguiente seña.
      </p>
      <div className="grid grid-cols-[2fr_9fr] w-[70%] mx-auto items-center gap-x-3">
        <div className="flex justify-end">
          <img className="my-3 w-6 h-6" src="./assets/valido.png" alt="" />
        </div>
        <p>Este ícono significa que la seña fue validada con éxito.</p>

        <div className="flex justify-end">
          <img className="my-3 w-6 h-6" src="./assets/invalid.png" alt="" />
        </div>
        <p>
          Este ícono significa que la seña fue invalidada y debes repetirla.
        </p>
      </div>
    </div>
  );
};

export default VideoRecorder;
