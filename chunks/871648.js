r.d(t, { A: () => p });
var n = r(627968),
    o = r(64700),
    a = r(735438),
    i = r(397927),
    c = r(391973),
    l = r(810412),
    u = r(985018);
let s = (0, a.throttle)((e, t) => {
    (0, l.xp)(e.type, { opacity: t });
}, 1000);
function p(e) {
    let t = o.useCallback((t) => s(e, t), [e]);
    return (0, n.jsx)(i.aK1, {
        id: "opacity",
        "aria-haspopup": !0,
        label: u.intl.string(u.t.OVovCb),
        control: (r, o) => {
            var a, l;
            return (0, n.jsx)(
                i.i42,
                ((a = (function (e) {
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
                (l = l =
                    {
                        ref: o,
                        value: 100 * e.opacity,
                        maxValue: 100,
                        onChange: (r) => {
                            (0, c.Ju)({
                                widgetId: e.id,
                                opacity: r / 100,
                            }),
                                t(Math.floor(r));
                        },
                        "aria-label": u.intl.string(u.t.kbFsAD),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                a),
            );
        },
    });
}
