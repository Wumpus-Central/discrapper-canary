n.d(t, { Z: () => x });
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
    _ = n(394655),
    m = n(540204),
    h = n(893996),
    g = n(273927),
    E = n(211466),
    b = n(864239),
    y = n(190014),
    O = n(301812),
    v = n(988043),
    S = n(919539),
    I = n(441007),
    T = n(726985),
    A = n(583139),
    C = n(981631),
    N = n(388032);
let P = () =>
        (0, r.jsxs)(h.Z, {
            title: N.intl.string(N.t.xVRG4P),
            webSetting: T.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [
                (0, r.jsx)(E.n, {}),
                (0, r.jsx)(f.Z, {}),
                (0, r.jsx)(_.Z, {}),
                (0, r.jsx)(d.Z, {}),
                (0, r.jsx)(c.Z, {}),
                (0, r.jsx)(b.Z, {}),
            ],
        }),
    R = () =>
        (0, r.jsxs)(h.Z, {
            title: N.intl.string(N.t["y62Z/d"]),
            webSetting: T.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: [
                (0, r.jsx)(a.F, {
                    setting: T.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                    children: (0, r.jsx)(m.Z, {}),
                }),
                (0, r.jsx)(v.Z, {}),
                (0, r.jsx)(S.Z, {}),
                (0, r.jsx)(O.Z, {}),
                (0, r.jsx)(y.Z, {}),
            ],
        }),
    w = () =>
        (0, r.jsxs)(h.Z, {
            title: N.intl.string(N.t["1Qn8iV"]),
            webSetting: T.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(g.ZP, {})],
        }),
    D = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(P, {}), (0, r.jsx)(R, {}), (0, r.jsx)(w, {})],
        });
function x() {
    let e = (0, i.e7)([o.Z], () => o.Z.getSubsection()),
        t = [
            {
                title: N.intl.string(N.t["/7xJCF"]),
                component: () => (0, r.jsx)(D, {}),
                setting: T.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            {
                title: N.intl.string(N.t.YpCiMt),
                component: u.Z,
                setting: T.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
        ];
    return (0, r.jsx)(s.N, {
        header: N.intl.string(N.t["+o1pDZ"]),
        notice: (0, r.jsx)(I.Z, { page: I.N.CONTENT_AND_SOCIAL }),
        children: (0, r.jsx)(l.Z, {
            parentSetting: T.s6.CONTENT_SOCIAL,
            settingsSection: C.oAB.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === A.C ? 1 : void 0,
        }),
    });
}
