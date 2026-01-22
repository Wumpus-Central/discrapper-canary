n.d(t, { R: () => d });
var a = n(473749),
    r = n(286379),
    i = n(797614),
    l = n(617136),
    s = n(823289),
    o = n(49436),
    c = n(981631);
function d(e) {
    let {
        quest: t,
        hasAssetsError: n,
        isEligibleForQuests: d,
        isQuestBarVisible: u,
        isVisibilityAnimationAtRest: m,
        isLoadingAssets: p,
        currentQuestVisibleReason: h,
        shouldShowQuestBar: f,
        isQuestEnrollmentBlocked: b,
        impressionRef: x,
    } = e;
    a.useEffect(() => {
        if (n) {
            var e;
            (0, l.dA)({
                questId: t.id,
                event: c.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    content_id: o.jn.QUEST_BAR,
                    content_name: (0, l._b)(o.jn.QUEST_BAR),
                    reason: "asset_loading_error",
                    impression_id: null == (e = x.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: o.jn.QUEST_BAR_V2,
            }),
                i.Z.increment({
                    name: r.V.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: ["quest_id:".concat(t.id), "reason:asset_loading_error"],
                });
        }
    }, [n, x, t.id]),
        a.useEffect(() => {
            if (!d) {
                var e;
                (0, l.dA)({
                    questId: t.id,
                    event: c.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: o.jn.QUEST_BAR,
                        content_name: (0, l._b)(o.jn.QUEST_BAR),
                        reason: "not_eligible_for_quest",
                        impression_id: null == (e = x.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: o.jn.QUEST_BAR_V2,
                });
            }
        }, [d, x, t.id]),
        a.useEffect(() => {
            if (!u && m && !p) {
                var e;
                (0, l.dA)({
                    questId: t.id,
                    event: c.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: o.jn.QUEST_BAR,
                        content_name: (0, l._b)(o.jn.QUEST_BAR),
                        reason: h,
                        impression_id: null == (e = x.current) ? void 0 : e.getId(),
                    },
                    sourceQuestContent: o.jn.QUEST_BAR_V2,
                });
            }
        }, [u, m, p, t.id, h, x]),
        a.useEffect(() => {
            (!f || b) && s.Z.clearTracking(), u && m && !p && !n && d && s.Z.stopTracking(t.id);
        }, [f, b, u, m, p, n, d, t.id]);
}
