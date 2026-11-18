(a(323874), a(14289), a(35956), a(323889));
var i = a(620632),
    r = a(73153),
    d = a(181658),
    _ = a(157695);
a(314329);
var n = a(196979);
a(107195);
var s = a(881615),
    l = a(903063),
    c = a(626584);
a(544180);
var o = a(927813),
    E = a(265704),
    S = a(122760),
    p = a(506988),
    u = a(479442),
    h = a(710969),
    T = a(221596),
    A = a(652215);
let C = 15 * o.A.Millis.SECOND,
    I = new c.A("BountyActionCreators");
a.d(
    t,
    {},
    {
        Hq: async function (e, t) {
            if (!E.A.isClaimingBountyReward(e)) {
                r.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_BEGIN", bountyId: e });
                try {
                    let a = await (0, l.Ht)(),
                        d = (0, s.sN)(),
                        _ = (0, h.L4)(t, e),
                        n = (0, h.Gp)(t, void 0, e);
                    (await i.Bo.post({
                        url: A.Rsh.QUESTS_CREATIVES_CLAIM_REWARD(e),
                        body: {
                            decision_metadata_sealed: null != _ ? _ : null,
                            traffic_metadata_sealed: null != n ? n : null,
                            client_ad_session_id: d.uuid,
                            client_heartbeat_session_id: a?.uuid,
                        },
                        rejectWithError: !1,
                    }),
                        r.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_SUCCESS", bountyId: e }));
                } catch (a) {
                    let t = new d.A(a);
                    throw (r.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_FAILURE", bountyId: e, error: t }), t);
                }
            }
        },
        Xo: async function (e, t) {
            let { adCreativeId: a, adCreativeType: _ } = e;
            if (!(!(0, h.vy)(t) || S.A.isDismissingContent(a))) {
                r.h.dispatch({ type: "AD_CONTENT_DISMISS_BEGIN", adCreativeType: _, adCreativeId: a });
                try {
                    let e = (0, h.L4)(t, a),
                        d = (0, h.Gp)(t, void 0, a),
                        n = (0, h.HN)(t);
                    (await i.Bo.post({
                        url: A.Rsh.QUESTS_CREATIVES_DISMISS(a),
                        body: {
                            decision_metadata_sealed: null != e ? e : null,
                            traffic_metadata_sealed: null != d ? d : null,
                            placement: null != n ? n : null,
                            ad_creative_type: _,
                        },
                        rejectWithError: !1,
                    }),
                        r.h.dispatch({ type: "AD_CONTENT_DISMISS_SUCCESS", adCreativeId: a }));
                } catch (e) {
                    r.h.dispatch({ type: "AD_CONTENT_DISMISS_FAILURE", adCreativeId: a, error: new d.A(e) });
                }
            }
        },
        hh: async function (e, t) {
            let a = Date.now() + C;
            for (; _.A.isFetchingAdToDeliverByPlacement(t) && Date.now() < a;)
                await new Promise((e) => {
                    let i = !1,
                        r = setTimeout(() => {
                            ((i = !0), e());
                        }, a - Date.now());
                    _.A.addConditionalChangeListener(
                        () => !i && (!!_.A.isFetchingAdToDeliverByPlacement(t) || (clearTimeout(r), e(), !1)),
                    );
                });
            if (t === p.p9.DESKTOP_ACCOUNT_PANEL_AREA && !u.w.getConfig({ location: T.rE.BOUNTY_PREVIEW_LINK }).enabled)
                return null;
            let s = Date.now();
            r.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: t });
            try {
                let a = new URLSearchParams([
                        ["ad_creative_ids", e],
                        ["placement", String(t)],
                    ]),
                    _ = await i.Bo.get({
                        url: `${A.Rsh.QUESTS_CREATIVE_PREVIEW}?${a.toString()}`,
                        rejectWithError: !1,
                    }),
                    l = _.body,
                    c = l.decisions?.[0] ?? null,
                    o = c?.creative ?? null,
                    E = (0, n.Y)(o);
                if (null == E)
                    return (
                        I.error("Creative preview returned no renderable creative", {
                            adCreativeId: e,
                            creativeType: o?.creative_type,
                        }),
                        r.h.dispatch({
                            type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE",
                            placement: t,
                            error: new d.A({ status: _.status, body: _.body }),
                        }),
                        null
                    );
                return (
                    r.h.dispatch({
                        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                        creative: E,
                        adDecisionData: {
                            ad_id: c?.ad_identifiers?.ad_id,
                            adset_id: c?.ad_identifiers?.adset_id,
                            ad_set_id: c?.ad_identifiers?.ad_set_id,
                            campaign_id: c?.ad_identifiers?.campaign_id,
                            creative_id: c?.ad_identifiers?.creative_id,
                            creative_type: c?.ad_identifiers?.creative_type,
                            decision_id: l.request_id,
                            is_targeted: c?.ad_identifiers != null,
                        },
                        adContext: c?.ad_context,
                        metadataSealed: c?.metadata_sealed,
                        trafficMetadataSealed: c?.traffic_metadata_sealed,
                        provenanceMetadataSealed: c?.provenance_metadata_sealed,
                        responseTtlSeconds: 300,
                        placement: t,
                        fetchedAt: s,
                    }),
                    E
                );
            } catch (a) {
                return (
                    I.error("Failed to fetch dock creative preview for adCreativeId", {
                        error: a,
                        adCreativeId: e,
                        status: a?.status,
                    }),
                    r.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: t, error: new d.A(a) }),
                    null
                );
            }
        },
    },
);
