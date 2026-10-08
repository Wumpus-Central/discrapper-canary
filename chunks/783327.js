n.d(t, { R: () => c, S: () => o });
var r = n(477900),
    l = n(582128),
    i = n(643909),
    s = n(87952),
    a = n(652215);
let u = l.createContext("unset_context");
function o() {
    let e = l.useContext(u);
    if ("unset_context" === e) throw Error("useCheckoutStripeInstance must be used within a CheckoutStripeProvider");
    return e;
}
function c(e) {
    let { children: t } = e,
        n = (0, s.A)();
    return (0, r.jsx)(u.Provider, {
        value: n,
        children: (0, r.jsx)(i.Elements, { options: a.XL8, stripe: n, children: t }),
    });
}
