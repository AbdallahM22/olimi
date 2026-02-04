"use client";
import { forwardRef } from "react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  description?: string;
  // Controller props
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  type?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      name,
      placeholder = "",
      description,
      value = "",
      onChange,
      onBlur,
      error,
      type = "text",
    },
    ref,
  ) => {
    return (
      <Field>
        <FieldLabel className="capitalize" htmlFor={`input-${name}`}>
          {label}
        </FieldLabel>
        <Input
          id={`input-${name}`}
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onBlur={onBlur}
          className={error ? "border-destructive" : ""}
        />
        {description && <FieldDescription>{description}</FieldDescription>}
        {error && (
          <p className="text-sm font-medium text-destructive mt-1">{error}</p>
        )}
      </Field>
    );
  },
);

InputField.displayName = "InputField";
