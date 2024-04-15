import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/modules/components/ui/tooltip';
import { cn } from '@/modules/shared/utils';
import * as Form from '@radix-ui/react-form';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';

export const FormRoot = ({ children }: { children: ReactNode }) => (
  <Form.Root className="w-full max-w-lg m-auto space-y-4">{children}</Form.Root>
);

export const FormField = ({ className, ...props }: Form.FormFieldProps) => (
  <Form.Field className={cn('space-y-2', className)} {...props} />
);

export const FormLabel = ({
  tooltipText,
  label,
  htmlFor
}: {
  tooltipText?: ReactNode;
  label: ReactNode;
  htmlFor?: string;
}) => (
  <div className="flex items-center gap-1">
    {tooltipText && (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={(e) => e.preventDefault()}>
              <QuestionMarkCircledIcon />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )}
    <Form.Label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </Form.Label>
  </div>
);

export const FormLabelText = ({ text }: { text: string }) => <>{text}</>;
export const FormLabelTextRequired = ({ text }: { text: string }) => (
  <>
    <FormLabelText text={text} /> <span className="text-red-500">*</span>
  </>
);
