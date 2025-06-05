n.d(t, { Z: () => w });
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
    m = n(24400),
    g = n(122897),
    p = n(821035),
    h = n(694569),
    f = n(394655),
    b = n(540204),
    _ = n(546957),
    x = n(893996),
    E = n(273927),
    C = n(211466),
    j = n(864239),
    O = n(190014),
    S = n(301812),
    v = n(988043),
    T = n(919539),
    I = n(726985),
    N = n(583139),
    y = n(981631),
    A = n(388032);
let P = () =>
        (0, i.jsx)(x.Z, {
            title: A.intl.string(A.t['y62Z/f']),
            webSetting: I.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: (0, i.jsxs)(_.Z, {
                children: [
                    (0, i.jsx)(l.F, {
                        setting: I.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                        children: (0, i.jsx)(b.Z, {})
                    }),
                    (0, i.jsx)(v.Z, {}),
                    (0, i.jsx)(T.Z, {}),
                    (0, i.jsx)(S.Z, {}),
                    (0, i.jsx)(O.Z, {})
                ]
            })
        }),
    R = (e) => {
        let { isGoreFilterEligible: t } = e;
        return (0, i.jsxs)(x.Z, {
            title: A.intl.string(A.t.xVRG4O),
            webSetting: I.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [t ? (0, i.jsx)(C.n, {}) : (0, i.jsx)(p.P, {}), (0, i.jsx)(g.Z, {}), (0, i.jsx)(f.Z, {}), (0, i.jsx)(m.Z, {}), (0, i.jsx)(d.Z, {}), (0, i.jsx)(j.Z, {})]
        });
    },
    D = () =>
        (0, i.jsxs)(x.Z, {
            title: A.intl.string(A.t['1Qn8iY']),
            webSetting: I.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, i.jsx)(h.Z, {}), (0, i.jsx)(E.ZP, {})]
        }),
    Z = (e) => {
        let { isGoreFilterEligible: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(R, { isGoreFilterEligible: t }), (0, i.jsx)(P, {}), (0, i.jsx)(D, {})]
        });
    };
function w() {
    let e = (0, r.e7)([a.Z], () => a.Z.getSubsection()),
        t = (0, s.pn)('UserSettingsContentAndSocial'),
        n = [
            {
                title: A.intl.string(A.t['/7xJCA']),
                component: () => (0, i.jsx)(Z, { isGoreFilterEligible: t }),
                setting: I.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            {
                title: A.intl.string(A.t.h1hqj4),
                component: u.Z,
                setting: I.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            }
        ];
    return (0, i.jsx)(o.N, {
        header: A.intl.string(A.t['+o1pDQ']),
        children: (0, i.jsx)(c.Z, {
            parentSetting: I.s6.CONTENT_SOCIAL,
            settingsSection: y.oAB.CONTENT_AND_SOCIAL,
            tabs: n,
            defaultTabIndex: e === N.C ? 1 : void 0
        })
    });
}
