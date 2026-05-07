import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface StatBarProps {
  icon: LucideIcon;
  label: string;
  value: number;
  max: number;
  color: string;
}

export function StatBar({ icon: Icon, label, value, max, color }: StatBarProps) {
  const percentage = (value / max) * 100;
  
  return (
    <div className="flex items-center gap-3 w-full">
      <Icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-muted-foreground">{label}</span>
          <span className="text-sm">{value}/{max}</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
}
