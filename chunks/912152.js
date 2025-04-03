n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(230711),
    a = n(63063),
    l = n(74538),
    o = n(937615),
    c = n(981631),
    d = n(474936),
    u = n(388032),
    m = n(839058);
let g = function (e) {
    let { hasAppliedGuildBoosts: t, hasBoostPerk: n, hasGuildAffinitiesOrInGuild: g, subscriptionIsPausedOrPausePending: p } = e,
        { subtitle: h, flavor: f } = (function (e) {
            let { hasAppliedGuildBoosts: t, hasBoostPerk: n, hasGuildAffinitiesOrInGuild: r, subscriptionIsPausedOrPausePending: i } = e;
            if (i) return { flavor: u.NW.format(u.t.doslJi, { onClick: () => s.Z.open(c.oAB.SUBSCRIPTIONS) }) };
            if (!r) return { subtitle: u.NW.string(u.t.oiWYAQ) };
            if (t)
                return {
                    subtitle: u.NW.string(u.t.W5rDjY),
                    flavor: u.NW.format(u.t.cUHcaW, { helpdeskArticle: a.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS) })
                };
            let m = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
                g = l.ZP.getDefaultPrice(m.id, n),
                p = (0, o.og)((0, o.T4)(g.amount, g.currency), m.interval, m.intervalCount);
            return {
                subtitle: n ? u.NW.string(u.t.bhPzXV) : u.NW.string(u.t.Zs9h9f),
                flavor: u.NW.formatToPlainString(u.t.PGgTdH, { monthlyGuildBoostPrice: p })
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: g,
            subscriptionIsPausedOrPausePending: p
        });
    return (0, r.jsxs)('div', {
        className: m.wrapper,
        children: [
            (0, r.jsx)(i.X6q, {
                variant: 'heading-lg/bold',
                className: m.subtitle,
                children: h
            }),
            null != f &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    children: f
                })
        ]
    });
};
