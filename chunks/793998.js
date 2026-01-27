n.d(t, {
    A: () => M,
    p: () => V,
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(607399),
    o = n(417597),
    c = n(397927),
    d = n(944791),
    u = n(793574),
    g = n(688810),
    h = n(726249),
    x = n(915089),
    A = n(742589),
    p = n(544028),
    m = n(253932),
    j = n(899847),
    b = n(695515),
    O = n(438732),
    S = n(834981),
    E = n(102615),
    f = n(246109),
    v = n(452141),
    T = n(888772),
    C = n(614749),
    y = n(768985),
    N = n(191627),
    I = n(652215),
    _ = n(842130),
    P = n(985018),
    G = n(914280);
let R = {
        [N.u9.REQUESTS]: T.A,
        [N.u9.ACTIVITY]: v.A,
        [N.u9.SETTINGS]: C.A,
        [N.u9.CONTENT_AND_SOCIAL]: E.A,
        [N.u9.DATA_AND_PRIVACY]: f.A,
    },
    D = {
        [N.u9.REQUESTS]: T.A,
        [N.u9.ACTIVITY]: v.A,
        [N.u9.CONTENT_AND_SOCIAL]: E.A,
        [N.u9.DATA_AND_PRIVACY]: f.A,
    };

function L() {
    return (0, i.jsx)(c.BJc, {
        justify: "center",
        align: "center",
        className: G.g4,
        children: (0, i.jsx)(c.y$y, {}),
    });
}

function k(e) {
    let { section: t, handleItemSelect: n } = e,
        s = (0, S.VT)(),
        l = (0, O.A)();
    return t === N.u9.CONTENT_AND_SOCIAL || t === N.u9.DATA_AND_PRIVACY
        ? null
        : (0, i.jsxs)(c.VQ0, {
              className: G.c5,
              "aria-label": P.intl.string(_.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, i.jsx)(c.VQ0.Item, {
                      className: G.jA,
                      id: N.u9.ACTIVITY,
                      children: P.intl.string(_.default.bdBmqy),
                  }),
                  (0, i.jsxs)(c.VQ0.Item, {
                      className: G.jA,
                      id: N.u9.REQUESTS,
                      "aria-label": P.intl.string(_.default["gVWG+6"]),
                      children: [
                          P.intl.string(_.default["gVWG+6"]),
                          s > 0
                              ? (0, i.jsx)(c.hVq, {
                                    className: G.qS,
                                    count: s,
                                })
                              : null,
                      ],
                  }),
                  l
                      ? (0, i.jsx)(c.VQ0.Item, {
                            className: G.jA,
                            id: N.u9.SETTINGS,
                            children: P.intl.string(P.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}

function w(e) {
    let { theme: t, section: n, handleItemSelect: s } = e,
        l = (0, x.GV)(),
        o = (0, S.VT)();
    return (0, i.jsx)(c.NPJ, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(A.A, {
                className: r()(e, G.ZB),
                scrollable: a.Fr,
                role: "navigation",
                "aria-labelledby": l,
                toolbar: !0,
                children: [
                    (0, i.jsx)(A.A.Icon, {
                        icon: c.nFg,
                        "aria-hidden": !0,
                    }),
                    (0, i.jsx)(A.A.Title, {
                        id: l,
                        children: P.intl.string(_.default.RZqaJn),
                    }),
                    (0, i.jsx)(A.A.Divider, {}),
                    (0, i.jsxs)(c.VQ0, {
                        "aria-label": P.intl.string(_.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: s,
                        children: [
                            (0, i.jsx)(c.VQ0.Item, {
                                id: N.u9.ACTIVITY,
                                className: G.AS,
                                children: P.intl.string(_.default.bdBmqy),
                            }),
                            (0, i.jsxs)(c.VQ0.Item, {
                                id: N.u9.REQUESTS,
                                className: G.AS,
                                "aria-label": P.intl.string(_.default["gVWG+6"]),
                                children: [
                                    P.intl.string(_.default["gVWG+6"]),
                                    o > 0
                                        ? (0, i.jsx)(c.hVq, {
                                              className: G.qS,
                                              count: o,
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}

function V() {
    let e = (0, x.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: s,
            showAgeGateModal: l,
        } = (0, y.j)({
            location: N.MH.SETTINGS,
            onMountEffect: () => {
                j.Ay.initialPageLoad();
            },
        });
    if (l) return null;
    let r = R[n];
    return (0, i.jsxs)("main", {
        className: G.kL,
        "aria-label": P.intl.string(_.default.RZqaJn),
        children: [
            (0, i.jsx)(h.HI, {
                location: P.intl.string(_.default.RZqaJn),
            }),
            (0, i.jsx)(k, {
                section: n,
                handleItemSelect: (e) => {
                    s(e);
                },
            }),
            (0, i.jsx)(c.VQ0.Panel, {
                id: n,
                "aria-labelledby": e,
                className: G.Us,
                children: t ? (0, i.jsx)(L, {}) : (0, i.jsx)(r, {}),
            }),
        ],
    });
}

function M() {
    let { analyticsLocations: e } = (0, g.Ay)(u.A.FAMILY_CENTER),
        t = (0, O.A)(),
        n = (0, o.bG)([b.A], () => b.A.getIsInitialized()),
        l = (0, o.bG)([p.A], () => p.A.theme),
        a = (0, x.GV)(),
        {
            isLoading: A,
            selectedTab: S,
            handleTabChange: E,
            showAgeGateModal: f,
        } = (0, y.j)({
            location: N.MH.SIDENAV,
            onMountEffect: () => {
                d.I(I.BVt.FAMILY_CENTER), !b.A.isLoading() && b.A.canRefetch() && j.Ay.initialPageLoad();
            },
        });
    if (
        (s.useEffect(() => {
            let e = m.dm.getSetting();
            n && t && void 0 === e && m.dm.updateSetting(!0);
        }, [n, t]),
        f)
    )
        return null;
    let v = S !== N.u9.SETTINGS ? S : N.u9.ACTIVITY,
        T = D[v];
    return (0, i.jsx)(g.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: r()(G.kL, G.ei),
            "aria-label": P.intl.string(_.default.RZqaJn),
            children: [
                (0, i.jsx)(h.HI, {
                    location: P.intl.string(_.default.RZqaJn),
                }),
                (0, i.jsx)(w, {
                    theme: l,
                    section: v,
                    handleItemSelect: (e) => {
                        E(e);
                    },
                }),
                (0, i.jsx)(c.VQ0.Panel, {
                    id: v,
                    "aria-labelledby": a,
                    className: G.Om,
                    children: (0, i.jsx)(c.HOs, {
                        children: (0, i.jsx)("div", {
                            className: G.O4,
                            children: A ? (0, i.jsx)(L, {}) : (0, i.jsx)(T, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
