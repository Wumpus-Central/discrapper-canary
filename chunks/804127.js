r.d(t, {
    G: () => d,
    u: () => l
}),
    r(47120);
var n = r(192379),
    o = r(782568),
    a = r(49012),
    s = r(617136),
    i = r(272008);
function l(e) {
    let { isClaimingReward: t, isFetchingRewardCode: r, questContent: o, quest: a, requiresPlatformSelection: s, rewardCode: l, selectedPlatformType: d, preview: c } = e,
        [u, p] = n.useState(!1),
        [_, m] = n.useState(!1),
        f = n.useCallback(async (e, t, r) => {
            try {
                m(!0), await (0, i.QB)(e, t, r), p(!1), m(!1);
            } catch (e) {
                p(!0), m(!1);
            }
        }, []),
        b = n.useCallback((e) => {
            try {
                (0, i.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        n.useEffect(() => {
            var e, n;
            !0 !== c && null == l && !u && !t && !_ && !r && !s && (p(!1), (null === (e = a.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != d ? f(a.id, d, o) : (null === (n = a.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null && b(a.id));
        }, [f, b, u, t, _, r, o, a, s, l, d, c]),
        {
            claimCode: f,
            fetchCode: b,
            hasError: u,
            setHasError: p
        }
    );
}
function d(e) {
    var t;
    let { claimCode: r, fetchCode: i, hasError: l, onDismiss: d, quest: c, questContent: u, questContentCTA: p = s.jZ.GET_REWARD_CODE, questContentPosition: _, requiresPlatformSelection: m, selectedPlatformType: f, redemptionLink: b } = e,
        g = (0, s.O5)();
    return n.useCallback(() => {
        var e;
        m && null != f
            ? (r(c.id, f, u),
              g({
                  questId: c.id,
                  questContent: u,
                  questContentCTA: p,
                  questContentPosition: _
              }))
            : l
              ? (null === (e = c.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
                  ? i(c.id)
                  : null != f &&
                    (r(c.id, f, u),
                    g({
                        questId: c.id,
                        questContent: u,
                        questContentCTA: p,
                        questContentPosition: _
                    }))
              : (null != b &&
                    (g({
                        questId: c.id,
                        questContent: u,
                        questContentCTA: s.jZ.REDEEM_REWARD,
                        questContentPosition: _
                    }),
                    (0, a.q)({
                        href: b,
                        onConfirm: () => {
                            g({
                                questId: c.id,
                                questContent: u,
                                questContentCTA: s.jZ.VISIT_REDEMPTION_LINK,
                                questContentPosition: _
                            }),
                                (0, o.Z)(b);
                        }
                    })),
                d());
    }, [r, i, l, d, c.id, null === (t = c.userStatus) || void 0 === t ? void 0 : t.claimedAt, u, p, _, m, f, g, b]);
}
