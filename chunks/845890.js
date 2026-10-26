(a.d(t, { Hq: () => v, hh: () => A }), a(323874), a(14289), a(35956));
var i = a(323889),
    r = a(636537),
    d = a(73153),
    _ = a(181658),
    n = a(157695),
    s = a(314329);
a(107195);
var c = a(881615),
    o = a(390595),
    E = a(626584);
a(544180);
var l = a(265704);
a(859703);
var p = a(738822),
    u = a(479442),
    S = a(710969),
    h = a(190107),
    T = a(652215);
let y = new E.A("BountyActionCreators");
async function A(e, t) {
    let a = Date.now();
    if (
        n.A.isFetchingAdToDeliverByPlacement(t) ||
        (t === p.p9.DESKTOP_ACCOUNT_PANEL_AREA && !u.w.getConfig({ location: h.rE.BOUNTY_PREVIEW_LINK }).enabled)
    )
        return null;
    d.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: t });
    try {
        let n = new URLSearchParams([
                ["ad_creative_ids", e],
                ["placement", String(t)],
            ]),
            c = await r.Bo.get({ url: `${T.Rsh.QUESTS_CREATIVE_PREVIEW}?${n.toString()}`, rejectWithError: !1 }),
            o = c.body,
            E = o.decisions?.[0] ?? null,
            l = E?.creative ?? null;
        if (null == l || l.creative_type !== i.p.BOUNTY)
            return (
                y.error("Creative preview returned no renderable bounty", {
                    adCreativeId: e,
                    creativeType: l?.creative_type,
                }),
                d.h.dispatch({
                    type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE",
                    placement: t,
                    error: new _.A({ status: c.status, body: c.body }),
                }),
                null
            );
        let p = (0, s.t)(l.creative_content);
        return (
            d.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                creative: { type: i.p.BOUNTY, bounty: p },
                adDecisionData: {
                    ad_id: E?.ad_identifiers?.ad_id,
                    adset_id: E?.ad_identifiers?.adset_id,
                    ad_set_id: E?.ad_identifiers?.ad_set_id,
                    campaign_id: E?.ad_identifiers?.campaign_id,
                    creative_id: E?.ad_identifiers?.creative_id,
                    creative_type: E?.ad_identifiers?.creative_type,
                    decision_id: o.request_id,
                    is_targeted: E?.ad_identifiers != null,
                },
                adContext: E?.ad_context,
                metadataSealed: E?.metadata_sealed,
                trafficMetadataSealed: E?.traffic_metadata_sealed,
                provenanceMetadataSealed: E?.provenance_metadata_sealed,
                responseTtlSeconds: 300,
                placement: t,
                fetchedAt: a,
            }),
            p
        );
    } catch (a) {
        return (
            y.error("Failed to fetch dock creative preview for adCreativeId", {
                error: a,
                adCreativeId: e,
                status: a?.status,
            }),
            d.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: t, error: new _.A(a) }),
            null
        );
    }
}
async function v(e, t) {
    if (!l.A.isClaimingBountyReward(e)) {
        d.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_BEGIN", bountyId: e });
        try {
            let a = await (0, o.Ht)(),
                i = (0, c.sN)(),
                _ = (0, S.L4)(t, e),
                n = (0, S.Gp)(t, void 0, e);
            (await r.Bo.post({
                url: T.Rsh.QUESTS_CREATIVES_CLAIM_REWARD(e),
                body: {
                    decision_metadata_sealed: null != _ ? _ : null,
                    traffic_metadata_sealed: null != n ? n : null,
                    client_ad_session_id: i.uuid,
                    client_heartbeat_session_id: a?.uuid,
                },
                rejectWithError: !1,
            }),
                d.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_SUCCESS", bountyId: e }));
        } catch (a) {
            let t = new _.A(a);
            throw (d.h.dispatch({ type: "BOUNTIES_CLAIM_REWARD_FAILURE", bountyId: e, error: t }), t);
        }
    }
}
