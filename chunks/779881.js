n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var l = n(442433),
    i = n(514179),
    a = n(976860),
    s = n(652793),
    o = n(652215),
    c = n(746080),
    u = n(985018);
function d(e) {
    let { guild: t, selected: d } = e;
    return (0, r.jsx)(s.G, {
        id: "subscriptions-".concat(t.id),
        renderIcon: (e) => (0, r.jsx)(i.A, { className: e }),
        text: u.intl.string(u.t["KzCF/6"]),
        selected: d,
        onClick: () => {
            (0, a.pX)(o.BVt.CHANNEL(t.id, c.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: (e) => {
            null != t &&
                (0, l.L3)(e, async () => {
                    let { default: e } = await n.e("98126").then(n.bind(n, 650730));
                    return (n) => {
                        var l, i;
                        return (0, r.jsx)(
                            e,
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
                            })({}, n)),
                            (i = i = { guild: t }),
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
                    };
                });
        },
    });
}
