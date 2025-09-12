n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(230711),
    o = n(63063),
    s = n(74538),
    l = n(937615),
    c = n(981631),
    u = n(474936),
    d = n(388032),
    f = n(137435);
function _(e) {
    let {
        hasAppliedGuildBoosts: t,
        hasBoostPerk: n,
        hasGuildAffinitiesOrInGuild: r,
        subscriptionIsPausedOrPausePending: i,
    } = e;
    if (i) return { flavor: d.intl.format(d.t.doslJi, { onClick: () => a.Z.open(c.oAB.SUBSCRIPTIONS) }) };
    if (!r) return { subtitle: d.intl.string(d.t.oiWYAQ) };
    if (t)
        return {
            subtitle: d.intl.string(d.t.W5rDjY),
            flavor: d.intl.format(d.t.cUHcaW, { helpdeskArticle: o.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS) }),
        };
    let f = u.GP[u.Xh.PREMIUM_MONTH_GUILD],
        _ = s.ZP.getDefaultPrice(f.id, n),
        p = (0, l.og)((0, l.T4)(_.amount, _.currency), f.interval, f.intervalCount);
    return {
        subtitle: n ? d.intl.string(d.t.bhPzXV) : d.intl.string(d.t.Zs9h9f),
        flavor: d.intl.formatToPlainString(d.t.PGgTdH, { monthlyGuildBoostPrice: p }),
    };
}
let p = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: a,
            subscriptionIsPausedOrPausePending: o,
        } = e,
        { subtitle: s, flavor: l } = _({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: a,
            subscriptionIsPausedOrPausePending: o,
        });
    return (0, r.jsxs)("div", {
        className: f.wrapper,
        children: [
            (0, r.jsx)(i.X6q, {
                variant: "heading-lg/bold",
                className: f.subtitle,
                children: s,
            }),
            null != l &&
                (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: l,
                }),
        ],
    });
};
