type TotalMonthProps = {
  amount: number;
  text: string;
};

const PrimaryCard = ({ amount, text }: TotalMonthProps) => {
  return (
    <div className="border-2 border-teal-100/15 text-lg bg-teal-400/15 rounded-md py-8 px-16 w-fit shadow-md shadow-black text-white/90 flex flex-col items-center gap-2.5">
      <div className="text-5xl font-semibold"> {amount} €</div>
      <div className="text-base">{text}</div>
    </div>
  );
};

export default PrimaryCard;
