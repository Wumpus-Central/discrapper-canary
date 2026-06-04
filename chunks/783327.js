r.d(t, { R: () => o, S: () => c });
var n = r(627968),
    l = r(64700),
    u = r(342393),
    a = r(87952),
    i = r(652215);
let s = l.createContext("unset_context");
function c() {
    let e = l.useContext(s);
    if ("unset_context" === e) throw Error("useCheckoutStripeInstance must be used within a CheckoutStripeProvider");
    return e;
}
function o(e) {
    let { children: t } = e,
        r = (0, a.A)();
    return (0, n.jsx)(s.Provider, {
        value: r,
        children: (0, n.jsx)(u.Elements, { options: i.XL8, stripe: r, children: t }),
    });
}
