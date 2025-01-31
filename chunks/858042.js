n.d(t, { M: () => s });
var i = n(200651),
    r = n(481060),
    a = n(388032);
function s(e) {
    let { applicationId: t, viewId: s, showOutdatedInfoOption: o = !0 } = e;
    if (null == t) return null;
    let l = () =>
        (0, r.ZDy)(async () => {
            let { default: e } = await n.e('46923').then(n.bind(n, 55396));
            return (n) =>
                (0, i.jsx)(e, {
                    showOutdatedInfoOption: o,
                    applicationId: t,
                    viewId: s,
                    ...n
                });
        });
    return (0, i.jsx)(r.sNh, {
        id: 'game-profile-something-wrong',
        label: a.intl.string(a.t.qP2cXV),
        action: l
    });
}
