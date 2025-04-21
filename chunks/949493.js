n.d(t, { Z: () => D });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(921801),
    l = n(663389),
    a = n(10298),
    o = n(526156),
    c = n(899182),
    d = n(901151),
    u = n(24400),
    m = n(122897),
    g = n(821035),
    p = n(694569),
    h = n(394655),
    f = n(540204),
    b = n(546957),
    _ = n(893996),
    x = n(273927),
    E = n(864239),
    j = n(190014),
    C = n(301812),
    O = n(988043),
    S = n(919539),
    v = n(726985),
    T = n(583139),
    I = n(981631),
    N = n(388032);
let y = () =>
        (0, i.jsx)(_.Z, {
            title: N.intl.string(N.t['y62Z/f']),
            webSetting: v.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: (0, i.jsxs)(b.Z, {
                children: [
                    (0, i.jsx)(s.F, {
                        setting: v.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                        children: (0, i.jsx)(f.Z, {})
                    }),
                    (0, i.jsx)(O.Z, {}),
                    (0, i.jsx)(S.Z, {}),
                    (0, i.jsx)(C.Z, {}),
                    (0, i.jsx)(j.Z, {})
                ]
            })
        }),
    A = () =>
        (0, i.jsxs)(_.Z, {
            title: N.intl.string(N.t.xVRG4O),
            webSetting: v.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [(0, i.jsx)(g.P, {}), (0, i.jsx)(m.Z, {}), (0, i.jsx)(h.Z, {}), (0, i.jsx)(u.Z, {}), (0, i.jsx)(c.Z, {}), (0, i.jsx)(E.Z, {})]
        }),
    P = () =>
        (0, i.jsxs)(_.Z, {
            title: N.intl.string(N.t['1Qn8iY']),
            webSetting: v.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, i.jsx)(p.Z, {}), (0, i.jsx)(x.ZP, {})]
        }),
    R = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(A, {}), (0, i.jsx)(y, {}), (0, i.jsx)(P, {})]
        });
function D() {
    let e = (0, r.e7)([l.Z], () => l.Z.getSubsection()),
        t = [
            {
                title: N.intl.string(N.t['/7xJCA']),
                component: R,
                setting: v.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            {
                title: N.intl.string(N.t.h1hqj4),
                component: d.Z,
                setting: v.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            }
        ];
    return (0, i.jsx)(a.N, {
        header: N.intl.string(N.t['+o1pDQ']),
        children: (0, i.jsx)(o.Z, {
            parentSetting: v.s6.CONTENT_SOCIAL,
            settingsSection: I.oAB.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === T.C ? 1 : void 0
        })
    });
}
