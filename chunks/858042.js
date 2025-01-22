r.d(n, {
    M: function () {
        return s;
    }
});
var i = r(200651),
    a = r(481060),
    o = r(388032);
function s(e) {
    let { applicationId: n, viewId: s, showOutdatedInfoOption: l = !0 } = e;
    if (null == n) return null;
    let u = () =>
        (0, a.openModalLazy)(async () => {
            let { default: e } = await r.e('46923').then(r.bind(r, 55396));
            return (r) =>
                (0, i.jsx)(e, {
                    showOutdatedInfoOption: l,
                    applicationId: n,
                    viewId: s,
                    ...r
                });
        });
    return (0, i.jsx)(a.MenuItem, {
        id: 'game-profile-something-wrong',
        label: o.intl.string(o.t.qP2cXV),
        action: u
    });
}
