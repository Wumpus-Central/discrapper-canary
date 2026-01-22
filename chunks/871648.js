r.d(t, {
    A: () => b,
});
var n = r(627968),
    o = r(64700),
    i = r(735438),
    l = r(397927),
    a = r(391973),
    c = r(810412),
    u = r(985018);
let s = (0, i.throttle)((e, t) => {
    (0, c.xp)(e.type, {
        opacity: t,
    });
}, 1e3);

function b(e) {
    let t = o.useCallback((t) => s(e, t), [e]);
    return (0, n.jsx)(l.aK1, {
        id: "opacity",
        "aria-haspopup": !0,
        label: u.intl.string(u.t.OVovCb),
        control: (r, o) => {
            var i, c;
            return (0, n.jsx)(
                l.i42,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, r)),
                (c = c =
                    {
                        ref: o,
                        value: 100 * e.opacity,
                        maxValue: 100,
                        onChange: (r) => {
                            (0, a.Ju)({
                                widgetId: e.id,
                                opacity: r / 100,
                            }),
                                t(Math.floor(r));
                        },
                        "aria-label": u.intl.string(u.t.kbFsAD),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(c)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e));
                      }),
                i),
            );
        },
    });
}
