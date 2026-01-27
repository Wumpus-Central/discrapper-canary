n.d(t, {
    M: () => E,
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(417597),
    o = n(397927),
    c = n(287809),
    d = n(438732),
    u = n(834981),
    _ = n(53719),
    p = n(390370),
    m = n(191627),
    g = n(842130),
    A = n(985018),
    f = n(487693);

function h(e) {
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
}

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function E(e) {
    let { user: t } = e,
        l = (0, d.A)(),
        E = (0, u.xr)(),
        x = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        O = i.useCallback(() => {
            s()(void 0 !== x, "User must be logged in to accept a link request"),
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("31385").then(n.bind(n, 58144));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(h({}, n), {
                                currentUser: x,
                                otherUser: t,
                            }),
                        );
                });
        }, [x, t]),
        C = i.useCallback(() => {
            s()(void 0 !== x, "User must be logged in to decline a link request"),
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("84811").then(n.bind(n, 389094));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(h({}, n), {
                                currentUser: x,
                                otherUser: t,
                            }),
                        );
                });
        }, [x, t]),
        I = i.useCallback(() => {
            s()(void 0 !== x, "User must be logged in to decline a link request"),
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("17219").then(n.bind(n, 187278));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(h({}, n), {
                                currentUser: x,
                                otherUser: t,
                            }),
                        );
                });
        }, [x, t]);
    return (0, r.jsxs)("div", {
        className: f.kL,
        children: [
            (0, r.jsx)("div", {
                className: f.zH,
                children: (0, r.jsx)(p.A, {
                    otherUser: t,
                    status: m.Ef.PENDING,
                }),
            }),
            (0, r.jsx)("div", {
                className: f.o1,
                children: l
                    ? (0, r.jsx)(_.A, {
                          icon: o.PGe,
                          tooltip: A.intl.string(g.default.e5iHmZ),
                          onClick: I,
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              E
                                  ? null
                                  : (0, r.jsx)(_.A, {
                                        icon: o.A9s,
                                        tooltip: A.intl.string(g.default.krWQZK),
                                        onClick: O,
                                    }),
                              (0, r.jsx)(_.A, {
                                  icon: o.PGe,
                                  tooltip: A.intl.string(g.default.bBDeNI),
                                  onClick: C,
                              }),
                          ],
                      }),
            }),
        ],
    });
}
