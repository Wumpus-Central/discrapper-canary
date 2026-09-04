t.d(e, { R: () => d, S: () => o });
var l = t(477900),
    n = t(582128),
    r = t(643909),
    s = t(87952),
    i = t(652215);
let c = n.createContext("unset_context");
function o() {
    let a = n.useContext(c);
    if ("unset_context" === a) throw Error("useCheckoutStripeInstance must be used within a CheckoutStripeProvider");
    return a;
}
function d(a) {
    let { children: e } = a,
        t = (0, s.A)();
    return (0, l.jsx)(c.Provider, {
        value: t,
        children: (0, l.jsx)(r.Elements, { options: i.XL8, stripe: t, children: e }),
    });
}
