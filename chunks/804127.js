(r.d(t, {
    G: () => c,
    u: () => l
}),
    r(388685));
var n = r(73800),
    o = r(782568),
    a = r(49012),
    s = r(617136),
    i = r(272008);
function l(e) {
    let { isClaimingReward: t, isFetchingRewardCode: r, questContent: o, quest: a, requiresPlatformSelection: s, rewardCode: l, selectedPlatformType: c, preview: d } = e,
        [u, p] = n.useState(!1),
        [_, f] = n.useState(!1),
        m = n.useCallback(async (e, t, r) => {
            try {
                (f(!0), await (0, i.QB)(e, t, r), p(!1), f(!1));
            } catch (e) {
                (p(!0), f(!1));
            }
        }, []),
        C = n.useCallback((e) => {
            try {
                (0, i.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        n.useEffect(() => {
            var e, n;
            !0 === d || null != l || u || t || _ || r || s || (p(!1), (null == (e = a.userStatus) ? void 0 : e.claimedAt) == null && null != c ? m(a.id, c, o) : (null == (n = a.userStatus) ? void 0 : n.claimedAt) != null && C(a.id));
        }, [m, C, u, t, _, r, o, a, s, l, c, d]),
        {
            claimCode: m,
            fetchCode: C,
            hasError: u,
            setHasError: p
        }
    );
}
function c(e) {
    var t;
    let { claimCode: r, fetchCode: i, hasError: l, onDismiss: c, quest: d, questContent: u, questContentCTA: p = s.jZ.GET_REWARD_CODE, questContentPosition: _, requiresPlatformSelection: f, selectedPlatformType: m, redemptionLink: C, sourceQuestContent: h } = e,
        b = (0, s.O5)();
    return n.useCallback(() => {
        var e;
        f && null != m
            ? (r(d.id, m, u),
              b({
                  questId: d.id,
                  questContent: u,
                  questContentCTA: p,
                  questContentPosition: _,
                  sourceQuestContent: h
              }))
            : l
              ? (null == (e = d.userStatus) ? void 0 : e.claimedAt) != null
                  ? i(d.id)
                  : null != m &&
                    (r(d.id, m, u),
                    b({
                        questId: d.id,
                        questContent: u,
                        questContentCTA: p,
                        questContentPosition: _,
                        sourceQuestContent: h
                    }))
              : (null != C &&
                    (b({
                        questId: d.id,
                        questContent: u,
                        questContentCTA: s.jZ.REDEEM_REWARD,
                        questContentPosition: _,
                        sourceQuestContent: h
                    }),
                    (0, a.q)({
                        href: C,
                        onConfirm: () => {
                            (b({
                                questId: d.id,
                                questContent: u,
                                questContentCTA: s.jZ.VISIT_REDEMPTION_LINK,
                                questContentPosition: _,
                                sourceQuestContent: h
                            }),
                                (0, o.Z)(C));
                        }
                    })),
                c());
    }, [r, i, l, c, d.id, null == (t = d.userStatus) ? void 0 : t.claimedAt, u, p, _, f, m, b, C, h]);
}
