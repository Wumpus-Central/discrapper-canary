"use strict";
n.d(t, { A: () => I, G: () => h });
var i = n(636537),
    r = n(228366),
    a = n(913122),
    s = n(627363),
    l = n(587895),
    o = n(197111),
    d = n(662388),
    c = n(590180),
    u = n(166590),
    _ = n(45938),
    E = n(652215),
    A = n(202541);
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.h.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
    try {
        let i = await (0, _.GM)(e, t, n);
        if (null != i.application_id && i.application_id !== A.tv) {
            let e = l.A.getApplication(i.application_id);
            if (null == e)
                try {
                    await s.Ay.fetchApplication(i.application_id);
                } catch (e) {}
        }
        if (i.application_id === E.FYj) {
            await (0, d.Jp)(i.sku_id);
            let e = c.A.getProduct(i.sku_id);
            if (e?.items.some(u.g) === !0) throw new a.eR("Client update required to redeem this gift");
        }
        return r.h.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: i }), { giftCode: i };
    } catch (t) {
        throw (r.h.dispatch({ type: "GIFT_CODE_RESOLVE_FAILURE", code: e, error: t }), t);
    }
}
let I = {
    resolveGiftCode: h,
    async fetchUserGiftCodesForSKU(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        r.h.dispatch({ type: "GIFT_CODES_FETCH", skuId: e, subscriptionPlanId: t });
        try {
            let n = await i.Bo.get({
                url: E.Rsh.USER_GIFT_CODES,
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
                url: E.Rsh.USER_GIFT_CODE_CREATE,
                body: { sku_id: e, subscription_plan_id: t, gift_style: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return r.h.dispatch({ type: "GIFT_CODE_CREATE_SUCCESS", giftCode: a.body }), a.body;
        } catch (n) {
            r.h.dispatch({ type: "GIFT_CODE_CREATE_FAILURE", skuId: e, subscriptionPlanId: t });
        }
    },
    async revokeGiftCode(e) {
        r.h.dispatch({ type: "GIFT_CODE_REVOKE", code: e });
        try {
            await i.Bo.del({ url: E.Rsh.USER_GIFT_CODE_REVOKE(e), oldFormErrors: !0, rejectWithError: !0 }),
                r.h.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: e });
        } catch (t) {
            r.h.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
        }
    },
    openNativeGiftCodeModal(e) {
        o.A.openNativeAppModal(e, E.e$_.GIFT_CODE_BROWSER);
    },
    ...n(75255).A,
};
