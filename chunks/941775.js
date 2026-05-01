n.d(e, { A: () => c });
var s = n(627968),
    i = n(17928),
    l = n(821609),
    a = n(859703),
    r = n(201805),
    o = n(985018);
let c = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: c,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: d,
            size: C,
        } = t,
        h = e.id,
        { isClaiming: A } = (0, i.cf)(
            [a.A],
            () => ({ isClaiming: a.A.isClaimingReward(h) || a.A.isFetchingRewardCode(h) }),
            [h],
        ),
        T = (0, r.ix)({
            quest: e,
            questContent: n,
            questContentPosition: u,
            questContentRowIndex: d,
            sourceQuestContent: c,
        });
    return (0, s.jsx)(l.$, {
        variant: "primary",
        fullWidth: !0,
        size: C,
        loading: A,
        onClick: T,
        text: o.intl.string(o.t.cfY4PE),
    });
};
