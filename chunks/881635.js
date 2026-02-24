n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(688810),
    o = n(287809),
    c = n(987144),
    d = n(652215),
    u = n(985018);
function m(e) {
    let { guild: t, analyticsLocation: n, analyticsLocations: m, closeLayer: _ } = e,
        [A, h] = l.useState(!1),
        { analyticsLocations: f } = (0, s.Ay)(m ?? []),
        E = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        g = E?.isPremiumGroupMember();
    async function p() {
        h(!0),
            await (0, c.g)({
                analyticsLocations: f,
                analyticsLocation: { object: d.ZSU.BUTTON_CTA, objectType: d.AnalyticsObjectTypes.BUY, ...n },
                guild: t,
                closeLayer: _,
                onClose: () => {
                    h(!1);
                },
            });
    }
    return (0, i.jsx)(r.Button, {
        variant: "expressive",
        size: "md",
        icon: r._Jp,
        text: u.intl.string(u.t.gKmQ1G),
        onClick: p,
        loading: A,
        disabled: g,
    });
}
