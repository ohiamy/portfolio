import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';

interface StatBarWithButtonProps {
  icon: LucideIcon;
  label: string;
  value: number;
  max: number;
  color: string;
  buttonText: string;
  onButtonClick: () => void;
  disabled?: boolean;
  showButton?: boolean;
}

export function StatBarWithButton({
  icon: Icon,
  label,
  value,
  max,
  color,
  buttonText,
  onButtonClick,
  disabled = false,
  showButton = true,
}: StatBarWithButtonProps) {
  const percentage = (value / max) * 100;

  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full">
      {/* Icon */}
      <div className="relative shrink-0 size-[16px]">
        <Icon className="w-4 h-4 text-black" strokeWidth={1.33} />
      </div>

      {/* Stat Bar Container */}
      <div className="h-[32px] min-h-px relative shrink-0" style={{ width: 'calc(100% - 16px - 12px - 70px - 12px)' }}>
        <div className="content-stretch flex flex-col gap-[4px] h-[32px] items-start relative w-full">
          {/* Label and Value */}
          <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full">
            <p className="text-[#717182] text-[14px] leading-[20px] tracking-[-0.1504px]">
              {label}
            </p>
            <p className="text-neutral-950 text-[14px] leading-[20px] tracking-[-0.1504px] text-right">
              {value}/{max}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-[#eceef2] h-[8px] relative rounded-[3.35544e+07px] shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <motion.div
                className="h-[8px] rounded-[3.35544e+07px]"
                style={{ backgroundColor: color }}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      {showButton && (
        <Button
          onClick={onButtonClick}
          disabled={disabled}
          className="bg-white relative rounded-[3.35544e+07px] shrink-0 w-[70px] h-auto px-[14px] py-[4px] border-2 border-black hover:bg-gray-50"
          variant="ghost"
        >
          <span className="text-[14px] leading-[20px] tracking-[-0.1504px]">
            {buttonText}
          </span>
        </Button>
      )}
    </div>
  );
}
