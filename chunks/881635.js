n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(397927),
    s = n(688810),
    o = n(287809),
    c = n(987144),
    d = n(652215),
    u = n(985018);
function _(e) {
    let { guild: t, analyticsLocation: n, analyticsLocations: _, closeLayer: m, variant: A = "expressive" } = e,
        [E, I] = a.useState(!1),
        { analyticsLocations: T } = (0, s.Ay)(_ ?? []),
        f = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        N = f?.isPremiumGroupMember();
    async function g() {
        I(!0),
            await (0, c.g)({
                analyticsLocations: T,
                analyticsLocation: { object: d.ZSU.BUTTON_CTA, objectType: d.AnalyticsObjectTypes.BUY, ...n },
                guild: t,
                closeLayer: m,
                onClose: () => {
                    I(!1);
                },
            });
    }
    return (0, i.jsx)(r.Button, {
        variant: A,
        size: "md",
        icon: r._Jp,
        text: u.intl.string(u.t.gKmQ1G),
        onClick: g,
        loading: E,
        disabled: N,
    });
}
