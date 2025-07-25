import Navbar from "@/components/ui/Navbar";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full'>
        {children}
      </div>
    </>
  );
};

export default PagesLayout;
