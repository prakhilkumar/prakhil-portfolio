const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold">{title}</h2>

      {subtitle && (
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;