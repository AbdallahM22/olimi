import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import GeneratedSentence from "./GenerateSentence";
import SectionInfo from "./SectionInfo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { FieldSelect } from "@/components/ui/field-select";
import { Switch } from "@/components/ui/switch";
import SwitchField from "@/components/ui/switch-field";

const delayOptions = [
  "0.3s",
  "0.4s",
  "0.5s",
  "0.6s",
  "0.7s",
  "0.8s",
  "0.9s",
  "1.0s",
];
const IntroductionSentence = () => {
  const { control, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "sentences",
  });
  console.log("fields", fields);
  const enableDelay = watch("enableDelay");
  return (
    <>
      <div className="lg:flex justify-between gap-12">
        <section className="lg:w-[35%] max-lg:mb-3" id="introduction-sentence">
          <SectionInfo
            title={`Introduction Sentence (${fields.length}/3)`}
            description="Script the first line of the AI Agents call to better
                        direct the conversation and to give a good base for
                        the AI to work with, a randomly selected introduction
                        sentence will be chosen at the beginning of every call."
          />
        </section>
        <section className="flex flex-col gap-4 lg:flex-1">
          {fields.map((field, index) => (
            <GeneratedSentence
              key={field.id}
              index={index}
              onRemove={() => remove(index)}
              remaining={3 - fields.length}
            />
          ))}
          {fields.length < 3 && (
            <Button
              variant="outline"
              className="bg-gray-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                append({ content: "", isGenerated: false });
              }}
            >
              <Plus />
              Add Sentence
            </Button>
          )}
        </section>
      </div>
      <div className="lg:flex justify-between gap-12 mt-5">
        <section className="lg:w-[35%] max-lg:mb-3">
          <SectionInfo
            title="Auto Introduction"
            description="Sets the delay before the AI speaks the introduction
                        sentence at the start of the call. If the user speaks
                        first, the AI responds immediately."
          />
        </section>

        <div className="flex-1">
          <div className="flex justify-end">
            <Controller
              name="enableDelay"
              control={control}
              render={({ field, fieldState }) => (
                <SwitchField
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>
          <Controller
            name="delay"
            control={control}
            render={({ field, fieldState }) => (
              <FieldSelect
                label="Delay (Seconds)"
                placeholder="Select"
                options={delayOptions}
                value={field.value || ""}
                onChange={field.onChange}
                onBlur={field.onBlur}
                ref={field.ref}
                error={fieldState.error?.message}
                disabled={!enableDelay}
              />
            )}
          />
        </div>
      </div>
    </>
  );
};

export default IntroductionSentence;
