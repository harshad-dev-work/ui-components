export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  return (
    <div className="p-2">
      {/* Example item */}
      <div className="flex items-center gap-2 p-2 hover:bg-amber-300 rounded">
        <span>🏠</span>

        {/* 👇 hide text when collapsed */}
        {!collapsed && <span>Dashboard</span>}
      </div>
    </div>
  );
}
