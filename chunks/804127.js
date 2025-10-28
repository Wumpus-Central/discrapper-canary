n.d(t, {
    G$: () => c,
    In: () => i,
    uL: () => s,
}),
    n(388685);
var r = n(647438),
    a = n(782568),
    o = n(617136),
    l = n(272008);
function s(e) {
    let {
            isClaimingReward: t,
            isFetchingRewardCode: n,
            questContent: a,
            quest: o,
            requiresPlatformSelection: s,
            rewardCode: i,
            selectedPlatformType: c,
            preview: d,
        } = e,
        [u, p] = r.useState(!1),
        [m, f] = r.useState(!1),
        b = r.useCallback(async (e, t, n) => {
            try {
                f(!0), await (0, l.QB)(e, t, n), p(!1), f(!1);
            } catch (e) {
                p(!0), f(!1);
            }
        }, []),
        g = r.useCallback((e) => {
            try {
                (0, l.pf)(e);
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
                s ||
                (p(!1),
                (null == (e = o.userStatus) ? void 0 : e.claimedAt) == null && null != c
                    ? b(o.id, c, a)
                    : (null == (r = o.userStatus) ? void 0 : r.claimedAt) != null && g(o.id));
        }, [b, g, u, t, m, n, a, o, s, i, c, d]),
        {
            claimCode: b,
            fetchCode: g,
            hasError: u,
            setHasError: p,
        }
    );
}
function i(e) {
    let { quest: t, redemptionLink: n, questContent: l, questContentPosition: s, sourceQuestContent: i } = e,
        c = (0, o.O5)();
    return r.useCallback(() => {
        null != n &&
            (c({
                questId: t.id,
                questContent: l,
                questContentCTA: o.jZ.REDEEM_REWARD,
                questContentPosition: s,
                sourceQuestContent: i,
            }),
            c({
                questId: t.id,
                questContent: l,
                questContentCTA: o.jZ.VISIT_REDEMPTION_LINK,
                questContentPosition: s,
                sourceQuestContent: i,
            }),
            (0, a.Z)(n));
    }, [t.id, l, s, i, c, n]);
}
function c(e) {
    var t;
    let {
            claimCode: n,
            fetchCode: a,
            hasError: l,
            onDismiss: s,
            quest: c,
            questContent: d,
            questContentCTA: u = o.jZ.GET_REWARD_CODE,
            questContentPosition: p,
            requiresPlatformSelection: m,
            selectedPlatformType: f,
            redemptionLink: b,
            sourceQuestContent: g,
        } = e,
        h = (0, o.O5)(),
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
                  sourceQuestContent: g,
              }))
            : l
              ? (null == (e = c.userStatus) ? void 0 : e.claimedAt) != null
                  ? a(c.id)
                  : null != f &&
                    (n(c.id, f, d),
                    h({
                        questId: c.id,
                        questContent: d,
                        questContentCTA: u,
                        questContentPosition: p,
                        sourceQuestContent: g,
                    }))
              : (null != b && C(), s());
    }, [n, a, l, s, c.id, null == (t = c.userStatus) ? void 0 : t.claimedAt, d, u, p, m, f, h, b, g, C]);
}
