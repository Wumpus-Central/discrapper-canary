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
            preview: u,
        } = e,
        [d, p] = r.useState(!1),
        [m, f] = r.useState(!1),
        b = r.useCallback(async (e, t, n) => {
            try {
                f(!0), await (0, s.QB)(e, t, n), p(!1), f(!1);
            } catch (e) {
                p(!0), f(!1);
            }
        }, []),
        h = r.useCallback((e) => {
            try {
                (0, s.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            !0 === u ||
                null != i ||
                d ||
                t ||
                m ||
                n ||
                l ||
                (p(!1),
                (null == (e = o.userStatus) ? void 0 : e.claimedAt) == null && null != c
                    ? b(o.id, c, a)
                    : (null == (r = o.userStatus) ? void 0 : r.claimedAt) != null && h(o.id));
        }, [b, h, d, t, m, n, a, o, l, i, c, u]),
        {
            claimCode: b,
            fetchCode: h,
            hasError: d,
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
            quest: u,
            questContent: d,
            questContentCTA: p = l.jZ.GET_REWARD_CODE,
            questContentPosition: m,
            requiresPlatformSelection: f,
            selectedPlatformType: b,
            redemptionLink: h,
            sourceQuestContent: g,
        } = e,
        y = (0, l.O5)();
    return r.useCallback(() => {
        var e;
        f && null != b
            ? (n(u.id, b, d),
              y({
                  questId: u.id,
                  questContent: d,
                  questContentCTA: p,
                  questContentPosition: m,
                  sourceQuestContent: g,
              }))
            : i
              ? (null == (e = u.userStatus) ? void 0 : e.claimedAt) != null
                  ? s(u.id)
                  : null != b &&
                    (n(u.id, b, d),
                    y({
                        questId: u.id,
                        questContent: d,
                        questContentCTA: p,
                        questContentPosition: m,
                        sourceQuestContent: g,
                    }))
              : (null != h &&
                    (y({
                        questId: u.id,
                        questContent: d,
                        questContentCTA: l.jZ.REDEEM_REWARD,
                        questContentPosition: m,
                        sourceQuestContent: g,
                    }),
                    (0, o.q)({
                        href: h,
                        onConfirm: () => {
                            y({
                                questId: u.id,
                                questContent: d,
                                questContentCTA: l.jZ.VISIT_REDEMPTION_LINK,
                                questContentPosition: m,
                                sourceQuestContent: g,
                            }),
                                (0, a.Z)(h);
                        },
                    })),
                c());
    }, [n, s, i, c, u.id, null == (t = u.userStatus) ? void 0 : t.claimedAt, d, p, m, f, b, y, h, g]);
}
