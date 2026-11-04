n.d(t, { rV: () => I, _5: () => _ });
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
var f = n(739508),
    h = n(120700),
    m = n(818348);
let p = new Set([h.C.COLLECTIBLES_CHECKOUT, h.C.SLAYER_STOREFRONT_CHECKOUT]);
var C = n(169797),
    y = n(792996);
let E = r.createContext({ order: null, isOrderCreationEnabled: !1 });
function _() {
    return r.useContext(E);
}
function g(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.rQ, {}), (0, l.jsx)(a.c, { children: n })] });
    return null != t ? (0, l.jsx)(C.Jg, { ...t, children: r }) : r;
}
function I(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: i,
            paymentGateway: a,
            checkoutFlow: h,
            isGift: C,
            onOrderCreated: _,
            renderModalProps: I,
            children: S,
        } = e,
        {
            order: A,
            isCreateOrderLoading: P,
            createOrderError: x,
            shouldBlockOnOrderCreation: v,
            isOrderCreationEnabled: R,
        } = (function (e) {
            let t,
                {
                    skuIDs: n,
                    applicationId: l,
                    paymentGateway: i,
                    checkoutFlow: a,
                    isGift: s,
                    loadId: u,
                    onOrderCreated: h,
                } = e,
                C = d.useConfig({ location: "payment_modal" }).enabled,
                y = i === m.kM.VIRTUAL_CURRENCY,
                E = null != a && p.has(a);
            t = !!y || (!!E && !0 !== s && C);
            let _ = null != n ? n[0] : void 0,
                [g, I] = (0, r.useState)(null),
                [S, A] = (0, r.useState)(null),
                [P, x] = (0, r.useState)(y),
                v = (0, r.useRef)(!1),
                R = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        x(!0);
                        try {
                            let e = null != l && (0, c.Fs)(l),
                                n = await (0, o.fS)({ skuId: t, paymentGateway: i, loadId: u, testMode: e });
                            (I(n), null != h && h(n));
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            ((0, f.gr)(n) ||
                                (0, f.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(i), loadId: u },
                                }),
                                A(e));
                        } finally {
                            x(!1);
                        }
                    },
                    [l, i, u, h],
                );
            return (
                (0, r.useEffect)(() => {
                    t && null != _ && (null != g || null != S || v.current || ((v.current = !0), R({ skuId: _ })));
                }, [_, t, g, R, S]),
                {
                    order: g,
                    isCreateOrderLoading: P,
                    createOrderError: S,
                    shouldBlockOnOrderCreation: y,
                    isOrderCreationEnabled: t,
                }
            );
        })({
            skuIDs: n,
            applicationId: i,
            paymentGateway: a,
            checkoutFlow: h,
            isGift: C,
            loadId: t,
            onOrderCreated: _,
        }),
        T = r.useMemo(() => ({ order: A, isOrderCreationEnabled: R }), [A, R]);
    if (v) {
        if (P) return (0, l.jsx)(g, { renderModalProps: I, children: (0, l.jsx)(u.A, {}) });
        else if (null != x)
            return (0, l.jsx)(g, {
                renderModalProps: I,
                children: (0, l.jsx)(s.E, { variant: "body-md/normal", children: y.intl.string(y.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(E.Provider, { value: T, children: S });
}
