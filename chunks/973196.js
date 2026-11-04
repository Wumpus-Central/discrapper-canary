var n = r(477900),
    u = r(582128);
let c = u.createContext(!1);
r.d(
    t,
    {},
    {
        A: function () {
            return u.useContext(c);
        },
        p: function (e) {
            let { disabled: t, children: r } = e;
            return (0, n.jsx)(c.Provider, { value: t, children: r });
        },
    },
);
