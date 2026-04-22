"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(821609),
    a = n(104510),
    o = n(688810),
    c = n(287809),
    u = n(987144),
    d = n(652215),
    _ = n(985018);
function E(e) {
    let { guild: t, analyticsLocation: n, analyticsLocations: E, closeLayer: A, variant: m = "expressive" } = e,
        [I, T] = r.useState(!1),
        { analyticsLocations: N } = (0, o.Ay)(E ?? []),
        g = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        p = g?.isPremiumGroupMember();
    async function C() {
        T(!0),
            await (0, u.g)({
                analyticsLocations: N,
                analyticsLocation: { object: d.ZSU.BUTTON_CTA, objectType: d.AnalyticsObjectTypes.BUY, ...n },
                guild: t,
                closeLayer: A,
                onClose: () => {
                    T(!1);
                },
            });
    }
    return (0, i.jsx)(s.$, {
        variant: m,
        size: "md",
        icon: a._,
        text: _.intl.string(_.t.gKmQ1G),
        onClick: C,
        loading: I,
        disabled: p,
    });
}
