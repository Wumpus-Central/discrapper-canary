n.d(t, { Z: () => Z });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(921801),
    a = n(663389),
    l = n(10298),
    o = n(526156),
    c = n(924356),
    d = n(901151),
    u = n(4188),
    m = n(24400),
    p = n(122897),
    g = n(694569),
    h = n(394655),
    f = n(540204),
    b = n(546957),
    x = n(893996),
    _ = n(273927),
    j = n(211466),
    C = n(864239),
    E = n(190014),
    O = n(301812),
    v = n(988043),
    S = n(919539),
    T = n(726985),
    N = n(583139),
    I = n(981631),
    y = n(388032);
let A = () =>
        (0, i.jsx)(x.Z, {
            title: y.intl.string(y.t['y62Z/f']),
            webSetting: T.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: (0, i.jsxs)(b.Z, {
                children: [
                    (0, i.jsx)(s.F, {
                        setting: T.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                        children: (0, i.jsx)(f.Z, {})
                    }),
                    (0, i.jsx)(v.Z, {}),
                    (0, i.jsx)(S.Z, {}),
                    (0, i.jsx)(O.Z, {}),
                    (0, i.jsx)(E.Z, {})
                ]
            })
        }),
    P = () =>
        (0, i.jsxs)(x.Z, {
            title: y.intl.string(y.t.xVRG4O),
            webSetting: T.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [(0, i.jsx)(j.n, {}), (0, i.jsx)(p.Z, {}), (0, i.jsx)(h.Z, {}), (0, i.jsx)(m.Z, {}), (0, i.jsx)(c.Z, {}), (0, i.jsx)(C.Z, {})]
        }),
    R = () =>
        (0, i.jsxs)(x.Z, {
            title: y.intl.string(y.t['1Qn8iY']),
            webSetting: T.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, i.jsx)(g.Z, {}), (0, i.jsx)(_.ZP, {})]
        }),
    D = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(P, {}), (0, i.jsx)(A, {}), (0, i.jsx)(R, {})]
        });
function Z() {
    let e = (0, r.e7)([a.Z], () => a.Z.getSubsection()),
        t = [
            {
                title: y.intl.string(y.t['/7xJCA']),
                component: () => (0, i.jsx)(D, {}),
                setting: T.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            {
                title: y.intl.string(y.t.YpCiMj),
                component: d.Z,
                setting: T.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            }
        ];
    return (0, i.jsx)(l.N, {
        header: y.intl.string(y.t['+o1pDQ']),
        notice: (0, i.jsx)(u.c, {}),
        children: (0, i.jsx)(o.Z, {
            parentSetting: T.s6.CONTENT_SOCIAL,
            settingsSection: I.oAB.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === N.C ? 1 : void 0
        })
    });
}
