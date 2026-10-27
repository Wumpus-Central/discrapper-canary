(a.d(t, { Hq: () => C, Xo: () => R, hh: () => A }), a(323874), a(14289), a(35956));
var i = a(323889),
    r = a(636537),
    _ = a(73153),
    d = a(181658),
    n = a(157695),
    s = a(314329);
a(107195);
var c = a(881615),
    l = a(390595),
    o = a(626584);
a(544180);
var E = a(265704),
    S = a(859703),
    p = a(738822),
    u = a(479442),
    h = a(710969),
    T = a(190107),
    y = a(652215);
let I = new o.A("BountyActionCreators");
async function A(e, t) {
    let a = Date.now();
    if (
        n.A.isFetchingAdToDeliverByPlacement(t) ||
        (t === p.p9.DESKTOP_ACCOUNT_PANEL_AREA && !u.w.getConfig({ location: T.rE.BOUNTY_PREVIEW_LINK }).enabled)
    )
        return null;
    _.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: t });
    try {
        let n = new URLSearchParams([
                ["ad_creative_ids", e],
                ["placement", String(t)],
            ]),
            c = await r.Bo.get({ url: `${y.Rsh.QUESTS_CREATIVE_PREVIEW}?${n.toString()}`, rejectWithError: !1 }),
            l = c.body,
            o = l.decisions?.[0] ?? null,
            E = o?.creative ?? null;
        if (null == E || E.creative_type !== i.p.BOUNTY)
            return (
                I.error("Creative preview returned no renderable bounty", {
                    adCreativeId: e,
                    creativeType: E?.creative_type,
                }),
                _.h.dispatch({
                    type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE",
                    placement: t,
                    error: new d.A({ status: c.status, body: c.body }),
                }),
                null
            );
        let S = (0, s.t)(E.creative_content);
        return (
            _.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                creative: { type: i.p.BOUNTY, bounty: S },
                adDecisionData: {
                    ad_id: o?.ad_identifiers?.ad_id,
                    adset_id: o?.ad_identifiers?.adset_id,
                    ad_set_id: o?.ad_identifiers?.ad_set_id,
                    campaign_id: o?.ad_identifiers?.campaign_id,
                    creative_id: o?.ad_identifiers?.creative_id,
                    creative_type: o?.ad_identifiers?.creative_type,
                    decision_id: l.request_id,
                    is_targeted: o?.ad_identifiers != null,
                },
                adContext: o?.ad_context,
                metadataSealed: o?.metadata_sealed,
                trafficMetadataSealed: o?.traffic_metadata_sealed,
                provenanceMetadataSealed: o?.provenance_metadata_sealed,
                responseTtlSeconds: 300,
                placement: t,
                fetchedAt: a,
            }),
            S
        );
    } catch (a) {
        return (
            I.error("Failed to fetch dock creative preview for adCreativeId", {
                error: a,
                adCreativeId: e,
                status: a?.status,
            }),
            _.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: t, error: new d.A(a) }),
            null
        );
    }
}
async function C(e, t) {
    if (!E.A.isClaimingBountyReward(e)) {
        _.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_BEGIN", bountyId: e });
        try {
            let a = await (0, l.Ht)(),
                i = (0, c.sN)(),
                d = (0, h.L4)(t, e),
                n = (0, h.Gp)(t, void 0, e);
            (await r.Bo.post({
                url: y.Rsh.QUESTS_CREATIVES_CLAIM_REWARD(e),
                body: {
                    decision_metadata_sealed: null != d ? d : null,
                    traffic_metadata_sealed: null != n ? n : null,
                    client_ad_session_id: i.uuid,
                    client_heartbeat_session_id: a?.uuid,
                },
                rejectWithError: !1,
            }),
                _.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_SUCCESS", bountyId: e }));
        } catch (a) {
            let t = new d.A(a);
            throw (_.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_FAILURE", bountyId: e, error: t }), t);
        }
    }
}
async function R(e, t) {
    let { adCreativeId: a, adCreativeType: i } = e;
    if (!(!(0, h.vy)(t) || S.A.isDismissingContent(a))) {
        _.h.dispatch({ type: "AD_CONTENT_DISMISS_BEGIN", adCreativeType: i, adCreativeId: a });
        try {
            let e = (0, h.L4)(t, a),
                d = (0, h.Gp)(t, void 0, a),
                n = (0, h.HN)(t);
            (await r.Bo.post({
                url: y.Rsh.QUESTS_CREATIVES_DISMISS(a),
                body: {
                    decision_metadata_sealed: null != e ? e : null,
                    traffic_metadata_sealed: null != d ? d : null,
                    placement: null != n ? n : null,
                    ad_creative_type: i,
                },
                rejectWithError: !1,
            }),
                _.h.dispatch({ type: "AD_CONTENT_DISMISS_SUCCESS", adCreativeId: a }));
        } catch (e) {
            _.h.dispatch({ type: "AD_CONTENT_DISMISS_FAILURE", adCreativeId: a, error: new d.A(e) });
        }
    }
}
