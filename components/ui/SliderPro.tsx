"use client";
import { useEffect } from "react";

export default function SliderPro() {
  useEffect(() => {
    const track = document.getElementById("image-track");
    const images = track?.getElementsByClassName("image");
    const lenImages = images?.length ?? 0;
    // const imagesPersite = window.innerWidth /100 /33;

    if (track) {
      window.onmousedown = (e) => {
        track.dataset.mouseDownAt = e.clientX.toString();
      };
      window.onmouseup = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
        console.log("mouseDownAt: " + track.dataset.mouseDownAt);
        console.log("prevPercentage: " + track.dataset.prevPercentage);
        console.log("percentage: " + track.dataset.percentage);
        console.log(
          "next percentage: " + parseFloat(track.dataset.percentage ?? "kokot")
        );
        console.log("lenImages: " + lenImages);
      };

      window.onmousemove = (e) => {
        if (track.dataset.mouseDownAt === "0") {
          return;
        } else {
          const mouseDelta =
              parseFloat(track.dataset.mouseDownAt ?? "0") - e.clientX,
            maxDelta = window.innerWidth;
          const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained =
              parseFloat(track.dataset.prevPercentage ?? "0") + percentage,
            nextPercentage = Math.max(
              Math.min(nextPercentageUnconstrained, 0),
              -100
            );
          const percent = (lenImages - 1) * 0.01;
          const rep = (lenImages - 5) / 5 + percent;
          // const sizeDif = 1.25;
          console.log(rep);
          // nextPercentageI = Math.max(
          //   Math.min(nextPercentageUnconstrained - (lenImages + 2) * 1, 0),
          //   -300 - (lenImages + 2) * 1
          // );

          track.dataset.percentage = nextPercentage.toString();
          console.log(maxDelta);
          track.animate(
            {
              transform: `translate(${nextPercentage * rep * 1.41}%, -50%)`,
            },
            { duration: 1200, fill: "forwards" }
          );

          for (const image of Array.from(images ?? [])) {
            image.animate(
              {
                objectPosition: `${100 + nextPercentage}% center`,
              },
              { duration: 1200, fill: "forwards" }
            );
          }
        }
      };
    }
  });
  const imagess = [];
  {
    for (let i = 0; i < 16; i++) {
      imagess.push(
        <img
          className="image"
          src="https://images.unsplash.com/photo-1727915325711-5fdfb5a0a55c?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          draggable="false"
          alt=""
          onClick={() => console.log("clicked ", i + 1)}
        />
      );
    }
  }

  return (
    <>
      <div className="sliderBody ">
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
          {imagess.map((i) => i)}
        </div>
      </div>
    </>
  );
}
