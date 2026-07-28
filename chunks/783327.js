n.d(t, { R: () => c, S: () => u });
var l = n(477900),
    i = n(582128),
    r = n(643909),
    a = n(87952),
    s = n(652215);
let o = i.createContext("unset_context");
function u() {
    let e = i.useContext(o);
    if ("unset_context" === e) throw Error("useCheckoutStripeInstance must be used within a CheckoutStripeProvider");
    return e;
}
function c(e) {
    let { children: t } = e,
        n = (0, a.A)();
    return (0, l.jsx)(o.Provider, {
        value: n,
        children: (0, l.jsx)(r.Elements, { options: s.XL8, stripe: n, children: t }),
    });
}
