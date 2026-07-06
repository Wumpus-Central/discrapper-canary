r.d(t, { R: () => o, S: () => a });
var n = r(627968),
    u = r(64700),
    i = r(342393),
    c = r(87952),
    s = r(652215);
let l = u.createContext("unset_context");
function a() {
    let e = u.useContext(l);
    if ("unset_context" === e) throw Error("useCheckoutStripeInstance must be used within a CheckoutStripeProvider");
    return e;
}
function o(e) {
    let { children: t } = e,
        r = (0, c.A)();
    return (0, n.jsx)(l.Provider, {
        value: r,
        children: (0, n.jsx)(i.Elements, { options: s.XL8, stripe: r, children: t }),
    });
}
