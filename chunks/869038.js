"use strict";
n.d(t, { A: () => h, G: () => _ });
var i = n(636537),
    s = n(228366),
    l = n(627363),
    r = n(587895),
    a = n(197111),
    o = n(29292),
    d = n(45938),
    c = n(652215),
    u = n(788868);
async function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    s.h.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
    try {
        let i = await (0, d.GM)(e, t, n);
        if (null != i.application_id && i.application_id !== u.tv) {
            let e = r.A.getApplication(i.application_id);
            if (null == e)
                try {
                    await l.Ay.fetchApplication(i.application_id);
                } catch (e) {}
        }
        return (
            i.application_id === c.FYj && (await (0, o.Jp)(i.sku_id)),
            s.h.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: i }),
            { giftCode: i }
        );
    } catch (t) {
        throw (s.h.dispatch({ type: "GIFT_CODE_RESOLVE_FAILURE", code: e, error: t }), t);
    }
}
let h = {
    resolveGiftCode: _,
    async fetchUserGiftCodesForSKU(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        s.h.dispatch({ type: "GIFT_CODES_FETCH", skuId: e, subscriptionPlanId: t });
        try {
            let n = await i.Bo.get({
                url: c.Rsh.USER_GIFT_CODES,
                query: { sku_id: e, subscription_plan_id: t },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            s.h.dispatch({ type: "GIFT_CODES_FETCH_SUCCESS", giftCodes: n.body, skuId: e, subscriptionPlanId: t });
        } catch (n) {
            s.h.dispatch({ type: "GIFT_CODES_FETCH_FAILURE", skuId: e, subscriptionPlanId: t });
        }
    },
    async createGiftCode(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        s.h.dispatch({ type: "GIFT_CODE_CREATE_START", skuId: e, subscriptionPlanId: t });
        try {
            let l = await i.Bo.post({
                url: c.Rsh.USER_GIFT_CODE_CREATE,
                body: { sku_id: e, subscription_plan_id: t, gift_style: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return s.h.dispatch({ type: "GIFT_CODE_CREATE_SUCCESS", giftCode: l.body }), l.body;
        } catch (n) {
            s.h.dispatch({ type: "GIFT_CODE_CREATE_FAILURE", skuId: e, subscriptionPlanId: t });
        }
    },
    async revokeGiftCode(e) {
        s.h.dispatch({ type: "GIFT_CODE_REVOKE", code: e });
        try {
            await i.Bo.del({ url: c.Rsh.USER_GIFT_CODE_REVOKE(e), oldFormErrors: !0, rejectWithError: !0 }),
                s.h.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: e });
        } catch (t) {
            s.h.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
        }
    },
    openNativeGiftCodeModal(e) {
        a.A.openNativeAppModal(e, c.e$_.GIFT_CODE_BROWSER);
    },
    ...n(75255).A,
};
