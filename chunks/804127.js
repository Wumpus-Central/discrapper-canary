r.d(t, {
    G: () => i,
    u: () => s
}),
    r(47120);
var n = r(192379),
    a = r(617136),
    o = r(272008);
function s(e) {
    let { isClaimingReward: t, isFetchingRewardCode: r, questContent: a, quest: s, requiresPlatformSelection: i, rewardCode: l, selectedPlatformType: d, preview: c } = e,
        [u, p] = n.useState(!1),
        _ = n.useCallback(async (e, t, r) => {
            try {
                await (0, o.QB)(e, t, r), p(!1);
            } catch (e) {
                p(!0);
            }
        }, []),
        m = n.useCallback((e) => {
            try {
                (0, o.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        n.useEffect(() => {
            var e, n;
            !0 !== c && null == l && !u && !t && !r && !i && (p(!1), (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != d ? _(s.id, d, a) : (null === (n = s.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null && m(s.id));
        }, [_, m, u, t, r, a, s, i, l, d, c]),
        {
            claimCode: _,
            fetchCode: m,
            hasError: u,
            setHasError: p
        }
    );
}
function i(e) {
    var t;
    let { claimCode: r, fetchCode: o, hasError: s, onDismiss: i, quest: l, questContent: d, questContentCTA: c = a.jZ.GET_REWARD_CODE, questContentPosition: u, requiresPlatformSelection: p, selectedPlatformType: _ } = e,
        m = (0, a.O5)();
    return n.useCallback(() => {
        var e;
        p && null != _
            ? (r(l.id, _, d),
              m({
                  questId: l.id,
                  questContent: d,
                  questContentCTA: c,
                  questContentPosition: u
              }))
            : s
              ? (null === (e = l.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
                  ? o(l.id)
                  : null != _ &&
                    (r(l.id, _, d),
                    m({
                        questId: l.id,
                        questContent: d,
                        questContentCTA: c,
                        questContentPosition: u
                    }))
              : i();
    }, [r, o, s, i, l.id, null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt, d, c, u, p, _, m]);
}
