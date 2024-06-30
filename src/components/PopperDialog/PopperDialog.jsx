import { useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';

export default function PopperDialog({
  children,
  referenceElem,
  onBlur,
  style,
  position = 'top',
  centered,
}) {
  const referencePopper = useRef(null);
  const { attributes } = usePopper(referencePopper.current, referenceElem, {
    placement: 'bottom',
  });

  const popperStyles = {
    left: centered ? '50%' : '0',
    [position]: '100%',
    ...style,
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        referenceElem &&
        referencePopper.current &&
        !referencePopper.current.contains(event.target) &&
        !referenceElem.contains(event.target)
      ) {
        if (onBlur) onBlur();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onBlur, referenceElem]);

  return (
    <div
      ref={referencePopper}
      style={popperStyles}
      {...attributes.popper}
      className="popper"
    >
      {children}
    </div>
  );
}
