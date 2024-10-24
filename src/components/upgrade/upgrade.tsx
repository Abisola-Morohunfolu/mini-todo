import Trophy from "../../assets/trophy.svg";
import { lightEffectClass } from "../../utils/helpers";

const Upgrade = () => {
  return (
    <div
      className={`bg-[var(--color-yellow)] flex items-center py-6 px-8 border-2 border-[var(--border-green)] relative min-h-[115px] ${lightEffectClass} before:rounded after:rounded`}
    >
      <img src={Trophy} alt="" />
      <span className="ml-6 text-[var(--color-dark-blue)] font-bold text-lg text-shadow-white">
        Go Pro Upgrade Now
      </span>
      <div className="bg-[var(--color-dark-blue)] absolute z-10 -top-1 right-8 h-[71px] w-[71px] text-[var(--color-yellow)] flex items-center justify-center">
        <span className="text-lg font-medium">$1</span>
      </div>
    </div>
  );
};

export default Upgrade;
