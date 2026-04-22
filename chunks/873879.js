"use strict";
n.d(t, { A: () => p });
var r = n(284009),
    i = n.n(r),
    s = n(791332),
    a = n.n(s);
let o = /\n{2,}$/,
    l = /(?:^|\n)( *)$/,
    u = "(?:[*-]|\\d+\\.)",
    d = "(%INDENT_CAPTURE_PATTERN%)(" + u + ") +",
    c = RegExp("^" + d.replace("%INDENT_CAPTURE_PATTERN%", " *")),
    _ = d + "[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%" + u + " )[^\\n]*)*(\n|$)",
    f = / *\n$/,
    E = RegExp("^( *)(" + u + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + u + " )|$)"),
    h = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    p = {
        ...a().defaultRules.list,
        requiredFirstCharacters: " *-0123456789".split(""),
        match: (e, t) => {
            if (!t.allowList || t._listLevel >= 11) return null;
            let n = null == t.prevCapture ? "" : t.prevCapture[0],
                r = l.exec(n);
            return null == r || h.test(r[0]) ? null : E.exec(e);
        },
        parse: (e, t, n) => {
            let r = e[2],
                s = r.length > 1,
                a = s ? Math.min(1e9, Math.max(1, +r)) : void 0,
                l = e[0].replace(o, "\n"),
                u = c.exec(l),
                d = null != u ? u[0].length : 0,
                E = null != u ? u[1].length : 0,
                h = ` {${E},${E + 1}}`,
                p = RegExp(_.replaceAll("%INDENT_CAPTURE_PATTERN%", h), "gm"),
                m = RegExp("^ {1," + d + "}", "gm"),
                g = l.match(p);
            i()(null != g, "markup list items can not be parsed.");
            let A = !1;
            return {
                ordered: s,
                start: a,
                items: g.map((e, r) => {
                    let i,
                        s = e.replace(c, "").replace(m, ""),
                        a = r === g.length - 1,
                        o = -1 !== s.indexOf("\n\n") || (a && A);
                    A = o;
                    let l = n.inline,
                        u = n._list,
                        d = n._listLevel;
                    (n._list = !0),
                        (n._listLevel = (d ?? 0) + 1),
                        o ? ((n.inline = !1), (i = s.replace(f, "\n\n"))) : ((n.inline = !0), (i = s.replace(f, "")));
                    let _ = t(i, { ...n, allowHeading: !1 }).map(
                        (e) => (
                            "text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e
                        ),
                    );
                    return (n.inline = l), (n._list = u), (n._listLevel = d), _;
                }),
            };
        },
    };
