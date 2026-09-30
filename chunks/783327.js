l.d(e, { R: () => c, S: () => o });
var t = l(477900),
    r = l(582128),
    s = l(643909),
    n = l(87952),
    h = l(652215);
let i = r.createContext("unset_context");
function o() {
    let a = r.useContext(i);
    if ("unset_context" === a) throw Error("useCheckoutStripeInstance must be used within a CheckoutStripeProvider");
    return a;
}
function c(a) {
    let { children: e } = a,
        l = (0, n.A)();
    return (0, t.jsx)(i.Provider, {
        value: l,
        children: (0, t.jsx)(s.Elements, { options: h.XL8, stripe: l, children: e }),
    });
}
