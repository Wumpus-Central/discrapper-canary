n.d(t, { Z: () => D });
var r = n(54381),
    i = n(442837),
    a = n(921801),
    o = n(663389),
    s = n(10298),
    l = n(526156),
    c = n(924356),
    u = n(901151),
    d = n(24400),
    f = n(122897),
    p = n(694569),
    _ = n(540204),
    m = n(893996),
    h = n(273927),
    g = n(211466),
    E = n(864239),
    b = n(190014),
    y = n(301812),
    O = n(988043),
    v = n(919539),
    S = n(441007),
    I = n(726985),
    T = n(583139),
    C = n(981631),
    A = n(388032);
let N = () =>
        (0, r.jsxs)(m.Z, {
            title: A.intl.string(A.t.xVRG4P),
            webSetting: I.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [
                (0, r.jsx)(g.n, {}),
                (0, r.jsx)(f.Z, {}),
                (0, r.jsx)(d.Z, {}),
                (0, r.jsx)(c.Z, {}),
                (0, r.jsx)(E.Z, {}),
            ],
        }),
    P = () =>
        (0, r.jsxs)(m.Z, {
            title: A.intl.string(A.t["y62Z/d"]),
            webSetting: I.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: [
                (0, r.jsx)(a.F, {
                    setting: I.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                    children: (0, r.jsx)(_.Z, {}),
                }),
                (0, r.jsx)(O.Z, {}),
                (0, r.jsx)(v.Z, {}),
                (0, r.jsx)(y.Z, {}),
                (0, r.jsx)(b.Z, {}),
            ],
        }),
    R = () =>
        (0, r.jsxs)(m.Z, {
            title: A.intl.string(A.t["1Qn8iV"]),
            webSetting: I.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(h.ZP, {})],
        }),
    w = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(N, {}), (0, r.jsx)(P, {}), (0, r.jsx)(R, {})],
        });
function D() {
    let e = (0, i.e7)([o.Z], () => o.Z.getSubsection()),
        t = [
            {
                title: A.intl.string(A.t["/7xJCF"]),
                component: w,
                setting: I.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            {
                title: A.intl.string(A.t.YpCiMt),
                component: u.Z,
                setting: I.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
        ];
    return (0, r.jsx)(s.N, {
        header: A.intl.string(A.t["+o1pDZ"]),
        notice: (0, r.jsx)(S.Z, { page: S.N.CONTENT_AND_SOCIAL }),
        children: (0, r.jsx)(l.Z, {
            parentSetting: I.s6.CONTENT_SOCIAL,
            settingsSection: C.oAB.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === T.C ? 1 : void 0,
        }),
    });
}
