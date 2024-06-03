interface headerTypes {
  heading: string;
  subtitle: string;
}
const Hearder: React.FC<headerTypes> = ({ heading, subtitle }) => {
  return (
    <div className="overflow-hidden flex justify-center mb-4">
      <div className="py-4 text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold">{heading}</h2>
        <p className="max-w-3xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hearder;
