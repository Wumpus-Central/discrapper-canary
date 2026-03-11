n.d(t, { A: () => V, p: () => k });
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
    g = n(726249),
    A = n(915089),
    m = n(742589),
    h = n(544028),
    p = n(253932),
    x = n(899847),
    E = n(695515),
    T = n(438732),
    S = n(834981),
    C = n(102615),
    I = n(246109),
    f = n(452141),
    N = n(888772),
    b = n(614749),
    v = n(768985),
    O = n(191627),
    j = n(652215),
    R = n(870236),
    y = n(985018),
    P = n(41742);
let D = {
        [O.u9.REQUESTS]: N.A,
        [O.u9.ACTIVITY]: f.A,
        [O.u9.SETTINGS]: b.A,
        [O.u9.CONTENT_AND_SOCIAL]: C.A,
        [O.u9.DATA_AND_PRIVACY]: I.A,
    },
    L = { [O.u9.REQUESTS]: N.A, [O.u9.ACTIVITY]: f.A, [O.u9.CONTENT_AND_SOCIAL]: C.A, [O.u9.DATA_AND_PRIVACY]: I.A };
function G() {
    return (0, i.jsx)(d.BJc, { justify: "center", align: "center", className: P.g4, children: (0, i.jsx)(d.y$y, {}) });
}
function M(e) {
    let { section: t, handleItemSelect: n } = e,
        s = (0, S.VT)(),
        l = (0, T.A)();
    return t === O.u9.CONTENT_AND_SOCIAL || t === O.u9.DATA_AND_PRIVACY
        ? null
        : (0, i.jsxs)(d.VQ0, {
              className: P.c5,
              "aria-label": y.intl.string(R.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, i.jsx)(d.VQ0.Item, {
                      className: P.jA,
                      id: O.u9.ACTIVITY,
                      children: y.intl.string(R.default.bdBmqy),
                  }),
                  (0, i.jsxs)(d.VQ0.Item, {
                      className: P.jA,
                      id: O.u9.REQUESTS,
                      "aria-label": y.intl.string(R.default["gVWG+6"]),
                      children: [
                          y.intl.string(R.default["gVWG+6"]),
                          s > 0 ? (0, i.jsx)(d.hVq, { className: P.qS, count: s }) : null,
                      ],
                  }),
                  l
                      ? (0, i.jsx)(d.VQ0.Item, {
                            className: P.jA,
                            id: O.u9.SETTINGS,
                            children: y.intl.string(y.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function U(e) {
    let { theme: t, section: n, handleItemSelect: s } = e,
        l = (0, A.GV)(),
        o = (0, S.VT)();
    return (0, i.jsx)(d.NPJ, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(m.A, {
                className: a()(e, P.ZB),
                scrollable: r.Fr,
                role: "navigation",
                "aria-labelledby": l,
                toolbar: !0,
                children: [
                    (0, i.jsx)(m.A.Icon, { icon: d.nFg, "aria-hidden": !0 }),
                    (0, i.jsx)(m.A.Title, { id: l, children: y.intl.string(R.default.RZqaJn) }),
                    (0, i.jsx)(m.A.Divider, {}),
                    (0, i.jsxs)(d.VQ0, {
                        "aria-label": y.intl.string(R.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: s,
                        children: [
                            (0, i.jsx)(d.VQ0.Item, {
                                id: O.u9.ACTIVITY,
                                className: P.AS,
                                children: y.intl.string(R.default.bdBmqy),
                            }),
                            (0, i.jsxs)(d.VQ0.Item, {
                                id: O.u9.REQUESTS,
                                className: P.AS,
                                "aria-label": y.intl.string(R.default["gVWG+6"]),
                                children: [
                                    y.intl.string(R.default["gVWG+6"]),
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
    let e = (0, A.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: s,
            showAgeGateModal: l,
        } = (0, v.j)({
            location: O.MH.SETTINGS,
            onMountEffect: () => {
                x.Ay.initialPageLoad();
            },
        });
    if (l) return null;
    let a = D[n];
    return (0, i.jsxs)("main", {
        className: P.kL,
        "aria-label": y.intl.string(R.default.RZqaJn),
        children: [
            (0, i.jsx)(g.HI, { location: y.intl.string(R.default.RZqaJn) }),
            (0, i.jsx)(M, {
                section: n,
                handleItemSelect: (e) => {
                    s(e);
                },
            }),
            (0, i.jsx)(d.VQ0.Panel, {
                id: n,
                "aria-labelledby": e,
                className: P.Us,
                children: t ? (0, i.jsx)(G, {}) : (0, i.jsx)(a, {}),
            }),
        ],
    });
}
function V() {
    let { analyticsLocations: e } = (0, _.Ay)(u.A.FAMILY_CENTER),
        t = (0, T.A)(),
        n = (0, o.bG)([E.A], () => E.A.getIsInitialized()),
        l = (0, o.bG)([h.A], () => h.A.theme),
        r = (0, A.GV)(),
        {
            isLoading: m,
            selectedTab: S,
            handleTabChange: C,
            showAgeGateModal: I,
        } = (0, v.j)({
            location: O.MH.SIDENAV,
            onMountEffect: () => {
                c.I(j.BVt.FAMILY_CENTER), !E.A.isLoading() && E.A.canRefetch() && x.Ay.initialPageLoad();
            },
        });
    if (
        (s.useEffect(() => {
            let e = p.dm.getSetting();
            n && t && void 0 === e && p.dm.updateSetting(!0);
        }, [n, t]),
        I)
    )
        return null;
    let f = S !== O.u9.SETTINGS ? S : O.u9.ACTIVITY,
        N = L[f];
    return (0, i.jsx)(_.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: a()(P.kL, P.ei),
            "aria-label": y.intl.string(R.default.RZqaJn),
            children: [
                (0, i.jsx)(g.HI, { location: y.intl.string(R.default.RZqaJn) }),
                (0, i.jsx)(U, {
                    theme: l,
                    section: f,
                    handleItemSelect: (e) => {
                        C(e);
                    },
                }),
                (0, i.jsx)(d.VQ0.Panel, {
                    id: f,
                    "aria-labelledby": r,
                    className: P.Om,
                    children: (0, i.jsx)(d.HOs, {
                        children: (0, i.jsx)("div", {
                            className: P.O4,
                            children: m ? (0, i.jsx)(G, {}) : (0, i.jsx)(N, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
