(a.d(t, { hh: () => u }), a(323874), a(14289), a(35956));
var i = a(323889),
    r = a(636537),
    d = a(73153),
    _ = a(181658),
    n = a(157695),
    s = a(314329);
(a(107195), a(881615), a(390595));
var c = a(626584);
(a(544180), a(265704), a(859703));
var o = a(738822),
    E = a(479442);
a(710969);
var l = a(190107),
    p = a(652215);
let T = new c.A("BountyActionCreators");
async function u(e, t) {
    let a = Date.now();
    if (
        n.A.isFetchingAdToDeliverByPlacement(t) ||
        (t === o.p9.DESKTOP_ACCOUNT_PANEL_AREA && !E.w.getConfig({ location: l.rE.BOUNTY_PREVIEW_LINK }).enabled)
    )
        return null;
    d.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: t });
    try {
        let n = new URLSearchParams([
                ["ad_creative_ids", e],
                ["placement", String(t)],
            ]),
            c = await r.Bo.get({ url: `${p.Rsh.QUESTS_CREATIVE_PREVIEW}?${n.toString()}`, rejectWithError: !1 }),
            o = c.body,
            E = o.decisions?.[0] ?? null,
            l = E?.creative ?? null;
        if (null == l || l.creative_type !== i.p.BOUNTY)
            return (
                T.error("Creative preview returned no renderable bounty", {
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
        let u = (0, s.t)(l.creative_content);
        return (
            d.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                creative: { type: i.p.BOUNTY, bounty: u },
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
            u
        );
    } catch (a) {
        return (
            T.error("Failed to fetch dock creative preview for adCreativeId", {
                error: a,
                adCreativeId: e,
                status: a?.status,
            }),
            d.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: t, error: new _.A(a) }),
            null
        );
    }
}
