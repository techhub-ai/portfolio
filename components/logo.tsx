import Image from 'next/image'
import { cn } from '../lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <span className={cn('flex items-center gap-2', className)}>
            <Image
                src="/portfolio-logo.svg"
                alt="Logo"  
                width={80}
                height={40}
                className="h-10 w-auto hidden dark:block"
            />
            <Image
                src="/portfolio-logo-dark.svg"
                alt="Logo"
                width={80}
                height={40}
                className="h-10 w-auto dark:hidden"
            />
        </span>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/my-logo.webp"
            alt="Logo"
            width={24}
            height={24}
            className={cn('size-10', className)}
        />
    )
}
