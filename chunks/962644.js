"use strict";
n.d(t, { Ay: () => g, BE: () => f, Ak: () => p, hS: () => m, b8: () => T });
var i,
    r = (((i = {})[(i.DESKTOP = 0)] = "DESKTOP"), (i[(i.MOBILE = 1)] = "MOBILE"), i),
    a = n(636537),
    s = n(406935),
    l = n(228366),
    o = n(339048),
    d = n(773669),
    c = n(594061),
    u = n(835095),
    _ = n(287809),
    E = n(264779),
    A = n(412260),
    h = n(202541),
    I = n(652215);
function f() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    null == _.default.getCurrentUser() ||
        A.A.isFetchingActivePromotions ||
        (e && null != A.A.lastFetchedActivePromotions) ||
        T();
}
function p() {
    l.h.dispatch({ type: "ACTIVE_PROMOTIONS_CLEAR" });
}
async function T() {
    try {
        let e = d.default.locale;
        l.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH", locale: e });
        let t = r.DESKTOP,
            n = await a.Bo.get({
                url: I.Rsh.PROMOTIONS,
                query: { locale: e, platform: t },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            i = A.A.consumedInboundPromotionId;
        if (!A.A.hasFetchedConsumedInboundPromotionId) {
            let e = (await (0, o.LM)(h.tv, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
            i = e?.promotion_id ?? null;
        }
        l.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: n.body, consumedInboundPromotionId: i });
    } catch (e) {
        l.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
    }
}
async function m() {
    if (!A.A.isFetchingActiveBogoPromotion)
        try {
            l.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
                await a.Bo.get({ url: I.Rsh.BOGO_PROMOTIONS, query: { locale: d.default.locale }, rejectWithError: !0 })
            ).body;
            l.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS", activePromotion: u.A.createFromServer(e) });
        } catch (e) {
            l.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
        }
}
let g = {
    fetchActivePromotions: T,
    fetchClaimedOutboundPromotionCodes: async function e() {
        try {
            let e = (
                await a.Bo.get({
                    url: I.Rsh.CLAIMED_OUTBOUND_PROMOTION_CODES,
                    query: { locale: d.default.locale },
                    oldFormErrors: !0,
                    rejectWithError: (0, a.fT)(),
                })
            ).body.map(E.Ng);
            l.h.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS", claimedOutboundPromotionCodes: e });
        } catch {
            l.h.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL" });
        }
    },
    addClaimedOutboundPromotionCode: function (e) {
        l.h.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODE_ADD", claimedOutboundPromotionCode: e });
    },
    dismissOutboundPromotionNotice: function () {
        l.h.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
        let e = A.A.lastDismissedOutboundPromotionStartDate;
        null != e &&
            c.wc.updateAsync(
                "userContent",
                (t) => {
                    t.lastDismissedOutboundPromotionStartDate = s.hU.create({ value: e });
                },
                c.Sb.INFREQUENT_USER_ACTION,
            );
    },
    markOutboundPromotionsSeen() {
        l.h.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
    },
    fetchActiveBogoPromotion: m,
};
