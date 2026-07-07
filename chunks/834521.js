n.d(t, { i: () => E });
var r = n(64700),
    l = n(977445),
    i = n(624210);
let o = (0, n(945810).mj)({
    name: "2026-06-otp-orders-phase-1",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var a = n(211287),
    s = n(739508),
    u = n(120700),
    c = n(818348);
let d = new Set([u.C.COLLECTIBLES_CHECKOUT, u.C.SLAYER_STOREFRONT_CHECKOUT]);
function E(e) {
    let t,
        {
            skuIDs: n,
            applicationId: u,
            paymentGateway: E,
            checkoutFlow: C,
            isGift: _,
            loadId: h,
            onOrderCreated: m,
        } = e,
        p = a.A.useConfig({ location: "payment_modal" }).enabled,
        S = o.useConfig({ location: "payment_modal" }).enabled,
        A = E === c.kM.VIRTUAL_CURRENCY,
        I = null != C && d.has(C);
    t = A ? p : !!I && !0 !== _ && S;
    let N = A && p,
        T = null != n ? n[0] : void 0,
        [f, R] = (0, r.useState)(null),
        [g, O] = (0, r.useState)(null),
        [y, P] = (0, r.useState)(N),
        v = (0, r.useRef)(!1),
        x = (0, r.useCallback)(
            async (e) => {
                let { skuId: t } = e;
                P(!0);
                try {
                    let e = null != u && (0, l.Fs)(u),
                        n = await (0, i.fS)({ skuId: t, paymentGateway: E, loadId: h, testMode: e });
                    R(n), null != m && m(n);
                } catch (n) {
                    let e = n instanceof Error ? n : Error(String(n));
                    (0, s.gr)(n) ||
                        (0, s.pM)(e, {
                            tags: { source: "create_order" },
                            extra: { skuId: t, paymentGateway: String(E), loadId: h },
                        }),
                        O(e);
                } finally {
                    P(!1);
                }
            },
            [u, E, h, m],
        );
    return (
        (0, r.useEffect)(() => {
            t && null != T && (null != f || null != g || v.current || ((v.current = !0), x({ skuId: T })));
        }, [T, t, f, x, g]),
        { order: f, isCreateOrderLoading: y, createOrderError: g, shouldBlockOnOrderCreation: N }
    );
}
