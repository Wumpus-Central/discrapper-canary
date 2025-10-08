n.d(t, { Z: () => L });
var r = n(951288),
    i = n(442837),
    a = n(921801),
    o = n(663389),
    s = n(10298),
    l = n(526156),
    c = n(924356),
    u = n(901151),
    d = n(931461),
    f = n(24400),
    _ = n(122897),
    p = n(694569),
    h = n(394655),
    m = n(540204),
    g = n(893996),
    E = n(273927),
    b = n(211466),
    y = n(864239),
    O = n(190014),
    v = n(301812),
    I = n(988043),
    T = n(919539),
    S = n(726985),
    A = n(583139),
    C = n(981631),
    N = n(388032);
let R = () =>
        (0, r.jsxs)(g.Z, {
            title: N.intl.string(N.t.xVRG4O),
            webSetting: S.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [
                (0, r.jsx)(b.n, {}),
                (0, r.jsx)(_.Z, {}),
                (0, r.jsx)(h.Z, {}),
                (0, r.jsx)(f.Z, {}),
                (0, r.jsx)(c.Z, {}),
                (0, r.jsx)(y.Z, {}),
            ],
        }),
    P = () =>
        (0, r.jsxs)(g.Z, {
            title: N.intl.string(N.t["y62Z/f"]),
            webSetting: S.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: [
                (0, r.jsx)(a.F, {
                    setting: S.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                    children: (0, r.jsx)(m.Z, {}),
                }),
                (0, r.jsx)(I.Z, {}),
                (0, r.jsx)(T.Z, {}),
                (0, r.jsx)(v.Z, {}),
                (0, r.jsx)(O.Z, {}),
            ],
        }),
    w = () =>
        (0, r.jsxs)(g.Z, {
            title: N.intl.string(N.t["1Qn8iY"]),
            webSetting: S.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(E.ZP, {})],
        }),
    D = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(R, {}), (0, r.jsx)(P, {}), (0, r.jsx)(w, {})],
        });
function L() {
    let e = (0, i.e7)([o.Z], () => o.Z.getSubsection()),
        t = [
            {
                title: N.intl.string(N.t["/7xJCA"]),
                component: () => (0, r.jsx)(D, {}),
                setting: S.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            {
                title: N.intl.string(N.t.YpCiMj),
                component: u.Z,
                setting: S.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
        ];
    return (0, r.jsx)(s.N, {
        header: N.intl.string(N.t["+o1pDQ"]),
        notice: (0, r.jsx)(d.I, {}),
        children: (0, r.jsx)(l.Z, {
            parentSetting: S.s6.CONTENT_SOCIAL,
            settingsSection: C.oAB.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === A.C ? 1 : void 0,
        }),
    });
}
