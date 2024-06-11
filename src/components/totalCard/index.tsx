type TotalMonthProps = {
  amount: number;
  text: string;
};

const TotalCard = ({ amount, text }: TotalMonthProps) => {
  return (
    <div className="border-2 border-teal-100/10 text-lg bg-teal-400/10 rounded-md py-6 px-14 w-fit shadow-md shadow-black text-white/90 flex flex-col items-center gap-2.5">
      <div className="text-4xl font-semibold"> {amount} €</div>
      <div className="text-sm">{text}</div>
    </div>
  );
};

export default TotalCard;
