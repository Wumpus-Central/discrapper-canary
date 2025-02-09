n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var s = n(512722),
    l = n.n(s),
    r = n(442837),
    a = n(481060),
    o = n(346951),
    c = n(644744),
    d = n(792423),
    u = n(674985),
    h = n(594174),
    m = n(843200),
    g = n(388032),
    x = n(840110);
function _() {
    let {
        houseMembership: e,
        isClaimed: t,
        isVerified: n
    } = (0, r.cj)([h.default, u.Z], () => {
        let e = h.default.getCurrentUser();
        return (
            l()(null != e, 'UserSettingsHypeSquad: currentUser cannot be undefined'),
            {
                houseMembership: u.Z.getHouseMembership(),
                isClaimed: e.isClaimed(),
                isVerified: e.verified
            }
        );
    });
    return (0, i.jsxs)(a.y5t, {
        component: (0, i.jsxs)('div', {
            className: x.intro,
            children: [
                (0, i.jsx)(a.X6q, {
                    variant: 'heading-xxl/semibold',
                    className: x.introHeader,
                    children: null == e ? g.intl.string(g.t.iZowCQ) : g.intl.string(g.t.e7fL7O)
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-lg/normal',
                    children: g.intl.string(g.t['6FaVFB'])
                })
            ]
        }),
        children: [
            (0, i.jsx)(m.Z, {
                className: x.verificationNotice,
                unclaimedNotice: g.intl.string(g.t.vZU8Ki),
                unverifiedNotice: g.intl.string(g.t.T7TYEB)
            }),
            (0, i.jsx)(c.Z, {
                houseMembership: e,
                isClaimed: t,
                isVerified: n
            }),
            (0, i.jsx)(o.Z, {}),
            (0, i.jsx)(d.Z, { isHypeSquadOnlineMember: null != e })
        ]
    });
}
