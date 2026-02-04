"use client";
import { forwardRef } from "react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { Info } from "lucide-react";

interface ProgressWithLabelProps {
  min: number;
  max: number;
  label: string;
  range: [string, string];
  step: number;
  unit?: string;
  // Controller props
  value?: number;
  onChange?: (value: number) => void;
  onBlur?: () => void;
  error?: string;
  description?: string;
}

export const ProgressWithLabel = forwardRef<
  HTMLDivElement,
  ProgressWithLabelProps
>(
  (
    {
      min,
      max,
      label,
      range,
      step,
      unit = "",
      value = min,
      onChange,
      onBlur,
      error,
      description,
    },
    ref,
  ) => {
    const handleValueChange = (newValue: number[]) => {
      onChange?.(newValue[0]);
    };

    const handleBlur = () => {
      if (onBlur) {
        setTimeout(() => onBlur(), 100);
      }
    };

    return (
      <Field className="w-full">
        <FieldLabel htmlFor={`slider-${label}`} className="capitalize">
          <span className="flex items-center gap-1">
            {label}
            <Info size={18} className="text-muted-foreground" />
          </span>
          <span className="ml-auto">
            {value}
            {unit}
          </span>
        </FieldLabel>

        <div ref={ref} onBlur={handleBlur}>
          <Slider
            value={[value]}
            onValueChange={handleValueChange}
            min={min}
            max={max}
            step={step}
            className={error ? "[&_.slider-track]:bg-destructive/20" : ""}
          />
        </div>

        <FieldDescription className="w-full flex justify-between">
          <span>{range[0]}</span>
          <span>{range[1]}</span>
        </FieldDescription>

        {description && <FieldDescription>{description}</FieldDescription>}
        {error && (
          <p className="text-sm font-medium text-destructive mt-1">{error}</p>
        )}
      </Field>
    );
  },
);

ProgressWithLabel.displayName = "ProgressWithLabel";
