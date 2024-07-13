import { NavbarProps } from "../navbar";
import FinancesForm from "../financesForm";

const FormModal = ({
  formIsOpen,
  setFormIsOpen,
}: Pick<NavbarProps, "formIsOpen" | "setFormIsOpen">) => {
  return (
    <aside
      className={`fixed top-0 right-0 z-40 w-96 h-screen pt-14 transition-transform border-r border-slate-950 -translate-x-0 bg-red  ${
        !formIsOpen ? "translate-x-full " : " transform-none"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full  pb-4 overflow-y-auto bg-[#081028]">
        <FinancesForm setFormIsOpen={setFormIsOpen} />
      </div>
    </aside>
  );
};

export default FormModal;
