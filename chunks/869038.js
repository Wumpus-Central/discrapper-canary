E.d(t, { A: () => h, G: () => S });
var n = E(636537),
    l = E(228366),
    r = E(913122),
    i = E(627363),
    _ = E(587895),
    o = E(197111),
    s = E(859040),
    c = E(590180),
    d = E(166590),
    a = E(45938),
    u = E(652215),
    C = E(788868);
async function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        E = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    l.h.dispatch({ type: "GIFT_CODE_RESOLVE", code: e });
    try {
        let n = await (0, a.GM)(e, t, E);
        if (null != n.application_id && n.application_id !== C.tv) {
            let e = _.A.getApplication(n.application_id);
            if (null == e)
                try {
                    await i.Ay.fetchApplication(n.application_id);
                } catch (e) {}
        }
        if (n.application_id === u.FYj) {
            await (0, s.Jp)(n.sku_id);
            let e = c.A.getProduct(n.sku_id);
            if (e?.items.some(d.g) === !0) throw new r.eR("Client update required to redeem this gift");
        }
        return l.h.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: n }), { giftCode: n };
    } catch (t) {
        throw (l.h.dispatch({ type: "GIFT_CODE_RESOLVE_FAILURE", code: e, error: t }), t);
    }
}
let h = {
    resolveGiftCode: S,
    async fetchUserGiftCodesForSKU(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        l.h.dispatch({ type: "GIFT_CODES_FETCH", skuId: e, subscriptionPlanId: t });
        try {
            let E = await n.Bo.get({
                url: u.Rsh.USER_GIFT_CODES,
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
                url: u.Rsh.USER_GIFT_CODE_CREATE,
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
            await n.Bo.del({ url: u.Rsh.USER_GIFT_CODE_REVOKE(e), oldFormErrors: !0, rejectWithError: !0 }),
                l.h.dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: e });
        } catch (t) {
            l.h.dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: e });
        }
    },
    openNativeGiftCodeModal(e) {
        o.A.openNativeAppModal(e, u.e$_.GIFT_CODE_BROWSER);
    },
    ...E(75255).A,
};
