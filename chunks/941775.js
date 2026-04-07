n.d(t, { A: () => d });
var i = n(627968),
    l = n(311907),
    s = n(397927),
    a = n(859703),
    r = n(201805),
    o = n(985018);
let d = function (e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: d,
            analyticsCtxQuestContentPosition: c,
            analyticsCtxQuestContentRowIndex: u,
            size: _,
        } = e,
        m = t.id,
        { isClaiming: h } = (0, l.cf)(
            [a.A],
            () => ({ isClaiming: a.A.isClaimingReward(m) || a.A.isFetchingRewardCode(m) }),
            [m],
        ),
        p = (0, r.ix)({
            quest: t,
            questContent: n,
            questContentPosition: c,
            questContentRowIndex: u,
            sourceQuestContent: d,
        });
    return (0, i.jsx)(s.Button, {
        variant: "primary",
        fullWidth: !0,
        size: _,
        loading: h,
        onClick: p,
        text: o.intl.string(o.t.cfY4PE),
    });
};
