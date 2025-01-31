n.d(t, { Z: () => y }), n(757143), n(627494);
var i = n(512722),
    r = n.n(i),
    a = n(477660),
    s = n.n(a);
let o = /\n{2,}$/,
    l = /(?:^|\n)( *)$/,
    u = '(?:[*-]|\\d+\\.)',
    c = '(%INDENT_CAPTURE_PATTERN%)(' + u + ') +',
    d = RegExp('^' + c.replace('%INDENT_CAPTURE_PATTERN%', ' *')),
    f = c + '[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%' + u + ' )[^\\n]*)*(\n|$)',
    _ = / *\n$/,
    p = RegExp('^( *)(' + u + ') [\\s\\S]+?(?:\\n(?! )(?!\\1' + u + ' )|$)'),
    h = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    m = 10,
    g = 1,
    E = 1000000000,
    v = (e) => e.map((e) => ('text' === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, '')), e)),
    y = {
        ...s().defaultRules.list,
        requiredFirstCharacters: ' *-0123456789'.split(''),
        match: (e, t) => {
            if (!t.allowList || t._listLevel >= m + 1) return null;
            let n = null == t.prevCapture ? '' : t.prevCapture[0],
                i = l.exec(n);
            return null == i || h.test(i[0]) ? null : p.exec(e);
        },
        parse: (e, t, n) => {
            let i = e[2],
                a = i.length > 1,
                s = a ? Math.min(E, Math.max(g, +i)) : void 0,
                l = e[0].replace(o, '\n'),
                u = d.exec(l),
                c = null != u ? u[0].length : 0,
                p = null != u ? u[1].length : 0,
                h = ' {'.concat(p, ',').concat(p + 1, '}'),
                m = RegExp(f.replaceAll('%INDENT_CAPTURE_PATTERN%', h), 'gm'),
                y = RegExp('^ {1,' + c + '}', 'gm'),
                I = l.match(m);
            r()(null != I, 'markup list items can not be parsed.');
            let b = !1;
            return {
                ordered: a,
                start: s,
                items: I.map((e, i) => {
                    let r;
                    let a = e.replace(d, '').replace(y, ''),
                        s = i === I.length - 1,
                        o = -1 !== a.indexOf('\n\n') || (s && b);
                    b = o;
                    let l = n.inline,
                        u = n._list,
                        c = n._listLevel;
                    (n._list = !0), (n._listLevel = (null != c ? c : 0) + 1), o ? ((n.inline = !1), (r = a.replace(_, '\n\n'))) : ((n.inline = !0), (r = a.replace(_, '')));
                    let f = v(
                        t(r, {
                            ...n,
                            allowHeading: !1
                        })
                    );
                    return (n.inline = l), (n._list = u), (n._listLevel = c), f;
                })
            };
        }
    };
