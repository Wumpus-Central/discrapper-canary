"use strict";
n.d(t, { hS: () => g, Ay: () => A, BE: () => E });
var i,
    r = (((i = {})[(i.DESKTOP = 0)] = "DESKTOP"), (i[(i.MOBILE = 1)] = "MOBILE"), i),
    s = n(636537),
    a = n(406935),
    o = n(228366),
    l = n(339048),
    u = n(773669),
    c = n(594061),
    d = n(835095),
    _ = n(264779),
    f = n(374200),
    h = n(788868),
    p = n(652215);
function E() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    f.A.isFetchingActivePromotions || (e && null != f.A.lastFetchedActivePromotions) || m();
}
async function m() {
    try {
        o.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH" });
        let e = r.DESKTOP,
            t = await s.Bo.get({
                url: p.Rsh.PROMOTIONS,
                query: { locale: u.default.locale, platform: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            n = f.A.consumedInboundPromotionId;
        if (!f.A.hasFetchedConsumedInboundPromotionId) {
            let e = (await (0, l.LM)(h.tv, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
            n = e?.promotion_id ?? null;
        }
        o.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: t.body, consumedInboundPromotionId: n });
    } catch (e) {
        o.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
    }
}
async function g() {
    if (!f.A.isFetchingActiveBogoPromotion)
        try {
            o.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
                await s.Bo.get({ url: p.Rsh.BOGO_PROMOTIONS, query: { locale: u.default.locale }, rejectWithError: !0 })
            ).body;
            o.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS", activePromotion: d.A.createFromServer(e) });
        } catch (e) {
            o.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
        }
}
let A = {
    fetchActivePromotions: m,
    fetchClaimedOutboundPromotionCodes: async function e() {
        try {
            let e = (
                await s.Bo.get({
                    url: p.Rsh.CLAIMED_OUTBOUND_PROMOTION_CODES,
                    query: { locale: u.default.locale },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
            ).body.map(_.Ng);
            o.h.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS", claimedOutboundPromotionCodes: e });
        } catch {
            o.h.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL" });
        }
    },
    addClaimedOutboundPromotionCode: function (e) {
        o.h.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODE_ADD", claimedOutboundPromotionCode: e });
    },
    dismissOutboundPromotionNotice: function () {
        o.h.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
        let e = f.A.lastDismissedOutboundPromotionStartDate;
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
    fetchActiveBogoPromotion: g,
};
