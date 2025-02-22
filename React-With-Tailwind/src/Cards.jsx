function Cards({ key , CardData } = "Unknown products") {
  console.log("PROPS", CardData);

  return (
    <>
        <div className=" w-[32%]  h-[184px] mx-2 my-2">
        <ul className='list-none'>

      <li className="text-sm leading-6">
        <figure className="relative flex flex-col-reverse h-[180px] bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
          <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
            <p>
              {CardData.description}
            </p>
          </blockquote>
          <figcaption className="flex items-center space-x-4">
            <img
              src={CardData.img}
              alt="" 
              className="flex-none w-14 h-14 rounded-full object-cover rotate-90	"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-auto">
              <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                <a
                  href="https://twitter.com/frontendben/status/1468687028036452363"
                  tabIndex="0"
                >
                  <span className="absolute inset-0"></span>{CardData.name}
                </a>
              </div>
              <div className="mt-0.5 text-slate-900">{CardData.role}</div>
            </div>
          </figcaption>
        </figure>

      </li>
      </ul>
      </div>

      
    </>
  );
}

export default Cards;
