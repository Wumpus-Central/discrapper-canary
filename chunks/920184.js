let n = {
    allow_space: !0,
    allow_digits: !0,
    double_inline: !0,
    allow_labels: !0,
    labelNormalizer: (e) => e.replace(/[\s]+/g, "-"),
    labelRenderer: (e) => `<a href="#${e}" class="mathlabel" title="Permalink to this equation">\xb6</a>`,
};
function a(e, t, r = 0) {
    let n = 0;
    for (; t >= 0;)
        if (((t -= 1), 92 === e.src.charCodeAt(t))) n += 1;
        else break;
    return 0 !== n && n % 2 !== r;
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
r.d(
    t,
    {},
    {
        h: function (e, t) {
            var r, s;
            let l = Object.assign(Object.assign({ renderer: (t) => e.utils.escapeHtml(t) }, n), t);
            (e.inline.ruler.before(
                "escape",
                "math_inline",
                ((r = l),
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
                    if (a(e, e.pos)) return !1;
                    let n = !1;
                    r.double_inline && 36 === e.src.charCodeAt(e.pos + 1) && (n = !0);
                    let i = e.pos + 1 + +!!n,
                        s = !1,
                        l = -1;
                    for (; !s;) {
                        if (-1 === (l = e.src.indexOf("$", i))) return !1;
                        if (a(e, l) || (n && 36 !== e.src.charCodeAt(l + 1))) {
                            i = l + 1;
                            continue;
                        }
                        (n && (l += 1), (s = !0));
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
                    if ((n && (o = e.src.slice(e.pos + 2, l - 1)), !o)) return !1;
                    if (!t) {
                        let t = e.push(n ? "math_inline_double" : "math_inline", "math", 0);
                        ((t.content = o), (t.markup = n ? "$$" : "$"));
                    }
                    return ((e.pos = l + 1), !0);
                }),
            ),
                e.block.ruler.before(
                    "fence",
                    "math_block",
                    ((s = l),
                    function (e, t, r, n) {
                        let a,
                            l,
                            o = !1,
                            h = e.bMarks[t] + e.tShift[t],
                            u = e.eMarks[t];
                        if (
                            e.sCount[t] - e.blkIndent >= 4 ||
                            h + 2 > u ||
                            36 != e.src.charCodeAt(h) ||
                            36 != e.src.charCodeAt(h + 1)
                        )
                            return !1;
                        let c = t,
                            m = e.src.slice(h, u);
                        if (m.trim().length > 3) {
                            if (m.trim().endsWith("$$")) ((o = !0), (u = u - 2 - (m.length - m.trim().length)));
                            else if (s.allow_labels) {
                                let e = i(m, u);
                                void 0 !== e.label && ((o = !0), (a = e.label), (u = e.end));
                            }
                        }
                        if (!o)
                            for (; c + 1 < r;) {
                                if (
                                    ((c += 1),
                                    (l = e.bMarks[c] + e.tShift[c]),
                                    (u = e.eMarks[c]),
                                    (m = e.src.slice(l, u)).trim().endsWith("$$"))
                                ) {
                                    ((o = !0), (u = u - 2 - (m.length - m.trim().length)));
                                    break;
                                }
                                if ("" == m.trim()) break;
                                if (s.allow_labels) {
                                    let e = i(m, u);
                                    if (void 0 !== e.label) {
                                        ((o = !0), (a = e.label), (u = e.end));
                                        break;
                                    }
                                }
                            }
                        if (!o) return !1;
                        e.line = c + +!!o;
                        let p = e.push(a ? "math_block_label" : "math_block", "math", 0);
                        return (
                            (p.block = !0),
                            (p.content = e.src.slice(h + 2, u).trim()),
                            (p.markup = "$$"),
                            (p.map = [t, e.line]),
                            a && (p.info = s.labelNormalizer ? s.labelNormalizer(a) : a),
                            !0
                        );
                    }),
                ));
            let o = (t) => (r, n) => {
                let a,
                    i = r[n].content.trim();
                try {
                    a = l.renderer(i, { displayMode: t.displayMode });
                } catch (t) {
                    a = e.utils.escapeHtml(`${i}:${t.message}`);
                }
                let s = t.inline ? "inline" : "block",
                    o = t.displayMode ? "div" : "span",
                    h = t.inline ? "" : "\n",
                    u = r[n].info,
                    c = t.hasLabel ? `${l.labelRenderer(u)}` : "";
                return (
                    [`<${o} ${u ? `id="${u}" ` : ""}class="math ${s}">`, c, a, `</${o}>`].filter((e) => !!e).join(h) + h
                );
            };
            ((e.renderer.rules.math_inline = o({ displayMode: !1, inline: !0 })),
                (e.renderer.rules.math_inline_double = o({ displayMode: !0, inline: !0 })),
                (e.renderer.rules.math_block = o({ displayMode: !0 })),
                (e.renderer.rules.math_block_label = o({ displayMode: !0, hasLabel: !0 })));
        },
    },
);
