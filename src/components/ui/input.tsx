import * as React from 'react';

import { cn } from '../../lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
