t.d(n, { A: () => u, u: () => r });
let l = new Set(["link", "url", "autolink", "mailto", "tel", "attachmentLink", "devLink"]);
function r(e) {
    return `:${e.replace(/^:+|:+$/g, "")}:`;
}
function i(e) {
    return null == e
        ? ""
        : "string" == typeof e
          ? e
          : Array.isArray(e)
            ? e.map(i).join("")
            : "string" == typeof e.content
              ? e.content
              : i(e.content);
}
function a(e) {
    if (l.has(e.type)) {
        let n = i(e.target);
        return { type: "inlineCode", content: n.length > 0 ? n : i(e.content) };
    }
    if ("customEmoji" === e.type) return { type: "text", content: r(String(e.name ?? "")) };
    let n = { ...e };
    return (
        null != e.content && "string" != typeof e.content && (n.content = u(e.content)),
        null != e.items && (n.items = e.items.map((e) => u(e))),
        n
    );
}
function u(e) {
    return Array.isArray(e) ? e.map(a) : a(e);
}
