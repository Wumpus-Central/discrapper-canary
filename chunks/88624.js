n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(346951),
    c = n(644744),
    u = n(792423),
    d = n(674985),
    f = n(594174),
    _ = n(843200),
    p = n(388032),
    h = n(133365);
function m() {
    let {
        houseMembership: e,
        isClaimed: t,
        isVerified: n,
    } = (0, o.cj)([f.default, d.Z], () => {
        let e = f.default.getCurrentUser();
        return (
            a()(null != e, "UserSettingsHypeSquad: currentUser cannot be undefined"),
            {
                houseMembership: d.Z.getHouseMembership(),
                isClaimed: e.isClaimed(),
                isVerified: e.verified,
            }
        );
    });
    function i() {
        return null == e ? p.intl.string(p.t.iZowCQ) : p.intl.string(p.t.e7fL7O);
    }
    return (0, r.jsxs)(s.y5t, {
        component: (0, r.jsxs)("div", {
            className: h.intro,
            children: [
                (0, r.jsx)(s.X6q, {
                    variant: "heading-xxl/semibold",
                    className: h.introHeader,
                    children: i(),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-lg/normal",
                    children: p.intl.string(p.t["6FaVFB"]),
                }),
            ],
        }),
        children: [
            (0, r.jsx)(_.Z, {
                className: h.verificationNotice,
                unclaimedNotice: p.intl.string(p.t.vZU8Ki),
                unverifiedNotice: p.intl.string(p.t.T7TYEB),
            }),
            (0, r.jsx)(c.Z, {
                houseMembership: e,
                isClaimed: t,
                isVerified: n,
            }),
            (0, r.jsx)(l.Z, {}),
            (0, r.jsx)(u.Z, { isHypeSquadOnlineMember: null != e }),
        ],
    });
}
