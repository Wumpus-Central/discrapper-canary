n.d(t, {
    In: () => c,
    uL: () => l,
}),
    n(388685);
var r = n(473749),
    a = n(782568),
    i = n(22095),
    o = n(617136),
    s = n(49436);
function l(e) {
    let { isClaimingReward: t, isFetchingRewardCode: n, questContent: a, quest: o, rewardCode: l, preview: c } = e,
        [d, u] = r.useState(!1),
        [m, p] = r.useState(!1),
        C = r.useCallback(async (e, t, n) => {
            try {
                p(!0), await (0, i.QB)(e, t, n), u(!1), p(!1);
            } catch (e) {
                u(!0), p(!1);
            }
        }, []),
        f = r.useCallback((e) => {
            try {
                (0, i.pf)(e);
            } catch (e) {
                u(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            !0 === c ||
                null != l ||
                d ||
                t ||
                m ||
                n ||
                (u(!1),
                (null == (e = o.userStatus) ? void 0 : e.claimedAt) == null
                    ? C(o.id, s.y$.CROSS_PLATFORM, a)
                    : (null == (r = o.userStatus) ? void 0 : r.claimedAt) != null && f(o.id));
        }, [C, f, d, t, m, n, a, o, l, c]),
        {
            claimCode: C,
            fetchCode: f,
            hasError: d,
            setHasError: u,
        }
    );
}
function c(e) {
    let { quest: t, redemptionLink: n, questContent: i, questContentPosition: s, sourceQuestContent: l } = e,
        c = (0, o.O5)();
    return r.useCallback(() => {
        null != n &&
            (c({
                questId: t.id,
                questContent: i,
                questContentCTA: o.jZ.REDEEM_REWARD,
                questContentPosition: s,
                sourceQuestContent: l,
            }),
            c({
                questId: t.id,
                questContent: i,
                questContentCTA: o.jZ.VISIT_REDEMPTION_LINK,
                questContentPosition: s,
                sourceQuestContent: l,
            }),
            (0, a.Z)(n));
    }, [t.id, i, s, l, c, n]);
}
