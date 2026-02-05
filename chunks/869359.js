"use strict";
n.d(t, { A: () => h });
var r = n(789999),
    i = n(69114),
    a = n(322683),
    s = n(544180),
    o = n(954571),
    l = n(859703),
    u = n(302654),
    c = n(652215);
let d = 0.1;
function _(e, t) {
    let n = (e) => (null == e ? "null" : null == e.questId ? "no_serve" : "quest"),
        r = n(e),
        i = n(t);
    return "quest" !== r || "quest" !== i
        ? `${r}_to_${i}`
        : e?.questId === t?.questId
          ? "same_quest"
          : "different_quest";
}
function f(e, t, n) {
    if (Math.random() > d) return;
    let l = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        u = (0, a.O)();
    o.default.track(c.HAw.QUEST_DECISION_ROUNDTRIP, {
        ...(0, i.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: l,
        mobile_network_type: s.A.getType(),
        ...(null != u && { mobile_signal_strength_level: u }),
        caller_source: e.callerSource,
        ad_request_id: e.adRequestId,
        fetched_at: n,
        previous_ad_request_id: e.previousAdDecision?.adDecisionData?.decision_id ?? null,
        previous_fetched_at: e.previousAdDecision?.fetchedAt ?? null,
        transition_case: t,
        is_foregrounded: (0, r.R)(),
    });
}
class p {
    pendingRequests = new Map();
    recordQuestRequestAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            { enableNewRequestBehavior: r } = u.A.getConfig({ location: "recordQuestRequestAttempt" }),
            i = r && null != n ? (l.A.questAdDecisionByPlacement.get(n) ?? null) : null,
            a = {
                initialSendTimestamp: Date.now(),
                endpoint: e,
                apiResponseTimestamp: null,
                wasSuccessful: !1,
                callerSource: t,
                adRequestId: null,
                previousAdDecision: i,
                placement: n,
            };
        this.pendingRequests.set(e, a),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (f(t, "timeout", null), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n, adRequestId: r = null, currentQuestId: i = null, currentFetchedAt: a = null } = t,
            s = this.pendingRequests.get(e);
        if (null != s) {
            let t,
                o,
                { enableNewRequestBehavior: l } = u.A.getConfig({ location: "recordQuestRequestApiResponse" });
            if (l) {
                let e =
                    null !== a
                        ? {
                              questId: i,
                              fetchedAt: a,
                              ttlMillis: 0,
                              adDecisionData: null != r ? { decision_id: r } : void 0,
                          }
                        : null;
                (t = _(s.previousAdDecision, e)), (o = a);
            } else (t = "legacy"), (o = null);
            f({ ...s, apiResponseTimestamp: Date.now(), wasSuccessful: n, adRequestId: r }, t, o),
                this.pendingRequests.delete(e);
        }
    }
}
let h = new p();
