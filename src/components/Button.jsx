const Button = ({ 
  children, 
  href = "#", 
  primary = true,
  download = false
}) => {
  return (
    <a
      href={href}
      download={download ? true : undefined}
      className={`
        inline-flex items-center justify-center 
        rounded-xl px-6 py-3 
        font-semibold 
        transition-all duration-300
        ${
          primary
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "border border-gray-700 hover:border-blue-500 text-white"
        }
      `}
    >
      {children}
    </a>
  );
};

export default Button;