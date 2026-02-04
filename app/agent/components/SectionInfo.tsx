const SectionInfo = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="space-y-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </section>
  );
};

export default SectionInfo;
