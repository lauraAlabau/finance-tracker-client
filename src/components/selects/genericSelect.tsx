type GenericSelectProps = {
  options: string[];
  onChange: (value: string) => void;
  value: string;
  onBlur: () => void;
};

export const GenericSelect = ({
  options,
  onChange,
  value,
  onBlur,
}: GenericSelectProps) => {
  return (
    <select
      required
      defaultValue={value}
      className="w-full bg-transparent max-w-40 text-slate-50 focus-visible:ring-0 focus-visible:outline-0 invalid:text-gray-400 "
      onBlur={onBlur}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option: string) => (
        <option value={option} className="bg-[#0b1739] text-slate-50">
          {option}
        </option>
      ))}
    </select>
  );
};
