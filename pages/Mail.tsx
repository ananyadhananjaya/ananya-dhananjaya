const Mail = () => {
  return (
    <div className="h-96 flex justify-center items-center flex-col font-poppins tracking-wide">
      <p>
        Feel free to drop an Email. However, please expect a delay in my
        response.
      </p>
      <p>
        Click to copy{' '}
        <span
          className=" text-slate-800 hover:text-slate-900 hover:underline hover:cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText('ananya.dhananjaya@gmail.com')
          }}
        >
          ananya.dhananjaya1998@gmail.com
        </span>
      </p>
    </div>
  )
}

export default Mail
