var l = n(477900),
    r = n(582128),
    i = n(643909),
    a = n(87952),
    s = n(652215);
let u = r.createContext("unset_context");
n.d(
    t,
    {},
    {
        R: function (e) {
            let { children: t } = e,
                n = (0, a.A)();
            return (0, l.jsx)(u.Provider, {
                value: n,
                children: (0, l.jsx)(i.Elements, { options: s.XL8, stripe: n, children: t }),
            });
        },
        S: function () {
            let e = r.useContext(u);
            if ("unset_context" === e)
                throw Error("useCheckoutStripeInstance must be used within a CheckoutStripeProvider");
            return e;
        },
    },
);
