import React from "react";
import Link from 'next/Link';
import Banner from '@/components/banner';

const Index = () => {
  return (
    <div className="flex flex-col mx-auto min-h-screen items-center">
        <Banner />
        <nav className="container p-5">
          <div className="flex items-center justify-center md:justify-end">
            <div className="flex space-x-6 md:space-x-8">
              <div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
                <a
                  href="https://telluscoop.com"
                  className="font-roboto text-xl font-bold"
                >
                  Home
                </a>
              </div>
              <div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
                <a
                  href="https://community.telluscoop.com"
                  className="font-roboto text-xl font-bold"
                >
                  Community
                </a>
              </div>
              <div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
                <a
                  href="https://docs.telluscoop.com"
                  className="font-roboto text-xl font-bold"
                >
                  Docs
                </a>
              </div>
              <div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
                <a
                  href="https://medium.com/telluscoop"
                  className="font-roboto text-xl font-bold"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
        </nav>
        <section className="my-10">
          <div className="container flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <img
              className="max-w-xs md:max-w-md mb-4 md:mb-0"
              src="/assets/logo-web.png"
              alt=""
            />
            <div
              className="md:hidden border-solid border-black border-t-2 mb-3"
              style={{ width: '7.5rem' }}
            ></div>
            <div
              className="hidden md:block border-solid border-black border-l-4"
              style={{ height: '7.5rem' }}
            ></div>
            <div className="flex flex-col items-center min-h-fit">
              <p className="font-roboto text-4xl font-bold">community</p>
              <p className="font-roboto text-7xl font-bold tracking-tighter">
                VOTE!
              </p>
            </div>
          </div>
        </section>
        <section className="flex-1 flex flex-col items-center bg-landing bg-no-repeat bg-bottom md:bg-custom min-w-full">
          <div className="flex flex-col items-center mb-12 px-2 md:px-0">
            <p className="font-roboto text-base text-center md:text-left md:text-2xl mb-4 md:mb-0">
              You can vote on the community proposals with most votes now!
            </p>
            <p className="font-roboto text-base text-center md:text-left md:hidden">
              Let's shape the future of sustainable and decentralized economies
              together.
            </p>
            <p className="hidden md:block font-roboto md:text-2xl">
              Let's shape the future of sustainable and decentralized
            </p>
            <p className="hidden md:block font-roboto md:text-2xl">
              economies together.
            </p>
          </div>
          <Link href="/proposals" className="mb-14">
            <div className="inline-block relative">
              <span className="absolute inset-0 z-0 bg-black translate-x-1 translate-y-1"></span>
              <button
                type="button"
                className="relative z-10 px-10 py-2 font-roboto text-3xl border-4 border-black transition-all text-telluscoopWhite bg-telluscoopGreen tracking-wide hover:bg-telluscoopRed hover:-rotate-3"
              >
                VOTE!
              </button>
            </div>
          </Link>
        </section>
      </div>
  );
};

export default Index;
