n.d(t, { i: () => _ });
var r = n(64700),
    l = n(977445),
    i = n(624210),
    o = n(945810);
let a = (0, o.mj)({
        name: "2026-06-otp-orders-phase-1",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    s = (0, o.mj)({
        name: "2026-03-orders-dual-write",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var u = n(211287),
    c = n(739508),
    d = n(120700),
    E = n(818348);
let C = new Set([d.C.COLLECTIBLES_CHECKOUT, d.C.SLAYER_STOREFRONT_CHECKOUT]);
function _(e) {
    let t,
        {
            skuIDs: n,
            applicationId: o,
            paymentGateway: d,
            checkoutFlow: _,
            isGift: h,
            loadId: m,
            onOrderCreated: p,
        } = e,
        S = s.useConfig({ location: "payment_modal" }).enabled,
        A = u.A.useConfig({ location: "payment_modal" }).enabled,
        I = a.useConfig({ location: "payment_modal" }).enabled,
        N = d === E.kM.VIRTUAL_CURRENCY,
        T = null != _ && C.has(_);
    t = N ? A : T ? !0 !== h && I : S;
    let f = N && A,
        g = null != n ? n[0] : void 0,
        [R, O] = (0, r.useState)(null),
        [y, P] = (0, r.useState)(null),
        [v, x] = (0, r.useState)(f),
        U = (0, r.useRef)(!1),
        M = (0, r.useCallback)(
            async (e) => {
                let { skuId: t } = e;
                x(!0);
                try {
                    let e = null != o && (0, l.Fs)(o),
                        n = await (0, i.fS)({ skuId: t, paymentGateway: d, loadId: m, testMode: e });
                    O(n), null != p && p(n);
                } catch (n) {
                    let e = n instanceof Error ? n : Error(String(n));
                    (0, c.gr)(n) ||
                        (0, c.pM)(e, {
                            tags: { source: "create_order" },
                            extra: { skuId: t, paymentGateway: String(d), loadId: m },
                        }),
                        P(e);
                } finally {
                    x(!1);
                }
            },
            [o, d, m, p],
        );
    return (
        (0, r.useEffect)(() => {
            t && null != g && (null != R || null != y || U.current || ((U.current = !0), M({ skuId: g })));
        }, [g, t, R, M, y]),
        { order: R, isCreateOrderLoading: v, createOrderError: y, shouldBlockOnOrderCreation: f }
    );
}
