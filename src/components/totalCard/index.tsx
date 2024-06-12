type TotalMonthProps = {
  amount: number;
  text: string;
};

const TotalCard = ({ amount, text }: TotalMonthProps) => {
  return (
    <div className="border-2 border-teal-100/10 text-lg bg-teal-400/10 rounded-md lg:py-6 lg:px-14 py-2 px-4 w-fit shadow-md shadow-black text-white/90 flex flex-col items-center gap-2.5">
      <div className="text-sm font-semibold lg:text-4xl"> {amount} €</div>
      <div className="text-xs text-center lg:text-sm">{text}</div>
    </div>
  );
};

export default TotalCard;
