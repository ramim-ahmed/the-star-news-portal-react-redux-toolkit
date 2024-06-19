import { CgMenu } from "react-icons/cg";
export default function Nav() {
  return (
    <div className="bg-white">
      <nav className="max-w-6xl mx-auto px-3 py-4">
        <div className="flex items-center space-x-2">
          <CgMenu className="w-6 h-6" />
          <h1 className="font-medium">THE STAR NEWS</h1>
        </div>
        <div></div>
      </nav>
    </div>
  );
}
