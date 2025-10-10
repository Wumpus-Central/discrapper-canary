n.d(t, {
    G$: () => d,
    In: () => c,
    uL: () => i,
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
    let { quest: t, redemptionLink: n, questContent: s, questContentPosition: i, sourceQuestContent: c } = e,
        d = (0, l.O5)();
    return r.useCallback(() => {
        null != n &&
            (d({
                questId: t.id,
                questContent: s,
                questContentCTA: l.jZ.REDEEM_REWARD,
                questContentPosition: i,
                sourceQuestContent: c,
            }),
            (0, o.q)({
                href: n,
                onConfirm: () => {
                    d({
                        questId: t.id,
                        questContent: s,
                        questContentCTA: l.jZ.VISIT_REDEMPTION_LINK,
                        questContentPosition: i,
                        sourceQuestContent: c,
                    }),
                        (0, a.Z)(n);
                },
            }));
    }, [t.id, s, i, c, d, n]);
}
function d(e) {
    var t;
    let {
            claimCode: n,
            fetchCode: a,
            hasError: o,
            onDismiss: s,
            quest: i,
            questContent: d,
            questContentCTA: u = l.jZ.GET_REWARD_CODE,
            questContentPosition: p,
            requiresPlatformSelection: m,
            selectedPlatformType: f,
            redemptionLink: b,
            sourceQuestContent: g,
        } = e,
        h = (0, l.O5)(),
        C = c(e);
    return r.useCallback(() => {
        var e;
        m && null != f
            ? (n(i.id, f, d),
              h({
                  questId: i.id,
                  questContent: d,
                  questContentCTA: u,
                  questContentPosition: p,
                  sourceQuestContent: g,
              }))
            : o
              ? (null == (e = i.userStatus) ? void 0 : e.claimedAt) != null
                  ? a(i.id)
                  : null != f &&
                    (n(i.id, f, d),
                    h({
                        questId: i.id,
                        questContent: d,
                        questContentCTA: u,
                        questContentPosition: p,
                        sourceQuestContent: g,
                    }))
              : (null != b && C(), s());
    }, [n, a, o, s, i.id, null == (t = i.userStatus) ? void 0 : t.claimedAt, d, u, p, m, f, h, b, g, C]);
}
