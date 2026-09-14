r.d(t, { h: () => s });
let n = {
    allow_space: !0,
    allow_digits: !0,
    double_inline: !0,
    allow_labels: !0,
    labelNormalizer: (e) => e.replace(/[\s]+/g, "-"),
    labelRenderer: (e) => `<a href="#${e}" class="mathlabel" title="Permalink to this equation">\xb6</a>`,
};
function s(e, t) {
    var r, s;
    let u = Object.assign(Object.assign({ renderer: (t) => e.utils.escapeHtml(t) }, n), t);
    (e.inline.ruler.before(
        "escape",
        "math_inline",
        ((r = u),
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
            let s = e.pos + 1 + +!!n,
                i = !1,
                u = -1;
            for (; !i;) {
                if (-1 === (u = e.src.indexOf("$", s))) return !1;
                if (a(e, u) || (n && 36 !== e.src.charCodeAt(u + 1))) {
                    s = u + 1;
                    continue;
                }
                (n && (u += 1), (i = !0));
            }
            if (!i) return !1;
            if (!r.allow_space) {
                let t = e.src.charCodeAt(u - 1);
                if (e.md.utils.isWhiteSpace(t)) return !1;
            }
            if (!r.allow_digits) {
                let t = e.src.charAt(u + 1);
                if (t && "" !== t.trim() && !isNaN(Number(t))) return !1;
            }
            let l = e.src.slice(e.pos + 1, u);
            if ((n && (l = e.src.slice(e.pos + 2, u - 1)), !l)) return !1;
            if (!t) {
                let t = e.push(n ? "math_inline_double" : "math_inline", "math", 0);
                ((t.content = l), (t.markup = n ? "$$" : "$"));
            }
            return ((e.pos = u + 1), !0);
        }),
    ),
        e.block.ruler.before(
            "fence",
            "math_block",
            ((s = u),
            function (e, t, r, n) {
                let a,
                    u,
                    l = !1,
                    o = e.bMarks[t] + e.tShift[t],
                    h = e.eMarks[t];
                if (
                    e.sCount[t] - e.blkIndent >= 4 ||
                    o + 2 > h ||
                    36 != e.src.charCodeAt(o) ||
                    36 != e.src.charCodeAt(o + 1)
                )
                    return !1;
                let c = t,
                    f = e.src.slice(o, h);
                if (f.trim().length > 3) {
                    if (f.trim().endsWith("$$")) ((l = !0), (h = h - 2 - (f.length - f.trim().length)));
                    else if (s.allow_labels) {
                        let e = i(f, h);
                        void 0 !== e.label && ((l = !0), (a = e.label), (h = e.end));
                    }
                }
                if (!l)
                    for (; c + 1 < r;) {
                        if (
                            ((c += 1),
                            (u = e.bMarks[c] + e.tShift[c]),
                            (h = e.eMarks[c]),
                            (f = e.src.slice(u, h)).trim().endsWith("$$"))
                        ) {
                            ((l = !0), (h = h - 2 - (f.length - f.trim().length)));
                            break;
                        }
                        if ("" == f.trim()) break;
                        if (s.allow_labels) {
                            let e = i(f, h);
                            if (void 0 !== e.label) {
                                ((l = !0), (a = e.label), (h = e.end));
                                break;
                            }
                        }
                    }
                if (!l) return !1;
                e.line = c + +!!l;
                let p = e.push(a ? "math_block_label" : "math_block", "math", 0);
                return (
                    (p.block = !0),
                    (p.content = e.src.slice(o + 2, h).trim()),
                    (p.markup = "$$"),
                    (p.map = [t, e.line]),
                    a && (p.info = s.labelNormalizer ? s.labelNormalizer(a) : a),
                    !0
                );
            }),
        ));
    let l = (t) => (r, n) => {
        let s,
            a = r[n].content.trim();
        try {
            s = u.renderer(a, { displayMode: t.displayMode });
        } catch (t) {
            s = e.utils.escapeHtml(`${a}:${t.message}`);
        }
        let i = t.inline ? "inline" : "block",
            l = t.displayMode ? "div" : "span",
            o = t.inline ? "" : "\n",
            h = r[n].info,
            c = t.hasLabel ? `${u.labelRenderer(h)}` : "";
        return [`<${l} ${h ? `id="${h}" ` : ""}class="math ${i}">`, c, s, `</${l}>`].filter((e) => !!e).join(o) + o;
    };
    ((e.renderer.rules.math_inline = l({ displayMode: !1, inline: !0 })),
        (e.renderer.rules.math_inline_double = l({ displayMode: !0, inline: !0 })),
        (e.renderer.rules.math_block = l({ displayMode: !0 })),
        (e.renderer.rules.math_block_label = l({ displayMode: !0, hasLabel: !0 })));
}
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
