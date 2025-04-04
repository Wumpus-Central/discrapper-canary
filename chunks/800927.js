n.d(t, { Z: () => S }), n(474991), n(398202), n(301563), n(757143), n(627494);
var r = n(512722),
    i = n.n(r),
    o = n(477660),
    a = n.n(o);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = /\n{2,}$/,
    f = /(?:^|\n)( *)$/,
    _ = '(?:[*-]|\\d+\\.)',
    p = '(%INDENT_CAPTURE_PATTERN%)(' + _ + ') +',
    h = RegExp('^' + p.replace('%INDENT_CAPTURE_PATTERN%', ' *')),
    m = p + '[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%' + _ + ' )[^\\n]*)*(\n|$)',
    g = / *\n$/,
    E = RegExp('^( *)(' + _ + ') [\\s\\S]+?(?:\\n(?! )(?!\\1' + _ + ' )|$)'),
    b = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    y = 10,
    v = 1,
    O = 1000000000,
    I = (e) => e.map((e) => ('text' === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, '')), e)),
    S = u(l({}, a().defaultRules.list), {
        requiredFirstCharacters: ' *-0123456789'.split(''),
        match: (e, t) => {
            if (!t.allowList || t._listLevel >= y + 1) return null;
            let n = null == t.prevCapture ? '' : t.prevCapture[0],
                r = f.exec(n);
            return null == r || b.test(r[0]) ? null : E.exec(e);
        },
        parse: (e, t, n) => {
            let r = e[2],
                o = r.length > 1,
                a = o ? Math.min(O, Math.max(v, +r)) : void 0,
                s = e[0].replace(d, '\n'),
                c = h.exec(s),
                f = null != c ? c[0].length : 0,
                _ = null != c ? c[1].length : 0,
                p = ' {'.concat(_, ',').concat(_ + 1, '}'),
                E = RegExp(m.replaceAll('%INDENT_CAPTURE_PATTERN%', p), 'gm'),
                b = RegExp('^ {1,' + f + '}', 'gm'),
                y = s.match(E);
            i()(null != y, 'markup list items can not be parsed.');
            let S = !1;
            return {
                ordered: o,
                start: a,
                items: y.map((e, r) => {
                    let i,
                        o = e.replace(h, '').replace(b, ''),
                        a = r === y.length - 1,
                        s = -1 !== o.indexOf('\n\n') || (a && S);
                    S = s;
                    let c = n.inline,
                        d = n._list,
                        f = n._listLevel;
                    (n._list = !0), (n._listLevel = (null != f ? f : 0) + 1), s ? ((n.inline = !1), (i = o.replace(g, '\n\n'))) : ((n.inline = !0), (i = o.replace(g, '')));
                    let _ = I(t(i, u(l({}, n), { allowHeading: !1 })));
                    return (n.inline = c), (n._list = d), (n._listLevel = f), _;
                })
            };
        }
    });
