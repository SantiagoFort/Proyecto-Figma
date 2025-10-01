import React from "react";
import { FormContact } from "./FormContact";
import divider from "./divider.svg";
import socialIcons from "./social-icons.svg";

export const Formulario = () => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[2975px] flex flex-col">
      <div className="max-h-[164px] flex justify-between flex-1 bg-white">
        <div className="flex items-center justify-center mt-[67px] w-[129px] h-[30px] ml-20 font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
          Santiago Fort
        </div>

        <div className="inline-flex mt-14 w-[89px] h-[52px] relative mr-20 items-center justify-end gap-[var(--variable-collection-spacing-m)]">
          <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3.5 relative flex-[0_0_auto] bg-black rounded-lg shadow-button-shadow">
            <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] whitespace-nowrap [font-style:var(--small-text-font-style)]">
              Inicio
            </div>
          </button>
        </div>
      </div>

      <FormContact
        buttonGroupButtonLabel="Enviar"
        className="!h-[530px] !mt-[70px] !min-w-[unset] !ml-[87px] !flex !left-[unset] !w-[920px] !top-[unset]"
        inputFieldLabel="Nombre"
        inputFieldLabel1="Apellido"
        inputFieldValue="Escribe tu nombre"
        inputFieldValue1="Escribe tu apellido"
        inputFieldValue2="Escribe tu Email"
        textareaFieldDrag="drag-2.svg"
        textareaFieldLabel="Mesaje"
        textareaFieldValue="Escribenos tu mensaje"
      />
      <div className="-ml-px mr-px max-h-[264px] relative mt-[2575px] overflow-hidden flex-1 bg-white">
        <div className="flex flex-col w-[187px] items-end justify-center gap-[var(--variable-collection-spacing-s)] absolute top-12 right-[517px]">
          <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Topic
          </div>

          <div className="relative flex items-center justify-center self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Page
          </div>

          <div className="relative flex items-center justify-center self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Page
          </div>

          <div className="relative flex items-center justify-center self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Page
          </div>
        </div>

        <div className="flex flex-col w-[187px] items-end justify-center gap-[var(--variable-collection-spacing-s)] absolute top-12 right-[298px]">
          <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Topic
          </div>

          <div className="relative flex items-center justify-center self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Page
          </div>

          <div className="relative flex items-center justify-center self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Page
          </div>

          <div className="relative flex items-center justify-center self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Page
          </div>
        </div>

        <div className="flex flex-col w-[187px] items-end justify-center gap-[var(--variable-collection-spacing-s)] absolute top-12 right-20">
          <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Topic
          </div>

          <div className="relative flex items-center justify-center self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Page
          </div>

          <div className="relative flex items-center justify-center self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Page
          </div>

          <div className="relative flex items-center justify-center self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Page
          </div>
        </div>

        <div className="absolute top-[52px] left-20 h-9 flex items-center justify-center font-subheading font-[number:var(--subheading-font-weight)] text-black text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] whitespace-nowrap [font-style:var(--subheading-font-style)]">
          Site name
        </div>

        <img
          className="absolute top-[-3791px] left-[2322px] w-[184px] h-10"
          alt="Social icons"
          src={socialIcons}
        />

        <img
          className="absolute top-[-3966px] left-[2322px] w-[1280px] h-px object-cover"
          alt="Divider"
          src={divider}
        />
      </div>
    </div>
  );
};