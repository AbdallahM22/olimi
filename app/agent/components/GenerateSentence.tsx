import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { InputField } from "@/components/ui/input-field";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface GeneratedSentenceProps {
  index: number;
  onRemove: () => void;
  remaining: number;
}

const GeneratedSentence = ({
  index,
  onRemove,
  remaining,
}: GeneratedSentenceProps) => {
  const { control, watch } = useFormContext();
  const [isSaved, setIsSaved] = useState(false);
  const sentenceContent = watch(`sentences.${index}.content`);

  return (
    <Card>
      <CardContent>
        <Controller
          name={`sentences.${index}.content`}
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Sentence"
              name={`sentences.${index}.content`}
              placeholder="Enter item description"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              error={fieldState.error?.message}
            />
          )}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          {!isSaved ? (
            <>
              <Button
                variant={"outline"}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Auto Generate{" "}
                <span className="text-black/60">({remaining} Remaining)</span>
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  if (!sentenceContent || sentenceContent.trim() === "") return;
                  setIsSaved(true);
                }}
              >
                Save{" "}
                <span className="text-white/90">({remaining} Remaining)</span>
              </Button>
            </>
          ) : (
            <Button
              variant={"outline"}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Listen
            </Button>
          )}
        </div>
        <Button
          onClick={onRemove}
          variant={"ghost"}
          className="text-red-600 cursor-pointer hover:bg-initial hover:text-initial"
        >
          <Trash2 />
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GeneratedSentence;
