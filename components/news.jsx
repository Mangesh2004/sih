
export default function News() {
  return (
    <div className="text-black bg-gray-100">
      <div className="collapse bg-base-200 ">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl bg-slate-400 font-medium">Click to open this one and close others</div>
        <div className="collapse-content bg-slate-400">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl bg-slate-400 font-medium">Click to open this one and close others</div>
        <div className="collapse-content bg-slate-400">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl bg-slate-400 font-medium">Click to open this one and close others</div>
        <div className="collapse-content bg-slate-400">
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}
