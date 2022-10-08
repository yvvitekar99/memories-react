import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

function FooterMain() {
  return (
    <div className="flex flex-col items-center mt-[20px]">
      <div className="font-black m-[10px] text-2xl">Connect Me @</div>

      <div className="flex max-w-[700px] m-[20px]">
        <div className="">
          <a
            href="https://www.facebook.com/Patwesanket"
            target="_blank"
            rel="noreferrer"
          >
            <div className="animate-bounce p-[5px] w-[50px] h-[50px]">
              {/* <FacebookIcon sx={{ scale: "180%" }} /> */}
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://ik.imagekit.io/ngamedata/memories/icons/facebook_2YI_BEgph.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665236912638"
                alt="facebbokLink"
              />
            </div>
          </a>
        </div>
        <div className="ml-[15px]">
          <a
            href="https://instagram.com/memories.by.sanket?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <div className="animate-bounce p-[5px] w-[50px] h-[50px]">
              {/* <InstagramIcon sx={{ scale: "180%" }} /> */}
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://ik.imagekit.io/ngamedata/memories/icons/instagram__1__S9x9klTSQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665236912668"
                alt="instagram"
              />
            </div>
          </a>
        </div>
        <div className="ml-[15px]">
          <a
            href="https://api.whatsapp.com/send?phone=919156985861&text=Hi, "
            target="_blank"
            rel="noreferrer"
          >
            <div className="animate-bounce p-[5px] w-[50px] h-[50px]">
              {/* <WhatsAppIcon sx={{ scale: "180%" }} /> */}
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://ik.imagekit.io/ngamedata/memories/icons/whatsapp_EQi48mjB26.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665236912693"
                alt="whatsapp"
              />
            </div>
          </a>
        </div>
        <div className="ml-[15px]">
          <a
            href="mailto: patwe.sanket.photography@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="animate-bounce p-[5px] w-[50px] h-[50px]">
              {/* <EmailIcon sx={{ scale: "180%" }} /> */}
              <img
                src="https://ik.imagekit.io/ngamedata/memories/icons/gmail_Aie-OUiFE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665236912690"
                alt="email"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterMain;
