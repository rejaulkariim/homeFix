interface headerTypes {
  heading: string;
  subtitle: string;
}
const Hearder = ({ heading, subtitle }: headerTypes) => {
  return (
    <section className="flex justify-center">
      <div className="py-4">
        <h2 className="text-4xl font-bold uppercase">{heading}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default Hearder;
