import CreateQootationMobile from "./_components/CreateQootationMobile";
import CrecateQuote from "./_components/CrecateQuote";
import DashboardWrapper from "./_components/DashboardWrapper";

const DashboardPage = () => {
  return (
    <section className="section-padding">
      <DashboardWrapper>
        <h1 className="h1-bold">Welcome back Admin</h1>

        <div className="my-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">Create a new quotation</h1>

          <div>
            <div className="hidden md:block">
              <CrecateQuote />
            </div>

            <div className="block md:hidden">
              <CreateQootationMobile />
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </section>
  );
};

export default DashboardPage;
