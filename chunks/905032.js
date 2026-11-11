let a = {
    allow_space: !0,
    allow_digits: !0,
    double_inline: !0,
    allow_labels: !0,
    labelNormalizer: (e) => e.replace(/[\s]+/g, "-"),
    labelRenderer: (e) => `<a href="#${e}" class="mathlabel" title="Permalink to this equation">\xb6</a>`,
};
function n(e, t, r = 0) {
    let a = 0;
    for (; t >= 0;)
        if (((t -= 1), 92 === e.src.charCodeAt(t))) a += 1;
        else break;
    return 0 !== a && a % 2 !== r;
}
function i(e, t) {
    let r = e
        .split("")
        .reverse()
        .join("")
        .match(/^\s*\)(?<label>[^)$\r\n]+?)\(\s*\${2}/);
    return r && r.groups
        ? { label: r.groups.label.split("").reverse().join(""), end: (t -= (r.index || 0) + r[0].length) }
        : { end: t };
}
let s = new WeakMap();
r.d(
    t,
    {},
    {
        h: function (e, t) {
            var r, l;
            let o = Object.assign(Object.assign({ renderer: (t) => e.utils.escapeHtml(t) }, a), t);
            (e.inline.ruler.before(
                "escape",
                "math_inline",
                ((r = o),
                function (e, t) {
                    if (
                        36 !== e.src.charCodeAt(e.pos) ||
                        (!r.allow_space && e.md.utils.isWhiteSpace(e.src.charCodeAt(e.pos + 1)))
                    )
                        return !1;
                    if (!r.allow_digits) {
                        let t = e.src.charAt(e.pos - 1);
                        if (t && "" !== t.trim() && !isNaN(Number(t))) return !1;
                    }
                    if (n(e, e.pos)) return !1;
                    let a = !1;
                    r.double_inline && 36 === e.src.charCodeAt(e.pos + 1) && (a = !0);
                    let i = e.pos + 1 + +!!a,
                        s = !1,
                        l = -1;
                    for (; !s;) {
                        if (-1 === (l = e.src.indexOf("$", i))) return !1;
                        if (n(e, l) || (a && 36 !== e.src.charCodeAt(l + 1))) {
                            i = l + 1;
                            continue;
                        }
                        (a && (l += 1), (s = !0));
                    }
                    if (!s) return !1;
                    if (!r.allow_space) {
                        let t = e.src.charCodeAt(l - 1);
                        if (e.md.utils.isWhiteSpace(t)) return !1;
                    }
                    if (!r.allow_digits) {
                        let t = e.src.charAt(l + 1);
                        if (t && "" !== t.trim() && !isNaN(Number(t))) return !1;
                    }
                    let o = e.src.slice(e.pos + 1, l);
                    if ((a && (o = e.src.slice(e.pos + 2, l - 1)), !o)) return !1;
                    if (!t) {
                        let t = e.push(a ? "math_inline_double" : "math_inline", "math", 0);
                        ((t.content = o), (t.markup = a ? "$$" : "$"));
                    }
                    return ((e.pos = l + 1), !0);
                }),
            ),
                e.block.ruler.before(
                    "fence",
                    "math_block",
                    ((l = o),
                    function (e, t, r, a) {
                        let n,
                            o,
                            h = !1,
                            u = e.bMarks[t] + e.tShift[t],
                            c = e.eMarks[t];
                        if (
                            e.sCount[t] - e.blkIndent >= 4 ||
                            u + 2 > c ||
                            36 != e.src.charCodeAt(u) ||
                            36 != e.src.charCodeAt(u + 1)
                        )
                            return !1;
                        let m = t,
                            p = e.src.slice(u, c);
                        if (p.trim().length > 3) {
                            if (p.trim().endsWith("$$")) ((h = !0), (c = c - 2 - (p.length - p.trim().length)));
                            else if (l.allow_labels) {
                                let e = i(p, c);
                                void 0 !== e.label && ((h = !0), (n = e.label), (c = e.end));
                            }
                        }
                        if (!h && !l.allow_labels) {
                            var d;
                            let a = s.get(e);
                            if (
                                void 0 !== a &&
                                t > a.startLine &&
                                t < a.lastLine &&
                                (r <= a.lastLine + 1 ||
                                    ((d = a.lastLine),
                                    "" == e.src.slice(e.bMarks[d] + e.tShift[d], e.eMarks[d]).trim()))
                            )
                                return !1;
                        }
                        if (!h)
                            for (; m + 1 < r;) {
                                if (
                                    ((m += 1),
                                    (o = e.bMarks[m] + e.tShift[m]),
                                    (c = e.eMarks[m]),
                                    (p = e.src.slice(o, c)).trim().endsWith("$$"))
                                ) {
                                    ((h = !0), (c = c - 2 - (p.length - p.trim().length)));
                                    break;
                                }
                                if ("" == p.trim()) break;
                                if (l.allow_labels) {
                                    let e = i(p, c);
                                    if (void 0 !== e.label) {
                                        ((h = !0), (n = e.label), (c = e.end));
                                        break;
                                    }
                                }
                            }
                        if (!h) return (!l.allow_labels && m > t && s.set(e, { startLine: t, lastLine: m }), !1);
                        e.line = m + +!!h;
                        let f = e.push(n ? "math_block_label" : "math_block", "math", 0);
                        return (
                            (f.block = !0),
                            (f.content = e.src.slice(u + 2, c).trim()),
                            (f.markup = "$$"),
                            (f.map = [t, e.line]),
                            n && (f.info = l.labelNormalizer ? l.labelNormalizer(n) : n),
                            !0
                        );
                    }),
                ));
            let h = (t) => (r, a) => {
                let n,
                    i = r[a].content.trim();
                try {
                    n = o.renderer(i, { displayMode: t.displayMode });
                } catch (t) {
                    n = e.utils.escapeHtml(`${i}:${t.message}`);
                }
                let s = t.inline ? "inline" : "block",
                    l = t.displayMode ? "div" : "span",
                    h = t.inline ? "" : "\n",
                    u = r[a].info,
                    c = t.hasLabel ? `${o.labelRenderer(u)}` : "";
                return (
                    [`<${l} ${u ? `id="${u}" ` : ""}class="math ${s}">`, c, n, `</${l}>`].filter((e) => !!e).join(h) + h
                );
            };
            ((e.renderer.rules.math_inline = h({ displayMode: !1, inline: !0 })),
                (e.renderer.rules.math_inline_double = h({ displayMode: !0, inline: !0 })),
                (e.renderer.rules.math_block = h({ displayMode: !0 })),
                (e.renderer.rules.math_block_label = h({ displayMode: !0, hasLabel: !0 })));
        },
    },
);
