(n.d(t, { Sd: () => c, p0: () => d, tA: () => h }), n(321073), n(134528), n(947204));
var l = n(917310),
    i = n(152959),
    r = n(820066);
let s = new Set(["line", "blockQuote"]),
    a = { bold: "strong", italic: "em", underline: "u", strikethrough: "s", spoiler: "spoiler" },
    o = new WeakMap(),
    u = { blocks: [], codeBlocks: [] };
function c(e) {
    return null != e.nativeMarkdownSyntax && (0, i.YK)() ? e.nativeMarkdownSyntax : null;
}
function d(e) {
    let t = e.nativeMarkdownSyntax;
    if (null == t) return null;
    if (!(0, i.YK)()) return u;
    let n = o.get(e);
    if (null != n && n.children === e.children && n.syntax === t) return n.document;
    let c = (function (e) {
            let t = [[]];
            for (let n = 0; n < e.length; n++) {
                let l = e[n];
                r.AS.isInTypes(l, s)
                    ? t[t.length - 1].push({
                          index: n,
                          prefix: "blockQuote" === l.type ? "> " : "",
                          serializedChildren: r.cv.serializeMarkdownChildren(l),
                      })
                    : t[t.length - 1].length > 0 && t.push([]);
            }
            return t.filter((e) => e.length > 0);
        })(e.children),
        d = e.children
            .map((e) => {
                var t;
                return r.AS.isInTypes(e, s)
                    ? `\u0001${("blockQuote" === (t = e).type ? "> " : "") + r.cv.serializeMarkdownChildren(t).join("")}`
                    : "\x02";
            })
            .join("\n");
    if (null != n && n.key === d && n.syntax === t) return ((n.children = e.children), n.document);
    let h = (function (e, t, n) {
        let i = { blocks: Array(t).fill(null), codeBlocks: [] },
            r = 0;
        for (let t of e)
            r +=
                (function (e, t, n, i) {
                    let r,
                        s = t.map((e) => {
                            let { prefix: t, serializedChildren: n } = e;
                            return t + n.join("");
                        }),
                        o = s.join("\n");
                    try {
                        if (((r = (0, l.IS)(o, i)), o.includes("```"))) {
                            let e = (0, l.IS)(o + "\n```", i);
                            null != m(e, (t) => "code_block" === t.kind.type && t.span.end === e.span.end) && (r = e);
                        }
                    } catch {
                        return o.length;
                    }
                    let u = [],
                        c = 0;
                    for (let e = 0; e < t.length; e++) {
                        let n = c + s[e].length;
                        (u.push({ start: c, contentStart: c + t[e].prefix.length, end: n }), (c = n + 1));
                    }
                    function d(e) {
                        let t = u.findIndex((t) => {
                            let { end: n } = t;
                            return e <= n;
                        });
                        return -1 === t ? null : t;
                    }
                    let h = new Set();
                    for (let l of (function (e) {
                        let t = [];
                        return (
                            m(e, (e) => {
                                if ("code_block" !== e.kind.type) return !1;
                                let n = e.children.filter((e) => "token" === e.type),
                                    l = n.filter((e) => "code_fence" === e.kind.type),
                                    i = l[0],
                                    r = l[l.length - 1];
                                if (null == i || null == r || i === r) return !1;
                                let s = n.find((e) => "language" === e.kind.type),
                                    a = n[n.indexOf(s ?? i) + 1];
                                return (
                                    t.push({
                                        openStart: i.span.start,
                                        openEnd: i.span.end,
                                        closeStart: r.span.start,
                                        lang: s?.text.toLowerCase() ?? null,
                                        onOwnLine: a?.kind.type === "line_ending",
                                    }),
                                    !1
                                );
                            }),
                            t
                        );
                    })(r)) {
                        let i = d(l.openStart);
                        if (null == i) continue;
                        let r = d(l.closeStart);
                        for (let e = i + 1; e < (r ?? t.length); e++) h.add(e);
                        e.codeBlocks.push({
                            openLine: t[i].index,
                            closeLine: null != r ? t[r].index : null,
                            lang: l.lang,
                            onOwnLine: l.onOwnLine,
                            openEnd: n + l.openEnd,
                            closeStart: n + Math.min(l.closeStart, o.length),
                        });
                    }
                    let f = (function (e) {
                            let t = [];
                            function n(e, n) {
                                let l = t.at(-1);
                                if (
                                    null != l &&
                                    l.start + l.text.length === e.span.start &&
                                    l.attributes.join() === n.join()
                                ) {
                                    l.text += e.text;
                                    return;
                                }
                                t.push({ text: e.text, start: e.span.start, attributes: n, data: void 0 });
                            }
                            function l(e, t, l) {
                                let [i, r] = "open" === t ? ["syntaxBefore", "before_"] : ["syntaxAfter", "after_"];
                                n(e, [i, ...l.map((e) => `${r}${e}`)]);
                            }
                            return (
                                !(function e(t, i) {
                                    let { kind: r } = t,
                                        s = i;
                                    switch (r.type) {
                                        case "modifier":
                                            s = [...i, a[r.value.kind]];
                                            break;
                                        case "code":
                                            s = [...i, "inlineCode"];
                                            break;
                                        case "link":
                                            s = [...i, "link"];
                                            break;
                                        case "small":
                                            s = [...i, "subtext"];
                                    }
                                    let o = !1,
                                        u = !1;
                                    for (let i = 0; i < t.children.length; i++) {
                                        let a = t.children[i];
                                        if ("node" === a.type) {
                                            (e(a, s), (u = !1));
                                            continue;
                                        }
                                        switch (("whitespace" !== a.kind.type && (u = !1), a.kind.type)) {
                                            case "delimiter":
                                                l(a, a.kind.value.side, s);
                                                break;
                                            case "code_delimiter":
                                                l(a, 0 === i ? "open" : "close", s);
                                                break;
                                            case "escape":
                                                l(a, "open", []);
                                                break;
                                            case "code_fence":
                                                n(a, ["codeBlockSyntax"]);
                                                break;
                                            case "language":
                                                n(a, ["codeBlockLang"]);
                                                break;
                                            case "code_content":
                                                n(a, "code_block" === r.type ? ["codeBlockText"] : s);
                                                break;
                                            case "small_marker":
                                                (l(a, "open", s), (u = !0));
                                                break;
                                            case "link_open":
                                                l(a, "open", s);
                                                break;
                                            case "link_close":
                                                (l(a, "close", s), (o = !0));
                                                break;
                                            case "destination_open":
                                            case "destination_close":
                                            case "title":
                                                l(a, "close", s);
                                                break;
                                            case "url":
                                                o ? l(a, "close", s) : n(a, s);
                                                break;
                                            case "whitespace":
                                                u ? l(a, "open", s) : o ? l(a, "close", s) : n(a, s);
                                                break;
                                            case "line_ending":
                                            case "indent":
                                            case "quote_prefix":
                                            case "list_marker":
                                            case "heading_marker":
                                                n(a, []);
                                                break;
                                            default:
                                                n(a, s);
                                        }
                                    }
                                })(e, []),
                                t
                            );
                        })(r),
                        p = 0;
                    for (let l = 0; l < t.length; l++) {
                        let { contentStart: i, end: r } = u[l],
                            s = [];
                        for (; p < f.length && f[p].start < r;) {
                            let e = f[p],
                                t = e.start + e.text.length,
                                n = Math.max(e.start, i),
                                a = Math.min(t, r);
                            if (
                                (a > n &&
                                    !(h.has(l) && e.attributes.includes("codeBlockText")) &&
                                    s.push({ ...e, text: e.text.slice(n - e.start, a - e.start), start: n - i }),
                                t > r)
                            )
                                break;
                            p++;
                        }
                        e.blocks[t[l].index] = {
                            start: n + i,
                            serializedChildren: t[l].serializedChildren,
                            entries: s,
                        };
                    }
                    return o.length;
                })(i, t, r, n) + 1;
        return i;
    })(c, e.children.length, t);
    return (o.set(e, { children: e.children, syntax: t, key: d, document: h }), h);
}
function h(e, t) {
    let n = (function (e, t) {
        let n = e.blocks[t.path[0]];
        if (null == n) return null;
        let l = n.start,
            i = t.path[1] ?? 0;
        for (let e = 0; e < i; e++) l += n.serializedChildren[e]?.length ?? 0;
        return 2 === t.path.length ? l + t.offset : l;
    })(e, t);
    return null != n && e.codeBlocks.some((e) => n >= e.openEnd && n <= e.closeStart);
}
function m(e, t) {
    if (t(e)) return e;
    for (let n of e.children) {
        if ("node" !== n.type) continue;
        let e = m(n, t);
        if (null != e) return e;
    }
    return null;
}
