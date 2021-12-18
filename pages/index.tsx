import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-secondary">
      <Head>
        <title>Createsuper - Nextjs-based starter kits</title>
        <meta name="description" content="Skip the boring parts and jumpstart your next super project in few seconds with npm and yarn." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav>
        <div className="container flex items-center justify-between max-w-screen-md px-4 py-5 mx-auto border-b border-opacity-10 border-primary">
          <div>
            Createsuper
          </div>
          <div>
            <a href="https://github.com/createsuper" title="GitHub.com/createsuper" className="text-primary hover:text-blue-500">
              <svg className="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <header>
        <div className="container flex items-center justify-center w-full max-w-screen-md px-4 py-16 mx-auto">
          <div className="prose text-center">
            <h1>Jumpstart your next super app in seconds 🚀</h1>

            <h3 className="!mb-8 opacity-60">
              Createsuper is a nextjs-based open source boilerplate <br className="hidden md:block" /> for developers who want to turn ideas into reality faster.
            </h3>

            <button type="button" className="inline-flex items-center justify-center flex-none w-full py-3 space-x-2 font-mono leading-6 text-gray-400 transition-all delay-[5] duration-200 bg-white border-2 rounded-lg border-primary sm:w-auto hover:text-primary hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-y-0 active:translate-x-0 sm:px-6 sm:space-x-4 focus:outline-none">
              <span className="text-primary">
                <span className="hidden text-gray-600 sm:inline" aria-hidden="true">{"$ "}</span>
                npm create-super-app
                <span className="hidden text-gray-600 sm:inline" aria-hidden="true">{" name"}</span>
              </span>
              <span className="sr-only">(click to copy to clipboard)</span>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8"></path>
              </svg>
            </button>
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
