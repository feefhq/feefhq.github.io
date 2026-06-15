/**
 * Minimal remark plugin: lets a heading carry an explicit id and extra
 * classes via trailing `{#id .class1 .class2}`, e.g.
 *
 *   ## What drift is, and what it isn't {#what-drift-is}
 *   ## Introduction {#introduction .unnumbered .sr-only}
 *
 * Used so essay ToC anchors and chapter numbering survive the move from
 * hand-written HTML ids to Markdown headings.
 */
const ATTR_RE = /\s*\{#([\w-]+)((?:\s+\.[\w-]+)*)\}\s*$/;

function visit(node, fn) {
  fn(node);
  if (node.children) {
    for (const child of node.children) visit(child, fn);
  }
}

export default function remarkHeadingAttrs() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== "heading") return;
      const last = node.children?.[node.children.length - 1];
      if (!last || last.type !== "text") return;

      const match = last.value.match(ATTR_RE);
      if (!match) return;

      last.value = last.value.slice(0, match.index);

      const [, id, classList] = match;
      const classes = classList.trim().length ? classList.trim().split(/\s+/).map((c) => c.slice(1)) : [];

      node.data ??= {};
      node.data.hProperties ??= {};
      node.data.hProperties.id = id;
      if (classes.length) node.data.hProperties.className = classes;
    });
  };
}
