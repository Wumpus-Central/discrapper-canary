n.d(t, {
    G$: () => d,
    In: () => c,
    uL: () => l,
}),
    n(388685);
var r = n(647438),
    a = n(782568),
    i = n(49012),
    o = n(617136),
    s = n(272008);
function l(e) {
    let {
            isClaimingReward: t,
            isFetchingRewardCode: n,
            questContent: a,
            quest: i,
            requiresPlatformSelection: o,
            rewardCode: l,
            selectedPlatformType: c,
            preview: d,
        } = e,
        [u, m] = r.useState(!1),
        [p, C] = r.useState(!1),
        f = r.useCallback(async (e, t, n) => {
            try {
                C(!0), await (0, s.QB)(e, t, n), m(!1), C(!1);
            } catch (e) {
                m(!0), C(!1);
            }
        }, []),
        h = r.useCallback((e) => {
            try {
                (0, s.pf)(e);
            } catch (e) {
                m(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            !0 === d ||
                null != l ||
                u ||
                t ||
                p ||
                n ||
                o ||
                (m(!1),
                (null == (e = i.userStatus) ? void 0 : e.claimedAt) == null && null != c
                    ? f(i.id, c, a)
                    : (null == (r = i.userStatus) ? void 0 : r.claimedAt) != null && h(i.id));
        }, [f, h, u, t, p, n, a, i, o, l, c, d]),
        {
            claimCode: f,
            fetchCode: h,
            hasError: u,
            setHasError: m,
        }
    );
}
function c(e) {
    let { quest: t, redemptionLink: n, questContent: s, questContentPosition: l, sourceQuestContent: c } = e,
        d = (0, o.O5)();
    return r.useCallback(() => {
        null != n &&
            (d({
                questId: t.id,
                questContent: s,
                questContentCTA: o.jZ.REDEEM_REWARD,
                questContentPosition: l,
                sourceQuestContent: c,
            }),
            (0, i.q)({
                href: n,
                onConfirm: () => {
                    d({
                        questId: t.id,
                        questContent: s,
                        questContentCTA: o.jZ.VISIT_REDEMPTION_LINK,
                        questContentPosition: l,
                        sourceQuestContent: c,
                    }),
                        (0, a.Z)(n);
                },
            }));
    }, [t.id, s, l, c, d, n]);
}
function d(e) {
    var t;
    let {
            claimCode: n,
            fetchCode: a,
            hasError: i,
            onDismiss: s,
            quest: l,
            questContent: d,
            questContentCTA: u = o.jZ.GET_REWARD_CODE,
            questContentPosition: m,
            requiresPlatformSelection: p,
            selectedPlatformType: C,
            redemptionLink: f,
            sourceQuestContent: h,
        } = e,
        j = (0, o.O5)(),
        y = c(e);
    return r.useCallback(() => {
        var e;
        p && null != C
            ? (n(l.id, C, d),
              j({
                  questId: l.id,
                  questContent: d,
                  questContentCTA: u,
                  questContentPosition: m,
                  sourceQuestContent: h,
              }))
            : i
              ? (null == (e = l.userStatus) ? void 0 : e.claimedAt) != null
                  ? a(l.id)
                  : null != C &&
                    (n(l.id, C, d),
                    j({
                        questId: l.id,
                        questContent: d,
                        questContentCTA: u,
                        questContentPosition: m,
                        sourceQuestContent: h,
                    }))
              : (null != f && y(), s());
    }, [n, a, i, s, l.id, null == (t = l.userStatus) ? void 0 : t.claimedAt, d, u, m, p, C, j, f, h, y]);
}
