n.d(t, {
    A: () => G,
    p: () => U,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607399),
    l = n(417597),
    c = n(397927),
    u = n(944791),
    d = n(793574),
    f = n(688810),
    p = n(726249),
    _ = n(915089),
    h = n(742589),
    m = n(544028),
    g = n(253932),
    E = n(899847),
    b = n(695515),
    y = n(945276),
    O = n(834981),
    A = n(102615),
    v = n(246109),
    S = n(452141),
    I = n(888772),
    T = n(614749),
    C = n(768985),
    N = n(191627),
    R = n(652215),
    w = n(842130),
    P = n(985018),
    D = n(914280);
let x = {
        [N.u9.REQUESTS]: I.A,
        [N.u9.ACTIVITY]: S.A,
        [N.u9.SETTINGS]: T.A,
        [N.u9.CONTENT_AND_SOCIAL]: A.A,
        [N.u9.DATA_AND_PRIVACY]: v.A,
    },
    L = {
        [N.u9.REQUESTS]: I.A,
        [N.u9.ACTIVITY]: S.A,
        [N.u9.CONTENT_AND_SOCIAL]: A.A,
        [N.u9.DATA_AND_PRIVACY]: v.A,
    };

function j() {
    return (0, r.jsx)(c.BJc, {
        justify: "center",
        align: "center",
        className: D.g4,
        children: (0, r.jsx)(c.y$y, {}),
    });
}

function M(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, O.VT)(),
        a = (0, y.A)();
    return t === N.u9.CONTENT_AND_SOCIAL || t === N.u9.DATA_AND_PRIVACY
        ? null
        : (0, r.jsxs)(c.VQ0, {
              className: D.c5,
              "aria-label": P.intl.string(w.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, r.jsx)(c.VQ0.Item, {
                      className: D.jA,
                      id: N.u9.ACTIVITY,
                      children: P.intl.string(w.default.bdBmqy),
                  }),
                  (0, r.jsxs)(c.VQ0.Item, {
                      className: D.jA,
                      id: N.u9.REQUESTS,
                      "aria-label": P.intl.string(w.default["gVWG+6"]),
                      children: [
                          P.intl.string(w.default["gVWG+6"]),
                          i > 0
                              ? (0, r.jsx)(c.hVq, {
                                    className: D.qS,
                                    count: i,
                                })
                              : null,
                      ],
                  }),
                  a
                      ? (0, r.jsx)(c.VQ0.Item, {
                            className: D.jA,
                            id: N.u9.SETTINGS,
                            children: P.intl.string(P.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}

function k(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        a = (0, _.GV)(),
        l = (0, O.VT)();
    return (0, r.jsx)(c.NPJ, {
        theme: t,
        children: (e) =>
            (0, r.jsxs)(h.A, {
                className: s()(e, D.ZB),
                scrollable: o.Fr,
                role: "navigation",
                "aria-labelledby": a,
                toolbar: !0,
                children: [
                    (0, r.jsx)(h.A.Icon, {
                        icon: c.nFg,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(h.A.Title, {
                        id: a,
                        children: P.intl.string(w.default.RZqaJn),
                    }),
                    (0, r.jsx)(h.A.Divider, {}),
                    (0, r.jsxs)(c.VQ0, {
                        "aria-label": P.intl.string(w.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, r.jsx)(c.VQ0.Item, {
                                id: N.u9.ACTIVITY,
                                className: D.AS,
                                children: P.intl.string(w.default.bdBmqy),
                            }),
                            (0, r.jsxs)(c.VQ0.Item, {
                                id: N.u9.REQUESTS,
                                className: D.AS,
                                "aria-label": P.intl.string(w.default["gVWG+6"]),
                                children: [
                                    P.intl.string(w.default["gVWG+6"]),
                                    l > 0
                                        ? (0, r.jsx)(c.hVq, {
                                              className: D.qS,
                                              count: l,
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

function U() {
    let e = (0, _.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: i,
            showAgeGateModal: a,
        } = (0, C.j)({
            location: N.MH.SETTINGS,
            onMountEffect: () => {
                E.Ay.initialPageLoad();
            },
        }),
        s = (e) => {
            i(e);
        };
    if (a) return null;
    let o = x[n];
    return (0, r.jsxs)("main", {
        className: D.kL,
        "aria-label": P.intl.string(w.default.RZqaJn),
        children: [
            (0, r.jsx)(p.HI, {
                location: P.intl.string(w.default.RZqaJn),
            }),
            (0, r.jsx)(M, {
                section: n,
                handleItemSelect: s,
            }),
            (0, r.jsx)(c.VQ0.Panel, {
                id: n,
                "aria-labelledby": e,
                className: D.Us,
                children: t ? (0, r.jsx)(j, {}) : (0, r.jsx)(o, {}),
            }),
        ],
    });
}

function G() {
    let { analyticsLocations: e } = (0, f.Ay)(d.A.FAMILY_CENTER),
        t = (0, y.A)(),
        n = (0, l.bG)([b.A], () => b.A.getIsInitialized()),
        a = (0, l.bG)([m.A], () => m.A.theme),
        o = (0, _.GV)(),
        {
            isLoading: h,
            selectedTab: O,
            handleTabChange: A,
            showAgeGateModal: v,
        } = (0, C.j)({
            location: N.MH.SIDENAV,
            onMountEffect: () => {
                u.I(R.BVt.FAMILY_CENTER), !b.A.isLoading() && b.A.canRefetch() && E.Ay.initialPageLoad();
            },
        });
    i.useEffect(() => {
        let e = g.dm.getSetting();
        n && t && void 0 === e && g.dm.updateSetting(!0);
    }, [n, t]);
    let S = (e) => {
        A(e);
    };
    if (v) return null;
    let I = O !== N.u9.SETTINGS ? O : N.u9.ACTIVITY,
        T = L[I];
    return (0, r.jsx)(f.f5, {
        value: e,
        children: (0, r.jsxs)("main", {
            className: s()(D.kL, D.ei),
            "aria-label": P.intl.string(w.default.RZqaJn),
            children: [
                (0, r.jsx)(p.HI, {
                    location: P.intl.string(w.default.RZqaJn),
                }),
                (0, r.jsx)(k, {
                    theme: a,
                    section: I,
                    handleItemSelect: S,
                }),
                (0, r.jsx)(c.VQ0.Panel, {
                    id: I,
                    "aria-labelledby": o,
                    className: D.Om,
                    children: (0, r.jsx)(c.HOs, {
                        children: (0, r.jsx)("div", {
                            className: D.O4,
                            children: h ? (0, r.jsx)(j, {}) : (0, r.jsx)(T, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
