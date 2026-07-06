r.d(t, { _5: () => p, rV: () => I });
var n = r(627968),
    u = r(64700),
    i = r(430993),
    c = r(834730),
    s = r(20742),
    l = r(534479),
    a = r(940377),
    o = r(169797),
    d = r(375708);
let f = u.createContext(null);
function p() {
    return u.useContext(f);
}
function h(e) {
    let { renderModalProps: t, children: r } = e,
        u = (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.rQ, {}), (0, n.jsx)(i.c, { children: r })] });
    return null != t ? (0, n.jsx)(o.Jg, { ...t, children: u }) : u;
}
function I(e) {
    let {
            loadId: t,
            skuIDs: r,
            applicationId: u,
            paymentGateway: i,
            checkoutFlow: s,
            isGift: o,
            onOrderCreated: p,
            renderModalProps: I,
            children: m,
        } = e,
        {
            order: y,
            isCreateOrderLoading: S,
            createOrderError: P,
            shouldBlockOnOrderCreation: E,
        } = (0, a.i)({
            skuIDs: r,
            applicationId: u,
            paymentGateway: i,
            checkoutFlow: s,
            isGift: o,
            loadId: t,
            onOrderCreated: p,
        });
    if (E) {
        if (S) return (0, n.jsx)(h, { renderModalProps: I, children: (0, n.jsx)(l.A, {}) });
        else if (null != P)
            return (0, n.jsx)(h, {
                renderModalProps: I,
                children: (0, n.jsx)(c.E, { variant: "text-md/normal", children: d.intl.string(d.t.F8FvUy) }),
            });
    }
    return (0, n.jsx)(f.Provider, { value: y, children: m });
}
