n.d(t, { A: () => B, p: () => w });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(607399),
    o = n(417597),
    d = n(397927),
    c = n(944791),
    u = n(793574),
    _ = n(688810),
    m = n(726249),
    g = n(915089),
    A = n(742589),
    x = n(544028),
    h = n(253932),
    p = n(841329),
    T = n(899847),
    E = n(695515),
    S = n(438732),
    f = n(809697),
    C = n(834981),
    b = n(102615),
    N = n(246109),
    I = n(452141),
    v = n(888772),
    j = n(614749),
    y = n(768985),
    R = n(191627),
    O = n(652215),
    L = n(842130),
    D = n(985018),
    P = n(914280);
let M = {
        [R.u9.REQUESTS]: v.A,
        [R.u9.ACTIVITY]: I.A,
        [R.u9.SETTINGS]: j.A,
        [R.u9.CONTENT_AND_SOCIAL]: b.A,
        [R.u9.DATA_AND_PRIVACY]: N.A,
    },
    G = { [R.u9.REQUESTS]: v.A, [R.u9.ACTIVITY]: I.A, [R.u9.CONTENT_AND_SOCIAL]: b.A, [R.u9.DATA_AND_PRIVACY]: N.A };
function U() {
    return (0, i.jsx)(d.BJc, { justify: "center", align: "center", className: P.g4, children: (0, i.jsx)(d.y$y, {}) });
}
function k(e) {
    let { section: t, handleItemSelect: n } = e,
        s = (0, C.VT)(),
        l = (0, S.A)();
    return t === R.u9.CONTENT_AND_SOCIAL || t === R.u9.DATA_AND_PRIVACY
        ? null
        : (0, i.jsxs)(d.VQ0, {
              className: P.c5,
              "aria-label": D.intl.string(L.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, i.jsx)(d.VQ0.Item, {
                      className: P.jA,
                      id: R.u9.ACTIVITY,
                      children: D.intl.string(L.default.bdBmqy),
                  }),
                  (0, i.jsxs)(d.VQ0.Item, {
                      className: P.jA,
                      id: R.u9.REQUESTS,
                      "aria-label": D.intl.string(L.default["gVWG+6"]),
                      children: [
                          D.intl.string(L.default["gVWG+6"]),
                          s > 0 ? (0, i.jsx)(d.hVq, { className: P.qS, count: s }) : null,
                      ],
                  }),
                  l
                      ? (0, i.jsx)(d.VQ0.Item, {
                            className: P.jA,
                            id: R.u9.SETTINGS,
                            children: D.intl.string(D.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function V(e) {
    let { theme: t, section: n, handleItemSelect: s } = e,
        l = (0, g.GV)(),
        o = (0, C.VT)();
    return (0, i.jsx)(d.NPJ, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(A.A, {
                className: a()(e, P.ZB),
                scrollable: r.Fr,
                role: "navigation",
                "aria-labelledby": l,
                toolbar: !0,
                children: [
                    (0, i.jsx)(A.A.Icon, { icon: d.nFg, "aria-hidden": !0 }),
                    (0, i.jsx)(A.A.Title, { id: l, children: D.intl.string(L.default.RZqaJn) }),
                    (0, i.jsx)(A.A.Divider, {}),
                    (0, i.jsxs)(d.VQ0, {
                        "aria-label": D.intl.string(L.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: s,
                        children: [
                            (0, i.jsx)(d.VQ0.Item, {
                                id: R.u9.ACTIVITY,
                                className: P.AS,
                                children: D.intl.string(L.default.bdBmqy),
                            }),
                            (0, i.jsxs)(d.VQ0.Item, {
                                id: R.u9.REQUESTS,
                                className: P.AS,
                                "aria-label": D.intl.string(L.default["gVWG+6"]),
                                children: [
                                    D.intl.string(L.default["gVWG+6"]),
                                    o > 0 ? (0, i.jsx)(d.hVq, { className: P.qS, count: o }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function w() {
    let e = (0, g.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: l,
            showAgeGateModal: a,
        } = (0, y.j)({
            location: R.MH.SETTINGS,
            onMountEffect: () => {
                T.Ay.initialPageLoad();
            },
        });
    if (
        (s.useEffect(() => {
            (0, p._)(f.q[n]);
        }, [n]),
        a)
    )
        return null;
    let r = M[n];
    return (0, i.jsxs)("main", {
        className: P.kL,
        "aria-label": D.intl.string(L.default.RZqaJn),
        children: [
            (0, i.jsx)(m.HI, { location: D.intl.string(L.default.RZqaJn) }),
            (0, i.jsx)(k, {
                section: n,
                handleItemSelect: (e) => {
                    l(e);
                },
            }),
            (0, i.jsx)(d.VQ0.Panel, {
                id: n,
                "aria-labelledby": e,
                className: P.Us,
                children: t ? (0, i.jsx)(U, {}) : (0, i.jsx)(r, {}),
            }),
        ],
    });
}
function B() {
    let { analyticsLocations: e } = (0, _.Ay)(u.A.FAMILY_CENTER),
        t = (0, S.A)(),
        n = (0, o.bG)([E.A], () => E.A.getIsInitialized()),
        l = (0, o.bG)([x.A], () => x.A.theme),
        r = (0, g.GV)(),
        {
            isLoading: A,
            selectedTab: p,
            handleTabChange: f,
            showAgeGateModal: C,
        } = (0, y.j)({
            location: R.MH.SIDENAV,
            onMountEffect: () => {
                c.I(O.BVt.FAMILY_CENTER), !E.A.isLoading() && E.A.canRefetch() && T.Ay.initialPageLoad();
            },
        });
    if (
        (s.useEffect(() => {
            let e = h.dm.getSetting();
            n && t && void 0 === e && h.dm.updateSetting(!0);
        }, [n, t]),
        C)
    )
        return null;
    let b = p !== R.u9.SETTINGS ? p : R.u9.ACTIVITY,
        N = G[b];
    return (0, i.jsx)(_.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: a()(P.kL, P.ei),
            "aria-label": D.intl.string(L.default.RZqaJn),
            children: [
                (0, i.jsx)(m.HI, { location: D.intl.string(L.default.RZqaJn) }),
                (0, i.jsx)(V, {
                    theme: l,
                    section: b,
                    handleItemSelect: (e) => {
                        f(e);
                    },
                }),
                (0, i.jsx)(d.VQ0.Panel, {
                    id: b,
                    "aria-labelledby": r,
                    className: P.Om,
                    children: (0, i.jsx)(d.HOs, {
                        children: (0, i.jsx)("div", {
                            className: P.O4,
                            children: A ? (0, i.jsx)(U, {}) : (0, i.jsx)(N, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
