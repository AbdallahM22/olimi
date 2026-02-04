import { TextareaField } from "@/components/ui/textarea-field";
import SectionInfo from "./SectionInfo";
import { Controller, useFormContext } from "react-hook-form";

const CallScript = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="lg:flex justify-between gap-12">
      <section className="lg:w-[35%] max-lg:mb-3" id="call-objectives">
        <SectionInfo
          title="Call Script"
          description="What would you like the AI Agent to do when they
                        make the call? For example; scheduling a call with an
                        expert, prompt a certain product or service to an
                        existing customer, brand awareness etc."
        />
      </section>
      <div className="lg:flex-1">
        <Controller
          name="callScript"
          control={control}
          rules={{
            required: "Call Script is required",
            minLength: {
              value: 10,
              message: "Call Script must be at least 10 characters",
            },
          }}
          render={({ field }) => (
            <TextareaField
              {...field}
              label="Call Script"
              placeholder="Full Script including FAQs"
              rows={6}
              // error={errors.callScript?.message}
            />
          )}
        />
      </div>
    </div>
  );
};

export default CallScript;
