"use strict";
n.d(t, { hS: () => m, Ay: () => g, BE: () => p });
var i,
    r = (((i = {})[(i.DESKTOP = 0)] = "DESKTOP"), (i[(i.MOBILE = 1)] = "MOBILE"), i),
    s = n(636537),
    a = n(406935),
    o = n(228366),
    l = n(339048),
    u = n(773669),
    c = n(594061),
    d = n(835095),
    _ = n(374200),
    f = n(788868),
    h = n(652215);
function p() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    _.A.isFetchingActivePromotions || (e && null != _.A.lastFetchedActivePromotions) || E();
}
async function E() {
    try {
        o.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH" });
        let e = r.DESKTOP,
            t = await s.Bo.get({
                url: h.Rsh.PROMOTIONS,
                query: { locale: u.default.locale, platform: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            n = _.A.consumedInboundPromotionId;
        if (!_.A.hasFetchedConsumedInboundPromotionId) {
            let e = (await (0, l.LM)(f.tv, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
            n = e?.promotion_id ?? null;
        }
        o.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: t.body, consumedInboundPromotionId: n });
    } catch (e) {
        o.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
    }
}
async function m() {
    if (!_.A.isFetchingActiveBogoPromotion)
        try {
            o.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
                await s.Bo.get({ url: h.Rsh.BOGO_PROMOTIONS, query: { locale: u.default.locale }, rejectWithError: !0 })
            ).body;
            o.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS", activePromotion: d.A.createFromServer(e) });
        } catch (e) {
            o.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
        }
}
let g = {
    fetchActivePromotions: E,
    dismissOutboundPromotionNotice: function () {
        o.h.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
        let e = _.A.lastDismissedOutboundPromotionStartDate;
        null != e &&
            c.wc.updateAsync(
                "userContent",
                (t) => {
                    t.lastDismissedOutboundPromotionStartDate = a.hU.create({ value: e });
                },
                c.Sb.INFREQUENT_USER_ACTION,
            );
    },
    markOutboundPromotionsSeen() {
        o.h.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
    },
    fetchActiveBogoPromotion: m,
};
