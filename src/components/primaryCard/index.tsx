type TotalMonthProps = {
  amount: number;
  text: string;
};

const PrimaryCard = ({ amount, text }: TotalMonthProps) => {
  return (
    <div className="flex items-center justify-around rounded-lg bg-[#0B1739] shadow-md shadow-slate-950 lg:py-8 py-4 px-2 border-t-8 border-cyan-400">
      <div className="flex lg:items-start items-center flex-col gap-2.5 text-lg text-white/90 ">
        <p className="text-xs text-center lg:text-base text-white/60">{text}</p>
        <p className="text-base font-semibold lg:text-5xl">
          {amount} <span className="flex-auto lg:hidden">€</span>
        </p>
      </div>
      <div className="hidden w-12 h-12 py-2 translate-x-3 -translate-y-1 border-2 rounded-full border-fuchsia-500 lg:block">
        <div className="w-14 h-14 -translate-x-4 -translate-y-1 border-4 border-[#0B1739] rounded-full bg-cyan-500 flex items-center justify-center">
          <p className="font-semibold text-3xl text-[#0B1739] -translate-x-0.5 ">
            €
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;
