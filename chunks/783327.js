n.d(t, { R: () => c, S: () => u });
var r = n(477900),
    o = n(582128),
    l = n(643909),
    s = n(87952),
    i = n(652215);
let a = o.createContext("unset_context");
function u() {
    let e = o.useContext(a);
    if ("unset_context" === e) throw Error("useCheckoutStripeInstance must be used within a CheckoutStripeProvider");
    return e;
}
function c(e) {
    let { children: t } = e,
        n = (0, s.A)();
    return (0, r.jsx)(a.Provider, {
        value: n,
        children: (0, r.jsx)(l.Elements, { options: i.XL8, stripe: n, children: t }),
    });
}
