n.d(t, {
    G$: () => c,
    In: () => i,
    uL: () => l,
}),
    n(388685);
var r = n(473749),
    a = n(782568),
    o = n(22095),
    s = n(617136);
function l(e) {
    let {
            isClaimingReward: t,
            isFetchingRewardCode: n,
            questContent: a,
            quest: s,
            requiresPlatformSelection: l,
            rewardCode: i,
            selectedPlatformType: c,
            preview: d,
        } = e,
        [u, p] = r.useState(!1),
        [m, f] = r.useState(!1),
        g = r.useCallback(async (e, t, n) => {
            try {
                f(!0), await (0, o.QB)(e, t, n), p(!1), f(!1);
            } catch (e) {
                p(!0), f(!1);
            }
        }, []),
        b = r.useCallback((e) => {
            try {
                (0, o.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            !0 === d ||
                null != i ||
                u ||
                t ||
                m ||
                n ||
                l ||
                (p(!1),
                (null == (e = s.userStatus) ? void 0 : e.claimedAt) == null && null != c
                    ? g(s.id, c, a)
                    : (null == (r = s.userStatus) ? void 0 : r.claimedAt) != null && b(s.id));
        }, [g, b, u, t, m, n, a, s, l, i, c, d]),
        {
            claimCode: g,
            fetchCode: b,
            hasError: u,
            setHasError: p,
        }
    );
}
function i(e) {
    let { quest: t, redemptionLink: n, questContent: o, questContentPosition: l, sourceQuestContent: i } = e,
        c = (0, s.O5)();
    return r.useCallback(() => {
        null != n &&
            (c({
                questId: t.id,
                questContent: o,
                questContentCTA: s.jZ.REDEEM_REWARD,
                questContentPosition: l,
                sourceQuestContent: i,
            }),
            c({
                questId: t.id,
                questContent: o,
                questContentCTA: s.jZ.VISIT_REDEMPTION_LINK,
                questContentPosition: l,
                sourceQuestContent: i,
            }),
            (0, a.Z)(n));
    }, [t.id, o, l, i, c, n]);
}
function c(e) {
    var t;
    let {
            claimCode: n,
            fetchCode: a,
            hasError: o,
            onDismiss: l,
            quest: c,
            questContent: d,
            questContentCTA: u = s.jZ.GET_REWARD_CODE,
            questContentPosition: p,
            requiresPlatformSelection: m,
            selectedPlatformType: f,
            redemptionLink: g,
            sourceQuestContent: b,
        } = e,
        h = (0, s.O5)(),
        C = i(e);
    return r.useCallback(() => {
        var e;
        m && null != f
            ? (n(c.id, f, d),
              h({
                  questId: c.id,
                  questContent: d,
                  questContentCTA: u,
                  questContentPosition: p,
                  sourceQuestContent: b,
              }))
            : o
              ? (null == (e = c.userStatus) ? void 0 : e.claimedAt) != null
                  ? a(c.id)
                  : null != f &&
                    (n(c.id, f, d),
                    h({
                        questId: c.id,
                        questContent: d,
                        questContentCTA: u,
                        questContentPosition: p,
                        sourceQuestContent: b,
                    }))
              : (null != g && C(), l());
    }, [n, a, o, l, c.id, null == (t = c.userStatus) ? void 0 : t.claimedAt, d, u, p, m, f, h, g, b, C]);
}
