n.d(t, {
    G$: () => c,
    In: () => l,
    uL: () => s,
}),
    n(388685);
var r = n(647438),
    a = n(782568),
    i = n(617136),
    o = n(272008);
function s(e) {
    let {
            isClaimingReward: t,
            isFetchingRewardCode: n,
            questContent: a,
            quest: i,
            requiresPlatformSelection: s,
            rewardCode: l,
            selectedPlatformType: c,
            preview: u,
        } = e,
        [d, m] = r.useState(!1),
        [p, C] = r.useState(!1),
        f = r.useCallback(async (e, t, n) => {
            try {
                C(!0), await (0, o.QB)(e, t, n), m(!1), C(!1);
            } catch (e) {
                m(!0), C(!1);
            }
        }, []),
        h = r.useCallback((e) => {
            try {
                (0, o.pf)(e);
            } catch (e) {
                m(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            !0 === u ||
                null != l ||
                d ||
                t ||
                p ||
                n ||
                s ||
                (m(!1),
                (null == (e = i.userStatus) ? void 0 : e.claimedAt) == null && null != c
                    ? f(i.id, c, a)
                    : (null == (r = i.userStatus) ? void 0 : r.claimedAt) != null && h(i.id));
        }, [f, h, d, t, p, n, a, i, s, l, c, u]),
        {
            claimCode: f,
            fetchCode: h,
            hasError: d,
            setHasError: m,
        }
    );
}
function l(e) {
    let { quest: t, redemptionLink: n, questContent: o, questContentPosition: s, sourceQuestContent: l } = e,
        c = (0, i.O5)();
    return r.useCallback(() => {
        null != n &&
            (c({
                questId: t.id,
                questContent: o,
                questContentCTA: i.jZ.REDEEM_REWARD,
                questContentPosition: s,
                sourceQuestContent: l,
            }),
            c({
                questId: t.id,
                questContent: o,
                questContentCTA: i.jZ.VISIT_REDEMPTION_LINK,
                questContentPosition: s,
                sourceQuestContent: l,
            }),
            (0, a.Z)(n));
    }, [t.id, o, s, l, c, n]);
}
function c(e) {
    var t;
    let {
            claimCode: n,
            fetchCode: a,
            hasError: o,
            onDismiss: s,
            quest: c,
            questContent: u,
            questContentCTA: d = i.jZ.GET_REWARD_CODE,
            questContentPosition: m,
            requiresPlatformSelection: p,
            selectedPlatformType: C,
            redemptionLink: f,
            sourceQuestContent: h,
        } = e,
        j = (0, i.O5)(),
        y = l(e);
    return r.useCallback(() => {
        var e;
        p && null != C
            ? (n(c.id, C, u),
              j({
                  questId: c.id,
                  questContent: u,
                  questContentCTA: d,
                  questContentPosition: m,
                  sourceQuestContent: h,
              }))
            : o
              ? (null == (e = c.userStatus) ? void 0 : e.claimedAt) != null
                  ? a(c.id)
                  : null != C &&
                    (n(c.id, C, u),
                    j({
                        questId: c.id,
                        questContent: u,
                        questContentCTA: d,
                        questContentPosition: m,
                        sourceQuestContent: h,
                    }))
              : (null != f && y(), s());
    }, [n, a, o, s, c.id, null == (t = c.userStatus) ? void 0 : t.claimedAt, u, d, m, p, C, j, f, h, y]);
}
