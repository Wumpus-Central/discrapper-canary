n.d(t, { M: () => A });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(417597),
    l = n(397927),
    c = n(287809),
    u = n(945276),
    d = n(834981),
    f = n(53719),
    p = n(390370),
    _ = n(191627),
    h = n(842130),
    m = n(985018),
    g = n(487693);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { user: t } = e,
        a = (0, u.A)(),
        E = (0, d.xr)(),
        y = (0, o.bG)([c.default], () => c.default.getCurrentUser()),
        A = i.useCallback(() => {
            s()(void 0 !== y, "User must be logged in to accept a link request"),
                (0, l.mMO)(async () => {
                    let { default: e } = await n.e("31385").then(n.bind(n, 58144));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            O(b({}, n), {
                                currentUser: y,
                                otherUser: t,
                            }),
                        );
                });
        }, [y, t]),
        v = i.useCallback(() => {
            s()(void 0 !== y, "User must be logged in to decline a link request"),
                (0, l.mMO)(async () => {
                    let { default: e } = await n.e("84811").then(n.bind(n, 389094));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            O(b({}, n), {
                                currentUser: y,
                                otherUser: t,
                            }),
                        );
                });
        }, [y, t]),
        S = i.useCallback(() => {
            s()(void 0 !== y, "User must be logged in to decline a link request"),
                (0, l.mMO)(async () => {
                    let { default: e } = await n.e("17219").then(n.bind(n, 187278));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            O(b({}, n), {
                                currentUser: y,
                                otherUser: t,
                            }),
                        );
                });
        }, [y, t]);
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [
            (0, r.jsx)("div", {
                className: g.zH,
                children: (0, r.jsx)(p.A, {
                    otherUser: t,
                    status: _.Ef.PENDING,
                }),
            }),
            (0, r.jsx)("div", {
                className: g.o1,
                children: a
                    ? (0, r.jsx)(f.A, {
                          icon: l.PGe,
                          tooltip: m.intl.string(h.default.e5iHmZ),
                          onClick: S,
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              E
                                  ? null
                                  : (0, r.jsx)(f.A, {
                                        icon: l.A9s,
                                        tooltip: m.intl.string(h.default.krWQZK),
                                        onClick: A,
                                    }),
                              (0, r.jsx)(f.A, {
                                  icon: l.PGe,
                                  tooltip: m.intl.string(h.default.bBDeNI),
                                  onClick: v,
                              }),
                          ],
                      }),
            }),
        ],
    });
}
