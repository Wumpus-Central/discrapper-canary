var i = r(757143);
var a = r(627494);
var o = r(512722),
    s = r.n(o),
    l = r(477660),
    u = r.n(l);
let c = /\n{2,}$/,
    d = /(?:^|\n)( *)$/,
    f = '(?:[*-]|\\d+\\.)',
    p = '(%INDENT_CAPTURE_PATTERN%)(' + f + ') +',
    h = RegExp('^' + p.replace('%INDENT_CAPTURE_PATTERN%', ' *')),
    _ = p + '[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%' + f + ' )[^\\n]*)*(\n|$)',
    m = / *\n$/,
    g = RegExp('^( *)(' + f + ') [\\s\\S]+?(?:\\n(?! )(?!\\1' + f + ' )|$)'),
    E = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    v = 10,
    y = 1,
    b = 1000000000,
    I = (e) => e.map((e) => ('text' === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, '')), e)),
    T = {
        ...u().defaultRules.list,
        requiredFirstCharacters: ' *-0123456789'.split(''),
        match: (e, n) => {
            if (!n.allowList || n._listLevel >= v + 1) return null;
            let r = null == n.prevCapture ? '' : n.prevCapture[0],
                i = d.exec(r);
            return null == i || E.test(i[0]) ? null : g.exec(e);
        },
        parse: (e, n, r) => {
            let i = e[2],
                a = i.length > 1,
                o = a ? Math.min(b, Math.max(y, +i)) : void 0,
                l = e[0].replace(c, '\n'),
                u = h.exec(l),
                d = null != u ? u[0].length : 0,
                f = null != u ? u[1].length : 0,
                p = ' {'.concat(f, ',').concat(f + 1, '}'),
                g = RegExp(_.replaceAll('%INDENT_CAPTURE_PATTERN%', p), 'gm'),
                E = RegExp('^ {1,' + d + '}', 'gm'),
                v = l.match(g);
            s()(null != v, 'markup list items can not be parsed.');
            let T = !1;
            return {
                ordered: a,
                start: o,
                items: v.map((e, i) => {
                    let a;
                    let o = e.replace(h, '').replace(E, ''),
                        s = i === v.length - 1,
                        l = -1 !== o.indexOf('\n\n') || (s && T);
                    T = l;
                    let u = r.inline,
                        c = r._list,
                        d = r._listLevel;
                    (r._list = !0), (r._listLevel = (null != d ? d : 0) + 1), l ? ((r.inline = !1), (a = o.replace(m, '\n\n'))) : ((r.inline = !0), (a = o.replace(m, '')));
                    let f = I(
                        n(a, {
                            ...r,
                            allowHeading: !1
                        })
                    );
                    return (r.inline = u), (r._list = c), (r._listLevel = d), f;
                })
            };
        }
    };
n.Z = T;
