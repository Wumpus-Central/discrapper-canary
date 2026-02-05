n.d(t, { A: () => w, p: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(607399),
    o = n(417597),
    d = n(397927),
    c = n(944791),
    u = n(793574),
    h = n(688810),
    A = n(726249),
    g = n(915089),
    m = n(742589),
    p = n(544028),
    _ = n(253932),
    x = n(899847),
    f = n(695515),
    E = n(438732),
    C = n(834981),
    I = n(102615),
    S = n(246109),
    b = n(452141),
    N = n(888772),
    T = n(614749),
    j = n(768985),
    v = n(191627),
    y = n(652215),
    R = n(842130),
    O = n(985018),
    L = n(914280);
let D = {
        [v.u9.REQUESTS]: N.A,
        [v.u9.ACTIVITY]: b.A,
        [v.u9.SETTINGS]: T.A,
        [v.u9.CONTENT_AND_SOCIAL]: I.A,
        [v.u9.DATA_AND_PRIVACY]: S.A,
    },
    M = { [v.u9.REQUESTS]: N.A, [v.u9.ACTIVITY]: b.A, [v.u9.CONTENT_AND_SOCIAL]: I.A, [v.u9.DATA_AND_PRIVACY]: S.A };
function G() {
    return (0, i.jsx)(d.BJc, { justify: "center", align: "center", className: L.g4, children: (0, i.jsx)(d.y$y, {}) });
}
function U(e) {
    let { section: t, handleItemSelect: n } = e,
        l = (0, C.VT)(),
        s = (0, E.A)();
    return t === v.u9.CONTENT_AND_SOCIAL || t === v.u9.DATA_AND_PRIVACY
        ? null
        : (0, i.jsxs)(d.VQ0, {
              className: L.c5,
              "aria-label": O.intl.string(R.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, i.jsx)(d.VQ0.Item, {
                      className: L.jA,
                      id: v.u9.ACTIVITY,
                      children: O.intl.string(R.default.bdBmqy),
                  }),
                  (0, i.jsxs)(d.VQ0.Item, {
                      className: L.jA,
                      id: v.u9.REQUESTS,
                      "aria-label": O.intl.string(R.default["gVWG+6"]),
                      children: [
                          O.intl.string(R.default["gVWG+6"]),
                          l > 0 ? (0, i.jsx)(d.hVq, { className: L.qS, count: l }) : null,
                      ],
                  }),
                  s
                      ? (0, i.jsx)(d.VQ0.Item, {
                            className: L.jA,
                            id: v.u9.SETTINGS,
                            children: O.intl.string(O.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function P(e) {
    let { theme: t, section: n, handleItemSelect: l } = e,
        s = (0, g.GV)(),
        o = (0, C.VT)();
    return (0, i.jsx)(d.NPJ, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(m.A, {
                className: a()(e, L.ZB),
                scrollable: r.Fr,
                role: "navigation",
                "aria-labelledby": s,
                toolbar: !0,
                children: [
                    (0, i.jsx)(m.A.Icon, { icon: d.nFg, "aria-hidden": !0 }),
                    (0, i.jsx)(m.A.Title, { id: s, children: O.intl.string(R.default.RZqaJn) }),
                    (0, i.jsx)(m.A.Divider, {}),
                    (0, i.jsxs)(d.VQ0, {
                        "aria-label": O.intl.string(R.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: l,
                        children: [
                            (0, i.jsx)(d.VQ0.Item, {
                                id: v.u9.ACTIVITY,
                                className: L.AS,
                                children: O.intl.string(R.default.bdBmqy),
                            }),
                            (0, i.jsxs)(d.VQ0.Item, {
                                id: v.u9.REQUESTS,
                                className: L.AS,
                                "aria-label": O.intl.string(R.default["gVWG+6"]),
                                children: [
                                    O.intl.string(R.default["gVWG+6"]),
                                    o > 0 ? (0, i.jsx)(d.hVq, { className: L.qS, count: o }) : null,
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
            handleTabChange: l,
            showAgeGateModal: s,
        } = (0, j.j)({
            location: v.MH.SETTINGS,
            onMountEffect: () => {
                x.Ay.initialPageLoad();
            },
        });
    if (s) return null;
    let a = D[n];
    return (0, i.jsxs)("main", {
        className: L.kL,
        "aria-label": O.intl.string(R.default.RZqaJn),
        children: [
            (0, i.jsx)(A.HI, { location: O.intl.string(R.default.RZqaJn) }),
            (0, i.jsx)(U, {
                section: n,
                handleItemSelect: (e) => {
                    l(e);
                },
            }),
            (0, i.jsx)(d.VQ0.Panel, {
                id: n,
                "aria-labelledby": e,
                className: L.Us,
                children: t ? (0, i.jsx)(G, {}) : (0, i.jsx)(a, {}),
            }),
        ],
    });
}
function w() {
    let { analyticsLocations: e } = (0, h.Ay)(u.A.FAMILY_CENTER),
        t = (0, E.A)(),
        n = (0, o.bG)([f.A], () => f.A.getIsInitialized()),
        s = (0, o.bG)([p.A], () => p.A.theme),
        r = (0, g.GV)(),
        {
            isLoading: m,
            selectedTab: C,
            handleTabChange: I,
            showAgeGateModal: S,
        } = (0, j.j)({
            location: v.MH.SIDENAV,
            onMountEffect: () => {
                c.I(y.BVt.FAMILY_CENTER), !f.A.isLoading() && f.A.canRefetch() && x.Ay.initialPageLoad();
            },
        });
    if (
        (l.useEffect(() => {
            let e = _.dm.getSetting();
            n && t && void 0 === e && _.dm.updateSetting(!0);
        }, [n, t]),
        S)
    )
        return null;
    let b = C !== v.u9.SETTINGS ? C : v.u9.ACTIVITY,
        N = M[b];
    return (0, i.jsx)(h.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: a()(L.kL, L.ei),
            "aria-label": O.intl.string(R.default.RZqaJn),
            children: [
                (0, i.jsx)(A.HI, { location: O.intl.string(R.default.RZqaJn) }),
                (0, i.jsx)(P, {
                    theme: s,
                    section: b,
                    handleItemSelect: (e) => {
                        I(e);
                    },
                }),
                (0, i.jsx)(d.VQ0.Panel, {
                    id: b,
                    "aria-labelledby": r,
                    className: L.Om,
                    children: (0, i.jsx)(d.HOs, {
                        children: (0, i.jsx)("div", {
                            className: L.O4,
                            children: m ? (0, i.jsx)(G, {}) : (0, i.jsx)(N, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
