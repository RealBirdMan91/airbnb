type Container = React.HTMLAttributes<HTMLDivElement>;

interface Props extends Container {
  onClick: () => void;
}

function MenuItem({ children, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="hove px-4 py-3 font-semibold transition hover:bg-neutral-300"
    >
      {children}
    </div>
  );
}

export default MenuItem;
