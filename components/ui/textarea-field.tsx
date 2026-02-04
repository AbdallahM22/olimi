"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "./textarea";

interface TextareaFieldProps extends React.ComponentProps<"textarea"> {
  label?: string;
  description?: string;
  required?: boolean;
  error?: string;
  rows?: number;
}

export function TextareaField({
  label,
  description,
  required = false,
  error,
  className,
  id,
  ...props
}: TextareaFieldProps) {
  const generatedId = React.useId();
  const textareaId = id || generatedId;
  const descriptionId = `${textareaId}-description`;
  const errorId = `${textareaId}-error`;

  return (
    <Field>
      {label && (
        <FieldLabel htmlFor={textareaId}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </FieldLabel>
      )}
      <Textarea
        id={textareaId}
        rows={props.rows || 4}
        className={cn(
          error && "border-destructive focus-visible:ring-destructive/20",
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={
          error ? errorId : description ? descriptionId : undefined
        }
        required={required}
        {...props}
      />
      {error ? (
        <p id={errorId} className="text-sm text-destructive">
          {error}
        </p>
      ) : description ? (
        <FieldDescription id={descriptionId}>{description}</FieldDescription>
      ) : null}
    </Field>
  );
}
