n.d(t, { Z: () => D });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(921801),
    a = n(663389),
    l = n(10298),
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
    N = n(273927),
    x = n(864239),
    E = n(190014),
    j = n(301812),
    C = n(988043),
    O = n(919539),
    S = n(726985),
    v = n(583139),
    T = n(981631),
    I = n(388032);
let y = () =>
        (0, r.jsx)(_.Z, {
            title: I.NW.string(I.t['y62Z/f']),
            webSetting: S.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: (0, r.jsxs)(b.Z, {
                children: [
                    (0, r.jsx)(s.F, {
                        setting: S.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                        children: (0, r.jsx)(f.Z, {})
                    }),
                    (0, r.jsx)(C.Z, {}),
                    (0, r.jsx)(O.Z, {}),
                    (0, r.jsx)(j.Z, {}),
                    (0, r.jsx)(E.Z, {})
                ]
            })
        }),
    A = () =>
        (0, r.jsxs)(_.Z, {
            title: I.NW.string(I.t.xVRG4O),
            webSetting: S.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [(0, r.jsx)(g.P, {}), (0, r.jsx)(m.Z, {}), (0, r.jsx)(h.Z, {}), (0, r.jsx)(u.Z, {}), (0, r.jsx)(c.Z, {}), (0, r.jsx)(x.Z, {})]
        }),
    P = () =>
        (0, r.jsxs)(_.Z, {
            title: I.NW.string(I.t['1Qn8iY']),
            webSetting: S.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(N.ZP, {})]
        }),
    R = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(A, {}), (0, r.jsx)(y, {}), (0, r.jsx)(P, {})]
        });
function D() {
    let e = (0, i.e7)([a.Z], () => a.Z.getSubsection()),
        t = [
            {
                title: I.NW.string(I.t['/7xJCA']),
                component: R,
                setting: S.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            {
                title: I.NW.string(I.t.h1hqj4),
                component: d.Z,
                setting: S.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            }
        ];
    return (0, r.jsx)(l.N, {
        header: I.NW.string(I.t['+o1pDQ']),
        children: (0, r.jsx)(o.Z, {
            parentSetting: S.s6.CONTENT_SOCIAL,
            settingsSection: T.oAB.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === v.C ? 1 : void 0
        })
    });
}
