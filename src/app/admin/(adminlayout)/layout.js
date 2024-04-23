import DashboardNavLink from "@/components/DashboardNavLink";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-8">
      <aside className="flex-[2]">
        <nav>
          <ul className="grid gap-3">
            <li>
              <DashboardNavLink href="/admin/dashboard">
                Dashboard Admin
              </DashboardNavLink>
            </li>
            <li>
              <DashboardNavLink href="/admin/surveyorslist">
                Surveyors
              </DashboardNavLink>
            </li>
            <li>
              <DashboardNavLink href="/admin/analytics">
                Analytics
              </DashboardNavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bg-gray-100 flex-[8] p-4 rounded min-h-[300px]">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
