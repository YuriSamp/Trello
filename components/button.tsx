import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva(
  'border-2 border-[#2A292B] w-36 h-12 cursor-pointer',
  {
    variants: {
      intent: {
        primary: '',
        danger: 'bg-[#B3202C] border-none',
        success: 'bg-DarkModeGreen rounded-lg'
      },
      Width: {
        sm: 'w-4',
        md: 'w-36 h-12',
        full: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary'
    }
  },
);

export interface IButton extends VariantProps<typeof ButtonStyles> {
  Children: string
  onClick?: () => Promise<void>
}

export function Button({ Width, intent, Children, onClick }: IButton) {
  return (
    <button className={ButtonStyles({ Width, intent })} onClick={onClick}>{Children}</button>
  )
}