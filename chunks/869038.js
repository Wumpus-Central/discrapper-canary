E.d(t, { A: () => u, G: () => d });
var n = E(636537),
    l = E(228366),
    r = E(627363),
    i = E(587895),
    _ = E(197111),
    o = E(859040),
    c = E(45938),
    s = E(652215),
    a = E(788868);
async function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        E = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    l.h.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
    try {
        let n = await (0, c.GM)(e, t, E);
        if (null != n.application_id && n.application_id !== a.tv) {
            let e = i.A.getApplication(n.application_id);
            if (null == e)
                try {
                    await r.Ay.fetchApplication(n.application_id);
                } catch (e) {}
        }
        return (
            n.application_id === s.FYj && (await (0, o.Jp)(n.sku_id)),
            l.h.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: n }),
            { giftCode: n }
        );
    } catch (t) {
        throw (l.h.dispatch({ type: "GIFT_CODE_RESOLVE_FAILURE", code: e, error: t }), t);
    }
}
let u = {
    resolveGiftCode: d,
    async fetchUserGiftCodesForSKU(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        l.h.dispatch({ type: "GIFT_CODES_FETCH", skuId: e, subscriptionPlanId: t });
        try {
            let E = await n.Bo.get({
                url: s.Rsh.USER_GIFT_CODES,
                query: { sku_id: e, subscription_plan_id: t },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            l.h.dispatch({ type: "GIFT_CODES_FETCH_SUCCESS", giftCodes: E.body, skuId: e, subscriptionPlanId: t });
        } catch (E) {
            l.h.dispatch({ type: "GIFT_CODES_FETCH_FAILURE", skuId: e, subscriptionPlanId: t });
        }
    },
    async createGiftCode(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        l.h.dispatch({ type: "GIFT_CODE_CREATE_START", skuId: e, subscriptionPlanId: t });
        try {
            let r = await n.Bo.post({
                url: s.Rsh.USER_GIFT_CODE_CREATE,
                body: { sku_id: e, subscription_plan_id: t, gift_style: E },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return l.h.dispatch({ type: "GIFT_CODE_CREATE_SUCCESS", giftCode: r.body }), r.body;
        } catch (E) {
            l.h.dispatch({ type: "GIFT_CODE_CREATE_FAILURE", skuId: e, subscriptionPlanId: t });
        }
    },
    async revokeGiftCode(e) {
        l.h.dispatch({ type: "GIFT_CODE_REVOKE", code: e });
        try {
            await n.Bo.del({ url: s.Rsh.USER_GIFT_CODE_REVOKE(e), oldFormErrors: !0, rejectWithError: !0 }),
                l.h.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: e });
        } catch (t) {
            l.h.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
        }
    },
    openNativeGiftCodeModal(e) {
        _.A.openNativeAppModal(e, s.e$_.GIFT_CODE_BROWSER);
    },
    ...E(75255).A,
};
