(a(323874), a(14289), a(35956), a(323889));
var i = a(620632),
    r = a(73153),
    _ = a(181658),
    d = a(157695);
a(314329);
var n = a(196979);
a(107195);
var s = a(881615),
    c = a(903063),
    l = a(626584);
a(544180);
var E = a(265704),
    o = a(122760),
    S = a(506988),
    p = a(479442),
    u = a(710969),
    h = a(221596),
    T = a(652215);
let I = new l.A("BountyActionCreators");
a.d(
    t,
    {},
    {
        Hq: async function (e, t) {
            if (!E.A.isClaimingBountyReward(e)) {
                r.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_BEGIN", bountyId: e });
                try {
                    let a = await (0, c.Ht)(),
                        _ = (0, s.sN)(),
                        d = (0, u.L4)(t, e),
                        n = (0, u.Gp)(t, void 0, e);
                    (await i.Bo.post({
                        url: T.Rsh.QUESTS_CREATIVES_CLAIM_REWARD(e),
                        body: {
                            decision_metadata_sealed: null != d ? d : null,
                            traffic_metadata_sealed: null != n ? n : null,
                            client_ad_session_id: _.uuid,
                            client_heartbeat_session_id: a?.uuid,
                        },
                        rejectWithError: !1,
                    }),
                        r.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_SUCCESS", bountyId: e }));
                } catch (a) {
                    let t = new _.A(a);
                    throw (r.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_FAILURE", bountyId: e, error: t }), t);
                }
            }
        },
        Xo: async function (e, t) {
            let { adCreativeId: a, adCreativeType: d } = e;
            if (!(!(0, u.vy)(t) || o.A.isDismissingContent(a))) {
                r.h.dispatch({ type: "AD_CONTENT_DISMISS_BEGIN", adCreativeType: d, adCreativeId: a });
                try {
                    let e = (0, u.L4)(t, a),
                        _ = (0, u.Gp)(t, void 0, a),
                        n = (0, u.HN)(t);
                    (await i.Bo.post({
                        url: T.Rsh.QUESTS_CREATIVES_DISMISS(a),
                        body: {
                            decision_metadata_sealed: null != e ? e : null,
                            traffic_metadata_sealed: null != _ ? _ : null,
                            placement: null != n ? n : null,
                            ad_creative_type: d,
                        },
                        rejectWithError: !1,
                    }),
                        r.h.dispatch({ type: "AD_CONTENT_DISMISS_SUCCESS", adCreativeId: a }));
                } catch (e) {
                    r.h.dispatch({ type: "AD_CONTENT_DISMISS_FAILURE", adCreativeId: a, error: new _.A(e) });
                }
            }
        },
        hh: async function (e, t) {
            let a = Date.now();
            if (
                d.A.isFetchingAdToDeliverByPlacement(t) ||
                (t === S.p9.DESKTOP_ACCOUNT_PANEL_AREA &&
                    !p.w.getConfig({ location: h.rE.BOUNTY_PREVIEW_LINK }).enabled)
            )
                return null;
            r.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: t });
            try {
                let d = new URLSearchParams([
                        ["ad_creative_ids", e],
                        ["placement", String(t)],
                    ]),
                    s = await i.Bo.get({
                        url: `${T.Rsh.QUESTS_CREATIVE_PREVIEW}?${d.toString()}`,
                        rejectWithError: !1,
                    }),
                    c = s.body,
                    l = c.decisions?.[0] ?? null,
                    E = l?.creative ?? null,
                    o = (0, n.Y)(E);
                if (null == o)
                    return (
                        I.error("Creative preview returned no renderable creative", {
                            adCreativeId: e,
                            creativeType: E?.creative_type,
                        }),
                        r.h.dispatch({
                            type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE",
                            placement: t,
                            error: new _.A({ status: s.status, body: s.body }),
                        }),
                        null
                    );
                return (
                    r.h.dispatch({
                        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                        creative: o,
                        adDecisionData: {
                            ad_id: l?.ad_identifiers?.ad_id,
                            adset_id: l?.ad_identifiers?.adset_id,
                            ad_set_id: l?.ad_identifiers?.ad_set_id,
                            campaign_id: l?.ad_identifiers?.campaign_id,
                            creative_id: l?.ad_identifiers?.creative_id,
                            creative_type: l?.ad_identifiers?.creative_type,
                            decision_id: c.request_id,
                            is_targeted: l?.ad_identifiers != null,
                        },
                        adContext: l?.ad_context,
                        metadataSealed: l?.metadata_sealed,
                        trafficMetadataSealed: l?.traffic_metadata_sealed,
                        provenanceMetadataSealed: l?.provenance_metadata_sealed,
                        responseTtlSeconds: 300,
                        placement: t,
                        fetchedAt: a,
                    }),
                    o
                );
            } catch (a) {
                return (
                    I.error("Failed to fetch dock creative preview for adCreativeId", {
                        error: a,
                        adCreativeId: e,
                        status: a?.status,
                    }),
                    r.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: t, error: new _.A(a) }),
                    null
                );
            }
        },
    },
);
