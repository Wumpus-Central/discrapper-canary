n.d(t, {
    G$: () => c,
    In: () => l,
    uL: () => s,
}),
    n(388685);
var r = n(647438),
    a = n(782568),
    i = n(22095),
    o = n(617136);
function s(e) {
    let {
            isClaimingReward: t,
            isFetchingRewardCode: n,
            questContent: a,
            quest: o,
            requiresPlatformSelection: s,
            rewardCode: l,
            selectedPlatformType: c,
            preview: u,
        } = e,
        [d, p] = r.useState(!1),
        [m, C] = r.useState(!1),
        f = r.useCallback(async (e, t, n) => {
            try {
                C(!0), await (0, i.QB)(e, t, n), p(!1), C(!1);
            } catch (e) {
                p(!0), C(!1);
            }
        }, []),
        b = r.useCallback((e) => {
            try {
                (0, i.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            !0 === u ||
                null != l ||
                d ||
                t ||
                m ||
                n ||
                s ||
                (p(!1),
                (null == (e = o.userStatus) ? void 0 : e.claimedAt) == null && null != c
                    ? f(o.id, c, a)
                    : (null == (r = o.userStatus) ? void 0 : r.claimedAt) != null && b(o.id));
        }, [f, b, d, t, m, n, a, o, s, l, c, u]),
        {
            claimCode: f,
            fetchCode: b,
            hasError: d,
            setHasError: p,
        }
    );
}
function l(e) {
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
function c(e) {
    var t;
    let {
            claimCode: n,
            fetchCode: a,
            hasError: i,
            onDismiss: s,
            quest: c,
            questContent: u,
            questContentCTA: d = o.jZ.GET_REWARD_CODE,
            questContentPosition: p,
            requiresPlatformSelection: m,
            selectedPlatformType: C,
            redemptionLink: f,
            sourceQuestContent: b,
        } = e,
        h = (0, o.O5)(),
        _ = l(e);
    return r.useCallback(() => {
        var e;
        m && null != C
            ? (n(c.id, C, u),
              h({
                  questId: c.id,
                  questContent: u,
                  questContentCTA: d,
                  questContentPosition: p,
                  sourceQuestContent: b,
              }))
            : i
              ? (null == (e = c.userStatus) ? void 0 : e.claimedAt) != null
                  ? a(c.id)
                  : null != C &&
                    (n(c.id, C, u),
                    h({
                        questId: c.id,
                        questContent: u,
                        questContentCTA: d,
                        questContentPosition: p,
                        sourceQuestContent: b,
                    }))
              : (null != f && _(), s());
    }, [n, a, i, s, c.id, null == (t = c.userStatus) ? void 0 : t.claimedAt, u, d, p, m, C, h, f, b, _]);
}
