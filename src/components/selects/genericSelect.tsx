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
      className="w-full p-2.5 mt-1 mb-4 bg-transparent border border-teal-100 rounded-md text-slate-50
    invalid:text-gray-400 "
      onBlur={onBlur}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option: string) => (
        <option value={option} className="bg-slate-900 text-slate-50">
          {option}
        </option>
      ))}
    </select>
  );
};
