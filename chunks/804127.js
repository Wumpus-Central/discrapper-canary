r.d(t, {
    G: function () {
        return i;
    },
    u: function () {
        return s;
    }
}),
    r(47120);
var n = r(192379),
    o = r(617136),
    a = r(272008);
function s(e) {
    let { isClaimingReward: t, isFetchingRewardCode: r, questContent: o, quest: s, requiresPlatformSelection: i, rewardCode: l, selectedPlatformType: d, preview: c } = e,
        [p, u] = n.useState(!1),
        m = n.useCallback((e, t, r) => {
            u(!1);
            try {
                (0, a.QB)(e, t, r);
            } catch (e) {
                u(!0);
            }
        }, []),
        f = n.useCallback((e) => {
            u(!1);
            try {
                (0, a.pf)(e);
            } catch (e) {
                u(!0);
            }
        }, []);
    return (
        n.useEffect(() => {
            var e, n;
            if (!0 !== c && null == l && !p && !t && !r && !i) (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != d ? m(s.id, d, o) : (null === (n = s.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null && f(s.id);
        }, [m, f, p, t, r, o, s, i, l, d, c]),
        {
            claimCode: m,
            fetchCode: f,
            hasError: p,
            setHasError: u
        }
    );
}
function i(e) {
    var t;
    let { claimCode: r, fetchCode: a, hasError: s, onDismiss: i, quest: l, questContent: d, questContentCTA: c = o.jZ.GET_REWARD_CODE, questContentPosition: p, requiresPlatformSelection: u, selectedPlatformType: m } = e,
        f = (0, o.O5)();
    return n.useCallback(() => {
        var e;
        u && null != m
            ? (r(l.id, m, d),
              f({
                  questId: l.id,
                  questContent: d,
                  questContentCTA: c,
                  questContentPosition: p
              }))
            : s
              ? (null === (e = l.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
                  ? a(l.id)
                  : null != m &&
                    (r(l.id, m, d),
                    f({
                        questId: l.id,
                        questContent: d,
                        questContentCTA: c,
                        questContentPosition: p
                    }))
              : i();
    }, [r, a, s, i, l.id, null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt, d, c, p, u, m, f]);
}
