n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(346951),
    c = n(644744),
    d = n(792423),
    u = n(674985),
    m = n(594174),
    g = n(843200),
    h = n(388032),
    x = n(212243);
function _() {
    let {
        houseMembership: e,
        isClaimed: t,
        isVerified: n
    } = (0, l.cj)([m.default, u.Z], () => {
        let e = m.default.getCurrentUser();
        return (
            r()(null != e, 'UserSettingsHypeSquad: currentUser cannot be undefined'),
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
                    children: null == e ? h.intl.string(h.t.iZowCQ) : h.intl.string(h.t.e7fL7O)
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-lg/normal',
                    children: h.intl.string(h.t['6FaVFB'])
                })
            ]
        }),
        children: [
            (0, i.jsx)(g.Z, {
                className: x.verificationNotice,
                unclaimedNotice: h.intl.string(h.t.vZU8Ki),
                unverifiedNotice: h.intl.string(h.t.T7TYEB)
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
