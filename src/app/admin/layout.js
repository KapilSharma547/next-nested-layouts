import KapilHeader from "@/components/KapilCode/KapilHeader";
import KapilFooter from "@/components/KapilCode/KapilFooter";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen mx-auto  px-4 pt-8 pb-16">
      <KapilHeader />
      <div className="flex-grow">
        <main className="my-0 py-16">{children}</main>
      </div>
      <KapilFooter />
    </div>
  );
}
