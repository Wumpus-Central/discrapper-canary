l.d(t, { M: () => E });
var n = l(627968),
    i = l(64700),
    s = l(284009),
    a = l.n(s),
    r = l(417597),
    d = l(192308),
    c = l(933832),
    u = l(789645),
    o = l(287809),
    x = l(438732),
    h = l(834981),
    m = l(53719),
    g = l(390370),
    j = l(191627),
    A = l(602339),
    v = l(985018),
    f = l(528218);
function E(e) {
    let { user: t } = e,
        s = (0, x.A)(),
        E = (0, h.xr)(),
        N = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
        p = i.useCallback(() => {
            a()(void 0 !== N, "User must be logged in to accept a link request"),
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await l.e("31385").then(l.bind(l, 58144));
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: N, otherUser: t });
                });
        }, [N, t]),
        T = i.useCallback(() => {
            a()(void 0 !== N, "User must be logged in to decline a link request"),
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await l.e("84811").then(l.bind(l, 389094));
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: N, otherUser: t });
                });
        }, [N, t]),
        S = i.useCallback(() => {
            a()(void 0 !== N, "User must be logged in to decline a link request"),
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await l.e("17219").then(l.bind(l, 187278));
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: N, otherUser: t });
                });
        }, [N, t]);
    return (0, n.jsxs)("div", {
        className: f.kL,
        children: [
            (0, n.jsx)("div", { className: f.zH, children: (0, n.jsx)(g.A, { otherUser: t, status: j.Ef.PENDING }) }),
            (0, n.jsx)("div", {
                className: f.o1,
                children: s
                    ? (0, n.jsx)(m.A, { icon: u.P, tooltip: v.intl.string(A.default.e5iHmZ), onClick: S })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              E
                                  ? null
                                  : (0, n.jsx)(m.A, {
                                        icon: c.A,
                                        tooltip: v.intl.string(A.default.krWQZK),
                                        onClick: p,
                                    }),
                              (0, n.jsx)(m.A, { icon: u.P, tooltip: v.intl.string(A.default.bBDeNI), onClick: T }),
                          ],
                      }),
            }),
        ],
    });
}
