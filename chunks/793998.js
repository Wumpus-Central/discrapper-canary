n.d(t, { A: () => V, p: () => k });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(607399),
    o = n(417597),
    c = n(397927),
    d = n(944791),
    u = n(793574),
    _ = n(688810),
    m = n(726249),
    A = n(915089),
    g = n(742589),
    h = n(544028),
    x = n(253932),
    p = n(899847),
    E = n(695515),
    C = n(438732),
    T = n(834981),
    S = n(102615),
    I = n(246109),
    f = n(452141),
    N = n(888772),
    b = n(614749),
    j = n(768985),
    v = n(191627),
    O = n(652215),
    R = n(842130),
    y = n(985018),
    P = n(914280);
let L = {
        [v.u9.REQUESTS]: N.A,
        [v.u9.ACTIVITY]: f.A,
        [v.u9.SETTINGS]: b.A,
        [v.u9.CONTENT_AND_SOCIAL]: S.A,
        [v.u9.DATA_AND_PRIVACY]: I.A,
    },
    D = { [v.u9.REQUESTS]: N.A, [v.u9.ACTIVITY]: f.A, [v.u9.CONTENT_AND_SOCIAL]: S.A, [v.u9.DATA_AND_PRIVACY]: I.A };
function M() {
    return (0, i.jsx)(c.BJc, { justify: "center", align: "center", className: P.g4, children: (0, i.jsx)(c.y$y, {}) });
}
function G(e) {
    let { section: t, handleItemSelect: n } = e,
        s = (0, T.VT)(),
        a = (0, C.A)();
    return t === v.u9.CONTENT_AND_SOCIAL || t === v.u9.DATA_AND_PRIVACY
        ? null
        : (0, i.jsxs)(c.VQ0, {
              className: P.c5,
              "aria-label": y.intl.string(R.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, i.jsx)(c.VQ0.Item, {
                      className: P.jA,
                      id: v.u9.ACTIVITY,
                      children: y.intl.string(R.default.bdBmqy),
                  }),
                  (0, i.jsxs)(c.VQ0.Item, {
                      className: P.jA,
                      id: v.u9.REQUESTS,
                      "aria-label": y.intl.string(R.default["gVWG+6"]),
                      children: [
                          y.intl.string(R.default["gVWG+6"]),
                          s > 0 ? (0, i.jsx)(c.hVq, { className: P.qS, count: s }) : null,
                      ],
                  }),
                  a
                      ? (0, i.jsx)(c.VQ0.Item, {
                            className: P.jA,
                            id: v.u9.SETTINGS,
                            children: y.intl.string(y.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function U(e) {
    let { theme: t, section: n, handleItemSelect: s } = e,
        a = (0, A.GV)(),
        o = (0, T.VT)();
    return (0, i.jsx)(c.NPJ, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(g.A, {
                className: l()(e, P.ZB),
                scrollable: r.Fr,
                role: "navigation",
                "aria-labelledby": a,
                toolbar: !0,
                children: [
                    (0, i.jsx)(g.A.Icon, { icon: c.nFg, "aria-hidden": !0 }),
                    (0, i.jsx)(g.A.Title, { id: a, children: y.intl.string(R.default.RZqaJn) }),
                    (0, i.jsx)(g.A.Divider, {}),
                    (0, i.jsxs)(c.VQ0, {
                        "aria-label": y.intl.string(R.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: s,
                        children: [
                            (0, i.jsx)(c.VQ0.Item, {
                                id: v.u9.ACTIVITY,
                                className: P.AS,
                                children: y.intl.string(R.default.bdBmqy),
                            }),
                            (0, i.jsxs)(c.VQ0.Item, {
                                id: v.u9.REQUESTS,
                                className: P.AS,
                                "aria-label": y.intl.string(R.default["gVWG+6"]),
                                children: [
                                    y.intl.string(R.default["gVWG+6"]),
                                    o > 0 ? (0, i.jsx)(c.hVq, { className: P.qS, count: o }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function k() {
    let e = (0, A.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: s,
            showAgeGateModal: a,
        } = (0, j.j)({
            location: v.MH.SETTINGS,
            onMountEffect: () => {
                p.Ay.initialPageLoad();
            },
        });
    if (a) return null;
    let l = L[n];
    return (0, i.jsxs)("main", {
        className: P.kL,
        "aria-label": y.intl.string(R.default.RZqaJn),
        children: [
            (0, i.jsx)(m.HI, { location: y.intl.string(R.default.RZqaJn) }),
            (0, i.jsx)(G, {
                section: n,
                handleItemSelect: (e) => {
                    s(e);
                },
            }),
            (0, i.jsx)(c.VQ0.Panel, {
                id: n,
                "aria-labelledby": e,
                className: P.Us,
                children: t ? (0, i.jsx)(M, {}) : (0, i.jsx)(l, {}),
            }),
        ],
    });
}
function V() {
    let { analyticsLocations: e } = (0, _.Ay)(u.A.FAMILY_CENTER),
        t = (0, C.A)(),
        n = (0, o.bG)([E.A], () => E.A.getIsInitialized()),
        a = (0, o.bG)([h.A], () => h.A.theme),
        r = (0, A.GV)(),
        {
            isLoading: g,
            selectedTab: T,
            handleTabChange: S,
            showAgeGateModal: I,
        } = (0, j.j)({
            location: v.MH.SIDENAV,
            onMountEffect: () => {
                d.I(O.BVt.FAMILY_CENTER), !E.A.isLoading() && E.A.canRefetch() && p.Ay.initialPageLoad();
            },
        });
    if (
        (s.useEffect(() => {
            let e = x.dm.getSetting();
            n && t && void 0 === e && x.dm.updateSetting(!0);
        }, [n, t]),
        I)
    )
        return null;
    let f = T !== v.u9.SETTINGS ? T : v.u9.ACTIVITY,
        N = D[f];
    return (0, i.jsx)(_.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: l()(P.kL, P.ei),
            "aria-label": y.intl.string(R.default.RZqaJn),
            children: [
                (0, i.jsx)(m.HI, { location: y.intl.string(R.default.RZqaJn) }),
                (0, i.jsx)(U, {
                    theme: a,
                    section: f,
                    handleItemSelect: (e) => {
                        S(e);
                    },
                }),
                (0, i.jsx)(c.VQ0.Panel, {
                    id: f,
                    "aria-labelledby": r,
                    className: P.Om,
                    children: (0, i.jsx)(c.HOs, {
                        children: (0, i.jsx)("div", {
                            className: P.O4,
                            children: g ? (0, i.jsx)(M, {}) : (0, i.jsx)(N, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
