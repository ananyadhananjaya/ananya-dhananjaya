export default function Twitter() {
  return (
    <div className="h-96 w-screen flex justify-center items-center ">
      <div>
        <p className="font-poppins tracking-wide">
          I occasionally tweet about life and tech.
        </p>
        <p className="font-poppins tracking-wide">
          {`Let's connect on `}
          <span>
            <a
              href="https://twitter.com/ui_ananya"
              className="underline underline-offset-4 text-blue-500 hover:text-blue-600 visited:text-indigo-700"
            >
              twitter!
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}
