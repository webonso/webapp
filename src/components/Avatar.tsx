import { twMerge } from "tailwind-merge"
import { HTMLAttributes } from 'react';

export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...rest } = props;
    return <div className={twMerge('size-20 rounded-full overflow-hidden border-4 border-blue-500 bg-neutral-900 p-1', className)} {...rest}>
        {children}
    </div>;
};
