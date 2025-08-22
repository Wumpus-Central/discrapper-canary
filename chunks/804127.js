n.d(t, {
    G: () => c,
    u: () => i,
}),
    n(388685);
var r = n(647438),
    a = n(782568),
    o = n(49012),
    l = n(617136),
    s = n(272008);
function i(e) {
    let {
            isClaimingReward: t,
            isFetchingRewardCode: n,
            questContent: a,
            quest: o,
            requiresPlatformSelection: l,
            rewardCode: i,
            selectedPlatformType: c,
            preview: d,
        } = e,
        [u, p] = r.useState(!1),
        [m, f] = r.useState(!1),
        b = r.useCallback(async (e, t, n) => {
            try {
                f(!0), await (0, s.QB)(e, t, n), p(!1), f(!1);
            } catch (e) {
                p(!0), f(!1);
            }
        }, []),
        g = r.useCallback((e) => {
            try {
                (0, s.pf)(e);
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
                (null == (e = o.userStatus) ? void 0 : e.claimedAt) == null && null != c
                    ? b(o.id, c, a)
                    : (null == (r = o.userStatus) ? void 0 : r.claimedAt) != null && g(o.id));
        }, [b, g, u, t, m, n, a, o, l, i, c, d]),
        {
            claimCode: b,
            fetchCode: g,
            hasError: u,
            setHasError: p,
        }
    );
}
function c(e) {
    var t;
    let {
            claimCode: n,
            fetchCode: s,
            hasError: i,
            onDismiss: c,
            quest: d,
            questContent: u,
            questContentCTA: p = l.jZ.GET_REWARD_CODE,
            questContentPosition: m,
            requiresPlatformSelection: f,
            selectedPlatformType: b,
            redemptionLink: g,
            sourceQuestContent: h,
        } = e,
        C = (0, l.O5)();
    return r.useCallback(() => {
        var e;
        f && null != b
            ? (n(d.id, b, u),
              C({
                  questId: d.id,
                  questContent: u,
                  questContentCTA: p,
                  questContentPosition: m,
                  sourceQuestContent: h,
              }))
            : i
              ? (null == (e = d.userStatus) ? void 0 : e.claimedAt) != null
                  ? s(d.id)
                  : null != b &&
                    (n(d.id, b, u),
                    C({
                        questId: d.id,
                        questContent: u,
                        questContentCTA: p,
                        questContentPosition: m,
                        sourceQuestContent: h,
                    }))
              : (null != g &&
                    (C({
                        questId: d.id,
                        questContent: u,
                        questContentCTA: l.jZ.REDEEM_REWARD,
                        questContentPosition: m,
                        sourceQuestContent: h,
                    }),
                    (0, o.q)({
                        href: g,
                        onConfirm: () => {
                            C({
                                questId: d.id,
                                questContent: u,
                                questContentCTA: l.jZ.VISIT_REDEMPTION_LINK,
                                questContentPosition: m,
                                sourceQuestContent: h,
                            }),
                                (0, a.Z)(g);
                        },
                    })),
                c());
    }, [n, s, i, c, d.id, null == (t = d.userStatus) ? void 0 : t.claimedAt, u, p, m, f, b, C, g, h]);
}
