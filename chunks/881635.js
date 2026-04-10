"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(688810),
    c = n(287809),
    o = n(987144),
    u = n(652215),
    d = n(985018);
function _(e) {
    let { guild: t, analyticsLocation: n, analyticsLocations: _, closeLayer: E, variant: A = "expressive" } = e,
        [m, I] = r.useState(!1),
        { analyticsLocations: T } = (0, a.Ay)(_ ?? []),
        g = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        N = g?.isPremiumGroupMember();
    async function f() {
        I(!0),
            await (0, o.g)({
                analyticsLocations: T,
                analyticsLocation: { object: u.ZSU.BUTTON_CTA, objectType: u.AnalyticsObjectTypes.BUY, ...n },
                guild: t,
                closeLayer: E,
                onClose: () => {
                    I(!1);
                },
            });
    }
    return (0, i.jsx)(l.Button, {
        variant: A,
        size: "md",
        icon: l._Jp,
        text: d.intl.string(d.t.gKmQ1G),
        onClick: f,
        loading: m,
        disabled: N,
    });
}
