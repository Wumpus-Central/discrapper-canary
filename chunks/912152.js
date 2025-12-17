n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(63063),
    o = n(74538),
    s = n(937615),
    l = n(313789),
    c = n(518596),
    u = n(981631),
    d = n(474936),
    f = n(388032),
    p = n(923540);
function _(e) {
    let {
        hasAppliedGuildBoosts: t,
        hasBoostPerk: n,
        hasGuildAffinitiesOrInGuild: r,
        subscriptionIsPausedOrPausePending: i,
    } = e;
    if (i)
        return {
            flavor: f.intl.format(f.t.doslJu, {
                onClick: () => (0, c.openUserSettings)(l.n.SUBSCRIPTIONS_PANEL, { section: u.oAB.SUBSCRIPTIONS }),
            }),
        };
    if (!r) return { subtitle: f.intl.string(f.t.oiWYAc) };
    if (t)
        return {
            subtitle: f.intl.string(f.t.W5rDjW),
            flavor: f.intl.format(f.t.cUHcaQ, { helpdeskArticle: a.Z.getArticleURL(u.BhN.GUILD_SUBSCRIPTIONS) }),
        };
    let p = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
        _ = o.ZP.getDefaultPrice(p.id, n),
        m = (0, s.og)((0, s.T4)(_.amount, _.currency), p.interval, p.intervalCount);
    return {
        subtitle: n ? f.intl.string(f.t.bhPzXR) : f.intl.string(f.t.Zs9h9Z),
        flavor: f.intl.formatToPlainString(f.t.PGgTdA, { monthlyGuildBoostPrice: m }),
    };
}
let m = function (e) {
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
        className: p.wrapper,
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-lg/bold",
                className: p.subtitle,
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
