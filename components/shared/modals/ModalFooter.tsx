'use client';
import Button from '../buttons/Button';

interface ModalFooterProps {
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  actionLabel: string;
  disabled?: boolean;
  onSubmit: () => void;
  footer?: React.ReactElement;
}

function ModalFooter({
  actionLabel,
  onSubmit,
  disabled,
  footer,
  secondaryAction,
  secondaryActionLabel,
}: ModalFooterProps) {
  return (
    <div className="flex flex-col gap-2 p-6">
      <div
        className="
        flex 
        w-full 
        flex-row 
        items-center 
        gap-4
      "
      >
        {secondaryAction && secondaryActionLabel && (
          <Button disabled={disabled} onClick={() => secondaryAction()} outline>
            {secondaryActionLabel}
          </Button>
        )}
        <Button disabled={disabled} type="submit" onClick={() => onSubmit()}>
          {actionLabel}
        </Button>
      </div>
      {footer}
    </div>
  );
}

export default ModalFooter;
