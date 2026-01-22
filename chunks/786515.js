n.d(t, {
    A: () => p,
});
var r = n(627968),
    l = n(64700),
    i = n(417597),
    a = n(397927),
    s = n(318937),
    o = n(533117),
    c = n(709562),
    u = n(60504),
    d = n(985018);

function f() {
    return (f =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}

function p() {
    let e = (0, i.bG)([o.A], () => !o.A.visibleOverlayCanvas),
        t = l.useRef(null);
    return (0, r.jsx)(u.A, {
        renderPopout: () => null,
        popoutTargetRef: t,
        children: (n) => {
            var l, i;
            let {} = n,
                o = f({}, n);
            return (0, r.jsx)(
                c.A,
                ((l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, o)),
                (i = i =
                    {
                        buttonRef: t,
                        label: d.intl.string(d.t.Cuo44L),
                        isActive: e,
                        iconComponent: a.bMW,
                        onClick: s.bI,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                l),
            );
        },
    });
}
