import GenQuotation from "@/components/shared/GenQuotation";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const QuotationPage = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <GenQuotation />
      </MaxWidthWrapper>
    </section>
  );
};

export default QuotationPage;
