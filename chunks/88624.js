n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(512722),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(346951),
    c = n(644744),
    d = n(792423),
    u = n(674985),
    m = n(594174),
    g = n(843200),
    p = n(388032),
    h = n(647573);
function f() {
    let {
        houseMembership: e,
        isClaimed: t,
        isVerified: n
    } = (0, a.cj)([m.default, u.Z], () => {
        let e = m.default.getCurrentUser();
        return (
            s()(null != e, 'UserSettingsHypeSquad: currentUser cannot be undefined'),
            {
                houseMembership: u.Z.getHouseMembership(),
                isClaimed: e.isClaimed(),
                isVerified: e.verified
            }
        );
    });
    return (0, r.jsxs)(l.y5t, {
        component: (0, r.jsxs)('div', {
            className: h.intro,
            children: [
                (0, r.jsx)(l.X6q, {
                    variant: 'heading-xxl/semibold',
                    className: h.introHeader,
                    children: null == e ? p.NW.string(p.t.iZowCQ) : p.NW.string(p.t.e7fL7O)
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-lg/normal',
                    children: p.NW.string(p.t['6FaVFB'])
                })
            ]
        }),
        children: [
            (0, r.jsx)(g.Z, {
                className: h.verificationNotice,
                unclaimedNotice: p.NW.string(p.t.vZU8Ki),
                unverifiedNotice: p.NW.string(p.t.T7TYEB)
            }),
            (0, r.jsx)(c.Z, {
                houseMembership: e,
                isClaimed: t,
                isVerified: n
            }),
            (0, r.jsx)(o.Z, {}),
            (0, r.jsx)(d.Z, { isHypeSquadOnlineMember: null != e })
        ]
    });
}
