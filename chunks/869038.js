l.d(t, { A: () => _, G: () => E });
var n = l(562465),
    r = l(73153),
    i = l(627363),
    s = l(587895),
    o = l(197111),
    a = l(979286),
    d = l(45938),
    c = l(652215),
    u = l(788868);
async function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.h.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
    try {
        let n = await (0, d.GM)(e, t, l);
        if (null != n.application_id && n.application_id !== u.tv) {
            let e = s.A.getApplication(n.application_id);
            if (null == e)
                try {
                    await i.Ay.fetchApplication(n.application_id);
                } catch (e) {}
        }
        return (
            n.application_id === c.FYj && (await (0, a.Jp)(n.sku_id)),
            r.h.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: n }),
            { giftCode: n }
        );
    } catch (t) {
        throw (r.h.dispatch({ type: "GIFT_CODE_RESOLVE_FAILURE", code: e, error: t }), t);
    }
}
let _ = {
    resolveGiftCode: E,
    async fetchUserGiftCodesForSKU(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        r.h.dispatch({ type: "GIFT_CODES_FETCH", skuId: e, subscriptionPlanId: t });
        try {
            let l = await n.Bo.get({
                url: c.Rsh.USER_GIFT_CODES,
                query: { sku_id: e, subscription_plan_id: t },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            r.h.dispatch({ type: "GIFT_CODES_FETCH_SUCCESS", giftCodes: l.body, skuId: e, subscriptionPlanId: t });
        } catch (l) {
            r.h.dispatch({ type: "GIFT_CODES_FETCH_FAILURE", skuId: e, subscriptionPlanId: t });
        }
    },
    async createGiftCode(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        r.h.dispatch({ type: "GIFT_CODE_CREATE_START", skuId: e, subscriptionPlanId: t });
        try {
            let i = await n.Bo.post({
                url: c.Rsh.USER_GIFT_CODE_CREATE,
                body: { sku_id: e, subscription_plan_id: t, gift_style: l },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return r.h.dispatch({ type: "GIFT_CODE_CREATE_SUCCESS", giftCode: i.body }), i.body;
        } catch (l) {
            r.h.dispatch({ type: "GIFT_CODE_CREATE_FAILURE", skuId: e, subscriptionPlanId: t });
        }
    },
    async revokeGiftCode(e) {
        r.h.dispatch({ type: "GIFT_CODE_REVOKE", code: e });
        try {
            await n.Bo.del({ url: c.Rsh.USER_GIFT_CODE_REVOKE(e), oldFormErrors: !0, rejectWithError: !0 }),
                r.h.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: e });
        } catch (t) {
            r.h.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
        }
    },
    openNativeGiftCodeModal(e) {
        o.A.openNativeAppModal(e, c.e$_.GIFT_CODE_BROWSER);
    },
    ...l(75255).A,
};
