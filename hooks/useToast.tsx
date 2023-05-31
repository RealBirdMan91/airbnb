import { ToastOptions, toast } from 'react-toastify';

interface ToastParams extends ToastOptions {
  title: string;
  description?: string;
  status: 'info' | 'warning' | 'success' | 'error';
}

const ToastMessage = ({
  title,
  description,
}: {
  title: ToastParams['title'];
  description: ToastParams['description'];
}) => (
  <>
    <h4 className="font-semibold text-slate-700">{title}</h4>
    {description && (
      <span className="text-sm text-slate-500">{description}</span>
    )}
  </>
);

export const useToast =
  () =>
  ({ title, description, status, ...props }: ToastParams) => {
    return toast[status](
      <ToastMessage title={title} description={description} />,
      {
        ...props,
      }
    );
  };
