n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(481060),
    l = n(230711),
    r = n(63063),
    a = n(74538),
    o = n(937615),
    c = n(981631),
    d = n(474936),
    u = n(388032),
    h = n(130469);
let m = function (e) {
    let { hasAppliedGuildBoosts: t, hasBoostPerk: n, hasGuildAffinitiesOrInGuild: m, subscriptionIsPausedOrPausePending: g } = e,
        { subtitle: x, flavor: _ } = (function (e) {
            let { hasAppliedGuildBoosts: t, hasBoostPerk: n, hasGuildAffinitiesOrInGuild: i, subscriptionIsPausedOrPausePending: s } = e;
            if (s) return { flavor: u.intl.format(u.t.doslJi, { onClick: () => l.Z.open(c.oAB.SUBSCRIPTIONS) }) };
            if (!i) return { subtitle: u.intl.string(u.t.oiWYAQ) };
            if (t)
                return {
                    subtitle: u.intl.string(u.t.W5rDjY),
                    flavor: u.intl.format(u.t.cUHcaW, { helpdeskArticle: r.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS) })
                };
            let h = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
                m = a.ZP.getDefaultPrice(h.id, n),
                g = (0, o.og)((0, o.T4)(m.amount, m.currency), h.interval, h.intervalCount);
            return {
                subtitle: n ? u.intl.string(u.t.bhPzXV) : u.intl.string(u.t.Zs9h9f),
                flavor: u.intl.formatToPlainString(u.t.PGgTdH, { monthlyGuildBoostPrice: g })
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: m,
            subscriptionIsPausedOrPausePending: g
        });
    return (0, i.jsxs)('div', {
        className: h.wrapper,
        children: [
            (0, i.jsx)(s.X6q, {
                variant: 'heading-lg/bold',
                className: h.subtitle,
                children: x
            }),
            null != _ &&
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    children: _
                })
        ]
    });
};
