(n(321073), n(134528), n(947204));
var l = n(714414),
    i = n(152959),
    r = n(677413),
    s = n(339200);
let a = new Set(["line", "blockQuote"]),
    o = { bold: "strong", italic: "em", underline: "u", strikethrough: "s", spoiler: "spoiler" },
    u = new WeakMap(),
    c = { blocks: [], codeBlocks: [] };
function d(e, t) {
    if (t(e)) return e;
    for (let n of e.children) {
        if ("node" !== n.type) continue;
        let e = d(n, t);
        if (null != e) return e;
    }
    return null;
}
n.d(
    t,
    {},
    {
        Sd: function (e) {
            return null != e.nativeMarkdownSyntax && (0, i.YK)() ? e.nativeMarkdownSyntax : null;
        },
        p0: function (e) {
            let t = e.nativeMarkdownSyntax;
            if (null == t) return null;
            if (!(0, i.YK)()) return c;
            let n = u.get(e);
            if (null != n && n.children === e.children && n.syntax === t) return n.document;
            let h = (function (e) {
                    let t = [[]];
                    for (let n = 0; n < e.length; n++) {
                        let l = e[n];
                        s.AS.isInTypes(l, a)
                            ? t[t.length - 1].push({
                                  index: n,
                                  prefix: "blockQuote" === l.type ? "> " : "",
                                  serializedChildren: s.cv.serializeMarkdownChildren(l),
                              })
                            : t[t.length - 1].length > 0 && t.push([]);
                    }
                    return t.filter((e) => e.length > 0);
                })(e.children),
                m = e.children
                    .map((e) => {
                        var t;
                        return s.AS.isInTypes(e, a)
                            ? `\x01${("blockQuote" === (t = e).type ? "> " : "") + s.cv.serializeMarkdownChildren(t).join("")}`
                            : "\x02";
                    })
                    .join("\n");
            if (null != n && n.key === m && n.syntax === t) return ((n.children = e.children), n.document);
            let f = (function (e, t, n) {
                let i = { blocks: Array(t).fill(null), codeBlocks: [] },
                    s = 0;
                for (let t of e)
                    s +=
                        (function (e, t, n, i) {
                            let s,
                                a = t.map((e) => {
                                    let { prefix: t, serializedChildren: n } = e;
                                    return t + n.join("");
                                }),
                                u = a.join("\n");
                            try {
                                if (((s = (0, l.IS)(u, i)), u.includes("```"))) {
                                    let e = (0, l.IS)(u + "\n```", i);
                                    null != d(e, (t) => "code_block" === t.kind.type && t.span.end === e.span.end) &&
                                        (s = e);
                                }
                            } catch {
                                return u.length;
                            }
                            let c = [],
                                h = 0;
                            for (let e = 0; e < t.length; e++) {
                                let n = h + a[e].length;
                                (c.push({ start: h, contentStart: h + t[e].prefix.length, end: n }), (h = n + 1));
                            }
                            function m(e) {
                                let t = c.findIndex((t) => {
                                    let { end: n } = t;
                                    return e <= n;
                                });
                                return -1 === t ? null : t;
                            }
                            let f = new Set();
                            for (let l of (function (e) {
                                let t = [];
                                return (
                                    d(e, (e) => {
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
                            })(s)) {
                                let i = m(l.openStart);
                                if (null == i) continue;
                                let r = m(l.closeStart);
                                for (let e = i + 1; e < (r ?? t.length); e++) f.add(e);
                                e.codeBlocks.push({
                                    openLine: t[i].index,
                                    closeLine: null != r ? t[r].index : null,
                                    lang: l.lang,
                                    onOwnLine: l.onOwnLine,
                                    openEnd: n + l.openEnd,
                                    closeStart: n + Math.min(l.closeStart, u.length),
                                });
                            }
                            let p = (function (e) {
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
                                        let [i, r] =
                                            "open" === t ? ["syntaxBefore", "before_"] : ["syntaxAfter", "after_"];
                                        n(e, [i, ...l.map((e) => `${r}${e}`)]);
                                    }
                                    return (
                                        !(function e(t, i) {
                                            let { kind: r } = t,
                                                s = i;
                                            switch (r.type) {
                                                case "modifier":
                                                    s = [...i, o[r.value.kind]];
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
                                            let a = !1,
                                                u = !1;
                                            for (let i = 0; i < t.children.length; i++) {
                                                let o = t.children[i];
                                                if ("node" === o.type) {
                                                    (e(o, s), (u = !1));
                                                    continue;
                                                }
                                                switch (("whitespace" !== o.kind.type && (u = !1), o.kind.type)) {
                                                    case "delimiter":
                                                        l(o, o.kind.value.side, s);
                                                        break;
                                                    case "code_delimiter":
                                                        l(o, 0 === i ? "open" : "close", s);
                                                        break;
                                                    case "escape":
                                                        l(o, "open", []);
                                                        break;
                                                    case "code_fence":
                                                        n(o, ["codeBlockSyntax"]);
                                                        break;
                                                    case "language":
                                                        n(o, ["codeBlockLang"]);
                                                        break;
                                                    case "code_content":
                                                        n(o, "code_block" === r.type ? ["codeBlockText"] : s);
                                                        break;
                                                    case "small_marker":
                                                        (l(o, "open", s), (u = !0));
                                                        break;
                                                    case "link_open":
                                                        l(o, "open", s);
                                                        break;
                                                    case "link_close":
                                                        (l(o, "close", s), (a = !0));
                                                        break;
                                                    case "destination_open":
                                                    case "destination_close":
                                                    case "title":
                                                        l(o, "close", s);
                                                        break;
                                                    case "url":
                                                        a ? l(o, "close", s) : n(o, s);
                                                        break;
                                                    case "whitespace":
                                                        u ? l(o, "open", s) : a ? l(o, "close", s) : n(o, s);
                                                        break;
                                                    case "line_ending":
                                                    case "indent":
                                                    case "quote_prefix":
                                                    case "list_marker":
                                                    case "heading_marker":
                                                        n(o, []);
                                                        break;
                                                    default:
                                                        n(o, s);
                                                }
                                            }
                                        })(e, []),
                                        t
                                    );
                                })(s),
                                g = 0;
                            for (let l = 0; l < t.length; l++) {
                                let { contentStart: i, end: s } = c[l],
                                    o = [];
                                for (; g < p.length && p[g].start < s;) {
                                    let e = p[g],
                                        t = e.start + e.text.length,
                                        n = Math.max(e.start, i),
                                        r = Math.min(t, s);
                                    if (
                                        (r > n &&
                                            !(f.has(l) && e.attributes.includes("codeBlockText")) &&
                                            o.push({
                                                ...e,
                                                text: e.text.slice(n - e.start, r - e.start),
                                                start: n - i,
                                            }),
                                        t > s)
                                    )
                                        break;
                                    g++;
                                }
                                let u = 0 === t[l].index && "" === t[l].prefix && r.U1.test(a[l]);
                                e.blocks[t[l].index] = {
                                    start: n + i,
                                    serializedChildren: t[l].serializedChildren,
                                    entries: u
                                        ? o.flatMap((e) => {
                                              let t = r.f5.length - e.start;
                                              if (t <= 0) return [e];
                                              let n = {
                                                  ...e,
                                                  text: e.text.slice(0, t),
                                                  attributes: [...e.attributes, "silentPrefix"],
                                              };
                                              return t >= e.text.length
                                                  ? [n]
                                                  : [n, { ...e, text: e.text.slice(t), start: r.f5.length }];
                                          })
                                        : o,
                                };
                            }
                            return u.length;
                        })(i, t, s, n) + 1;
                return i;
            })(h, e.children.length, t);
            return (u.set(e, { children: e.children, syntax: t, key: m, document: f }), f);
        },
        tA: function (e, t) {
            let n = (function (e, t) {
                let n = e.blocks[t.path[0]];
                if (null == n) return null;
                let l = n.start,
                    i = t.path[1] ?? 0;
                for (let e = 0; e < i; e++) l += n.serializedChildren[e]?.length ?? 0;
                return 2 === t.path.length ? l + t.offset : l;
            })(e, t);
            return null != n && e.codeBlocks.some((e) => n >= e.openEnd && n <= e.closeStart);
        },
    },
);
