n.d(t, { Z: () => c }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(692547),
    l = n(481060),
    a = n(388032),
    o = n(244825);
function c(e) {
    var t,
        n,
        { children: c, lineClamp: d = 2 } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['children', 'lineClamp']);
    let [m, p] = r.useState(!1),
        [g, h] = r.useState(null),
        f =
            null != g &&
            (0, i.jsx)('button', {
                className: o.button,
                onClick: () => p((e) => !e),
                children: (0, i.jsxs)(l.Text, {
                    className: o.seeMore,
                    variant: 'text-sm/medium',
                    color: 'text-brand',
                    children: [
                        m ? a.intl.string(a.t['JQX/PT']) : a.intl.string(a.t.Fbrd8P),
                        m
                            ? (0, i.jsx)(l.u04, {
                                  color: s.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                            : (0, i.jsx)(l.CJ0, {
                                  color: s.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                    ]
                })
            }),
        [b, _] = r.useState(null),
        x = r.useCallback(() => {
            if (null == b) return;
            let { scrollHeight: e, clientHeight: t } = b;
            e > t &&
                h({
                    truncatedHeight: t,
                    expandedHeight: e
                });
        }, [b]);
    r.useEffect(() => {
        requestAnimationFrame(x);
    }, [x, c, d]);
    let E = 'auto';
    return (
        null != g && (E = m ? ''.concat(g.expandedHeight, 'px') : ''.concat(g.truncatedHeight, 'px')),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(
                    l.Text,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, u)),
                    (n = n =
                        {
                            className: o.content,
                            lineClamp: m ? void 0 : d,
                            ref: _,
                            style: { height: E },
                            children: c
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                ),
                f
            ]
        })
    );
}
