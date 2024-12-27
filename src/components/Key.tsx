import {HTMLAttributes} from "react"
import {twMerge} from "tailwind-merge"

export default function Key (props: HTMLAttributes<HTMLDivElement>) {
    const {className, children, ...rest} = props;
    return (
        <div className={twMerge("size-14 bg-neutral-300 flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium", className)}{...rest}>
{children}
        </div>
    )
}