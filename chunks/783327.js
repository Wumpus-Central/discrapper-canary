n.d(t, { R: () => o, S: () => c });
var l = n(477900),
    r = n(582128),
    i = n(643909),
    s = n(87952),
    a = n(652215);
let u = r.createContext("unset_context");
function c() {
    let e = r.useContext(u);
    if ("unset_context" === e) throw Error("useCheckoutStripeInstance must be used within a CheckoutStripeProvider");
    return e;
}
function o(e) {
    let { children: t } = e,
        n = (0, s.A)();
    return (0, l.jsx)(u.Provider, {
        value: n,
        children: (0, l.jsx)(i.Elements, { options: a.XL8, stripe: n, children: t }),
    });
}
