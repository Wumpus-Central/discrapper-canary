n.d(t, { Z: () => s });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(857395),
    o = n(104102);
let s = function (e) {
    let { className: t, guildId: n } = e,
        s = i.useCallback((e, t) => {
            e.stopPropagation(), t.onClick(e);
        }, []);
    return (0, r.jsx)(a.Z, {
        guildId: n,
        position: 'left',
        children: (e) => {
            var n, i;
            return (0, r.jsx)(
                l.P3F,
                ((n = (function (e) {
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
                })({}, e)),
                (i = i =
                    {
                        className: t,
                        onClick: (t) => s(t, e),
                        children: (0, r.jsx)('div', {
                            className: o.icon,
                            children: (0, r.jsx)(l.bJT, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n)
            );
        }
    });
};
