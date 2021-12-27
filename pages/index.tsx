import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Home: NextPage = () => {
  const router = useRouter();
  const emailParam = (router.query.email as string) || '';

  const [email, setEmail] = useState(emailParam);

  useEffect(() => {
    setEmail(emailParam);
  }, [emailParam]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const method = "POST";
    const body = JSON.stringify({ email });
    const resp = await fetch('/api/waitlist', { method, body });
    const data = await resp.json();

    data.status === "success"
      ? toast.success("You're on the waitlist!", { duration: 4000 })
      : toast.error("Something went wrong");
  }

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Sunday - React-first boilerplates for impatient</title>
        <meta name="description" content="Skip the boring parts and jumpstart your next super project in few seconds with npm and yarn." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav>
        <div className="flex items-center justify-between max-w-screen-lg px-4 py-5 mx-auto border-b lg:px-0 border-opacity-10 border-primary">
          <div className="flex items-center text-lg font-bold">
            <div className="inline-block mr-1 text-2xl">☀️</div> Sunday
          </div>
          <div>
            <a href="https://github.com/createsunday" title="Sunday on GitHub" className="text-primary hover:text-blue-500">
              <svg className="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <header>
        <div className="flex items-center justify-center max-w-screen-lg px-4 py-16 mx-auto md:px-0">
          <div className="prose text-center max-w-[72ch]">
            {/* <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              Currently under development
            </span> */}
            <h1 className="!mb-4 !mt-2 text-5xl">
              Boilerplate for the impatient
            </h1>

            <h2 className="!mt-4 !mb-8 opacity-60  mx-auto">
              Sunday is a react-first open source and premium boilerplates{" "}
              <br className="hidden md:block" />
              for makers who want to turn ideas into reality faster.
            </h2>

            <form onSubmit={onSubmit} className="flex flex-col gap-2 mx-auto md:w-1/2">
              <input
                type="email"
                placeholder="Email"
                defaultValue={email}
                required
                onChange={e => setEmail(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm text-dark focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

              <button type="submit" disabled={email.length === 0} className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get notified when ready
              </button>
            </form>

            {/* <button type="button" onClick={onClickCTA} className=" select-all inline-flex items-center justify-center flex-none w-full py-3 space-x-2 font-mono leading-6 text-gray-400 transition-all delay-[5] duration-200 bg-white border-2 rounded-lg border-primary sm:w-auto hover:text-primary sm:px-6 sm:space-x-4 focus:outline-none">
              <span className="text-primary">
                <span className="hidden text-gray-600 sm:inline" aria-hidden="true">{"$ "}</span>
                npm init sunday-app
                <span className="hidden text-gray-500 sm:inline" aria-hidden="true">{" appname"}</span>
              </span>
            </button> */}
          </div>
        </div>
      </header>

      {/* <section className="flex items-start">
        <div className="container flex items-start justify-start h-full max-w-screen-md mx-auto">
          <div className="prose">
            <h1>Stack</h1>
          </div>
        </div>
      </section> */}

    </div>
  )
}

export default Home
