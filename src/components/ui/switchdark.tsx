import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  thumbContent?: React.ReactNode
}

function SwitchDark({
  className,
  thumbContent,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        /* MUDANÇAS:
           1. Removi `border` e `border-transparent` (que roubavam 2px).
           2. Mantive `translate-x-7` (28px).
           
           Matemática agora: 
           56px (total) - 24px (bolinha) = 32px livres.
           Movimento de 28px deixa 4px de sobra na direita.
           Exatamente igual aos 4px da esquerda (translate-x-1).
        */
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-8 w-14 shrink-0 items-center rounded-full shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-6 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-1 flex items-center justify-center shadow-md"
        )}
      >
        {thumbContent}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { SwitchDark }