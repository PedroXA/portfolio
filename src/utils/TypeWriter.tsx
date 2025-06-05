import Typewriter from "typewriter-effect";

export function TypeWriterRole() {
  return (
    <Typewriter
      options={{
        strings: [
          "DESENVOLVEDOR FRONT-END",
          "UX/UI DESIGNER",
          "SUPORTE TÉCNICO",
        ],
        autoStart: true,
        loop: true,
        delay: 130,
        deleteSpeed: 50,
      }}
    />
  );
}
