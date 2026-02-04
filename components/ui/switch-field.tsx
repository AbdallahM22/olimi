// components/ui/switch-field.tsx
"use client";

import { forwardRef } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface SwitchFieldProps {
  label?: string;
  description?: string;
  error?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onBlur?: () => void;
  disabled?: boolean;
  size?: "sm" | "default";
  className?: string;
  labelClassName?: string;
  required?: boolean;
}

const SwitchField = forwardRef<HTMLButtonElement, SwitchFieldProps>(
  (
    {
      label,
      description,
      error,
      checked = false,
      onCheckedChange,
      onBlur,
      disabled = false,
      size = "default",
      className,
      labelClassName,
      required = false,
    },
    ref,
  ) => {
    return (
      <div className={cn("space-y-3", className)}>
        <div className="flex items-center gap-3">
          <Switch
            ref={ref}
            checked={checked}
            onCheckedChange={onCheckedChange}
            onBlur={onBlur}
            disabled={disabled}
            size={size}
            className={error ? "data-[state=checked]:bg-destructive" : ""}
          />

          {label && (
            <div className="space-y-1">
              <Label
                htmlFor={label}
                className={cn(
                  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
                  labelClassName,
                  error && "text-destructive",
                )}
                onClick={() => onCheckedChange?.(!checked)}
              >
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </Label>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          )}
        </div>

        {error && (
          <p className="text-sm font-medium text-destructive">{error}</p>
        )}
      </div>
    );
  },
);

SwitchField.displayName = "SwitchField";

export default SwitchField;
