i.d(t, { ApplicationCheckoutContextProvider: () => n, l: () => c });
var r = i(627968),
    u = i(64700);
let [s, c] = (0, i(786300).A)();
function n(e) {
    let { children: t } = e,
        [i, c] = u.useState(null),
        n = u.useMemo(() => ({ subscriptionMetadataRequest: i, setSubscriptionMetadataRequest: c }), [i]);
    return (0, r.jsx)(s.Provider, { value: n, children: t });
}
