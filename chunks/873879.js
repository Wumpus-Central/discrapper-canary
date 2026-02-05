"use strict";
n.d(t, { A: () => I });
var r = n(284009),
    i = n.n(r),
    a = n(791332),
    s = n.n(a);
let o = /\n{2,}$/,
    l = /(?:^|\n)( *)$/,
    u = "(?:[*-]|\\d+\\.)",
    c = "(%INDENT_CAPTURE_PATTERN%)(" + u + ") +",
    d = RegExp("^" + c.replace("%INDENT_CAPTURE_PATTERN%", " *")),
    _ = c + "[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%" + u + " )[^\\n]*)*(\n|$)",
    f = / *\n$/,
    p = RegExp("^( *)(" + u + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + u + " )|$)"),
    h = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    m = 10,
    g = 1,
    E = 1e9,
    A = (e) =>
        e.map((e) => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e)),
    I = {
        ...s().defaultRules.list,
        requiredFirstCharacters: " *-0123456789".split(""),
        match: (e, t) => {
            if (!t.allowList || t._listLevel >= m + 1) return null;
            let n = null == t.prevCapture ? "" : t.prevCapture[0],
                r = l.exec(n);
            return null == r || h.test(r[0]) ? null : p.exec(e);
        },
        parse: (e, t, n) => {
            let r = e[2],
                a = r.length > 1,
                s = a ? Math.min(E, Math.max(g, +r)) : void 0,
                l = e[0].replace(o, "\n"),
                u = d.exec(l),
                c = null != u ? u[0].length : 0,
                p = null != u ? u[1].length : 0,
                h = ` {${p},${p + 1}}`,
                m = RegExp(_.replaceAll("%INDENT_CAPTURE_PATTERN%", h), "gm"),
                I = RegExp("^ {1," + c + "}", "gm"),
                T = l.match(m);
            i()(null != T, "markup list items can not be parsed.");
            let y = !1;
            return {
                ordered: a,
                start: s,
                items: T.map((e, r) => {
                    let i,
                        a = e.replace(d, "").replace(I, ""),
                        s = r === T.length - 1,
                        o = -1 !== a.indexOf("\n\n") || (s && y);
                    y = o;
                    let l = n.inline,
                        u = n._list,
                        c = n._listLevel;
                    (n._list = !0),
                        (n._listLevel = (c ?? 0) + 1),
                        o ? ((n.inline = !1), (i = a.replace(f, "\n\n"))) : ((n.inline = !0), (i = a.replace(f, "")));
                    let _ = A(t(i, { ...n, allowHeading: !1 }));
                    return (n.inline = l), (n._list = u), (n._listLevel = c), _;
                }),
            };
        },
    };
