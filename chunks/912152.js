n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(63063),
    o = n(74538),
    s = n(937615),
    l = n(313789),
    c = n(947889),
    u = n(981631),
    d = n(474936),
    f = n(388032),
    _ = n(137435);
function p(e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: r,
            subscriptionIsPausedOrPausePending: i,
        } = e,
        _ = (0, c.Z)();
    if (i)
        return {
            flavor: f.intl.format(f.t.doslJi, {
                onClick: () => _(l.n.SUBSCRIPTIONS_PANEL, { section: u.oAB.SUBSCRIPTIONS }),
            }),
        };
    if (!r) return { subtitle: f.intl.string(f.t.oiWYAQ) };
    if (t)
        return {
            subtitle: f.intl.string(f.t.W5rDjY),
            flavor: f.intl.format(f.t.cUHcaW, { helpdeskArticle: a.Z.getArticleURL(u.BhN.GUILD_SUBSCRIPTIONS) }),
        };
    let p = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
        h = o.ZP.getDefaultPrice(p.id, n),
        m = (0, s.og)((0, s.T4)(h.amount, h.currency), p.interval, p.intervalCount);
    return {
        subtitle: n ? f.intl.string(f.t.bhPzXV) : f.intl.string(f.t.Zs9h9f),
        flavor: f.intl.formatToPlainString(f.t.PGgTdH, { monthlyGuildBoostPrice: m }),
    };
}
let h = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: a,
            subscriptionIsPausedOrPausePending: o,
        } = e,
        { subtitle: s, flavor: l } = p({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: a,
            subscriptionIsPausedOrPausePending: o,
        });
    return (0, r.jsxs)("div", {
        className: _.wrapper,
        children: [
            (0, r.jsx)(i.X6q, {
                variant: "heading-lg/bold",
                className: _.subtitle,
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
