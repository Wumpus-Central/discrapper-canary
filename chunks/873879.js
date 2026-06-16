"use strict";
n.d(t, { A: () => E });
var i = n(284009),
    r = n.n(i),
    s = n(791332),
    a = n.n(s);
let o = /\n{2,}$/,
    l = /(?:^|\n)( *)$/,
    u = "(?:[*-]|\\d+\\.)",
    c = "(%INDENT_CAPTURE_PATTERN%)(" + u + ") +",
    d = RegExp("^" + c.replace("%INDENT_CAPTURE_PATTERN%", " *")),
    _ = c + "[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%" + u + " )[^\\n]*)*(\n|$)",
    h = / *\n$/,
    f = RegExp("^( *)(" + u + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + u + " )|$)"),
    p = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    E = {
        ...a().defaultRules.list,
        requiredFirstCharacters: " *-0123456789".split(""),
        match: (e, t) => {
            if (!t.allowList || t._listLevel >= 11) return null;
            let n = null == t.prevCapture ? "" : t.prevCapture[0],
                i = l.exec(n);
            return null == i || p.test(i[0]) ? null : f.exec(e);
        },
        parse: (e, t, n) => {
            let i = e[2],
                s = i.length > 1,
                a = s ? Math.min(1e9, Math.max(1, +i)) : void 0,
                l = e[0].replace(o, "\n"),
                u = d.exec(l),
                c = null != u ? u[0].length : 0,
                f = null != u ? u[1].length : 0,
                p = ` {${f},${f + 1}}`,
                E = RegExp(_.replaceAll("%INDENT_CAPTURE_PATTERN%", p), "gm"),
                m = RegExp("^ {1," + c + "}", "gm"),
                g = l.match(E);
            r()(null != g, "markup list items can not be parsed.");
            let A = !1;
            return {
                ordered: s,
                start: a,
                items: g.map((e, i) => {
                    let r,
                        s = e.replace(d, "").replace(m, ""),
                        a = i === g.length - 1,
                        o = -1 !== s.indexOf("\n\n") || (a && A);
                    A = o;
                    let l = n.inline,
                        u = n._list,
                        c = n._listLevel;
                    (n._list = !0),
                        (n._listLevel = (c ?? 0) + 1),
                        o ? ((n.inline = !1), (r = s.replace(h, "\n\n"))) : ((n.inline = !0), (r = s.replace(h, "")));
                    let _ = t(r, { ...n, allowHeading: !1 }).map(
                        (e) => (
                            "text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e
                        ),
                    );
                    return (n.inline = l), (n._list = u), (n._listLevel = c), _;
                }),
            };
        },
    };
