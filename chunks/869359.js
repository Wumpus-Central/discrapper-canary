"use strict";
n.d(t, { A: () => E });
var i = n(789999),
    r = n(69114),
    s = n(322683),
    a = n(544180),
    o = n(954571),
    l = n(859703),
    _ = n(302654),
    d = n(652215);
function u(e, t, n) {
    if (Math.random() > 0.1) return;
    let l = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        _ = (0, s.O)();
    o.default.track(d.HAw.QUEST_DECISION_ROUNDTRIP, {
        ...(0, r.A)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: l,
        mobile_network_type: a.A.getType(),
        ...(null != _ && { mobile_signal_strength_level: _ }),
        caller_source: e.callerSource,
        ad_request_id: e.adRequestId,
        fetched_at: n,
        previous_ad_request_id: e.previousAdDecision?.adDecisionData?.decision_id ?? null,
        previous_fetched_at: e.previousAdDecision?.fetchedAt ?? null,
        transition_case: t,
        is_foregrounded: (0, i.R)(),
    });
}
class c {
    pendingRequests = new Map();
    recordQuestRequestAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            { enableNewRequestBehavior: i } = _.A.getConfig({ location: "recordQuestRequestAttempt" }),
            r = i && null != n ? (l.A.questAdDecisionByPlacement.get(n) ?? null) : null,
            s = {
                initialSendTimestamp: Date.now(),
                endpoint: e,
                apiResponseTimestamp: null,
                wasSuccessful: !1,
                callerSource: t,
                adRequestId: null,
                previousAdDecision: r,
                placement: n,
            };
        this.pendingRequests.set(e, s),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (u(t, "timeout", null), this.pendingRequests.delete(e));
            }, 3e4);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n, adRequestId: i = null, currentQuestId: r = null, currentFetchedAt: s = null } = t,
            a = this.pendingRequests.get(e);
        if (null != a) {
            let t,
                d,
                { enableNewRequestBehavior: c } = _.A.getConfig({ location: "recordQuestRequestApiResponse" });
            if (c) {
                var o, l;
                let e, n, _;
                (o = a.previousAdDecision),
                    (l =
                        null !== s
                            ? {
                                  questId: r,
                                  adCreativeId: r,
                                  fetchedAt: s,
                                  ttlMillis: 0,
                                  adDecisionData: null != i ? { decision_id: i } : void 0,
                              }
                            : null),
                    (n = (e = (e) => (null == e ? "null" : null == e.questId ? "no_serve" : "quest"))(o)),
                    (_ = e(l)),
                    (t =
                        "quest" !== n || "quest" !== _
                            ? `${n}_to_${_}`
                            : o?.questId === l?.questId
                              ? "same_quest"
                              : "different_quest"),
                    (d = s);
            } else (t = "legacy"), (d = null);
            u({ ...a, apiResponseTimestamp: Date.now(), wasSuccessful: n, adRequestId: i }, t, d),
                this.pendingRequests.delete(e);
        }
    }
}
let E = new c();
