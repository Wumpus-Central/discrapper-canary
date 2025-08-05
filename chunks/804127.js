(r.d(t, {
    G: () => c,
    u: () => i
}),
    r(388685));
var n = r(73800),
    o = r(782568),
    a = r(49012),
    s = r(617136),
    l = r(272008);
function i(e) {
    let { isClaimingReward: t, isFetchingRewardCode: r, questContent: o, quest: a, requiresPlatformSelection: s, rewardCode: i, selectedPlatformType: c, preview: u } = e,
        [d, p] = n.useState(!1),
        [m, f] = n.useState(!1),
        b = n.useCallback(async (e, t, r) => {
            try {
                (f(!0), await (0, l.QB)(e, t, r), p(!1), f(!1));
            } catch (e) {
                (p(!0), f(!1));
            }
        }, []),
        h = n.useCallback((e) => {
            try {
                (0, l.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        n.useEffect(() => {
            var e, n;
            !0 === u || null != i || d || t || m || r || s || (p(!1), (null == (e = a.userStatus) ? void 0 : e.claimedAt) == null && null != c ? b(a.id, c, o) : (null == (n = a.userStatus) ? void 0 : n.claimedAt) != null && h(a.id));
        }, [b, h, d, t, m, r, o, a, s, i, c, u]),
        {
            claimCode: b,
            fetchCode: h,
            hasError: d,
            setHasError: p
        }
    );
}
function c(e) {
    var t;
    let { claimCode: r, fetchCode: l, hasError: i, onDismiss: c, quest: u, questContent: d, questContentCTA: p = s.jZ.GET_REWARD_CODE, questContentPosition: m, requiresPlatformSelection: f, selectedPlatformType: b, redemptionLink: h, sourceQuestContent: y } = e,
        O = (0, s.O5)();
    return n.useCallback(() => {
        var e;
        f && null != b
            ? (r(u.id, b, d),
              O({
                  questId: u.id,
                  questContent: d,
                  questContentCTA: p,
                  questContentPosition: m,
                  sourceQuestContent: y
              }))
            : i
              ? (null == (e = u.userStatus) ? void 0 : e.claimedAt) != null
                  ? l(u.id)
                  : null != b &&
                    (r(u.id, b, d),
                    O({
                        questId: u.id,
                        questContent: d,
                        questContentCTA: p,
                        questContentPosition: m,
                        sourceQuestContent: y
                    }))
              : (null != h &&
                    (O({
                        questId: u.id,
                        questContent: d,
                        questContentCTA: s.jZ.REDEEM_REWARD,
                        questContentPosition: m,
                        sourceQuestContent: y
                    }),
                    (0, a.q)({
                        href: h,
                        onConfirm: () => {
                            (O({
                                questId: u.id,
                                questContent: d,
                                questContentCTA: s.jZ.VISIT_REDEMPTION_LINK,
                                questContentPosition: m,
                                sourceQuestContent: y
                            }),
                                (0, o.Z)(h));
                        }
                    })),
                c());
    }, [r, l, i, c, u.id, null == (t = u.userStatus) ? void 0 : t.claimedAt, d, p, m, f, b, O, h, y]);
}
