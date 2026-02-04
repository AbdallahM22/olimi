import { TextareaField } from "@/components/ui/textarea-field";
import SectionInfo from "./SectionInfo";
import { Controller, useFormContext } from "react-hook-form";

const ProductDescription = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="lg:flex justify-between gap-12">
      <section className="lg:w-[35%] max-lg:mb-3" id="description">
        <SectionInfo
          title="Service/Product Description"
          description="Add information about the products or services that
                      you offer, to best assist the AI agent to be able to
                      answer questions about the try to be as descriptive
                      as possible. "
        />
      </section>
      <div className="lg:flex-1">
        <Controller
          name="productDescription"
          control={control}
          rules={{
            required: "Product description is required",
            minLength: {
              value: 10,
              message: "Product description must be at least 10 characters",
            },
          }}
          render={({ field }) => (
            <TextareaField
              {...field}
              label="Product Description"
              placeholder="Knowledge base"
              rows={6}
              // error={errors.productDescription?.message}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ProductDescription;
