n.d(t, { Z: () => u }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(692547),
    l = n(531057),
    a = n(865824),
    o = n(481060),
    c = n(388032),
    d = n(244825);
function u(e) {
    var t,
        n,
        { children: u, lineClamp: m = 2 } = e,
        g = (function (e, t) {
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
    let [p, h] = r.useState(!1),
        [f, b] = r.useState(null),
        _ =
            null != f &&
            (0, i.jsx)('button', {
                className: d.button,
                onClick: () => h((e) => !e),
                children: (0, i.jsxs)(o.Text, {
                    className: d.seeMore,
                    variant: 'text-sm/medium',
                    color: 'text-brand',
                    children: [
                        p ? c.intl.string(c.t['JQX/PT']) : c.intl.string(c.t.Fbrd8P),
                        p
                            ? (0, i.jsx)(a.u, {
                                  color: s.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                            : (0, i.jsx)(l.C, {
                                  color: s.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                    ]
                })
            }),
        [x, E] = r.useState(null),
        j = r.useCallback(() => {
            if (null == x) return;
            let { scrollHeight: e, clientHeight: t } = x;
            e > t &&
                b({
                    truncatedHeight: t,
                    expandedHeight: e
                });
        }, [x]);
    r.useEffect(() => {
        requestAnimationFrame(j);
    }, [j, u, m]);
    let C = 'auto';
    return (
        null != f && (C = p ? ''.concat(f.expandedHeight, 'px') : ''.concat(f.truncatedHeight, 'px')),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(
                    o.Text,
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
                    })({}, g)),
                    (n = n =
                        {
                            className: d.content,
                            lineClamp: p ? void 0 : m,
                            ref: E,
                            style: { height: C },
                            children: u
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
                _
            ]
        })
    );
}
