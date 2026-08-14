i.d(e, { A: () => I, G: () => h });
var s = i(636537),
    r = i(228366),
    n = i(913122),
    l = i(627363),
    o = i(587895),
    a = i(197111),
    p = i(839534),
    d = i(590180),
    c = i(166590),
    u = i(45938),
    _ = i(652215),
    E = i(202541);
async function h(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.h.dispatch({ type: "GIFT_CODE_RESOLVE", code: t });
    try {
        let s = await (0, u.GM)(t, e, i);
        if (null != s.application_id && s.application_id !== E.tv) {
            let t = o.A.getApplication(s.application_id);
            if (null == t)
                try {
                    await l.Ay.fetchApplication(s.application_id);
                } catch (t) {}
        }
        if (s.application_id === _.FYj) {
            await (0, p.Jp)(s.sku_id);
            let t = d.A.getProduct(s.sku_id);
            if (t?.items.some(c.g) === !0) throw new n.eR("Client update required to redeem this gift");
        }
        return r.h.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: s }), { giftCode: s };
    } catch (e) {
        throw (r.h.dispatch({ type: "GIFT_CODE_RESOLVE_FAILURE", code: t, error: e }), e);
    }
}
let I = {
    resolveGiftCode: h,
    async fetchUserGiftCodesForSKU(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        r.h.dispatch({ type: "GIFT_CODES_FETCH", skuId: t, subscriptionPlanId: e });
        try {
            let i = await s.Bo.get({
                url: _.Rsh.USER_GIFT_CODES,
                query: { sku_id: t, subscription_plan_id: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            r.h.dispatch({ type: "GIFT_CODES_FETCH_SUCCESS", giftCodes: i.body, skuId: t, subscriptionPlanId: e });
        } catch (i) {
            r.h.dispatch({ type: "GIFT_CODES_FETCH_FAILURE", skuId: t, subscriptionPlanId: e });
        }
    },
    async createGiftCode(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        r.h.dispatch({ type: "GIFT_CODE_CREATE_START", skuId: t, subscriptionPlanId: e });
        try {
            let n = await s.Bo.post({
                url: _.Rsh.USER_GIFT_CODE_CREATE,
                body: { sku_id: t, subscription_plan_id: e, gift_style: i },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return r.h.dispatch({ type: "GIFT_CODE_CREATE_SUCCESS", giftCode: n.body }), n.body;
        } catch (i) {
            r.h.dispatch({ type: "GIFT_CODE_CREATE_FAILURE", skuId: t, subscriptionPlanId: e });
        }
    },
    async revokeGiftCode(t) {
        r.h.dispatch({ type: "GIFT_CODE_REVOKE", code: t });
        try {
            await s.Bo.del({ url: _.Rsh.USER_GIFT_CODE_REVOKE(t), oldFormErrors: !0, rejectWithError: !0 }),
                r.h.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: t });
        } catch (e) {
            r.h.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: t });
        }
    },
    openNativeGiftCodeModal(t) {
        a.A.openNativeAppModal(t, _.e$_.GIFT_CODE_BROWSER);
    },
    ...i(75255).A,
};
