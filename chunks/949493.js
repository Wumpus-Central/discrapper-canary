n.d(t, { Z: () => L });
var r = n(951288);
n(647438);
var i = n(442837),
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
    g = n(546957),
    E = n(893996),
    b = n(273927),
    y = n(211466),
    O = n(864239),
    v = n(190014),
    I = n(301812),
    T = n(988043),
    S = n(919539),
    A = n(726985),
    C = n(583139),
    N = n(981631),
    R = n(388032);
let P = () =>
        (0, r.jsx)(E.Z, {
            title: R.intl.string(R.t["y62Z/f"]),
            webSetting: A.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: (0, r.jsxs)(g.Z, {
                children: [
                    (0, r.jsx)(a.F, {
                        setting: A.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                        children: (0, r.jsx)(m.Z, {}),
                    }),
                    (0, r.jsx)(T.Z, {}),
                    (0, r.jsx)(S.Z, {}),
                    (0, r.jsx)(I.Z, {}),
                    (0, r.jsx)(v.Z, {}),
                ],
            }),
        }),
    w = () =>
        (0, r.jsxs)(E.Z, {
            title: R.intl.string(R.t.xVRG4O),
            webSetting: A.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [
                (0, r.jsx)(y.n, {}),
                (0, r.jsx)(_.Z, {}),
                (0, r.jsx)(h.Z, {}),
                (0, r.jsx)(f.Z, {}),
                (0, r.jsx)(c.Z, {}),
                (0, r.jsx)(O.Z, {}),
            ],
        }),
    D = () =>
        (0, r.jsxs)(E.Z, {
            title: R.intl.string(R.t["1Qn8iY"]),
            webSetting: A.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(b.ZP, {})],
        }),
    x = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(w, {}), (0, r.jsx)(P, {}), (0, r.jsx)(D, {})],
        });
function L() {
    let e = (0, i.e7)([o.Z], () => o.Z.getSubsection()),
        t = [
            {
                title: R.intl.string(R.t["/7xJCA"]),
                component: () => (0, r.jsx)(x, {}),
                setting: A.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            {
                title: R.intl.string(R.t.YpCiMj),
                component: u.Z,
                setting: A.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
        ];
    return (0, r.jsx)(s.N, {
        header: R.intl.string(R.t["+o1pDQ"]),
        notice: (0, r.jsx)(d.I, {}),
        children: (0, r.jsx)(l.Z, {
            parentSetting: A.s6.CONTENT_SOCIAL,
            settingsSection: N.oAB.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === C.C ? 1 : void 0,
        }),
    });
}
