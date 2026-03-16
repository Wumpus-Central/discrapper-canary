n.d(t, { A: () => V, p: () => k });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(607399),
    o = n(417597),
    d = n(397927),
    c = n(944791),
    u = n(793574),
    _ = n(688810),
    m = n(726249),
    g = n(915089),
    A = n(742589),
    h = n(544028),
    x = n(253932),
    p = n(899847),
    T = n(695515),
    E = n(438732),
    C = n(834981),
    S = n(102615),
    f = n(246109),
    N = n(452141),
    b = n(888772),
    I = n(614749),
    v = n(768985),
    j = n(191627),
    O = n(652215),
    y = n(842130),
    R = n(985018),
    P = n(914280);
let D = {
        [j.u9.REQUESTS]: b.A,
        [j.u9.ACTIVITY]: N.A,
        [j.u9.SETTINGS]: I.A,
        [j.u9.CONTENT_AND_SOCIAL]: S.A,
        [j.u9.DATA_AND_PRIVACY]: f.A,
    },
    L = { [j.u9.REQUESTS]: b.A, [j.u9.ACTIVITY]: N.A, [j.u9.CONTENT_AND_SOCIAL]: S.A, [j.u9.DATA_AND_PRIVACY]: f.A };
function M() {
    return (0, i.jsx)(d.BJc, { justify: "center", align: "center", className: P.g4, children: (0, i.jsx)(d.y$y, {}) });
}
function G(e) {
    let { section: t, handleItemSelect: n } = e,
        s = (0, C.VT)(),
        l = (0, E.A)();
    return t === j.u9.CONTENT_AND_SOCIAL || t === j.u9.DATA_AND_PRIVACY
        ? null
        : (0, i.jsxs)(d.VQ0, {
              className: P.c5,
              "aria-label": R.intl.string(y.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, i.jsx)(d.VQ0.Item, {
                      className: P.jA,
                      id: j.u9.ACTIVITY,
                      children: R.intl.string(y.default.bdBmqy),
                  }),
                  (0, i.jsxs)(d.VQ0.Item, {
                      className: P.jA,
                      id: j.u9.REQUESTS,
                      "aria-label": R.intl.string(y.default["gVWG+6"]),
                      children: [
                          R.intl.string(y.default["gVWG+6"]),
                          s > 0 ? (0, i.jsx)(d.hVq, { className: P.qS, count: s }) : null,
                      ],
                  }),
                  l
                      ? (0, i.jsx)(d.VQ0.Item, {
                            className: P.jA,
                            id: j.u9.SETTINGS,
                            children: R.intl.string(R.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function U(e) {
    let { theme: t, section: n, handleItemSelect: s } = e,
        l = (0, g.GV)(),
        o = (0, C.VT)();
    return (0, i.jsx)(d.NPJ, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(A.A, {
                className: r()(e, P.ZB),
                scrollable: a.Fr,
                role: "navigation",
                "aria-labelledby": l,
                toolbar: !0,
                children: [
                    (0, i.jsx)(A.A.Icon, { icon: d.nFg, "aria-hidden": !0 }),
                    (0, i.jsx)(A.A.Title, { id: l, children: R.intl.string(y.default.RZqaJn) }),
                    (0, i.jsx)(A.A.Divider, {}),
                    (0, i.jsxs)(d.VQ0, {
                        "aria-label": R.intl.string(y.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: s,
                        children: [
                            (0, i.jsx)(d.VQ0.Item, {
                                id: j.u9.ACTIVITY,
                                className: P.AS,
                                children: R.intl.string(y.default.bdBmqy),
                            }),
                            (0, i.jsxs)(d.VQ0.Item, {
                                id: j.u9.REQUESTS,
                                className: P.AS,
                                "aria-label": R.intl.string(y.default["gVWG+6"]),
                                children: [
                                    R.intl.string(y.default["gVWG+6"]),
                                    o > 0 ? (0, i.jsx)(d.hVq, { className: P.qS, count: o }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function k() {
    let e = (0, g.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: s,
            showAgeGateModal: l,
        } = (0, v.j)({
            location: j.MH.SETTINGS,
            onMountEffect: () => {
                p.Ay.initialPageLoad();
            },
        });
    if (l) return null;
    let r = D[n];
    return (0, i.jsxs)("main", {
        className: P.kL,
        "aria-label": R.intl.string(y.default.RZqaJn),
        children: [
            (0, i.jsx)(m.HI, { location: R.intl.string(y.default.RZqaJn) }),
            (0, i.jsx)(G, {
                section: n,
                handleItemSelect: (e) => {
                    s(e);
                },
            }),
            (0, i.jsx)(d.VQ0.Panel, {
                id: n,
                "aria-labelledby": e,
                className: P.Us,
                children: t ? (0, i.jsx)(M, {}) : (0, i.jsx)(r, {}),
            }),
        ],
    });
}
function V() {
    let { analyticsLocations: e } = (0, _.Ay)(u.A.FAMILY_CENTER),
        t = (0, E.A)(),
        n = (0, o.bG)([T.A], () => T.A.getIsInitialized()),
        l = (0, o.bG)([h.A], () => h.A.theme),
        a = (0, g.GV)(),
        {
            isLoading: A,
            selectedTab: C,
            handleTabChange: S,
            showAgeGateModal: f,
        } = (0, v.j)({
            location: j.MH.SIDENAV,
            onMountEffect: () => {
                c.I(O.BVt.FAMILY_CENTER), !T.A.isLoading() && T.A.canRefetch() && p.Ay.initialPageLoad();
            },
        });
    if (
        (s.useEffect(() => {
            let e = x.dm.getSetting();
            n && t && void 0 === e && x.dm.updateSetting(!0);
        }, [n, t]),
        f)
    )
        return null;
    let N = C !== j.u9.SETTINGS ? C : j.u9.ACTIVITY,
        b = L[N];
    return (0, i.jsx)(_.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: r()(P.kL, P.ei),
            "aria-label": R.intl.string(y.default.RZqaJn),
            children: [
                (0, i.jsx)(m.HI, { location: R.intl.string(y.default.RZqaJn) }),
                (0, i.jsx)(U, {
                    theme: l,
                    section: N,
                    handleItemSelect: (e) => {
                        S(e);
                    },
                }),
                (0, i.jsx)(d.VQ0.Panel, {
                    id: N,
                    "aria-labelledby": a,
                    className: P.Om,
                    children: (0, i.jsx)(d.HOs, {
                        children: (0, i.jsx)("div", {
                            className: P.O4,
                            children: A ? (0, i.jsx)(M, {}) : (0, i.jsx)(b, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
