import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import React from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const mobileNavRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleMenuOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      const tl = gsap.timeline();
      tl.to(mobileNavRef.current, {
        duration: 0.5,
        top: "-100%",
        ease: "power3.out",
      });
      return;
    } else {
      setIsOpen(true);
      const tl = gsap.timeline();
      tl.to(mobileNavRef.current, {
        duration: 0.5,
        top: 0,
        ease: "power3.out",
      });
      return;
    }
  };

  // MEMO if isOpen, disable scroll
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleRoute = React.useCallback(
    (href: string) => {
      return () => router.push(href).then(toggleMenuOpen);
    },
    [router],
  );

  const openNewWindow = () => {
    toggleMenuOpen();
    window.open("https://festa.io/events/3435", "_blank");
  };

  return (
    <div className='w-screen'>
      <nav className='border-[rgba(0, 0, 0, 0.2)] fixed top-0 z-30 flex h-20 w-screen items-center border-b px-20 backdrop-blur-md max-sm:h-16 max-sm:px-4'>
        <a href={"/"}>
          <h1 className='cursor-pointer text-2xl font-bold max-sm:text-xl'>GopherCon Korea 2023</h1>
        </a>
        <div className='ml-auto flex h-full items-center gap-6 max-sm:hidden'>
          <a className='cursor-pointer font-semibold' onClick={handleRoute("/program")}>
            프로그램
          </a>
          <a className='cursor-pointer font-semibold' onClick={handleRoute("/sponsors")}>
            스폰서
          </a>
          <a className='cursor-pointer font-semibold' onClick={handleRoute("/coc")}>
            행동강령
          </a>
          <a className='cursor-pointer font-semibold' onClick={handleRoute("/scolarship-support")}>
            장학지원
          </a>
          <a className='cursor-pointer font-semibold' onClick={handleRoute("/inquiries")}>
            행사문의
          </a>
          <button className='ticketGradient rounded-xl font-bold text-white' onClick={openNewWindow}>
            Register
          </button>
        </div>
        {isOpen ? (
          <XMarkIcon className='absolute right-4 h-10 w-10 sm:hidden' onClick={toggleMenuOpen} />
        ) : (
          <Bars3Icon className='absolute right-4 h-10 w-10 sm:hidden' onClick={toggleMenuOpen} />
        )}
      </nav>
      {isOpen && <div className={`fixed top-0 z-10 h-screen w-full bg-overlay50`} onClick={toggleMenuOpen} />}
      <div
        ref={mobileNavRef}
        className={`fixed -top-full z-20 flex h-1/2 w-screen flex-col justify-around bg-white px-4 pt-20`}
      >
        <a className='cursor-pointer font-semibold' onClick={handleRoute("/program")}>
          프로그램
        </a>
        <a className='cursor-pointer font-semibold' onClick={handleRoute("/sponsors")}>
          스폰서
        </a>
        <a className='cursor-pointer font-semibold' onClick={handleRoute("/coc")}>
          행동강령
        </a>
        <a className='cursor-pointer font-semibold' onClick={handleRoute("/scolarship-support")}>
          장학지원
        </a>
        <a className='cursor-pointer font-semibold' onClick={handleRoute("/inquiries")}>
          행사문의
        </a>
        <button className='ticketGradient rounded-xl font-bold text-white' onClick={openNewWindow}>
          Register
        </button>
      </div>
    </div>
  );
}
