export default function Projects() {
  return (
    <div className="p-10 flex justify-center flex-col items-center">
      <h4 className="text-xl font-poppins text-slate-900">
        Click and navigate to their source code
      </h4>
      <div className="flex flex-wrap justify-center gap-2 pt-10 font-poppins">
        <div className="h-40 w-60 bg-slate-100 rounded-xl hover:shadow-sm">
          <h2 className="text-lg p-2 font-semibold text-center">
            Kappu Dark Theme
          </h2>
          <p className="p-2">A VS Code Extension to cater your theme. </p>
          <div className="hidden hover:flex">
            <p>This is hidden!</p>
          </div>
        </div>
        <div className="h-40 w-60 bg-slate-100 rounded-xl hover:shadow-sm">
          <h2 className="text-lg p-2 font-semibold text-center">Pomodora</h2>
          <p className="p-2">An App to exercise Pomodoro Time Management.</p>
        </div>
        <div className="h-40 w-60 bg-slate-100 rounded-xl hover:shadow-sm">
          <h2 className="text-lg p-2 font-semibold text-center">Onehit</h2>
          <p className="p-2">One link for all your Links.</p>
        </div>
        <div className="h-40 w-60 bg-slate-100 rounded-xl hover:shadow-sm"></div>
      </div>
    </div>
  )
}
