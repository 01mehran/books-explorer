type TselectProps = {
  id: string;
  options: { value: string; label: string }[];
  label: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export default function Select({
  id,
  options,
  label,
  value,
  onChange,
}: TselectProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sepia-700 mb-2 block text-sm font-medium"
      >
        {label}
      </label>
      <div className="border-sepia-200 rounded-lg border bg-[#f5f5f5] px-2 transition-all focus-within:ring-2 focus-within:ring-amber-500">
        <select
          id={id}
          className="text-sepia-800 w-full cursor-pointer rounded-lg px-4 py-3 outline-0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
