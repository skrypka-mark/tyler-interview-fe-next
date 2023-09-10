import { createElement } from 'react';

export default function Component({ is, ...props }) {
  if (!is) return createElement(() => null);

  return createElement(is, { key: is._uid, ...props });
}
