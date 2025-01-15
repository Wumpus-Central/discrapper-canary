n.d(t, {
    G: function () {
        return i;
    },
    u: function () {
        return s;
    }
}),
    n(47120);
var r = n(192379),
    o = n(617136),
    a = n(272008);
function s(e) {
    let { isClaimingReward: t, isFetchingRewardCode: n, questContent: o, quest: s, requiresPlatformSelection: i, rewardCode: l, selectedPlatformType: d, preview: c } = e,
        [u, p] = r.useState(!1),
        m = r.useCallback((e, t, n) => {
            p(!1);
            try {
                (0, a.QB)(e, t, n);
            } catch (e) {
                p(!0);
            }
        }, []),
        f = r.useCallback((e) => {
            p(!1);
            try {
                (0, a.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            if (!0 !== c && null == l && !u && !t && !n && !i) (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != d ? m(s.id, d, o) : (null === (r = s.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null && f(s.id);
        }, [m, f, u, t, n, o, s, i, l, d, c]),
        {
            claimCode: m,
            fetchCode: f,
            hasError: u,
            setHasError: p
        }
    );
}
function i(e) {
    var t;
    let { claimCode: n, fetchCode: a, hasError: s, onDismiss: i, quest: l, questContent: d, questContentCTA: c = o.jZ.GET_REWARD_CODE, questContentPosition: u, requiresPlatformSelection: p, selectedPlatformType: m } = e,
        f = (0, o.O5)();
    return r.useCallback(() => {
        var e;
        p && null != m
            ? (n(l.id, m, d),
              f({
                  questId: l.id,
                  questContent: d,
                  questContentCTA: c,
                  questContentPosition: u
              }))
            : s
              ? (null === (e = l.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
                  ? a(l.id)
                  : null != m &&
                    (n(l.id, m, d),
                    f({
                        questId: l.id,
                        questContent: d,
                        questContentCTA: c,
                        questContentPosition: u
                    }))
              : i();
    }, [n, a, s, i, l.id, null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt, d, c, u, p, m, f]);
}
