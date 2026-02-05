n.d(t, { A: () => p });
var i = n(86980),
    r = n(793574),
    a = n(580960),
    l = n(636401),
    s = n(629471),
    o = n(569475),
    d = n(994717),
    c = n(546983),
    u = n(613057),
    A = n(652215),
    h = n(788868);
let _ = [r.A.RPC];
function m(e, t) {
    let n = { subscriptionTier: h.pe.TIER_2, analyticsLocations: _, analyticsObject: t };
    switch (e) {
        case A.BRT.APP:
            return a.A.openPremiumPaymentModalInApp(n);
        case A.BRT.OVERLAY:
            return a.A.openPremiumPaymentModalInOverlay(n);
        default:
            throw Error(`Unexpected app context: ${e}`);
    }
}
let p = {
    [A.e$_.START_PURCHASE]: {
        [u.sm.ANY]: [u.VH, u.hj],
        validation: (e) =>
            (0, s.A)(e)
                .required()
                .keys({ sku_id: e.string().required(), pid: e.number().min(0) }),
        handler(e) {
            let {
                socket: t,
                args: { sku_id: n, pid: r },
            } = e;
            (0, d.C)(t.transport);
            let a = t.application.id;
            if (null == a) throw new l.A({ errorCode: A.Lw6.INVALID_COMMAND }, "No application.");
            let { lock: s, context: h } = (0, c.d5)(t.transport !== u.z4.POST_MESSAGE ? r : null);
            if (null == (0, o.A)()) throw new l.A({ errorCode: A.Lw6.INVALID_CHANNEL }, "Invalid channel");
            let p = { page: A.liQ.IN_APP };
            return (async () => {
                try {
                    let e = await (0, i.j)({
                        applicationId: a,
                        skuId: n,
                        openPremiumPaymentModal: () => m(h, p),
                        analyticsLocations: _,
                        analyticsLocationObject: p,
                        context: h,
                    });
                    return s(), e;
                } catch (e) {
                    if ((s(), null != e)) {
                        let t = "";
                        throw (
                            ((t =
                                "object" == typeof e && "message" in e && "string" == typeof e.message
                                    ? e.message
                                    : "string" == typeof e
                                      ? e
                                      : JSON.stringify(e)),
                            new l.A({ errorCode: A.Lw6.PURCHASE_ERROR }, t))
                        );
                    }
                    throw new l.A({ errorCode: A.Lw6.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                }
            })();
        },
    },
    [A.e$_.START_PREMIUM_PURCHASE]: {
        [u.sm.ANY]: [u.VH, u.hj],
        validation: (e) => (0, s.A)(e).keys({ pid: e.number().min(0) }),
        handler(e) {
            let {
                socket: t,
                args: { pid: n },
            } = e;
            if (((0, d.C)(t.transport), null == t.application.id))
                throw new l.A({ errorCode: A.Lw6.INVALID_COMMAND }, "No application.");
            let { lock: i, context: r } = (0, c.d5)(t.transport !== u.z4.POST_MESSAGE ? n : null);
            return m(r, { page: A.liQ.IN_APP }).then(
                () => {
                    i();
                },
                (e) => {
                    if ((i(), null != e)) throw new l.A({ errorCode: A.Lw6.PURCHASE_ERROR }, e);
                    throw new l.A({ errorCode: A.Lw6.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                },
            );
        },
    },
};
