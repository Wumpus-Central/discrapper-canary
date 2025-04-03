n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(692547),
    a = n(531057),
    l = n(865824),
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
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['children', 'lineClamp']);
    let [p, h] = i.useState(!1),
        [f, b] = i.useState(null),
        N =
            null != f &&
            (0, r.jsx)('button', {
                className: d.button,
                onClick: () => h((e) => !e),
                children: (0, r.jsxs)(o.Text, {
                    className: d.seeMore,
                    variant: 'text-sm/medium',
                    color: 'text-brand',
                    children: [
                        p ? c.NW.string(c.t['JQX/PT']) : c.NW.string(c.t.Fbrd8P),
                        p
                            ? (0, r.jsx)(l.u, {
                                  color: s.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                            : (0, r.jsx)(a.C, {
                                  color: s.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                    ]
                })
            }),
        [x, _] = i.useState(null),
        E = i.useCallback(() => {
            if (null == x) return;
            let { scrollHeight: e, clientHeight: t } = x;
            e > t &&
                b({
                    truncatedHeight: t,
                    expandedHeight: e
                });
        }, [x]);
    i.useEffect(() => {
        requestAnimationFrame(E);
    }, [E, u, m]);
    let j = 'auto';
    return (
        null != f && (j = p ? ''.concat(f.expandedHeight, 'px') : ''.concat(f.truncatedHeight, 'px')),
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(
                    o.Text,
                    ((t = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, g)),
                    (n = n =
                        {
                            className: d.content,
                            lineClamp: p ? void 0 : m,
                            ref: _,
                            style: { height: j },
                            children: u
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                ),
                N
            ]
        })
    );
}
