"use client";
import { forwardRef } from "react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FieldSelectProps {
  label: string;
  placeholder?: string;
  options: string[];
  description?: string;
  // Controller props
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  disabled?: boolean;
}

export const FieldSelect = forwardRef<HTMLButtonElement, FieldSelectProps>(
  (
    {
      label,
      placeholder = "Select",
      options,
      description,
      value = "",
      onChange,
      onBlur,
      error,
      disabled = false,
    },
    ref,
  ) => {
    return (
      <Field className="w-full">
        <FieldLabel className={`capitalize ${disabled ? "text-gray-500" : ""}`}>
          {label}
        </FieldLabel>
        <Select
          value={value}
          onValueChange={onChange}
          onOpenChange={(open) => {
            if (!open && onBlur) {
              onBlur();
            }
          }}
          disabled={disabled ? true : false}
        >
          <SelectTrigger
            ref={ref}
            className={error ? "border-destructive" : ""}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options.map((option) => (
                <SelectItem
                  key={option}
                  value={option.toLowerCase()}
                  className="capitalize"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {description && <FieldDescription>{description}</FieldDescription>}
        {error && (
          <p className="text-sm font-medium text-destructive mt-1">{error}</p>
        )}
      </Field>
    );
  },
);

FieldSelect.displayName = "FieldSelect";
