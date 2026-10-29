t.d(n, { A: () => s, u: () => r });
let l = new Set(["link", "url", "autolink", "mailto", "tel", "attachmentLink", "devLink"]);
function r(e) {
    return `:${e.replace(/^:+|:+$/g, "")}:`;
}
function a(e) {
    return null == e
        ? ""
        : "string" == typeof e
          ? e
          : Array.isArray(e)
            ? e.map(a).join("")
            : "string" == typeof e.content
              ? e.content
              : a(e.content);
}
function i(e) {
    if (l.has(e.type)) {
        let n = a(e.target);
        return { type: "inlineCode", content: n.length > 0 ? n : a(e.content) };
    }
    if ("customEmoji" === e.type) return { type: "text", content: r(String(e.name ?? "")) };
    let n = { ...e };
    return (
        null != e.content && "string" != typeof e.content && (n.content = s(e.content)),
        null != e.items && (n.items = e.items.map((e) => s(e))),
        n
    );
}
function s(e) {
    return Array.isArray(e) ? e.map(i) : i(e);
}
