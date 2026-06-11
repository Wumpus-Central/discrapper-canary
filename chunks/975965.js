n.d(t, { ApplicationCheckoutContextProvider: () => s, l: () => a });
var l = n(627968),
    r = n(64700);
let [i, a] = (0, n(786300).A)();
function s(e) {
    let { guildId: t, showBenefitsFirst: n, children: a } = e,
        [s, o] = r.useState(null),
        u = r.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: s,
                setSubscriptionMetadataRequest: o,
            }),
            [t, n, s],
        );
    return (0, l.jsx)(i.Provider, { value: u, children: a });
}
