n.d(t, { Z: () => k });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(470734),
    l = n(921801),
    a = n(663389),
    o = n(10298),
    c = n(526156),
    d = n(924356),
    u = n(901151),
    m = n(4188),
    g = n(24400),
    p = n(122897),
    h = n(821035),
    f = n(694569),
    b = n(394655),
    x = n(540204),
    _ = n(546957),
    E = n(893996),
    j = n(273927),
    C = n(211466),
    O = n(864239),
    S = n(190014),
    v = n(301812),
    T = n(988043),
    N = n(919539),
    I = n(726985),
    y = n(583139),
    A = n(981631),
    P = n(388032);
let R = () =>
        (0, i.jsx)(E.Z, {
            title: P.intl.string(P.t['y62Z/f']),
            webSetting: I.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: (0, i.jsxs)(_.Z, {
                children: [
                    (0, i.jsx)(l.F, {
                        setting: I.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                        children: (0, i.jsx)(x.Z, {})
                    }),
                    (0, i.jsx)(T.Z, {}),
                    (0, i.jsx)(N.Z, {}),
                    (0, i.jsx)(v.Z, {}),
                    (0, i.jsx)(S.Z, {})
                ]
            })
        }),
    D = (e) => {
        let { isGoreFilterEligible: t } = e;
        return (0, i.jsxs)(E.Z, {
            title: P.intl.string(P.t.xVRG4O),
            webSetting: I.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [t ? (0, i.jsx)(C.n, {}) : (0, i.jsx)(h.P, {}), (0, i.jsx)(p.Z, {}), (0, i.jsx)(b.Z, {}), (0, i.jsx)(g.Z, {}), (0, i.jsx)(d.Z, {}), (0, i.jsx)(O.Z, {})]
        });
    },
    Z = () =>
        (0, i.jsxs)(E.Z, {
            title: P.intl.string(P.t['1Qn8iY']),
            webSetting: I.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, i.jsx)(f.Z, {}), (0, i.jsx)(j.ZP, {})]
        }),
    w = (e) => {
        let { isGoreFilterEligible: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(D, { isGoreFilterEligible: t }), (0, i.jsx)(R, {}), (0, i.jsx)(Z, {})]
        });
    };
function k() {
    let e = (0, r.e7)([a.Z], () => a.Z.getSubsection()),
        t = (0, s.pn)('UserSettingsContentAndSocial'),
        n = [
            {
                title: P.intl.string(P.t['/7xJCA']),
                component: () => (0, i.jsx)(w, { isGoreFilterEligible: t }),
                setting: I.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            {
                title: P.intl.string(P.t.h1hqj4),
                component: u.Z,
                setting: I.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            }
        ];
    return (0, i.jsx)(o.N, {
        header: P.intl.string(P.t['+o1pDQ']),
        notice: (0, i.jsx)(m.c, {}),
        children: (0, i.jsx)(c.Z, {
            parentSetting: I.s6.CONTENT_SOCIAL,
            settingsSection: A.oAB.CONTENT_AND_SOCIAL,
            tabs: n,
            defaultTabIndex: e === y.C ? 1 : void 0
        })
    });
}
