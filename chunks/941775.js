n.d(t, { A: () => o });
var i = n(627968),
    r = n(17928),
    s = n(821609),
    l = n(859703),
    a = n(201805),
    d = n(985018);
let o = function (e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: _,
            analyticsCtxQuestContentRowIndex: u,
            size: c,
        } = e,
        E = t.id,
        { isClaiming: C } = (0, r.cf)(
            [l.A],
            () => ({ isClaiming: l.A.isClaimingReward(E) || l.A.isFetchingRewardCode(E) }),
            [E],
        ),
        h = (0, a.ix)({
            quest: t,
            questContent: n,
            questContentPosition: _,
            questContentRowIndex: u,
            sourceQuestContent: o,
        });
    return (0, i.jsx)(s.$, {
        variant: "primary",
        fullWidth: !0,
        size: c,
        loading: C,
        onClick: h,
        text: d.intl.string(d.t.cfY4PE),
    });
};
