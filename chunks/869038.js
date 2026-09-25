n.d(t, { Ay: () => m, GM: () => f, HY: () => p, kW: () => T });
var i = n(636537),
    r = n(228366),
    a = n(913122),
    s = n(178253),
    l = n(627363),
    o = n(587895),
    d = n(197111),
    c = n(839534),
    u = n(590180),
    _ = n(166590),
    E = n(45938),
    A = n(38405),
    h = n(652215),
    I = n(202541);
async function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.h.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
    try {
        let i = await (0, E.GM)(e, t, n);
        if (null != i.application_id && i.application_id !== I.tv) {
            let e = o.A.getApplication(i.application_id);
            if (null == e)
                try {
                    await l.Ay.fetchApplication(i.application_id);
                } catch (e) {}
        }
        if (i.application_id === h.FYj) {
            await (0, c.Jp)(i.sku_id);
            let e = u.A.getProduct(i.sku_id);
            if (e?.items.some(_.g) === !0) throw new a.eR("Client update required to redeem this gift");
        }
        return (r.h.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: i }), { giftCode: i });
    } catch (t) {
        throw (r.h.dispatch({ type: "GIFT_CODE_RESOLVE_FAILURE", code: e, error: t }), t);
    }
}
function p(e) {
    return (
        e instanceof s.A
            ? 404 !== e.status &&
              A.A.captureException(e.error, { tags: { gift_code_resolve_status: String(e.status ?? "unknown") } })
            : e instanceof Error && A.A.captureException(e),
        null
    );
}
async function T(e, t) {
    return (
        await i.Bo.post({
            url: h.Rsh.USER_GIFT_CODE_DELIVERIES,
            body: { checkout_session_id: t, recipient_ids: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        })
    ).body;
}
let m = {
    resolveGiftCode: f,
    reportUnexpectedGiftCodeError: p,
    async fetchUserGiftCodesForSKU(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        r.h.dispatch({ type: "GIFT_CODES_FETCH", skuId: e, subscriptionPlanId: t });
        try {
            let n = await i.Bo.get({
                url: h.Rsh.USER_GIFT_CODES,
                query: { sku_id: e, subscription_plan_id: t },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            r.h.dispatch({ type: "GIFT_CODES_FETCH_SUCCESS", giftCodes: n.body, skuId: e, subscriptionPlanId: t });
        } catch (n) {
            r.h.dispatch({ type: "GIFT_CODES_FETCH_FAILURE", skuId: e, subscriptionPlanId: t });
        }
    },
    async createGiftCode(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        r.h.dispatch({ type: "GIFT_CODE_CREATE_START", skuId: e, subscriptionPlanId: t });
        try {
            let a = await i.Bo.post({
                url: h.Rsh.USER_GIFT_CODE_CREATE,
                body: { sku_id: e, subscription_plan_id: t, gift_style: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return (r.h.dispatch({ type: "GIFT_CODE_CREATE_SUCCESS", giftCode: a.body }), a.body);
        } catch (n) {
            r.h.dispatch({ type: "GIFT_CODE_CREATE_FAILURE", skuId: e, subscriptionPlanId: t });
        }
    },
    async revokeGiftCode(e) {
        r.h.dispatch({ type: "GIFT_CODE_REVOKE", code: e });
        try {
            (await i.Bo.del({ url: h.Rsh.USER_GIFT_CODE_REVOKE(e), oldFormErrors: !0, rejectWithError: !0 }),
                r.h.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: e }));
        } catch (t) {
            r.h.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
        }
    },
    openNativeGiftCodeModal(e) {
        d.A.openNativeAppModal(e, h.e$_.GIFT_CODE_BROWSER);
    },
    ...n(75255).A,
};
