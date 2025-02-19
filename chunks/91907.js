r.d(t, { Z: () => l });
var n = r(200651),
    a = r(192379),
    o = r(793030),
    i = r(256139),
    s = r(866040);
function l(e) {
    let { user: t, text: r, channel: l, textClassName: c, onPopoutClosed: u } = e,
        d = (0, a.useMemo)(() => [t], [t]);
    return (0, n.jsx)(s.Z, {
        participants: d,
        channel: l,
        onPopoutClosed: u,
        children: (e) => {
            var t, a;
            return (0, n.jsx)(
                i.Z,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, e)),
                (a = a =
                    {
                        tag: 'span',
                        children: (0, n.jsx)(o.xv, {
                            className: c,
                            variant: 'text-sm/semibold',
                            color: 'text-primary',
                            lineClamp: 1,
                            scaleFontToUserSetting: !0,
                            children: r
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                t)
            );
        }
    });
}
