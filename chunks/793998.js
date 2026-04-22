l.d(t, { A: () => Y, p: () => q });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(607399),
    d = l(417597),
    c = l(331322),
    u = l(289873),
    o = l(761508),
    x = l(777666);
if (21552 == l.j) var h = l(43990);
if (21552 == l.j) var m = l(177953);
if (21552 == l.j) var g = l(573613);
var j = l(944791),
    A = l(793574),
    v = l(688810),
    f = l(726249),
    E = l(915089),
    N = l(742589),
    p = l(544028),
    T = l(253932),
    S = l(178241),
    y = l(899847),
    C = l(695515),
    _ = l(438732),
    I = l(809697),
    b = l(834981),
    R = l(102615),
    L = l(246109),
    D = l(452141),
    k = l(888772),
    M = l(614749),
    U = l(768985),
    w = l(191627),
    O = l(652215),
    G = l(602339),
    P = l(985018),
    V = l(556493);
let F = {
        [w.u9.REQUESTS]: k.A,
        [w.u9.ACTIVITY]: D.A,
        [w.u9.SETTINGS]: M.A,
        [w.u9.CONTENT_AND_SOCIAL]: R.A,
        [w.u9.DATA_AND_PRIVACY]: L.A,
        [w.u9.SCREEN_TIME_CONTROLS]: M.A,
    },
    H = { [w.u9.REQUESTS]: k.A, [w.u9.ACTIVITY]: D.A, [w.u9.CONTENT_AND_SOCIAL]: R.A, [w.u9.DATA_AND_PRIVACY]: L.A };
function z() {
    return (0, n.jsx)(c.B, { justify: "center", align: "center", className: V.g4, children: (0, n.jsx)(u.y, {}) });
}
function Z(e) {
    let { section: t, handleItemSelect: l } = e,
        i = (0, b.VT)(),
        s = (0, _.A)();
    return [w.u9.CONTENT_AND_SOCIAL, w.u9.DATA_AND_PRIVACY, w.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, n.jsxs)(o.V, {
              className: V.c5,
              "aria-label": P.intl.string(G.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: l,
              children: [
                  (0, n.jsx)(o.V.Item, {
                      className: V.jA,
                      id: w.u9.ACTIVITY,
                      children: P.intl.string(G.default.bdBmqy),
                  }),
                  (0, n.jsxs)(o.V.Item, {
                      className: V.jA,
                      id: w.u9.REQUESTS,
                      "aria-label": P.intl.string(G.default["gVWG+6"]),
                      children: [
                          P.intl.string(G.default["gVWG+6"]),
                          i > 0 ? (0, n.jsx)(x.hV, { className: V.qS, count: i }) : null,
                      ],
                  }),
                  s
                      ? (0, n.jsx)(o.V.Item, {
                            className: V.jA,
                            id: w.u9.SETTINGS,
                            children: P.intl.string(P.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function B(e) {
    let { theme: t, section: l, handleItemSelect: i } = e,
        s = (0, E.GV)(),
        d = (0, b.VT)();
    return (0, n.jsx)(h.N, {
        theme: t,
        children: (e) =>
            (0, n.jsxs)(N.A, {
                className: a()(e, V.ZB),
                scrollable: r.Fr,
                role: "navigation",
                "aria-labelledby": s,
                toolbar: !0,
                children: [
                    (0, n.jsx)(N.A.Icon, { icon: m.n, "aria-hidden": !0 }),
                    (0, n.jsx)(N.A.Title, { id: s, children: P.intl.string(G.default.RZqaJn) }),
                    (0, n.jsx)(N.A.Divider, {}),
                    (0, n.jsxs)(o.V, {
                        "aria-label": P.intl.string(G.default.RZqaJn),
                        selectedItem: l,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, n.jsx)(o.V.Item, {
                                id: w.u9.ACTIVITY,
                                className: V.AS,
                                children: P.intl.string(G.default.bdBmqy),
                            }),
                            (0, n.jsxs)(o.V.Item, {
                                id: w.u9.REQUESTS,
                                className: V.AS,
                                "aria-label": P.intl.string(G.default["gVWG+6"]),
                                children: [
                                    P.intl.string(G.default["gVWG+6"]),
                                    d > 0 ? (0, n.jsx)(x.hV, { className: V.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function q() {
    let e = (0, E.GV)(),
        {
            isLoading: t,
            selectedTab: l,
            handleTabChange: s,
            showAgeGateModal: a,
        } = (0, U.j)({
            location: w.MH.SETTINGS,
            onMountEffect: () => {
                y.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            (0, S._)(I.q[l]);
        }, [l]),
        a)
    )
        return null;
    let r = F[l];
    return (0, n.jsxs)("main", {
        className: V.kL,
        "aria-label": P.intl.string(G.default.RZqaJn),
        children: [
            (0, n.jsx)(f.HI, { location: P.intl.string(G.default.RZqaJn) }),
            (0, n.jsx)(Z, {
                section: l,
                handleItemSelect: (e) => {
                    s(e);
                },
            }),
            (0, n.jsx)(o.V.Panel, {
                id: l,
                "aria-labelledby": e,
                className: V.Us,
                children: t ? (0, n.jsx)(z, {}) : (0, n.jsx)(r, {}),
            }),
        ],
    });
}
function Y() {
    let { analyticsLocations: e } = (0, v.Ay)(A.A.FAMILY_CENTER),
        t = (0, _.A)(),
        l = (0, d.bG)([C.A], () => C.A.getIsInitialized()),
        s = (0, d.bG)([p.A], () => p.A.theme),
        r = (0, E.GV)(),
        {
            isLoading: c,
            selectedTab: u,
            handleTabChange: x,
            showAgeGateModal: h,
        } = (0, U.j)({
            location: w.MH.SIDENAV,
            onMountEffect: () => {
                j.I(O.BVt.FAMILY_CENTER), !C.A.isLoading() && C.A.canRefetch() && y.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            let e = T.dm.getSetting();
            l && t && void 0 === e && T.dm.updateSetting(!0);
        }, [l, t]),
        h)
    )
        return null;
    let m = u !== w.u9.SETTINGS && u !== w.u9.SCREEN_TIME_CONTROLS ? u : w.u9.ACTIVITY,
        N = H[m];
    return (0, n.jsx)(v.f5, {
        value: e,
        children: (0, n.jsxs)("main", {
            className: a()(V.kL, V.ei),
            "aria-label": P.intl.string(G.default.RZqaJn),
            children: [
                (0, n.jsx)(f.HI, { location: P.intl.string(G.default.RZqaJn) }),
                (0, n.jsx)(B, {
                    theme: s,
                    section: m,
                    handleItemSelect: (e) => {
                        x(e);
                    },
                }),
                (0, n.jsx)(o.V.Panel, {
                    id: m,
                    "aria-labelledby": r,
                    className: V.Om,
                    children: (0, n.jsx)(g.Ip, {
                        children: (0, n.jsx)("div", {
                            className: V.O4,
                            children: c ? (0, n.jsx)(z, {}) : (0, n.jsx)(N, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
