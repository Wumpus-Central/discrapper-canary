n.d(t, { A: () => a });
let i = new Set(["link", "url", "autolink", "mailto", "tel", "attachmentLink", "devLink"]);
function l(e) {
    return null == e
        ? ""
        : "string" == typeof e
          ? e
          : Array.isArray(e)
            ? e.map(l).join("")
            : "string" == typeof e.content
              ? e.content
              : l(e.content);
}
function s(e) {
    if (i.has(e.type)) {
        let t = l(e.target);
        return { type: "inlineCode", content: t.length > 0 ? t : l(e.content) };
    }
    if ("customEmoji" === e.type) return { type: "text", content: `:${String(e.name ?? "").replace(/^:+|:+$/g, "")}:` };
    let t = { ...e };
    return (
        null != e.content && "string" != typeof e.content && (t.content = a(e.content)),
        null != e.items && (t.items = e.items.map((e) => a(e))),
        t
    );
}
function a(e) {
    return Array.isArray(e) ? e.map(s) : s(e);
}
