n.d(t, { A: () => m });
var i = n(284009),
    r = n.n(i),
    a = n(478676),
    s = n.n(a);
let l = /\n{2,}$/,
    o = /(?:^|\n)( *)$/,
    d = "(?:[*-]|\\d+\\.)",
    c = "(%INDENT_CAPTURE_PATTERN%)(" + d + ") +",
    u = RegExp("^" + c.replace("%INDENT_CAPTURE_PATTERN%", " *")),
    _ = c + "[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%" + d + " )[^\\n]*)*(\n|$)",
    E = / *\n$/,
    A = "^( *)(" + d + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + d + " )|$)",
    h = new RegExp(A),
    I = RegExp("^\\n" + A.slice(1)),
    f = /^\n/,
    p = /\n *$/,
    T = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    m = {
        ...s().defaultRules.list,
        requiredFirstCharacters: "\n *-0123456789".split(""),
        match: (e, t) => {
            if (!t.allowList || t._listLevel >= 11) return null;
            if (10 === e.charCodeAt(0)) {
                let n = null == t.prevCapture ? "" : t.prevCapture[0];
                return "" === n || p.test(n) ? null : I.exec(e);
            }
            let n = null == t.prevCapture ? "" : t.prevCapture[0],
                i = o.exec(n);
            return null == i || T.test(i[0]) ? null : h.exec(e);
        },
        parse: (e, t, n) => {
            let i = e[2],
                a = i.length > 1,
                s = a ? Math.min(1e9, Math.max(1, +i)) : void 0,
                o = f.test(e[0]),
                d = e[0].replace(f, "").replace(l, "\n"),
                c = u.exec(d),
                A = null != c ? c[0].length : 0,
                h = null != c ? c[1].length : 0,
                I = ` {${h},${h + 1}}`,
                p = RegExp(_.replaceAll("%INDENT_CAPTURE_PATTERN%", I), "gm"),
                T = RegExp("^ {1," + A + "}", "gm"),
                m = d.match(p);
            r()(null != m, "markup list items can not be parsed.");
            let g = !1;
            return {
                ordered: a,
                start: s,
                items: m.map((e, i) => {
                    let r,
                        a = e.replace(u, "").replace(T, ""),
                        s = i === m.length - 1,
                        l = -1 !== a.indexOf("\n\n") || (s && g);
                    g = l;
                    let o = n.inline,
                        d = n._list,
                        c = n._listLevel;
                    (n._list = !0),
                        (n._listLevel = (c ?? 0) + 1),
                        l ? ((n.inline = !1), (r = a.replace(E, "\n\n"))) : ((n.inline = !0), (r = a.replace(E, "")));
                    let _ = t(r, { ...n, allowHeading: !1 }).map(
                        (e) => (
                            "text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e
                        ),
                    );
                    return (n.inline = o), (n._list = d), (n._listLevel = c), _;
                }),
                consumedLeadingNewline: o,
            };
        },
    };
