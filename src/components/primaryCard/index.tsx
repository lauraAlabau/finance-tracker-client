type TotalMonthProps = {
  amount: number;
  text: string;
};

const PrimaryCard = ({ amount, text }: TotalMonthProps) => {
  return (
    <div className="border-2 border-teal-100/15 text-lg bg-teal-400/15 rounded-md lg:py-8 lg:px-16 py-2.5 px-5 w-fit shadow-md shadow-black text-white/90 flex flex-col items-center gap-2.5">
      <div className="lg:text-5xl text-base font-semibold"> {amount} €</div>
      <div className="lg:text-base text-xs text-center">{text}</div>
    </div>
  );
};

export default PrimaryCard;
