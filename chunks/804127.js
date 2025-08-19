r.d(t, {
    G: () => c,
    u: () => l,
}),
    r(388685);
var n = r(647438),
    a = r(782568),
    o = r(49012),
    s = r(617136),
    i = r(272008);
function l(e) {
    let {
            isClaimingReward: t,
            isFetchingRewardCode: r,
            questContent: a,
            quest: o,
            requiresPlatformSelection: s,
            rewardCode: l,
            selectedPlatformType: c,
            preview: d,
        } = e,
        [u, p] = n.useState(!1),
        [m, f] = n.useState(!1),
        _ = n.useCallback(async (e, t, r) => {
            try {
                f(!0), await (0, i.QB)(e, t, r), p(!1), f(!1);
            } catch (e) {
                p(!0), f(!1);
            }
        }, []),
        C = n.useCallback((e) => {
            try {
                (0, i.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        n.useEffect(() => {
            var e, n;
            !0 === d ||
                null != l ||
                u ||
                t ||
                m ||
                r ||
                s ||
                (p(!1),
                (null == (e = o.userStatus) ? void 0 : e.claimedAt) == null && null != c
                    ? _(o.id, c, a)
                    : (null == (n = o.userStatus) ? void 0 : n.claimedAt) != null && C(o.id));
        }, [_, C, u, t, m, r, a, o, s, l, c, d]),
        {
            claimCode: _,
            fetchCode: C,
            hasError: u,
            setHasError: p,
        }
    );
}
function c(e) {
    var t;
    let {
            claimCode: r,
            fetchCode: i,
            hasError: l,
            onDismiss: c,
            quest: d,
            questContent: u,
            questContentCTA: p = s.jZ.GET_REWARD_CODE,
            questContentPosition: m,
            requiresPlatformSelection: f,
            selectedPlatformType: _,
            redemptionLink: C,
            sourceQuestContent: h,
        } = e,
        b = (0, s.O5)();
    return n.useCallback(() => {
        var e;
        f && null != _
            ? (r(d.id, _, u),
              b({
                  questId: d.id,
                  questContent: u,
                  questContentCTA: p,
                  questContentPosition: m,
                  sourceQuestContent: h,
              }))
            : l
              ? (null == (e = d.userStatus) ? void 0 : e.claimedAt) != null
                  ? i(d.id)
                  : null != _ &&
                    (r(d.id, _, u),
                    b({
                        questId: d.id,
                        questContent: u,
                        questContentCTA: p,
                        questContentPosition: m,
                        sourceQuestContent: h,
                    }))
              : (null != C &&
                    (b({
                        questId: d.id,
                        questContent: u,
                        questContentCTA: s.jZ.REDEEM_REWARD,
                        questContentPosition: m,
                        sourceQuestContent: h,
                    }),
                    (0, o.q)({
                        href: C,
                        onConfirm: () => {
                            b({
                                questId: d.id,
                                questContent: u,
                                questContentCTA: s.jZ.VISIT_REDEMPTION_LINK,
                                questContentPosition: m,
                                sourceQuestContent: h,
                            }),
                                (0, a.Z)(C);
                        },
                    })),
                c());
    }, [r, i, l, c, d.id, null == (t = d.userStatus) ? void 0 : t.claimedAt, u, p, m, f, _, b, C, h]);
}
