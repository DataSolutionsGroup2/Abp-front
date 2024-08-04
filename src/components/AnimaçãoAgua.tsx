import lottie from "lottie-web";
import aguaJson from "../imagens/agua.json";
import { useEffect, useRef } from "react";

const Agua = () => {
  const container = useRef(null);

  useEffect(() => {
    let animation = null;

    if (container.current) {
      animation = lottie.loadAnimation({
        container: container.current,
        animationData: aguaJson,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    }

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  return <div ref={container} className="w-auto h-auto" />;
};

export default Agua;
