n.d(t, { A: () => d });
var i = n(627968),
    l = n(311907),
    a = n(821609),
    s = n(859703),
    r = n(201805),
    o = n(985018);
let d = function (e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: d,
            analyticsCtxQuestContentPosition: c,
            analyticsCtxQuestContentRowIndex: u,
            size: m,
        } = e,
        _ = t.id,
        { isClaiming: h } = (0, l.cf)(
            [s.A],
            () => ({ isClaiming: s.A.isClaimingReward(_) || s.A.isFetchingRewardCode(_) }),
            [_],
        ),
        p = (0, r.ix)({
            quest: t,
            questContent: n,
            questContentPosition: c,
            questContentRowIndex: u,
            sourceQuestContent: d,
        });
    return (0, i.jsx)(a.$, {
        variant: "primary",
        fullWidth: !0,
        size: m,
        loading: h,
        onClick: p,
        text: o.intl.string(o.t.cfY4PE),
    });
};
