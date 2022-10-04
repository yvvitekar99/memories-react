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
            <div className="animate-bounce p-[5px]">
              <FacebookIcon sx={{ scale: "180%" }} />
            </div>
          </a>
        </div>
        <div className="ml-[15px]">
          <a
            href="https://instagram.com/memories.by.sanket?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <div className="animate-bounce p-[5px]">
              <InstagramIcon sx={{ scale: "180%" }} />
            </div>
          </a>
        </div>
        <div className="ml-[15px]">
          <a
            href="https://api.whatsapp.com/send?phone=919156985861&text=Hi, "
            target="_blank"
            rel="noreferrer"
          >
            <div className="animate-bounce p-[5px]">
              <WhatsAppIcon sx={{ scale: "180%" }} />
            </div>
          </a>
        </div>
        <div className="ml-[15px]">
          <a
            href="mailto: patwe.sanket.photography@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="animate-bounce p-[5px]">
              <EmailIcon sx={{ scale: "180%" }} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterMain;
