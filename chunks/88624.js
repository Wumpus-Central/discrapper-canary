n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    a = n(442837),
    l = n(481060),
    o = n(346951),
    c = n(644744),
    d = n(792423),
    u = n(674985),
    m = n(594174),
    g = n(843200),
    h = n(388032),
    p = n(906405);
function x() {
    let {
        houseMembership: e,
        isClaimed: t,
        isVerified: n
    } = (0, a.cj)([m.default, u.Z], () => {
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
    return (0, i.jsxs)(l.HeadingLevel, {
        component: (0, i.jsxs)('div', {
            className: p.intro,
            children: [
                (0, i.jsx)(l.Heading, {
                    variant: 'heading-xxl/semibold',
                    className: p.introHeader,
                    children: null == e ? h.intl.string(h.t.iZowCQ) : h.intl.string(h.t.e7fL7O)
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-lg/normal',
                    children: h.intl.string(h.t['6FaVFB'])
                })
            ]
        }),
        children: [
            (0, i.jsx)(g.Z, {
                className: p.verificationNotice,
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
