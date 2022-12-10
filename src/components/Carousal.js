import React from "react";

const Carousal = () => {
  return (
    <div className="w-[80%] h-[80%]">
      <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <a href="/jewellery">
              <img
                src="https://ik.imagekit.io/ngamedata/memories/jewellary/1661877236352_wJA5fp01G.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884107642"
                class="block w-full"
                alt="Motorbike Smoke"
              />
            </a>
          </div>

          <div class="carousel-item relative float-left w-full">
            <a href="/prewed">
              <img
                src="https://ik.imagekit.io/ngamedata/memories/pre_couple/pre_cople8_L1I9_RuFC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881079573"
                class="block w-full"
                alt="Mountaintop"
              />
            </a>
          </div>

          <div class="carousel-item relative float-left w-full">
            <a href="/prewed">
              <img
                src="https://ik.imagekit.io/ngamedata/memories/pre_couple/0F1A8973__WgQi4HYV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670699151839"
                class="block w-full"
                alt="Mountaintop"
              />
            </a>
          </div>
          <div class="carousel-item relative float-left w-full">
            <a href="/baby">
              <img
                src="https://ik.imagekit.io/ngamedata/memories/baby/IMG_5314_PRn0ylFF2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670697651389"
                class="block w-full"
                alt="Mountaintop"
              />
            </a>
          </div>
          <div class="carousel-item relative float-left w-full">
            <a href="/prewed">
              <img
                src="https://ik.imagekit.io/ngamedata/memories/Baby_shower/mat9_IyL0XcowE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881373447"
                class="block w-full"
                alt="Mountaintop"
              />
            </a>
          </div>
          <div class="carousel-item relative float-left w-full">
            <a href="/prewed">
              <img
                src="https://ik.imagekit.io/ngamedata/memories/swipe/pre_cople6__x3HAbxWq_YyWW_iCem.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665238350856"
                class="block w-full"
                alt="Mountaintop"
              />
            </a>
          </div>
          <div class="carousel-item relative float-left w-full">
            <a href="/baby">
              <img
                src="https://ik.imagekit.io/ngamedata/memories/baby/1661878709298_mjyBhjjS1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884293826"
                class="block w-full"
                alt="Mountaintop"
              />
            </a>
          </div>

          {/* <!-- Single item --> */}
          <div class="carousel-item relative float-left w-full">
            <a href="/prewed">
              <img
                src="https://ik.imagekit.io/ngamedata/memories/pre_couple/0F1A8616_AcMErrCV7W.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670699136685"
                class="block w-full"
                alt="Woman Reading a Book"
              />
            </a>
          </div>
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousal;
