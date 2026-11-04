n.d(t, { rV: () => S, _5: () => g });
var l = n(477900),
    r = n(582128),
    i = n(20742),
    a = n(430993),
    s = n(834730),
    u = n(534479),
    c = n(977445),
    o = n(624210);
let d = (0, n(945810).mj)({
    name: "2026-06-otp-orders-phase-1",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f = n(211287),
    h = n(739508),
    m = n(120700),
    p = n(818348);
let C = new Set([m.C.COLLECTIBLES_CHECKOUT, m.C.SLAYER_STOREFRONT_CHECKOUT]);
var y = n(169797),
    E = n(792996);
let _ = r.createContext({ order: null, isOrderCreationEnabled: !1 });
function g() {
    return r.useContext(_);
}
function I(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.rQ, {}), (0, l.jsx)(a.c, { children: n })] });
    return null != t ? (0, l.jsx)(y.Jg, { ...t, children: r }) : r;
}
function S(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: i,
            paymentGateway: a,
            checkoutFlow: m,
            isGift: y,
            onOrderCreated: g,
            renderModalProps: S,
            children: A,
        } = e,
        {
            order: P,
            isCreateOrderLoading: x,
            createOrderError: v,
            shouldBlockOnOrderCreation: R,
            isOrderCreationEnabled: T,
        } = (function (e) {
            let t,
                {
                    skuIDs: n,
                    applicationId: l,
                    paymentGateway: i,
                    checkoutFlow: a,
                    isGift: s,
                    loadId: u,
                    onOrderCreated: m,
                } = e,
                y = f.A.useConfig({ location: "payment_modal" }).enabled,
                E = d.useConfig({ location: "payment_modal" }).enabled,
                _ = i === p.kM.VIRTUAL_CURRENCY,
                g = null != a && C.has(a);
            t = _ ? y : !!g && !0 !== s && E;
            let I = _ && y,
                S = null != n ? n[0] : void 0,
                [A, P] = (0, r.useState)(null),
                [x, v] = (0, r.useState)(null),
                [R, T] = (0, r.useState)(I),
                M = (0, r.useRef)(!1),
                b = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        T(!0);
                        try {
                            let e = null != l && (0, c.Fs)(l),
                                n = await (0, o.fS)({ skuId: t, paymentGateway: i, loadId: u, testMode: e });
                            (P(n), null != m && m(n));
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            ((0, h.gr)(n) ||
                                (0, h.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(i), loadId: u },
                                }),
                                v(e));
                        } finally {
                            T(!1);
                        }
                    },
                    [l, i, u, m],
                );
            return (
                (0, r.useEffect)(() => {
                    t && null != S && (null != A || null != x || M.current || ((M.current = !0), b({ skuId: S })));
                }, [S, t, A, b, x]),
                {
                    order: A,
                    isCreateOrderLoading: R,
                    createOrderError: x,
                    shouldBlockOnOrderCreation: I,
                    isOrderCreationEnabled: t,
                }
            );
        })({
            skuIDs: n,
            applicationId: i,
            paymentGateway: a,
            checkoutFlow: m,
            isGift: y,
            loadId: t,
            onOrderCreated: g,
        }),
        M = r.useMemo(() => ({ order: P, isOrderCreationEnabled: T }), [P, T]);
    if (R) {
        if (x) return (0, l.jsx)(I, { renderModalProps: S, children: (0, l.jsx)(u.A, {}) });
        else if (null != v)
            return (0, l.jsx)(I, {
                renderModalProps: S,
                children: (0, l.jsx)(s.E, { variant: "body-md/normal", children: E.intl.string(E.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(_.Provider, { value: M, children: A });
}
