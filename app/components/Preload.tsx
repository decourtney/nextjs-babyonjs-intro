import Link from "next/link";

/**
 * Preload Script for given Route without rendering (only works in Next.js production)
 * @param {String} to - pathname of the route to preload scripts for
 * @param {Object} [props] - other next Link options
 */
export default function Preload({
  to,
  ...props
}: {
  to: string;
  [key: string]: any;
}) {
  // Next Link expects a native element with ref, and it has to render as HTML element to trigger preload
  return (
    <Link href={to} {...props}>
      <i className="absolute w-0 h-0" />
    </Link>
  );
}
