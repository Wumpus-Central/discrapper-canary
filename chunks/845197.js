n.d(t, { M: () => p });
var i = n(627968),
    s = n(64700),
    r = n(284009),
    a = n.n(r),
    l = n(417597),
    o = n(397927),
    c = n(287809),
    d = n(438732),
    u = n(834981),
    _ = n(53719),
    m = n(390370),
    A = n(191627),
    g = n(842130),
    E = n(985018),
    h = n(487693);
function p(e) {
    let { user: t } = e,
        r = (0, d.A)(),
        p = (0, u.xr)(),
        C = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        x = s.useCallback(() => {
            a()(void 0 !== C, "User must be logged in to accept a link request"),
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("31385").then(n.bind(n, 58144));
                    return (n) => (0, i.jsx)(e, { ...n, currentUser: C, otherUser: t });
                });
        }, [C, t]),
        T = s.useCallback(() => {
            a()(void 0 !== C, "User must be logged in to decline a link request"),
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("84811").then(n.bind(n, 389094));
                    return (n) => (0, i.jsx)(e, { ...n, currentUser: C, otherUser: t });
                });
        }, [C, t]),
        I = s.useCallback(() => {
            a()(void 0 !== C, "User must be logged in to decline a link request"),
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("17219").then(n.bind(n, 187278));
                    return (n) => (0, i.jsx)(e, { ...n, currentUser: C, otherUser: t });
                });
        }, [C, t]);
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [
            (0, i.jsx)("div", { className: h.zH, children: (0, i.jsx)(m.A, { otherUser: t, status: A.Ef.PENDING }) }),
            (0, i.jsx)("div", {
                className: h.o1,
                children: r
                    ? (0, i.jsx)(_.A, { icon: o.PGe, tooltip: E.intl.string(g.default.e5iHmZ), onClick: I })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              p
                                  ? null
                                  : (0, i.jsx)(_.A, {
                                        icon: o.A9s,
                                        tooltip: E.intl.string(g.default.krWQZK),
                                        onClick: x,
                                    }),
                              (0, i.jsx)(_.A, { icon: o.PGe, tooltip: E.intl.string(g.default.bBDeNI), onClick: T }),
                          ],
                      }),
            }),
        ],
    });
}
