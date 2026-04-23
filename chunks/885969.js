n.d(t, { A: () => p });
var i = n(793574),
    r = n(4630),
    a = n(580960),
    l = n(636401),
    s = n(629471),
    o = n(569475),
    d = n(994717),
    u = n(546983),
    c = n(613057),
    A = n(652215),
    h = n(788868);
let _ = [i.A.RPC];
function E(e, t) {
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
        [c.sm.ANY]: [c.VH, c.hj],
        validation: (e) =>
            (0, s.A)(e)
                .required()
                .keys({ sku_id: e.string().required(), pid: e.number().min(0) }),
        handler(e) {
            let {
                socket: t,
                args: { sku_id: n, pid: i },
            } = e;
            (0, d.C)(t.transport);
            let a = t.application.id;
            if (null == a) throw new l.A({ errorCode: A.Lw6.INVALID_COMMAND }, "No application.");
            let { lock: s, context: h } = (0, u.d5)(t.transport !== c.z4.POST_MESSAGE ? i : null);
            if (null == (0, o.A)()) throw new l.A({ errorCode: A.Lw6.INVALID_CHANNEL }, "Invalid channel");
            let p = { page: A.liQ.IN_APP };
            return (async () => {
                try {
                    let e = await (0, r.j)({
                        applicationId: a,
                        skuId: n,
                        openPremiumPaymentModal: () => E(h, p),
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
        [c.sm.ANY]: [c.VH, c.hj],
        validation: (e) => (0, s.A)(e).keys({ pid: e.number().min(0) }),
        handler(e) {
            let {
                socket: t,
                args: { pid: n },
            } = e;
            if (((0, d.C)(t.transport), null == t.application.id))
                throw new l.A({ errorCode: A.Lw6.INVALID_COMMAND }, "No application.");
            let { lock: i, context: r } = (0, u.d5)(t.transport !== c.z4.POST_MESSAGE ? n : null);
            return E(r, { page: A.liQ.IN_APP }).then(
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
