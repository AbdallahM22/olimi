// components/TestCall.tsx
"use client";

import SectionInfo from "./SectionInfo";
import { InputField } from "@/components/ui/input-field";
import { FieldSelect } from "@/components/ui/field-select";
import { Controller, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { testCallFormData } from "@/lib/agentSchema";

// Options arrays
const genderOptions = ["Male", "Female"];
const testVariableOptions = ["None", "Variable 1", "Variable 2", "Variable 3"];

const TestCall = () => {
  const {
    control,
    getValues,
    trigger,
    formState: { errors, isSubmitting },

    watch,
  } = useFormContext<testCallFormData>();

  const selectedVariables = watch("testCustomerListVariables");

  const submitCall = async () => {
    const isValid = await trigger([
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "gender",
    ]);
    if (isValid) {
      const { firstName, lastName, email, gender } = getValues();
      console.log("test call data", { firstName, lastName, email, gender });
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="lg:flex justify-between gap-12">
        {/* Left Section - Info */}
        <section className="lg:w-[35%] max-lg:mb-3" id="test-call">
          <SectionInfo
            title="Test Call"
            description="Test your settings with a test call to yourself, results
                          will be found in the calling page. Please note that test
                          calls will be deducted from your limit."
          />
        </section>

        {/* Right Section - Form */}
        <section className="flex flex-col gap-4 flex-1">
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div className="col-span-1">
              <Controller
                name="firstName"
                control={control}
                render={({ field, fieldState }) => (
                  <InputField
                    label="First Name"
                    name="firstName"
                    placeholder="Sarah"
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>

            {/* Last Name */}
            <div className="col-span-1">
              <Controller
                name="lastName"
                control={control}
                render={({ field, fieldState }) => (
                  <InputField
                    label="Last Name"
                    name="lastName"
                    placeholder="Mostafa"
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>

            {/* Gender */}
            <div className="col-span-1">
              <Controller
                name="gender"
                control={control}
                render={({ field, fieldState }) => (
                  <FieldSelect
                    label="Gender"
                    placeholder="Select gender"
                    options={genderOptions}
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
            <div className="col-span-1">
              {/* Email */}
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <InputField
                    label="Email"
                    name="email"
                    placeholder="sarahmostafa@example.com"
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    error={fieldState.error?.message}
                    type="email"
                  />
                )}
              />
            </div>
            {/* Phone Number */}
            <div className="col-span-1">
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field, fieldState }) => (
                  <InputField
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="+20 112 454 5437"
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    error={fieldState.error?.message}
                    type="tel"
                    description="Include country code (e.g., +20 for Egypt)"
                  />
                )}
              />
            </div>

            {/* Test Customer List Variables */}
            <div className="col-span-1">
              <Controller
                name="testCustomerListVariables"
                control={control}
                render={({ field, fieldState }) => (
                  <FieldSelect
                    label="Test Customer List Variables"
                    placeholder="Select variables"
                    options={testVariableOptions}
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    error={fieldState.error?.message}
                    description="Optional: Select test variables to include in the call"
                  />
                )}
              />
            </div>
            <div className="col-span-1">
              <Controller
                name="variable1"
                control={control}
                render={({ field, fieldState }) => (
                  <InputField
                    label="$Variable1"
                    name="variable1"
                    placeholder="Variable value"
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>

            {/* Conditional Variable Fields */}
            {/* <div className="col-span-1">
              {selectedVariables && selectedVariables !== "None" && (
                <div className="space-y-4 p-4 border rounded-lg bg-muted/30">
                  <h4 className="font-medium">Test Variables</h4>

                  <Controller
                    name="variable1"
                    control={control}
                    render={({ field, fieldState }) => (
                      <InputField
                        label="$Variable1"
                        name="variable1"
                        placeholder="Variable value"
                        value={field.value || ""}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        ref={field.ref}
                        error={fieldState.error?.message}
                      />
                    )}
                  />
                </div>
              )}
            </div> */}
          </div>
          {/* Submit Button */}
          <div className="">
            <Button
              className="cursor-pointer"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                submitCall();
              }}
            >
              {isSubmitting ? "Making Test Call..." : " Call"}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestCall;
