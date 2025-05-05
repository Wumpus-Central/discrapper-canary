n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(230711),
    l = n(63063),
    a = n(74538),
    o = n(937615),
    c = n(981631),
    d = n(474936),
    u = n(388032),
    m = n(839058);
let g = function (e) {
    let { hasAppliedGuildBoosts: t, hasBoostPerk: n, hasGuildAffinitiesOrInGuild: g, subscriptionIsPausedOrPausePending: p } = e,
        { subtitle: h, flavor: f } = (function (e) {
            let { hasAppliedGuildBoosts: t, hasBoostPerk: n, hasGuildAffinitiesOrInGuild: i, subscriptionIsPausedOrPausePending: r } = e;
            if (r) return { flavor: u.intl.format(u.t.doslJi, { onClick: () => s.Z.open(c.oAB.SUBSCRIPTIONS) }) };
            if (!i) return { subtitle: u.intl.string(u.t.oiWYAQ) };
            if (t)
                return {
                    subtitle: u.intl.string(u.t.W5rDjY),
                    flavor: u.intl.format(u.t.cUHcaW, { helpdeskArticle: l.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS) })
                };
            let m = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
                g = a.ZP.getDefaultPrice(m.id, n),
                p = (0, o.og)((0, o.T4)(g.amount, g.currency), m.interval, m.intervalCount);
            return {
                subtitle: n ? u.intl.string(u.t.bhPzXV) : u.intl.string(u.t.Zs9h9f),
                flavor: u.intl.formatToPlainString(u.t.PGgTdH, { monthlyGuildBoostPrice: p })
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: g,
            subscriptionIsPausedOrPausePending: p
        });
    return (0, i.jsxs)('div', {
        className: m.wrapper,
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'heading-lg/bold',
                className: m.subtitle,
                children: h
            }),
            null != f &&
                (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    children: f
                })
        ]
    });
};
