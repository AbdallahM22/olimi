import SectionInfo from "./SectionInfo";
import { InputField } from "@/components/ui/input-field";
import { FieldSelect } from "@/components/ui/field-select";
import { ProgressWithLabel } from "@/components/ui/progress-with-label";
import { Controller, useFormContext } from "react-hook-form";
import { basicSettingsFormData } from "@/lib/agentSchema";

// Options arrays
const languageOptions = ["English", "Spanish", "French", "German", "Arabic"];
const voiceOptions = ["Voice1", "Voice2", "Voice3", "Voice4"];
const promptOptions = ["Sales", "Support", "Collections", "Custom"];
const modelOptions = ["GPT-3.5", "GPT-4", "Claude-3", "Gemini"];

const BasicSettings = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<basicSettingsFormData>();

  return (
    <div className="lg:flex justify-between gap-12">
      <section className="lg:w-[35%] max-lg:mb-3" id="basic-settings">
        <SectionInfo
          title="Basic Settings"
          description="Add some information about your agent to get started."
        />
      </section>

      {/* Form inputs */}
      <section className="flex flex-col gap-4 lg:flex-1">
        {/* Call Type */}
        <Controller
          name="callType"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Call Type"
              name="callType"
              placeholder="Outbound (Make Calls)"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              error={fieldState.error?.message}
            />
          )}
        />

        {/* Agent Name */}
        <Controller
          name="agentName"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Agent Name"
              name="agentName"
              placeholder="Real Estate"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              error={fieldState.error?.message}
            />
          )}
        />

        {/* Description */}
        <Controller
          name="description"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Description"
              name="description"
              placeholder="Describe the call"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              error={fieldState.error?.message}
            />
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          {/* Language */}
          <div className="col-span-1">
            <Controller
              name="language"
              control={control}
              render={({ field, fieldState }) => (
                <FieldSelect
                  label="Language"
                  placeholder="Select"
                  options={languageOptions}
                  value={field.value || ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* Voice */}
          <div className="col-span-1">
            <Controller
              name="voice"
              control={control}
              render={({ field, fieldState }) => (
                <FieldSelect
                  label="Voice"
                  placeholder="Select"
                  options={voiceOptions}
                  value={field.value || ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* Prompt */}
          <div className="col-span-1">
            <Controller
              name="prompt"
              control={control}
              render={({ field, fieldState }) => (
                <FieldSelect
                  label="Prompt"
                  placeholder="Select"
                  options={promptOptions}
                  value={field.value || ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* Model */}
          <div className="col-span-1">
            <Controller
              name="model"
              control={control}
              render={({ field, fieldState }) => (
                <FieldSelect
                  label="Model"
                  placeholder="Select"
                  options={modelOptions}
                  value={field.value || ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* Latency */}
          <div className="col-span-1">
            <Controller
              name="latency"
              control={control}
              render={({ field, fieldState }) => {
                // Convert string "0.6s" to number 0.6
                const numericValue = field.value
                  ? parseFloat(field.value.replace("s", ""))
                  : 0.3;

                const handleChange = (value: number) => {
                  // Convert number back to string "0.6s"
                  field.onChange(`${value}s`);
                };

                return (
                  <ProgressWithLabel
                    label="Latency"
                    min={0.3}
                    max={1}
                    step={0.1}
                    range={["0.3s", "1s"]}
                    unit="s"
                    value={numericValue}
                    onChange={handleChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    error={fieldState.error?.message}
                  />
                );
              }}
            />
          </div>

          {/* Speed */}
          <div className="col-span-1">
            <Controller
              name="speed"
              control={control}
              render={({ field, fieldState }) => {
                // Convert string "90%" to number 90
                const numericValue = field.value
                  ? parseInt(field.value.replace("%", ""))
                  : 90;

                const handleChange = (value: number) => {
                  // Convert number back to string "90%"
                  field.onChange(`${value}%`);
                };

                return (
                  <ProgressWithLabel
                    label="Speed"
                    min={90}
                    max={130}
                    step={5}
                    range={["90%", "130%"]}
                    unit="%"
                    value={numericValue}
                    onChange={handleChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    error={fieldState.error?.message}
                  />
                );
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasicSettings;
