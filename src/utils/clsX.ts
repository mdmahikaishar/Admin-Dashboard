/**
 * clsX
 * ---------------
 */
export default function clsX(...classNames: Array<string>) {
  return classNames.join(" ").replace(/\s\s/g, " ").trim();
}
