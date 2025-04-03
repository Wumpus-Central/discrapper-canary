r.d(t, {
    G: () => c,
    u: () => l
}),
    r(47120);
var n = r(192379),
    a = r(782568),
    o = r(49012),
    s = r(617136),
    i = r(272008);
function l(e) {
    let { isClaimingReward: t, isFetchingRewardCode: r, questContent: a, quest: o, requiresPlatformSelection: s, rewardCode: l, selectedPlatformType: c, preview: d } = e,
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
            !0 === d || null != l || u || t || _ || r || s || (p(!1), (null == (e = o.userStatus) ? void 0 : e.claimedAt) == null && null != c ? f(o.id, c, a) : (null == (n = o.userStatus) ? void 0 : n.claimedAt) != null && b(o.id));
        }, [f, b, u, t, _, r, a, o, s, l, c, d]),
        {
            claimCode: f,
            fetchCode: b,
            hasError: u,
            setHasError: p
        }
    );
}
function c(e) {
    var t;
    let { claimCode: r, fetchCode: i, hasError: l, onDismiss: c, quest: d, questContent: u, questContentCTA: p = s.jZ.GET_REWARD_CODE, questContentPosition: _, requiresPlatformSelection: m, selectedPlatformType: f, redemptionLink: b } = e,
        g = (0, s.O5)();
    return n.useCallback(() => {
        var e;
        m && null != f
            ? (r(d.id, f, u),
              g({
                  questId: d.id,
                  questContent: u,
                  questContentCTA: p,
                  questContentPosition: _
              }))
            : l
              ? (null == (e = d.userStatus) ? void 0 : e.claimedAt) != null
                  ? i(d.id)
                  : null != f &&
                    (r(d.id, f, u),
                    g({
                        questId: d.id,
                        questContent: u,
                        questContentCTA: p,
                        questContentPosition: _
                    }))
              : (null != b &&
                    (g({
                        questId: d.id,
                        questContent: u,
                        questContentCTA: s.jZ.REDEEM_REWARD,
                        questContentPosition: _
                    }),
                    (0, o.q)({
                        href: b,
                        onConfirm: () => {
                            g({
                                questId: d.id,
                                questContent: u,
                                questContentCTA: s.jZ.VISIT_REDEMPTION_LINK,
                                questContentPosition: _
                            }),
                                (0, a.Z)(b);
                        }
                    })),
                c());
    }, [r, i, l, c, d.id, null == (t = d.userStatus) ? void 0 : t.claimedAt, u, p, _, m, f, g, b]);
}
